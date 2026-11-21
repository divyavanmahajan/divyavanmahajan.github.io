#!/usr/bin/env node
/**
 * sync-podcasts.js
 *
 * Syncs podcast episode SUMMARIES from the staging folder into the blog's
 * `podcasts` content collection. Analogous to sync-ainews.js, but completely
 * separate from it: it never reads ai-update/notes and never writes to
 * src/content/ainews/.
 *
 * Source (staging, written by an agent following
 * scripts/PODCAST_SUMMARY_INSTRUCTIONS.md):
 *   podcast-summaries/<show>/YYYY-MM-DD-<slug>.md
 *   (override the root with PODCAST_SUMMARIES_DIR=/some/dir)
 *
 * Destination:
 *   src/content/podcasts/<show>/YYYY/MM/<slug>.md
 *   -> published at /podcasts/<show>/YYYY/MM/<slug>/
 *
 * Usage:
 *   node scripts/sync-podcasts.js                 # sync all shows
 *   node scripts/sync-podcasts.js --show dwarkesh # one show
 *   node scripts/sync-podcasts.js --dry-run       # validate + report only
 *   node scripts/sync-podcasts.js --prune         # also delete published
 *                                                 # files with no staging file
 *
 * Unlike sync-ainews.js this script does NOT `git add` anything: the blog repo
 * may hold staged AIDB files from another workflow, so committing is left to
 * the caller with explicit pathspecs.
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { createRequire } from 'module';
import { podcastShows, podcastShowSlugs } from '../src/podcast-shows.mjs';

const require = createRequire(import.meta.url);
const matter = require('gray-matter');

const projectRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const STAGING_ROOT = process.env.PODCAST_SUMMARIES_DIR || path.join(projectRoot, 'podcast-summaries');
const DEST_ROOT = path.join(projectRoot, 'src', 'content', 'podcasts');

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const PRUNE = args.includes('--prune');
const showIdx = args.indexOf('--show');
const ONLY_SHOW = showIdx >= 0 ? args[showIdx + 1] : null;

if (ONLY_SHOW && !podcastShowSlugs.includes(ONLY_SHOW)) {
  console.error(`Unknown show "${ONLY_SHOW}". Known: ${podcastShowSlugs.join(', ')}`);
  process.exit(1);
}
if (DRY_RUN) console.log('[DRY RUN] No files will be written.\n');

const FILENAME_RE = /^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/;
const REQUIRED_SECTIONS = ['## Thesis', '## Key points'];
const MAX_QUOTES = 2;
const MAX_BODY_WORDS = 600; // hard ceiling; target is 200-400 (copyright)

const md5 = (s) => crypto.createHash('md5').update(s, 'utf8').digest('hex');

function toDateString(value) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value ?? '');
}

/** Validate a staging file; returns a list of problems (empty = OK). */
function validate(show, basename, data, body, meta) {
  const problems = [];
  for (const key of ['title', 'date', 'show', 'url', 'description']) {
    if (data[key] === undefined || data[key] === null || data[key] === '') problems.push(`missing frontmatter "${key}"`);
  }
  if (data.show && data.show !== show) problems.push(`show "${data.show}" does not match folder "${show}"`);
  if (data.date && toDateString(data.date) !== meta.date) problems.push(`date ${toDateString(data.date)} does not match filename date ${meta.date}`);
  for (const section of REQUIRED_SECTIONS) {
    if (!body.includes(section)) problems.push(`missing section "${section}"`);
  }
  const quotes = (body.match(/^>\s*"/gm) || []).length;
  if (quotes > MAX_QUOTES) problems.push(`${quotes} quotes (max ${MAX_QUOTES})`);
  const words = body.split(/\s+/).filter(Boolean).length;
  if (words > MAX_BODY_WORDS) problems.push(`body has ${words} words (max ${MAX_BODY_WORDS}); summarise, do not reproduce`);
  if (/^## Transcript/m.test(body)) problems.push('contains a "## Transcript" section');
  return problems;
}

function transformFrontmatter(data, meta, show) {
  const out = {
    title: data.title,
    description: data.description,
    pubDate: meta.date,
    show,
  };
  if (Number.isFinite(Number(data.episode)) && data.episode !== null && data.episode !== undefined) out.episode = Number(data.episode);
  out.url = data.url;
  if (data.youtube) out.youtube = data.youtube;
  if (data.duration_min) out.durationMin = Number(data.duration_min);
  out.hosts = data.hosts || [];
  out.guests = data.guests || [];
  out.tags = data.tags || [];
  out.draft = data.draft === true;
  // source_transcript, audio_url and any other private/working fields are dropped.
  return out;
}

function listMarkdown(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md') && !f.startsWith('.') && f !== 'README.md').sort();
}

function listPublished(showDir) {
  const out = [];
  if (!fs.existsSync(showDir)) return out;
  const walk = (d) => {
    for (const e of fs.readdirSync(d)) {
      const p = path.join(d, e);
      if (fs.statSync(p).isDirectory()) walk(p);
      else if (e.endsWith('.md')) out.push(p);
    }
  };
  walk(showDir);
  return out;
}

const counts = { new: 0, updated: 0, unchanged: 0, invalid: 0, pruned: 0 };

function syncShow(show) {
  const srcDir = path.join(STAGING_ROOT, show.slug);
  const files = listMarkdown(srcDir);
  console.log(`${show.name} (${show.slug}): ${files.length} staged summaries`);
  const expected = new Set();

  for (const basename of files) {
    const m = basename.match(FILENAME_RE);
    if (!m) {
      console.warn(`  [SKIP] cannot parse filename: ${basename}`);
      counts.invalid++;
      continue;
    }
    const [, year, month, day, slug] = m;
    const meta = { date: `${year}-${month}-${day}`, year, month, slug };
    const { data, content } = matter(fs.readFileSync(path.join(srcDir, basename), 'utf8'));

    const problems = validate(show.slug, basename, data, content, meta);
    if (problems.length) {
      console.warn(`  [INVALID] ${basename}\n    - ${problems.join('\n    - ')}`);
      counts.invalid++;
      continue;
    }

    const output = matter.stringify(content.trim() + '\n', transformFrontmatter(data, meta, show.slug));
    const destPath = path.join(DEST_ROOT, show.slug, year, month, `${slug}.md`);
    expected.add(destPath);

    const existing = fs.existsSync(destPath) ? md5(fs.readFileSync(destPath, 'utf8')) : null;
    const status = existing === null ? 'new' : existing !== md5(output) ? 'updated' : 'unchanged';
    counts[status]++;
    if (status !== 'unchanged') console.log(`  [${status.toUpperCase()}] ${path.relative(projectRoot, destPath)}`);
    if (!DRY_RUN && status !== 'unchanged') {
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.writeFileSync(destPath, output, 'utf8');
    }
  }

  for (const published of listPublished(path.join(DEST_ROOT, show.slug))) {
    if (expected.has(published)) continue;
    const rel = path.relative(projectRoot, published);
    if (PRUNE) {
      console.log(`  [PRUNE] ${rel}`);
      if (!DRY_RUN) fs.unlinkSync(published);
      counts.pruned++;
    } else {
      console.log(`  [ORPHAN] ${rel} (no staging file; use --prune to delete)`);
    }
  }
}

function main() {
  if (!fs.existsSync(STAGING_ROOT)) {
    console.error(`Staging folder not found: ${STAGING_ROOT}`);
    process.exit(1);
  }
  for (const show of podcastShows) {
    if (ONLY_SHOW && show.slug !== ONLY_SHOW) continue;
    syncShow(show);
  }
  console.log(`\n${counts.new} new, ${counts.updated} updated, ${counts.unchanged} unchanged, ${counts.invalid} invalid, ${counts.pruned} pruned.`);
  if (DRY_RUN) console.log('[DRY RUN] No files were written.');
  if (counts.invalid > 0) process.exitCode = 2;
}

main();
