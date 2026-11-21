---
title: 'Why Video Agent models are next — Ethan He, xAI Grok Imagine'
description: >-
  Ethan He, who helped build Grok Imagine in three months, argues that most
  gains in generative video now come from language models, so the next step is
  video agents that plan, call tools and edit.
pubDate: '2026-06-01'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/why_video_agent_models_are_next_ethan_he_xai_grok_imagine
durationMin: 103
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Ethan He
tags:
  - video-generation
  - world-models
  - diffusion
  - agents
  - xai
draft: false
---
## Thesis

Ethan He, formerly lead on NVIDIA's Cosmos world model and then at xAI, makes the claim that visual intelligence in video models now comes mostly from language: a large LLM rewrites terse prompts into detailed descriptions for a comparatively "dumb" diffusion model. He therefore expects video agents, LLMs that call diffusion models, editors and FFmpeg as tools, to reach production quality by the end of this year, and is leaving video for language model research.

## Key points

- **Grok Imagine in three months.** He says a few engineers with no infra, data or model shipped Grok Imagine 0.9, which he describes as the first audio-video joint generation model deployed at large scale. The keys were strong talent, few meetings and fast iteration; many gains came from fixing small bugs in data and training pipelines rather than new algorithms.
- **How video models are built.** Captions are synthetic, written by VLMs bootstrapped from human labels detailed enough for a blind person to reconstruct the video. A VAE tokenizer compresses pixels, a diffusion transformer denoises, and image models come first because they pair far more text with visuals. Audio adds the hard problem of time-aligned captions.
- **Costs.** He estimates video training costs are comparable to medium-sized LLMs: a billion videos at 5 MB is about 5 PB, which swyx prices at roughly $100K a month on S3, plus egress. Step distillation cuts inference from around 100 steps to four or eight in Cosmos.
- **World models.** His definition is real-time, long-horizon, interactive video. Temporal compression in VAEs adds lag, and naive long context explodes (around 50-60K tokens per five seconds in Cosmos), so he built video extension with full history and reference-to-video with up to seven images.
- **Generative UI.** He imagines diffusion models as the front end, generating interfaces from user intent (citing Flipbook and Neural OS), with LLMs and code running behind them.
- **Next for LLMs.** He predicts models will become aware of and manage their own context, absorbing the pruning and compaction heuristics now in harnesses.

## Quotes

> "the visual intelligence are actually mostly coming from language." — Ethan He

> "a lot of the improvements does not come from new algorithms. It comes from finding small bugs here and there in the data pipeline" — Ethan He
