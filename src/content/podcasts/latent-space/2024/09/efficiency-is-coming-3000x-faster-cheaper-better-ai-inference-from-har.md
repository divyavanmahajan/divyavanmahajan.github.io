---
title: >-
  Efficiency is Coming: 3000x Faster, Cheaper, Better AI Inference from Hardware
  Improvements, Quantization, and Synthetic Data Distillation
description: >-
  Computer vision already saw stacked gains from hardware, batching,
  quantization, pruning and better data; the same efficiency curve is now
  driving down the cost of LLM inference.
pubDate: '2024-09-03'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/efficiency_is_coming_3000x_faster_cheaper_better_ai_inference_from_hardware_improvements_quantization_and_synthetic_data_distillation
durationMin: 65
hosts:
  - Alessio Fanelli
  - swyx
guests: []
tags:
  - inference-optimization
  - quantization
  - synthetic-data
  - distillation
  - ai-npcs
draft: false
---
## Thesis

Naila Weker, formerly of eBay and NVIDIA and now at Convai, argues that if AI is truly useful you should obsess about inference, and that computer vision shows how efficiency compounds: hardware, batching, quantization, pruning and better data stack up. The hosts frame this against LLM prices falling by over ninety percent a year, and Weker expects LLMs to follow the same path through distillation and data quality.

## Key points

- **The eBay baseline.** Weker optimised a ResNet 50 image-search model with TensorRT on a V100 in 2018, going from one image to four images in seven milliseconds while staying under the human-perceived latency budget. Recent MLPerf results show 88,000 samples per second, though she warns it is not an apples-to-apples comparison.
- **Where the gains come from.** She lists larger batch sizes, dynamic batching (analogous to continuous batching for LLMs), precision moving from FP32 to FP16 and INT8, quantization-aware training and pruning. Her intuition is that small models such as ResNet 18 are far more sensitive to quantization than large LLMs.
- **Synthetic data as a data wall answer.** At NVIDIA, customers rarely had data for niche cases, so she built synthetic data with a game engine, for example retraining Amazon's package detection for new tape and generating pose data for robotics. She calls training with synthetic data an art.
- **Distillation and data quality.** Weker expects distilled, task-specific models, citing Copilot and the Databricks Assistant. swyx points to FineWeb, where LLM-filtered data reportedly matched GPT-2 quality with 10X fewer tokens. She distrusts benchmarks when numbers are close.
- **Convai characters.** Convai builds embodied 3D characters combining RAG, speech, vision and an action model, shown in the ramen shop demo with NVIDIA and live in Second Life. Weker says latency is the most important thing to optimise for these to feel natural; enterprises also use them for staff training.

## Quotes

> "if these things are truly useful, you should be obsessing about inference." — Naila Weker

> "training with synthetic data is an art. It's a skill on its own." — Naila Weker
