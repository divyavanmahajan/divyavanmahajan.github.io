#!/usr/bin/env node
/**
 * build-ainews-tags.mjs
 *
 * Derives topic and company tags for every AIDB episode from the blog wiki's
 * per-episode extractions (entities/concepts with role central|notable) and
 * the controlled vocabulary in src/data/podcast-taxonomy.json.
 *
 * Output: src/data/ainews-tags.json  { "YYYY-MM-DD-slug": ["topic", ..., "company", ...] }
 * scripts/sync-ainews.js merges these tags into src/content/ainews/ episodes.
 * Read only on the wiki repo.
 *
 * Scoring per tag: +3 for each mapped item that is central to the episode,
 * +1 for each notable one. Topics need score >= 2 (the best topic is kept at
 * score >= 1 so every episode gets one); companies need score >= 3 or to be
 * the episode's top company with score >= 2. Capped at max_topics/max_companies.
 *
 * Usage: node scripts/build-ainews-tags.mjs [--report]
 */
import fs from 'fs';
import path from 'path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const WIKI = process.env.PODCAST_WIKI_DIR || '/Users/divya/projects/wiki/blog';
const EXTR = path.join(WIKI, 'extractions');
const tax = JSON.parse(fs.readFileSync(path.join(root, 'src/data/podcast-taxonomy.json'), 'utf8'));
const aliases = JSON.parse(fs.readFileSync(path.join(WIKI, 'scripts/wiki_aliases.json'), 'utf8'));
const REPORT = process.argv.includes('--report');

const index = (group) => {
  const m = new Map();
  for (const [tag, names] of Object.entries(group)) for (const n of names) {
    const k = n.toLowerCase();
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(tag);
  }
  return m;
};
const topicOf = index(tax.topics);
const companyOf = index(tax.companies);
const secondary = new Set(tax.secondary_topics || []);
const seenNames = new Set();

function score(items, map) {
  const s = {};
  for (const it of items) {
    for (const tag of map.get(it.name.toLowerCase()) || []) {
      s[tag] = (s[tag] || 0) + (it.role === 'central' ? 3 : 1);
    }
  }
  return Object.entries(s).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

const out = {};
const tagCount = {};
let untagged = 0;
for (const f of fs.readdirSync(EXTR).sort()) {
  if (!f.endsWith('.json') || f.startsWith('_')) continue;
  const d = JSON.parse(fs.readFileSync(path.join(EXTR, f), 'utf8'));
  const items = [];
  for (const grp of ['entities', 'concepts']) for (const it of d[grp] || []) {
    const name = it.name in aliases ? aliases[it.name] : it.name;
    if (!name) continue;
    seenNames.add(name.toLowerCase());
    items.push({ name, role: it.role });
  }
  const allTopics = score(items, topicOf);
  const topics = allTopics.filter(([t]) => !secondary.has(t));
  const strong = topics.filter(([, v]) => v >= 2).map(([t]) => t);
  const weak = topics.filter(([, v]) => v === 1).map(([t]) => t);
  const pickedT = [...strong, ...weak.slice(0, Math.max(0, 2 - strong.length))].slice(0, tax.max_topics);
  // Secondary topics (tax.secondary_topics) only fill free slots, so they never
  // change the primary picks (same rule as scripts/lib/podcast-wiki.mjs).
  const sec = allTopics.filter(([t]) => secondary.has(t));
  const secT = sec.filter(([, v]) => v >= 2).map(([t]) => t);
  if (!pickedT.length && !secT.length && sec.length) secT.push(sec[0][0]);
  pickedT.push(...secT.slice(0, Math.max(0, tax.max_topics - pickedT.length)));
  const comps = score(items, companyOf);
  const pickedC = comps.filter(([, v], i) => v >= 3 || (i === 0 && v >= 2)).slice(0, tax.max_companies).map(([t]) => t);
  const tags = [...pickedT, ...pickedC];
  if (!tags.length) untagged++;
  for (const t of tags) tagCount[t] = (tagCount[t] || 0) + 1;
  out[f.replace(/\.json$/, '')] = tags;
}

fs.mkdirSync(path.join(root, 'src/data'), { recursive: true });
fs.writeFileSync(path.join(root, 'src/data/ainews-tags.json'), JSON.stringify(out, null, 1) + '\n');
const n = Object.keys(out).length;
console.log(`episodes: ${n}  untagged: ${untagged}  avg tags: ${(Object.values(out).flat().length / n).toFixed(1)}`);
console.log(Object.entries(tagCount).sort((a, b) => b[1] - a[1]).map(([t, c]) => `${t}:${c}`).join('  '));
if (REPORT) {
  const all = [...Object.values(tax.topics), ...Object.values(tax.companies)].flat();
  const unknown = [...new Set(all)].filter((x) => !seenNames.has(x.toLowerCase()));
  console.log(`taxonomy names never seen in extractions (${unknown.length}): ${unknown.join(', ')}`);
}
