---
title: >-
  How to Make AI Actually Do Things | Alex Hancock, Block, Goose, MCP Steering
  Committee
description: >-
  Block engineer and MCP Steering Committee member Alex Hancock argues that
  models are already smart enough, and that protocols and good context are what
  let agents act reliably.
pubDate: '2025-08-23'
show: turing-post
url: >-
  https://www.turingpost.com/podcast/s/turing_post/how_to_make_ai_actually_do_things_alex_hancock_block_goose_mcp_steering_committee
durationMin: 25
hosts:
  - Ksenia Se
guests:
  - Alex Hancock
tags:
  - mcp
  - ai-agents
  - protocols
  - context-engineering
  - open-source
draft: false
---
## Thesis

Alex Hancock, a senior software engineer at Block who works on the open-source agent Goose and sits on the Model Context Protocol (MCP) Steering Committee, argues that the next step for AI is giving models ways to act. Foundation models are already very smart, he says. The hard problem is getting them the right context, through protocols such as MCP and through better methods for discovering and managing context.

## Key points

- **A brain in a jar.** Hancock repeats MCP creator David Soria Parra's image of a smart model as a brain in a jar. MCP removes the jar, letting the model reach nearby data and call tools, giving it "arms and legs". Block adopted MCP early because it fit what Goose needed.
- **Opening up governance.** He says the Steering Committee has worked informally on GitHub, and that a new governance framework explains how outsiders can take part.
- **Current work.** Hancock lists the main work streams: keeping SDKs in step with a fast-moving spec (most don't yet support June's elicitation feature); a global server registry, which he originally proposed; an agents working group; and long-running asynchronous tool calls. OAuth 2.1 added authentication that MCP lacked six months earlier, but checking whether a server is trustworthy is still unsolved.
- **MCP and A2A.** He sees the two as mostly complementary: MCP connects a model to tools and data in systems such as Slack or Square, while A2A lets agents talk to each other in something close to plain English. Goose aims to stay neutral on both models and protocols.
- **Context is the bottleneck.** Hancock says only a small share of experts know what context a model needs. He wants agents to find that context themselves, while noting that someone who knows a codebase still gets much better results. Goose's one system prompt rarely needs changes when new models arrive.
- **Productivity and AGI.** He calls agentic coding the biggest productivity jump of his 15-year career. He expects AGI to arrive gradually rather than at a single moment, and recommends John Parker's running novel *Once a Runner*.

## Quotes

> "if you give the model the right context, it can do a great job." — Alex Hancock

> "This is a new way of creating software and automating any other kind of work that occurs on a computer." — Alex Hancock
