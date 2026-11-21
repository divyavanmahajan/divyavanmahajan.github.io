---
title: "Data augmentation with LlamaIndex"
date: 2023-05-23
show: practical-ai
episode: 224
url: "https://share.transistor.fm/s/d3e7ab55"
duration_min: 45
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Jerry Liu"]
description: "Jerry Liu explains how LlamaIndex connects LLMs to private data through ingestion, indices and query interfaces that go beyond simple vector search."
tags: ["llamaindex", "retrieval-augmented-generation", "llm-applications", "vector-databases", "llm-evaluation"]
source_transcript: "practical-ai/episodes/2023/05/2023-05-23-data-augmentation-with-llamaindex.md"
draft: false
---

## Thesis

Jerry Liu, co-founder and creator of LlamaIndex, argues that you do not need to retrain a language model to use it on private data: you can feed relevant data into the prompt and have the model reason over it. LlamaIndex wraps the stateless LLM call in a stateful data layer of ingestion, indexing and querying, acting as an orchestrator on top of existing storage rather than a vector database itself.

## Key points

- **Why LLMs over data.** Liu says LLMs understand unstructured text and natural-language questions, so much of the parsing and ETL that SQL-style pipelines need can be skipped; you can paste raw text into the prompt and ask questions.
- **Context limits drive the design.** He cites roughly 4,000 tokens for GPT-3 and 100,000 for Anthropic, against about 160,000 tokens for an Uber SEC 10-K, so systems need retrieval or chained synthesis over chunks.
- **Ingestion.** LlamaHub, a community hub, offers more than 90 data connectors for file formats and services such as Notion, Slack and Discord; Liu asks for a Salesforce loader contribution.
- **Indices for different questions.** Vector indices suit fact lookups, list indices suit summaries of whole documents, and keyword tables give higher precision. Liu also describes text-to-SQL, compare-and-contrast and temporal queries.
- **Query planning.** For comparing Uber and Lyft 10-Ks, Liu says plain top-k embedding lookup fails; LlamaIndex breaks the question into per-company sub-questions and then synthesises an answer. Chris Benson, who reads 10-Ks often, expects this to save him time.
- **Evaluation and next steps.** LlamaIndex's eval modules work without ground-truth labels, using another LLM call to check response, sources and query against each other; Liu flags cost and latency as open issues and names the trade-off between agent flexibility and constraints as a focus.

## Quotes

> "LLM application development, to put it in a very oversimplified view, is just some fancy form of prompt engineering and prompt training, right?" — Jerry Liu

> "basically using the language model to evaluate itself, right?" — Jerry Liu
