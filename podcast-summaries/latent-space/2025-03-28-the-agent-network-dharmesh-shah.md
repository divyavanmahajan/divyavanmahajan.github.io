---
title: "The Agent Network — Dharmesh Shah"
date: 2025-03-28
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_agent_network_dharmesh_shah"
duration_min: 98
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Dharmesh Shah"]
description: "HubSpot co-founder Dharmesh Shah argues agents will become discoverable teammates on a shared network, composed via MCP, sharing memory, and routed to the cheapest model that does the job."
tags: ["agents", "multi-agent-systems", "mcp", "agent-memory", "business-models"]
source_transcript: "latent-space/episodes/2025/03/2025-03-28-the-agent-network-dharmesh-shah.md"
draft: false
---

## Thesis

Dharmesh Shah, co-founder and CTO of HubSpot and creator of Agent.ai, uses a deliberately broad definition of an agent and predicts that after "the year of agents" comes the year of multi-agent networks. He argues agents will work as teammates in hybrid human-AI teams, which requires a professional network where agents can be discovered, evaluated and composed, with shared memory and finer-grained permissions.

## Key points

- **Definition and atomic agents.** Shah defines an agent as AI-powered software that accomplishes a goal, then classifies agents by autonomy, determinism, sync versus async and interaction mode. He floats the idea that tools are just "atomic agents", making everything one composable primitive.
- **Agent.ai as LinkedIn for agents.** Shah reports 1.3 million users, about 3,000 builders and roughly 1,000 published agents, with tens of thousands of reviews averaging 4.1 out of five. Every agent gets a REST API and appears in an MCP server; his example composes a domain-valuation agent into a startup-naming agent.
- **MCP and tool overload.** Shah calls MCP one of the better things to happen in AI because a standard was needed, and adds value over OpenAPI for LLM discovery. The next problem is that LLMs break when given too many tools, so a retrieval layer must pick which agents to expose.
- **Model routing.** Users pick the highest-numbered model, such as GPT 4.5, and ignore the auto-optimise option. Shah says Agent.ai's internal tests show dramatic cost reductions from smaller models with no quality change.
- **Pricing.** Shah distinguishes work as a service from results as a service and thinks the industry over-indexes on outcome pricing because customer support tickets are unusually easy to value and measure.
- **Engineering and memory.** Shah would rather under-engineer, since tech debt has a known interest rate and AI refactoring lowers it further. He wants cross-agent memory (he uses MemZero) and a trusted intermediary for granular OAuth-style permissions.

## Quotes

> "it's AI-powered software that accomplishes a goal. Period." — Dharmesh Shah

> "I would rather under-engineer something than over-engineer it if I were gonna err on the side of something" — Dharmesh Shah
