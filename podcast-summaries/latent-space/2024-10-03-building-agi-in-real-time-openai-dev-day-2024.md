---
title: "Building AGI in Real Time (OpenAI Dev Day 2024)"
date: 2024-10-03
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/building_agi_in_real_time_openai_dev_day_2024"
duration_min: 129
hosts: ["Alessio Fanelli", "swyx"]
description: "From Dev Day 2024 interviews and the Altman Q&A: OpenAI is moving from model vendor to full developer platform, betting on real-time voice, distillation, evals and agents."
tags: ["openai", "realtime-api", "model-distillation", "fine-tuning", "agents"]
source_transcript: "latent-space/episodes/2024/10/2024-10-03-building-agi-in-real-time-openai-dev-day-2024.md"
draft: false
---

## Thesis

Recorded at OpenAI Dev Day 2024, the episode strings together interviews with OpenAI staff and a returning founder, then closes with the Sam Altman and Kevin Weil Q&A. The common thread is that OpenAI is building a platform around its models (real-time voice, prompt caching, distillation, evals, vision fine-tuning) rather than only shipping models. Altman frames progress as a smooth curve through "levels", with agents as the next step.

## Key points

- **Real-time API design.** Platform product lead Olivier Godement says the WebSocket-based API was designed backwards from roughly 1,500 ms human conversational latency, and that prompt caching was built to need zero code changes. Ilan Bigio's strawberry-ordering demo used Twilio plus function calling with no state machine: the session itself acts as the loop.
- **Platform, not just models.** Godement describes a future of automated, continuously fine-tuned models, with free evals offered to developers who opt in to share data; swyx likens the strategy to becoming "the AWS" of AI. Romain Huet cites more than 3 million developers on OpenAI and a distillation session showing GPT-4o to 4o mini at about a 2% quality hit and 15x lower cost.
- **Underrated launches.** Michelle Pokrass picks vision fine-tuning (OCR on bespoke documents, bounding boxes, about 100 images to start); Simon Willison asks for a hosted WebSocket proxy, "sign in with OpenAI" and per-user token accounting.
- **Fine-tuning still beats general reasoning.** Alistair Pullen of Cosine says Genie, a fine-tuned GPT-4o, still outscores o1 on SWE-bench Verified; C# at about 3% of its data mix underperformed, fixed with small "top-up" fine-tunes.
- **Altman on AGI and agents.** Altman says o1 reached level two (reasoners), expects level-three agents soon, and promises function calling, system prompts and structured outputs in o1 before year end. Internally, bots let customer service run at roughly 20% of its otherwise needed size.
- **Advice to founders.** Weil says to build for what the model can almost do; Altman warns that technology alone does not make a company.

## Quotes

> "The vision is if you want to be a source of truth, you have to earn it, right?" — Olivier Godement

> "very tempting to think that a technology makes a startup, and that is almost never true." — Sam Altman
