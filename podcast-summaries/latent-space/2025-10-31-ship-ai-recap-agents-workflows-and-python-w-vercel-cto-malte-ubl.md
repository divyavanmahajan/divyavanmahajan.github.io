---
title: "⚡️ Ship AI recap: Agents, Workflows, and Python — w/ Vercel CTO Malte Ubl"
date: 2025-10-31
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/ship_ai_recap_agents_workflows_and_python_w_vercel_cto_malte_ubl"
duration_min: 42
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Malte Ubl"]
description: "Malte Ubl argues that, because nobody yet knows what AI apps will look like, Vercel ships low-level abstractions it has used itself: durable workflows, a minimal AI SDK and narrowly scoped agents."
tags: ["vercel", "agents", "durable-workflows", "ai-sdk", "developer-tools", "python"]
source_transcript: "latent-space/episodes/2025/10/2025-10-31-ship-ai-recap-agents-workflows-and-python-w-vercel-cto-malte-ubl.md"
draft: false
---

## Thesis

Vercel CTO Malte Ubl recaps the Ship AI conference with swyx. His case is that the AI app space is still so new that frameworks should stay low level and only offer abstractions Vercel has built and used itself. Agents work well, he argues, when aimed at narrow, tedious tasks, and fail when pushed beyond them.

## Key points

- **Workflow development kit.** Ubl says workflows exist in every transaction system, explicitly or ad hoc. Vercel's open-source kit lets serverless code pause and resume for days at no cost, retry failed steps, and await an ephemeral webhook for human approval. swyx, formerly of Temporal, calls it simpler than Temporal's approach.
- **Low-level AI SDK.** Ubl credits the AI SDK's success to restraint: because it stayed low level, it did not need a rewrite when developers moved from chatbots to agents. Version 6 beta adds a stable agent abstraction, and he says half of the competing frameworks are built on it anyway.
- **Dogfooding.** The AI SDK was extracted from v0, and v0 was later moved fully onto it, following what Ubl calls Vercel's founding principle.
- **DevOps agent.** The new Vercel agent is triggered by anomaly detection, queries observability data and logs, and decides whether to wake the on-call engineer. That lets alerting be tuned aggressively. Ubl would not let it change firewall rules.
- **Internal agents.** Asking staff what they hate most about their jobs surfaced three agents: lead qualification, abuse-report pre-work and a data analyst agent. Two are open source. Through Agent on Every Desk, customers commit to three agents: Vercel builds the first and assists with the second.
- **Python and security.** Vercel added zero-config Flask and FastAPI support and a Python SDK. Ubl also describes work on apps that stay secure even when the developer and the AI are not competent, by taking auth and data access out of the app.

## Quotes

> "Like, we know absolutely nothing, and we still know absolutely nothing." — Malte Ubl

> "the absolute founding pr-principle of Vercel is that we never give you an abstraction that we haven't used ourselves." — Malte Ubl
