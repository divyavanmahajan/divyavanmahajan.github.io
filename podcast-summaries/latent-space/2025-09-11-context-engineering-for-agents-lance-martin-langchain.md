---
title: "Context Engineering for Agents - Lance Martin, LangChain"
date: 2025-09-11
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/context_engineering_for_agents_-_lance_martin_langchain"
duration_min: 58
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Lance Martin"]
description: "Lance Martin maps context engineering for agents: offloading, retrieval, compaction, multi-agent isolation and caching, and argues builders must strip out structure as models improve."
tags: ["context-engineering", "agents", "retrieval", "multi-agent", "deep-research"]
source_transcript: "latent-space/episodes/2025/09/2025-09-11-context-engineering-for-agents-lance-martin-langchain.md"
draft: false
---

## Thesis

Lance Martin of LangChain argues that context engineering, feeding a model just the right context for the next step, is the core difficulty of building agents, because tool calls flood the context window with tokens. He groups the main techniques as offloading, retrieval, reducing context, context isolation and caching. Drawing on his own Open Deep Research project, he adds a bitter-lesson warning: structure that helps today will bottleneck you once models get better.

## Key points

- **Why the term caught on.** Martin calls prompt engineering a subset of context engineering. With agents, context arrives from tool calls as well as from the user: Manus cites about 50 tool calls per task, and his own naive deep researcher used 500,000 tokens, or one to two dollars per run.
- **Offload and summarise.** Following Manus, he writes raw tool output to a file system or agent state and passes back only a summary written for high recall. He notes that Cognition uses a fine-tuned model for this step, and that Manus keeps the raw data so compaction loses nothing.
- **Multi-agent depends on the task.** He reconciles Cognition's "don't build multi-agent" with Anthropic's research system: parallel sub-agents suit read-only context gathering, followed by a single write step, but they can make conflicting decisions in coding.
- **Simple retrieval often wins.** Windsurf uses a multi-step RAG pipeline, while Claude Code and Cline rely on grep-style agentic search. In Martin's test on 20 LangGraph questions across about three million tokens of docs, an llms.txt file with good LLM-written descriptions beat vector search and context stuffing.
- **Memory, caching and context rot.** Martin says Claude Code's CLAUDE.md files are the simplest form of memory and that memory works well alongside human-in-the-loop corrections. Caching cuts cost and latency but does not fix long-context degradation.
- **The bitter lesson.** Citing a talk by a former OpenAI researcher, Martin describes rebuilding Open Deep Research twice to remove workflow assumptions from 2024. He prefers low-level orchestration such as LangGraph or Shopify's Roast over opaque agent abstractions.

## Quotes

> "prompt engineering is kind of a subset of context engineering." — Lance Martin

> "you're building LM applications on top of models that are improving exponentially." — Lance Martin
