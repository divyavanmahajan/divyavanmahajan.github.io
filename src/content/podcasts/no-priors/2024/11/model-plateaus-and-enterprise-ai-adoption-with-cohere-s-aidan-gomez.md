---
title: Model Plateaus and Enterprise AI Adoption with Cohere's Aidan Gomez
description: >-
  Cohere's Aidan Gomez argues that model scaling is flattening, inference-time
  reasoning is the new lever, and enterprises already have years of integration
  work with today's models.
pubDate: '2024-11-21'
show: no-priors
episode: 91
url: 'https://www.youtube.com/watch?v=2XRpTZpHjfc'
youtube: 'https://www.youtube.com/watch?v=2XRpTZpHjfc'
durationMin: 44
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Aidan Gomez
tags:
  - enterprise-ai
  - scaling-laws
  - reasoning
  - inference-compute
  - pretraining
draft: false
---
## Thesis

Aidan Gomez, co-founder and CEO of Cohere and co-author of "Attention Is All You Need", tells Sarah Guo that language model capability is entering a flatter part of the curve as models run into the limits of human expert knowledge. He argues this matters little for enterprises: current models are good enough for most business tasks, and there is roughly half a decade of integration work ahead even without a new model.

## Key points

- **Enterprise focus.** Gomez says Cohere will not build a ChatGPT competitor. Common uses are Q&A over manuals and HR or IT documents, briefings from decades-long patient health records, and a research assistant that helped an insurer of industrial projects answer RFPs faster.
- **Why pilots fail.** He attributes many failed 2023 proofs of concept to prompt sensitivity and poorly formatted retrieval data in RAG systems. Cohere's response is more robust models and more structured APIs.
- **Barriers.** Trust, security and privacy come first, especially in finance and healthcare where data cannot leave a VPC; Cohere deploys on-premises or in VPC. Developer know-how is the second barrier, which he expects to take two or three more years to spread.
- **Specialisation and pretraining.** Gomez recommends starting with fine-tuning and moving back to post-training and partial pretraining only if needed. He cites a Japanese model built with Fujitsu and says large enterprises can run $5 million continuation pretraining instead of a $50 million run.
- **Six months behind.** A model as good as GPT-4 on enterprise tasks can now be built for $10-20 million, so Cohere chooses to trail the frontier labs rather than spend billions a year leading.
- **Reasoning and pricing.** Inference-time reasoning gives a second lever: customers can pay for more compute today instead of waiting six to twelve months for a bigger training run. Gomez thinks the market has not priced this in, and that falling model prices reflect price dumping, not commoditisation.

## Quotes

> "to the folks who say that no one should be pre-training no one outside of let's say AGI Labs should be pre-t trining that's empirically wrong" — Aidan Gomez

> "we have to repave every road on the planet and there's like four or five companies that know how to make concrete" — Aidan Gomez
