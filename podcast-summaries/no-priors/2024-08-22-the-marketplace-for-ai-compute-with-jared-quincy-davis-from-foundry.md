---
title: "The marketplace for AI compute with Jared Quincy Davis from Foundry"
date: 2024-08-22
show: no-priors
episode: 77
url: "https://www.youtube.com/watch?v=NoX1fGHPfCM"
youtube: "https://www.youtube.com/watch?v=NoX1fGHPfCM"
duration_min: 43
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Jared Quincy Davis"]
description: "Foundry's Jared Quincy Davis argues that GPU cloud is stuck at colocation, that most compute sits underused, and that parallel compound AI systems will reduce dependence on giant clusters."
tags: ["gpu-cloud", "ai-infrastructure", "compute-utilization", "compound-ai-systems", "spot-instances"]
source_transcript: "no-priors/episodes/2024/08/2024-08-22-the-marketplace-for-ai-compute-with-jared-quincy-davis-from-foundry.md"
draft: false
---

## Thesis

Jared Quincy Davis, former DeepMind researcher and founder of Foundry, tells Sarah Guo and Elad Gil that today's AI cloud is closer to colocation than to the elastic cloud AWS once promised. He argues that much of the world's GPU capacity sits idle, and that better sharing plus a shift towards parallel, verifiable compound AI systems can cut the cost of frontier work sharply.

## Key points

- **Why Foundry exists.** Davis notes that small teams behind AlphaFold 2 and ChatGPT had huge compute behind them; OpenAI had 400 people but $13 billion of compute. Foundry aims to make that leverage cheaper, and he claims 12 to 20x better economics than other GPU clouds in many cases.
- **Utilisation is low.** Even large pre-training runs often stay below 80% utilisation because H100 systems fail often and teams hold back 10-20% of GPUs as a "healing buffer". He puts H100 utilisation in many cases at 20-25% or lower.
- **Cloud lost its elasticity.** Citing a Snowflake founder, Davis says the cloud was meant to make "fast free", while AI customers are pushed into reservations of often three years for fixed capacity.
- **The parking-lot analogy.** Foundry's new spot product lets others use reserved but idle GPUs, with workloads moved automatically when owners return. Its Mars tooling (monitoring, alerting, resiliency, security) lets partners fill their healing buffers with preemptible jobs.
- **More compute than people think.** Davis says the major public clouds hold only basis points of global GPU capacity, and that peak Ethereum had roughly 10-20 million V100 equivalents, against 10,000 V100s for GPT-3's training run.
- **Compound AI systems.** Pointing to Phi-3, Llama 3.1 distillation and AlphaCode 2, Davis argues that work is shifting to batch inference and synthetic data. His paper shows best-of-K with a verifier raising prime factorisation accuracy from 3.7% to 36.6%.

## Quotes

> "I think currently I cloud is not cloud in the in originally intended sense by any means." — Jared Quincy Davis

> "you won't necessarily need the big interconnected cluster that maybe only Open AI can afford um to do kind of cutting-edge work in the future" — Jared Quincy Davis
