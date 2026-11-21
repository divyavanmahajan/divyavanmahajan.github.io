---
title: >-
  Why Diffusion Will Win AI Inference with Inception Co-Founder and CEO Stefano
  Ermon
description: >-
  Stefano Ermon argues that diffusion language models, which generate many
  tokens in parallel, will beat autoregressive LLMs on inference cost and speed
  because their workload suits GPUs.
pubDate: '2026-09-18'
show: no-priors
episode: 178
url: 'https://www.youtube.com/watch?v=N1rjtDs8blY'
youtube: 'https://www.youtube.com/watch?v=N1rjtDs8blY'
durationMin: 38
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Stefano Ermon
tags:
  - diffusion-models
  - inference
  - llm-architecture
  - gpu-efficiency
  - ai-startups
draft: false
---
## Thesis

Stefano Ermon, Stanford professor, early diffusion researcher and CEO of Inception, tells Sarah Guo that the economics of AI will be decided at inference time. Autoregressive models produce one token at a time, which leaves GPUs memory-bound. Diffusion models refine many tokens in parallel, so he argues they will scale better for serving, test-time compute and RL rollouts.

## Key points

- **From images to text.** Ermon's lab started score-based generative models, which became diffusion, in 2019. A 2024 paper matched autoregressive perplexity at GPT-2 scale (under a billion parameters) while generating text about 10x faster. That result led him to found Inception.
- **Why parallelism matters.** He compares the move to the earlier switch from RNNs to transformers in training. Diffusion makes the inference workload look like training: many tokens processed at once, using the matrix maths GPUs do well.
- **Where Inception stands.** The company is about two years old and has around 50 people. Ermon says its Mercury models match the speed-optimised frontier models (Haiku, Flash, mini/nano) on benchmarks while running much faster. Inception had to build its own serving engine, because vLLM and SGLang cannot run these models.
- **Customers and hardware.** Voice-agent company OpenCall moved from Cerebras chips to Mercury and got similar speed on Nvidia GPUs. Ermon sees software and hardware gains as multiplicative. From OpenRouter's task taxonomy he estimates that 20-30% of workloads are latency-critical.
- **Moat and trade-offs.** Against the risk that big labs absorb the idea, he points to trade secrets, the serving stack, and evals built with customers. The costs are an immature ecosystem, in-house SFT and RL tooling, and a decision not to open source.
- **Controllability and academia.** Because diffusion works from coarse to fine, Ermon says it can be steered during generation and may be more data efficient. He cites diffusion, FlashAttention and DPO as ideas that came out of academic labs.

## Quotes

> "the bitter lesson is that the more parallel solution is the one that is eventually going to win" — Stefano Ermon

> "once you get used to a fast model, it's hard to go back" — Stefano Ermon
