---
title: The new AI app stack
description: >-
  Using a16z's emerging LLM app stack diagram, the hosts argue the model is a
  small part of an AI app built from orchestration, data resources and model
  middleware.
pubDate: '2023-08-23'
show: practical-ai
episode: 236
url: 'https://share.transistor.fm/s/99147ee2'
durationMin: 45
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - llm-app-stack
  - orchestration
  - vector-databases
  - llmops
  - ai-engineering
draft: false
---
## Thesis

Daniel Whitenack and Chris Benson walk through Andreessen Horowitz's "Emerging Architectures for LLM Applications" diagram and argue that the model is not the application. Whitenack proposes a mental model of three spokes (app and hosting, data and resources, model and model middleware) joined by an orchestration hub, built either DIY or with tools like LangChain.

## Key points

- **Playgrounds and hosting.** Whitenack describes playgrounds (ChatGPT, OpenAI's playground, Hugging Face Spaces, nat.dev) as places to experiment, not to build apps; apps still need hosting, from cloud providers to Vercel and Modal. Benson welcomes model and app hosting merging.
- **Orchestration as convenience.** Whitenack calls orchestration a convenience layer: prompt templates, chains, agents and plugins that wrap the model call, distinct from Kubernetes-style container orchestration.
- **Data, embeddings and vector databases.** Data pipelines (Databricks, Airflow, Pachyderm, PDF parsers) are not new, but embedding models and vector search are. Whitenack recommends the Hugging Face embeddings leaderboard and sentence transformers benchmarks, and warns that embedding speed and dimension matter when embedding something like 200,000 PDFs.
- **Model middleware.** He coins "model middleware" for logging, caching and validation. Caching cuts the cost of GPT-4 calls or GPU replicas, and stored prompts and responses can become a domain dataset for fine-tuning a smaller model.
- **Validation and security.** Whitenack, who builds Prediction Guard, splits validation into output checks, security (Rebuff for prompt injection) and type or structure enforcement (Guardrails, Guidance, Outlines), plus DIY self-consistency sampling.
- **AI engineering.** He links the stack to what Latent Space calls AI engineering and suggests building an end-to-end example app, such as chat over your docs, to learn it.

## Quotes

> "the model is only a small part of the whole app stack here in a similar way to like used to when a thing existed called data science." — Daniel Whitenack

> "If I've got a model running on two A100s, right, I would rather not have four replicas of that model." — Daniel Whitenack
