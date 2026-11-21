---
title: "Optimizing for efficiency with IBM’s Granite"
date: 2025-03-14
show: practical-ai
episode: 306
url: "https://share.transistor.fm/s/fb39a0d8"
duration_min: 44
hosts: ["Chris Benson"]
guests: ["Kate Soule"]
description: "IBM's Granite bets on small, openly licensed, efficient models, arguing that the field should compete on efficiency frontiers rather than tiny leaderboard gains."
tags: ["small-language-models", "open-source-ai", "mixture-of-experts", "guardrails", "edge-ai", "enterprise-ai"]
source_transcript: "practical-ai/episodes/2025/03/2025-03-14-optimizing-for-efficiency-with-ibm-s-granite.md"
draft: false
---

## Thesis

Kate Soule, director of technical product management for Granite at IBM, argues that most enterprise AI work can run on small, efficient, openly licensed models. Granite aims to cover the cost-performance curve with small models, mixture-of-experts architectures, selective reasoning and companion models. She wants the field to judge models by their efficiency frontier, not by marginal benchmark gains.

## Key points

- **Open and simple licensing.** Soule says IBM released Granite under Apache 2.0, citing its Red Hat open-source heritage, so that anyone who customizes the models keeps their IP with no restrictions.
- **Data first, then efficiency.** Early on, IBM copied proven architectures and innovated on ethically sourced training data. The focus later moved to efficiency, in line with a field-wide shift from many parameters and little data to the reverse, which lowers inference costs.
- **Sized for compute tiers.** Granite includes 1B and 3B mixture-of-experts models for CPUs and edge devices, plus dense models for a single GPU. Soule believes about 80% of use cases can be handled by models of 8 billion parameters or fewer, and says Granite 2B beats Llama 2 70B on several benchmarks.
- **Selective reasoning.** Granite 3.2, released in February, lets users switch chain-of-thought reasoning on or off. Soule sees value both in answer quality and in explainability, and cites Claude 3.7 as taking a similar approach.
- **Companion models.** The family also includes a vision model for document and chart understanding, embedding models for RAG, and Granite Guardian guardrails. Guardian detects hallucinations in agent tool calls and can sit next to any model, including OpenAI's. Time series models of one to 2 million parameters ranked first on Salesforce's GIFT leaderboard and have over 10 million Hugging Face downloads.
- **Agents and the edge.** IBM is co-designing models with its BeeAI agent framework to protect sensitive instructions and data, and IBM Consulting's 60,000 consultants use Granite-based assistants. For the edge, Soule urges breaking work into small tasks rather than writing huge prompts.

## Quotes

> "models are measured by, like, how efficient their efficient frontier is, not by, like, you know, did they get to 0.01 higher on a metric or benchmark?" — Kate Soule

> "which I like to call it like the YOLO method where I'm gonna give 10 pages of instructions all at once" — Kate Soule
