---
title: "How Anthropic builds software in 2026 with Katelyn Lesse"
date: 2026-11-25
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/how-anthropic-builds-software-in"
youtube: "https://www.youtube.com/watch?v=9oNvKMd7xJo"
duration_min: 110
hosts: ["Gergely Orosz"]
guests: ["Katelyn Lesse"]
description: "Anthropic's platform lead says verifiable outcomes let agents write most code, including a Python-to-Rust API rewrite, while coordination, team ownership and judgment remain human work."
tags: ["agentic-engineering", "rust", "code-review", "engineering-culture", "hiring"]
source_transcript: "pragmatic-engineer/episodes/2026/11/2026-11-25-how-anthropic-builds-software-in-2026-with-katelyn-lesse.md"
draft: false
---

## Thesis

Katelyn Lesse, who leads platform engineering at Anthropic, argues that once work can be made verifiable, agents can write most of the code and engineers no longer need to read every line. Implementation time has collapsed. Alignment across teams, system ownership and deep domain expertise have not changed much, and they now take up most of an engineer's time.

## Key points

- **Rust rewrite via shadow traffic.** Lesse says CPU pressure on the Python monolith behind the Messages API, which got worse during a global CPU shortage, pushed a small team to rewrite it in Rust in about five or six months, without Rust experts. A thin Python front door sent each request to both systems, and the team iterated until outputs and token counts matched. She estimates engineers did not read about 80% of agent-opened pull requests closely.
- **Rebuilding Managed Agents.** Lesse describes scrapping the first Claude Managed Agents design (a sandbox per agent) for durable harness servers, sandboxes spawned only when needed and credentials injected at egress. The new design fixed reliability, latency and security problems and runs on roughly a third of the CPU.
- **Agents in review and oncall.** A Claude classifier decides whether a change needs human review, how many reviewers and which teams. Mechanical changes such as SDK version bumps, and flaky-test fixes, can merge without a human. A Claude agent now triages API pages as noise or real before a human is paged.
- **Teams stay, roles blur.** Lesse says teams are still two-pizza sized, though more senior, because a set of humans must own and operate each system. A product manager built and shipped the prompt-cache diagnostics dashboard in the developer console. New hires onboard by asking Claude, which is connected to internal systems over MCP.
- **Hiring and promotion.** Her team phased out the coding interview after strong candidates kept failing it, and is testing agent-based exercises instead. Because projects now finish much faster, promotions rely on measured impact (CPU saved, latency, incidents avoided) rather than how long a project took.

## Quotes

> "half the battle is Claude helps you write the code. The other half of the battle is Claude helps you learn" — Katelyn Lesse

> "I think the average engineer is spending so much more of their time on that type of coordination work and much, of course, much less on actual implementation" — Katelyn Lesse
