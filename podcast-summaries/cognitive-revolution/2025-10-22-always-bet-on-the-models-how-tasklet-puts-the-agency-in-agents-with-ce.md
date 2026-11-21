---
title: "Always Bet on the Models: How Tasklet Puts the Agency in Agents, with CEO Andrew Lee"
date: 2025-10-22
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/always-bet-on-the-models-how-tasklet-puts-the-agency-in-agents-with-ceo-andrew-lee/"
youtube: "https://www.youtube.com/watch?v=ILMVUSJDF40"
duration_min: 133
hosts: ["Nathan Labenz"]
guests: ["Andrew Lee"]
description: "Andrew Lee argues that automation should let one model-driven agent plan the work instead of following a workflow, because models keep improving and speed is the only moat."
tags: ["ai-agents", "workflow-automation", "context-engineering", "mcp", "agent-economics"]
source_transcript: "cognitive-revolution/episodes/2025/10/2025-10-22-always-bet-on-the-models-how-tasklet-puts-the-agency-in-agents-with-ce.md"
draft: false
---

## Thesis

Andrew Lee, CEO of Shortwave and Tasklet, tells Nathan Labenz that workflow tools such as Zapier, n8n or OpenAI's Agent Kit put traditional software in control of the LLM, and that this should be reversed. Tasklet lets a single agent plan and run the whole task, betting that models will keep getting better at long multi-turn work. He argues that a general agent with all the context and tools beats multi-agent setups, and that speed is the only moat left.

## Key points

- **Two-tier agents.** A long-lived main agent you keep chatting with holds the instructions and spawns sub-agent runs on triggers. Lee says users began naming agents and giving them their own email accounts.
- **Models on vibes.** Lee picks models by hand testing, not evals, and says Anthropic's models handle long tool-calling loops best. He points out that customers stay with Sonnet even though GPT-5 costs less than half as much. A 50-turn limit per request is now hit often, mostly in computer use.
- **Integrations.** Tasklet offers 3,000+ tools through Pipedream, MCP, "direct API" connections built from scraped API docs, and computer use as a fallback. Lee says direct API connections are used far more than MCP, and he has become less optimistic about MCP.
- **Memory and context.** A JSON blob that the agent could edit broke down after a week or two, so each agent now has its own SQL database. Lee prefers agents that search existing systems over building his own memory or search stacks.
- **Economics and caching.** Shortwave is now profitable, partly through caching (about 85% hit rate), helped by putting the date and time in system messages instead of the system prompt. Tasklet is "strongly margin negative", and Lee expects Haiku 4.5 to help.
- **Trust and moats.** Tasklet does not yet have SOC 2 but plans to get it. Lee reports not a single complaint about agents going rogue. He expects horizontal AI platforms to replace much vertical SaaS, and possibly Shortwave itself in time.

## Quotes

> "I think we've learned the last few years that you should always bet on the model." — Andrew Lee

> "Our direct API connections are used far, far more frequently than MCP." — Andrew Lee
