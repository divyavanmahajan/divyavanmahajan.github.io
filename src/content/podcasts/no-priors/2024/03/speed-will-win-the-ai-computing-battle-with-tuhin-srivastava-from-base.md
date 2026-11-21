---
title: Speed will win the AI computing battle with Tuhin Srivastava from Baseten
description: >-
  Tuhin Srivastava argues that speed is the main competitive advantage in AI, so
  teams should buy inference infrastructure and keep only models, data and
  workflow proprietary.
pubDate: '2024-03-21'
show: no-priors
episode: 56
url: 'https://www.youtube.com/watch?v=oe3OSlsf4YA'
youtube: 'https://www.youtube.com/watch?v=oe3OSlsf4YA'
durationMin: 39
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Tuhin Srivastava
tags:
  - inference
  - ai-infrastructure
  - gpus
  - build-vs-buy
  - enterprise-ai
draft: false
---
## Thesis

Tuhin Srivastava, CEO and co-founder of Baseten, argues that speed, both of the product and of the team shipping it, decides who wins in AI. Inference is a repeatable workflow problem with tight latency and reliability needs, so he says companies should buy the infrastructure and spend their engineers on what is truly theirs. He also expects enterprise AI spend to be overestimated in the short term and underestimated over three to five years.

## Key points

- **Efficient code, not no code.** Srivastava says Baseten moved away from no-code tools because engineers want to turn the knobs. Customers range from Descript, Patreon and PicnicHealth to small teams such as a call-centre SDK startup that needs responses under 200-300 milliseconds.
- **Inference differs from training.** Srivastava says inference needs compute close to the workload, resilience and repeated workflows (versioning, CI/CD, cold starts), while training mainly needs networking between co-located GPUs.
- **Benchmarks and optimisation.** Baseten led Artificial Analysis throughput and latency benchmarks, helped by work with Nvidia's TensorRT-LLM and speculative decoding. Srivastava says state of the art went from 90 to over 200 tokens a second, with some reaching 300-400. He expects gains from H100s over A100s, batching and smaller models.
- **Three deployment stages.** Srivastava describes moving from shared endpoints to dedicated compute (for SLAs, privacy and cost) to self-hosting inside a customer's own AWS or GCP account.
- **Compute on the P&L.** One customer's CTO called inference the second-biggest expense after payroll. Another four-engineer company expects mid-hundreds of thousands of dollars in annual spend. Guo notes this breaks the 80% gross margin SaaS norm. The hosts compare fast parallel revenue ramps with the 1990s and ask what makes them defensible.
- **Build vs buy and GPU supply.** Srivastava says a four-person infrastructure team that had built for two years migrated to Baseten in 36 hours. Premium chips still take three to six weeks of negotiation, and he thinks running CUDA-style workloads on AMD is harder than claimed.

## Quotes

> "speed is the only thing that matters in this market" — Tuhin Srivastava

> "what is proprietary to them is models data and workflow what is repeated for them is infrastructure" — Tuhin Srivastava
