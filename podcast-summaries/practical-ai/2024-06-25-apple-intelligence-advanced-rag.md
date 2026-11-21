---
title: "Apple Intelligence & Advanced RAG"
date: 2024-06-25
show: practical-ai
episode: 275
url: "https://share.transistor.fm/s/b03b373b"
duration_min: 45
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "Enterprises are moving past generative AI hype toward mixed model stacks, Apple frames AI as a feature rather than a product, and naive RAG is only a first step."
tags: ["enterprise-ai", "apple-intelligence", "rag", "open-models", "retrieval"]
source_transcript: "practical-ai/episodes/2024/06/2024-06-25-apple-intelligence-advanced-rag.md"
draft: false
---

## Thesis

Chris Benson and Daniel Whitenack check in on enterprise AI adoption, which Benson sees as maturing into ordinary software work with several models combined. They discuss Apple Intelligence as a product-led approach to AI and the trade-offs of closed model APIs. Whitenack then argues that teams stuck on naive retrieval-augmented generation (RAG) are missing a set of well-known techniques for improving it.

## Key points

- **Reality check in the enterprise.** Benson sees companies weighing the cost of providers like OpenAI and data concerns against open source and smaller models, with no settled best practice yet. He also sees AI and data science teams finally joining agile software processes.
- **Data science survives.** Whitenack notes from Google Trends that interest in data science keeps rising. Benson says people are recognising what generative AI does poorly and pairing it with other methods, such as reinforcement learning.
- **Apple Intelligence.** Benson likes that Apple's WWDC 2024 announcements present AI as a device feature. He dismisses Elon Musk's privacy criticism, because users are asked each time before a request is sent to OpenAI's model.
- **Control, not just privacy.** Whitenack argues closed APIs are opinionated products that change inputs and outputs, as with Gemini's images of the American founding fathers, so teams can get 80 to 90% of the way and then get stuck. Benson adds that partner data agreements and his national security work push towards self-hosted open models.
- **Advanced RAG techniques.** Whitenack covers context enrichment (adding neighbouring chunks), hierarchical search over LLM-written summaries, hybrid keyword plus vector search, cross-encoder re-ranking, HyDE hypothetical documents and query transformation. He points to the LlamaIndex and LanceDB blogs.

## Quotes

> "they've made these AI announcements that clearly position AI as a feature and not the product itself" — Chris Benson

> "it is naive, but it surprisingly works amazingly well in many cases" — Daniel Whitenack
