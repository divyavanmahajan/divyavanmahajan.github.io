---
title: AI at the Edge is a different operating environment
description: >-
  Edge AI is shaped by size, power, cost, connectivity, latency and privacy
  limits, so practitioners combine small specialised models in cascades rather
  than leaning on one large model.
pubDate: '2026-03-25'
show: practical-ai
episode: 350
url: 'https://share.transistor.fm/s/ea7694a9'
durationMin: 47
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Brandon Shibley
tags:
  - edge-ai
  - small-language-models
  - mlops
  - model-distillation
  - hardware
draft: false
---
## Thesis

Brandon Shibley, edge AI solutions engineering lead at Edge Impulse (a Qualcomm company), argues that the edge, which he defines as anything not in the cloud, is a distinct operating environment. Its constraints decide where models run, which pushes teams towards small, specialised models chained in pipelines, and towards ROI-driven use cases rather than open-ended experiments.

## Key points

- **Constraints as opportunities.** Shibley lists size, power, connectivity, cost, reliability, latency and privacy. He calls several of them "double edge": keeping sensitive camera or microphone data on the device is both a constraint and a selling point.
- **Bigger and smaller models.** Language models are growing in the cloud and shrinking at the edge. Edge hardware can now hold models from single-digit to tens of billions of parameters, but small models have less knowledge capacity and work best when fine-tuned or distilled for a narrow task.
- **Cascades.** To save power, a cheap object detector (he cites YOLO) discards most frames, perhaps 99%, and only crops of interest go to a vision language model. Pipelines can chain detectors, retrieval and an LLM to produce a reply.
- **Latency depends on the application.** Shibley says requirements range from microseconds on a fast manufacturing line to seconds for a chat agent, and that this decides whether data can leave the device.
- **Tooling and operations.** Edge hardware is fragmented, unlike the cloud's convergence on NVIDIA. Edge Impulse abstracts hardware during training and does target-aware optimisation at deployment, including Qualcomm's Hexagon NPU. MLOps at the edge means collecting data to handle drift and rolling out models via over-the-air updates.
- **Getting started.** Shibley suggests a cheap board such as an Arduino and a free Edge Impulse account to build a basement leak detector or cat feeder, then moving to enterprise hardware once a proof of concept works.

## Quotes

> "these constraints are what we have to live and die by at the edge." — Brandon Shibley

> "Edge is an opportunity to keep that private data at the edge and not proliferate it out onto the internet and into the cloud" — Brandon Shibley
