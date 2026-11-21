---
title: 'Inference Race: OpenAI Cut Inference Costs in Half. AMD and Cerebras Split AI'
description: >-
  Inference is not a fixed cost: OpenAI's software optimizations and
  AMD-Cerebras prefill/decode disaggregation show the race is shifting from
  installed chips to effective compute per request.
pubDate: '2026-08-05'
show: turing-post
url: >-
  https://www.turingpost.com/podcast/s/turing_post/inference_race_openai_cut_inference_costs_in_half_amd_and_cerebras_split_ai
durationMin: 17
hosts:
  - Ksenia Se
guests: []
tags:
  - inference
  - ai-hardware
  - disaggregated-serving
  - kv-cache
  - openai
  - cerebras
draft: false
---
## Thesis

Ksenia Se connects two announcements: OpenAI's reported cuts to its serving costs and AMD and Cerebras's plan to split one request across two architectures. She argues that a lot of efficiency is still hidden inside every AI answer. The unit of competition is becoming the whole route a request takes through the data centre, not the chip.

## Key points

- **Prefill vs decode.** Prefill reads the prompt in parallel and builds the key-value cache; it sets the time to first token. Decode generates tokens one at a time and is often limited by memory. Se explains that running both on one GPU pool under mixed traffic forces a trade-off between the two kinds of latency.
- **The AMD-Cerebras design.** An AMD Helios rack (72 MI450X GPUs, up to 32 TB of HBM4) handles prefill, and Cerebras wafer-scale systems (the WSE-3 has 900,000 cores and 44 GB of on-chip SRAM) handle decode. Cerebras will host Helios racks in its own data centres. The interconnect and handoff latency have not been disclosed.
- **Reading the 5x claim.** The "up to five times" tokens per second per watt comes from AMD and Cerebras modelling in July 2026 on Kimi K2.6. It compares the combined system with a Cerebras-only setup, not with NVIDIA, and was not measured on a production service.
- **Not a new idea.** Se traces the lineage: the CDC 6600 in 1964, vLLM's PagedAttention (2-4x throughput), Microsoft's Splitwise and Moonshot's Mooncake (over 100 billion tokens a day by 2025). Then came NVIDIA Dynamo, AWS Trainium with Cerebras CS-3, and NVIDIA's Vera Rubin paired with Groq 3 LPX. The new part is the move to commercial hardware partnerships.
- **OpenAI's software gains.** OpenAI reportedly halved inference cost for one segment of ChatGPT with an undisclosed optimisation. It says GPT-5.6, working in Codex, rewrote production kernels in Triton and Gluon, cutting end-to-end serving costs by 20%, and improved speculative decoding efficiency by over 50%. Se warns that the two figures cannot be combined.
- **What decides it.** Cheaper answers may not lower chip demand. Se says the architecture will be judged by whether the KV cache moves fast enough between systems.

## Quotes

> "Because it's about one thing: inference was never a fixed cost." — Ksenia Se

> "Chip counts alone no longer describe how much useful inference capacity a company has." — Ksenia Se
