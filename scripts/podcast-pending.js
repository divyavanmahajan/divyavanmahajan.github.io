#!/usr/bin/env node
/**
 * podcast-pending.js
 *
 * Lists podcast episodes in the blog wiki repo that do not yet have a summary
 * in the staging folder (podcast-summaries/<show>/). Read only: it never
 * writes anywhere, and in particular never touches the wiki repo.
 *
 * Usage:
 *   node scripts/podcast-pending.js                       # all shows, latest 3 each
 *   node scripts/podcast-pending.js --show latent-space --latest 5
 *   node scripts/podcast-pending.js --since 2026-11-01    # all since a date
 *   node scripts/podcast-pending.js --json                # machine-readable
 *
 * Env: PODCAST_WIKI_DIR (default /Users/divya/projects/wiki/blog),
 *      PODCAST_SUMMARIES_DIR (default <repo>/podcast-summaries)
 */

import fs from 'fs';
import path from 'path';
import { podcastShows, podcastShowSlugs } from '../src/podcast-shows.mjs';

const projectRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const WIKI_ROOT = process.env.PODCAST_WIKI_DIR || '/Users/divya/projects/wiki/blog';
const STAGING_ROOT = process.env.PODCAST_SUMMARIES_DIR || path.join(projectRoot, 'podcast-summaries');

const args = process.argv.slice(2);
const opt = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : null;
};
const ONLY_SHOW = opt('--show');
const SINCE = opt('--since');
const LATEST = SINCE ? Infinity : Number(opt('--latest') || 3);
const JSON_OUT = args.includes('--json');

if (ONLY_SHOW && !podcastShowSlugs.includes(ONLY_SHOW)) {
  console.error(`Unknown show "${ONLY_SHOW}". Known: ${podcastShowSlugs.join(', ')}`);
  process.exit(1);
}

const FILE_RE = /^(\d{4}-\d{2}-\d{2})-.+\.md$/;

function transcripts(show) {
  const root = path.join(WIKI_ROOT, show, 'episodes');
  const out = [];
  const walk = (d) => {
    if (!fs.existsSync(d)) return;
    for (const e of fs.readdirSync(d)) {
      const p = path.join(d, e);
      if (fs.statSync(p).isDirectory()) walk(p);
      else if (FILE_RE.test(e)) out.push(p);
    }
  };
  walk(root);
  return out.sort((a, b) => path.basename(b).localeCompare(path.basename(a))); // newest first
}

const result = [];
for (const show of podcastShows) {
  if (ONLY_SHOW && show.slug !== ONLY_SHOW) continue;
  let eps = transcripts(show.slug);
  if (SINCE) eps = eps.filter((p) => path.basename(p).slice(0, 10) >= SINCE);
  eps = eps.slice(0, LATEST);
  for (const p of eps) {
    const base = path.basename(p);
    const staged = path.join(STAGING_ROOT, show.slug, base);
    if (fs.existsSync(staged)) continue;
    const text = fs.readFileSync(p, 'utf8');
    result.push({
      show: show.slug,
      date: base.slice(0, 10),
      transcript: p,
      source_transcript: path.relative(WIKI_ROOT, p),
      staging: staged,
      words: text.split(/\s+/).length,
      hasTranscript: /^## Transcript/m.test(text),
    });
  }
}

if (JSON_OUT) {
  console.log(JSON.stringify(result, null, 2));
} else if (result.length === 0) {
  console.log('Nothing pending.');
} else {
  for (const r of result) {
    console.log(`${r.show}\t${r.date}\t${r.words} words${r.hasTranscript ? '' : '\tNO TRANSCRIPT SECTION'}`);
    console.log(`  in : ${r.transcript}`);
    console.log(`  out: ${path.relative(projectRoot, r.staging)}`);
  }
}
