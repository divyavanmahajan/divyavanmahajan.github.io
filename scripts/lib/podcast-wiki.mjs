/**
 * Shared helpers for the podcast topic/periodic scripts (build-podcast-tags.mjs,
 * podcast-periodic-pack.mjs, podcast-periodic-status.mjs, sync-podcasts.js).
 *
 * Reads (never writes) the blog wiki's LLM-wiki layer:
 *   <WIKI>/extractions/<YYYY-MM-DD-slug>.json          (AIDB)
 *   <WIKI>/<show>/extractions/<YYYY-MM-DD-slug>.json   (other shows; basename = staging basename)
 *   <WIKI>/scripts/wiki_aliases.json                   (canonical names)
 * and the staging summaries in podcast-summaries/<show>/.
 *
 * Only local scripts use this; the GitHub Actions build never reads the wiki
 * (everything the site needs is generated into src/data/ or content files).
 */
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
export const matter = require('gray-matter');

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..');
export const WIKI = process.env.PODCAST_WIKI_DIR || '/Users/divya/projects/wiki/blog';
export const STAGING = process.env.PODCAST_SUMMARIES_DIR || path.join(ROOT, 'podcast-summaries');
export const PERIODIC_STAGING = process.env.PODCAST_PERIODIC_DIR || path.join(ROOT, 'podcast-periodic');
export const AIDB = 'ai-daily-brief';
export const EPISODE_RE = /^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/;

export const readJson = (p, fallback) => {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return fallback; }
};

export const taxonomy = readJson(path.join(ROOT, 'src/data/podcast-taxonomy.json'), null);
if (!taxonomy) throw new Error('src/data/podcast-taxonomy.json missing or invalid');
export const wikiAvailable = fs.existsSync(WIKI);
const aliases = wikiAvailable ? readJson(path.join(WIKI, 'scripts/wiki_aliases.json'), {}) : {};

export function canonical(name) {
  const n = name in aliases ? aliases[name] : name;
  return n || null;
}

const index = (group) => {
  const m = new Map();
  for (const [tag, names] of Object.entries(group)) for (const n of names) {
    const k = n.toLowerCase();
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(tag);
  }
  return m;
};
export const topicOf = index(taxonomy.topics);
export const companyOf = index(taxonomy.companies);
export const topicSlugs = Object.keys(taxonomy.topics);
export const companySlugs = Object.keys(taxonomy.companies);
export const isControlled = (t) => t in taxonomy.topics || t in taxonomy.companies;
/** Tags a canonical name maps to (topics and companies). */
export const tagsOfName = (name) => [...(topicOf.get(name.toLowerCase()) || []), ...(companyOf.get(name.toLowerCase()) || [])];

export function extractionDir(show) {
  return show === AIDB ? path.join(WIKI, 'extractions') : path.join(WIKI, show, 'extractions');
}

/** All extraction basenames (YYYY-MM-DD-slug) for a show. */
export function listExtractions(show) {
  const dir = extractionDir(show);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.json') && !f.startsWith('_')).map((f) => f.slice(0, -5)).sort();
}

const extrCache = new Map();
/** Extraction for an episode with canonical item names, or null. */
export function readExtraction(show, basename) {
  const key = `${show}/${basename}`;
  if (extrCache.has(key)) return extrCache.get(key);
  const p = path.join(extractionDir(show), `${basename}.json`);
  let out = null;
  if (fs.existsSync(p)) {
    const d = readJson(p, null);
    if (d) {
      const items = [];
      for (const grp of ['entities', 'concepts']) for (const it of d[grp] || []) {
        const name = canonical(it.name);
        if (!name) continue;
        items.push({ name, kind: it.kind || (grp === 'concepts' ? 'concept' : 'entity'), role: it.role, description: it.description || '', claims: it.claims || [] });
      }
      out = { date: d.date, title: d.title, summary: d.summary, items };
    }
  }
  extrCache.set(key, out);
  return out;
}

/** Same scoring as build-ainews-tags.mjs: central = 3, notable = 1. */
function score(items, map) {
  const s = {};
  for (const it of items) for (const tag of map.get(it.name.toLowerCase()) || []) {
    s[tag] = (s[tag] || 0) + (it.role === 'central' ? 3 : 1);
  }
  return Object.entries(s).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

/** Tags from an extraction (identical thresholds to build-ainews-tags.mjs). */
export function tagsFromExtraction(items) {
  const topics = score(items, topicOf);
  const strong = topics.filter(([, v]) => v >= 2).map(([t]) => t);
  const weak = topics.filter(([, v]) => v === 1).map(([t]) => t);
  const pickedT = [...strong, ...weak.slice(0, Math.max(0, 2 - strong.length))].slice(0, taxonomy.max_topics);
  const comps = score(items, companyOf);
  const pickedC = comps.filter(([, v], i) => v >= 3 || (i === 0 && v >= 2)).slice(0, taxonomy.max_companies).map(([t]) => t);
  return [...pickedT, ...pickedC];
}

// --- summary-text fallback --------------------------------------------------
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// Names too ambiguous to match in free text (matched only via extractions).
const TEXT_SKIP = new Set(['Muse', 'Astra', 'o3', 'Figure', 'Cosmos', 'Lean', 'Harmonic', 'Fable', 'Mythos', 'Every', 'Recursive', 'Codex', 'Cognition', 'Interpretability']);
const textRules = {};
for (const [group, defs] of [['topics', taxonomy.topics], ['companies', taxonomy.companies]]) {
  for (const [tag, names] of Object.entries(defs)) {
    // Company names and acronyms (two capitals in a row) match case-sensitively.
    const flags = (s) => (group === 'companies' || /[A-Z]{2}/.test(s) ? '' : 'i');
    const res = names.filter((n) => !TEXT_SKIP.has(n) && n.length > 3).map((n) => new RegExp(`(^|[^\\w-])${escapeRe(n)}($|[^\\w-])`, flags(n)));
    for (const k of taxonomy.keywords?.[tag] || []) res.push(new RegExp(k, flags(k)));
    textRules[tag] = { group, res };
  }
}

/** Split a staging summary into the parts used for fallback tagging and packs. */
export function parseSummary(file) {
  const { data, content } = matter(fs.readFileSync(file, 'utf8'));
  const section = (h) => {
    const m = content.match(new RegExp(`^## ${h}\\s*\\n([\\s\\S]*?)(?=^## |$(?![\\s\\S]))`, 'm'));
    return m ? m[1].trim() : '';
  };
  const keyPoints = section('Key points').split('\n').filter((l) => /^\s*[-*]\s/.test(l)).map((l) => l.replace(/^\s*[-*]\s+/, '').trim());
  return { data, thesis: section('Thesis'), keyPoints, quotes: section('Quotes') };
}

/**
 * Conservative tags from the summary text: weighted hits per tag
 * (title 3, description 2, thesis 2, each key point 1; a part counts once per
 * tag). Topics need >= 4, companies >= 4; max 3 + 3.
 */
export function tagsFromSummary(s) {
  const parts = [[s.data.title || '', 3], [s.data.description || '', 2], [s.thesis, 2], ...s.keyPoints.map((k) => [k, 1])];
  const scores = {};
  for (const [tag, { res }] of Object.entries(textRules)) {
    let v = 0;
    for (const [text, w] of parts) if (res.some((re) => re.test(text))) v += w;
    if (v) scores[tag] = v;
  }
  const pick = (group, min, max) => Object.entries(scores)
    .filter(([t, v]) => textRules[t].group === group && v >= min)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, max).map(([t]) => t);
  return [...pick('topics', 4, taxonomy.max_topics), ...pick('companies', 4, taxonomy.max_companies)];
}

/** Valid-looking staged episode files for a show: [{basename, date, year, month, slug, file}]. */
export function listStagedEpisodes(show) {
  const dir = path.join(STAGING, show);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => EPISODE_RE.test(f)).sort().map((f) => {
    const [, y, m, d, slug] = f.match(EPISODE_RE);
    return { basename: f.slice(0, -3), date: `${y}-${m}-${d}`, year: y, month: m, slug, file: path.join(dir, f) };
  });
}

export const episodeHref = (show, ep) => `/podcasts/${show}/${ep.year}/${ep.month}/${ep.slug}/`;

const hostCache = new Map();
/**
 * Hosts/recurring people of a show (excluded from "related"/"ranked" lists):
 * the `hosts` in its staging summaries plus person items central in >= 12% of
 * its extractions (catches AIDB's host and recurring co-hosts).
 */
export function showHosts(show) {
  if (hostCache.has(show)) return hostCache.get(show);
  const names = listExtractions(show);
  const c = {};
  for (const b of names) for (const it of readExtraction(show, b)?.items || []) {
    if (it.kind === 'person' && it.role === 'central') c[it.name] = (c[it.name] || 0) + 1;
  }
  const hosts = new Set(Object.entries(c).filter(([, v]) => names.length >= 8 && v >= names.length * 0.12).map(([n]) => n));
  if (show !== AIDB) for (const ep of listStagedEpisodes(show)) for (const h of parseSummary(ep.file).data.hosts || []) hosts.add(h);
  hostCache.set(show, hosts);
  return hosts;
}
