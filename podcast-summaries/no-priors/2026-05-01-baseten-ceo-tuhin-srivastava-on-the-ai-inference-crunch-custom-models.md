---
title: "Baseten CEO Tuhin Srivastava on the AI Inference Crunch, Custom Models, and Building the Inference Cloud"
date: 2026-05-01
show: no-priors
episode: 156
url: "https://www.youtube.com/watch?v=XAbKflCncDo"
youtube: "https://www.youtube.com/watch?v=XAbKflCncDo"
duration_min: 43
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Tuhin Srivastava"]
description: "Tuhin Srivastava argues that inference on custom, post-trained models is the 'last market', and that compute access plus a sticky software layer will decide who wins it."
tags: ["inference", "gpu-capacity", "custom-models", "post-training", "ai-infrastructure"]
source_transcript: "no-priors/episodes/2026/05/2026-05-01-baseten-ceo-tuhin-srivastava-on-the-ai-inference-crunch-custom-models.md"
draft: false
---

## Thesis

Baseten CEO Tuhin Srivastava argues that application companies will keep their place next to the frontier labs. Their edge is user signal that only they can capture, which they can use to post-train specialized models. That shift to custom models drives demand for inference, which he calls the "last market". Compute is so scarce that securing capacity matters as much as the software.

## Key points

- **Scale.** Sarah Guo notes that Baseten grew 30x in the past year and expects more than $1 billion in revenue this year. Srivastava credits open models crossing a capability threshold and post-training becoming mainstream.
- **Why the app layer survives.** Abridge captures clinicians' edits and what happens downstream in the EMR. Frontier labs cannot see that signal, so Abridge can train on it. Multi-step support workflows at companies like Decagon are another example. His advice: "no post training pre-product market fit".
- **Almost everything is custom.** About 95% of tokens run on dedicated inference, mostly modified with customer data or compiled for performance. Baseten acquired a post-training team that had been a customer, because post-training and inference are "both sides of the same problem."
- **Open and Chinese models.** Customers start from capability, using models from GPT-OSS to Moonshot and DeepSeek. Srivastava sees no evidence that network-bound Chinese models are a security risk, but says the US needs its own. One of the hosts notes that China is in effect subsidizing US enterprises.
- **The supply crunch.** Baseten runs at mid-90s utilization across 90 clusters in 18 clouds and can add a provider in half a day. Of about a dozen good clouds, he would rate only three or four as top-tier. Renting 1,024 B200s now means a 3-5 year contract with 20-30% of contract value prepaid, so cost of capital matters.
- **What wins.** None of the top 30 customers has churned, and he cites 400% net dollar retention. He expects inference-specific chips, but says Nvidia's supply chain and CUDA ecosystem are hard to beat in the short term. Cheaper inference makes agents run longer, so demand keeps rising.

## Quotes

> "I don't think people realize how bad it really is." — Tuhin Srivastava

> "inference with the software layer included is incredibly sticky." — Tuhin Srivastava
