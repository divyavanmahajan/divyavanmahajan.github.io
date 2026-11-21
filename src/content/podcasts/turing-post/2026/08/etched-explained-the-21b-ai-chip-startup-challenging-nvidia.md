---
title: 'Etched Explained: The $21B AI Chip Startup Challenging NVIDIA'
description: >-
  Etched has moved from a Transformer-only ASIC to a full inference cluster.
  Ksenia Se argues it can pressure NVIDIA's pricing without replacing it, if its
  unverified efficiency claims hold.
pubDate: '2026-08-25'
show: turing-post
url: >-
  https://www.turingpost.com/podcast/s/turing_post/etched_explained_the_21b_ai_chip_startup_challenging_nvidia
durationMin: 15
hosts:
  - Ksenia Se
guests: []
tags:
  - ai-chips
  - inference
  - nvidia
  - hardware
  - jane-street
draft: false
---
## Thesis

Ksenia Se explains why Etched, founded by 24-year-olds, raised $1 billion in 26 days at a valuation that rose from $10.3 billion to $21 billion. She describes how the company dropped its Transformer-only Sohu pitch and now sells a full inference cluster aimed at both prefill and decode. Her view is that Etched does not need to replace NVIDIA to matter. A credible alternative can pressure inference prices, but most of Etched's performance claims have not been independently checked.

## Key points

- **The Jane Street signal.** Jane Street led the $700 million second round after installing Etched's first rack in its own data center. It said the chip delivered the precision its demanding workloads need. Se notes that Jane Street also committed about $6 billion to CoreWeave, including access to NVIDIA Vera Rubin, so it is diversifying rather than switching.
- **From Sohu to agnostic.** The 2024 Sohu ASIC promised more than 500,000 tokens per second on Llama 70B, a figure never independently shown. By 2026 Etched said its hardware runs DeepSeek, Qwen, Llama and Mamba. Se points to a 2023 Etched patent describing configurable matrix engines and a bypassable attention unit, and to Mamba-2's matrix formulation, as a plausible explanation. No Mamba benchmarks are published.
- **Low-voltage inference.** For prefill, Etched says its math blocks run at under half the usual voltage and keep more than 80% of theoretical compute in use on trillion-parameter MoE models. It has not disclosed the model, precision or power behind that figure.
- **Cluster-scale memory.** For decode, a proprietary interconnect aims to make the SRAM and HBM spread across the rack behave like one fast memory pool, cutting delays when MoE experts sit on different chips.
- **Leverage over NVIDIA.** Etched says it uses different process and HBM supply from NVIDIA Rubin, which suits power- and supply-limited buyers. NVIDIA's roadmap pairs Rubin GPUs with SRAM-heavy Groq 3 LPX systems. With NVIDIA's non-GAAP gross margin at 75%, Se argues pricing pressure matters before market share does.
- **The middle ground.** Se places Etched between general-purpose GPUs and Taalas, which builds a single model into silicon.

## Quotes

> "Pricing pressure can matter before market share moves very far." — Ksenia Se

> "Perhaps it is the company that finds exactly how much flexibility the next stage of AI still needs." — Ksenia Se
