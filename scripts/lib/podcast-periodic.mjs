/**
 * Validation + frontmatter transform for podcast monthly/annual summaries
 * (staging podcast-periodic/<show>/YYYY-MM.md | YYYY.md). Used by
 * scripts/sync-podcasts.js; the spec is scripts/PODCAST_PERIODIC_INSTRUCTIONS.md.
 */
import fs from 'fs';
import path from 'path';
import { wikiAvailable, listExtractions, readExtraction, isControlled } from './podcast-wiki.mjs';

export const PERIOD_FILE_RE = /^(\d{4})(?:-(\d{2}))?\.md$/;
export const MAX_PERIODIC_WORDS = 800; // target <= 700
export const MAX_PERIODIC_QUOTES = 3;
export const MAX_QUOTE_WORDS = 25;

const MONTHLY_SECTIONS = ['## Overview', '## Main themes', '## Notable episodes', '## Topics'];
const ANNUAL_SECTIONS = [...MONTHLY_SECTIONS, '## Month by month'];

export const lastDayOfPeriod = (year, month) => (month
  ? new Date(Date.UTC(Number(year), Number(month), 0)).toISOString().slice(0, 10)
  : `${year}-12-31`);

const toDateString = (v) => (v instanceof Date ? v.toISOString().slice(0, 10) : String(v ?? ''));
const norm = (s) => s.replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/\s+/g, ' ').trim().toLowerCase();

const quoteCache = new Map();
/** Normalised verified extraction quotes of a show (from the blog wiki). */
function showQuotes(show) {
  if (!quoteCache.has(show)) {
    const qs = [];
    for (const b of listExtractions(show)) for (const it of readExtraction(show, b)?.items || []) {
      for (const c of it.claims || []) if (c.quote) qs.push(norm(c.quote));
    }
    quoteCache.set(show, qs);
  }
  return quoteCache.get(show);
}

/**
 * @param show       show slug (= folder)
 * @param basename   file name, e.g. 2026-05.md
 * @param episodes   Map basename -> {year, month, slug} of valid published episodes of the show
 * @param periodics  Set of period strings staged for the show (for Month by month links)
 */
export function validatePeriodic(show, basename, data, body, episodes, periodics) {
  const problems = [];
  const m = basename.match(PERIOD_FILE_RE);
  if (!m) return [`cannot parse filename (want YYYY-MM.md or YYYY.md)`];
  const [, year, month] = m;
  const period = month ? `${year}-${month}` : year;
  const type = month ? 'monthly' : 'annual';
  for (const key of ['title', 'description', 'date', 'show', 'type', 'period', 'episodes', 'basis', 'sources']) {
    if (data[key] === undefined || data[key] === null || data[key] === '') problems.push(`missing frontmatter "${key}"`);
  }
  if (data.show && data.show !== show) problems.push(`show "${data.show}" does not match folder "${show}"`);
  if (data.period !== undefined && String(data.period) !== period) problems.push(`period "${data.period}" does not match filename ${period}`);
  if (data.type && data.type !== type) problems.push(`type "${data.type}" should be "${type}"`);
  if (data.date && toDateString(data.date) !== lastDayOfPeriod(year, month)) problems.push(`date ${toDateString(data.date)} should be ${lastDayOfPeriod(year, month)} (last day of the period)`);
  if (data.basis && !['extractions', 'mixed', 'summaries'].includes(data.basis)) problems.push(`basis "${data.basis}" must be extractions|mixed|summaries`);
  if (data.basis === 'summaries' && !/based on episode summaries/i.test(data.description || '')) problems.push('basis "summaries" requires "based on episode summaries" in the description');
  if (data.in_progress === true && !/^in progress/i.test(data.description || '')) problems.push('in_progress requires the description to start with "In progress"');
  const sources = Array.isArray(data.sources) ? data.sources : [];
  if (data.sources !== undefined && !Array.isArray(data.sources)) problems.push('sources must be a list of episode basenames');
  for (const s of sources) {
    if (!episodes.has(s)) problems.push(`source "${s}" is not a valid published episode`);
    else if (!s.startsWith(period)) problems.push(`source "${s}" is outside ${period}`);
  }
  if (Number(data.episodes) !== sources.length) problems.push(`episodes (${data.episodes}) != number of sources (${sources.length})`);

  for (const section of type === 'annual' ? ANNUAL_SECTIONS : MONTHLY_SECTIONS) {
    if (!body.includes(section)) problems.push(`missing section "${section}"`);
  }
  if (data.basis && data.basis !== 'summaries' && !body.includes('## Rising and fading')) problems.push('missing section "## Rising and fading" (required when extractions exist)');
  if (/^## Transcript/m.test(body)) problems.push('contains a "## Transcript" section');
  if (/^>/m.test(body)) problems.push('blockquotes are not allowed; quote inline with curly quotes');
  const words = body.split(/\s+/).filter(Boolean).length;
  if (words > MAX_PERIODIC_WORDS) problems.push(`body has ${words} words (max ${MAX_PERIODIC_WORDS}, target 700)`);

  // Quotes: inline “...” only, max 3, <= 25 words, verbatim from a verified extraction quote.
  const quotes = [...body.matchAll(/\u201c([^\u201d]+)\u201d/g)].map((q) => q[1]);
  if (quotes.length > MAX_PERIODIC_QUOTES) problems.push(`${quotes.length} quotes (max ${MAX_PERIODIC_QUOTES})`);
  for (const q of quotes) {
    const n = q.split(/\s+/).filter(Boolean).length;
    if (n > MAX_QUOTE_WORDS) problems.push(`quote has ${n} words (max ${MAX_QUOTE_WORDS}): “${q.slice(0, 50)}…”`);
    if (wikiAvailable && !showQuotes(show).some((v) => v.includes(norm(q).replace(/^\.\.\.|\.\.\.$|…/g, '').trim()))) {
      problems.push(`quote not found in any verified extraction quote of ${show}: “${q.slice(0, 60)}”`);
    }
  }
  const straight = [...body.replace(/\[[^\]]*\]\([^)]*\)/g, '').matchAll(/"([^"\n]+)"/g)].filter((q) => q[1].split(/\s+/).length >= 6);
  if (straight.length) problems.push(`possible unmarked quote in straight quotes: "${straight[0][1].slice(0, 50)}" (use “curly” quotes for verified quotes, or paraphrase)`);

  // Links: every /podcasts/ link must resolve.
  for (const [, href] of body.matchAll(/\]\((\/podcasts\/[^)\s]*)\)/g)) {
    let mm;
    if ((mm = href.match(/^\/podcasts\/([^/]+)\/(\d{4})\/(\d{2})\/([^/]+)\/$/))) {
      const [, s, y, mo, slug] = mm;
      const hit = s === show && [...episodes.entries()].find(([, e]) => e.year === y && e.month === mo && e.slug === slug);
      if (!hit) problems.push(`link ${href} does not resolve to a published ${show} episode`);
      else if (!hit[0].startsWith(period)) problems.push(`link ${href} is outside ${period}`);
    } else if ((mm = href.match(/^\/podcasts\/([^/]+)\/periodic\/(\d{4}(?:-\d{2})?)\/$/))) {
      if (mm[1] !== show || !periodics.has(mm[2])) problems.push(`link ${href} does not resolve to a staged ${show} summary`);
    } else if ((mm = href.match(/^\/podcasts\/([^/]+)\/tags\/([^/]+)\/$/))) {
      if (mm[1] !== show || !isControlled(mm[2])) problems.push(`link ${href}: unknown show or tag`);
    } else if ((mm = href.match(/^\/podcasts\/topics\/([^/]+)\/$/))) {
      if (!isControlled(mm[1])) problems.push(`link ${href}: unknown tag`);
    } else {
      problems.push(`unsupported /podcasts/ link ${href} (needs a trailing slash and a known route)`);
    }
  }
  return problems;
}

export function transformPeriodic(data, show, basename) {
  const [, year, month] = basename.match(PERIOD_FILE_RE);
  return {
    title: data.title,
    description: data.description,
    pubDate: lastDayOfPeriod(year, month),
    show,
    type: month ? 'monthly' : 'annual',
    period: month ? `${year}-${month}` : year,
    episodeCount: Number(data.episodes),
    basis: data.basis,
    inProgress: data.in_progress === true,
    draft: data.draft === true,
    // sources/generated stay in staging (used by podcast-periodic-status.mjs).
  };
}

export function listPeriodicFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => PERIOD_FILE_RE.test(f)).sort();
}

export const periodicDest = (destRoot, show, basename) => path.join(destRoot, show, basename);
