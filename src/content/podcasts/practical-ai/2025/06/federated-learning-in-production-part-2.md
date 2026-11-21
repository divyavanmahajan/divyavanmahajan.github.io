---
title: Federated learning in production (part 2)
description: >-
  Flower Labs' Chong Shen Ng argues federated learning has matured into
  production infrastructure, and that data locked in silos is the next fuel for
  training large language models.
pubDate: '2025-06-04'
show: practical-ai
episode: 315
url: 'https://share.transistor.fm/s/1e3c9247'
durationMin: 45
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Chong Shen Ng
tags:
  - federated-learning
  - flower
  - privacy
  - llm-training
  - mlops
draft: false
---
## Thesis

Chong Shen Ng, a research engineer at Flower Labs, argues that federated learning has moved from research curiosity to production-ready infrastructure. The open source Flower framework now separates user-written apps from long-running infrastructure, and Ng sees federated training as the way to reach the data that today's large language models cannot get at.

## Key points

- **Why teams adopt it.** Ng names two drivers: data that cannot leave where it was generated (privacy, geopolitics), and data volumes so large that moving or downsampling them is impractical. For organisations with data at different security levels, he advises harmonising data standards first.
- **Adoption has grown sharply.** Ng puts an admittedly arbitrary "100x" on growth since 2021, driven by training foundation models. Flower has been re-architected to stream weights for models with billions of parameters, while the user-facing API stays the same.
- **A friendlier workflow.** The Flower CLI (`flwr new`, `flwr run`, `flwr ls`, `flwr log`) creates templated projects for PyTorch, TensorFlow, JAX and NumPy. In 2021-2022, starting a federation meant launching three Python scripts.
- **Production architecture.** Code tested in the simulation runtime, for example on Hugging Face datasets, can run unchanged in the deployment runtime. A long-running "superlink" hosts the server and "supernodes" orchestrate the clients, which gives reliability across many runs.
- **Roles in a federation.** Ng separates administrators, who deploy supernodes at sites such as five hospitals (for example with Helm charts) and manage authentication, from data scientists who write server and client apps.
- **Generative AI and agents.** Ng says LLMs are running out of public training data and points to the collaboration with Vana on data DAOs. Combining agentic workflows with federated learning, he says, first needs strong evals.

## Quotes

> "the biggest driver is when they realize they can't move their data." — Chong Shen Ng

> "There are tonnes of data locked in silos that could benefit from having large language models, either pre trained or fine tuned on" — Chong Shen Ng
