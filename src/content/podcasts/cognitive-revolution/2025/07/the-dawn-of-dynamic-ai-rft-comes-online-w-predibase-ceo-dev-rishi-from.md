---
title: >-
  The Dawn of Dynamic AI: RFT Comes Online, w/ Predibase CEO Dev Rishi, from
  Inference by Turing Post
description: >-
  Predibase CEO Dev Rishi argues reinforcement fine-tuning will turn static
  models into continuously learning, specialised systems fed by production
  feedback.
pubDate: '2025-07-16'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/the-dawn-of-dynamic-ai-rft-comes-online-w-predibase-ceo-dev-rishi-from-inference-by-turing-post/
youtube: 'https://www.youtube.com/watch?v=dyCGSYcqpZM'
durationMin: 36
hosts:
  - Nathan Labenz
guests:
  - Dev Rishi
tags:
  - reinforcement-fine-tuning
  - continuous-learning
  - inference
  - open-source-models
  - enterprise-ai
draft: false
---
## Thesis

In this crossover from Inference by Turing Post, Predibase CEO Dev Rishi tells host Kasenya Seh that companies will move from static models to pipelines that keep improving models in production, with reinforcement fine-tuning (RFT) as the core technique. He expects "practical, specialized intelligence" rather than AGI to drive enterprise value. Nathan Labenz's intro adds that specialist models might partly undercut the economic case for hyperscaling, while warning about reward hacking.

## Key points

- **RFT needs little data.** Rishi says RFT replaces large labelled datasets with about a dozen examples plus reward functions, e.g. points for correct formatting, compiling code and passing unit tests; Predibase claims to be the first end-to-end platform offering it.
- **Closing the loop.** Healthcare customers building patient co-pilots combine LLM judges with clinician labels as continuous feedback; Predibase has launched automatic collection of production prompts and responses.
- **Agents are brittle.** Rishi notes that 90% accuracy per call across five calls drops below 50% overall, a lesson he links to his time as a Google Assistant product manager.
- **Narrow over general.** He cites Checkr's background-check extraction as typical enterprise work and expects a mix of open and closed models, not one model ruling all.
- **Inference gets hard in production.** Prototypes are easy with open-source LoRAX, but 99.9-99.999% SLAs, multi-region replication and GPU cost are hard; he predicts "intelligent inference" tied to post-training.
- **Evaluation is the gap.** Teams use holdout data, LLM-as-judge, or shipped-product "vibes"; he says open models such as DeepSeek R1, Qwen 3 and Llama 4 now match commercial ones ahead of his schedule.

## Quotes

> "generalized intelligence is great, but I don't need my point of sale system to recite French poetry." — Dev Rishi

> "So the goal with reinforcement fine tuning is if you can measure it, you can improve it." — Dev Rishi
