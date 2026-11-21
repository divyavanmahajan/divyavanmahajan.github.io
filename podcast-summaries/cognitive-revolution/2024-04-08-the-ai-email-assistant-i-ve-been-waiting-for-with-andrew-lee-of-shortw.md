---
title: "The AI Email Assistant I've Been Waiting for, with Andrew Lee of Shortwave"
date: 2024-04-08
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/the-ai-email-assistant-ive-been-waiting-for-with-andrew-lee-of-shortwave/"
youtube: "https://www.youtube.com/watch?v=BeoMJB3gpj8"
duration_min: 86
hosts: ["Nathan Labenz"]
guests: ["Andrew Lee"]
description: "Shortwave founder Andrew Lee explains how a carefully engineered RAG pipeline, rather than agent planning, makes a working AI email assistant, and why losing money now is deliberate."
tags: ["rag", "email", "ai-assistants", "vector-databases", "fine-tuning"]
source_transcript: "cognitive-revolution/episodes/2024/04/2024-04-08-the-ai-email-assistant-i-ve-been-waiting-for-with-andrew-lee-of-shortw.md"
draft: false
---

## Thesis

Andrew Lee, founder of Shortwave (and earlier Firebase), argues that a useful AI email assistant comes from engineering, not research: do a lot of retrieval work to assemble one prompt with everything needed, then make a single strong model call. He frames the inbox as a knowledge base rather than a to-do pile, and says launching just before the economics work is the right startup bet.

## Key points

- **One prompt, not a plan.** Lee says multi-step planning propagated errors with the models available, so Shortwave instead runs tool selection, query rewriting, parallel feature extraction (labels, keywords, time ranges) and cross-encoder reranking, about 10 LLM calls per question, before a final GPT-4 call.
- **Storage-driven RAG choices.** Every user's mail is imported server-side, indexed in Elastic for full-text search and embedded with the open-source Instructor XL model into Pinecone. Lee picked a medium-sized vector to keep storage cheap and over-fetches, letting the cross-encoder sort out precision; Pinecone's namespacing beat pgvector for millions of emails per user.
- **Six models in production.** GPT-4, GPT-3.5 and a fine-tuned GPT-3.5 from OpenAI, plus self-hosted Instructor XL, a cross-encoder trained on Microsoft data, and Mistral for instant summaries. The fine-tuned GPT-3.5 powers autocomplete, trained on the team's own emails with sections removed, and Lee says it generalised well.
- **Speed tactics.** Parallelise, pipeline (rerank as results stream in), use faster models and better GPUs, keep outputs short, and mostly skip chain of thought because it delays the answer. Labenz describes how chain-of-thought training data improved fine-tuned scriptwriting at Waymark.
- **Losing money on purpose.** Lee compares Shortwave to early YouTube: costs are falling fast, so subsidising heavy processing with capital now builds a battle-tested product before rivals arrive.
- **Human in control, Google constrained.** The AI cannot send, delete or archive anything without a click. Lee says Gmail's main internal goal is keeping users signed in, which, with legacy and scale, slows innovation there.

## Quotes

> "the right time to launch a feature or launch a product is right before it seems possible." — Andrew Lee

> "If we're doing a great job, the email that you write should be no different whether we help you write it or not." — Andrew Lee
