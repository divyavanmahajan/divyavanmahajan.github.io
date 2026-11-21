---
title: >-
  Training a SOTA Code LLM in 1 week and Quantifying the Vibes — with Reza
  Shabani of Replit
description: >-
  Replit's head of AI explains how months of data infrastructure let the team
  train an open 2.7B code model in a week, and why 'vibes' matter more than
  HumanEval.
pubDate: '2023-05-03'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/training_a_sota_code_llm_in_1_week_and_quantifying_the_vibes_with_reza_shabani_of_replit
durationMin: 70
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Reza Shabani
tags:
  - code-llms
  - model-training
  - benchmarks
  - data-infrastructure
  - open-source-ai
draft: false
---
## Thesis

Reza Shabani, head of AI at Replit and a former quant at BlackRock, argues that Replit could train a competitive code model in about a week only because it had already spent months building data pipelines. He says HumanEval scores miss what users feel, so Replit relies on CEO Amjad Masad's informal "vibes" testing. He also says his results suggest current models are under-trained.

## Key points

- **Data first.** When Shabani joined Replit at about 30 people, he could not even query the most-forked repl. Rebuilding the data infrastructure for some 230 million repls laid the groundwork for Ghostwriter, which first shipped in August 2022 as a distilled version of Salesforce's CodeGen.
- **Amjad Eval.** Fine-tuned CodeGen scored well on HumanEval but failed the vibes test. Shabani shows examples where Replit's model beats CodeGen on context and gets a JavaScript setTimeout question right that Bard got wrong. He adds that latency and usefulness make up much of the vibe.
- **The YOLO run.** Amjad pushed the team to train on all their data in time for Developer Day. Following Michele's idea, they ran multiple epochs on 256 A100s. The result, replit-code-v1-3b, is a 2.7B-parameter model trained on 525 billion tokens of permissively licensed code, with its own 32,000-token vocabulary.
- **Beginner code helps.** A second model, further tuned on public Replit data (about 680 billion tokens seen in total), reasoned better. swyx puts the common-sense gain at 20% to 30%. Shabani credits tutorial-style beginner code.
- **Beyond Chinchilla.** Shabani says the results imply models, possibly even LLaMA, are under-trained relative to the 20-tokens-per-parameter rule. He credits MosaicML with fault tolerance and well-tuned training configurations.
- **Next: an IDE agent.** Shabani wants to train on Replit's operational-transform data so that Ghostwriter can drive the IDE and build whole software projects, not only complete code.

## Quotes

> "our results seem to imply that we've really been under-training these, these models." — Reza Shabani

> "what, what would've occurred in probably, like, two, three months, Amjad got us to do it in, in a week." — Reza Shabani
