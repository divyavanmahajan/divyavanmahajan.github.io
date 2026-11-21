---
title: "RAG continues to rise"
date: 2024-04-10
show: practical-ai
episode: 264
url: "https://share.transistor.fm/s/e70550d7"
duration_min: 48
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Demetrios Brinkmann"]
description: "Demetrios Brinkmann shares MLOps Community survey results showing RAG has overtaken fine-tuning, while evaluation remains manual, slow and lacking agreed best practice."
tags: ["rag", "llm-evaluation", "fine-tuning", "mlops", "vector-databases"]
source_transcript: "practical-ai/episodes/2024/04/2024-04-10-rag-continues-to-rise.md"
draft: false
---

## Thesis

Demetrios Brinkmann of the MLOps Community argues that RAG has become the default way teams build with LLMs, and that fine-tuning has lost ground. He says evaluation is the weak spot: most teams hand-build test sets with no shared best practice. Daniel Whitenack and Chris Benson add enterprise experience on multi-model strategies, keeping RAG data in sync, and access control.

## Key points

- **Survey numbers.** Brinkmann's evaluation survey had 322 respondents. 45% fund AI from existing budget and 43% from new budget. 31% call themselves intermediate with LLMs and RAG, and only 6% say they are at the frontier.
- **Fine-tuning is for form.** Brinkmann says fine-tuning mainly makes sense for output format, such as function calling. Running a small, distilled model on your own infrastructure is "hard mode" compared with a GPT-4 API call. Whitenack says enterprises often drop their urge to fine-tune once they solve use cases without it.
- **Multi-model future.** Whitenack cites an Andreessen Horowitz enterprise survey showing companies using several model providers and open models. Brinkmann adds that the OpenAI leadership drama made engineers wary of a single point of failure.
- **Evaluation is manual.** In the survey, 42% evaluate against data sets they created themselves, and 72% of ground-truth labels were made by hand. Whitenack notes that 15-second prompt chains make iteration slow. Benson blames fragmented, vendor-specific communities for the lack of guidance.
- **RAG in production.** Brinkmann's example is an HR chatbot that quotes an outdated vacation policy from stale Slack data. Whitenack says many vector databases lack update logic and role-based access control, so teams have to build that themselves.
- **Beyond transformers.** Brinkmann wonders whether today's tooling is a band-aid over transformer limits. Benson points to neuromorphic computing, with Intel as a possible leader.

## Quotes

> "That's like hard mode. You're playing on hard mode and you contrast that with just a GPT-4 call." — Demetrios Brinkmann

> "is everything that we're doing now in AI a band-aid? Because Transformers just aren't the right tool for the job." — Demetrios Brinkmann
