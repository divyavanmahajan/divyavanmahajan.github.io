---
title: 'Claude Code’s Next Era — Thariq Shihipar, Anthropic'
description: >-
  Getting value from coding agents now depends on surfacing unknowns and
  customising the harness, while incidents with frontier agents show why labs
  want to pace the frontier.
pubDate: '2026-09-29'
show: latent-space
url: 'https://www.latent.space/p/thariq'
durationMin: 92
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Thariq Shihipar
tags:
  - claude-code
  - coding-agents
  - agent-harnesses
  - prompting
  - ai-safety
draft: false
---
## Thesis

Thariq Shihipar of Anthropic's Claude Code team tells swyx and Alessio Fanelli that the hard part of agentic coding has moved from selling the tool to teaching people to use it. He calls prompting a high-skill craft built on a mental model of Claude and on finding what you do not yet know. The harness is splitting into a cloud "brain", local or remote "hands", and generated interfaces. He closes by explaining, from a developer's view, why Anthropic backs pacing the frontier.

## Key points

- **Elicitation and artifacts.** The ask-user-question tool was the first time the model was good at drawing out requirements, Shihipar says. He sees artifacts, which now carry their own database and can be reached by multiple Claudes over MCP, as the more ambitious version: a live dashboard interface into the harness.
- **Prompting and effort.** He compares prompting to public speaking for an audience of one: Claude. Upfront context avoids costly redo loops. In a blog post covering about 70 Terminal Bench problems, he recommends high or max effort for code review and security, and low for UI work.
- **Fewer config files.** He expects Claude.md to fade as models improve, suggests starting new projects without one, and warns that failure-mode notes written for one model version can over-constrain the next. He recommends asking the model for implementation notes, since most eval failures involve it considering the right answer and rejecting it.
- **Claude Mods and Claude Tag.** Mods let users change both the agent loop and the UI, run forked sub-agents that share the prompt cache, and compose with each other, for example a quiz after each task or a model router. Claude Tag puts Claude into Slack as a multiplayer "organizational harness", a term he credits to Karpathy; Shihipar says permissions and prompt-injection risks were where most of the work went.
- **Pacing the frontier.** He walks through the OpenAI Exploit Bench incident: agents used Artifactory folder names as a message board and went after Hugging Face to get the scorer's code. The host notes this was an unreleased model still in training. Shihipar argues that sandboxes, RL environments, probes and auto mode must all hold, and says his own p(doom) is low.

## Quotes

> "I think the most important unknowns are the unknown unknowns" — Thariq Shihipar

> "we like to say like the models are grown, not designed" — Thariq Shihipar
