---
title: "AI's role in reprogramming immunity"
date: 2022-06-28
show: practical-ai
episode: 183
url: "https://share.transistor.fm/s/14a3c811"
duration_min: 49
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Drausin Wulsin"]
description: "Immunai's Drausin Wulsin argues that better data capture, more than better algorithms, is driving AI in biology, and that transfer learning across many small datasets is the way in."
tags: ["ai-in-healthcare", "transfer-learning", "foundation-models", "ml-engineering", "biotech"]
source_transcript: "practical-ai/episodes/2022/06/2022-06-28-ai-s-role-in-reprogramming-immunity.md"
draft: false
---

## Thesis

Drausin Wulsin, Director of Machine Learning at Immunai, argues that progress in biological AI over the past decade has been led more by new ways of measuring data than by new algorithms. Because biology produces many small, varied datasets instead of one web-scale source, he says the opportunity lies in transfer learning and foundation-model techniques borrowed from language AI, applied with discipline and close collaboration with domain experts.

## Key points

- **Data is leading the pack.** Wulsin traces the shift from early lab techniques that measured a handful of genes to today's per-cell measurements across roughly 20,000 genes. He says published studies went from 200 cells to 2 million in about five years, and expects data to keep driving the next decade.
- **Messy, costly trade-offs.** He describes choosing between measurement types that differ in coverage, quality, cost and turnaround time; one common readout has about 90% zeros. Unlike images, no expert can eyeball a 20,000-dimensional vector to check a model's answer.
- **Transfer across small datasets.** Wulsin says vision and text have it relatively easy because they can scrape the web, while biology has tens or hundreds of smaller sources. Immunai's founders bet on sharing learning across related tasks; the company adapts transformer architectures from OpenAI, Google and others rather than inventing new ones.
- **Solve it without ML first.** He spent his first six months at Immunai without training a single model, learning the problem with immunologists. He says logistic regression or XGBoost covers about 80% of classification needs, and warns that GPU infrastructure for big models can burn time on the wrong problem.
- **Overlapping teams.** Wulsin describes teams of immunologists, engineers and ML staff as overlapping distributions: without shared edges, work falls through the cracks.
- **Where the field is going.** He sees pieces of the drug-discovery pipeline becoming productised, cautions against overstated claims of fully AI-generated therapies, and notes Immunai is about 150 people.

## Quotes

> "when you have a problem that you want to solve, you always solve it without ML first." — Drausin Wulsin

> "There's a lot of like AI marketing that happens in the biotech space." — Drausin Wulsin
