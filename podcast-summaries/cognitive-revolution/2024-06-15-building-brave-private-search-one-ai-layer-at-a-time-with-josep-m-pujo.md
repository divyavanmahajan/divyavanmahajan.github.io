---
title: "Building Brave: Private Search, One AI Layer at a Time with Josep M. Pujol"
date: 2024-06-15
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/building-brave-private-search-one-ai-layer-at-a-time-with-josep-m-pujol/"
youtube: "https://www.youtube.com/watch?v=S3y1R5f1hBc"
duration_min: 85
hosts: ["Nathan Labenz"]
guests: ["Josep M. Pujol"]
description: "Brave's Josep M. Pujol argues good search comes from layering many models and techniques incrementally to cut noise, using anonymous data, never from one algorithm or embedding."
tags: ["search", "privacy", "embeddings", "retrieval", "llm-evaluation"]
source_transcript: "cognitive-revolution/episodes/2024/06/2024-06-15-building-brave-private-search-one-ai-layer-at-a-time-with-josep-m-pujo.md"
draft: false
---

## Thesis

In this sponsored episode, Brave's chief of search Josep M. Pujol tells Nathan Labenz that search is built by adding techniques one layer at a time, not by a single breakthrough. He argues that noise reduction matters more than any model, that privacy and useful data are compatible if data is collected for a single purpose, and that ensembles beat any one embedding.

## Key points

- **Anonymous data.** Opt-in users of the Web Discovery Project send unlinkable data elements through a mixing network, and a URL is only received once enough people have seen it. Brave then fetches those URLs instead of crawling blindly; Pujol says the index is a tenth of Google's with 99.9% of its recall.
- **PageRank was a gimmick.** Pujol says early Google won through anchor text and brute-force crawling. Brave relies on query logs instead: its similarity system holds over 9 billion unique queries and returns matches in 20 milliseconds, made feasible by 1 TB RAM servers and NVMe drives.
- **Hybrid, additive retrieval.** Brave combines dense 384-dimension transformer embeddings with sparse 16,000-dimension ones for literal matches. Embeddings tied to the data are never replaced; StarSpace vectors from 2019 are still used, and new ones become extra features in a gradient-boosted ranker with 200 to 300 features.
- **Swappable LLMs.** The summarizer covers 25 to 30% of queries and moved from Flan-T5 to Mixtral to Llama 3, a switch that took a week. Everything is self-hosted. Pujol says the real work is choosing which snippets go into the roughly 4,000-token prompt.
- **Evaluation and the API.** A team of human assessors, comparisons against Google and Bing, and held-out test sets guard quality for about 20 search staff. Pujol says Brave offered its API once it no longer depended on Bing; Labenz cites $9 per thousand queries against $25 for comparable Bing results. Pujol worries AI answers weaken incentives to publish on the web.

## Quotes

> "Noise reduction is the single most important thing that you have to do ever." — Josep M. Pujol

> "Answers are not knowledge. Questions are knowledge. Answers are just answers." — Josep M. Pujol
