# Daily cross-show podcast summary: writing instructions

Page: `/podcasts/daily/YYYY-MM-DD/`, styled after IBM Carbon like the monthly digest. Data:
`src/data/podcast-daily/YYYY-MM-DD.json`, built by `node scripts/podcast-daily.mjs --day YYYY-MM-DD`.
Your job is only the text file: `podcast-daily/themes/YYYY-MM-DD.json`. The page lists every
episode of the day with its summary and links on its own; you write what sits above that list.

## Input
Get the pack with `node scripts/podcast-daily.mjs --pack --day YYYY-MM-DD`. It lists every episode
published that day across all shows (The AI Daily Brief, Practical AI, Latent Space, The Cognitive
Revolution, Dwarkesh, Lex Fridman, No Priors, Turing Post, Epoch After Hours, The Pragmatic Engineer,
The Moonshot Podcast, Moonshots with Peter Diamandis): a ref in brackets, the show, the title, the
guests, a 2-3 sentence summary and the central items of the episode with claims as reported on the
show. Work from the pack only. Do not read transcripts or browse the web.

## Output: `podcast-daily/themes/YYYY-MM-DD.json`
```json
{
  "date": "YYYY-MM-DD",
  "episodeCount": 5,
  "headline": "One or two sentences: what mattered across the shows that day.",
  "themes": [
    {"title": "Short noun phrase (2-6 words)",
     "body": "40-70 words. What was said, by whom, and the concrete detail behind it (companies, models, people, numbers from the pack).",
     "eps": ["aidb/2026-11-19", "moonshots-diamandis/2026-11-19"]}
  ],
  "whyItMatters": "One sentence (at most ~45 words) for enterprise architects and technology leaders."
}
```

## Rules
- `episodeCount` = the episode count in the pack header (the status command uses it to flag
  stale text when an episode lands later).
- `headline`: 1-2 sentences, at most 60 words. Lead with the biggest story of the day, not a list
  of every show.
- 2-5 themes, ordered by weight (a day with 1 episode may have 1-2 themes; a day with 2 episodes
  usually 2). Each body 40-70 words. Where two or more shows touched the same subject, make it one
  cross-show theme that cites all of them. Different subjects stay separate themes; do not force
  connections that the pack does not support.
- Refs: copy `<show>/<YYYY-MM-DD>` from the pack brackets. If a show has two episodes that day,
  add the slug prefix shown in the brackets (e.g. `latent-space/2026-11-19-why-linear`). Every ref
  must resolve; every theme cites at least one episode.
- Facts only from the pack. Attribute claims ("NLW argues", "Cordova says", "the hosts claim").
  Never add model names, numbers, dates or events that are not in the pack. These are claims as
  reported on the shows, not verified facts.
- Off-topic episodes (a Lex Fridman crime or history guest, a Dwarkesh history episode) can get
  their own short theme if the day is thin, otherwise leave them out of the themes; they still
  appear in the episode list. Biology/biotech/health episodes: stay at a high level (business or
  policy angle), no technical detail.
- `whyItMatters`: one line for enterprise architects and technology leaders, drawn from the day's
  themes. This is a public blog: write generically. Never mention Volvo, any employer, internal
  initiatives, colleagues or anything internal.
- Plain, concrete English. No hype words (game-changing, revolutionary, groundbreaking,
  unprecedented, seismic, mind-blowing, paradigm shift, supercharge), no em-dash chains, no
  rhetorical questions.

## Validate
`node scripts/podcast-daily.mjs --check --day YYYY-MM-DD` must print `themes: ok` (it may also say
`NO-DATA`/`STALE-DATA` until the data file is rebuilt). Then rebuild the data file with
`node scripts/podcast-daily.mjs --day YYYY-MM-DD` and re-run the check: it must exit 0.
