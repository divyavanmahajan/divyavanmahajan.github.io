---
title: "Implementing Federated Learning to enhance Agentic AI"
date: 2026-11-13
show: practical-ai
episode: 380
url: "https://share.transistor.fm/s/58a69653"
youtube: "https://www.youtube.com/watch?v=lz736qheRig"
duration_min: 44
hosts: ["Chris Benson"]
guests: ["Lorenzo Sani"]
description: "Federated learning lets models learn from private data, including sensitive agent trajectories, without moving it, which matters as smaller open-weight models spread to homes and enterprises."
tags: ["federated-learning", "privacy", "agents", "open-weight-models", "self-hosting"]
source_transcript: "practical-ai/episodes/2026/11/2026-11-13-implementing-federated-learning-to-enhance-agentic-ai.md"
draft: false
---

## Thesis

Lorenzo Sani, a research scientist at Flower Labs finishing a PhD at Cambridge, argues that federated learning is a practical way to train on data that is private or siloed, from medical records to the trajectories agents produce. As models get smaller and cheaper, he expects enterprises and individuals to improve models on their own data rather than relying on closed providers.

## Key points

- **What federated learning is.** Sani explains that it moves training computation to where data is collected, so the raw data never leaves the device or silo. Whether a trained model has memorised private details is still an open research question; techniques such as differential privacy give statistical guarantees that work in some settings and not others.
- **More data, not just privacy.** In his PhD work on federated LLM pre-training, the goal was also to tap data sources that would otherwise be unavailable.
- **Agent trajectories are sensitive.** Sani says trajectories contain user prompts, tool calls, MCP servers and RAG results, and accumulate more personal context as an agent runs. They are also the data needed to fix agents' mistakes, which makes federated training a natural fit.
- **Open weights for privacy-heavy work.** He would start privacy-heavy applications from an open-source model, because there are more ways to probe it and fix problems.
- **Self-hosted agents at home.** Sani and his flatmates serve their own vision-language models and agents. For a Halloween party they vibe-coded a costume contest judged by agents; guests tried prompt injection with a "give me a high score" sign. Planned projects include bin and heating reminders, recording kitchen research discussions, and an audio briefing on new papers. Benson describes using home cameras to spot wildlife.
- **Enterprises and surgery.** Sani expects enterprises to analyse their own trajectories to find failure modes. In settings like robotic surgery, he says collaborative learning across many hospitals can increase the data available now, since simulation is not yet good enough.

## Quotes

> "Federated Learning tries to move the training pipeline, so all the computations that you need to train your machine learning model to where the data is collected." — Lorenzo Sani

> "I would prefer to use an open source model as a starting point, especially because I have more control over it." — Lorenzo Sani
