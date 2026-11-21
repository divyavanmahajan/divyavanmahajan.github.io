---
title: Full-stack approach for effective AI agents
description: >-
  Imbue CTO Josh Albrecht argues that robust agents require owning the whole
  stack, from hardware to interface, plus rigorous evaluation and post-training
  checks rather than trust built into the model.
pubDate: '2024-05-15'
show: practical-ai
episode: 269
url: 'https://share.transistor.fm/s/b5914d1d'
durationMin: 47
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Josh Albrecht
tags:
  - ai-agents
  - robustness
  - evaluation
  - coding-assistants
  - deep-learning-theory
draft: false
---
## Thesis

Josh Albrecht, CTO and co-founder of Imbue, tells Daniel Whitenack and Chris Benson that the main obstacle for AI agents is robustness: systems that are right 60-80% of the time cannot be deployed to take real actions. Imbue's answer is to work across the whole stack and to understand models instead of treating them as black boxes, with coding agents as the first target.

## Key points

- **The last 20% is the hard part.** Albrecht says getting from 80% to 99.99% correctness takes most of the work. Today's agents succeed in narrow, constrained domains; general assistants lack the cautious common sense a dog shows crossing a road.
- **Evaluate by hand.** Imbue rebuilt open-source NLP benchmarks internally to avoid training-data contamination and fix wrong answers; he advises teams to hand-label at least about 100 examples and watch for distribution drift.
- **Full stack, research first.** Imbue runs its own hardware, InfiniBand networking, pre-training, fine-tuning, RL, data generation and UI. Its CARBS cost-aware hyperparameter tuner runs hundreds of experiments at different scales overnight; Albrecht admits this is why there is no product yet.
- **Smaller, specialised models.** He points to DeepSeek Coder outperforming same-size Llama models because of code-heavy data, arguing data quality matters more than size, and cites Jamie Simon's work on learnability as part of a more physics-like understanding of networks.
- **Trust comes after training.** Albrecht wants separate systems that audit and predict harmful actions in deployment, independent of the original model.
- **Interactive, not fully automated.** Reviewing a several-hundred-line AI pull request is a bad experience; he prefers tools that flag suspect lines and state assumptions, and suggests models may push developers to concentrate on well-supported languages like Python.

## Quotes

> "Trying to fully automate something is disempowering to people and also results in a worse experience and a worse product." — Josh Albrecht

> "by far the largest place that we should be focusing is actually after training." — Josh Albrecht
