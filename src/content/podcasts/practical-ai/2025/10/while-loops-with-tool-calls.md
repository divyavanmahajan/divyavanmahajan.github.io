---
title: While loops with tool calls
description: >-
  Jared Zoneraich argues that LLM apps have moved from rigid prompt DAGs to
  simple agent loops with tool calls, which are faster to build but need
  heuristic, imperfect testing.
pubDate: '2025-10-30'
show: practical-ai
episode: 334
url: 'https://share.transistor.fm/s/ca41b93c'
durationMin: 45
hosts:
  - Daniel Whitenack
  - Chris Benson
guests:
  - Jared Zoneraich
tags:
  - agents
  - context-engineering
  - tool-calling
  - evaluation
  - coding-agents
draft: false
---
## Thesis

Jared Zoneraich, co-founder and CEO of PromptLayer, argues that better instruction following and built-in tool calling have shifted LLM applications from hand-built workflow graphs to a single loop that calls tools until the task is done. This makes agents quicker to build but harder to test, so he recommends heuristic checks, domain-expert involvement and a crawl-walk-run rollout over perfect evals.

## Key points

- **Prompting became context engineering.** Zoneraich sees the two terms as largely the same; the difference is that context windows are now almost unlimited, so the question is how much to include without distracting the model. Reasoning models such as OpenAI's o1 now do the chain of thought for you.
- **Treat the model as a black box.** Asked whether to use GPT-5, Sonnet 4.5 or Gemini, he says nobody, including the labs, knows; only tests on your own use case answer it. He calls prompt quirks "LLM idioms", e.g. asking for JSON pushes the model into a coding mode that hurts creative writing.
- **From DAGs to loops.** Early chatbots, such as a hypothetical United Airlines refund bot, used fixed paths to prevent hallucinations. Claude Code and Codex instead run one loop: act in the terminal, read the output, then decide on another tool call or ask the user. He built a docs-updating agent this way in two hours.
- **Agent smell tests.** He suggests tracking tool-call counts, retries and run time to spot regressions, then testing individual states and full simulated conversations, accepting that 100% coverage means never shipping.
- **Domain experts and small pilots.** Responding to the reported 95% AI pilot failure rate, he says winning products encode non-engineering taste (his example: competing psychologists on one block) and should start small; for an AI notetaker, a first eval can simply check the summary is in English and under a page.
- **Coding agents everywhere.** PromptLayer now has a rule: if Claude Code or Codex can do a task in under two hours, just do it, which customers noticed as faster shipping.

## Quotes

> "Everything's a while loop with tool calls now." — Jared Zoneraich

> "If anything, if you're trying to make a perfect test for your agents, you're probably never gonna ship." — Jared Zoneraich
