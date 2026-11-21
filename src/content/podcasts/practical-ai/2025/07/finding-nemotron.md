---
title: Finding Nemotron
description: >-
  NVIDIA's Joey Conway explains how Llama Nemotron adds reasoning to open Llama
  models while shrinking them, and why enterprises should run many models
  together.
pubDate: '2025-07-02'
show: practical-ai
episode: 319
url: 'https://share.transistor.fm/s/6b9fa11e'
durationMin: 46
hosts:
  - Chris Benson
guests:
  - Joey Conway
tags:
  - open-models
  - reasoning-models
  - nvidia
  - speech-recognition
  - enterprise-ai
draft: false
---
## Thesis

Joey Conway, Senior Director of Product Management for AI Models at NVIDIA, says NVIDIA's aim is to "take the best of what's open and make it better". With Llama Nemotron it adds reasoning to Meta's Llama models, shrinks them to cut compute costs and publishes the data and tools. He tells enterprises to treat models as digital employees and to "interview" them against their own tasks.

## Key points

- **What reasoning means.** Conway explains reasoning as training on reasoning traces that break complex problems into sub-questions, not just question-answer pairs. He credits DeepSeek with bringing reasoning to open-weight models around January and February.
- **Three sizes.** Nano is 8B (with a new 4B variant) and targets a 24 GB GPU. Super is distilled from Llama 70B down to 49B so it fits on one H100. Ultra comes from Llama 405B and has 253 billion parameters, roughly half a node. Conway credits neural architecture search for keeping accuracy while shrinking the models.
- **One model, reasoning on or off.** Each model can either reason or answer directly, because Conway says enterprises don't want to deploy two models. NVIDIA published the post-training data along with NeMo Framework and NeMo RL.
- **Where models go next.** Conway expects a 10 to 15% throughput speed-up from hybrid Mamba-style architectures and mixture of experts at the largest scale. NVIDIA announced partnerships with a little over 10 European model builders to bring reasoning to languages such as Polish.
- **Parakeet speech model.** Conway says Parakeet, built on a fast conformer architecture, gets a two to three times inference speed-up from depthwise separable convolutional downsampling, plus about 3x more from CUDA graphs. It ranks high on Hugging Face's Open ASR leaderboard.
- **Multi-model enterprises.** Conway recommends evaluating models with NeMo Microservices, fine-tuning Nemotron for internal tool calling and using it alongside OpenAI or Gemini.

## Quotes

> "just like you interview an employee, you're looking for a set of skills and capabilities. You should be able to interview models." — Joey Conway

> "deploying two models is twice as much work as deploying one." — Joey Conway
