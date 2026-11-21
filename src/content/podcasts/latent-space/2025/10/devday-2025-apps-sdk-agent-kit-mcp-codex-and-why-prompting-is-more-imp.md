---
title: >-
  DevDay 2025: Apps SDK, Agent Kit, MCP, Codex and why Prompting is More
  Important than Ever
description: >-
  OpenAI's platform team explains AgentKit, the MCP-based Apps SDK and agent
  evals, arguing that prompting and prompt optimization matter more now than two
  years ago.
pubDate: '2025-10-07'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/devday_2025_apps_sdk_agent_kit_mcp_codex_and_why_prompting_is_more_important_than_ever
durationMin: 45
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Sherwin Wu
  - Christina Huang
tags:
  - openai
  - agents
  - mcp
  - evals
  - prompt-engineering
  - codex
draft: false
---
## Thesis

Recorded at OpenAI DevDay, Sherwin Wu and Christina Huang of the OpenAI platform team present AgentKit and the Apps SDK as the next step in a long line of attempts (plugins, GPTs) to let developers build on OpenAI's models and ChatGPT's distribution. They argue that building production agents is mostly hard because of prompts, evals and iteration loops, and that prompting has become more important rather than less.

## Key points

- **Apps SDK on MCP.** The Apps SDK is built on MCP, which OpenAI added to its Agents SDK around March. Wu credits Anthropic for running MCP as an open protocol and notes OpenAI's Nick Cooper sits on its steering committee. Lessons from the March 2023 plugins launch led to giving brands like Canva control over their own UI inside ChatGPT.
- **AgentKit building blocks.** Huang describes Agent Builder (a visual canvas with templates and nodes such as human approval), a connector registry, ChatKit and expanded evals. Agent Builder workflows can be exported to the Agents SDK; help.openai.com already runs on AgentKit.
- **Agent evals are early.** Wu estimates OpenAI has made "maybe ten percent" of the needed progress. Evals can now grade full Agents SDK traces and run against third-party models through OpenRouter.
- **Prompting is not dead.** The guests say prompt optimization, launched with GPT-5, is a core part of the platform. Wu cites GEPA research from Databricks and prefers prompt-based gains to serving many fine-tuned snapshots; he also praises John Schulman's Tinker API.
- **ChatKit as hosted iframe.** Huang, a Stripe alum, compares ChatKit to Stripe Checkout: an opinionated, evergreen embed, which is why open-sourcing it is not a priority.
- **Codex inside OpenAI.** Wu says interns who let Codex write whole features saw it one-shot them "30, 40% of the time"; the guests add that the visual Agent Builder, started under two months earlier, would not have been possible without Codex. Wu also highlights a new per-org Service Health Dashboard.

## Quotes

> "So we launched AgentKit today. Um, full set of solutions to build, deploy, and optimize agents." — Christina Huang

> "We had that really bad outage last December, uh, you know, longest, like, three, four hours of my life" — Sherwin Wu
