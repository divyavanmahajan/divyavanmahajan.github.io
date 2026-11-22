---
title: "Staving off disaster through AI safety research"
date: 2019-03-04
show: practical-ai
episode: 33
url: "https://share.transistor.fm/s/1fb58384"
duration_min: 51
hosts: ["Chris Benson"]
guests: ["El Mahdi El Mhamdi"]
description: "EPFL researcher El Mahdi El Mhamdi argues that poisoned recommender systems are today's real AI safety problem, and that robust alternatives to gradient averaging can reduce the damage."
tags: ["ai-safety", "data-poisoning", "recommender-systems", "distributed-learning", "robustness"]
source_transcript: "practical-ai/episodes/2019/03/2019-03-04-staving-off-disaster-through-ai-safety-research.md"
draft: false
---

## Thesis

El Mahdi El Mhamdi, a PhD student at EPFL, argues that AI safety is not mainly about future killer robots but about recommender systems that small, hyperactive groups can poison today. Because gradient descent averages gradients, a motivated minority can skew a model; he proposes median-like, Byzantine-resilient aggregation, while noting hard theoretical limits.

## Key points

- **From physics to fault tolerance.** El Mhamdi trained as a physicist, co-founded the Moroccan news platform Mamfakinch during the 2011 events, and ran a French-language tutoring project at EPFL. His PhD links robustness in biological systems and AI safety through fault tolerance.
- **Recommender harms.** He describes parents searching for vaccine advice being led to anti-vaccine videos, and cites the World Health Organization listing vaccine hesitancy as a 2019 threat. He also recounts a "crisis actors" video about Parkland survivors that YouTube featured and later apologised for.
- **Averaging is not robust.** Using GDP per capita versus median income as an analogy, he argues machine learning should stop averaging user gradients. PCA-style outlier detection scales poorly, so his group looks for a median of high-dimensional vectors.
- **Research into tools.** He cites a NeurIPS 2017 paper, two ICML 2018 follow-ups and a modified TensorFlow (AggregaThor) that replaces averaging with robust aggregation and can communicate over UDP.
- **Limits and next steps.** He says computer science began with an impossibility result (Turing's halting problem): if enough participants are malicious, no aggregation rule works. His follow-up explores a PageRank-style approach that weights expert sources such as medical schools.
- **Advice for practitioners.** Read the poisoning literature, try the GitHub code, and try poisoning a recommender dataset yourself. He quotes Stuart Russell's point that safety is part of what defines a bridge.

## Quotes

> "There are killer robots already about us. They're very dumb and primitive and doing very basic machine learning, and they are called recommender systems." — El Mahdi El Mhamdi

> "So not falling apart after three hours of deployment is part of the definition of a bridge." — El Mahdi El Mhamdi
