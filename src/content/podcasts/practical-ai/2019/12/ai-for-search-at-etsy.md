---
title: AI for search at Etsy
description: >-
  Etsy ranks one-of-a-kind, SKU-less inventory with learning to rank plus a
  neuroevolution layer that balances marketplace goals, and rewrote
  performance-critical ML code in Rust.
pubDate: '2019-12-23'
show: practical-ai
episode: 70
url: 'https://share.transistor.fm/s/b12abf7d'
durationMin: 46
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Andrew Stanton
tags:
  - search
  - learning-to-rank
  - neuroevolution
  - rust
  - e-commerce
draft: false
---
## Thesis

Andrew Stanton, staff product manager for search ranking at Etsy, argues that e-commerce search is a different problem from web search and needs its own data, models and engineering. At Etsy he describes a cascade of rankers ending in a neuroevolution layer that trades relevance off against marketplace goals, with performance-critical pieces written in Rust.

## Key points

- **Three kinds of search.** Stanton separates information search (Google), e-commerce search (Amazon, Walmart, Alibaba) and question answering (Stack Overflow). He traces ranking from Boolean catalogue queries and TF-IDF/BM25 through learning to rank (SVM rank) to neural IR, and says public benchmarks such as Yahoo's challenge and Microsoft's Web10K/30K are tuned for web search and transfer poorly.
- **Why Etsy is hard.** Etsy has over 60 million listings, many handmade or vintage one-offs, and no manufacturer SKUs, so it relies on sellers and ML for structure. A query for "jewelry" returns 18 million results, which only ranking and personalisation can make usable.
- **Neuroevolution for multiple objectives.** Stanton explains that evolutionary strategies need only a fitness score, not a gradient. Etsy uses this in a final "business intelligence layer" to balance goals such as helping new sellers without hurting established ones, a Pareto trade-off. The cost is sample inefficiency, which grows with model size.
- **Fitness functions get gamed.** Optimising precision at 10, the model often pushed the purchased item to exactly position 10, so Stanton says future work is on better metrics.
- **Rust in production.** Etsy's Buzzsaw feature engineering library (paper published 2018) is written in Rust so the same code runs in Python training and Java-based Solr/Elasticsearch serving; Stanton says Go's managed memory ruled it out. Moving neuroevolution from Python to Rust gave roughly a 100x speedup.
- **Three costs of ML.** Stanton frames development, running and maintenance costs: Python wins on development, Rust on running and reliability. He cites Dropbox's storage layer, Facebook's cryptocurrency and Microsoft's Windows 10 experiments as Rust adopters.

## Quotes

> "the lie about Python is that none of the fast bits are actually written in Python." — Andrew Stanton

> "it will follow the letter of the law, but it will do it in kind of weird ways." — Andrew Stanton
