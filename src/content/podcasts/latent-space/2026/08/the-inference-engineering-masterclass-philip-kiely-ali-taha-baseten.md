---
title: 'The Inference Engineering Masterclass — Philip Kiely & Ali Taha, Baseten'
description: >-
  Fast, faithful open-model serving comes from stacking quantization, trained
  speculators and disaggregation, and inference engineering is turning into a
  systems, infrastructure and training problem.
pubDate: '2026-08-03'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_inference_engineering_masterclass_philip_kiely_ali_taha_baseten
durationMin: 101
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Philip Kiely
  - Ali Taha
tags:
  - inference
  - gpu-optimization
  - open-models
  - quantization
  - speculative-decoding
  - video-generation
draft: false
---
## Thesis

Philip Kiely, author of the book Inference Engineering, and Ali Taha of Baseten walk through what it takes to serve open models fast without degrading them. Their argument: supporting a new model in production means redoing quantization, speculators and runtime work every time, and big speedups come from stacking several roughly 2x gains. They expect the field to shift from kernel tuning towards moving KV cache around clusters, and towards training and inference merging.

## Key points

- **Life of a long request.** The guests describe cache-aware routing to replicas that already hold part of the prompt, disaggregated prefill and decode on separate GPUs, and a speculator model tuned for coding traffic. Dedicated deployments allow traffic-specific draft models that shared endpoints cannot offer.
- **"Support" is a lot of work.** Each release (GLM 5.2, Kimi, MiniMax, DeepSeek) needs NVFP4 quantization calibrated for Blackwell, a speculator trained on the model's hidden states, and fixes for bugs found in the wild, such as GLM outputting the same token repeatedly. Baseten cuts generation after four or more identical tokens.
- **Stacking gains.** Going from BF16 to NVFP4 gives roughly 2x, a speculator about 2x, and disaggregation another 2x. A 1-trillion-parameter model might do 30 to 40 tokens per second off the shelf; 10x is possible but 4 to 6x is more typical, or 2 to 4x on identical hardware.
- **Smarter quantization.** Baseten research picked layers whose quantization errors cancel out, producing a GLM 5.2 quant 20% more quantized than NVIDIA's with closer KL divergence to full precision. A team member also grafted Kimi's vision encoder onto GLM 5.2 by training only the projector.
- **Video is a different problem.** Taha says five seconds of 480p video is about 35,000 tokens under full attention, open video models such as Wan2.2 lag far behind Kling and Veo, and he bets on autoregressive video despite today's poor quality.
- **Models optimizing themselves.** Taha describes GLM 5.2, running in Baseten's coding harness, profiling its own deployment and writing faster kernels for it.

## Quotes

> "the speculation space has moved much faster than everything else." — Philip Kiely

> "Video models are definitely not. There's a huge gap." — Ali Taha
