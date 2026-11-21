---
title: Why DeepSeek Harness Is The End Of Coding Agents as We Know Them
description: >-
  Ksenia Se argues DeepSeek's open-source Harness, built on the Cordis plugin
  runtime, commoditises the agent harness and points to agents that build and
  remove their own tools.
pubDate: '2026-08-25'
show: turing-post
url: >-
  https://www.turingpost.com/podcast/s/turing_post/why_deepseek_harness_is_the_end_of_coding_agents_as_we_know_them
durationMin: 15
hosts:
  - Ksenia Se
guests: []
tags:
  - coding-agents
  - deepseek
  - agent-architecture
  - open-source
  - plugins
draft: false
---
## Thesis

Ksenia Se argues that DeepSeek Harness is not just DeepSeek's answer to Claude Code. She sees it as an attempt to commoditise the harness layer before the big labs can turn it into a moat. Harness makes nearly every capability a plugin and lets the agent write temporary tools while it runs. Se argues the more important release is the paper on Cordis, the runtime that lets those tools be added and removed cleanly.

## Key points

- **The release.** Harness is MIT-licensed, installs with one command, works with DeepSeek, other providers or self-hosted models, and had more than 147,000 GitHub stars and 15,000 forks at recording. Se notes the paper's repository had only about 2,000 stars.
- **Everything is a plugin.** The model adapter, tool registry, sessions, storage, scheduling, sandbox policy, agent loop and web UI all sit on top of a small Cordis kernel. The model becomes one replaceable service among many.
- **Creator mode, with limits.** The agent can define a temporary package, such as a schema-comparison tool, during a task. Packages live only in memory, need a human to start them, cannot make themselves permanent, and DeepSeek says the sandbox is not a security boundary.
- **Cordis and confluence.** Temporal composability means every effect records how to undo itself, and spatial composability means dependent plugins shut down first. The paper's confluence result says a system should end up in the same observable state no matter what detours it took. Se lists the conditions: correct inverses, no dependency cycles, and no way to undo external effects such as a sent email.
- **Open-source roots.** Cordis came from the Koishi chatbot framework, where more than four thousand community plugins tested it. Researchers from Peking University and DeepSeek then formalised it.
- **Historical parallels.** Se compares the idea to Smalltalk's "everything is an object", Unix's "everything is a file" and Codd's relational model, and links it to Anthropic's Sholto Douglas on cutting costs to the cost of energy. She calls it a proposal with one main implementation, not yet a standard.

## Quotes

> "Every change should come with an inverse." — Ksenia Se

> "In Harness, inference is the grid, the plugin interface is the socket, and the generated tool is the appliance." — Ksenia Se
