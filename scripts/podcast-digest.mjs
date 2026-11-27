#!/usr/bin/env node
// Monthly cross-show podcast digest (IBM Carbon page at /podcasts/digest/YYYY-MM/).
//
//   node scripts/podcast-digest.mjs --status [--year 2026]       months: episodes, gaps, themes state
//   node scripts/podcast-digest.mjs --month 2026-10              (re)build src/data/podcast-digests/2026-10.json
//   node scripts/podcast-digest.mjs --year 2026                  rebuild every month of the year (up to today)
//   node scripts/podcast-digest.mjs --missing --month 2026-10    JSON list of episodes with no summary
//   node scripts/podcast-digest.mjs --pack --month 2026-10       print the theme-writing pack (episodes + summaries)
//   node scripts/podcast-digest.mjs --check [--month P]          validate themes (refs resolve, counts) for all/one month
//   node scripts/podcast-digest.mjs --add-summaries f.json       merge {"<show>/<slug>": "summary"} into podcast-digests/summaries.json
//
// Inputs (read only): the blog wiki $PODCAST_WIKI (default ~/projects/wiki/blog), episode
// frontmatter + extractions/<slug>.json "summary". Fallbacks: the published blog summary's
// description, podcast-digests/summaries.json, ~/.hermes/data/podcast-digest/summaries.json.
// Agent-written themes: podcast-digests/themes/YYYY-MM.json
//   {"headline": str, "themes": [{"title","body","eps":["<show>/<YYYY-MM-DD>[-slug-prefix]"]}],
//    "implications": [str]}   (show = wiki folder, AIDB = "aidb")
// Output (committed, read by Astro; CI has no wiki): src/data/podcast-digests/YYYY-MM.json
// Spec for theme writers: scripts/PODCAST_DIGEST_INSTRUCTIONS.md. See docs/podcasts.md.

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const WIKI = process.env.PODCAST_WIKI || path.join(os.homedir(), 'projects/wiki/blog');
const STAGE = path.join(ROOT, 'podcast-digests');
const OUT = path.join(ROOT, 'src/data/podcast-digests');
const EXTRA = path.join(STAGE, 'summaries.json');
const HERMES_CACHE = path.join(os.homedir(), '.hermes/data/podcast-digest/summaries.json');
const EXCLUDE = new Set(['2026-05-27-topics', '2026-05-30-openclaw-berlin-intro']);
const SHOW_NAMES = {
  aidb: 'The AI Daily Brief', 'practical-ai': 'Practical AI', 'latent-space': 'Latent Space',
  'cognitive-revolution': 'The Cognitive Revolution', dwarkesh: 'Dwarkesh Podcast',
  'lex-fridman': 'Lex Fridman Podcast', 'no-priors': 'No Priors', 'turing-post': 'Turing Post', 'epoch-ai': 'Epoch After Hours',
  'pragmatic-engineer': 'The Pragmatic Engineer', moonshot: 'The Moonshot Podcast',
  'moonshots-diamandis': 'Moonshots with Peter Diamandis',
};

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : undefined; };
const readJson = (p, d) => { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return d; } };

function frontmatter(file) {
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

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out); else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

function showDirs() {
  const dirs = [['aidb', WIKI]];
  for (const d of fs.readdirSync(WIKI).sort()) {
    if (d !== 'episodes' && fs.existsSync(path.join(WIKI, d, 'episodes'))) dirs.push([d, path.join(WIKI, d)]);
  }
  return dirs;
}

function blogDescription(show, slug) {
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

function showNotes(file) {
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

function collectMonth(period) {
  const extra = { ...readJson(HERMES_CACHE, {}), ...readJson(EXTRA, {}) };
  const eps = [];
  for (const [show, root] of showDirs()) {
    const y = period.slice(0, 4), m = period.slice(5, 7);
    for (const p of walk(path.join(root, 'episodes', y, m))) {
      const slug = path.basename(p, '.md');
      if (!slug.startsWith(period) || EXCLUDE.has(slug) || !/^\d{4}-\d\d-\d\d-/.test(slug)) continue;
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
      eps.push({
        key, show, showName: fm.show || SHOW_NAMES[show] || show, date: slug.slice(0, 10),
        slug: slug.slice(11), title: fm.title || slug, url: fm.url || null, youtube: fm.youtube || null,
        guests, durationMin: fm.duration_min ? Number(fm.duration_min) || null : null,
        summary, summarySource: source, partial,
      });
    }
  }
  return eps.sort((a, b) => b.date.localeCompare(a.date) || a.key.localeCompare(b.key));
}

function resolveRefs(eps, refs) {
  const out = [], bad = [];
  for (const r of refs) {
    const hit = eps.filter((e) => e.key.startsWith(r));
    if (!hit.length) bad.push(r);
    for (const e of hit) if (!out.includes(e.key)) out.push(e.key);
  }
  return { keys: out, bad };
}

function checkThemes(eps, th) {
  const errs = [];
  if (!th) return ['no themes file'];
  if (!th.headline) errs.push('missing headline');
  const n = th.themes?.length || 0;
  if (n < 4 || n > 10) errs.push(`themes: ${n} (want 4-10)`);
  for (const t of th.themes || []) {
    if (!t.title || !t.body) errs.push(`theme without title/body`);
    const { keys, bad } = resolveRefs(eps, t.eps || []);
    if (bad.length) errs.push(`"${t.title}": unresolved ${bad.join(', ')}`);
    if (!keys.length) errs.push(`"${t.title}": no episodes`);
  }
  if (!th.implications?.length) errs.push('missing implications');
  if (/\bvolvo\b/i.test(JSON.stringify(th))) errs.push('mentions Volvo (public blog: keep it generic)');
  return errs;
}

function build(period) {
  const eps = collectMonth(period);
  if (!eps.length) { console.log(`${period}: no episodes, skipped`); return null; }
  const thFile = path.join(STAGE, 'themes', `${period}.json`);
  const th = readJson(thFile, null);
  const today = new Date().toISOString().slice(0, 10);
  const lastDay = new Date(Date.UTC(+period.slice(0, 4), +period.slice(5, 7), 0)).toISOString().slice(0, 10);
  const counts = {};
  for (const e of eps) counts[e.show] = (counts[e.show] || 0) + 1;
  const doc = {
    period, start: `${period}-01`, end: lastDay, inProgress: today <= lastDay,
    generated: today, episodeCount: eps.length, counts,
    headline: th?.headline || null,
    themes: (th?.themes || []).map((t) => ({ title: t.title, body: t.body, eps: resolveRefs(eps, t.eps || []).keys })),
    implications: th?.implications || [],
    themesEpisodeCount: th?.episodeCount ?? null,
    episodes: eps,
  };
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, `${period}.json`), JSON.stringify(doc, null, 1) + '\n');
  const miss = eps.filter((e) => !e.summary).length;
  const errs = th ? checkThemes(eps, th) : ['no themes'];
  console.log(`${period}: ${eps.length} episodes, ${miss} without summary, themes: ${errs.length ? errs.join('; ') : 'ok'}`);
  return doc;
}

function monthsOf(year) {
  const now = new Date().toISOString().slice(0, 7);
  return Array.from({ length: 12 }, (_, i) => `${year}-${String(i + 1).padStart(2, '0')}`).filter((p) => p <= now);
}

if (flag('--add-summaries')) {
  const cur = readJson(EXTRA, {});
  const add = readJson(opt('--add-summaries'), {});
  for (const [k, v] of Object.entries(add)) if (v) cur[k] = v;
  fs.mkdirSync(STAGE, { recursive: true });
  fs.writeFileSync(EXTRA, JSON.stringify(cur, null, 1) + '\n');
  console.log(`summaries.json: +${Object.keys(add).length} -> ${Object.keys(cur).length}`);
} else if (flag('--status') || flag('--check')) {
  const months = opt('--month') ? [opt('--month')] : monthsOf(opt('--year') || new Date().getFullYear());
  let bad = 0;
  for (const p of months) {
    const eps = collectMonth(p);
    if (!eps.length) continue;
    const th = readJson(path.join(STAGE, 'themes', `${p}.json`), null);
    const errs = checkThemes(eps, th);
    const out = readJson(path.join(OUT, `${p}.json`), null);
    const stale = out && out.episodeCount !== eps.length ? ' STALE-DATA' : (!out ? ' NO-DATA' : '');
    const thStale = th?.episodeCount && th.episodeCount !== eps.length ? ` THEMES-STALE(${th.episodeCount}->${eps.length})` : '';
    const miss = eps.filter((e) => !e.summary).length;
    if (errs.length || stale || miss) bad++;
    console.log(`${p}  ${String(eps.length).padStart(3)} eps  ${miss} no-summary  themes:${errs.length ? ' ' + errs.join('; ') : ' ok'}${stale}${thStale}`);
  }
  if (flag('--check') && bad) process.exit(1);
} else if (flag('--missing')) {
  const eps = collectMonth(opt('--month'));
  console.log(JSON.stringify(eps.filter((e) => !e.summary).map((e) => ({
    key: e.key, title: e.title, path: path.join(WIKI, e.show === 'aidb' ? '' : e.show, 'episodes', e.date.slice(0, 4), e.date.slice(5, 7), `${e.date}-${e.slug}.md`),
  })), null, 1));
} else if (flag('--pack')) {
  const p = opt('--month');
  const eps = collectMonth(p);
  console.log(`# Digest pack ${p}: ${eps.length} episodes. Ref = "<show>/<date>" (add "-<slug prefix>" if a show has two episodes that day).\n`);
  for (const e of eps) console.log(`[${e.show}/${e.date}-${e.slug.slice(0, 24)}] ${e.showName} | ${e.title}\n  ${e.summary || '(no summary)'}\n`);
} else if (opt('--month')) {
  build(opt('--month'));
} else if (opt('--year')) {
  for (const p of monthsOf(opt('--year'))) build(p);
} else {
  console.log(fs.readFileSync(new URL(import.meta.url)).toString().split('\n').slice(1, 20).join('\n'));
}
