---
title: >-
  Notion’s Token Town: 5 Rebuilds, 100+ Tools, MCP vs CLIs and the Software
  Factory Future — Simon Last & Sarah Sachs of Notion
description: >-
  Notion's agents only worked after years of rebuilds that gave models what they
  want (Markdown, SQLite, progressive tool disclosure), backed by distributed
  tool ownership and serious evals.
pubDate: '2026-04-15'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/notion_s_token_town_5_rebuilds_100_tools_mcp_vs_clis_and_the_software_factory_future_simon_last_sarah_sachs_of_notion
durationMin: 77
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Simon Last
  - Sarah Sachs
tags:
  - ai-agents
  - agent-harness
  - mcp
  - evals
  - llm-pricing
draft: false
---
## Thesis

Notion co-founder Simon Last and AI engineering lead Sarah Sachs explain how custom agents, launched after four or five rebuilds since late 2022, came from two habits: noticing when you are "swimming upstream" against model capability, and building for where models are heading. Their main lesson is to shape the agent's environment around what models already understand rather than around Notion's internal data model.

## Key points

- **Rebuild history.** Last describes a first version where the agent wrote JavaScript, then a custom XML tool format that failed because models did not know it, then Notion-flavoured Markdown and SQLite queries instead of the JSON database API. He calls Sonnet 3.6/3.7 the real unlock.
- **Distributed tools.** Moving from few-shot prompts that only five or six people could edit to goal-driven tool definitions let every product team own its agent tools. The agent now has over 100 tools, which forced progressive disclosure because even "hello" cost thousands of tokens.
- **Evals.** Sachs splits evals into CI regression tests, launch-quality report cards at 80-90% pass rates, and "frontier" evals deliberately kept at about 30% pass, a "Notion's last exam". Model behavior engineers, many without engineering backgrounds, now build agents that write evals.
- **MCP vs CLI.** Last is bullish on CLIs for progressive disclosure and because agents can debug and fix their own tools, but sees MCP's tight permission model as right for narrow, lightweight agents. Notion builds Slack, mail and calendar integrations in-house for quality.
- **Pricing.** Usage-based credits sit above raw tokens because GPUs, web search and serving tiers are priced differently. Sachs says agentic autofill on Opus for every database cell would cost billions, and the "Auto" model picker steers users to cheaper models.
- **Culture and retrieval.** Sachs runs teams on low ego and "demos over memos". Most search traffic now comes from agents, so Notion is retraining ranking for top-K recall and parallel query fan-out rather than click-through position.

## Quotes

> "I think the coding agents are the kernel of AGI. Everything is a coding agent." — Simon Last

> "MCP is just like the dumb, simple thing that works, and it, it is pretty good." — Simon Last
