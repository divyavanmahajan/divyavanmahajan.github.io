---
title: 'Llama 2, 3 & 4: Synthetic Data, RLHF, Agents on the path to Open Source AGI'
description: >-
  Meta's Thomas Scialom explains how Llama 3 405B was built: over-training past
  Chinchilla, much more and cleaner data, RLHF on synthetic data, and agents as
  the Llama 4 focus.
pubDate: '2024-07-23'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/llama_2_3_4_synthetic_data_rlhf_agents_on_the_path_to_open_source_agi
durationMin: 65
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Thomas Scialom
tags:
  - llama
  - rlhf
  - synthetic-data
  - scaling-laws
  - open-source-models
  - agents
draft: false
---
## Thesis

Thomas Scialom, who led Llama 2 and post-training for Llama 3 at Meta, argues that open models closed most of the gap to GPT-4 by scaling data quality and leaning on RLHF rather than human-written answers. Humans judge outputs better than they write them, so preference training lets models exceed their annotators. He sees agents as the next step, which is where Llama 4 work is heading.

## Key points

- **The Chinchilla trap.** Scialom says compute-optimal training suits a paper result, but models used by billions of people should be trained much longer at smaller sizes because inference cost dominates. Meta still built a 405B flagship to be "number one", and says an FP8-quantised version fits on one node with a 128k context.
- **Data, not architecture.** Llama 3 keeps the Llama 2 recipe but trains on 15 trillion tokens instead of two trillion. Llama 2 was used to classify and topic-tag web data, and the vocabulary grew to 128k tokens for multilingual support, cutting tokens per text by about 30%.
- **Why RLHF works.** In Llama 2 the model's answers soon beat the human-written annotations, so Scialom credits post-training gains "a hundred percent" to RLHF. Llama 3 post-training started from synthetic answers produced by Llama 2 rather than new human-written ones. A "teacher critic" step has humans edit the better answer when both samples are bad, for example in code.
- **Evals.** Benchmarks stop being useful once teams optimise for them, so Meta mixes reward models, model-as-judge, human evaluation and win rates between successive RLHF rounds. Scialom wants evals that reward models for saying "I don't know".
- **Agents and Llama 4.** Llama 3 ships with zero-shot tool calling. On the GAIA benchmark he co-authored, GPT-4 alone scores near zero on level one while orchestrated agents (AutoGen, Hugging Face agent) reach about 60%. He wants architectures that spend variable compute per token instead of thinking only through extra tokens.
- **Advice to founders.** Scialom likes the agent startups Lindy and OpenDevin, and notes that few application companies have broken out yet.

## Quotes

> "So I can actually annotate data beyond my own skills at creating them. That's the magic of RLHF." — Thomas Scialom

> "assume always the next generation will get better. So if your business will benefit from a new generation with better abilities, that's a good business." — Thomas Scialom
