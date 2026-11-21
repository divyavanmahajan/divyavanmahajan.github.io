---
title: Reiner Pope – The math behind how LLMs are trained and served
description: >-
  In a blackboard lecture, MatX CEO Reiner Pope shows how batch size, memory
  bandwidth and rack size explain LLM latency, pricing, model sparsity and even
  how far models are over-trained.
pubDate: '2026-04-29'
show: dwarkesh
url: 'https://www.dwarkesh.com/p/reiner-pope'
youtube: 'https://www.youtube.com/watch?v=xmkSf5IS-zw'
durationMin: 134
hosts:
  - Dwarkesh Patel
guests:
  - Reiner Pope
tags:
  - inference
  - ml-infrastructure
  - mixture-of-experts
  - hardware
  - scaling-laws
draft: false
---
## Thesis

Reiner Pope, CEO of chip start-up MatX and formerly of Google's TPU team, argues that a simple roofline model, comparing memory-fetch time with compute time, explains much of how frontier AI is built and priced. Working at a blackboard with Dwarkesh Patel (an angel investor in MatX), he derives batch sizes, parallelism choices and context-length limits, and shows how much labs reveal through public API prices.

## Key points

- **Batch size drives cost and speed.** Without batching, Pope says economics can be a thousand times worse. Weight fetches amortise over the batch, so cost per token falls until compute dominates; the break-even batch is roughly 300 times the model's sparsity ratio, or about 2,000 to 3,000 sequences for DeepSeek-style models. He says this is why "fast mode" costs more and a "slow mode" would save little.
- **The 20-millisecond train.** HBM capacity divided by bandwidth is about 15 to 20 milliseconds across generations, so a new batch "departs" on that cycle. A single serving unit at around 128,000 tokens per second is about one-thousandth of the traffic Gemini reported.
- **Racks bound mixture-of-experts.** Expert parallelism needs all-to-all traffic, which fits within one NVLink rack; scale-out links are about 8x slower. Pope argues larger scale-up domains, from Hopper's 8 GPUs to Blackwell's 72, matter mainly for memory bandwidth, while pipelining fixes weight capacity but not KV cache.
- **Over-training.** Assuming roughly equal spend on pre-training, RL and inference, Pope estimates frontier models are trained on about 100 times more tokens than Chinchilla-optimal.
- **Reading API prices.** Gemini 3.1's 50% surcharge above 200k tokens implies about 2 KB of KV cache per token. Pricier output tokens show decode is memory-bound, and five-minute versus one-hour cache tiers may map to flash and spinning disk. He sees no clear path past the memory wall for much longer contexts.
- **Ciphers and neural nets.** Both mix information, but towards opposite goals; the Feistel construction from cryptography inspired reversible networks (RevNets) that save training memory.

## Quotes

> "if you do not batch together many users, the cost and the economics you get can be a thousand times worse than if you do batch many users together." — Reiner Pope

> "Pipelining totally solves the capacity problem, but scale-up size helps solve the bandwidth problem." — Reiner Pope
