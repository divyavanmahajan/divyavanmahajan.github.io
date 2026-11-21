---
title: "Metrics Driven Development"
date: 2024-08-29
show: practical-ai
episode: 284
url: "https://share.transistor.fm/s/4873f35c"
duration_min: 42
hosts: ["Daniel Whitenack"]
guests: ["Shahul Es"]
description: "Ragas co-founder Shahul Es argues that LLM applications need their own metrics-driven evaluation, separate from model benchmarks, using tailored metrics and synthetic test sets grounded in real data."
tags: ["llm-evaluation", "ragas", "rag", "synthetic-data", "metrics"]
source_transcript: "practical-ai/episodes/2024/08/2024-08-29-metrics-driven-development.md"
draft: false
---

## Thesis

Shahul Es, co-founder of the open source evaluation library Ragas, argues that teams building on top of LLMs cannot rely on model benchmarks; they need to measure their own application. His "metrics-driven development" borrows from test-driven development: quantify the system before and after each change so you can see which queries a new prompt, retriever or tool affects. Daniel Whitenack probes how software engineers should adapt.

## Key points

- **Applications, not models.** Shahul describes a spectrum from LLM builders, who can only test general capabilities (and whose benchmarks often leak into training data), to application builders, who mostly come from software engineering and need to know whether the system does their task.
- **Testing is discrete, evaluation is continuous.** Unit tests expect one exact output; an LLM can answer "two" in several correct forms, and the system is non-deterministic, so engineers should think in scores rather than pass/fail.
- **Choosing metrics.** Ragas offers metrics such as faithfulness, context recall, noise sensitivity and answer relevancy. Shahul says most are LLM-based because they correlate better with human judgment, while non-LLM metrics are more reproducible. A planned feature aligns LLM judges with a team's own strictness, since a fintech team may judge hallucination more harshly than others.
- **Test set size and coverage.** Teams typically use 100 to 500 samples, but Shahul stresses coverage of the real query distribution over raw numbers.
- **Synthetic test data.** Because production data is messy, especially in B2C apps with trolls, Ragas generates test sets grounded in internal documents and, in an upcoming feature, seeded from production data. Developers then spend minutes pruning bad samples in a spreadsheet instead of days annotating.
- **What comes next.** Shahul expects tool use to mature the way RAG did since early 2023, and wants Ragas to become an open standard for evaluating LLM applications.

## Quotes

> "Traditional software testing is mostly a discrete space where you have an input, you have an expected output" — Shahul Es

> "the number of samples people generally use to evaluate is around 100 to 500" — Shahul Es
