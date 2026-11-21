---
title: "AI Fundamentals: Datasets 101"
date: 2023-07-17
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/ai_fundamentals_datasets_101"
duration_min: 61
hosts: ["Alessio Fanelli", "swyx"]
guests: []
description: "swyx and Alessio Fanelli explain tokens, scaling laws and the core LLM training datasets, arguing that data quality, licensing and curation now matter more than raw size."
tags: ["datasets", "tokenization", "scaling-laws", "training-data", "copyright"]
source_transcript: "latent-space/episodes/2023/07/2023-07-17-ai-fundamentals-datasets-101.md"
draft: false
---

## Thesis

In this hosts-only explainer, swyx and Alessio Fanelli push back on the idea that GPT is "trained on the whole internet". They walk through tokens, scaling laws and the major public datasets. Both argue that the field is moving from model size to data quality, and that dataset creators deserve more credit, since everyone else builds on their work.

## Key points

- **Tokens.** Alessio shows that "red" has several token IDs depending on case and spacing. swyx explains that GPT-3 splits numbers like words, which hurts its maths, and that English bias makes the same sentence cost 7 tokens in French and 15 in Chinese, against 4 in English.
- **Scaling laws.** swyx traces the ratio from Kaplan (about 1.7 tokens per parameter, so 300B tokens for GPT-3's 175B parameters) to Chinchilla (20x) to what Alessio calls "Llama optimal" (about 200x). This reflects a move from compute-optimal to inference-optimal models.
- **Core datasets.** Alessio describes Common Crawl as a nonprofit crawl of 3.1 billion pages, only 46% of it English. C4 is filtered with Shutterstock's bad-words list, and patents.google.com is its largest domain. swyx notes that 1% of editors write 77% of Wikipedia articles. He also covers WebText, Books, The Stack (6 TB of permissively licensed code) and LAION-5B; Alessio adds The Pile.
- **Data as a moat.** swyx points to BloombergGPT and to Reddit and Stack Overflow closing their APIs as companies realise their data is valuable.
- **Quality and curation.** swyx cites Microsoft's Phi-1 (1.3B parameters trained on 7B tokens) matching much larger code models, and Falcon 40B's new dataset. He cites research showing that duplicated text is regurgitated far more often. Alessio notes GPT-4 scored 10/10 on pre-2021 Codeforces problems but 0/10 on newer ones, which suggests contamination.
- **Licensing.** Alessio covers the Copilot and Stable Diffusion lawsuits and GitHub's offer to pay users' legal costs. swyx describes OpenAI's terms of use and the untested RAIL licence.

## Quotes

> "everyone wants to be data scientist, no one wants to be a data janitor" — swyx

> "Let's spend more time applauding dataset creators because we are downstream of them." — swyx
