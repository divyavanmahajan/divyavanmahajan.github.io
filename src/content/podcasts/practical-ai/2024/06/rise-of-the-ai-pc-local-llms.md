---
title: Rise of the AI PC & local LLMs
description: >-
  Local and cloud AI will coexist: AI PCs, local runtimes and quantised models
  make on-device inference practical for privacy and offline cases, while
  company-wide services stay in the cloud.
pubDate: '2024-06-04'
show: practical-ai
episode: 272
url: 'https://share.transistor.fm/s/66087536'
durationMin: 36
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - local-llms
  - ai-pc
  - quantization
  - edge-ai
  - model-optimization
draft: false
---
## Thesis

Daniel Whitenack and Chris Benson argue that running AI locally is a natural swing of the long cycle between local and cloud computing, driven by new hardware, software and smaller models. Whitenack's position is that the answer is both: local models suit private, air-gapped or poorly connected settings, while shared company services stay in the cloud. Much of the value, he adds, lies in the system built around the models rather than in the models themselves.

## Key points

- **Why local.** Whitenack lists privacy (files that should not leave a laptop), air-gapped healthcare or utility environments, latency and flaky networks; he compares it to databases, which run embedded, at the edge and in the cloud.
- **Tooling.** He sorts tools into local runtimes such as LM Studio, Ollama and llama.cpp, and optimisation or compilation libraries such as Bits and Bytes, Optimum, MLC and OpenVINO, which are usually hardware-specific. Benson uses Ollama on an M2 MacBook.
- **The AI PC market.** Whitenack mentions Lenovo machines with Intel's Core Ultra (Meteor Lake), Apple's M-series and NVIDIA's GeForce RTX AI PCs, and welcomes MLCommons' new MLPerf client working group for benchmarking them. Benson expects "AI laptop" to become redundant as every laptop gains the feature.
- **Decoding model names.** Whitenack explains base versus instruct releases of Llama 3, then quantisation formats: GGUF for CPUs, GPTQ for smaller GPU models, QAT (quantisation-aware training) and AWQ.
- **Realistic expectations.** A quantised 7-billion-parameter model runs on a CPU at lower tokens per second, which Whitenack says is enough for cases such as disaster-relief document chat. He sees local use as mainly inference plus RAG, not fine-tuning, though federated training of LLM adapters interests him.
- **Orchestration gap.** Benson wants an open best-practice framework for coordinating multiple models across laptop and cloud, citing recent posts by Yann LeCun.

## Quotes

> "a lot of the value that you get out of these models is not... The models themselves, but the system that you build around them." — Daniel Whitenack

> "the same way that you're not going to host your microservice for your company on your laptop" — Daniel Whitenack
