---
title: ⚡️The new OpenAI Agents Platform
description: >-
  OpenAI's Romain and Nikunj present the Responses API, built-in web search,
  file search and computer use tools, and the Agents SDK as one platform for
  building agents.
pubDate: '2025-03-11'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_new_openai_agents_platform
durationMin: 26
hosts:
  - Alessio Fanelli
  - swyx
guests: []
tags:
  - openai
  - agents
  - responses-api
  - developer-tools
  - rag
draft: false
---
## Thesis

Romain and Nikunj from OpenAI tell hosts Alessio Fanelli and swyx that the agent era needs a new API primitive. The Responses API merges Chat Completions and the Assistants API into one interface with built-in tools, and the Agents SDK turns the experimental Swarm library into a supported framework for multi-agent orchestration with tracing.

## Key points

- **Responses API.** The guests describe it as a superset of Chat Completions that will gain Assistants features over time, with a stateless option. Chat Completions stays; the Assistants API has a target sunset in the first half of 2026, with a year to migrate. State is stored free for 30 days, which they say makes debugging in the dashboard easier.
- **Web search.** Available as a tool in Responses, and as the fine-tuned GPT-4o Search Preview model in Chat Completions. It is trained with synthetic data and o-series distillation for factual, cited answers; on SimpleQA it scores 90% against 30% for GPT-4o. Combining it with structured outputs is described as close to an API for the internet.
- **File search as managed RAG.** It handles parsing, chunking, embedding and metadata filtering. The guests recommend starting with it and hand-rolling a custom stack only if you need full control; Navan is the example customer. swyx notes many AI engineers want to own this layer.
- **Computer use.** The model behind Operator takes screenshots and returns actions such as clicking, scrolling and typing. The guests call it very early, comparable to GPT-1 or GPT-2, and say preview fine-tunes are folded into the main models once stable, as vision was with GPT-4o.
- **Agents SDK.** According to Romain, Swarm grew out of customers finding agent orchestration in production hard. The SDK adds types, guardrails that run in parallel, tracing with pluggable providers, and works with any Chat Completions-compatible provider. Traces are meant to feed evals and reinforcement fine-tuning.

## Quotes

> "Chat completion is definitely, like, here to stay." — OpenAI guest

> "So it's quite powerful when you start combining those features and tools together." — OpenAI guest
