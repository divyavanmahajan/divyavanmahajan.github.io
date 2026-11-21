---
title: >-
  NVIDIA's AI Engineers: Agent Inference at Planetary Scale and "Speed of Light"
  — Nader Khalil (Brev), Kyle Kranen (Dynamo)
description: >-
  NVIDIA's Nader Khalil and Kyle Kranen explain how agents are reshaping
  inference: data-centre-scale serving with Dynamo, prefill/decode
  disaggregation, model-hardware co-design and sandboxing agents safely.
pubDate: '2026-03-10'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/nvidia_s_ai_engineers_agent_inference_at_planetary_scale_and_speed_of_light_nader_khalil_brev_kyle_kranen_dynamo
durationMin: 84
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Nader Khalil
  - Kyle Kranen
tags:
  - inference
  - gpu-infrastructure
  - agents
  - model-hardware-codesign
  - agent-security
draft: false
---
## Thesis

Kyle Kranen, an engineering lead and architect of NVIDIA Dynamo, argues that serving models and agents at scale is now a systems problem. The task is to scale out across many machines and trade off quality, cost and latency, not just run a single inference engine. Nader Khalil, Brev co-founder and now NVIDIA's director of developer technology, adds the developer side: easy GPU access, safe sandboxes for agents, and CLIs that agents can drive.

## Key points

- **Speed of light.** Khalil describes NVIDIA's "SOL" habit: start from the physical limit of how fast something could be done, then justify every step back from it. Kranen notes it comes from hardware, where SOL means a GPU running flat out. They also describe Jensen Huang's willingness to invest in "zero billion dollar" markets.
- **Dynamo and disaggregation.** Dynamo sits above vLLM, SGLang and TensorRT-LLM and scales inference across a data centre. It separates prefill (mostly compute-bound) from decode (mostly memory-bound) into pools whose ratio shifts with the workload, managed through a Kubernetes component called Grove. NVIDIA's Rubin CPX is a prefill-specific accelerator.
- **Scale-up limits.** An H100 NVLink domain is eight GPUs; beyond that traffic moves to InfiniBand, roughly an order of magnitude slower. Kranen says GB200 NVL72 systems running wide expert parallelism give about 35 times cheaper tokens than Hopper over much of the curve.
- **Co-design and "unhobblers".** Kranen cites Kimi K2 trading attention heads for more experts, and DeepSeek's multi-head latent attention fitting a 128K context into about 8 GB. He expects similar breakthroughs, not steady scaling, to push context beyond a million tokens, and says agent harnesses add structure that inference can exploit, for example for cache hits.
- **Agents and security.** Khalil's rule: agents can read files, reach the internet or run code, and should get only two of the three. NVIDIA security told staff to run OpenClaw on isolated Brev VMs. Internally, an Outlook CLI plus Codex triaged his inbox, and agents have one-shot finding good Dynamo configurations.
- **CLIs over UIs.** NVIDIA is building CLIs for business apps such as Slack and SAP and plans to open-source them. The guests argue pre-training data makes terminals the most natural interface for agents.

## Quotes

> "You should really only let an agent do two of those three things." — Nader Khalil

> "instead of having like a single model be a thing, you have a system of models and components that are working together to like emulate the black box model." — Kyle Kranen
