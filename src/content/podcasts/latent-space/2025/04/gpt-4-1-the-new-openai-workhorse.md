---
title: '⚡️GPT 4.1: The New OpenAI Workhorse'
description: >-
  OpenAI post-training researchers say GPT-4.1 was built for developers, and
  that most of its gains in coding, instruction following and million-token
  context came from post-training rather than scale.
pubDate: '2025-04-15'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/gpt_4_1_the_new_openai_workhorse
durationMin: 42
hosts:
  - Alessio Fanelli
  - swyx
guests: []
tags:
  - openai
  - llm-evaluation
  - long-context
  - post-training
  - prompt-engineering
draft: false
---
## Thesis

Alessio Fanelli and swyx talk with Michelle and Josh from OpenAI's post-training team about the GPT-4.1 family (4.1, Mini and Nano), which was tested on OpenRouter as Quasar Alpha and Optimus. The guests argue that most gains in coding, instruction following and long context came from new post-training techniques rather than bigger pre-training runs. Their advice to developers is to use the fastest model that does the job.

## Key points

- **Naming and lineage.** 4.1 improves a lot on 4o, but it is smaller and cheaper than GPT-4.5 and does not beat it on every eval, so it was not numbered above 4.5. Nano and Mini are new pre-trains, the full model is a new mid-train, and 4.5 is being deprecated.
- **Long context beyond needles.** Josh says single needle-in-a-haystack was easy to saturate. The real work went into harder evals that OpenAI open-sourced: MRCR (ordering) and Graph Walks, an idealised multi-hop test where early models looped searching for edges.
- **Evals from real usage.** An internal instruction-following eval built from opt-in API data covers instructions that are hard to grade. The guests report that extraneous code edits fell from 9% with 4o to 2% with 4.1.
- **Prompting guide.** The guide says caps and bribes are not needed, XML works well for inputs, and instructions repeated at the top and bottom beat either position alone. The guests say a "keep going" persistence prompt is part of the SWE-bench harness, not a 20% gain on its own.
- **Coding and vision.** 4.1 scores 55 on SWE-bench against about 41 for o1. One researcher reportedly had it complete 49 of 50 commits on a large PR. The vision gains come from pre-training, and the Mini model is notably stronger there.
- **Developer terms.** Fine-tuning is available on day one, and the guests say preference fine-tuning is underused. Prompt caching discounts rose from 50% to 75%, and free inference applies to opt-in data sharing until April 30.

## Quotes

> "single needle in a haystack, we were able to saturate pretty easily, and then the most of the work came at this, these harder tasks." — Josh

> "I think the answer is always going to be the fastest model that accomplishes your task, right?" — OpenAI guest
