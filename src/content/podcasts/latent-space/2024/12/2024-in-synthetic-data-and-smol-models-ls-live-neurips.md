---
title: '2024 in Synthetic Data and Smol Models [LS Live @ NeurIPS]'
description: >-
  Loubna Ben Allal argues synthetic data now runs through every stage of LLM
  training without causing collapse, and that small, specialised on-device
  models are the next frontier.
pubDate: '2024-12-24'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/2024_in_synthetic_data_and_smol_models_ls_live_neurips
durationMin: 29
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Loubna Ben Allal
tags:
  - synthetic-data
  - small-models
  - pre-training
  - on-device-ai
  - hugging-face
draft: false
---
## Thesis

Loubna Ben Allal of Hugging Face argues that synthetic data has moved from post-training into pre-training and evaluation, so an LLM can now be trained on an entirely synthetic pipeline. She says fears of model collapse are overstated when data is curated, and that the field is shifting from ever-larger models to efficient small models that are trained longer and specialised through fine-tuning.

## Key points

- **Synthetic data everywhere.** Ben Allal says a 1B model can be pre-trained on 150 billion fully synthetic Cosmopedia tokens, tuned with synthetic SFT and DPO data, and judged by LLM-based benchmarks such as MT-Bench or AlpacaEval.
- **Model collapse is not showing up.** Proxy words like "delve" rose in Common Crawl after ChatGPT's release, but models trained on newer dumps scored better, not worse. She argues collapse studies used small models retrained on their own outputs, unlike distillation from large models.
- **Diversity is the key ingredient.** Cosmopedia (about 30 billion tokens) seeded prompts with web extracts to keep textbooks varied. NVIDIA's Nemotron-CC rephrased the web into 1.9 trillion tokens, and FineWeb-Edu used Llama 3 ratings and a classifier to cut 15 trillion tokens to 1.5 trillion educational ones.
- **Post-training datasets.** She cites Microsoft's AgentInstruct, Allen AI's Tulu 3 mix using PersonaHub personas, Hugging Face's own dataset, and Cohere's multilingual data arbitrage, which routes prompts to several teacher models and keeps the best answer.
- **Small models caught up.** Llama 3.2 1B matches Llama 2 13B on LMSYS Arena, and Qwen 2.5 3B-class models beat older 33B ones on MMLU. SmolLM2 was trained on 11 trillion tokens without plateauing and is fully open.
- **Where small models fit.** She points to privacy-preserving on-device inference (MLX, llama.cpp, Transformers.js), specialised extraction models such as NuMind's, and structured JSON generation.

## Quotes

> "So personally, I wouldn't say the web is polluted with synthetic data. Maybe it's even making it more rich." — Loubna Ben Allal

> "So I think it's a little bit of a cycle, and we're gonna start to see, like, more fine-tuning and less of just, like, uh, prompt engineering the models." — Loubna Ben Allal
