#!/usr/bin/env node
/**
 * podcast-periodic-status.mjs — which monthly/annual podcast summaries are
 * missing or stale (rules in scripts/lib/podcast-periodic-plan.mjs and
 * scripts/PODCAST_PERIODIC_INSTRUCTIONS.md).
 *
 *   node scripts/podcast-periodic-status.mjs                 # all shows, all years
 *   node scripts/podcast-periodic-status.mjs --year 2026     # one year
 *   node scripts/podcast-periodic-status.mjs --show dwarkesh
 *   node scripts/podcast-periodic-status.mjs --all           # also list up-to-date ones
 *   node scripts/podcast-periodic-status.mjs --json          # machine-readable
 *
 * Exit code 1 when something is missing or stale (handy in scripts).
 */
import { periodicPlan } from './lib/podcast-periodic-plan.mjs';

const args = process.argv.slice(2);
const opt = (k) => (args.includes(k) ? args[args.indexOf(k) + 1] : null);
const plan = periodicPlan({ shows: opt('--show') ? [opt('--show')] : undefined, year: opt('--year') });
const todo = plan.filter((p) => p.status !== 'ok');

if (args.includes('--json')) {
  console.log(JSON.stringify(plan.map(({ episodes, ...p }) => ({ ...p, episodeCount: episodes.length })), null, 1));
} else {
  for (const p of args.includes('--all') ? plan : todo) {
    console.log(`${p.status.toUpperCase().padEnd(7)} ${p.show.padEnd(21)} ${p.period.padEnd(7)} ${p.type.padEnd(7)} ${String(p.episodes.length).padStart(3)} eps${p.inProgress ? '  (in progress)' : ''}${p.reasons.length ? '  ' + p.reasons.join('; ') : ''}`);
  }
  const c = (s) => plan.filter((p) => p.status === s).length;
  console.log(`\n${plan.length} expected: ${c('ok')} ok, ${c('missing')} missing, ${c('stale')} stale.`);
}
process.exitCode = todo.length ? 1 : 0;
