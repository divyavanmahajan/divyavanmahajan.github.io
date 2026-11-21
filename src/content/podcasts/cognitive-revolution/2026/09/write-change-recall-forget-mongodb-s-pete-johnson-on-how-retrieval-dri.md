---
title: >-
  Write, Change, Recall, Forget: MongoDB's Pete Johnson on How Retrieval Drives
  Agent Performance
description: >-
  After the token-maxing phase, agent performance and cost depend on selective,
  high-quality retrieval, and agent memory, especially knowing what to forget,
  is still unsolved.
pubDate: '2026-09-01'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/write-change-recall-forget-mongodb-s-pete-johnson-on-how-retrieval-drives-agent-performance/
youtube: 'https://www.youtube.com/watch?v=8FDFCUngrAg'
durationMin: 97
hosts:
  - Nathan Labenz
guests:
  - Pete Johnson
tags:
  - retrieval
  - vector-search
  - agent-memory
  - embeddings
  - databases
draft: false
---
## Thesis

Pete Johnson, Field CTO of AI at MongoDB, argues that once teams stop stuffing context windows ("token maxing"), agent quality and cost come down to retrieval: hybrid search, embedding quality, reranking and selective memory. He traces how database design followed whatever resource was scarce, from storage in 1970 to time with MongoDB in 2007, and calls agent memory the hardest open problem in agents.

## Key points

- **Schema-flexible, not schemaless.** Johnson says relational normalisation made sense when storage was the expensive resource. MongoDB denormalises JSON documents to save round trips and developer time, and documents in one collection can have different shapes.
- **Search build-out.** MongoDB added Lucene-style lexical search in 2020 after seeing customers run their own Lucene servers, then vector search (a vector "is an array of floats"), then hybrid search with pre-filtering. New $rankFusion, $scoreFusion and $rerank stages, plus auto-embeddings, replace hand-written glue code.
- **Voyage AI and embeddings.** Johnson argues embedding models are not commoditised: Voyage models rank near the top of Hugging Face's RTEB benchmark with up to 14% better retrieval, and Anthropic recommends them. Contextualised chunking, Matryoshka-style truncatable dimensions and shared embedding spaces (including an open-weight Nano model) cut the trial and error.
- **When to optimise.** His thresholds are speed, scale (about 100,000 vectors) and retrieval quality. Most teams start with Postgres and pgvector.
- **Memory.** Johnson cites Uber burning its 2026 token budget in 13 weeks as the end of token maxing. Agents now pull only the few relevant terms per loop ("taxonomic memory") within token budgets. Quoting a colleague, the problem is "write, change, recall, forget", and forgetting is the unsolved part. He names ElevenLabs as MongoDB's biggest memory customer.
- **Enterprise advice.** Pick problems with good data and existing metrics; most Fortune 500 work is employee-facing with a human in the loop. Measure idea-to-production speed, not lines of code. The two most advanced customers he saw this year were in Mexico City and São Paulo.

## Quotes

> "Most people think embedding models are commoditized and that is not true." — Pete Johnson

> "bad data quality and bad security posture don't get solved by AI. They get amplified by AI." — Pete Johnson
