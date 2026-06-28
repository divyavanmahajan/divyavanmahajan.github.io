#!/usr/bin/env node
/**
 * sync-ainews.js
 *
 * Syncs AI news content from the Volvo AI update source directory into the
 * blog's ainews content collection.
 *
 * Source:
 *   /Users/divya/projects/volvo/ai-update/done/*_instructions.md  → episodes
 *   /Users/divya/projects/volvo/ai-update/done/briefing/*-ai-synthesis.md → synthesis
 *
 * Destination:
 *   src/content/ainews/YYYY/MM/<short-slug>.md  (episodes)
 *   src/content/ainews/briefing/YYYY-MM-ai-synthesis.md  (synthesis)
 *
 * Usage:
 *   node scripts/sync-ainews.js           # normal run
 *   node scripts/sync-ainews.js --dry-run # show what would change, no writes
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { execSync } from 'child_process';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const matter = require('gray-matter');

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------
const projectRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SOURCE_DIR = '/Users/divya/projects/volvo/ai-update/done';
const BRIEFING_SUBDIR = path.join(SOURCE_DIR, 'briefing');
const DEST_AINEWS_DIR = path.join(projectRoot, 'src', 'content', 'ainews');
const DEST_BRIEFING_DIR = path.join(DEST_AINEWS_DIR, 'briefing');

// ---------------------------------------------------------------------------
// CLI flags
// ---------------------------------------------------------------------------
const DRY_RUN = process.argv.includes('--dry-run');

if (DRY_RUN) {
  console.log('[DRY RUN] No files will be written or committed.\n');
}

// ---------------------------------------------------------------------------
// Exclusion rules
// ---------------------------------------------------------------------------
const EXCLUDED_PATTERNS = [
  /ceo-briefing/i,
  /cio-brief/i,
];
const EXCLUDED_EXTENSIONS = ['.pptx', '.m4a', '.txt'];
const EXCLUDED_SUBDIRS = ['.claude', '.annual'];
const MAX_FILE_SIZE_BYTES = 500 * 1024; // 500 KB

function isExcluded(filePath) {
  const basename = path.basename(filePath);
  const ext = path.extname(filePath).toLowerCase();

  // Extension check
  if (EXCLUDED_EXTENSIONS.includes(ext)) return true;

  // Pattern check (ceo-briefing, cio-brief)
  if (EXCLUDED_PATTERNS.some(re => re.test(basename))) return true;

  // Size check
  try {
    const stat = fs.statSync(filePath);
    if (stat.size > MAX_FILE_SIZE_BYTES) return true;
  } catch {
    return true; // can't stat → skip
  }

  return false;
}

// ---------------------------------------------------------------------------
// File discovery
// ---------------------------------------------------------------------------

/**
 * Recursively collect files matching a predicate, skipping hidden/excluded dirs.
 */
function collectFiles(dir, predicate, results = []) {
  if (!fs.existsSync(dir)) return results;

  for (const entry of fs.readdirSync(dir)) {
    // Skip hidden directories and known excluded subdirs
    if (entry.startsWith('.')) continue;
    if (EXCLUDED_SUBDIRS.includes(entry)) continue;

    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      collectFiles(fullPath, predicate, results);
    } else if (predicate(entry, fullPath)) {
      results.push(fullPath);
    }
  }
  return results;
}

function discoverEpisodes() {
  // Only scan the top-level done/ dir (not briefing/ subdir) for _instructions.md
  const results = [];
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
  }
  for (const entry of fs.readdirSync(SOURCE_DIR)) {
    if (entry.startsWith('.')) continue;
    const fullPath = path.join(SOURCE_DIR, entry);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) continue; // skip subdirs (briefing handled separately)
    if (entry.endsWith('_instructions.md') && !isExcluded(fullPath)) {
      results.push(fullPath);
    }
  }
  return results;
}

function discoverSynthesis() {
  if (!fs.existsSync(BRIEFING_SUBDIR)) return [];
  return collectFiles(
    BRIEFING_SUBDIR,
    (name, fullPath) => name.endsWith('-ai-synthesis.md') && !isExcluded(fullPath)
  );
}

// ---------------------------------------------------------------------------
// Filename → metadata
// ---------------------------------------------------------------------------

// Episode: YYYY-MM-DD-slug-words_instructions.md
const EPISODE_FILENAME_RE = /^(\d{4})-(\d{2})-(\d{2})-(.+)_instructions\.md$/;

function parseEpisodeFilename(basename) {
  const m = basename.match(EPISODE_FILENAME_RE);
  if (!m) return null;
  const [, year, month, day, slugPart] = m;
  return {
    date: `${year}-${month}-${day}`,
    year,
    month,
    shortSlug: slugPart,
  };
}

// Synthesis: YYYY-MM-ai-synthesis.md (monthly) or YYYY-ai-synthesis.md (annual)
const SYNTHESIS_MONTHLY_RE = /^(\d{4})-(\d{2})-ai-synthesis\.md$/;
const SYNTHESIS_ANNUAL_RE  = /^(\d{4})-ai-synthesis\.md$/;

function parseSynthesisFilename(basename) {
  const monthly = basename.match(SYNTHESIS_MONTHLY_RE);
  if (monthly) {
    const [, year, month] = monthly;
    return { year, month, isAnnual: false };
  }
  const annual = basename.match(SYNTHESIS_ANNUAL_RE);
  if (annual) {
    const [, year] = annual;
    return { year, month: null, isAnnual: true };
  }
  return null;
}

// ---------------------------------------------------------------------------
// Frontmatter transformation
// ---------------------------------------------------------------------------

const EPISODE_KEEP_FIELDS = new Set(['title', 'description', 'tags', 'url', 'draft']);
const SYNTHESIS_DROP_FIELDS = new Set(['period', 'audience', 'created', 'status', 'type', 'date']);

function transformEpisodeFrontmatter(data, meta) {
  const out = {};

  // Required renames / additions
  out.title = data.title || '';
  if (data.description !== undefined && data.description !== null) out.description = data.description;
  out.pubDate = data.date || data.pubDate || meta.date;
  out.type = 'episode';

  // Keep allowed fields (excluding ones already handled above), skip null values
  for (const key of EPISODE_KEEP_FIELDS) {
    if (key === 'title' || key === 'description') continue; // already set
    if (data[key] !== undefined && data[key] !== null) {
      out[key] = data[key];
    }
  }

  return out;
}

function transformSynthesisFrontmatter(data, meta) {
  const out = {};

  out.title = data.title || '';
  if (data.description !== undefined && data.description !== null) out.description = data.description;
  out.pubDate = data.date || data.pubDate || (meta.isAnnual ? `${meta.year}-12-31` : `${meta.year}-${meta.month}-01`);
  out.type = meta.isAnnual ? 'annual-synthesis' : 'synthesis';
  out.tags = data.tags || [];
  if (data.draft !== undefined) out.draft = data.draft;

  return out;
}

// ---------------------------------------------------------------------------
// Wiki-link transformation
// ---------------------------------------------------------------------------

/**
 * Transform [[../YYYY-MM-DD-slug_instructions]] or [[../YYYY-MM-DD-slug]]
 * → [short-slug](/ainews/YYYY/MM/short-slug)
 */
const EPISODE_WIKILINK_RE = /\[\[\.\.\/(\d{4})-(\d{2})-(\d{2})-([\w-]+?)(?:_instructions)?\]\]/g;

/**
 * Transform [[YYYY-MM-type]] briefing links (no ../ prefix)
 * → [YYYY-MM-type](/ainews/briefing/YYYY-MM-type)
 */
const BRIEFING_WIKILINK_RE = /\[\[(\d{4}-\d{2}-[\w-]+)\]\]/g;

/**
 * Transform [[some-topic]] plain wiki links (no date, no ../)
 * → some-topic (strip brackets, no link)
 */
const PLAIN_WIKILINK_RE = /\[\[([^\]]+)\]\]/g;

function transformWikilinks(content) {
  // 1. Episode links: [[../YYYY-MM-DD-slug_instructions]] or [[../YYYY-MM-DD-slug]]
  content = content.replace(EPISODE_WIKILINK_RE, (_, year, month, _day, slugPart) => {
    const shortSlug = slugPart;
    return `[${shortSlug}](/ainews/${year}/${month}/${shortSlug})`;
  });

  // 2. Briefing links: [[YYYY-MM-type]]
  content = content.replace(BRIEFING_WIKILINK_RE, (_, ref) => {
    return `[${ref}](/ainews/briefing/${ref})`;
  });

  // 3. Plain wiki-links: [[some-topic]] → some-topic
  content = content.replace(PLAIN_WIKILINK_RE, (_, text) => text);

  return content;
}

// ---------------------------------------------------------------------------
// Hash utility for change detection
// ---------------------------------------------------------------------------

function md5(str) {
  return crypto.createHash('md5').update(str, 'utf8').digest('hex');
}

function fileHash(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return md5(fs.readFileSync(filePath, 'utf8'));
}

// ---------------------------------------------------------------------------
// Output file writing
// ---------------------------------------------------------------------------

/**
 * Stringify frontmatter back to YAML manually using gray-matter's stringify.
 * gray-matter.stringify(content, data) produces the full file string.
 */
function buildOutputFile(frontmatter, body) {
  return matter.stringify(body.trim(), frontmatter);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    if (!DRY_RUN) fs.mkdirSync(dir, { recursive: true });
  }
}

// ---------------------------------------------------------------------------
// Counters
// ---------------------------------------------------------------------------
let episodeCount = 0;
let synthesisCount = 0;
let newCount = 0;
let updatedCount = 0;
let unchangedCount = 0;

// ---------------------------------------------------------------------------
// Process episodes
// ---------------------------------------------------------------------------

function processEpisode(srcPath) {
  const basename = path.basename(srcPath);
  const meta = parseEpisodeFilename(basename);
  if (!meta) {
    console.warn(`  [SKIP] Cannot parse episode filename: ${basename}`);
    return;
  }

  const raw = fs.readFileSync(srcPath, 'utf8');
  const { data, content } = matter(raw);

  const frontmatter = transformEpisodeFrontmatter(data, meta);
  const transformedBody = transformWikilinks(content);
  const outputContent = buildOutputFile(frontmatter, transformedBody);

  const destDir = path.join(DEST_AINEWS_DIR, meta.year, meta.month);
  const destPath = path.join(destDir, `${meta.shortSlug}.md`);

  const existingHash = fileHash(destPath);
  const newHash = md5(outputContent);
  const isNew = existingHash === null;
  const isChanged = !isNew && existingHash !== newHash;

  if (DRY_RUN) {
    const status = isNew ? 'NEW' : isChanged ? 'UPDATED' : 'unchanged';
    console.log(`  [${status}] ${path.relative(projectRoot, destPath)}`);
  } else {
    ensureDir(destDir);
    fs.writeFileSync(destPath, outputContent, 'utf8');
  }

  if (isNew) newCount++;
  else if (isChanged) updatedCount++;
  else unchangedCount++;

  episodeCount++;
}

// ---------------------------------------------------------------------------
// Process synthesis
// ---------------------------------------------------------------------------

function processSynthesis(srcPath) {
  const basename = path.basename(srcPath);
  const meta = parseSynthesisFilename(basename);
  if (!meta) {
    console.warn(`  [SKIP] Cannot parse synthesis filename: ${basename}`);
    return;
  }

  const raw = fs.readFileSync(srcPath, 'utf8');
  const { data, content } = matter(raw);

  const frontmatter = transformSynthesisFrontmatter(data, meta);
  const transformedBody = transformWikilinks(content);
  const outputContent = buildOutputFile(frontmatter, transformedBody);

  const destPath = path.join(DEST_BRIEFING_DIR, basename);

  const existingHash = fileHash(destPath);
  const newHash = md5(outputContent);
  const isNew = existingHash === null;
  const isChanged = !isNew && existingHash !== newHash;

  if (DRY_RUN) {
    const status = isNew ? 'NEW' : isChanged ? 'UPDATED' : 'unchanged';
    console.log(`  [${status}] ${path.relative(projectRoot, destPath)}`);
  } else {
    ensureDir(DEST_BRIEFING_DIR);
    fs.writeFileSync(destPath, outputContent, 'utf8');
  }

  if (isNew) newCount++;
  else if (isChanged) updatedCount++;
  else unchangedCount++;

  synthesisCount++;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  console.log('Scanning source directory for episodes...');
  const episodes = discoverEpisodes();
  console.log(`  Found ${episodes.length} episode files.`);

  console.log('Scanning briefing directory for synthesis files...');
  const syntheses = discoverSynthesis();
  console.log(`  Found ${syntheses.length} synthesis files.\n`);

  if (episodes.length > 0) {
    console.log('Processing episodes:');
    for (const ep of episodes) {
      processEpisode(ep);
    }
  }

  if (syntheses.length > 0) {
    console.log('\nProcessing synthesis files:');
    for (const syn of syntheses) {
      processSynthesis(syn);
    }
  }

  console.log(`\nSynced ${episodeCount} episodes, ${synthesisCount} synthesis files.`);
  console.log(`  ${newCount} new, ${updatedCount} updated, ${unchangedCount} unchanged.`);

  if (DRY_RUN) {
    console.log('\n[DRY RUN] No files were written.');
    return;
  }

  // Stage any changed ainews files so they're included in the current commit.
  // We intentionally do NOT run git commit here: if called from a pre-commit
  // hook, doing so would recurse infinitely. Callers are responsible for
  // committing (the hook's parent commit, or a manual `git commit` after a
  // standalone run).
  try {
    execSync('git add src/content/ainews/', { cwd: projectRoot, stdio: 'pipe' });
  } catch (err) {
    console.error('Git add failed:', err.message);
    process.exit(1);
  }
}

main();
