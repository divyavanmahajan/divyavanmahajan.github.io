---
title: "Models, Harnesses, and Multi-Agent Systems"
date: 2026-08-06
show: practical-ai
episode: 367
url: "https://share.transistor.fm/s/063cfaad"
youtube: "https://www.youtube.com/watch?v=15-DudvYOSs"
duration_min: 50
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "A primer separating models, agent harnesses and multi-agent systems, arguing that fleets of agents across several models will become pervasive and that firms should keep control of their agent workforce."
tags: ["agents", "multi-agent-systems", "agent-harness", "open-models", "vendor-lock-in"]
source_transcript: "practical-ai/episodes/2026/08/2026-08-06-models-harnesses-and-multi-agent-systems.md"
draft: false
---

## Thesis

In a hosts-only primer, Daniel Whitenack and Chris Benson define the building blocks of agentic AI: models, agent harnesses and multi-agent systems. Benson argues that multi-agent architectures will become so pervasive that nobody will talk about them. Whitenack argues that businesses should build their "digital workforce" of agents in a vendor-agnostic way rather than handing it to one vertically integrated stack.

## Key points

- **A model is a function.** Whitenack describes a model as a data transformation from input to output (text to text, text to image, and so on). Open-weight models such as Gemma ship weights you can run yourself; closed models sit behind a provider's API. Benson notes that the strongest self-hostable models today are mostly Chinese, while US labs lead on closed APIs.
- **Features versus agents.** Whitenack separates turn-based AI features (a chat box, a cash-flow forecast) from agents, which are tied into systems like email, NetSuite or Workday and pursue a goal with some autonomy. Benson calls the harness something like an operating system for AI.
- **Why fleets of agents.** Benson gives cyber defence and robotics as cases where many specialised agents must act faster than humans, and cites Walmart and Amazon drone delivery. Whitenack sketches a manufacturing chain where agents detect a supplier problem, research replacements and draft orders in NetSuite.
- **The F1 pit crew analogy.** Whitenack suggests each worker becomes a team principal directing a crew of specialised agents, while acknowledging questions about how many such roles a business needs.
- **Open harnesses versus vertical stacks.** Harnesses such as LangGraph, Pydantic AI, Hermes Agent and OpenClaw let you swap models; providers and hyperscalers offer integrated stacks. Benson expects both to persist and says the "token maxing" phase gave way to cost-conscious design.
- **Getting started.** Benson advises starting small, iterating quickly and keeping backup plans, since vendors change and frontier models' guardrails sometimes block legitimate work.

## Quotes

> "they will be absolutely and completely pervasive in the future, to the point where we won't wanna talk about them at all" — Chris Benson

> "most businesses do not say, we're going to staff our entire business and workforce through McKinsey." — Daniel Whitenack
