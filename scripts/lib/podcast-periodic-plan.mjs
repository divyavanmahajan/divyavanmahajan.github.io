/**
 * Which monthly/annual summaries should exist, and which are missing or stale.
 * Shared by scripts/podcast-periodic-status.mjs and scripts/podcast-periodic-pack.mjs.
 *
 * Rules (scripts/PODCAST_PERIODIC_INSTRUCTIONS.md):
 *   - monthly: every show-month with >= 2 published (non-draft) episode summaries
 *   - annual:  every show-year with >= 2 published episode summaries
 *   - stale:   the staging file's `sources` differ from the period's current
 *              episodes (new/removed episodes), or it is marked in_progress but
 *              the period is over, or (annual) a monthly summary of that year
 *              was generated after it.
 */
import fs from 'fs';
import path from 'path';
import { podcastShows } from '../../src/podcast-shows.mjs';
import { PERIODIC_STAGING, listStagedEpisodes, matter } from './podcast-wiki.mjs';

export const MIN_EPISODES = 2;

export function today() {
  return process.env.PODCAST_TODAY || new Date().toISOString().slice(0, 10);
}
export const isInProgress = (period, now = today()) => now.startsWith(period);

/** Published (non-draft) staged episodes of a show, with `draft` read from frontmatter. */
export function publishedEpisodes(show) {
  return listStagedEpisodes(show).filter((ep) => {
    const head = fs.readFileSync(ep.file, 'utf8').slice(0, 2000);
    return !/^draft:\s*true\s*$/m.test(head);
  });
}

export function readPeriodic(show, period) {
  const file = path.join(PERIODIC_STAGING, show, `${period}.md`);
  if (!fs.existsSync(file)) return null;
  const { data } = matter(fs.readFileSync(file, 'utf8'));
  return { file, data };
}

const genDate = (v) => (v instanceof Date ? v.toISOString().slice(0, 10) : String(v || ''));

/** [{show, period, type, episodes:[ep], status: ok|missing|stale, reasons, inProgress, file}] */
export function periodicPlan({ shows = podcastShows.map((s) => s.slug), year = null } = {}) {
  const out = [];
  for (const show of shows) {
    const eps = publishedEpisodes(show);
    const byMonth = new Map();
    const byYear = new Map();
    for (const ep of eps) {
      const m = `${ep.year}-${ep.month}`;
      if (!byMonth.has(m)) byMonth.set(m, []);
      byMonth.get(m).push(ep);
      if (!byYear.has(ep.year)) byYear.set(ep.year, []);
      byYear.get(ep.year).push(ep);
    }
    const monthlyGen = {};
    const add = (period, type, list) => {
      if (year && !period.startsWith(String(year))) return;
      if (list.length < MIN_EPISODES) return;
      const cur = readPeriodic(show, period);
      const reasons = [];
      let status = 'ok';
      if (!cur) status = 'missing';
      else {
        const have = new Set(cur.data.sources || []);
        const now = new Set(list.map((e) => e.basename));
        const added = [...now].filter((b) => !have.has(b));
        const removed = [...have].filter((b) => !now.has(b));
        if (added.length) reasons.push(`${added.length} new episode(s) since generated`);
        if (removed.length) reasons.push(`${removed.length} source(s) no longer published`);
        if (cur.data.in_progress === true && !isInProgress(period)) reasons.push('marked in progress but the period is over');
        if (type === 'monthly') monthlyGen[period] = genDate(cur.data.generated);
        if (type === 'annual') {
          const newer = Object.entries(monthlyGen).filter(([p, g]) => p.startsWith(period) && g > genDate(cur.data.generated));
          if (newer.length) reasons.push(`monthly ${newer.map(([p]) => p).join(', ')} regenerated after it`);
        }
        if (reasons.length) status = 'stale';
      }
      out.push({ show, period, type, episodes: list, status, reasons, inProgress: isInProgress(period), file: path.join(PERIODIC_STAGING, show, `${period}.md`) });
    };
    for (const m of [...byMonth.keys()].sort()) add(m, 'monthly', byMonth.get(m));
    for (const y of [...byYear.keys()].sort()) add(y, 'annual', byYear.get(y));
  }
  return out;
}
