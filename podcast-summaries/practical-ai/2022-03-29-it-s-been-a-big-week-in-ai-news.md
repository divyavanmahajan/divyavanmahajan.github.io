---
title: "It's been a BIG week in AI news 🗞"
date: 2022-03-29
show: practical-ai
episode: 173
url: "https://share.transistor.fm/s/50dfee77"
duration_min: 41
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "BigScience's open training of a 176-billion-parameter multilingual model and NVIDIA's transformer-tuned H100 show AI scaling up, while the AI Index flags rising bias and concentration."
tags: ["large-language-models", "bigscience", "nvidia", "gpus", "ai-index"]
source_transcript: "practical-ai/episodes/2022/03/2022-03-29-it-s-been-a-big-week-in-ai-news.md"
draft: false
---

## Thesis

Daniel Whitenack and Chris Benson review a busy news week: BigScience training a large multilingual language model in public, NVIDIA's Hopper H100 GPU, and Stanford's AI Index 2022. Both welcome the gains in scale and cost, but Whitenack worries that hardware specialised for transformers could discourage new architectures, and Benson notes rising bias and concentration of investment.

## Key points

- **BigScience in public.** Whitenack describes a CERN-style collaboration of hundreds of researchers training a 176 billion parameter GPT-like model on 416 A100 GPUs for more than four months, using about 1.5 terabytes of text in 46 languages. His employer SIL International contributed multilingual data.
- **The long tail of languages.** Whitenack expects both larger multilingual models and adaptation methods, citing a Graham Neubig paper on lexicon-based expansion to thousands more languages.
- **NVIDIA H100.** Benson relays NVIDIA's claim of 30 times faster large language model training than the A100. Whitenack values MIG, which splits one GPU into smaller virtual GPUs for fine-tuning jobs, now with secure multi-tenant use.
- **Transformer engine concerns.** Whitenack worries hardware bias towards transformers penalises other research; Benson says the market serves the 99.999% running inference.
- **Simulation and Earth-2.** Benson sees Omniverse digital twins mattering for manufacturing; both discuss NVIDIA's Earth-2 climate supercomputer and GPU-driven fluid dynamics. Benson recounts a mountain wave flipping his plane over the Smoky Mountains.
- **AI Index 2022.** Language models are more capable but more biased; image classification training costs fell about 63% and training times improved 94% since 2018; private investment is soaring but concentrating; robotic arms are getting cheaper. Whitenack recommends NVIDIA's Deep Learning Institute courses.

## Quotes

> "Does it sort of penalize people that are exploring new, different, crazy architecture types that might be the next big thing that comes along?" — Daniel Whitenack

> "bigger is not bigger, maybe better in many cases, but not if it's bigger bias." — Chris Benson
