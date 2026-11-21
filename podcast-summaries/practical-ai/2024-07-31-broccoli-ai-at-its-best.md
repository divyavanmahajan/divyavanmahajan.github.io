---
title: "Broccoli AI at its best 🥦"
date: 2024-07-31
show: practical-ai
episode: 280
url: "https://share.transistor.fm/s/732541e8"
duration_min: 43
hosts: ["Daniel Whitenack"]
guests: ["Bengsoon Chuah"]
description: "A lone energy-sector data scientist shows how a modest on-prem NLP classifier, trained on user-labelled safety reports and improved through active learning, delivers real business value."
tags: ["active-learning", "nlp", "on-prem", "mlops", "energy"]
source_transcript: "practical-ai/episodes/2024/07/2024-07-31-broccoli-ai-at-its-best.md"
draft: false
---

## Thesis

Bengsoon Chuah, a data scientist in the energy sector in Asia, argues that the most valuable AI in traditional companies is often "Broccoli AI": unglamorous models that solve a clear business problem. Working alone, without cloud services, he built an on-prem NLP pipeline that classifies years of unstructured safety reports, using the users themselves as labellers. Host Daniel Whitenack uses the story to show what practical, right-sized MLOps looks like.

## Key points

- **Unstructured data as low-hanging fruit.** Chuah says the company had hundreds of thousands of free-text comments, many of them daily safety reports stored in SharePoint, that nobody could analyse at scale; the comments often did not match the structured categories.
- **Users as labellers.** With sensitive data and code-switching between English and local languages, outsourcing labels was not an option. A supportive sponsor had their staff label in Argilla; everyone first labelled the same roughly 500 rows so the most contentious cases could be discussed, before labelling at scale.
- **A small model is enough.** About 1,800 to 2,000 labels were used to fine-tune a sentence-transformer model with SetFit. It reached only around 60-70% F1, but sponsors accepted it because a daily email of classified reports already removed the SharePoint filtering work.
- **Active learning loop.** Each email links users to Argilla to correct predictions; close to 4,000 labelled examples have accumulated, and Chuah retrains every couple of months rather than automating drift monitoring.
- **Minimal on-prem stack.** He moved from Windows Server to a Linux VM and relies on MLflow as model registry, Prefect for orchestration, Docker containers, and DuckDB as an embedded layer to clean SharePoint data.

## Quotes

> "I noticed no matter how tightly knit your labelers or your team are, there will always be contention." — Bengsoon Chuah

> "My customers are happy. I'm happy. And I'm not going to change what's good." — Bengsoon Chuah
