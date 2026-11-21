---
title: >-
  The Professional Network for AI Agents, with Agent.ai Engineering Lead Andrei
  Oprisan
description: >-
  Agent.ai's Andrei Oprisan argues that useful AI agents today are narrow,
  human-supervised workflows, and that a marketplace of small specialised agents
  beats open-ended autonomy.
pubDate: '2024-09-18'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/the-professional-network-for-ai-agents-with-agent-ai-engineering-lead-andrei-oprisan/
youtube: 'https://www.youtube.com/watch?v=48a_aPxucwk'
durationMin: 124
hosts:
  - Nathan Labenz
guests:
  - Andrei Oprisan
tags:
  - ai-agents
  - agent-marketplaces
  - rag
  - fine-tuning
  - future-of-work
draft: false
---
## Thesis

In this sponsored episode, Andrei Oprisan, engineering lead at Agent.ai (backed by HubSpot CTO Dharmesh Shah), argues that agents work best as narrow, semi-autonomous tools with a human in the loop. He expects the prescriptive, workflow-style approach to dominate for the next 6 to 24 months because models still lack reliable planning, out-of-domain detection and self-correction. Nathan Labenz pushes on whether a sudden model jump could change that quickly.

## Key points

- **Narrow beats open-ended.** Oprisan says the more narrowly an agent's capabilities are defined, the more likely it is to succeed, and he expects users to rely on dozens or hundreds of small specialised agents.
- **LLMs as routers inside workflows.** Labenz highlights Agent.ai's filter step, which uses a language model instead of regular expressions to decide whether a workflow advances; Oprisan says their benchmarks show LLMs handle conditional logic well but not deeper planning.
- **RAG over fine-tuning for agent building.** The AI workflow builder retrieves from a few hundred example agents (the average agent has 6 steps); Oprisan says it is about 80% good internally, and fine-tuning produced more false positives than RAG with larger models.
- **Pragmatic stack.** The team of about 12 or 13 uses Python, Next.js, React, TypeScript, Postgres and AWS, and pays for Pinecone over pgvector mainly for its simplicity and SDK, not raw performance.
- **Small seed datasets.** Labenz says Waymark found that around 10 gold-standard examples, often including chain-of-thought, are enough to start fine-tuning, and that captured human reasoning is a missing data source.
- **Jobs and business model.** Agent.ai is free on a credit system while it seeks adoption and may acquihire builders; Oprisan rejects job-replacement framing, while Labenz cites Klarna's claim of a chatbot doing the work of 700 people.

## Quotes

> "my definition is semi autonomous system that can perform tasks or make decisions on behalf of a user." — Andrei Oprisan

> "So, look, the way I look at AI agents is that they're highly effective, specialized, semi autonomous applications. That's it. I don't think they're coming for anyone's jobs." — Andrei Oprisan
