---
title: "Cambrian explosion of generative models"
date: 2023-07-06
show: practical-ai
episode: 230
url: "https://share.transistor.fm/s/f2ddd724"
duration_min: 42
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "Daniel Whitenack and Chris Benson argue that a flood of capable open models is eroding the foundation-model moat, with licences, hardware fit and security now driving model choice."
tags: ["open-source-models", "generative-ai", "model-selection", "llm-deployment", "ai-security"]
source_transcript: "practical-ai/episodes/2023/07/2023-07-06-cambrian-explosion-of-generative-models.md"
draft: false
---

## Thesis

In this news episode Daniel Whitenack and Chris Benson walk through a burst of new open models and argue that open models are catching up with closed ones faster than they expected. Whitenack says most business use cases need a model tuned to one task rather than a general-purpose one, and Benson compares the shift to how open source overtook proprietary software. Both say security, compliance and people's concerns about the technology are lagging behind.

## Key points

- **New releases.** Whitenack highlights Stable Diffusion XL 0.9, which uses a two-step diffusion pipeline with a second refinement model, and Zeroscope XL v2, a video model that renders 30 frames at 1024x576 in a little over 15 GB of GPU memory.
- **Open models closing the gap.** He says the OpenChat models are the first open models to beat ChatGPT (GPT-3.5) on the Vicuna benchmark. He links the trend to the leaked Google "we have no moat" memo.
- **Filtering by licence and constraints.** Whitenack's practical filter starts with commercial use: Zeroscope (Creative Commons non-commercial), OpenChat (LLaMA licence) and SDXL 0.9 (research only) all drop out. Next come inference speed and context length.
- **The 7-billion-parameter line.** Salesforce XGen is a 7B model with an 8,000-token input length, released under Apache 2.0, with a reported training cost of about $150,000 on Google Cloud TPUs. Whitenack says models up to 7B fit on a single GPU, while 40-60B models push teams into multi-GPU setups. Benson expects this to open up LLMs on edge devices.
- **Databricks buys MosaicML.** Whitenack notes the $1.3 billion deal for a 62-person company and reads it as a bet on enterprises running open models on private data rather than sending it to per-token APIs.
- **Gaps in trust and culture.** Whitenack says LLM leaderboards give no information on training data, hallucination, toxicity or prompt-injection risk, unlike dependency scanners such as Snyk for code. Benson adds that the public's fear has to be managed too. Whitenack recommends Jay Alammar's article "AI is Eating the World" on where competitive advantage lies.

## Quotes

> "Well, the reality is that in your business environment, you don't need a general purpose model." — Daniel Whitenack

> "So don't forget your humans in the equation as you try to take advantage of all this amazing LLM goodness." — Chris Benson
