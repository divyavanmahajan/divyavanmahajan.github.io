// Shared episode collection for the cross-show podcast pages: the monthly digest
// (scripts/podcast-digest.mjs) and the daily summary (scripts/podcast-daily.mjs).
//
// Reads (never writes) the blog wiki $PODCAST_WIKI (default ~/projects/wiki/blog):
//   <WIKI>/episodes/YYYY/MM/YYYY-MM-DD-slug.md            AIDB (show key "aidb")
//   <WIKI>/<show>/episodes/YYYY/MM/YYYY-MM-DD-slug.md     shows in src/podcast-shows.mjs
//   .../extractions/<YYYY-MM-DD-slug>.json                "summary" + central entities/concepts
// Summary fallbacks: extraction summary -> podcast-digests/summaries.json (and the Hermes
// cache) -> the published blog summary's description -> the publisher's show notes.

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { podcastShows } from '../../src/podcast-shows.mjs';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..');
export const WIKI = process.env.PODCAST_WIKI || path.join(os.homedir(), 'projects/wiki/blog');
export const DIGEST_STAGE = path.join(ROOT, 'podcast-digests');
const EXTRA = path.join(DIGEST_STAGE, 'summaries.json');
const HERMES_CACHE = path.join(os.homedir(), '.hermes/data/podcast-digest/summaries.json');
const EXCLUDE = new Set(['2026-05-27-topics', '2026-05-30-openclaw-berlin-intro']);

/** Show key -> display name. AIDB ("aidb") + every show in the registry. */
export const SHOW_NAMES = {
  aidb: 'The AI Daily Brief',
  ...Object.fromEntries(podcastShows.map((s) => [s.slug, s.name])),
};

export const readJson = (p, d) => { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return d; } };

export function frontmatter(file) {
  const txt = fs.readFileSync(file, 'utf8').slice(0, 6000);
  const m = txt.match(/^---\n([\s\S]*?)\n---/);
  const fm = {};
  if (!m) return fm;
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i < 0 || line.startsWith(' ')) continue;
    const k = line.slice(0, i).trim();
    let v = line.slice(i + 1).trim();
    if (v.startsWith('[') && v.endsWith(']')) {
      v = v.slice(1, -1).split(',').map((x) => x.trim().replace(/^"|"$/g, '')).filter(Boolean);
    } else v = v.replace(/^"|"$/g, '');
    fm[k] = v;
  }
  return fm;
}

export function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out); else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

/** [showKey, wikiRoot] for AIDB + every registered show that has a wiki folder. */
export function showDirs() {
  const dirs = [['aidb', WIKI]];
  for (const s of podcastShows) {
    if (fs.existsSync(path.join(WIKI, s.slug, 'episodes'))) dirs.push([s.slug, path.join(WIKI, s.slug)]);
  }
  return dirs;
}

export function blogDescription(show, slug) {
  const [y, m] = [slug.slice(0, 4), slug.slice(5, 7)];
  const rest = slug.slice(11);
  const f = show === 'aidb'
    ? path.join(ROOT, 'src/content/ainews', y, m, rest + '.md')
    : path.join(ROOT, 'src/content/podcasts', show, y, m, rest + '.md');
  if (!fs.existsSync(f)) return null;
  const t = fs.readFileSync(f, 'utf8');
  const m2 = t.match(/^description:\s*(>-?\n((?:\s{2}.*\n?)+)|'(.*)'|"(.*)"|(.*))$/m);
  if (!m2) return null;
  const d = (m2[2] ? m2[2].split('\n').map((s) => s.trim()).join(' ') : (m2[3] || m2[4] || m2[5] || '')).trim();
  return d || null;
}

export function showNotes(file) {
  const t = fs.readFileSync(file, 'utf8');
  const m = t.match(/\n## Show notes\n+([\s\S]*?)(?=\n## |$)/);
  if (!m) return null;
  let s = m[1].replace(/\[Full show notes[^\]]*\]\([^)]*\)/g, '').replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\s+/g, ' ').trim();
  if (s.length < 40) return null;
  const words = s.split(' ');
  if (words.length > 70) s = words.slice(0, 70).join(' ').replace(/[,;:]?$/, '') + ' …';
  return s;
}

/** Central entities/concepts of an extraction with a few claims each (for theme packs). */
function centralItems(ex, maxItems = 6, maxClaims = 2) {
  const items = [...(ex?.entities || []), ...(ex?.concepts || [])].filter((x) => x.role === 'central');
  return items.slice(0, maxItems).map((x) => ({
    name: x.name,
    claims: (x.claims || []).slice(0, maxClaims).map((c) => c.claim).filter(Boolean),
  }));
}

/**
 * Every episode whose filename date starts with `prefix` ("YYYY-MM" or "YYYY-MM-DD"),
 * newest first. With { central: true } each episode also gets `central` (extraction items).
 */
export function collectEpisodes(prefix, { central = false } = {}) {
  const extra = { ...readJson(HERMES_CACHE, {}), ...readJson(EXTRA, {}) };
  const y = prefix.slice(0, 4), m = prefix.slice(5, 7);
  const eps = [];
  for (const [show, root] of showDirs()) {
    for (const p of walk(path.join(root, 'episodes', y, m))) {
      const slug = path.basename(p, '.md');
      if (!slug.startsWith(prefix) || EXCLUDE.has(slug) || !/^\d{4}-\d\d-\d\d-/.test(slug)) continue;
      const fm = frontmatter(p);
      const key = `${show}/${slug}`;
      let summary = null, source = null, partial = false;
      const ex = readJson(path.join(root, 'extractions', slug + '.json'), null);
      if (ex?.summary) { summary = ex.summary; source = 'extraction'; partial = !!ex.partial; }
      if (!summary && extra[key]) { summary = extra[key]; source = 'digest'; }
      if (!summary) { const d = blogDescription(show, slug); if (d) { summary = d; source = 'blog'; } }
      // Last resort: the publisher's own show notes (bio episodes are refused by the
      // summarising model, so they often have no extraction or blog summary).
      if (!summary) { const d = showNotes(p); if (d) { summary = d; source = 'show-notes'; } }
      const guests = Array.isArray(fm.guests) ? fm.guests.filter((g) => !/^see title$/i.test(g)) : [];
      const ep = {
        key, show, showName: fm.show || SHOW_NAMES[show] || show, date: slug.slice(0, 10),
        slug: slug.slice(11), title: fm.title || slug, url: fm.url || null, youtube: fm.youtube || null,
        guests, durationMin: fm.duration_min ? Number(fm.duration_min) || null : null,
        summary, summarySource: source, partial,
      };
      if (central) ep.central = centralItems(ex);
      eps.push(ep);
    }
  }
  return eps.sort((a, b) => b.date.localeCompare(a.date) || a.key.localeCompare(b.key));
}

/** Resolve "<show>/<date>[-slug-prefix]" refs to episode keys. */
export function resolveRefs(eps, refs) {
  const out = [], bad = [];
  for (const r of refs) {
    const hit = eps.filter((e) => e.key.startsWith(r));
    if (!hit.length) bad.push(r);
    for (const e of hit) if (!out.includes(e.key)) out.push(e.key);
  }
  return { keys: out, bad };
}
