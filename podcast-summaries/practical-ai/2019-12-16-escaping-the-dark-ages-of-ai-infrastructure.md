---
title: "Escaping the \"dark ages\" of AI infrastructure"
date: 2019-12-16
show: practical-ai
episode: 69
url: "https://share.transistor.fm/s/4329d9ec"
duration_min: 50
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Evan Sparks"]
description: "Most teams outside big tech still run deep learning on isolated tools and manual scripts; integrated, AI-aware infrastructure for scheduling, tuning and reproducibility makes them far more productive."
tags: ["ml-infrastructure", "automl", "gpu-scheduling", "reproducibility", "mlops"]
source_transcript: "practical-ai/episodes/2019/12/2019-12-16-escaping-the-dark-ages-of-ai-infrastructure.md"
draft: false
---

## Thesis

Evan Sparks, co-founder and CEO of Determined AI, argues that frameworks like TensorFlow and PyTorch handle model definition well but leave the rest of the deep learning workflow (tuning, resource management, reproducibility, deployment) to ad hoc tooling. He makes the case that components designed to know about each other, and neutral across hardware vendors, let teams outside the largest companies work the way those companies do.

## Key points

- **Background.** Sparks moved from quantitative finance to NLP startup Recorded Future, then to the AMPLab at UC Berkeley, where he helped design Spark's MLlib with co-founder Ameet Talwalkar. Co-founder Neil Conway came from Postgres and Apache Mesos.
- **Holistic over point tools.** Sparks says isolated tools for compression or hyperparameter search miss workflow-wide optimisations. Determined's AI-aware scheduler knows jobs are iterative and checkpointable, so it can reschedule work and feed that knowledge into its tuning algorithms.
- **GPU sharing is immature.** With a DGX-1 costing upwards of $150K and serving about two data scientists, he sees even sophisticated organisations allocating GPUs statically or via Google Calendar. He favours planning base load and bursting to the cloud ("elastic AI infrastructure").
- **AutoML as power tools.** Sparks frames automated tuning as equipping experts rather than replacing them; one customer reportedly replaced a two-month manual tuning process with a single overnight run.
- **Reproducibility enables collaboration.** Tracking seeds, hyperparameters, optimiser settings, initialisation and data lets colleagues reproduce and extend each other's models. He also wants to end rewriting models in C++ or Scala for deployment.
- **Advice and optimism.** For newcomers he recommends data versioning (for example S3 versioning), structured logs or MLflow, and simple baselines before off-the-shelf AutoML. He is optimistic about AI's economic impact, citing Japan's robotics investment, customers in recycling and drug discovery, and federated learning for privacy.

## Quotes

> "All of that stuff is sort of handled right now on a manual basis, honestly, with bash scripts and duct tape in many cases." — Evan Sparks

> "start with the simplest model that could possibly work and solve your problem." — Evan Sparks
