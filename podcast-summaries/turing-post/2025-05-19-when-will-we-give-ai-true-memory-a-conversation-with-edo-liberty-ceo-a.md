---
title: "When Will We Give AI True Memory? A conversation with Edo Liberty, CEO and founder @ Pinecone"
date: 2025-05-19
show: turing-post
url: "https://www.turingpost.com/podcast/s/turing_post/when_will_we_give_ai_true_memory_a_conversation_with_edo_liberty_ceo_and_founder_pinecone"
duration_min: 31
hosts: ["Ksenia Se"]
guests: ["Edo Liberty"]
description: "Pinecone's Edo Liberty argues AI knowledge and memory sit roughly where language models were before ChatGPT, and that scaling them is a storage problem, not a compute one."
tags: ["vector-databases", "rag", "ai-memory", "retrieval", "infrastructure"]
source_transcript: "turing-post/episodes/2025/05/2025-05-19-when-will-we-give-ai-true-memory-a-conversation-with-edo-liberty-ceo-a.md"
draft: false
---

## Thesis

Edo Liberty, founder and CEO of Pinecone, separates the cognitive skills of foundation models from knowledge: the ability to ingest, organise and retrieve large amounts of information in real time for a task. He argues that RAG-based memory is today roughly where models were before ChatGPT, and that within about two years many teams will treat it as "semi-solved". He also argues that no system can be intelligent without being knowledgeable.

## Key points

- **Memory is a pipeline.** Liberty says every step has to improve together: digesting, understanding, organising, accessing and post-processing data. Most of Pinecone's thousands of customers still run very basic RAG.
- **Storage is the scaling frontier.** He compares vector databases to GPUs for training. The unlock is again infrastructure, but here it is about storage rather than compute. Pinecone adds retrieval-trained embeddings, a contextual token-based model, hybrid sparse/dense search, re-rankers and a query-understanding "search agent".
- **Three workload eras.** Liberty describes 2020-era workloads (a few million vectors queried a thousand times a second), then billion-vector indexes that are memory- and network-bound, and now millions of small siloed indexes (e.g. per inbox, or per folder for customer Rubrik). The third pattern forced a rewrite in the last six months, including an LSM structure that indexes each level according to its usage.
- **Commoditisation at small scale only.** He grants that Postgres, OpenSearch and small open-source tools work for something like 10,000 documents. He says teams come to Pinecone when production scale degrades performance, cost and stability.
- **Unasked questions about truth.** Liberty wants more debate on what accuracy and knowledge mean and on how to handle contested information. He calls the link between how often a claim appears and how true a model thinks it is "a bug".
- **Books and outlook.** He recommends Endurance, about Ernest Shackleton's expedition, for its lessons on leadership. He expects smaller companies and the end of menial cognitive work, and worries about irresponsible uses of AI outpacing trust in the technology.

## Quotes

> "I don't think you can be intelligent without being knowledgeable. I just don't think that's possible." — Edo Liberty

> "If I had 50 PhDs working on this, they would all be very busy." — Edo Liberty
