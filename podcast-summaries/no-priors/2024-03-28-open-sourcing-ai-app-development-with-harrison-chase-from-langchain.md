---
title: "Open sourcing AI app development with Harrison Chase from LangChain"
date: 2024-03-28
show: no-priors
episode: 57
url: "https://www.youtube.com/watch?v=rsa1_d8Z0Zc"
youtube: "https://www.youtube.com/watch?v=rsa1_d8Z0Zc"
duration_min: 28
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Harrison Chase"]
description: "Harrison Chase argues that working LLM agents today are controlled state machines, not autonomous loops, and that few-shot example flywheels and memory matter more than fine-tuning."
tags: ["agents", "llm-applications", "open-source", "memory", "few-shot-prompting"]
source_transcript: "no-priors/episodes/2024/03/2024-03-28-open-sourcing-ai-app-development-with-harrison-chase-from-langchain.md"
draft: false
---

## Thesis

Harrison Chase, CEO and co-founder of LangChain, argues that the agents reaching production sit between fixed chains and fully autonomous loops: controlled state machines in which builders encode their domain knowledge. He sees weak LLM planning, immature UX and testing as the main gaps. In his view, collecting few-shot examples from production is a faster and cheaper path to continual learning than fine-tuning.

## Key points

- **From side project to two products.** Chase started LangChain in autumn 2022, about a month before ChatGPT. The company now has the open-source packages, with some 700 integrations, and LangSmith for testing, evaluation and monitoring. He says the high-level patterns change fastest, which led to LangChain Expression Language and LangGraph for cyclic, non-DAG agent graphs.
- **Two kinds of memory.** Chase separates procedural, system-level memory (how to use tools, best handled with few-shot examples) from personalisation memory. He contrasts ChatGPT's explicit remember/delete functions with a passive background process that extracts insights, and calls the field underwhelming so far.
- **Where agents work.** Chase names customer support (Sierra, Klarna) and coding, citing Cognition's UX, as the leading use cases. Coding benefits from the feedback of running the code.
- **Switching models is hard.** Chase says prompts still have to differ per model, though function calling now offered by Mistral and Google makes them more portable. Switching mostly happens when moving from GPT-4 prototypes to scale, for cost and latency.
- **Long context does not kill RAG.** Chase cites a benchmark by teammate Lance Martin: needle-in-a-haystack scores drop as the number of needles rises and when models must reason rather than retrieve. He says fine-tuning is rare outside critical scale because data curation and evaluation are hard and prompts are easier to iterate on.
- **Open models lag.** Chase's "hot take" is that open-source models still lack the reasoning of Claude 3 or GPT-4 for LangChain-style apps. He points to DSPy as a related optimisation approach.

## Quotes

> "I still don't think we see super compelling reasoning abilities in the open source models" — Harrison Chase

> "if I was starting a company right now I'd probably start something at the application layer and it would probably be something that really takes advantage of like long-term memory" — Harrison Chase
