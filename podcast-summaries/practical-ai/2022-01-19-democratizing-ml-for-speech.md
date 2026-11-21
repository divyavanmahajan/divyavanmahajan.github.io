---
title: "Democratizing ML for speech"
date: 2022-01-19
show: practical-ai
episode: 164
url: "https://share.transistor.fm/s/0243f082"
duration_min: 45
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["David Kanter"]
description: "David Kanter argues that large, permissively licensed and maintained open datasets, such as MLCommons' People's Speech and Multilingual Spoken Words Corpus, push speech technology forward for everyone."
tags: ["speech-recognition", "open-data", "datasets", "benchmarks", "low-resource-languages"]
source_transcript: "practical-ai/episodes/2022/01/2022-01-19-democratizing-ml-for-speech.md"
draft: false
---

## Thesis

David Kanter, executive director of MLCommons, argues that open, curated and maintained datasets are the raw ingredient of machine learning, and that companies often gain more by opening data than by keeping it. He presents two new speech datasets, one aimed at scale and one at language diversity, built mainly with automated tooling rather than manual labelling.

## Key points

- **Benchmarks and data.** Kanter describes MLCommons as an industry consortium, a nonprofit since 2020. MLPerf now covers systems "from microwatts to megawatts", and he says ML performance improved 16 to 30x in about two and a half years, against roughly 2.5x expected from Moore's Law.
- **The business case for open data.** He cites Criteo opening an older dataset so that benchmarked systems would get faster for its own workload, and notes that hardware members like Intel and NVIDIA sell more when more people do ML. Open data can be a base, with proprietary data added on top for fine-tuning.
- **People's Speech.** 30,000 hours of permissively licensed conversational speech, about two to three terabytes, big enough to train an end-to-end model and in the ballpark of LibriSpeech results.
- **Multilingual Spoken Words Corpus.** 23 million one-second clips, 340,000 keywords, 115,000 speakers and 50 languages that together cover 5 billion speakers. Kanter compares it to Google Speech Commands (about 105,000 utterances, 35 English words) and says it is the first keyword-spotting dataset for most of these languages.
- **Compute over labour.** Manual labelling was estimated at about $10 million; machine labelling cost under $20,000. A GPU-optimised forced aligner reached 250x real time. All tools are open source.
- **Living datasets.** Kanter wants datasets maintained like a garden, and mentions a planned vision dataset and DataPerf, a data-centric competition.

## Quotes

> "It's sort of like a garden, you know, you got to prune it, you got to water it." — David Kanter

> "If the Industrial Revolution was powered by iron and coal, not the most environmentally stuff, you know, we're really powered by data, right?" — David Kanter
