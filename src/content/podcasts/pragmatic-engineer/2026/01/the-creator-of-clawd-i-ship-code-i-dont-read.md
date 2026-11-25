---
title: 'The creator of Clawd: "I ship code I don''t read"'
description: >-
  Peter Steinberger argues that one engineer running parallel coding agents can
  ship like a team, provided agents can verify their own work and the human owns
  the architecture.
pubDate: '2026-01-28'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code'
youtube: 'https://www.youtube.com/watch?v=8lF7HmQ_RgY'
durationMin: 114
hosts:
  - Gergely Orosz
guests:
  - Peter Steinberger
tags:
  - ai-coding-agents
  - agentic-engineering
  - software-architecture
  - developer-workflow
  - open-source
draft: false
---
## Thesis

Peter Steinberger, founder of PSPDFKit and creator of Clawdbot (now OpenClaw), tells Gergely Orosz that he no longer reads most of the code he ships. He argues that most application code is plumbing, so his job is system design, planning with the agent, and "closing the loop" so agents can compile, test and check their own output. Orosz cautions that this is an experimental, move-fast project and that review and validation would matter more in production systems.

## Key points

- **From burnout to agents.** Steinberger built PSPDFKit, used on more than one billion devices, to about 70 people, then sold his shares and stayed away from computers for three years. He came back last April through Claude Code and compares its pull to a casino slot machine.
- **Close the loop.** His main rule is that an agent must be able to debug and test itself. He has agents build CLIs and Docker-based live tests so they can check their work, and says this pushes him towards more testable architecture.
- **Parallel agents, Codex preferred.** He runs five to ten agents at once and switches between them to stay in flow, which he finds more mentally taxing than writing code. He prefers Codex (GPT 5.2) for complex codebases because it reads more of the code before writing.
- **Prompt requests, not pull requests.** He reads contributors' prompts more than their code, rewrites most PRs with his agent, and talks architecture rather than code with his core team. He runs tests locally instead of waiting for remote CI.
- **CLIs over MCP.** Steinberger calls MCP "a crutch" because its outputs cannot be filtered or chained; he built MCPorter to turn MCP servers into CLIs.
- **The personal assistant.** Clawdbot began as a WhatsApp relay to his computer and grew to more than 3,300 GitHub stars in a week. Steinberger thinks companies could run with about 30% of their staff, but would first have to restructure both codebases and organisations.

## Quotes

> "I would say I write better code now that I don't write code myself anymore." — Peter Steinberger

> "The model always needs to be able to verify the work itself, which automatically steers me to better architecture." — Peter Steinberger
