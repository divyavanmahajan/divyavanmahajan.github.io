---
title: "Towards high-quality (maybe synthetic) datasets"
date: 2024-10-09
show: practical-ai
episode: 290
url: "https://share.transistor.fm/s/af180c44"
duration_min: 57
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Ben Burtenshaw", "David Berenstein"]
description: "Hugging Face's Argilla team argues that data quality comes from domain experts and engineers collaborating, with LLM-generated data and AI feedback checked by humans."
tags: ["data-quality", "synthetic-data", "data-annotation", "ai-feedback", "open-source"]
source_transcript: "practical-ai/episodes/2024/10/2024-10-09-towards-high-quality-maybe-synthetic-datasets.md"
draft: false
---

## Thesis

Ben Burtenshaw and David Berenstein, who build Argilla and Distilabel at Hugging Face, argue that good AI systems start with a clearly modelled problem and a small benchmark that domain experts and engineers build together. LLMs can now generate and judge data at scale, but they say that output still needs human review before it is trusted for fine-tuning or evaluation.

## Key points

- **Start with a baseline.** Berenstein says teams jump to fine-tuning or elaborate RAG pipelines without any benchmark. Burtenshaw suggests writing a short list of expected questions, pairing them with documents, and checking whether experts and a model like ChatGPT can answer them before building anything.
- **Prefer smaller models where they work.** Berenstein says smaller models are cheaper, can be self-hosted for privacy, and are easier to fine-tune. Fine-tuning a retriever on consumer hardware is often more practical than fine-tuning the LLM.
- **Combined pipelines in production.** Berenstein describes a German startup, Alaminds, that built an email system for a health insurer. It classifies each incoming email, picks a prompt template, drafts a reply, then regenerates it to fix German phrasing.
- **Argilla's two sides.** Burtenshaw explains that engineers define feedback tasks (text, label, rating and ranking questions) in a Python SDK. Domain experts label in a UI with keyboard shortcuts, semantic search, bulk labelling and filtering by model uncertainty.
- **AI feedback and hallucination.** Burtenshaw describes using LLMs to expand 100 documents to 10,000 and then filter or label them. He calls hallucination the main issue, managed by having larger models evaluate the output and sending results to human reviewers.
- **Distilabel in practice.** Berenstein says Distilabel was inspired by Alpaca, Dolly and UltraFeedback. Re-judging Intel's Orca DPO preference pairs with it halved the dataset and produced a better model. Datasets such as OpenHermes were also built with it.

## Quotes

> "The task of identifying hallucinations is not the same as generating a document." — Ben Burtenshaw

> "we were actually able to scale down the dataset by 50%, leading to less training time and also leading to a higher performing model." — David Berenstein
