---
title: >-
  The Quest for Autonomous Web Agents with Div Garg, Cofounder and CEO of
  MultiOn
description: >-
  MultiOn CEO Div Garg argues that web agents need context compression, memory
  and planning beyond today's LLMs, and that speed and cost matter as much as
  raw accuracy.
pubDate: '2024-01-20'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/the-quest-for-autonomous-web-agents-with-div-garg-cofounder-and-ceo-of-multion/
youtube: 'https://www.youtube.com/watch?v=-uWnHG5E1-g'
durationMin: 103
hosts:
  - Nathan Labenz
guests:
  - Div Garg
tags:
  - ai-agents
  - web-automation
  - context-management
  - ai-safety
  - llm-costs
draft: false
---
## Thesis

Div Garg, cofounder and CEO of MultiOn, tells Nathan Labenz that GPT-4 was overhyped: it chats well but lacks logical reasoning and is not grounded in the environments agents operate in. He argues that agents improve by managing context carefully, using external memory and reusable skills, and eventually by better planning systems. He treats MultiOn as a product rather than research, so speed and cost count alongside task success.

## Key points

- **What works now.** Garg says MultiOn is good at short, to-do style tasks on a single website, such as buying books on Amazon, ordering on DoorDash or Instacart, or sending NDAs. Composing tasks across sites comes next.
- **Context is the lever.** Models lose focus when context is stuffed, so MultiOn keeps average prompts under 5,000 tokens and gives the model memory operations to store and retrieve information, like a CPU.
- **Models and costs.** MultiOn ships fine-tuned open-source models and uses GPT-4 for planning. Garg puts the cost at no more than 10 cents per step, or 2-3 cents on its own hosting. Simple tasks take under 20 steps; research tasks can take about 100. He describes a Voyager-style skill library due in about a month.
- **Benchmarks and speed.** Because websites change, final testing is manual and real-world, such as ordering an Uber or a burger. Garg targets at least 10x human speed. He says vision alone "doesn't close the loop" because current models cannot reliably output click coordinates.
- **Complement, then substitute.** Garg expects agents to complement assistants in 2024 and possibly replace professional help from 2025. He compares this to typewriter jobs that disappeared once computers arrived, removing "digital chores".
- **Safety.** MultiOn has prompt-injection classifiers and a verification step before executing browser actions, and Garg recommends OpenAI's moderation API. Labenz notes that the API did not flag his spear-phishing prompt, and that another calling agent placed a fake ransom call for him with no guardrails.

## Quotes

> "context management is one of the most like the biggest lever that you have to manage right now with current state of models." — Div Garg

> "one thing I'll say is we want it to be a product, not research." — Div Garg
