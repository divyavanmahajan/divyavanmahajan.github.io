---
title: "#434 – Aravind Srinivas: Perplexity CEO on Future of AI, Search & the Internet"
date: 2024-06-19
show: lex-fridman
episode: 434
url: "https://lexfridman.com/aravind-srinivas/"
youtube: "https://www.youtube.com/watch?v=e-gwvmhyU7A"
duration_min: 191
hosts: ["Lex Fridman"]
guests: ["Aravind Srinivas"]
description: "Aravind Srinivas argues Perplexity can win in search by not playing Google's game: cited answers instead of links, built on hard retrieval and ranking work, not just better models."
tags: ["ai-search", "retrieval-augmented-generation", "business-models", "reasoning", "startups"]
source_transcript: "lex-fridman/episodes/2024/06/2024-06-19-aravind-srinivas-perplexity-ceo-on-future-of-ai-search-the-internet.md"
draft: false
---

## Thesis

Perplexity CEO Aravind Srinivas tells Lex Fridman that Perplexity is an answer engine, or "knowledge discovery engine", whose every sentence must be backed by a retrieved source, an idea taken from academic citation practice. He argues the opening against Google is its business model: a link-based ad business that cannot afford to replace links with answers. Smarter models alone will not solve search; indexing, ranking, latency and product design matter as much.

## Key points

- **Origin in a health-insurance question.** Srinivas says the idea came from asking a GPT-3.5 Slack bot about insurance and getting wrong answers. The first product searched Twitter through generated SQL; the web version launched on 7 December 2022 and grew after suggested follow-up questions were added.
- **Your margin is my opportunity.** Citing Bezos and the Art of War, he argues Google will not push answers that cut link clicks, just as it left low-margin cloud to Amazon. Perplexity leans on subscriptions and may try ads that feel like Instagram's.
- **Search is not just embeddings.** He says BM25 still beats most embeddings, so ranking needs a hybrid of term-based retrieval, PageRank-like domain authority and recency, on top of PerplexityBot crawling that respects robots.txt.
- **Model-agnostic product.** Users pick GPT-4o, Claude 3 or Sonar, a Llama 3 model Perplexity post-trained. Srinivas says users care about the answer, not the model, and the team tracks P90/P99 tail latency and time to first token, working with investor NVIDIA on TensorRT-LLM.
- **Reasoning and inference compute.** Srinivas expects breakthroughs from decoupling reasoning from facts in small models and from iterative inference compute, citing the STaR paper. He worries more about who can afford compute than about open weights.
- **The user is never wrong.** Taking the idea from Larry Page, he argues products should handle lazy, badly typed queries rather than demand prompt engineering.

## Quotes

> "The principle in Perplexity is you’re not supposed to say anything that you don’t retrieve, which is even more powerful than RAG" — Aravind Srinivas

> "Because people are lazy and a better product should be one that allows you to be more lazy, not less." — Aravind Srinivas
