---
title: 'Ox Alpha, Explained Without the Hype'
description: >-
  Fingerprinting points to Z.ai's unreleased multimodal GLM behind the anonymous
  Ox Alpha. Ksenia Se argues the real story is free public evaluation and the
  growing power of launch platforms.
pubDate: '2026-08-25'
show: turing-post
url: >-
  https://www.turingpost.com/podcast/s/turing_post/ox_alpha_explained_without_the_hype
durationMin: 18
hosts:
  - Ksenia Se
guests: []
tags:
  - stealth-models
  - model-evaluation
  - coding-agents
  - glm
  - data-privacy
draft: false
---
## Thesis

Ksenia Se walks through the evidence that Ox Alpha, an anonymous free model on OpenRouter and OpenCode, comes from Z.ai's unreleased multimodal GLM. She argues that who built it matters less than what the lab got for free: hundreds of thousands of developers running real agentic workloads and publishing the results. She also argues that the platform where a model launches is starting to matter as much as the lab that trained it.

## Key points

- **The launch.** Ox Alpha appeared on 20 August as `stealth/ox-alpha`. It has a context window of just over one million tokens, takes text, image and video input, produces up to 130,000 output tokens, and was free for about a week.
- **Fingerprinting.** Asking the model who built it proves nothing. Instead, token counts matched the GLM tokenizer on 95 of 95 probe strings, and malformed requests returned Z.ai-style errors, including a Java class path matching Zhipu's API. Video token counts matched GLM-5V Turbo. Z.ai had done this before with GLM-5 as "Pony Alpha".
- **Users as the eval.** By 24 August OpenCode showed about 24 trillion tokens across almost eight million sessions with a 93% cache hit rate. She argues that this shows how the model behaves during a task, which benchmarks and arenas cannot.
- **How good it is.** Two full DeepSWE community runs scored 58.4% and 64.6% on 113 tasks. Leaders were around 74% (Claude Opus 5) and 73% (GPT-5.6 Sol). The viral 80% came from 10 handpicked tasks. Se says most failures came close to working. The weak spots were invalid tool calls, which cost 11 tasks, and speed of about 24 tokens per second.
- **Conflicting data terms.** OpenCode promises zero retention. OpenRouter's model page says prompts are retained but not used for training, and its general stealth terms allow training. Se advises keeping private code and credentials out until the operator and the applicable terms are named.
- **Platforms gain power.** Stripe's reported $7.5 billion OpenRouter deal shows, she argues, that routing layers now decide which models get reach, free tiers and visibility.

## Quotes

> "So we thought we were investigating the model, but from the other side of the API, the model was investigating us." — Ksenia Se

> "Vibes moved the story back and forth for the whole day, but the token counts did not move at all." — Ksenia Se
