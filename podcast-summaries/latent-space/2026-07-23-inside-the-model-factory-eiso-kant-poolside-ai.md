---
title: "Inside the Model Factory — Eiso Kant, Poolside AI"
date: 2026-07-23
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/inside_the_model_factory_eiso_kant_poolside_ai"
duration_min: 115
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Eiso Kant"]
description: "Poolside treats model building as an engineering process, a 'model factory', and is opening its weights and research because it wants many foundation model companies, not five."
tags: ["foundation-models", "open-weights", "reinforcement-learning", "ml-infrastructure", "coding-agents"]
source_transcript: "latent-space/episodes/2026/07/2026-07-23-inside-the-model-factory-eiso-kant-poolside-ai.md"
draft: false
---

## Thesis

Eiso Kant, co-founder of Poolside, argues that model building is mostly engineering. Poolside built an end-to-end "model factory" that turns researchers' ideas into trusted experiments and new models in weeks. Kant explains why Poolside decided this year to release open weights and research: he prefers a world with many foundation model companies to an oligopoly. He also argues that Poolside's new Laguna S model shows behaviour learned in post-training can count for more than raw size.

## Key points

- **From Sourced to Poolside.** Kant pivoted his earlier startup to language models for code after Andrej Karpathy's 2015 RNN essay. He says it spent $12 million over four to five years without realising it should simply have scaled up.
- **The model factory.** Poolside streams data into training instead of copying datasets to clusters; a service called Blender makes data mixes a config change; data is immutable and experiments are versioned code, so any run can be reproduced. Fewer than 70 researchers and 35 engineers run roughly 10,000 to 20,000 experiments a month on a 10K H200 cluster.
- **Fast cadence.** Kant says an earlier Laguna release took five weeks and Laguna S eight weeks from start of pre-training to launch, with no on-call incidents. A much larger Laguna M started a 39-day pre-training run. Agents increasingly write code, launch jobs and evaluate results inside the factory.
- **Behaviour over size.** Laguna S has 118 billion total and 8 billion active parameters and fits on a DGX Spark. Kant credits post-training for its persistence and verification, citing a colleague's observation, and says it solved Erdős problem 397. He suggests the useful model size for most knowledge work may be lower than expected, which favours open models, while insisting Poolside must still scale.
- **Strong opinions.** Kant expects reinforcement learning to move earlier into pre-training, calls MCP and tool calls a needless layer compared with models writing code in a container, and wants more independent eval companies.
- **On regulation.** He opposes restricting open models at today's capability levels but accepts that may change, and warns that blanket rules could lock in a few incumbents.

## Quotes

> "I rather live in a world that has 100 foundation model companies than a world that has five, even if I was one of the five." — Eiso Kant

> "our view from very early on in the company was that model building is ultimately 90% engineering." — Eiso Kant
