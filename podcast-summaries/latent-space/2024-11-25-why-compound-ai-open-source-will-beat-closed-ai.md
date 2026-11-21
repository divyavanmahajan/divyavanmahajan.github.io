---
title: "Why Compound AI + Open Source will beat Closed AI"
date: 2024-11-25
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/why_compound_ai_open_source_will_beat_closed_ai"
duration_min: 58
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Lin Qiao"]
description: "Fireworks AI CEO Lin Qiao argues that specialized open models, combined into compound AI systems and tuned for inference cost and latency, will match or beat closed models."
tags: ["compound-ai", "open-source-models", "inference", "llm-serving", "fireworks-ai"]
source_transcript: "latent-space/episodes/2024/11/2024-11-25-why-compound-ai-open-source-will-beat-closed-ai.md"
draft: false
---

## Thesis

Lin Qiao, co-founder and CEO of Fireworks AI and former head of PyTorch at Meta, argues that the gap between open and closed models will shrink until it hardly matters, and that specialized expert models, combined with APIs and data sources in a compound AI system, will beat one general model. swyx pushes back that this bets against the bitter lesson; Qiao answers that training data is running out and scaling is moving to inference.

## Key points

- **From PyTorch to inference.** Qiao spent five years making PyTorch work for both research and production at Meta. Fireworks started in September 2022 as a planned PyTorch cloud, then focused on generative AI inference after ChatGPT, because inference scales with users while training scales with researchers.
- **One size fits one.** Fireworks began with an OpenAI-compatible distributed inference engine. Because customer workloads differ from training data, its Fire Optimizer tunes deployments across quality, latency and cost, including speculative decoding with draft models, Eagle or Medusa heads.
- **Compound AI.** She says single models hallucinate, lack real-time and proprietary data, and have different strengths, so Fireworks combines models across text, audio, vision and image with APIs and databases. It favors a declarative design, like SQL, over imperative pipelines.
- **Reasoning model and function calling.** Fireworks has three versions of its FireFunction model and was preparing an o1-inspired model, already on LMSYS. swyx asks for user-set thinking budgets; Qiao says it will come later.
- **Pricing and quantization.** After a competitor called Fireworks out over quantization quality, Qiao says vendors should leave benchmarking to third parties. She expects to earn margin because, unlike closed labs, Fireworks carries no training costs.
- **Customers and features.** Qiao says Cursor chose to partner rather than build everything, pushing Fireworks into multi-region scaling. Multi-LoRA lets one base model serve 100 to 1,000 adapters at base-model price, with a team of 40.

## Quotes

> "the inference is much more important than training because inference scale is proportional to the upper limit of world population." — Lin Qiao

> "The future trend is the gap between the open source model, closed source model, it's just gonna shrink to the point there's not much difference" — Lin Qiao
