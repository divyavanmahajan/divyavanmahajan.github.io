---
title: "The \"Normsky\" architecture for AI coding agents — with Beyang Liu + Steve Yegge of SourceGraph"
date: 2023-12-14
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_normsky_architecture_for_ai_coding_agents_with_beyang_liu_steve_yegge_of_sourcegraph"
duration_min: 80
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Beyang Liu", "Steve Yegge"]
description: "Sourcegraph's Beyang Liu and Steve Yegge argue coding assistants win on context quality, combining compilers and code graphs with LLMs rather than relying on LLM-driven agents."
tags: ["coding-assistants", "retrieval-augmented-generation", "code-intelligence", "ai-agents", "developer-tools"]
source_transcript: "latent-space/episodes/2023/12/2023-12-14-the-normsky-architecture-for-ai-coding-agents-with-beyang-liu-steve-ye.md"
draft: false
---

## Thesis

Beyang Liu, Sourcegraph co-founder, and Steve Yegge, who built Google's Grok code-indexing system, tell Alessio Fanelli and swyx that the differentiator for a coding assistant such as Cody is the context it retrieves, not the model. Liu calls their approach "Normsky": formal, Chomsky-style tools such as parsers, compilers and reference graphs combined with data-driven, Norvig-style LLMs. Both are sceptical that agents orchestrated purely by a transformer can yet deliver reliable multi-step automation.

## Key points

- **Context over model.** Liu says Cody uses the open StarCoder model for inline completion, served on Fireworks, and with Sourcegraph's context matches Copilot's completion acceptance rate. Claude and GPT-4 still handle chat and commands, and models are pluggable.
- **RAG as recommender system.** Yegge describes Cody as recommending code to the LLM and expects many specialised models, as at YouTube or Netflix. Liu frames retrieval as high-recall search followed by re-ranking, and calls parser-based pre-processing of signatures, bodies and docstrings "table stakes".
- **Bearish on agents.** Liu argues coding is harder than chess and that the best systems will use search, with an LLM as a proposal or heuristic function. Copilot's agent-style context fetching, he says, is slow, non-deterministic and yields weaker context than code search plus graph crawling.
- **BFG graph.** A new SCIP-based "Blazing Fast Graph" indexes code without build-system integration and pulls definitions into context to cut type errors in completions. Sourcegraph stores graph data in Postgres after an early graph database crashed.
- **Beyond lines of code.** Liu thinks the real problem is managing growing codebase complexity, and he sees AI reading git history to link engineers' work to business metrics. Yegge says some prospects want productivity monitoring to fire developers, which Sourcegraph declined.
- **Open questions.** Liu wants reliable first-try single-function generation and better open and synthetic code datasets beyond the Stack and the Pile.

## Quotes

> "I'll believe in agents when somebody shows me one that works." — Steve Yegge

> "the real problem of modern software development, I think, is not how quickly can you write more lines of code." — Beyang Liu
