---
title: "Retrieval After RAG: Hybrid Search, Agents, and Database Design — Simon Hørup Eskildsen of Turbopuffer"
date: 2026-03-12
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/retrieval_after_rag_hybrid_search_agents_and_database_design_simon_horup_eskildsen_of_turbopuffer"
duration_min: 61
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Simon Hørup Eskildsen"]
description: "Turbopuffer's Simon Eskildsen argues a new database company is possible because AI creates a new search workload and object storage plus NVMe SSDs enable a far cheaper architecture."
tags: ["search", "vector-databases", "database-architecture", "object-storage", "agentic-search"]
source_transcript: "latent-space/episodes/2026/03/2026-03-12-retrieval-after-rag-hybrid-search-agents-and-database-design-simon-h-r.md"
draft: false
---

## Thesis

Simon Hørup Eskildsen, co-founder of Turbopuffer, argues that big database companies emerge roughly every 15 years when a new workload meets a new storage architecture. Today the workload is connecting very large amounts of data to AI, and the architecture is a search engine built entirely on object storage, cached on NVMe SSDs and in memory. He describes Turbopuffer as now a full-text and vector search engine, and explains how agents are changing what search needs to do.

## Key points

- **Origin in napkin math.** While consulting for Readwise after nearly a decade on Shopify's infrastructure, Eskildsen found a recommendation feature would cost about $30,000 a month on existing vector databases, against roughly $5,000 for all other infrastructure. Working from first principles, he concluded that object storage plus SSD caching could cut that sharply.
- **Three enablers.** NVMe SSDs in the cloud (around 2017), S3 strong consistency (December 2020) and compare-and-swap on object storage (on GCP first, S3 in late 2024) let Turbopuffer run with no separate consensus layer. Writes take about 100 ms, a trade-off he accepts.
- **Cursor and Notion.** Cursor moved over within a week or two of the first meeting, while the product was a single Rust binary on one eight-core machine. Eskildsen says costs fell 95%. To serve Notion from GCP before S3 gained compare-and-swap, the team bought dark fibre between cloud regions in Oregon.
- **Agentic search.** Agents now fire many parallel queries per round trip instead of one retrieval at the start, so Turbopuffer is cutting query prices about fivefold. He sees all workloads as hybrid: semantic, full-text and regex together.
- **Scale and roadmap.** ANN v3 searches 100 billion vectors at about 40 ms P50 and 200 ms P99. Eskildsen says the full-text engine beats Lucene on some long, LLM-generated queries. 2026 priorities are full-text features, scale and a better dashboard; analytics or logging come later.
- **Company building.** Turbopuffer is profitable because early bills ran on his credit card. He told investor Lachy he would return the money without product-market fit by year end. Hiring uses a "P99 engineer" checklist, and every recap starts from rejecting the candidate.

## Quotes

> "you could turn off all the servers that TurboPuffer has, and we would not lose any data because we are all completely all in on object storage" — Simon Hørup Eskildsen

> "when you're a startup, your only moat is really just focus." — Simon Hørup Eskildsen
