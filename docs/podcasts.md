# Podcasts section (non-AIDB podcast summaries)

Status: live. 2026 back catalogue summarised (November 2026); older episodes
are being backfilled by `scripts/podcast-backfill-driver.py`. Topics and
monthly/yearly summaries exist for every show (AIDB included).

## Why

The AI Daily Brief (AIDB) already has a section (now `/podcasts/ai-daily-brief/`)
built from the notes in `~/projects/volvo/ai-update/notes/`. Divya also follows
Practical AI, Latent Space, The Cognitive Revolution, Dwarkesh Podcast, the Lex
Fridman Podcast (`lex-fridman`) and No Priors (`no-priors`, added 2026-11-21); their
transcripts live in the blog wiki repo (`~/projects/wiki/blog/<show>/episodes/YYYY/MM/`).
This section publishes short per-episode summaries of those shows with the same
shape as AIDB (listing by year/month, one page per episode, RSS, topics,
monthly and yearly summaries), but as a separate collection, pipeline and URL
space.

## Pipeline

```
wiki/blog/<show>/episodes/YYYY/MM/YYYY-MM-DD-slug.md   (transcripts, read only)
        |  agent follows scripts/PODCAST_SUMMARY_INSTRUCTIONS.md
        v       (scripts/podcast-pending.js lists what is missing)
podcast-summaries/<show>/YYYY-MM-DD-slug.md            (staging, committed)
        |  node scripts/sync-podcasts.js  (validates, transforms frontmatter)
        v
src/content/podcasts/<show>/YYYY/MM/slug.md            (collection `podcasts`)
        |  astro build
        v
/podcasts/<show>/YYYY/MM/slug/
```

- Staging lives in the blog repo (`podcast-summaries/`), not in the wiki,
  because the wiki is fed by transcription jobs and must stay read only for
  this workflow. `PODCAST_SUMMARIES_DIR` overrides the location.
- Summaries, never transcripts: thesis, 4-6 attributed key points, at most two
  verbatim quotes of about 30 words or fewer. `sync-podcasts.js` rejects files
  with more than 2 quotes, more than 600 body words, a `## Transcript` section,
  a missing Thesis/Key points section, or a date/show mismatch with the
  filename and folder.
- The sync drops working fields (`source_transcript`) and renames
  `date` -> `pubDate`, `duration_min` -> `durationMin`.
- The sync does not `git add` (unlike `sync-ainews.js`), because the repo may
  hold staged AIDB files from the ai-update workflow. Commit with explicit
  pathspecs. `--prune` deletes published files whose staging file is gone;
  without it they are reported as ORPHAN.
- Commit gotcha: `.git/hooks/pre-commit` runs `sync-ainews.js`, which does
  `git add src/content/ainews/`. If AIDB files are already staged by the
  ai-update workflow, they get swept into any commit, even one with explicit
  pathspecs. Use `git commit --no-verify -- <paths>` in that situation.

## Topics (all shows, one vocabulary)

The blog wiki has an LLM-wiki layer per show (Karpathy "LLM wiki" pattern):
per-episode extractions `<show>/extractions/<episode>.json` (entities and
concepts, role `central`/`notable`, claims with transcript-verified quotes;
AIDB's are at the repo root). Topic tags are built from them.

- Vocabulary: `src/data/podcast-taxonomy.json` (was `ainews-taxonomy.json`),
  shared by AIDB and all other shows: 20 topics, 13 companies, each mapping to
  canonical extraction names (after `scripts/wiki_aliases.json`), plus
  `keywords` for the summary-text fallback. Grown from the data:
  `node scripts/build-podcast-tags.mjs --report` lists the most central names
  across ALL shows' extractions that no tag covers. Only add tags; renaming a
  slug breaks tag URLs.
- AIDB: `scripts/build-ainews-tags.mjs` (unchanged scoring) writes
  `src/data/ainews-tags.json`; `sync-ainews.js` merges them into the AIDB
  frontmatter `tags`. Vocabulary changes reach AIDB on its next publish
  (`scripts/publish-ainews.sh`).
- Other shows: `node scripts/build-podcast-tags.mjs` writes
  - `src/data/podcast-tags.json` `{"<show>/<staging-basename>": [tags]}`:
    extraction scoring identical to AIDB (central = 3, notable = 1, same
    thresholds); for episodes without an extraction a conservative match of
    taxonomy names + keywords in title/description/thesis/key points (max 3
    topics + 3 companies; precision ~0.75 against the extraction tags);
  - `src/data/podcast-topic-stats.json`: `tagSource` per episode
    (`extraction` | `summary`) and, per tag and show (AIDB included), the 3
    most central related entities/concepts (excluding the tag's own names,
    hosts and, on topic tags, the big-company names).
  Re-running picks up new summaries and new extractions automatically; the
  backfill driver runs it after every batch.
- The controlled tags are merged at build time (`src/podcast-topics.mjs`,
  keyed by show + date + slug), so the episode files keep only their
  free-form `tags`. Decision: free-form tags stay secondary (small `#tag`
  links under the topic badges, `/podcasts/tags/<tag>/`, and a "Free-form
  tags" block on the per-show topic index); topic pages use only the
  controlled vocabulary.
- The GitHub Actions build never reads the wiki: everything is in `src/data/`.

## Monthly and yearly summaries

```
podcast-summaries/<show>/*.md  +  wiki extractions (ranked items, verified claims)
        |  node scripts/podcast-periodic-pack.mjs --show S --period YYYY-MM   (data pack)
        |  agent follows scripts/PODCAST_PERIODIC_INSTRUCTIONS.md
        v
podcast-periodic/<show>/YYYY-MM.md | YYYY.md          (staging, committed)
        |  node scripts/sync-podcasts.js [--periodic-only]   (validates)
        v
src/content/podcast-periodic/<show>/<period>.md       (collection `podcast-periodic`)
        v
/podcasts/<show>/periodic/<period>/
```

- Separate staging folder (not `podcast-summaries/<show>/periodic/`) so the
  backfill driver, which `git add`s `podcast-summaries` and
  `src/content/podcasts`, never sweeps them into its commits; separate
  collection so the episode schema stays strict.
- Written from the episode summaries and the extractions, never from
  transcripts. Backbone of `## Main themes` = the period's items ranked by
  central count, then mentions; `## Rising and fading` (share of analysed
  episodes vs the previous month/year; for a year with too little previous
  data, second half vs first half) and `## Topics` are computed by the pack
  script. At most 3 quotes, each <= 25 words and verbatim from a verified
  extraction quote.
- Validation (`scripts/lib/podcast-periodic.mjs`): sections, <= 800 words,
  quotes, `episodes` = `sources`, dates, and every `/podcasts/...` link must
  resolve to a published episode of that period, a tag, or a staged summary.
- Missing/stale: `node scripts/podcast-periodic-status.mjs [--year YYYY]`
  (month/year with >= 2 published episodes and no summary; stale = episodes
  added since `generated`, an in-progress period that has ended, or a year
  older than one of its months). Older years: generate after their backfill
  is complete.

## Routes

| Route | File |
|---|---|
| `/podcasts/` (show cards, latest monthly summary per show incl. AIDB, 15 most recent) | `src/pages/podcasts/index.astro` |
| `/podcasts/<show>/` (calendar + month list, links to topics and periodic) | `src/pages/podcasts/[show]/index.astro` + `src/components/PodcastEpisodeList.astro` |
| `/podcasts/<show>/YYYY/MM/<slug>/` | `src/pages/podcasts/[...slug].astro` |
| `/podcasts/<show>/tags/`, `/podcasts/<show>/tags/<tag>/` | `src/pages/podcasts/[show]/tags/` |
| `/podcasts/<show>/periodic/`, `/podcasts/<show>/periodic/<YYYY-MM or YYYY>/` | `src/pages/podcasts/[show]/periodic/` |
| `/podcasts/topics/`, `/podcasts/topics/<tag>/` (all shows incl. AIDB, "Across shows" block) | `src/pages/podcasts/topics/` + `src/lib/podcast-topic-episodes.ts` |
| `/podcasts/tags/<tag>/` (free-form tags) | `src/pages/podcasts/tags/[tag].astro` |
| `/podcasts/rss.xml` (all shows), `/podcasts/<show>/rss.xml` | `src/pages/podcasts/rss.xml.js`, `src/pages/podcasts/[show]/rss.xml.js` |
| AIDB: `/podcasts/ai-daily-brief/{,periodic/,tags/}` | `src/pages/podcasts/ai-daily-brief/` |

Header nav has a "Podcasts" entry. Show metadata (name, description, homepage,
URL slug = wiki folder name) is in `src/podcast-shows.mjs`, shared by the
schemas (`show` enum), the pages and the scripts. A show only gets pages once
it has at least one published summary.

## Separation from AIDB

- Different collections (`podcasts`, `podcast-periodic` vs `ainews`), sources
  and sync scripts; AIDB is not in `podcast-shows.mjs`. Shared: the taxonomy
  file, and the cross-show views (`/podcasts/`, `/podcasts/topics/`), which
  read AIDB's collection without changing it.

## Adding episodes

See the Hermes skill `podcast-blog-publish`, or:

```
node scripts/podcast-pending.js --show latent-space --latest 3
# write summaries per scripts/PODCAST_SUMMARY_INSTRUCTIONS.md
node scripts/sync-podcasts.js --dry-run && node scripts/sync-podcasts.js
node scripts/build-podcast-tags.mjs
node scripts/podcast-periodic-status.mjs --year 2026   # regenerate stale months
npm run build
```

## Open questions

- Should the AIDB tags be regenerated now with the extended vocabulary
  (changes tags on ~100 AIDB episodes), or wait for the next AIDB publish?
- Quotes from VTT-caption transcripts (Latent Space) have no speaker labels;
  attribution is inferred from context and should be reviewed.
- No Priors transcripts are mostly YouTube auto-captions (no punctuation, no
  speaker labels, garbled names); older Lex Fridman episodes (2018-2023) use
  YouTube captions too. Summaries of those episodes infer attribution from
  context. Paid transcription of these episodes would need Divya's approval.
- Shows added after the backfill driver's 2026 phase (Lex Fridman, No Priors)
  got their 2026 summaries written directly; the driver covers their older
  episodes (it only takes episodes before 2026-01-01 in its "older" phase).
