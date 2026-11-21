---
title: 'Training Zamba: A Hybrid Model Master Class with Zyphra''s Quentin Anthony'
description: >-
  Zyphra's Quentin Anthony explains why small Mamba-attention hybrids, tuned for
  on-device inference and per-user continual learning, can compete with big labs
  focused on large dense transformers.
pubDate: '2024-10-30'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/training-zamba-a-hybrid-model-master-class-with-zyphras-quentin-anthony/
youtube: 'https://www.youtube.com/watch?v=xFU7mfBfVSw'
durationMin: 142
hosts:
  - Nathan Labenz
guests:
  - Jason Meaux
  - Quentin Anthony
tags:
  - state-space-models
  - model-training
  - on-device-ai
  - hybrid-architectures
  - small-models
draft: false
---
## Thesis

Quentin Anthony, head of model training at Zyphra, argues that personal AI has to run locally, with weights updated per user, and that this calls for hybrid models built for inference efficiency. Pure state space models lack in-context learning ability, while dense transformers are too heavy for phones. He says small, nimble labs can beat big tech on small models by finding the next "free lunch" in training.

## Key points

- **Why on-device.** Anthony lists personalisation, privacy, inference cost and offline speed. He imagines overnight continual learning on a phone, with activation steering to adjust behaviour during the day until the next update.
- **Zamba's architecture.** Zamba uses about six Mamba blocks per shared attention-plus-MLP block. Sharing the attention weights saves memory, and in Zamba 2, depth-wise LoRAs on the MLP add back some specialisation per layer. The move from Mamba 1 to Mamba 2 was "literally just throughput". The state size is 64, because attention carries the long-range work.
- **Lessons from BlackMamba.** Zyphra's earlier Mamba-plus-mixture-of-experts model reached good loss per FLOP, but its quality fell short without attention's cross-sequence dependencies.
- **Loss versus evals.** Anthony mainly uses loss to spot spikes and plateaus. Capabilities such as MMLU stay near random and then climb late in training. He links this to annealing, a two-phase learning-rate schedule that ends on high-quality data.
- **Big-lab secrets.** He names annealing, distillation, data cleaning, mu-transfer and second-order optimisers as methods big labs keep private for a while. He says Zyphra stays with Adam because it is robust. In his view, logit-level distillation is too expensive for open-source teams at pre-training scale.
- **Infrastructure and lock-in.** Anthony says serving tools like llama.cpp and Ollama are built around transformers, which makes labs reluctant to switch architectures. Zyphra's tree attention replaces ring attention's point-to-point messages with topology-aware all-reduce for multi-node long-context work.

## Quotes

> "We think that you need to have your own set of weights, and changing a system prompt per person is not enough." — Quentin Anthony

> "So loss is not a very useful indicator, like, at all." — Quentin Anthony
