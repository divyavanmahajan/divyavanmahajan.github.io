# Monthly cross-show podcast digest: theme-writing instructions

Page: `/podcasts/digest/YYYY-MM/`, styled after IBM Carbon. Data: `src/data/podcast-digests/YYYY-MM.json`,
built by `node scripts/podcast-digest.mjs --month YYYY-MM`. Your job is only the themes file:
`podcast-digests/themes/YYYY-MM.json`.

## Input
Get the pack with `node scripts/podcast-digest.mjs --pack --month YYYY-MM`. It lists every
episode of the month across all shows (The AI Daily Brief, Practical AI, Latent Space, The
Cognitive Revolution, Dwarkesh, Lex Fridman, No Priors, Turing Post, Epoch After Hours, The Pragmatic Engineer, The Moonshot Podcast, Moonshots with Peter Diamandis): a ref, the show, the title and a
2-3 sentence summary. Work from the pack only. Do not read transcripts.

## Output: `podcast-digests/themes/YYYY-MM.json`
```json
{
  "period": "YYYY-MM",
  "episodeCount": 57,
  "headline": "Two sentences: what dominated the month and the thread underneath it.",
  "themes": [
    {"title": "Short noun phrase (2-6 words)",
     "body": "60-90 words. What happened, who said it and why it matters. Name companies, models, people and numbers that appear in the pack summaries.",
     "eps": ["aidb/2026-03-04", "latent-space/2026-03-10", "cognitive-revolution/2026-03-12"]}
  ],
  "implications": ["4-5 bullets, 25-45 words each: what the month means for enterprise architects and technology leaders adopting AI."]
}
```

## Rules
- Write 6-10 themes, ordered by weight (episode count and prominence). The first theme is
  the story of the month.
- Each theme cites 3-10 episodes, from at least two different shows wherever the pack allows.
  A ref is `<show>/<YYYY-MM-DD>`, copied from the pack. If a show has two episodes on the same
  date, add the slug prefix from the pack to tell them apart.
- Facts must come from the pack summaries. Attribute claims ("NLW argues", "Nathan Labenz's
  guest says"). Never add model names, numbers or events that are not in the pack. These are
  claims as reported, not verified facts.
- Don't make a theme for off-topic episodes (Dwarkesh history episodes, Lex Fridman non-AI
  guests). Leave them out of the themes; they still appear in the episode list.
- Implications are for a public blog. Write them generically for enterprise architects and
  technology leaders. Never mention Volvo, internal initiatives, colleagues or anything internal.
- Plain, concrete English. No hype words ("game-changing", "revolutionary"), no em-dash chains.
- `episodeCount` = the episode count in the pack header. The status command uses it to flag
  themes that are stale.

## Validate
`node scripts/podcast-digest.mjs --check --month YYYY-MM` must print `themes: ok`. Then
rebuild the data file with `node scripts/podcast-digest.mjs --month YYYY-MM`.
