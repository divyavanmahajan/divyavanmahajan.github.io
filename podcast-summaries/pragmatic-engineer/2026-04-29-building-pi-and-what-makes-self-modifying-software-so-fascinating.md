---
title: "Building Pi, and what makes self-modifying software so fascinating"
date: 2026-04-29
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/building-pi-and-what-makes-self-modifying"
youtube: "https://www.youtube.com/watch?v=n5f51gtuGHE"
duration_min: 93
hosts: ["Gergely Orosz"]
guests: ["Mario Zechner", "Armin Ronacher"]
description: "Mario Zechner and Armin Ronacher argue that minimal, self-modifying agent harnesses work best with a human in the loop, and that agent-driven speed is quietly eroding code quality."
tags: ["ai-coding-agents", "open-source", "code-quality", "developer-tools", "mcp"]
source_transcript: "pragmatic-engineer/episodes/2026/04/2026-04-29-building-pi-and-what-makes-self-modifying-software-so-fascinating.md"
draft: false
---

## Thesis

Mario Zechner, creator of the Pi coding agent, and Armin Ronacher, creator of Flask, tell Gergely Orosz that a small, stable agent core which users can extend by asking the agent to modify itself beats feature-heavy harnesses. Both argue that agents feel no pain from complexity, so engineers must stay in the code, keep deliberate friction and slow down.

## Key points

- **Why Pi exists.** Zechner says Claude Code became unpredictable in summer 2025 as it added features and injected hidden context, and OpenCode also altered context behind his back. Pi ships only read, write, edit and bash tools plus hook points that TypeScript extensions can use; it is also the core that OpenClaw builds on.
- **Self-modifying software.** Users ask Pi to add MCP support, plan modes or custom TUIs. Ronacher built a game with Pi, having it add debugging tools and screenshots so both he and the agent could validate changes.
- **Quality is dropping.** After talking to about 30 engineering teams, Ronacher reports adoption spiked after Christmas and quality fell, with larger, more taxing PRs. Juniors and PMs now use agents to argue against a senior's "no", and non-engineers send pull requests.
- **Agents don't learn or hurt.** Zechner warns that an agent's occasional good output lulls engineers into automation bias, and argues agents do not retain lessons or refactor because they feel no pain. He refactors Pi's important parts "mercilessly" to stay in the code.
- **Bottlenecks for open source.** Zechner auto-closes pull requests from unknown accounts and asks for a short issue "in a human voice", which he says agents do not see. Ronacher argues friction such as SLOs and approvals is often deliberate and valuable.
- **MCP versus CLI.** Both favour code execution: Zechner calls MCP non-composable because outputs must pass through context, while Ronacher credits it with solving authentication and expects it to stay in enterprises.

## Quotes

> "I think where we are going is software that modifies itself on behalf of the user's wishes and needs." — Mario Zechner

> "a good engineer is an engineer that says no a lot." — Mario Zechner
