---
title: "Improving search with RAG architecture with Pinecone CEO Edo Liberty"
date: 2024-02-22
show: no-priors
episode: 52
url: "https://www.youtube.com/watch?v=6R7YCX4Q91Q"
youtube: "https://www.youtube.com/watch?v=6R7YCX4Q91Q"
duration_min: 31
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Edo Liberty"]
description: "Pinecone CEO Edo Liberty argues that retrieval over a scalable vector database, not bigger context windows or fine-tuning, is the practical way to give models accurate, private knowledge."
tags: ["rag", "vector-databases", "search", "serverless", "enterprise-ai"]
source_transcript: "no-priors/episodes/2024/02/2024-02-22-improving-search-with-rag-architecture-with-pinecone-ceo-edo-liberty.md"
draft: false
---

## Thesis

Edo Liberty, founder and CEO of Pinecone, argues that foundation models should be given knowledge at query time through retrieval over embeddings. Scale and cost, not latency, decide whether this works, which is why Pinecone rebuilt itself as a serverless service. He sees RAG as more reliable, cheaper and easier to govern than long-context stuffing or fine-tuning.

## Key points

- **RAG levels models.** Liberty says Pinecone loaded Common Crawl and augmented GPT-3.5, GPT-4, Llama, Mixtral and Anthropic models; hallucinations fell by up to 50%, and the models converged to similar accuracy.
- **Customers and data.** Most users search their own text: legal, medical records, wikis, sales calls. Notion Q&A and Gong run on Pinecone.
- **Serverless for scale.** He says knowing a lot means ingesting billions of vectors cheaply. Serverless Pinecone is tested at tens of billions of vectors and is the fourth near-complete rewrite of the database. Canopy is a separate open-source end-to-end RAG framework.
- **Why not Postgres or keywords.** Liberty argues bolt-on vector indexes work at small scale but break in production on cost, and keyword search is the wrong retrieval mode. Hybrid search with sparse and dense vectors is convenient, but he expects keywords to remain mainly for boosting.
- **Closed source by choice.** He says open source historically served trust, contributions and distribution; a fully managed multi-tenant service can earn trust instead. Gil recalls Ali Ghodsi of Databricks advising founders to avoid open source if they can.
- **Context and privacy.** Liberty calls infinite context good business for vendors that sell by the token, and context stuffing costly. Not fine-tuning on private data and deleting it from the vector database gives "operational sanity" and GDPR compliance. He wants future AI to separate reasoning from knowledge.

## Quotes

> "serverless is the fourth almost complete rewrite of the entire database of pine con" — Edo Liberty

> "we take uh half the internet and cram it into GPU memory I'm like holy what why this can't be the right thing to do" — Edo Liberty
