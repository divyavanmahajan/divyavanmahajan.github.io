---
title: Open Source AI is AI we can Trust — with Soumith Chintala of Meta AI
description: >-
  Soumith Chintala argues open AI models spread opportunity and resist
  centralised power, but open source must solve its feedback-coordination
  problem to catch up with closed labs.
pubDate: '2024-03-06'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/open_source_ai_is_ai_we_can_trust_with_soumith_chintala_of_meta_ai
durationMin: 80
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Soumith Chintala
tags:
  - open-source
  - pytorch
  - llama
  - synthetic-data
  - ai-infrastructure
  - robotics
draft: false
---
## Thesis

PyTorch creator Soumith Chintala tells Alessio Fanelli and swyx that open models are the trustworthy path for AI: they distribute opportunity widely, keep science from forming bubbles, and break up the concentration of power in two or three providers. He also explains why framework complexity is hard to avoid, why synthetic data is not magic, and why open source loses on coordination, especially of human feedback.

## Key points

- **Complexity is earned.** Chintala says PyTorch exposes about 1,000 operators and roughly 190,000 lines of code because each operator needs hundreds of configurations to fit memory hierarchies with near-zero compile time. He thinks George Hotz's Tinygrad vision only works if it narrows to specific workloads.
- **Demand-driven hardware support.** Meta funds PyTorch because the standard helps Meta, not to sell hardware; it supports Apple MPS and depends on OpenAI's Triton based on user demand. He calls Nvidia's NVLink interconnect its unique moat.
- **Inference as a laundromat.** He expects LLM inference margins to fall to the minimum; kernel tricks from Together and Fireworks spread within a month or two. He criticised Anyscale's benchmarks for reporting only latency, not total cost and reliability.
- **Synthetic data has limits.** In his view synthetic data works only where humans already hold low-rank symbolic models, such as mathematics, physics or language structure; distilling GPT-4 he calls closer to copying.
- **Meta compute and models.** He cites Mark Zuckerberg's figure of 600K H100 equivalents by year end, across all of Meta, and says time between model generations, not GPUs, is the main constraint. Meta builds its own MTIA chips for specialised workloads.
- **The feedback sinkhole.** Chintala proposes a central store, perhaps funded by Hugging Face, collecting thumbs-up/down feedback from open front ends, since less than one percent of open model usage feeds back today.

## Quotes

> "But those moats only last for a month or two. Like these ideas quickly propagate." — Soumith Chintala

> "And I am definitely in the camp of open source is definitely going to actually have better outcomes for society." — Soumith Chintala
