---
title: Launching AI products with Braintrust’s CEO Ankur Goyal
description: >-
  Braintrust CEO Ankur Goyal explains why evals remain essential for
  non-deterministic AI products and what early adopters actually ship: RAG,
  instruction-tuned models, TypeScript and deterministic control flow.
pubDate: '2024-10-08'
show: no-priors
episode: 85
url: 'https://www.youtube.com/watch?v=ccOFLML25K8'
youtube: 'https://www.youtube.com/watch?v=ccOFLML25K8'
durationMin: 38
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Ankur Goyal
tags:
  - evals
  - ai-engineering
  - enterprise-ai
  - typescript
  - agents
draft: false
---
## Thesis

Ankur Goyal tells Elad Gil that the problems of shipping AI products, above all uncertainty about quality, were the same before and after LLMs, which is why he expects evals to stay central. Drawing on Braintrust customers such as Notion, Airtable, Zapier and Vercel, he describes a market moving towards simpler, more pragmatic patterns.

## Key points

- **Origin.** Goyal says he built the same eval tooling twice, at Impira and again at Figma, which convinced him the need was durable. Braintrust has raised $36 million from Andreessen Horowitz and others.
- **What customers do.** He says about 50% of production use cases involve RAG, while almost all customers have moved from fine-tuned models to instruction-tuned ones; open-source adoption is still limited despite interest in Llama 3.1.
- **Agents walked back.** Pioneering companies went deep into free-form agents a few months earlier, he says, then moved to code-controlled flows with LLM calls throughout the product because agent error rates compound.
- **TypeScript and teams.** Goyal argues TypeScript is the language of AI product engineering because its type system turns unpredictable model output into defined structures. He recommends starting AI efforts with product engineers, and notes customers dropping frameworks and consolidating vendors around AWS Bedrock.
- **Data infrastructure.** He argues LLMs and embeddings will become the main way to query text data, and that OLAP workloads face more disruption than OLTP databases, which can simply add HNSW indexes.
- **Company building.** Braintrust uses a hard technical interview (front-end candidates write some C++), targeted a list of about 50 AI leaders as customers or investors, and fixes customer complaints almost immediately. More than half of evals in Braintrust are LLM-based, increasingly run on production logs.

## Quotes

> "almost if not all of our customers have moved off of fine tune models onto instruction tune models" — Ankur Goyal

> "typescript is just much much better language for writing uh software that deals with um uncertain shapes of data" — Ankur Goyal
