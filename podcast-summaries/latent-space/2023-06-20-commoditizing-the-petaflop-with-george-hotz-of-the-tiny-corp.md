---
title: "Commoditizing the Petaflop — with George Hotz of the tiny corp"
date: 2023-06-20
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/commoditizing_the_petaflop_with_george_hotz_of_the_tiny_corp"
duration_min: 73
hosts: ["Alessio Fanelli", "swyx"]
guests: ["George Hotz"]
description: "George Hotz argues that a tiny, RISC-style ML framework plus cheap multi-GPU boxes can keep AI compute open and accessible, and that framework software must come before custom chips."
tags: ["ml-frameworks", "tinygrad", "ai-hardware", "gpus", "open-source"]
source_transcript: "latent-space/episodes/2023/06/2023-06-20-commoditizing-the-petaflop-with-george-hotz-of-the-tiny-corp.md"
draft: false
---

## Thesis

George Hotz says he started the tiny corp after watching Sam Altman testify to Congress, because he wants to make it structurally impossible to restrict access to ML compute. His plan is to build tinygrad, a minimal ML framework, and then sell cheap, powerful computers that run it. He argues that the framework has to come first: no one can build a usable AI chip without first writing a fast framework for existing GPUs.

## Key points

- **RISC for ML.** Hotz compares XLA and PrimTorch to complex instruction sets. He says tinygrad covers all ML models with about 25 ops instead of roughly 250. Because neural networks have only static loops and data-independent loads, he argues hardware can drop branch predictors and warp schedulers.
- **Chips need software first.** He names Google's TPU as the only successful training chip besides Nvidia, and says that is because Google wrote its own framework first. He criticises the closed TPU compiler.
- **Where tinygrad stands.** Hotz says tinygrad uses laziness to fuse operations. He puts it at about 5x slower than PyTorch on Nvidia, but about 2x faster than Qualcomm's own library. It has run the openpilot model in production for six months.
- **AMD and the tinybox.** Hotz describes AMD driver kernel panics that stopped after he emailed Lisa Su and received a pre-release of ROCm 5.6. He describes the tinybox as six GPUs drawing 1,500 watts, quiet enough (45-50 dB) to sit under a desk, costing about $15,000. He claims it will be 5x faster than an H100 box at the same price for about 90% of company training workloads.
- **Smaller models, more runs.** Hotz expects the best models to come from 1,000 training runs rather than one huge run, with training on a tinybox capped at around seven billion parameters. He claims GPT-4 is an eight-way mixture of 220-billion-parameter models.
- **Hiring and the API line.** Hotz hires through paid tinygrad bounties instead of technical interviews. He sees coding as "above the API line": AI will act as tools that make programmers stronger, not replace them, for about the next 20 years.

## Quotes

> "The magic is when you can make your software do more without adding complexity, right?" — George Hotz

> "if your loss function is categorical cross-entropy on the internet, your responses will always be mid." — George Hotz
