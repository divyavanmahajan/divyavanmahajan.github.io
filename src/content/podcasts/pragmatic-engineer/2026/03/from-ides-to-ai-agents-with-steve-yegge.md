---
title: From IDEs to AI Agents with Steve Yegge
description: >-
  Steve Yegge argues that hand-coding is ending, engineers must climb his eight
  levels of AI adoption toward agent orchestration, and big companies and
  monoliths will struggle to keep up.
pubDate: '2026-03-11'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/from-ides-to-ai-agents-with-steve'
youtube: 'https://www.youtube.com/watch?v=aFsAOu2bgFk'
durationMin: 91
hosts:
  - Gergely Orosz
guests:
  - Steve Yegge
tags:
  - coding-agents
  - agent-orchestration
  - ai-adoption
  - developer-productivity
  - future-of-software-engineering
draft: false
---
## Thesis

Steve Yegge, co-author of Vibe Coding and creator of the Gas Town agent orchestrator, argues that what engineers need to know keeps moving up the abstraction ladder, and AI is the next step: coding by hand will fade and engineers will manage agents. He sees AI as augmenting engineers rather than replacing them, but expects layoffs at big companies, a shift of innovation towards small teams, and a new kind of burnout.

## Key points

- **Eight levels of adoption.** Yegge describes a spectrum from no AI, through yes/no suggestions in an IDE and "YOLO" trust, to running several agents in parallel and finally orchestrating them. Orosz says roughly 70% of engineers are still at the lower levels; Yegge tells Copilot users to spend half an hour a day with Claude Code.
- **Gas Town.** His orchestrator has a "mayor" the user talks to, long-context "crew" for design work and short-lived "polecats" for well-specified tasks. Yegge says most people should not use it yet, that it needs Opus 4.5 at minimum, and that he is moving it to Dolt, a Git-backed database.
- **Monoliths and limits.** Yegge puts the ceiling of what agents can work on at about half a million to a few million lines of code, so companies with large monoliths will need to break them up or rewrite.
- **Prototype as product.** He says Anthropic builds many prototypes and ships the best, and that Claude Cowork reached launch in 10 days. Orosz recounts Boris Cherny building 20 working prototypes in two days.
- **The vampiric effect.** Yegge says AI removes the easy work, leaving only hard thinking, so engineers may get three productive hours a day. He frames how that value is split between engineer and employer as the new work-life balance.
- **Platforms and heresies.** He predicts SaaS vendors like Zendesk must expose APIs or be replaced by bespoke tools, and describes "heresies": wrong architectural ideas that keep reappearing in agent-written codebases unless documented in prompts.

## Quotes

> "It's not a replacement function. It's an augmentation function. It's here to make you better at your job." — Steve Yegge

> "how well you're going to be able to take advantage of AI totally depends on whether you're a monolith or not." — Steve Yegge
