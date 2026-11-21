---
title: Self-hosting & scaling models
description: >-
  Baseten's Tuhin Srivastava argues that running open models in production is an
  infrastructure and workflow problem, and that teams increasingly prefer
  managed hosting to building it themselves.
pubDate: '2023-10-31'
show: practical-ai
episode: 243
url: 'https://share.transistor.fm/s/da056f75'
durationMin: 41
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Tuhin Srivastava
tags:
  - model-deployment
  - mlops
  - open-source-models
  - inference
  - self-hosting
draft: false
---
## Thesis

Tuhin Srivastava, whose company Baseten hosts and scales models, argues that swapping a closed API for an open model such as Llama 2 or Mistral is much harder than it looks. Production inference needs containerisation, autoscaling, security, versioning and observability, and he says the speed of the AI market has largely settled the build-versus-buy debate in favour of managed solutions.

## Key points

- **What changed since 2021.** Srivastava points to strong open-source models, Hugging Face as a fast-moving hub, and Whisper effectively solving transcription. ChatGPT set user expectations for fast inference, so nobody wants a model that takes 12 seconds to run.
- **Manual mode.** He compares leaving closed APIs to switching his DJI Phantom 3 drone into manual mode, where it fell to the ground. Benson, who hosted the first drone racing league, agrees on how much autonomy flight needs.
- **Who self-hosts and why.** Users are increasingly product and infrastructure engineers rather than traditional data scientists, driven by cost, data privacy, fine-tuning and a long tail of custom and audio models. Some customers run Baseten inside their own AWS account.
- **Packaging and workflow.** Models are wrapped in an open-source library as a Python class with load and predict functions. Srivastava says the main value is workflow: versions, A/B tests and rollbacks. Whitenack, who hosts Prediction Guard models on Baseten, changes autoscaling replicas from his phone.
- **Speed to production.** A late-stage AI-native startup with four AI-infra engineers had worked for about two years on its serving stack; Baseten replicated it in two days.
- **What is next.** Srivastava sees edge and CPU deployment as still experimental. Baseten is adding support for TGI and TRT LLM, a multi-cluster launch that lets the workload run on GCP, Azure or AWS, and an eventual return to fine-tuning.

## Quotes

> "We were able to replicate and get a more performant API up and running in two days." — Tuhin Srivastava

> "I'm a little bearish on like APIs that say, give me your data, I'll give you a model." — Tuhin Srivastava
