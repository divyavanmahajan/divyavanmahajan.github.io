# podcast-summaries (staging)

Episode summaries for the /podcasts/ section, one folder per show
(`practical-ai`, `latent-space`, `cognitive-revolution`, `dwarkesh`).
Files are named like the wiki transcript: `YYYY-MM-DD-<slug>.md`.

Write them per `scripts/PODCAST_SUMMARY_INSTRUCTIONS.md`, then run
`node scripts/sync-podcasts.js` to publish into `src/content/podcasts/`.
Edit summaries HERE, not in `src/content/podcasts/` (the sync overwrites).
The AI Daily Brief does not belong here; it uses `scripts/sync-ainews.js`.
See `docs/podcasts.md`.
