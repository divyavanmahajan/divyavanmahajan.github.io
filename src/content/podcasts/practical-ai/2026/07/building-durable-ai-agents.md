---
title: Building Durable AI Agents
description: >-
  Agents leaving the laptop for cloud fleets need MLOps-style infrastructure:
  queues, checkpoints and replay, so failures are recoverable and changes can be
  tested against production traces.
pubDate: '2026-07-09'
show: practical-ai
episode: 363
url: 'https://share.transistor.fm/s/facb92e2'
youtube: 'https://www.youtube.com/watch?v=1PtFge65TZM'
durationMin: 47
hosts:
  - Daniel Whitenack
guests:
  - Hamza Tahir
tags:
  - agents
  - mlops
  - agent-harness
  - infrastructure
  - open-source
draft: false
---
## Thesis

Hamza Tahir, co-founder of ZenML, argues that running agents in production is MLOps reinventing itself: the same principles of safe, retryable, observable execution apply, but agent loops are dynamic graphs rather than fixed DAGs. As agents move from local tools to fleets running in company infrastructure, he says durability, state management and replay become the hard problems, which ZenML's new project Kitaru aims to address.

## Key points

- **Agents as unrolled graphs.** Tahir says ZenML users began hacking its pipeline engine to run agents, so the team added a dynamic mode where the graph is defined at run time instead of compiled up front.
- **Harness versus model.** He defines the harness as the program that turns model tokens into actions (tool calls, compaction, memory). Model providers have trained models such as Opus 4.8 to work inside their own harness, while open harnesses like Pi, LangGraph and Pydantic AI aim to stay model-independent.
- **Why agents break at scale.** Long-running, stateful agent tasks cannot run in-process behind a FastAPI endpoint. Tahir walks through task queues, message brokers, idempotency, sandboxes (E2B, Daytona, Modal) and the question of which code version a 30-day task should use after an update.
- **Kitaru's approach.** Built on ZenML, Kitaru adds adapters for harnesses such as the Anthropic and OpenAI Agents SDKs, checkpoints state to external storage, and lets developers replay traces with a different model or mocked tool calls. Tahir admits mid-trace model swaps are an imperfect experiment.
- **Practical advice.** Run for a week, filter for the most expensive successful traces, and inspect checkpoints for bottlenecks. Longer term he wants a companion "trainer" agent that runs these experiments automatically.
- **Outlook.** Tahir worries about tool fragmentation and providers resisting interoperability, but is encouraged by open models such as MiniMax, Kimi, GLM and Mistral; he claims the latest GLM reaches about 95% of Opus 4.8.

## Quotes

> "the principles and the learnings that we took from productionalizing these applications at scale still translate and are being rediscovered." — Hamza Tahir

> "I still am terrified updating my agent in production." — Hamza Tahir
