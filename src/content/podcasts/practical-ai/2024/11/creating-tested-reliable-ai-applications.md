---
title: 'Creating tested, reliable AI applications'
description: >-
  AI workflows prototyped in low-code tools repeat the old
  notebook-to-production problem; reliability comes from turning each step into
  tested code with behavioural test tables.
pubDate: '2024-11-13'
show: practical-ai
episode: 295
url: 'https://share.transistor.fm/s/604d821f'
durationMin: 50
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - ai-testing
  - behavioral-testing
  - prototype-to-production
  - ai-agents
  - low-code
draft: false
---
## Thesis

Daniel Whitenack argues that AI workflows built in low-code, no-code tools work "half the time" for the same reason Jupyter notebooks never made good production code: hidden state and ad hoc steps. Getting to reliability means re-implementing each step as tested software, and testing non-deterministic model calls with behavioural test tables rather than giving up on testing. Chris Benson adds that current models are already good enough for most organisations, if they do the process work.

## Key points

- **No GPT-5 is fine.** With OpenAI not shipping GPT-5 on the expected timeline, Whitenack says today's models are good enough as an orchestration layer over purpose-built tools, for example calling Facebook Prophet for a revenue forecast. Benson expects open models to catch up and commoditise the space.
- **Notebooks all over again.** Whitenack compares tools like Flowise, Gumloop, Dify and Alteryx to notebooks: good for prototyping, but a workflow meant to scale across a company must be pulled out into functions or classes, often behind a FastAPI service, with tests attached.
- **Three test categories.** Borrowing from behavioural testing, Whitenack proposes minimum functionality tests (must pass 100%, e.g. the bot always names Prediction Guard's CEO), invariant tests (swapping "the United States" for "Turkey" should not change sentiment) and variant tests (adding "do not" must flip it).
- **Thresholds, not perfection.** Minimum functionality failures block a release; for the other two tables, Whitenack says teams should never regress and should improve systematically, since they measure how sensitive the model is to small input changes.
- **Deployment language gap.** Benson notes that models are built and deployed in Python, while autonomy and robotics targets often need something like Rust, and tooling for crossing that gap is immature.
- **Agents are harder.** Because an agent picks its steps at run time, the per-step testing approach breaks down; the hosts point to the MLOps Community "Agents in Production" event and defer the topic.

## Quotes

> "Ultimately, this has to become software if the intention is to make it a feature that you release or something that scales across your organization" — Daniel Whitenack

> "Agents are hard to test because you don't know the workflow up front, right?" — Daniel Whitenack
