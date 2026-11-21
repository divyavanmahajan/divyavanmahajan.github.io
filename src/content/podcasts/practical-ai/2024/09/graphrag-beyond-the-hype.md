---
title: GraphRAG (beyond the hype)
description: >-
  GraphRAG works best as a complement to vector search: explicit graph
  relationships add context embeddings miss, but building a high-quality graph
  remains the hard part.
pubDate: '2024-09-25'
show: practical-ai
episode: 288
url: 'https://share.transistor.fm/s/d2299d84'
durationMin: 55
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Prashanth Rao
tags:
  - graphrag
  - knowledge-graphs
  - retrieval-augmented-generation
  - vector-search
  - graph-databases
draft: false
---
## Thesis

Prashanth Rao, AI engineer at the embedded graph database company Kùzu, argues that GraphRAG is not a graph-only replacement for vector retrieval. Graphs capture explicit relationships between entities that dense embeddings miss, so combining graph traversal with vector search gives the LLM better context. The main obstacle is constructing a high-quality graph from unstructured text in the first place.

## Key points

- **Graphs suit connected data.** Rao describes graphs as nodes (people, companies) joined by edges (relationships), and points to medicine, financial transaction chains and traffic networks as cases where graph queries are more intuitive than SQL. He notes the property graph model was popularised by Neo4j.
- **Where vector search falls short.** Rao traces RAG from 2020 papers by Google and Facebook Research through hybrid search (BM25 plus dense embeddings plus a re-ranker). Neither sparse nor dense search reliably links "student of" with "worked with", whereas a graph triple stores that relationship explicitly.
- **Accuracy, not fewer hallucinations.** Rao disputes claims that GraphRAG reduces hallucination: any LLM generation can hallucinate. The benefit he claims is a better chance of factually correct answers.
- **A worked example.** In his demo repo, Kùzu holds the graph and LanceDB the vectors, built from a text about Marie Curie. Asked who Pierre Curie worked with, vector search returned only Marie Curie; the graph also found his student Paul Langevin, and a re-ranker merged both results.
- **Graph construction is the bottleneck.** LlamaIndex and LangChain extract triples with LLMs, but Rao flags how unreproducible that is. He points to smaller, more controllable models such as REBEL and ReLiK, and spaCy add-ons GLiNER and GLiREL.
- **Outlook.** Rao expects GraphRAG itself to fade as a topic, but sees graphs as dynamic action spaces for agents and as part of hybrid symbolic-statistical systems.

## Quotes

> "So I wouldn't state that the benefit of graph rag is that it eliminates or reduces hallucination." — Prashanth Rao

> "Think of it as a suite of tools and methodologies that come together to enhance retrieval in a way that you can get better generation." — Prashanth Rao
