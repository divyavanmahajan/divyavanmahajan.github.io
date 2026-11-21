---
title: "The Point of LangChain — with Harrison Chase of LangChain"
date: 2023-09-06
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_point_of_langchain_with_harrison_chase_of_langchain"
duration_min: 61
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Harrison Chase"]
description: "Harrison Chase defines LangChain as a framework for context-aware reasoning applications, defending its abstractions as worth the cost while adding LangSmith for debugging and evaluation."
tags: ["langchain", "llm-frameworks", "agents", "retrieval-augmented-generation", "llm-evaluation", "observability"]
source_transcript: "latent-space/episodes/2023/09/2023-09-06-the-point-of-langchain-with-harrison-chase-of-langchain.md"
draft: false
---

## Thesis

Harrison Chase tells Alessio Fanelli and swyx that LangChain is best understood as a framework for building "context-aware reasoning applications", not a thin API wrapper. Because the field moves so fast, he argues, its main value is optionality across models and vector stores plus assembled chains that get people started, while LangSmith addresses the real pain points of prompt and data engineering by making complex chains and agents debuggable.

## Key points

- **Origins.** Chase, who studied stats and CS at Harvard and worked at Kensho and Robust Intelligence, announced LangChain with a tweet on October 24th, before ChatGPT, as a side project to factor out common abstractions he saw at meetups. The first release included NatBot, LLM Math Chain and Self Ask.
- **Components and chains.** He describes two layers: integrations and modules (prompt templates, models, vector stores, around fifteen text splitters, document loaders) and end-to-end chains for SQL and document question answering. He singles out the self-query retriever, which separates metadata filters from the semantic part of a query.
- **Chains vs agents.** Chains are fixed sequences; agents let the LLM choose steps, which handles the long tail of edge cases at the cost of control. Using a SQL agent as an example, he recommends starting with a chain and adding reasoning steps only when edge cases appear.
- **LangSmith.** The product logs every step after setting three environment variables, and supports testing, datasets built from user feedback, and evaluation. Chase finds LLM-based evaluators better than BLEU-style metrics, mainly as a guide to which data points to inspect manually.
- **Market and scale.** He estimates OpenAI holds over 90% of usage, while staying bullish on Anthropic, Google and local models such as Llama 2. The team is 10 to 11 people facing 2,000 to 3,000 open GitHub issues, partly handled by the Dosu bot.
- **Criticism.** Responding to Hacker News posts like "LangChain is pointless", he points to revamped docs, LangSmith, and the new LangChain Expression Language, which makes chains composable with a pipe syntax.

## Quotes

> "We're optimizing for helping people build context-aware reasoning applications as easily as possible." — Harrison Chase

> "if you're relying on OpenAI for every part of that, like, I think that starts to get really expensive." — Harrison Chase
