---
title: "How AI is changing software engineering at Shopify with Farhan Thawar"
date: 2025-07-02
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/how-ai-is-changing-software-engineering"
youtube: "https://www.youtube.com/watch?v=u-3IILWQPRM"
duration_min: 47
hosts: ["Gergely Orosz"]
guests: ["Farhan Thawar"]
description: "Farhan Thawar argues that Shopify's AI-first approach depends on shared infrastructure, unlimited token spend, AI-reflexive interns and leaders who role-model the tools themselves."
tags: ["ai-assisted-coding", "engineering-leadership", "mcp", "developer-productivity", "hiring"]
source_transcript: "pragmatic-engineer/episodes/2025/07/2025-07-02-how-ai-is-changing-software-engineering-at-shopify-with-farhan-thawar.md"
draft: false
---

## Thesis

In a live recording at LDX3 in London, Shopify Head of Engineering Farhan Thawar tells Gergely Orosz how Shopify has gone all in on AI. He argues the gains come from making AI easy and safe to use, not rationing it, and from keeping humans responsible for what the tools produce. He says role modelling by leaders works better than anything else.

## Key points

- **Early adoption.** Thawar says Shopify was the first company outside GitHub to use Copilot, in 2021, and was not charged for two years. It now runs Cursor, VS Code and Claude Code, and he paired with an Anthropic applied AI engineer to compare how both companies use Claude Code.
- **Code Red.** For about seven months, 30 to 50% of engineering worked on tech debt: zero segfaults, shrinking unique exception counts and four nines of reliability, measured on 28-day rolling averages.
- **Infrastructure.** An internal LLM proxy built on LibreChat keeps data on enterprise APIs and tracks usage per team, with a leaderboard for top token users. About two dozen MCP servers expose systems such as Salesforce and the internal wiki, The Vault.
- **Vibe coding beyond R&D.** Thawar says sales, finance and support use Cursor to build personal tools. Anyone may submit a PR, but they must understand the code first. He is not worried about SaaS and cites Jevons paradox.
- **Spend and hiring.** He says $1,000 a month per engineer is "too cheap" if it buys 10% productivity, and urges moving off Cursor's default model. Shopify plans 1,000 interns this year, expecting them to be AI reflexive. Interviews allow copilots, and director-and-above hires get a coding interview.
- **What good looks like.** Strong engineers use agents for refactoring and debt reduction, and he wants people around 90 to 95% AI, not 100%.

## Quotes

> "If they don't use a co-pilot, they usually get creamed by someone who does." — Farhan Thawar

> "And you should not be penny-pinching on AI tools, because actually the productivity gains are there." — Farhan Thawar
