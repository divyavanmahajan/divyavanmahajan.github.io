---
title: "We've all done RAG, now what?"
date: 2025-09-29
show: practical-ai
episode: 330
url: "https://share.transistor.fm/s/e13d399b"
duration_min: 44
hosts: ["Daniel Whitenack"]
guests: ["Rajiv Shah"]
description: "Rajiv Shah argues that RAG demos are easy but production retrieval is hard, and that evaluation, error analysis and knowing when not to use an LLM still matter."
tags: ["rag", "evaluation", "data-science", "enterprise-ai", "agents"]
source_transcript: "practical-ai/episodes/2025/09/2025-09-29-we-ve-all-done-rag-now-what.md"
draft: false
---

## Thesis

Rajiv Shah, chief evangelist at Contextual AI, tells Daniel Whitenack that retrieval-augmented generation is now standard in enterprises, but getting from a quick demo to production quality is where teams struggle. He argues most AI pilot failures are about organisational change rather than the technology, and that data science skills such as evaluation and picking non-LLM tools remain essential.

## Key points

- **RAG as part of a system.** Shah explains that ChatGPT is a system, not one model: retrieval, memory and conversation summarisation together make up what he calls context engineering. Models are trained on about 15 trillion tokens, versus roughly a billion a person might read in ten years.
- **Why pilots fail.** On the MIT "95% of pilots fail" figure, Shah calls it partly a hype number and recalls the older claim that 80% of data science projects fail. Adoption depends on workflow fit, training and leadership support.
- **The production gap.** A demo works on 100 documents; scaling to 100,000 or 1,000,000 brings short two-word queries, query reformulation, rerankers and latency trade-offs, plus a confusing choice of chunking strategies and "flavors of rag".
- **Reasoning and agents.** Shah is optimistic that reasoning models making tool calls and re-querying will improve retrieval quality, at the cost of latency. He expects agents to need less "babysitting" as training data improves.
- **Data science is not shrinking.** Against Whitenack's theory that domain experts with vibe-coding tools squeeze out data scientists, Shah says evaluation and error analysis are core data science skills that software developers often have to be taught.
- **Not everything needs an LLM.** Shah worries newcomers miss optimisation and time-series methods; Whitenack suggests exposing tools like Facebook's Prophet via an MCP server so an LLM can point users to them.

## Quotes

> "it's really nothing about AI. It's really about organizational change and introducing technology into companies." — Rajiv Shah

> "We're using generative AI as the hammer for solving every type of problem like that." — Rajiv Shah
