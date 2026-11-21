---
title: "How NotebookLM Was Made"
date: 2024-10-25
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/how_notebooklm_was_made"
duration_min: 74
hosts: ["Alessio Fanelli", "swyx"]
description: "NotebookLM's audio overviews worked because a small Google Labs team held an opinionated quality bar, shipped one format and treated audio as an editorial transformation, not text-to-speech."
tags: ["notebooklm", "audio-generation", "ai-product-management", "evals", "google-labs"]
source_transcript: "latent-space/episodes/2024/10/2024-10-25-how-notebooklm-was-made.md"
draft: false
---

## Thesis

Raiza Martin, who leads NotebookLM in Google Labs, and Usama Shafqat, who built the audio overview pipeline, argue that the Deep Dive format succeeded because it transforms sources into a dialogue between two AI personas instead of reading text aloud. They credit a strong product point of view, one push-button format and heavy team listening for the result, and say the harder work starts as they add formats and controls.

## Key points

- **Origins.** Martin traces the product to "Talk to Small Corpus", an October 2022 prototype by an engineer named Adam, which became Project Tailwind at I/O 2023: Q&A, summaries and key topics over up to 10 documents. Her own experience as an adult learner shaped the focus on studying.
- **Community and unlaunching.** The Discord has about 65,000 members and spots outages faster than internal monitoring. Martin wants a small core feature set and is sunsetting a little-used highlight-and-transform feature through a 50/50 experiment.
- **How the audio works.** Shafqat says two personas questioning each other unroll the material, combining Gemini 1.5's long context with DeepMind audio models; text generation signals where pauses, laughter and interjections belong.
- **Steven Johnson as the template.** Martin calls the author of 14 books the team's "chief dreamer" and treats his research workflow, such as analysing PDFs of Marie Curie's handwritten notes, as the product to bring to everyone.
- **Evals for entertainment.** The team listened critically before formal rater evals on a Likert scale; quality was defined largely as "is it a Deep Dive". Shafqat says engagement needs structure, tension and withheld information, not constant agreement.
- **No knobs, yet.** Martin mocked up user controls and found them unmagical; planned work includes more languages and dialects, prompt controls as a fast follow, interactive call-in and possibly an API.

## Quotes

> "There is a transform that needs to happen that is inherently editorial" — Raiza Martin

> "I don't want to read your 100-slide deck, but I'll listen to a 16-minute audio overview on the drive home." — Raiza Martin
