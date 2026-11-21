---
title: >-
  ⚡️ GPT5-Codex-Max: Training Agents with Personality, Tools & Trust — Brian
  Fioca + Bill Chen, OpenAI
description: >-
  OpenAI's Brian Fioca and Bill Chen explain how Codex models are trained for
  trust through coding behaviours, harness-specific tools and evals, and why the
  abstraction is moving to agents.
pubDate: '2025-12-26'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/gpt5-codex-max_training_agents_with_personality_tools_trust_brian_fioca_bill_chen_openai
durationMin: 28
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Brian Fioca
  - Bill Chen
tags:
  - coding-agents
  - codex
  - evals
  - model-training
  - openai
draft: false
---
## Thesis

Brian Fioca and Bill Chen of OpenAI argue that developers only hand real work to coding agents they trust, and that trust is trained in: through behaviours such as communication, planning and checking work, through familiarity with specific tools, and through evals grounded in real use. They see the abstraction moving from the model to the packaged agent, which other products can embed.

## Key points

- **Codex Max.** The guests say GPT-5-Codex-Max can run for 24 hours or more, manages and compacts its own context window, and reaches the same answers faster than its predecessor; it can hand context to sub-agents working in parallel.
- **Personality as behaviour.** Fioca says the GPT-5 training team defined a pair-programmer personality as measurable behaviours: keeping the user informed, planning and gathering context before diving in, and checking its work. GPT-5.1 adds steerable preambles before tool calls; the Codex model relies on the reasoning summariser instead.
- **Tools are habits.** Codex is opinionated about its harness and terminal tools. Partners found that naming custom tools like terminal tools lifted tool-call performance, and a ripgrep tool called "rg" works better than one called "grep". The mainline GPT-5.1 is more general and more steerable to other tools.
- **Agents as building blocks.** Products such as Zed and VS Code can embed the whole Codex agent instead of re-tuning a harness for every model release, and software could spin up Codex to write its own customer integrations.
- **Evals and trust.** The guests describe applied evals built with customers, LLM-as-judge over full trajectories and a "job interview" style multi-turn eval idea. One guest says he has not written code by hand in months; a host asks for a batch API for multi-turn evals.
- **2026 hopes.** More computer use for apps without APIs, and coding agents used for non-coding automation such as organising files.

## Quotes

> "So it's really important to build trust with developers for like how a model works" — Brian Fioca

> "So if, if you call it grep, it actually does a little bit worse. But if you call it RG, it actually does really well." — OpenAI guest (Fioca or Chen)
