---
title: Building an AI Guardian for Enterprise with Onyx Security CEO Maxim Bar Kogan
description: >-
  Onyx Security CEO Maxim Bar Kogan argues that autonomous agents need an
  independent oversight layer, using small specialised models to decide when a
  smarter agent should review an action.
pubDate: '2026-05-28'
show: no-priors
episode: 163
url: 'https://www.youtube.com/watch?v=QDsbFLEt9ro'
youtube: 'https://www.youtube.com/watch?v=QDsbFLEt9ro'
durationMin: 41
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Maxim Bar Kogan
tags:
  - ai-security
  - agents
  - enterprise-ai
  - interpretability
  - israel
draft: false
---
## Thesis

Maxim Bar Kogan, co-founder and CEO of Israel-based Onyx Security, tells Sarah Guo that agent actions are growing too fast for humans in the loop or for existing identity, endpoint and API tools, which lack the context to judge what an agent intends. Onyx trains models and builds agents that oversee other agents, and he argues this oversight should come from a party independent of the AI vendors.

## Key points

- **Bet on agent actions.** Bar Kogan says AutoGPT convinced him that capable autonomous agents were coming, even though GPT-4 was not yet good enough. Reasoning models, Claude Code, Cowork and OpenClaw later made that real.
- **What enterprises run.** In a typical enterprise, he estimates that over 50% of agents are autonomous coding agents and assistants, about 45% are low-code automations, and only a small share are first-party agents. Autonomous agents are growing fastest and usually come without controls.
- **Why proxies and permissions fail.** Users want agents to act with their own permissions across varied tasks. Seeing the traffic is easy, he says; deciding whether an action is legitimate is the hard problem.
- **Small models as triage.** Running a frontier agent to watch every agent would cost more than the AI itself and add latency. Onyx trains small models that only decide when a smarter agent should take a closer look. Guo compares this to blitz chess intuition.
- **Mythos and vulnerabilities.** Bar Kogan thinks the market is not overreacting to cheap vulnerability discovery. He would widen access to the gradual rollouts (Glasswing, Daybreak) and advises companies to assume such models are coming and to invest in foundational controls.
- **Why not the labs.** Enterprises will not give Anthropic or OpenAI their historical agent data, he says, and they use many model vendors. Silly mistakes will fade as models improve, but smarter models increasingly have independent perspectives that may not align with the user's. He also sees mechanistic interpretability as part of the long-term solution.

## Quotes

> "We think you want a company that is not the vendor of the AI itself to oversee and help you control what AI is doing." — Maxim Bar Kogan

> "At the end of the day security people are in the business of revenue preservation." — Maxim Bar Kogan
