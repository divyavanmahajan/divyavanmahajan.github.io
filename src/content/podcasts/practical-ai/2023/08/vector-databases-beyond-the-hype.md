---
title: Vector databases (beyond the hype)
description: >-
  Prashanth Rao argues that choosing a vector database means working through
  concrete trade-offs, from purpose-built versus incumbent engines to indexing
  speed, memory use and hosting, not following the marketing.
pubDate: '2023-08-01'
show: practical-ai
episode: 234
url: 'https://share.transistor.fm/s/424fa922'
durationMin: 51
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Prashanth Rao
tags:
  - vector-databases
  - semantic-search
  - retrieval-augmented-generation
  - embeddings
  - data-infrastructure
draft: false
---
## Thesis

Prashanth Rao, a senior AI and data engineer at the Royal Bank of Canada, describes vector databases as an extension of the NoSQL family, built to store embeddings at scale and retrieve results by meaning rather than keywords. He says the useful question is which trade-offs fit a given use case, and he lays out a list of them for Whitenack and Benson.

## Key points

- **Purpose-built versus incumbent.** Rao warns that adding vectors to Postgres (via pgvector) or Elasticsearch, which only shipped its first ANN algorithm in 2022, can mean trying to fit a square peg in a round hole. Older databases carry years of architectural decisions and tech debt that slow down vector optimisation.
- **Embedding pipelines.** Beginners may prefer databases like Weaviate that call Hugging Face models for them. Rao says teams with transformer experience are better off generating embeddings upstream, where they can control cost and scale.
- **Indexing versus querying.** Some engines index fast but query slowly, or the reverse, and indexing can take hours or days. Rao names Milvus, Weaviate and Qdrant as the mature, scalable options.
- **The full list.** His other trade-offs are recall versus latency, in-memory versus on-disk indexes, sparse versus dense vectors, hybrid search and pre- versus post-filtering. Whitenack's question adds self-hosted versus cloud as a ninth.
- **Memory limits.** Rao says the popular HNSW index balances recall and latency well but uses a lot of memory, which becomes a problem at "trillion scale". Qdrant's memory-mapped storage is one workaround.
- **Embedded and on-prem.** Responding to Benson's question about edge deployment, Rao points to LanceDB and ChromaDB following the DuckDB embedded model. He expects fully cloud services like Pinecone to meet resistance from companies wary of sending data out. He is most interested in in-house search and retrieval augmented generation.

## Quotes

> "I'm both fascinated and frustrated by the current state of marketing in vector databases, both at the same time." — Prashanth Rao

> "I call it Milvus throws the kitchen sink and the refrigerator at the vector problem." — Prashanth Rao
