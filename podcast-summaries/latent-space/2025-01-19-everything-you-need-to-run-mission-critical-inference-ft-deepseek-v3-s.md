---
title: "Everything you need to run Mission Critical Inference (ft. DeepSeek v3 + SGLang)"
date: 2025-01-19
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/everything_you_need_to_run_mission_critical_inference_ft_deepseek_v3_sglang"
duration_min: 60
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Amir Haghighat", "Yining Zhang"]
description: "Baseten's Amir Haghighat argues production inference needs model-level performance, multi-region horizontal scaling and workflow tooling; a serving framework like SGLang covers only the first."
tags: ["inference", "deepseek", "sglang", "llm-serving", "gpu-infrastructure"]
source_transcript: "latent-space/episodes/2025/01/2025-01-19-everything-you-need-to-run-mission-critical-inference-ft-deepseek-v3-s.md"
draft: false
---

## Thesis

Baseten co-founder Amir Haghighat argues that running mission-critical inference rests on three pillars: performance at the model level, horizontal scaling across regions and clouds, and a developer experience for multi-model workflows. Lead model performance engineer Yining Zhang explains how SGLang, the framework Baseten used to bring DeepSeek V3 online, delivers the first pillar, but both stress that picking vLLM or SGLang alone is not "production".

## Key points

- **DeepSeek V3 is hard to serve.** Zhang notes the 671-billion-parameter MoE does not fit on an eight-card H100 node even in FP8, so Baseten used H200s or multi-node setups, plus block-wise FP8 kernels that standard libraries did not support. Long load times slow debugging.
- **Who wants V3.** Haghighat says interest mostly comes from teams leaving Claude because of rate limits, price, latency or time-to-first-token needs, or a wish for full control over the model.
- **Dedicated, not shared, endpoints.** Baseten deliberately offers no per-token shared endpoints. It prices on resource consumption, never quantizes weights behind a customer's back, and lets customers bring their own cloud commits, overflowing to Baseten's capacity across clouds.
- **SGLang's techniques.** Zhang describes radix (prefix) caching with block size one, constrained decoding with jump-forward via XGrammar or Outlines, MLA and DP attention support, and Eagle speculative decoding. He says SGLang beats vLLM on performance and TensorRT-LLM on usability, and is DeepSeek's recommended engine.
- **Beyond the framework.** Baseten adds KV-cache-aware load balancing, Truss Chains for streaming multi-step pipelines (sub-400 ms AI phone calls for Blend AI), and single models with replicas across GCP, AWS and Oracle regions. Haghighat adds that speculative decoding only pays off if you train good draft models.
- **Fine-tuning outlook.** Haghighat suspects reasoning models may eventually reduce the need for fine-tuning, but says demand has not dropped and Baseten will "solve today's problems". swyx suggests publishing a Twelve-Factor-style manifesto for mission-critical inference.

## Quotes

> "I think it takes three things, and each of them individually is, is necessary, but not sufficient." — Amir Haghighat

> "Uh, that's not an ML problem. That's not a PyTorch problem. That's an infrastructure problem." — Amir Haghighat
