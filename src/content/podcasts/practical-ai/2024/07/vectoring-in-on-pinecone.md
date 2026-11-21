---
title: Vectoring in on Pinecone
description: >-
  Pinecone's Roie Schwaber-Cohen argues that vector databases bridge the
  semantic and structured worlds, turning the LLM from a source of truth into a
  thin language layer over trusted data.
pubDate: '2024-07-10'
show: practical-ai
episode: 277
url: 'https://share.transistor.fm/s/8c9648cd'
durationMin: 44
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Roie Schwaber-Cohen
tags:
  - vector-databases
  - rag
  - embeddings
  - semantic-search
  - serverless
draft: false
---
## Thesis

Roie Schwaber-Cohen, developer advocate at Pinecone, tells Daniel Whitenack and Chris Benson that the value of vector search lies in embeddings, which place semantically similar content close together. A vector database lets applications ground LLM answers in trusted data at scale, and he expects LLMs to end up as orchestrators over vector, graph and relational stores rather than the whole solution.

## Key points

- **Origins.** Schwaber-Cohen says Pinecone started about four years earlier, founded by Ido Liberti (as transcribed), who helped found SageMaker at Amazon. He distinguishes vector databases, which scale like databases, from vector indices limited by one machine's memory.
- **Embeddings carry the value.** Similarity search itself is simple maths; embeddings put "king" nearer "queen" than "dog", so users can find content that shares meaning but not words, which TF-IDF or BM25 cannot do. The same works for images via CLIP.
- **RAG as grounding.** Citing Andrej Karpathy's observation that LLMs are always hallucinating, he describes RAG as tying user intent to trusted data, so the source of each answer is known.
- **Production features.** Metadata filters narrow results by project, genre or date range; namespaces separate tenants' vectors for multi-tenant RAG. He recommends starting with internal, non-critical use cases and stresses continuous, quantitative evaluation, pointing to Pinecone's RAG Planner tool.
- **Serverless economics.** Separating compute from storage means the cost of storing about 500,000 vectors now covers 10 million, with growth to tens or hundreds of billions of vectors and a free tier for developers.
- **Assistant and the future.** Pinecone Assistant, in public beta, handles chunking, embedding and inference from uploaded documents. He is excited by graph RAG and the community moving past its focus on LLMs alone.

## Quotes

> "it shifts the role of the LLM from being your source of truth to basically being a thin natural language wrapper" — Roie Schwaber-Cohen

> "vector databases kind of like put LLMs in their place a little bit" — Roie Schwaber-Cohen
