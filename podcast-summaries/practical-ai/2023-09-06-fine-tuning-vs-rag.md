---
title: "Fine-tuning vs RAG"
date: 2023-09-06
show: practical-ai
episode: 238
url: "https://share.transistor.fm/s/3df4a8e5"
duration_min: 58
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Demetrios Brinkmann"]
description: "Demetrios Brinkmann argues that most teams reaching for LLM fine-tuning really need retrieval augmented generation, keeping fine-tuning for new behaviours and structured outputs backed by costly curated data."
tags: ["fine-tuning", "rag", "llm-evaluation", "mlops", "enterprise-ai"]
source_transcript: "practical-ai/episodes/2023/09/2023-09-06-fine-tuning-vs-rag.md"
draft: false
---

## Thesis

Demetrios Brinkmann of the MLOps Community argues that fine-tuning an LLM is widely misunderstood: it does not teach a model your knowledge or voice, and retrieval augmented generation plus few-shot prompting usually does that job more cheaply. Daniel Whitenack agrees, adding that fine-tuning on raw company documents yields a better autocomplete, not a better question-answering model. Both stress keeping LLM systems simple and evaluating them as whole systems rather than trusting leaderboards.

## Key points

- **When to fine-tune.** Citing Shahul S. (creator of Ragas), Brinkmann says fine-tuning fits teaching a model a new function or output format, like OpenAI's functions. He doubts Code Llama can overcome a base model that saw little code.
- **Data is the hard part.** Whitenack says useful fine-tuning needs thousands of instruction-style question and answer examples. Brinkmann links that difficulty to Mosaic selling for a billion.
- **Benchmarks and evaluation.** Brinkmann calls public benchmarks meaningless for specific use cases; Whitenack notes ChatGPT is a product, not a model, so it is a poor baseline. The community is running a new survey on evaluation.
- **Keep it simple.** Whitenack often writes LLM chains in plain Python instead of LangChain or LlamaIndex for easier debugging. Brinkmann says many startups with real revenue use no vector database.
- **Survey findings.** The MLOps Community LLM survey found 61% of respondents using LLMs at work; companies with 1-50 or over 1,000 employees tended not to use OpenAI, unlike mid-sized firms. Brinkmann is sceptical of OpenAI Enterprise's data promises.
- **RAG course and hackathon.** A new course built by Raul covers data pipelines, vector ingestion and semantic search. It grew from a San Francisco hackathon where teams built QA bots on the 17,000-member community Slack and were scored on 100 questions.

## Quotes

> "in the best case scenario, what you're creating is a better autocomplete model to autocomplete your type of documents, right?" — Daniel Whitenack

> "Let's just remember why ML was so hard before LLMs. Like collecting data is not so easy." — Demetrios Brinkmann
