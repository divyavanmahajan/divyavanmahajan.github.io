---
title: The evolution and promise of RAG architecture with Tengyu Ma from Voyage AI
description: >-
  Tengyu Ma argues RAG will stay cheaper than long-context models and that
  retrieval quality, driven by domain-tuned embeddings and rerankers, is the
  main lever for enterprise AI.
pubDate: '2024-06-06'
show: no-priors
episode: 63
url: 'https://www.youtube.com/watch?v=MYsx9POL_x8'
youtube: 'https://www.youtube.com/watch?v=MYsx9POL_x8'
durationMin: 36
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Tengyu Ma
tags:
  - rag
  - embeddings
  - retrieval
  - enterprise-ai
  - long-context
draft: false
---
## Thesis

Tengyu Ma, a Stanford professor and the CEO of Voyage AI, argues that retrieval-augmented generation is the right architecture for proprietary enterprise data. In his view, the main bottleneck in RAG is retrieval quality, not the LLM. He predicts that RAG will stay much cheaper than long-context models or agent chaining, and that RAG systems will shrink to a few strong neural components with little hand-built engineering around them.

## Key points

- **Research roots.** Ma's lab built Sophia, an optimizer that he says doubles pre-training efficiency compared with Adam. He says one large Facebook training run saw a 1.6x improvement.
- **RAG vs long context.** Ma says putting one billion tokens into a context window would cost orders of magnitude more, even with cached activations. He compares context to short-term memory and RAG to long-term memory. Guo notes that Gemini 1.5 Pro's million tokens is about five books, while Ma says many companies have 100 million tokens.
- **Agent chaining is orthogonal.** Ma treats agent chaining as iterative, multi-step retrieval that still relies on embedding models. He expects fewer retrieval rounds as embedding models improve.
- **Domain-specific embeddings.** Voyage fine-tuned on two trillion code tokens and one trillion legal tokens. Ma reports 15-20% gains for code and 5-15% for legal, and says fine-tuning on one company's data adds another 10-20%. Latency budgets of 1 second down to 50 milliseconds keep embedding models below roughly 10 billion parameters.
- **Practical advice.** Ma tells builders to profile retrieval quality and end-to-end quality from day one, then swap embeddings or rerankers wherever the bottleneck is. Long-context embedding models (16k tokens, roughly a 50-page PDF) already reduce the need for chunking.
- **Academia's role.** Ma argues that university labs can't match industry capital. He thinks they should aim at breakthroughs three to five years out, such as 5-10x more efficient optimizers and reasoning.

## Quotes

> "my prediction is that rag will be much cheaper than long context going forward" — Tengyu Ma

> "Academia probably should work on some different questions from what industry is good at" — Tengyu Ma
