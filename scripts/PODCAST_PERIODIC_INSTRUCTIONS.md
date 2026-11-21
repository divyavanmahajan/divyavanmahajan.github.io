# Writing monthly and yearly podcast summaries

Spec for the monthly (`YYYY-MM`) and yearly (`YYYY`) summaries of the shows in
`src/podcast-shows.mjs` (Practical AI, Latent Space, The Cognitive Revolution,
Dwarkesh Podcast). The AI Daily Brief has its own syntheses in the `ainews`
collection; never write those here.

Published at `/podcasts/<show>/periodic/<period>/`, listed at
`/podcasts/<show>/periodic/`.

## Inputs (and only these)

1. The **pack** for the period, made by
   `node scripts/podcast-periodic-pack.mjs --show <show> --period <period>`
   (or `--todo --year 2026` for every missing/stale period). It holds:
   - the frontmatter to use (episode list in `sources`, basis, dates);
   - **Ranked items from the wiki analysis**: the period's entities and
     concepts ranked by how many episodes they are *central* in, then by
     mentions, with their claims and verified quotes (blog-wiki extractions,
     quotes already checked verbatim against the transcripts);
   - **Threads across episodes**: items that recur in 2+ episodes;
   - every **episode summary** of the period (title + link, description;
     monthly packs also have thesis and key points);
   - two **prepared sections** to paste verbatim: `## Rising and fading`
     (computed from the extractions) and `## Topics` (controlled tags).
2. If you need more detail on an episode, read its staging summary
   `podcast-summaries/<show>/<basename>.md`.

Never open transcripts (`/Users/divya/projects/wiki/blog/<show>/episodes/...`)
and never write anything in `/Users/divya/projects/wiki`. Do not add facts,
numbers or names that are not in the pack or the episode summaries.

## Output

One file: `podcast-periodic/<show>/<period>.md` (path printed at the top of the
pack). Frontmatter exactly as in the pack, with a real `description`:

```yaml
---
title: "Latent Space — May 2026"
description: "Agents get their own cloud infrastructure; coding agents move to the background; AI for science and healthcare"
date: 2026-05-31            # last day of the month; YYYY-12-31 for a year
show: latent-space
type: monthly               # or annual
period: "2026-05"           # or "2026"
episodes: 6                 # = number of sources
basis: extractions          # extractions | mixed | summaries (from the pack)
in_progress: false          # true for the current month/year
generated: 2026-11-21
sources:                    # staging basenames of ALL the period's episodes
  - 2026-05-05-doing-vibe-physics-alex-lupsasca-openai
---
```

- `description`: 3-5 themes separated by semicolons, plain words, no
  trailing full stop, under ~300 characters. If `in_progress: true`, start
  with `In progress: `. If `basis: summaries`, end with
  `(based on episode summaries)`.

### Body (monthly), in this order, under ~700 words in total

1. `## Overview`: 2-3 sentences on what the month was about for this show.
2. `## Main themes`: 3-5 themes, each `### <Theme name>` followed by 2-4
   bullets. Build the themes from the **ranked items and threads first**
   (central counts decide what matters most; group related items into one
   theme), then use the episode summaries for readable context. Every bullet
   links the episode(s) it draws on: `[short title](/podcasts/<show>/YYYY/MM/<slug>/)`
   (copy links from the pack; keep the trailing slash). Attribute views to
   the guest or host who holds them.
3. `## Notable episodes`: 3-5 bullets, `[title](link): one line on why it
   stands out`.
4. `## Rising and fading`: paste from the pack (omit only when the pack has no
   such section, i.e. `basis: summaries`). You may add one sentence of
   interpretation below the bullets.
5. `## Topics`: paste from the pack.

### Body (annual), under ~700 words

Same sections, across the year (`## Overview` 3-4 sentences; `## Main themes`
4-5 themes from the year's ranked items; `## Notable episodes` 4-5), plus
`## Month by month` after Notable episodes: one line per month that has
episodes, `- [Month YYYY](/podcasts/<show>/periodic/YYYY-MM/): <one line>`
(links and one-line hints are in the pack; for a month without a monthly
summary link its episode instead). Then `## Rising and fading` and `## Topics`
from the pack.

## Quotes

- Optional. At most **3 per summary**, at most **one per theme bullet**, each
  **25 words or fewer**, taken **verbatim** from a quote marked `usable` in the
  pack (a shorter exact sub-span of a longer quote is fine; do not join
  fragments or fix grammar).
- Format inline with curly quotes and attribution:
  `Cooper says agents need “something massively better than Cube” for orchestration ([Railway](/podcasts/...)).`
- No blockquotes (`>`), no quotes from transcripts or show notes, no quotes
  in straight double quotes. Everything else is paraphrase.

## Style

Plain, concrete English, short sentences, no hype ("game-changing",
"revolutionary"), no rhetorical questions, no em-dash chains. British or
American spelling consistently. Name people and companies as the summaries do.

## Validation (run it; fix every problem)

```
node scripts/sync-podcasts.js --periodic-only --dry-run
```

It rejects: missing sections or frontmatter, `date`/`period`/filename
mismatches, `episodes` != number of `sources`, sources outside the period,
more than 800 words, more than 3 quotes, quotes over 25 words or not found in
a verified extraction quote, blockquotes, and any `/podcasts/...` link that
does not resolve (episode outside the period or not published, unknown tag,
missing monthly summary). Then run it without `--dry-run` to publish into
`src/content/podcast-periodic/`.

## When to (re)generate

- `node scripts/podcast-periodic-status.mjs [--year YYYY]` lists MISSING and
  STALE periods (stale = episodes added/removed since `generated`, an
  in-progress period that has ended, or a yearly summary older than one of its
  monthly summaries).
- A month needs at least 2 published episode summaries; a year at least 2.
- Regenerate the current month (in progress) when it gains episodes, and once
  more after the month ends (it then shows as stale because `in_progress` is
  still true). Regenerate the year after its months change.
- Older years: generate only after the back-catalogue summaries for that year
  are complete (`node scripts/podcast-pending.js --since YYYY-01-01 --json`
  shows nothing for the year), monthly first, then the year.
