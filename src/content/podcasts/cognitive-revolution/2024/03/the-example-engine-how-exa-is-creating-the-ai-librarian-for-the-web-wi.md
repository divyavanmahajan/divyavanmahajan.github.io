---
title: >-
  The Example Engine: How Exa Is Creating the AI Librarian for the Web with Will
  Bryk, CEO of Exa
description: >-
  Will Bryk argues that keyword search has limited what people expect to find
  online, and that a neural, link-predicting search engine built for AI agents
  can handle complex research queries.
pubDate: '2024-03-05'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/the-example-engine-how-exa-is-creating-the-ai-librarian-for-the-web-with-will-bryk-ceo-of-exa/
youtube: 'https://www.youtube.com/watch?v=dT_RicoNSKM'
durationMin: 67
hosts:
  - Nathan Labenz
guests:
  - Will Bryk
tags:
  - search
  - embeddings
  - vector-databases
  - retrieval
  - ai-startups
draft: false
---
## Thesis

Exa CEO Will Bryk argues that Google is a search engine for people who already know what they want, while much valuable work is research: complex, multi-condition queries where the right keywords are unknown. Exa trains its own models to predict which documents people link to, so that AI systems can ask long, precise questions and get many full-content results back. Nathan Labenz tests this against Perplexity, You.com and Elicit and places Exa as a links-returning "research engine".

## Key points

- **Search versus research.** Bryk's canonical example is "startups applying AI to law in the Bay Area", which Google cannot return as a clean list. He likens Exa to a librarian who knows what matches even when pages never use the words "AI" or "law".
- **Built for AI consumers.** Bryk says AIs write paragraph-long queries, can read 100 results at once, know exactly what type of result they want, and need full page content rather than links and titles.
- **Link prediction, not keywords.** Exa trains a transformer-like model on places where people share links and has it output an embedding matched against an index of document IDs. Because nobody shares SEO spam, he says the model avoids it. The best prompt reads like text a link would follow.
- **Embeddings as a stage.** Labenz expects embeddings to mediate more communication; Bryk calls them lossy and "the past". He plans later versions that break down queries and combine facts spread across documents, staying in fuzzy neural space rather than a rigid knowledge graph.
- **Frugal infrastructure.** Exa has raised about $5 million, runs its own GPU cluster, crawls a high-quality subset of the web instead of the hundreds of billions of pages Google covers, and built its own vector database because open-source options did not support its filters.
- **Business and evaluation.** Pricing starts at $10 per 1,000 searches; Bryk says customers use it for people, company and news lookups that the Bing API cannot handle, and positions it as premium search. Evaluations break queries into objective abilities such as authorship and topic.

## Quotes

> "So Exa is a search engine built for AI systems. Really, we're trying to redesign the search algorithm itself." — Will Bryk

> "Embeddings actually feel to me like the past. I think I think embeddings are just the beginning." — Will Bryk
