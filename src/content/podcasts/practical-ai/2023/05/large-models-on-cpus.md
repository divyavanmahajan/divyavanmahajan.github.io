---
title: Large models on CPUs
description: >-
  Neural Magic's Mark Kurtz argues that pruning, quantization and distillation
  can remove most of a model's weights, letting large models run on commodity
  CPUs as fast as GPUs at far lower cost.
pubDate: '2023-05-02'
show: practical-ai
episode: 221
url: 'https://share.transistor.fm/s/8e44d5e0'
durationMin: 38
hosts:
  - Daniel Whitenack
guests:
  - Mark Kurtz
tags:
  - model-optimization
  - sparsity
  - quantization
  - cpu-inference
  - inference
draft: false
---
## Thesis

Mark Kurtz, Director of Machine Learning at Neural Magic, argues that neural networks are heavily over-parameterised: up to 95-97% of weights can be zeroed without hurting accuracy. Combined with software that skips the zero multiplications and uses CPU cache hierarchies, he says this lets commodity CPUs match or beat GPUs for inference, cutting deployment costs.

## Key points

- **Three techniques.** Kurtz describes pruning (removing connections), quantization (for example FP32 to INT8) and distillation (teaching a smaller model to mimic a larger one).
- **Why it matters.** On the edge it allows the accuracy of a large model within small-model constraints; on servers, he says 80-90% of costs for enterprises at scale are in deployment, and optimization can save 10x to 20x. He advises proving a use case before optimizing.
- **CPUs versus GPUs.** He says Neural Magic's MLPerf results show commodity CPUs running faster than T4s and A40s. CPUs can also hold terabytes of memory, whereas 175-billion-parameter models need GPU clusters mainly for memory.
- **LLM sparsity.** Neural Magic's SparseGPT, from principal research scientist Dan Alistarh, removed around 60% of weights from OPT and BLOOM models up to 175 billion parameters in one shot; Kurtz cites a Cerebras paper reaching 80% with retraining.
- **Methods and tooling.** He explains training-aware, one-shot (post-training) and sparse-transfer optimization. Neural Magic offers SparseML (built on PyTorch, with recipes), SparseZoo with pre-sparsified models such as BERT, ResNet-50 and YOLOv5, DeepSparse, and Sparsify, a SaaS platform then in alpha.
- **Research trends.** Kurtz names post-training methods needing little data, lower-bit quantization (INT4 and below) and sparse training from scratch, and welcomes open-source GPT-4-like models that could run on any CPU.

## Quotes

> "Don't worry about optimizing the model. Worry about getting a use case that works and something that you can prove out." — Mark Kurtz

> "it's essentially just free performance that's left on the table that can significantly affect your bottom line." — Mark Kurtz
