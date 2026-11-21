---
title: "Reinforcement Learning for search"
date: 2020-10-26
show: practical-ai
episode: 110
url: "https://share.transistor.fm/s/051442de"
duration_min: 47
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Hamish Ogilvy"]
description: "Sajari founder Hamish Ogilvy argues that fast search depends on lightweight Bayesian bandit reinforcement learning built into mutable indexes, not heavy custom models for every customer."
tags: ["search", "reinforcement-learning", "e-commerce", "information-retrieval", "mlops"]
source_transcript: "practical-ai/episodes/2020/10/2020-10-26-reinforcement-learning-for-search.md"
draft: false
---

## Thesis

Hamish Ogilvy, founder of Sajari, tells Daniel Whitenack and Chris Benson that machine learning search has to be both accurate and fast. His team relies on Bayesian bandit style reinforcement learning because it improves ranking with little overhead across hundreds of customers. To make that work, Sajari built its own search index whose scores can be edited live.

## Key points

- **Speed is revenue.** Ogilvy cites an Amazon study in which every 100 milliseconds of added delay cost 1% of revenue, and a similar Google test that showed a 20% drop in click-through. He says this is why Sajari will not trade speed for accuracy.
- **Search reveals intent.** For a cable TV customer, "cancel" is the top search, which can feed retention programmes. Ogilvy adds that very frequent queries are a sign they should become navigation items.
- **Reinforcement learning over custom models.** Building a custom model for a customer paying by credit card is not economical, Ogilvy says. Bandit algorithms like the ones Optimizely uses learn from rewards instead: when COVID hit, purchases moved results for "face masks" from cosmetic masks to N95 respirators. The time window is a trade-off: two weeks adapts quickly but gives less certainty.
- **Mutable indexes.** Traditional reverse indexes are immutable so they can compress well (delta encoding) and serve many readers at once. Learn-to-rank therefore usually re-ranks results in a separate pass. Sajari instead puts reinforcement signals into the index itself, an approach Ogilvy notes LinkedIn has also published libraries for.
- **Integration and operations.** Sites can be crawled with no code, but e-commerce customers connect through APIs or Shopify, some sending over 500 product updates a second. Ogilvy recommends versioning everything; Sajari records analytics for every key press and backtests new algorithms on historical data.
- **E-commerce boom and the future.** Ogilvy reports about 350% growth in e-commerce queries in 2020 and says voice is making queries longer, which pushes search towards hybrid keyword and vector approaches. His advice is to keep the AI pluggable.

## Quotes

> "version everything and make it part of your entire workflow so that that flows all the way through to the analytics." — Hamish Ogilvy

> "Don't try to keep up or stay ahead because you're going to struggle." — Hamish Ogilvy
