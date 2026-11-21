---
title: "Productionizing AI at LinkedIn"
date: 2020-10-13
show: practical-ai
episode: 108
url: "https://share.transistor.fm/s/ca958d89"
duration_min: 55
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Suju Rajan"]
description: "LinkedIn's Suju Rajan explains how member and job embeddings power recruiting and argues that production AI needs engineering discipline around monitoring, feature lineage and technical debt."
tags: ["recruiting", "embeddings", "personalization", "ml-technical-debt", "mlops"]
source_transcript: "practical-ai/episodes/2020/10/2020-10-13-productionizing-ai-at-linkedin.md"
draft: false
---

## Thesis

Suju Rajan, Senior Director of Enterprise AI at LinkedIn, describes how LinkedIn uses learned representations of members and jobs to match candidates with recruiters. She argues that AI is still far from being a mature engineering discipline, because its inputs are not deterministic. Teams need monitoring, versioning, rollback and clear contracts with downstream users of their models.

## Key points

- **Background.** Rajan worked on satellite image analysis with scarce labels at UT Austin, spent nine years on personalisation and ads at Yahoo, and headed the Criteo AI Lab. There she learned that latency limits often matter more than model complexity.
- **AI in recruiting.** Recruiters cannot meaningfully talk to 100 people in two weeks, Rajan says, so the aim is to narrow the pool to candidates worth their time. She also describes skill assessments as credentials that travel with members, and links to LinkedIn Learning for reskilling.
- **The economic graph.** LinkedIn normalises industries, companies, skills, titles and education into a shared vocabulary. Rajan cites 700 million plus members and 14 to 20 million job postings on any given day.
- **Embeddings and matching.** Member and job embeddings are combined with near-line and real-time features for search, job recommendations, high-precision "instant jobs" alerts and recruiters' "recommended matches". LinkedIn fine-tunes pre-trained models such as GloVe and BERT on its own data. Rajan says retraining large models from scratch everywhere seems wasteful.
- **Soft skills, not yet.** Asked by Chris Benson about personality, Rajan says LinkedIn cannot yet use those latent traits. She mentions a video introduction feature, built with Microsoft technology, that gives candidates feedback.
- **Technical debt.** Rajan lists feature lineage, feature bloat, rollback and drift monitoring as neglected areas. She points to TensorFlow Extended (TFX), Google's paper on hidden technical debt in machine learning and its ML test score rubric. She wants model maintenance taught in schools.

## Quotes

> "a team deploys a feature and then there are 20 other teams with unbeknownst to you are starting to use this feature." — Suju Rajan

> "Is it a house of cards, which is going to collapse the first time something goes on?" — Suju Rajan
