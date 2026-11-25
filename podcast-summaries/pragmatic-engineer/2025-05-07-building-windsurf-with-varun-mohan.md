---
title: "Building Windsurf with Varun Mohan"
date: 2025-05-07
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/building-windsurf-with-varun-mohan"
youtube: "https://www.youtube.com/watch?v=G9WOC8sUts8"
duration_min: 88
hosts: ["Gergely Orosz"]
guests: ["Varun Mohan"]
description: "Windsurf CEO Varun Mohan argues that an AI coding IDE is won through evaluation suites, its own models, low-latency inference and layered retrieval, and that cheaper software means more demand for engineers."
tags: ["ai-coding-tools", "llm-evaluation", "inference-latency", "code-retrieval", "future-of-engineering"]
source_transcript: "pragmatic-engineer/episodes/2025/05/2025-05-07-building-windsurf-with-varun-mohan.md"
draft: false
---

## Thesis

Varun Mohan tells Gergely Orosz that building Windsurf is mostly hard engineering: programmatic evaluation, in-house models for code-specific needs, latency-bound GPU inference and retrieval that combines several methods. He argues that falling software costs should lead companies to build more, not employ fewer engineers.

## Key points

- **Evals from self-driving.** Mohan says much of the team came from autonomous vehicles and reused its simulation mindset. New models are scored on open-source commits for retrieval accuracy, intent, edit accuracy, redundant steps and whether tests pass.
- **Why own models.** Windsurf started as Exafunction, a GPU virtualisation company, then pivoted to Codium. Open models such as Salesforce CodeGen lacked fill-in-the-middle; he explains that predicting the rest of a half-typed "RETU" needs substantial training, not light post-training.
- **Scale.** Mohan cites an engineering team of just over 50, close to half on unreleased projects, more than a million developers trying the product within months, eight figures of ARR within a month of pricing, and over 500 billion tokens of code processed daily.
- **Latency and retrieval.** He explains that GPUs have about two orders of magnitude more compute than CPUs but only one more of memory bandwidth, so batching trades against latency; a 10 millisecond increase materially reduces use. Retrieval fuses embeddings, keyword search, a knowledge graph and AST dependencies, then spends compute ranking results. Fine-tuning on company code gave only a modest gain.
- **Failure and dogfooding.** Mohan says he is fine if half of the company's bets fail; the Forge code-review tool did. A partnerships lead who had never written software builds internal apps such as a quoting tool, replacing stateless SaaS, though Mohan says Workday or Salesforce will not be replaced this way.
- **Forking and the future.** Windsurf forked Code OSS without Microsoft's proprietary parts, so it built its own Python language server, remote SSH and dev containers, and shares a language server binary with its JetBrains plugin. He calls MCP too freeform and says employers cutting engineers because of AI are short-sighted.

## Quotes

> "if you make a developer wait, the answer better be 100% correct." — Varun Mohan

> "I would be totally fine if 50 percent of the bets we make don't work." — Varun Mohan
