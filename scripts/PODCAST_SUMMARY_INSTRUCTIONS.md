# Podcast episode summary instructions

Prompt/spec for the agent (Hermes, Claude Code, a subagent) that writes ONE
episode summary for the /podcasts/ section of the blog. The AI Daily Brief is
NOT covered here: it has its own notes pipeline (`scripts/sync-ainews.js`).

## Input

A transcript file in the blog wiki repo (read only, never edit or commit there):

    /Users/divya/projects/wiki/blog/<show>/episodes/YYYY/MM/YYYY-MM-DD-<slug>.md

It has YAML frontmatter (title, date, show, episode, url, youtube,
duration_min, hosts, guests, ...), a `## Show notes` section and a
`## Transcript` section. List the episodes that still need a summary with:

    node scripts/podcast-pending.js --show <show> --latest 3

## Output

Exactly one file per episode, in the staging folder of the blog repo:

    /Users/divya/projects/astro-blog/podcast-summaries/<show>/YYYY-MM-DD-<slug>.md

Use the SAME filename as the transcript (date + slug). `<show>` is the wiki
folder name (`practical-ai`, `latent-space`, `cognitive-revolution`,
`dwarkesh`). Never write into `src/content/` directly; the sync script does that.

### Frontmatter

Copy facts from the transcript frontmatter. Do not invent values; omit an
optional field if the transcript has no value for it.

```yaml
---
title: "Exact episode title from the transcript frontmatter"
date: 2026-11-19              # transcript `date`
show: practical-ai            # wiki folder name, not the display name
episode: 381                  # optional, only if present
url: "https://..."            # transcript `url` (original episode page)
youtube: "https://..."        # optional
duration_min: 45              # optional
hosts: ["Chris Benson"]
guests: ["Gautham Pallapa"]   # [] for solo/host-only episodes
description: "One sentence (max ~30 words): the episode's core argument, not 'In this episode...'."
tags: ["enterprise-ai", "agents", "banking"]   # 3-6 lowercase kebab-case topic tags; no show name, no 'podcast'
source_transcript: "practical-ai/episodes/2026/11/2026-11-19-building-human-centered-ai.md"  # relative to the wiki repo; dropped on sync
draft: false
---
```

### Body (exactly these sections, in this order)

```markdown
## Thesis

2-4 sentences: the central argument or takeaway of the conversation, in your
own words, naming who argues it.

## Key points

- **Topic in a few words.** One or two sentences, attributed (e.g. "Pallapa
  argues ..."). Include concrete numbers, names, products and examples.
- (4-6 bullets total)

## Quotes

> "Short verbatim quote, max ~30 words." — Speaker Name

> "Optional second quote." — Speaker Name
```

## Rules

1. NO TRANSCRIPT REPRODUCTION. Copyright belongs to the show. Paraphrase.
   At most TWO quotes, each at most ~30 words, copied character-for-character
   from the transcript (fix only obvious transcription typos inside brackets).
   The whole body should be 200-400 words.
2. VERIFY. Every number, name, company, product and quote must appear in the
   transcript or show notes. Grep the transcript for each quote before saving.
   If a transcript renders a number oddly (e.g. "10 x"), keep the meaning.
3. ATTRIBUTE. Make it clear who said what (host vs guest). Never present a
   guest's opinion as fact. Opinions of the summarizer do not belong here.
4. SKIP sponsor reads, ads, intros/outros and show-notes link lists.
5. Style: plain, direct English; no hype words ("game-changing",
   "fascinating"); no "In this episode". British or American spelling, but
   be consistent within a file.
6. Use straight ASCII double quotes in YAML. Escape inner double quotes or use
   single quotes around the value.
7. If the transcript is missing, truncated or obviously still being written
   (for example a Practical AI back-catalogue job is in progress), skip it and
   report it instead of guessing.

## After writing

    node scripts/sync-podcasts.js --dry-run     # validates and shows NEW/UPDATED
    node scripts/sync-podcasts.js               # writes src/content/podcasts/
    npx astro build                             # or npm run build
