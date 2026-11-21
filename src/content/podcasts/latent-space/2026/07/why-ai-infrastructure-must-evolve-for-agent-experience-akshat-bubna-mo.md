---
title: >-
  Why AI Infrastructure must evolve for Agent Experience — Akshat Bubna, Modal
  CTO
description: >-
  Modal's bet on code-defined, bursty serverless compute now serves agents as
  much as developers, so the company designs its SDK, CLI and inference products
  for agent experience.
pubDate: '2026-07-08'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/why_ai_infrastructure_must_evolve_for_agent_experience_akshat_bubna_modal_cto
durationMin: 58
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Akshat Bubna
tags:
  - ai-infrastructure
  - inference
  - sandboxes
  - agents
  - gpu-cloud
draft: false
---
## Thesis

Akshat Bubna, CTO of Modal, argues that the platform's original idea, infrastructure declared in decorators next to the code rather than in Kubernetes YAML, helps coding agents even more than human developers. Modal has reorganised its SDK team around "agent experience", and is pushing deeper into LLM inference, sandboxes and post-training, where elastic, bursty GPU and CPU capacity is the main differentiator.

## Key points

- **From runtime to GPUs.** Modal started as a better serverless runtime for bursty data and job workloads, added GPUs a year before ChatGPT, and first found product-market fit serving custom models for companies like Suno and Runway. Its largest use case is elastic inference across regions, helped by GPU snapshotting for faster cold starts.
- **Early sandboxes.** Modal built sandboxes in May 2023; its first example put swyx's Small Developer in a loop. Demand stayed quiet until agents took off. RL rollouts can need 100,000 sandboxes at once, and Ramp's Inspect background agent runs on Modal.
- **Inference optimisation in the open.** Bubna says kernel tuning yields a few percent, while longer accept lengths in speculative decoding multiply speed. Modal open-sourced its work on D-Flash, a block-based speculator, upstreams to SGLang and launched Auto Endpoints whose code users can take and run themselves.
- **A capital-light super cloud.** Modal owns no data centres; it pools capacity from 17 cloud providers and adds its own reliability layer. A "compute strategy" team decides the mix of one- and three-year reservations; a cheaper 24-hour batch tier is coming, mainly for non-LLM work such as computational biology.
- **Networking primitives.** Sandboxes now support sidecars, egress control and an undocumented IPv6 overlay network built for serverless multi-node training with RDMA, which users found and adopted.
- **Agents as product feedback.** Modal Bench tests where agents fail with Modal; when agents hallucinate a feature, the team sometimes builds it, and logs and metrics moved from the UI to the CLI. Bubna is sceptical of LLM-mediated permissions, preferring hard sandbox boundaries.

## Quotes

> "We've actually changed our SDK team to think about agent experience instead of, uh, developer experience" — Akshat Bubna

> "if they're reaching for this thing, it's product feedback, like give it to them." — Akshat Bubna
