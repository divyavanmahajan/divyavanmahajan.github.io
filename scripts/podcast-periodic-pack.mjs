#!/usr/bin/env node
/**
 * podcast-periodic-pack.mjs — writes a data "pack" per show-period for an agent
 * writing a monthly/annual summary (scripts/PODCAST_PERIODIC_INSTRUCTIONS.md).
 *
 * The pack contains: the frontmatter to use; the period's most central
 * entities/concepts from the blog-wiki extractions (central count + mentions,
 * like the AIDB "themes for a period" recipe) with their claims and verified
 * quotes; every episode summary (thesis + key points) with its link; and two
 * prepared sections to paste verbatim (## Rising and fading, ## Topics).
 *
 *   node scripts/podcast-periodic-pack.mjs --show latent-space --period 2026-05
 *   node scripts/podcast-periodic-pack.mjs --todo --year 2026 [--type monthly|annual] [--show s]
 *   options: --out <dir> (default $TMPDIR/podcast-periodic-packs)
 * Prints the pack paths. Read-only on the wiki and on podcast-summaries/.
 */
import fs from 'fs';
import os from 'os';
import path from 'path';
import { getPodcastShow } from '../src/podcast-shows.mjs';
import {
  readExtraction, listExtractions, tagsForEpisode, parseSummary, episodeHref, showHosts, PERIODIC_STAGING, matter,
} from './lib/podcast-wiki.mjs';
import { periodicPlan, publishedEpisodes, isInProgress, today } from './lib/podcast-periodic-plan.mjs';
import { lastDayOfPeriod } from './lib/podcast-periodic.mjs';

const args = process.argv.slice(2);
const opt = (k) => (args.includes(k) ? args[args.indexOf(k) + 1] : null);
const OUT = opt('--out') || path.join(process.env.TMPDIR || os.tmpdir(), 'podcast-periodic-packs');
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const label = (p) => (p.length === 7 ? `${MONTHS[Number(p.slice(5, 7)) - 1]} ${p.slice(0, 4)}` : p);
const words = (s) => s.split(/\s+/).filter(Boolean).length;

function prevPeriod(period) {
  if (period.length === 4) return String(Number(period) - 1);
  const [y, m] = period.split('-').map(Number);
  return m === 1 ? `${y - 1}-12` : `${y}-${String(m - 1).padStart(2, '0')}`;
}

/** Per-item stats over a list of extractions. */
function rank(show, exList) {
  const hosts = showHosts(show);
  const agg = new Map();
  for (const { ep, ex } of exList) {
    const seen = new Set();
    for (const it of ex.items) {
      if (hosts.has(it.name) || seen.has(it.name)) continue;
      seen.add(it.name);
      if (!agg.has(it.name)) agg.set(it.name, { name: it.name, kind: it.kind, description: it.description, central: 0, mentions: 0, eps: [] });
      const a = agg.get(it.name);
      a.mentions++;
      if (it.role === 'central') a.central++;
      a.eps.push({ ep, role: it.role, claims: it.claims });
    }
  }
  // Guests central only in their own episode add nothing as a theme.
  const guest = (a) => a.kind === 'person' && a.mentions === 1
    && (parseSummary(a.eps[0].ep.file).data.guests || []).some((g) => g.includes(a.name) || a.name.includes(g));
  return [...agg.values()].filter((a) => !guest(a))
    .sort((a, b) => b.central - a.central || b.mentions - a.mentions || a.name.localeCompare(b.name));
}

/** Episode-count shares per item for an episode set (by basename). */
function shares(show, basenames) {
  const hosts = showHosts(show);
  const c = {};
  let n = 0;
  for (const b of basenames) {
    const ex = readExtraction(show, b);
    if (!ex) continue;
    n++;
    for (const name of new Set(ex.items.map((i) => i.name))) if (!hosts.has(name)) c[name] = (c[name] || 0) + 1;
  }
  return { n, c };
}

function risingFading(show, period, eps) {
  const curB = eps.map((e) => e.basename);
  let prev = prevPeriod(period);
  let prevB = publishedEpisodes(show).filter((e) => e.basename.startsWith(prev)).map((e) => e.basename);
  if (!prevB.some((b) => readExtraction(show, b))) prevB = listExtractions(show).filter((b) => b.startsWith(prev));
  let cur = shares(show, curB);
  let old = shares(show, prevB);
  let what = `${label(prev)}`;
  if (period.length === 4 && old.n < 10) {
    // Too little data for the previous year: compare the two halves of this year.
    const h1 = curB.filter((b) => b.slice(5, 7) <= '06');
    const h2 = curB.filter((b) => b.slice(5, 7) > '06');
    old = shares(show, h1);
    cur = shares(show, h2);
    what = `January–June ${period} (the previous year has too few analysed episodes, so this compares the second half of the year with the first)`;
    if (old.n < 3 || cur.n < 3) return `No comparison: too few analysed episodes in ${period} and the year before.`;
  }
  if (!cur.n) return 'No wiki analysis for this period yet; comparison skipped.';
  if (!old.n) return `No wiki analysis for ${label(prev)}; comparison skipped.`;
  const names = new Set([...Object.keys(cur.c), ...Object.keys(old.c)]);
  const rows = [...names].map((n) => {
    const a = cur.c[n] || 0, b = old.c[n] || 0;
    return { n, a, b, d: a / cur.n - b / old.n };
  }).filter((r) => Math.max(r.a, r.b) >= 2);
  const rising = rows.filter((r) => r.d > 0 && r.a >= 2).sort((x, y) => y.d - x.d || y.a - x.a).slice(0, 3);
  const fading = rows.filter((r) => r.d < 0 && r.b >= 2).sort((x, y) => x.d - y.d || y.b - x.b).slice(0, 3);
  const fmt = (r) => `**${r.n}**: ${r.a} of ${cur.n} episodes (${r.b} of ${old.n} before)`;
  const lines = [`Compared with ${what} (${old.n} analysed episodes; this period ${cur.n}), by share of analysed episodes that mention each item.`, ''];
  lines.push(rising.length ? `- Rising: ${rising.map(fmt).join('; ')}.` : '- Rising: nothing mentioned in 2+ episodes rose clearly.');
  lines.push(fading.length ? `- Fading: ${fading.map(fmt).join('; ')}.` : '- Fading: nothing mentioned in 2+ episodes fell clearly.');
  return lines.join('\n');
}

function topicsSection(show, eps) {
  const c = {};
  for (const ep of eps) {
    const t = tagsForEpisode(show, ep);
    for (const x of t) c[x] = (c[x] || 0) + 1;
  }
  const top = Object.entries(c).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 8);
  if (!top.length) return 'No controlled topics matched this period.';
  return top.map(([t, n]) => `[${t}](/podcasts/${show}/tags/${t}/) (${n})`).join(' · ');
}

function pack(show, period) {
  const meta = getPodcastShow(show);
  const type = period.length === 4 ? 'annual' : 'monthly';
  const eps = publishedEpisodes(show).filter((e) => e.basename.startsWith(period));
  const exList = eps.map((ep) => ({ ep, ex: readExtraction(show, ep.basename) })).filter((x) => x.ex);
  const basis = exList.length === eps.length ? 'extractions' : exList.length === 0 ? 'summaries' : 'mixed';
  const inProgress = isInProgress(period);
  const all = rank(show, exList);
  const ranked = all.slice(0, type === 'annual' ? 20 : 12);
  const threads = all.filter((r) => r.mentions >= 2).sort((a, b) => b.mentions - a.mentions || b.central - a.central).slice(0, type === 'annual' ? 15 : 10);
  const L = [];
  L.push(`# Pack: ${meta.name} — ${label(period)} (${type})`, '');
  L.push(`Write: ${path.join(PERIODIC_STAGING, show, `${period}.md`)}`);
  L.push(`Episodes: ${eps.length} (${exList.length} with wiki analysis) · basis: ${basis}${inProgress ? ' · IN PROGRESS (period not over)' : ''}`, '');
  L.push('## Frontmatter (copy; replace the description)', '', '```yaml', '---');
  L.push(`title: "${meta.name} — ${label(period)}"`);
  const descHint = `${inProgress ? 'In progress: ' : ''}<3-5 themes, separated by semicolons>${basis === 'summaries' ? ' (based on episode summaries)' : ''}`;
  L.push(`description: "${descHint}"`);
  L.push(`date: ${lastDayOfPeriod(period.slice(0, 4), period.slice(5, 7) || null)}`);
  L.push(`show: ${show}`, `type: ${type}`, `period: "${period}"`, `episodes: ${eps.length}`, `basis: ${basis}`, `in_progress: ${inProgress}`, `generated: ${today()}`, 'sources:');
  for (const e of eps) L.push(`  - ${e.basename}`);
  L.push('---', '```', '');

  L.push('## Ranked items from the wiki analysis (backbone for ## Main themes)', '');
  if (!ranked.length) L.push('None: no episode of this period has an extraction. Build the themes from the episode summaries.', '');
  ranked.forEach((r, i) => {
    L.push(`${i + 1}. **${r.name}** (${r.kind}): central in ${r.central}, mentioned in ${r.mentions} of ${exList.length} analysed episodes. ${r.description}`);
    const epLinks = r.eps.slice(0, 8).map(({ ep, role }) => `[${parseSummary(ep.file).data.title}](${episodeHref(show, ep)}) (${role})`);
    L.push(`   Episodes: ${epLinks.join('; ')}`);
    const claims = r.eps.sort((a, b) => (a.role === 'central' ? -1 : 1) - (b.role === 'central' ? -1 : 1))
      .flatMap(({ ep, claims }) => (claims || []).map((c) => ({ ep, c }))).slice(0, type === 'annual' ? 2 : 3);
    for (const { ep, c } of claims) {
      const q = c.quote ? ` Quote (${words(c.quote)} words${words(c.quote) <= 25 ? ', usable' : ', TOO LONG, do not use whole'}): “${c.quote}”` : '';
      L.push(`   - Claim: ${c.claim} [${episodeHref(show, ep)}]${q}`);
    }
  });
  L.push('');
  L.push('## Threads across episodes (items in 2+ episodes of the period)', '');
  if (!threads.length) L.push('None: no item appears in more than one analysed episode.');
  for (const r of threads) {
    L.push(`- **${r.name}** (${r.kind}): ${r.mentions} episodes, central in ${r.central}: ${r.eps.slice(0, 8).map(({ ep, role }) => `[${ep.date}](${episodeHref(show, ep)}) (${role})`).join(', ')}`);
  }
  L.push('');

  if (type === 'annual') {
    L.push('## Monthly summaries of this year (for ## Month by month)', '');
    for (const m of MONTHS.map((_, i) => `${period}-${String(i + 1).padStart(2, '0')}`)) {
      const f = path.join(PERIODIC_STAGING, show, `${m}.md`);
      const n = eps.filter((e) => e.basename.startsWith(m)).length;
      if (fs.existsSync(f)) {
        const { data } = matter(fs.readFileSync(f, 'utf8'));
        L.push(`- ${label(m)} (${n} episodes): link [${label(m)}](/podcasts/${show}/periodic/${m}/) — ${data.description}`);
      } else if (n) {
        L.push(`- ${label(m)} (${n} episode${n > 1 ? 's' : ''}, no monthly summary): link the episode(s) directly — ${eps.filter((e) => e.basename.startsWith(m)).map((e) => `[${parseSummary(e.file).data.title}](${episodeHref(show, e)})`).join('; ')}`);
      }
    }
    L.push('');
  }

  L.push('## Episode summaries', '');
  for (const ep of eps) {
    const s = parseSummary(ep.file);
    const has = readExtraction(show, ep.basename) ? '' : ' (no wiki analysis)';
    L.push(`### [${s.data.title}](${episodeHref(show, ep)}) — ${ep.date}${has}`);
    if ((s.data.guests || []).length) L.push(`Guests: ${s.data.guests.join(', ')}`);
    L.push(`Description: ${s.data.description}`);
    if (type === 'monthly') {
      L.push(`Thesis: ${s.thesis}`);
      for (const k of s.keyPoints) L.push(`- ${k}`);
    }
    L.push('');
  }

  L.push('## Prepared sections (paste verbatim at the end of the body)', '');
  if (basis !== 'summaries') L.push('## Rising and fading', '', risingFading(show, period, eps), '');
  L.push('## Topics', '', topicsSection(show, eps), '');
  fs.mkdirSync(OUT, { recursive: true });
  const file = path.join(OUT, `${show}-${period}.md`);
  fs.writeFileSync(file, L.join('\n'));
  return { file, eps: eps.length, basis };
}

let targets = [];
if (args.includes('--todo')) {
  targets = periodicPlan({ shows: opt('--show') ? [opt('--show')] : undefined, year: opt('--year') })
    .filter((p) => p.status !== 'ok' && (!opt('--type') || p.type === opt('--type')))
    .map((p) => [p.show, p.period]);
} else if (opt('--show') && opt('--period')) {
  targets = [[opt('--show'), opt('--period')]];
} else {
  console.error('usage: --show <show> --period <YYYY-MM|YYYY>  |  --todo [--year YYYY] [--type monthly|annual] [--show s]');
  process.exit(1);
}
for (const [show, period] of targets) {
  const r = pack(show, period);
  console.log(`${r.file}\t${r.eps} episodes\t${r.basis}`);
}
