---
title: "Beating Google at Search with Neural PageRank and $5M of H200s — with Will Bryk of Exa.ai"
date: 2025-01-10
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/beating_google_at_search_with_neural_pagerank_and_5m_of_h200s_with_will_bryk_of_exa_ai"
duration_min: 56
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Will Bryk"]
description: "Exa CEO Will Bryk argues an end-to-end neural search engine that spends variable compute per query can return complete, high-quality result lists that keyword-era search cannot."
tags: ["search", "neural-search", "embeddings", "ai-agents", "web-crawling"]
source_transcript: "latent-space/episodes/2025/01/2025-01-10-beating-google-at-search-with-neural-pagerank-and-5m-of-h200s-with-wil.md"
draft: false
---

## Thesis

Will Bryk, CEO and co-founder of Exa (formerly Metaphor Systems), argues that Google is built on 1998-era keyword technology constrained by a 400 ms latency budget. A search engine designed from scratch around neural models can instead understand complex queries and, given enough compute, return every matching result. He frames Exa as "the OpenAI of search": a research company building search infrastructure for LLMs and agents.

## Key points

- **Link prediction as neural PageRank.** Bryk explains that Exa's original base model hides a link in web text and predicts which document follows. Because people refer to the same canonical page in many ways, he calls this "PageRank on steroids". Exa has since added synthetic data and fine-tuning.
- **Ten to the eighteenth beats a googol.** The name refers to returning the exact set of matches, such as all 325 hardware startups in San Francisco, instead of "30 million results". Bryk describes the new list product as "o1 for search", spending more compute until results are comprehensive, with previews before larger jobs.
- **Different from Perplexity and ChatGPT Search.** Bryk says those products wrap LLMs around Bing or Google results plus a cache of pages. Exa runs its own crawler, embedding pipeline and vector database, and filters out SEO slop rather than passing it on to LLMs.
- **Search for super knowledge.** Bryk and the hosts agree that a small LLM acting as an intelligence module plus a search tool is more efficient than a model that memorises the web. He argues that LLMs, not humans typing keywords, will be the main writers of queries.
- **Use cases.** Customers include a research-paper writing assistant, VCs building company lists for hours on end, sales prospecting, recruiting and, Bryk suggests, dating. Exa also returns full parsed page contents.
- **Compute and costs.** Exa bought a $5 million H200 cluster. swyx notes ad revenue caps AI search costs, and Bryk replies that LLM costs falling 200x make rethinking search necessary.

## Quotes

> "The link prediction objective can be seen as like a neural PageRank because what you're doing is you're predicting the links people share." — Will Bryk

> "Uh, whatever the search engine optimizes for is what the internet looks like." — Will Bryk
