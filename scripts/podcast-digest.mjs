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
import { ROOT, WIKI, DIGEST_STAGE as STAGE, readJson, collectEpisodes, resolveRefs } from './lib/podcast-episodes.mjs';

const OUT = path.join(ROOT, 'src/data/podcast-digests');
const EXTRA = path.join(STAGE, 'summaries.json');

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : undefined; };

// Episode collection, summary fallbacks and ref resolution are shared with the daily
// summary (scripts/podcast-daily.mjs): scripts/lib/podcast-episodes.mjs.
const collectMonth = (period) => collectEpisodes(period);

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
