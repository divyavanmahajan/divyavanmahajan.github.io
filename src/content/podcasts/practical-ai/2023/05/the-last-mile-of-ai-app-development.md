---
title: The last mile of AI app development
description: >-
  Travis Fischer argues that LLM products should start with hosted models and
  simple prompting, then climb a ladder of complexity only when quality, cost,
  latency or reliability constraints demand it.
pubDate: '2023-05-11'
show: practical-ai
episode: 222
url: 'https://share.transistor.fm/s/7e30e465'
durationMin: 39
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Travis Fischer
tags:
  - llm-apps
  - prompt-engineering
  - evaluation
  - typescript
  - agents
draft: false
---
## Thesis

Travis Fischer, creator of the ChatGPT NPM package and the ChatGPT Twitter bot, argues that most teams do not need to hire ML engineers or train models to start using AI. He recommends starting with hosted foundation models and prompting, and moving down a "ladder of complexity" (retrieval, multi-step prompting, fine-tuning, building your own model) only when a real constraint appears.

## Key points

- **Community and origin.** Fischer released the unofficial ChatGPT NPM package 48 hours after ChatGPT launched; his bot has about 123,000 followers and his ChatGPTHackers.dev group about 9,500 developers. He recounts OpenAI swapping a hidden model the community used for "CatGPT", which answered with meows.
- **Trade-offs.** Fischer frames LLM engineering around quality, cost, latency and reliability, and says teams should ask whether their use case needs 100% or 99% reliability. He puts open-source models six to 12 months behind proprietary ones.
- **Evaluation first.** He advises building an evaluation set for the job to be done and tracking it over time, rather than eyeballing single examples, and cites Lance Martin's AutoEvaluator for question answering.
- **Break problems down.** LLMs tend to fail when given too much at once; Fischer says narrow tasks with structured, typed outputs can be unit tested, and he is building a TypeScript framework for reliable agents with self-healing JSON outputs.
- **TypeScript versus Python.** Fischer calls TypeScript the largest programming language and says hosted APIs unlock application developers; he ported scikit-learn to TypeScript (about 260 generated classes calling a Python subprocess). Benson pushes for Rust and WebAssembly access, which Fischer sees as a future runtime target.
- **Agents as programs.** Fischer describes LLMs as a new CPU and agents as programs, a natural-language abstraction whose structure is a directed graph of LLM and tool calls.

## Quotes

> "Break your problem up into sub-problems. And how to do that is a whole art form in itself." — Travis Fischer

> "I like to think of the open source kind of state of the art as, you know, six to 12 months behind the proprietary versions." — Travis Fischer
