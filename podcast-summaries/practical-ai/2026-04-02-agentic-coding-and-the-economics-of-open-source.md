---
title: "Agentic Coding and the Economics of Open Source"
date: 2026-04-02
show: practical-ai
episode: 351
url: "https://share.transistor.fm/s/7d8e0293"
youtube: "https://www.youtube.com/watch?v=SmRV3fprliQ"
duration_min: 49
hosts: ["Chris Benson"]
guests: ["Miklós Koren"]
description: "AI coding agents raise downloads of open source libraries while diverting the human attention that rewards maintainers, which threatens how open source sustains itself."
tags: ["open-source", "vibe-coding", "economics", "ai-coding-agents", "labor-market"]
source_transcript: "practical-ai/episodes/2026/04/2026-04-02-agentic-coding-and-the-economics-of-open-source.md"
draft: false
---

## Thesis

Miklós Koren, an economics professor at Central European University in Vienna, argues in his paper "Vibe Coding Kills Open Source" that AI agents break the incentive model behind open source. Maintainers are rewarded by human attention and a large user base; when agents pick and install libraries, usage rises but the humans who read docs, file bugs and give stars disappear.

## Key points

- **Economic lens.** Koren frames the problem with three pillars: people respond to incentives (often fame or the satisfaction of helping, not money), the economy is a closed system, and scarce resources get pricier. He sees human attention as the scarce resource in an AI economy.
- **Thin margins.** Citing a Harvard Business School study, Koren says open source creates at least a thousand times more value than the work put into it, so it only survives with a very large user base.
- **Tailwind as warning.** Tailwind CSS saw usage rise, much of it driven by AI agents, while website visits fell; since its revenue came from premium products sold on the site, revenue dropped.
- **Controlled experiment.** Koren's team wrote technology-neutral requirements for 100 popular websites and asked seven AI models to build them via npm, stopping once dependencies were installed. Each additional use case where models recommend a package adds roughly 3-5% to its weekly downloads, while GitHub stars, a proxy for human attention, stay flat or fall.
- **Maintenance risk.** Koren warns that frozen open source does not stay still: unfixed bugs and vulnerabilities make it decline. He now avoids MCPs and lets agents use command-line tools.
- **Jobs.** He splits software engineering into understanding users, designing systems and writing code, says the last part is essentially fully automated, and argues via Ricardo's comparative advantage that thinking remains the human edge.

## Quotes

> "it's not click bait if it's true." — Miklós Koren

> "the machines are downloading, but the machines are not interacting with the developer on GitHub." — Miklós Koren
