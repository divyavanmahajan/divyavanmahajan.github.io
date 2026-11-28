#!/usr/bin/env node
// Daily cross-show podcast summary (IBM Carbon page at /podcasts/daily/YYYY-MM-DD/).
// The monthly digest's little sibling: same inputs, same data flow, same look.
//
//   node scripts/podcast-daily.mjs --status [--days 30]         days: episodes, missing summaries, themes state
//   node scripts/podcast-daily.mjs --todo [--since D] [--days N] days that need (new) themes: since the last
//                                                                daily page (inclusive), with episodes, no
//                                                                themes or THEMES-STALE; one date per line
//   node scripts/podcast-daily.mjs --pack --day 2026-11-27       print the theme-writing pack
//   node scripts/podcast-daily.mjs --day 2026-11-27              (re)build src/data/podcast-daily/2026-11-27.json
//   node scripts/podcast-daily.mjs --range 2026-10-29..2026-11-27   build every day of the range that has episodes
//   node scripts/podcast-daily.mjs --all                         rebuild every day that has a themes file
//   node scripts/podcast-daily.mjs --check [--day D | --range A..B | --days N]
//                                                                validate themes + data (default: every themes file);
//                                                                exits 1 on any error
//
// Inputs (read only): the blog wiki (see scripts/lib/podcast-episodes.mjs; shows = AIDB +
// src/podcast-shows.mjs), extraction summary + central items/claims, same summary fallbacks as
// the digest. Agent-written text: podcast-daily/themes/YYYY-MM-DD.json
//   {"date", "episodeCount", "headline": str, "themes": [{"title","body","eps":["<show>/<date>[-slug]"]}],
//    "whyItMatters": str}
// Output (committed, read by Astro; CI has no wiki): src/data/podcast-daily/YYYY-MM-DD.json
// Spec for theme writers: scripts/PODCAST_DAILY_INSTRUCTIONS.md. See docs/podcasts.md.

import fs from 'node:fs';
import path from 'node:path';
import { ROOT, readJson, collectEpisodes, resolveRefs } from './lib/podcast-episodes.mjs';

const STAGE = path.join(ROOT, 'podcast-daily');
const THEMES = path.join(STAGE, 'themes');
const OUT = path.join(ROOT, 'src/data/podcast-daily');
const HYPE = /\b(game[- ]chang\w*|revolutionary|groundbreaking|ground-breaking|mind[- ]blowing|jaw[- ]dropping|earth[- ]shattering|seismic|paradigm shift|supercharg\w*|unprecedented|breathtaking|stunning)\b/i;

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : undefined; };
const DAY_RE = /^\d{4}-\d\d-\d\d$/;

const localToday = () => new Date().toLocaleDateString('sv-SE'); // YYYY-MM-DD, local time
const addDays = (d, n) => new Date(Date.parse(d + 'T00:00:00Z') + n * 864e5).toISOString().slice(0, 10);
const weekday = (d) => new Date(d + 'T00:00:00Z').toLocaleDateString('en-us', { weekday: 'long', timeZone: 'UTC' });
const words = (s) => (s || '').trim().split(/\s+/).filter(Boolean).length;

function daysBetween(a, b) {
  if (!DAY_RE.test(a) || !DAY_RE.test(b) || a > b) throw new Error(`bad range ${a}..${b}`);
  const out = [];
  for (let d = a; d <= b; d = addDays(d, 1)) out.push(d);
  return out;
}
const lastNDays = (n) => daysBetween(addDays(localToday(), -(Number(n) - 1)), localToday());
const themeDays = () => (fs.existsSync(THEMES) ? fs.readdirSync(THEMES) : [])
  .map((f) => f.replace(/\.json$/, '')).filter((d) => DAY_RE.test(d)).sort();

function selectedDays(defaultDays) {
  if (opt('--day')) return [opt('--day')];
  if (opt('--range')) { const [a, b] = opt('--range').split('..'); return daysBetween(a, b); }
  if (opt('--days')) return lastNDays(opt('--days'));
  return defaultDays();
}

const collectDay = (day, central = false) => collectEpisodes(day, { central });
const themesFor = (day) => readJson(path.join(THEMES, `${day}.json`), null);

function checkThemes(day, eps, th) {
  const errs = [];
  if (!th) return ['no themes file'];
  if (th.date && th.date !== day) errs.push(`date field ${th.date} != ${day}`);
  if (!th.headline) errs.push('missing headline');
  else if (words(th.headline) > 60) errs.push(`headline ${words(th.headline)} words (want 1-2 sentences, <= 60 words)`);
  const n = th.themes?.length || 0;
  const min = eps.length === 1 ? 1 : 2;
  if (n < min || n > 5) errs.push(`themes: ${n} (want ${min}-5)`);
  for (const t of th.themes || []) {
    if (!t.title || !t.body) { errs.push('theme without title/body'); continue; }
    const w = words(t.body);
    if (w < 30 || w > 90) errs.push(`"${t.title}": body ${w} words (want 40-70)`);
    const { keys, bad } = resolveRefs(eps, t.eps || []);
    if (bad.length) errs.push(`"${t.title}": unresolved ${bad.join(', ')}`);
    if (!keys.length) errs.push(`"${t.title}": no episodes`);
  }
  if (!th.whyItMatters || typeof th.whyItMatters !== 'string') errs.push('missing whyItMatters');
  else if (words(th.whyItMatters) > 60) errs.push(`whyItMatters ${words(th.whyItMatters)} words (want one line, <= 60)`);
  const txt = JSON.stringify([th.headline, th.themes, th.whyItMatters]);
  if (/\bvolvo\b/i.test(txt)) errs.push('mentions Volvo (public blog: keep it generic)');
  const hype = txt.match(HYPE);
  if (hype) errs.push(`hype word "${hype[0]}"`);
  return errs;
}

function build(day) {
  const eps = collectDay(day);
  const outFile = path.join(OUT, `${day}.json`);
  if (!eps.length) { console.log(`${day}: no episodes, skipped`); return null; }
  const th = themesFor(day);
  const counts = {};
  for (const e of eps) counts[e.show] = (counts[e.show] || 0) + 1;
  const doc = {
    date: day, month: day.slice(0, 7), weekday: weekday(day),
    generated: localToday(), episodeCount: eps.length, counts,
    headline: th?.headline || null,
    themes: (th?.themes || []).map((t) => ({ title: t.title, body: t.body, eps: resolveRefs(eps, t.eps || []).keys })),
    whyItMatters: th?.whyItMatters || null,
    themesEpisodeCount: th?.episodeCount ?? null,
    episodes: eps,
  };
  fs.mkdirSync(OUT, { recursive: true });
  // Keep the file byte-stable when nothing changed but the date, so re-runs don't churn git.
  const old = readJson(outFile, null);
  if (old && JSON.stringify({ ...old, generated: 0 }) === JSON.stringify({ ...doc, generated: 0 })) doc.generated = old.generated;
  fs.writeFileSync(outFile, JSON.stringify(doc, null, 1) + '\n');
  const miss = eps.filter((e) => !e.summary).length;
  const errs = th ? checkThemes(day, eps, th) : ['no themes'];
  console.log(`${day}: ${eps.length} episodes, ${miss} without summary, themes: ${errs.length ? errs.join('; ') : 'ok'}`);
  return doc;
}

function statusLine(day) {
  const eps = collectDay(day);
  if (!eps.length) return null;
  const th = themesFor(day);
  const errs = checkThemes(day, eps, th);
  const out = readJson(path.join(OUT, `${day}.json`), null);
  const data = !out ? ' NO-DATA'
    : out.episodeCount !== eps.length || (th && out.headline !== th.headline) ? ' STALE-DATA' : '';
  const thStale = th?.episodeCount && th.episodeCount !== eps.length ? ` THEMES-STALE(${th.episodeCount}->${eps.length})` : '';
  const miss = eps.filter((e) => !e.summary);
  const shows = new Set(eps.map((e) => e.show)).size;
  return {
    day, eps, th, errs, data, thStale, miss,
    text: `${day} ${weekday(day).slice(0, 3)}  ${String(eps.length).padStart(2)} eps ${String(shows).padStart(2)} shows  ${miss.length} no-summary${miss.length ? ` (${miss.map((e) => e.key).join(', ')})` : ''}  themes:${errs.length ? ' ' + errs.join('; ') : ' ok'}${data}${thStale}`,
  };
}

if (flag('--status') || flag('--check')) {
  const days = selectedDays(flag('--check') ? themeDays : () => lastNDays(30));
  let bad = 0, n = 0;
  for (const d of days) {
    const s = statusLine(d);
    if (!s) continue;
    n++;
    if (s.errs.length || s.data) bad++;
    console.log(s.text);
  }
  console.log(`# ${n} days with episodes, ${bad} with problems`);
  if (flag('--check') && bad) process.exit(1);
} else if (flag('--todo')) {
  const done = themeDays();
  const since = opt('--since') || (done.length ? done[done.length - 1] : addDays(localToday(), -(Number(opt('--days') || 30) - 1)));
  for (const d of daysBetween(since, localToday())) {
    const s = statusLine(d);
    if (s && (!s.th || s.thStale)) console.log(d);
  }
} else if (flag('--pack')) {
  const day = opt('--day');
  if (!DAY_RE.test(day || '')) { console.error('--pack needs --day YYYY-MM-DD'); process.exit(2); }
  const eps = collectDay(day, true);
  const shows = new Set(eps.map((e) => e.show)).size;
  console.log(`# Daily pack ${day} (${weekday(day)}): ${eps.length} episodes, ${shows} shows. episodeCount = ${eps.length}.`);
  console.log(`# Ref = "<show>/${day}" (add "-<slug prefix>" from the brackets if a show has two episodes that day).\n`);
  for (const e of eps) {
    console.log(`[${e.show}/${e.date}-${e.slug.slice(0, 24)}] ${e.showName} | ${e.title}`);
    if (e.guests.length) console.log(`  Guests: ${e.guests.join(', ')}`);
    console.log(`  Summary: ${e.summary || '(no summary)'}${e.summarySource === 'show-notes' ? ' (from the show notes)' : ''}`);
    if (e.central?.length) {
      console.log('  Central items (claims as reported on the show):');
      for (const c of e.central) console.log(`    - ${c.name}${c.claims.length ? ': ' + c.claims.join(' | ') : ''}`);
    }
    console.log('');
  }
} else if (opt('--day')) {
  build(opt('--day'));
} else if (opt('--range')) {
  const [a, b] = opt('--range').split('..');
  for (const d of daysBetween(a, b)) build(d);
} else if (flag('--all')) {
  for (const d of themeDays()) build(d);
} else {
  console.log(fs.readFileSync(new URL(import.meta.url)).toString().split('\n').slice(1, 25).join('\n'));
}
