# Podcasts section (non-AIDB podcast summaries)

Status: pilot (3 most recent episodes per show, November 2026).

## Why

The AI Daily Brief (AIDB) already has a section (`/ainews/`) built from the
notes in `~/projects/volvo/ai-update/notes/`. Divya also follows Practical AI,
Latent Space, The Cognitive Revolution and Dwarkesh Podcast; their transcripts
live in the blog wiki repo (`~/projects/wiki/blog/<show>/episodes/YYYY/MM/`).
This section publishes short per-episode summaries of those shows with the same
shape as AIDB (listing by year/month, one page per episode, RSS), but as a
separate collection, pipeline and URL space.

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

## Routes

| Route | File |
|---|---|
| `/podcasts/` (show cards + 10 most recent) | `src/pages/podcasts/index.astro` |
| `/podcasts/<show>/` (calendar + month list) | `src/pages/podcasts/[show]/index.astro` + `src/components/PodcastEpisodeList.astro` |
| `/podcasts/<show>/YYYY/MM/<slug>/` | `src/pages/podcasts/[...slug].astro` |
| `/podcasts/rss.xml` (all shows) | `src/pages/podcasts/rss.xml.js` |
| `/podcasts/<show>/rss.xml` | `src/pages/podcasts/[show]/rss.xml.js` |
| `/podcasts/tags/<tag>/` | `src/pages/podcasts/tags/[tag].astro` |

Header nav has a "Podcasts" entry next to "AI Brief". Show metadata (name,
description, homepage, URL slug = wiki folder name) is in
`src/podcast-shows.mjs`, shared by the schema (`show` enum), the pages and both
scripts. A show only gets pages once it has at least one published summary.

## Separation from AIDB

- Different collection (`podcasts` vs `ainews`), different source, different
  sync script; `sync-ainews.js`, `src/pages/ainews/`, `rehype-ainews-dates.js`
  (matches only `/ainews/` links) and `ainews-redirects.mjs` are unchanged.
- AIDB is not in `podcast-shows.mjs`, so it cannot be synced here by accident.
- Podcast tags have their own pages under `/podcasts/tags/`, so they do not
  flood the blog's `/tags/` taxonomy.

## Adding episodes

See the Hermes skill `podcast-blog-publish`, or:

```
node scripts/podcast-pending.js --show latent-space --latest 3
# write summaries per scripts/PODCAST_SUMMARY_INSTRUCTIONS.md
node scripts/sync-podcasts.js --dry-run && node scripts/sync-podcasts.js
npm run build
```

## Open questions

- Back-catalogue: summarise only new episodes going forward, or backfill?
  (Practical AI alone has ~400 transcripts; cost and review time scale with it.)
- Should podcast summaries also appear on the homepage or in the AIDB monthly
  synthesis? Currently not.
- Quotes from VTT-caption transcripts (Latent Space) have no speaker labels;
  attribution is inferred from context and should be reviewed.
