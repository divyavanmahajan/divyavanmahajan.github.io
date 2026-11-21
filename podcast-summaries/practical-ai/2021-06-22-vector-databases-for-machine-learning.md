---
title: "Vector databases for machine learning"
date: 2021-06-22
show: practical-ai
episode: 139
url: "https://share.transistor.fm/s/a95b21be"
duration_min: 43
hosts: ["Chris Benson"]
guests: ["Edo Liberty"]
description: "Pinecone founder Edo Liberty argues that embeddings have become the common format for unstructured data, and that machine learning now needs memory: a managed vector database for fast similarity search."
tags: ["vector-databases", "embeddings", "similarity-search", "semantic-search", "data-infrastructure"]
source_transcript: "practical-ai/episodes/2021/06/2021-06-22-vector-databases-for-machine-learning.md"
draft: false
---

## Thesis

Edo Liberty, founder and CEO of Pinecone, tells Chris Benson that deep learning has turned audio, video, text and user behaviour into high-dimensional vectors, but existing databases and search engines cannot work with them. Using the brain as an analogy, he argues the field has concentrated on processing (the "visual cortex") and now needs memory: storing billions of embeddings and retrieving similar ones in milliseconds.

## Key points

- **Background.** Liberty started on gigabyte-sized hyperspectral images on machines with 512 MB of memory during his PhD, then led scalable machine learning algorithms at Yahoo and was the research director responsible for the algorithms in Amazon SageMaker.
- **Embeddings as lingua franca.** He says hand-crafted features gave way to learned embeddings, which now represent images, text, user behaviour and network threats, while most of the world's data never fits in a SQL table.
- **How similarity search works.** Liberty describes partitioning the vector space into clusters, quickly ruling out unlikely candidates, then computing exact distances on a small set. The result is approximate, trading accuracy against speed, unlike a key-value lookup or B-tree.
- **Database or search engine.** Pinecone is in-memory, does no joins and is not a SQL engine, but cares about consistency and persistence; Liberty finds both labels "equally bad and equally good".
- **Use cases.** He cites feed ranking at Facebook and LinkedIn, semantic search with models such as BERT from Hugging Face in place of Elasticsearch tokens, near-duplicate image detection for fraud, anomaly detection, and recommendation and personalisation.
- **Getting started.** Pinecone is a fully managed service with a free API key and tutorial notebooks; Liberty says most non-enterprise users pay under about a hundred dollars a month. Looking ahead, he believes general AI is still very far away.

## Quotes

> "The reason why I started Pinecone was because no database like that existed. Nobody knew what the hell to do with it." — Edo Liberty

> "How do we make that behave a lot more like a brain and not like a neural net?" — Edo Liberty
