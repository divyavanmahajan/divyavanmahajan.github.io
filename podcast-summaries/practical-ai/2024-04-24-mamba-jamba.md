---
title: "Mamba & Jamba"
date: 2024-04-24
show: practical-ai
episode: 266
url: "https://share.transistor.fm/s/ab7644a6"
duration_min: 41
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Yoav Shoham"]
description: "AI21 co-founder Yoav Shoham argues enterprise LLMs need reliability and low serving cost, which is why Jamba mixes Mamba state-space layers with occasional attention layers."
tags: ["model-architecture", "state-space-models", "enterprise-ai", "open-models", "ai-systems"]
source_transcript: "practical-ai/episodes/2024/04/2024-04-24-mamba-jamba.md"
draft: false
---

## Thesis

Yoav Shoham, co-founder and co-CEO of AI21 and professor emeritus at Stanford, argues that enterprises will only deploy language models that are reliable and cheap to serve. AI21 pursues this through task-specific models, AI systems wrapped around models, and Jamba, an open hybrid model that combines the Mamba state-space architecture with transformer attention. In the long run, he says, models must actually understand what they say.

## Key points

- **Why AI21 exists.** Shoham says the company was founded a little over six years ago on the belief that deep learning is necessary but not sufficient for reasoning. He notes that 80% of enterprise data is text, mostly unused, and cites manuals, summarisation of 10-K reports and product descriptions as use cases.
- **Reliability and cost.** Being brilliant 95% of the time and wrong 5% is fatal in business writing, he argues. In one test a large financial institution compared AI21's task-specific summarisation model with general-purpose models on several hundred documents and found AI21's better.
- **Systems, not models.** Even task-specific models are small systems with pre-processing and validators. Cascading LLM calls compounds cost and errors, so Shoham expects orchestration layers he calls an "AI OS", built by developers, data scientists, low-code users and DevOps together.
- **From Jurassic to Jamba.** Jurassic-1 had 178 billion parameters and a 250,000-token vocabulary. Jamba addresses the quadratic cost of attention: Mamba layers scale roughly linearly, with an attention layer every 8 or 16 layers. It was designed to fit on a single 80 GB GPU with a 256K context, trained up to a million tokens.
- **Why open source.** Jamba is AI21's first open model, released as a base model with a detailed white paper. It passed about 30,000 downloads, and Daniel Whitenack counts 38 Jamba-named models on Hugging Face. Shoham wants help with serving efficiency and training on more types of infrastructure.

## Quotes

> "if you're brilliant 95% of the time and garbage 5% of the time, you're dead in the water." — Yoav Shoham

> "machine vision is a lens into the human eye, but language is a lens into the human mind." — Yoav Shoham
