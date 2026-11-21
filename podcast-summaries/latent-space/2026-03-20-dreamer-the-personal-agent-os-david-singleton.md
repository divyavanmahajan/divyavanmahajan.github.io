---
title: "Dreamer: the Personal Agent OS — David Singleton"
date: 2026-03-20
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/dreamer_the_personal_agent_os_david_singleton"
duration_min: 64
hosts: ["Alessio Fanelli", "swyx"]
guests: ["David Singleton"]
description: "Former Stripe CTO David Singleton presents Dreamer, a consumer platform where a personal Sidekick agent acts as an OS kernel for discovering, building and safely combining community-built agents and tools."
tags: ["personal-agents", "consumer-ai", "agent-platforms", "developer-ecosystem", "small-teams"]
source_transcript: "latent-space/episodes/2026/03/2026-03-20-dreamer-the-personal-agent-os-david-singleton.md"
draft: false
---

## Thesis

David Singleton, former CTO of Stripe and co-founder and CEO of Dreamer, argues that agents will only reach non-technical people if someone solves the platform problems, as Android did for mobile apps. Dreamer's answer is an operating-system-like design: a personal "Sidekick" agent that knows the user, builds apps from natural language, and mediates every interaction between agents, tools and personal data. swyx presses him on the technical stack underneath.

## Key points

- **Discover, build, use.** Users install agents from a community gallery (hundreds so far) or describe new ones to the Sidekick. Singleton demos a conference planner he built in about 25 minutes from the AI Engineer conference's llms.txt and JSON feed, and a ski-trip app that used a community "Ski Bum" tool and split group expenses.
- **Sidekick as kernel.** Agents never talk to each other directly; requests go through the Sidekick, which checks permissions and the user's interests. One user's to-do agent picked up a commitment from a Granola meeting transcript and completed it via his recruiting agent.
- **Paid tool ecosystem.** Announced on the show: tool builders get paid in proportion to agent usage, with a $10,000 prize for the best tool by mid-April and a paid Builders in Residence programme. Curated first-party tools (image, text-to-speech, translation, recipes) keep stable interfaces while models behind them change.
- **Engineer-grade internals.** Every agent gets a hosted multi-user SQLite database, built-in auth, triggers, versioning, readable prompts and an SDK/CLI that the Sidekick itself uses. TypeScript is the default for end-to-end type safety, and first builds take 10-15 minutes because the agent plans, builds and tests.
- **Memory and models.** Dreamer picks models per job (Haiku 4.5 for one demo step). Early vector-database RAG memory was replaced with a simpler system; knowledge graphs were tried and dropped.
- **Small teams, taste.** About six people built the core product; the company now has about 17. Interviews test how candidates work with coding agents. Singleton names taste as what LLMs still lack.

## Quotes

> "the Sidekick's like the kernel, the agents and apps are like users." — David Singleton

> "If you ask for a simple like to-do list app or something, uh, built by the models, I can tell which model built it just by kind of how it looks." — David Singleton
