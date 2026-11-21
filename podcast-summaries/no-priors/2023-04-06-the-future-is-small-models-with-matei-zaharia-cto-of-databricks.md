---
title: "The Future is Small Models, with Matei Zaharia, CTO of Databricks"
date: 2023-04-06
show: no-priors
episode: 11
url: "https://www.youtube.com/watch?v=sCHGWRlydJ8"
youtube: "https://www.youtube.com/watch?v=sCHGWRlydJ8"
duration_min: 39
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Matei Zaharia"]
description: "Matei Zaharia argues that Dolly shows instruction-following is cheap to reproduce, that LLMs are commoditising, and that enterprise value will come from data, retrieval and systems around models."
tags: ["small-models", "open-source", "instruction-tuning", "enterprise-ai", "retrieval"]
source_transcript: "no-priors/episodes/2023/04/2023-04-06-the-future-is-small-models-with-matei-zaharia-cto-of-databricks.md"
draft: false
---

## Thesis

Matei Zaharia, co-founder of Databricks and a Stanford professor, argues that Databricks' Dolly shows ChatGPT-style instruction following does not require giant models. He thinks the core technology is commoditising quickly and that scale has diminishing returns. In his view, the real gains will come from good data, retrieval and systems built around models.

## Key points

- **Databricks today.** Zaharia says the company grew out of seven UC Berkeley researchers and Apache Spark, his PhD thesis. It now has about 6,000 employees and passed $1 billion in annual revenue. He says almost a thousand customers were already using language models before ChatGPT.
- **How Dolly worked.** Dolly copied Stanford's Alpaca recipe, training on generated conversations, but started from an open-source model of 6 billion parameters trained on less than a terabyte of text. Zaharia says that is about 50 times less data than GPT-3. He reports that it writes fluently but is weak on facts: asked who wrote Snow Crash, it named Neil Gaiman instead of Neal Stephenson.
- **Limits of scale.** Zaharia argues that most capabilities scale sublinearly. He says extra parameters mainly add memorisation, which a database or search index handles more efficiently. He points out that token-by-token generation is poor for planning and suggests scratchpads, backtracking and multi-call frameworks instead.
- **What enterprises need.** Zaharia lists four needs: a reliable data platform that handles unstructured data, MLOps for experiments and A/B tests, connections to operational systems, and efficient training and serving infrastructure. He uses the example of a bank chatbot that should know your latest transactions.
- **Where value shows up.** Zaharia says traditional ML pays off in supply chains and fraud detection, and LLMs in support, search and internal Q&A. Databricks answers engineers' questions using Slack history plus its documentation. He sees unique datasets as the most defensible moat.
- **Founder lessons.** Zaharia advises PhD founders to stop focusing only on prototypes and to avoid building everything from scratch. Databricks itself dropped custom deployment tooling in favour of Kubernetes.

## Quotes

> "I think the right solution for that is look things up in a database, like do retrieval, right?" — Matei Zaharia

> "every software engineer will need to become an ML engineer and a data engineer also as they build the application" — Matei Zaharia
