---
title: "The Winds of AI Winter (Q2 Four Wars Recap) + ChatGPT Voice Mode Preview"
date: 2024-08-02
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_winds_of_ai_winter_q2_four_wars_recap_chatgpt_voice_mode_preview"
duration_min: 115
hosts: ["Alessio Fanelli", "swyx"]
guests: []
description: "Recapping Q2 2024 through their Four Wars framework, swyx and Alessio Fanelli track the end of OpenAI's dominance, synthetic data going mainstream, collapsing model costs and the shift to selling AI labour."
tags: ["frontier-models", "synthetic-data", "llm-ops", "inference-cost", "voice-ai", "ai-agents"]
source_transcript: "latent-space/episodes/2024/08/2024-08-02-the-winds-of-ai-winter-q2-four-wars-recap-chatgpt-voice-mode-preview.md"
draft: false
---

## Thesis

Recording in Singapore, swyx and Alessio Fanelli revisit their Four Wars of AI (GPU rich vs poor, data quality, multimodality, RAG/Ops) and argue that Q2 2024 brought a vibe shift: Claude 3.5 Sonnet and Llama 3.1 ended OpenAI's default status, synthetic data became an open recipe, and cost per unit of intelligence is falling fast. The value, they suggest, is moving away from picks and shovels toward vertical products that sell finished labour.

## Key points

- **A non-OpenAI-centric world.** The hosts say Claude 3.5 Sonnet leads hard and coding benchmarks on LMSYS, and both have cancelled ChatGPT; Mistral Large 2 is judged a step down from Llama 3.1 in excitement.
- **Synthetic data as a recipe.** swyx calls Llama 3 the synthetic data model: its 90-page paper spells out synthetic data for code, math, multilinguality, long context and tool use, and the license now permits distillation.
- **Inference efficiency.** Noam Shazeer's Character.ai post (serving 20% of Google search traffic in LLM inference) points to int8 training and hybrid global-local attention; NVIDIA found only 7% Transformer layers are needed in a Mamba hybrid.
- **Cost deflation.** swyx's price-efficiency frontier chart shows the whole industry moving in a tight band, with distillation from large models giving 8B models the biggest uplift.
- **Renaming RAG/Ops to LLM OS.** swyx describes ops tooling as fragmented into frameworks, gateways and tracing across some 80 startups; Alessio, as an investor, values capabilities like code execution (E2B) and search (Exa) more.
- **Service as software.** Alessio says buyers want labour, not tools: Dropzone triages security alerts at about $6 each versus $35 for a human analyst. A bonus segment with Ethan Sutin tests ChatGPT Advanced Voice Mode on accents, emotion and region guessing.

## Quotes

> "And it's roughly one order of magnitude drop in cost for the same level of intelligence every four months." — swyx

> "Most companies do not wanna buy tools to build AI. They want the AI" — Alessio Fanelli
