---
title: "Less about Models; More about Architecture"
date: 2026-09-03
show: practical-ai
episode: 370
url: "https://share.transistor.fm/s/ec79b4ac"
youtube: "https://www.youtube.com/watch?v=dZyIjdzZXaE"
duration_min: 46
hosts: ["Daniel Whitenack", "Chris Benson"]
guests: ["Chetan Gupta"]
description: "Enterprises should stop choosing AI models and start designing layered AI architectures, with harnesses, orchestration, their own evals and governance, so models can be swapped as they change."
tags: ["enterprise-ai", "ai-architecture", "ai-sovereignty", "governance", "evals"]
source_transcript: "practical-ai/episodes/2026/09/2026-09-03-less-about-models-more-about-architecture.md"
draft: false
---

## Thesis

Chetan Gupta, Chief AI Officer at Rackspace and formerly head of AI research at Hitachi, argues that generative AI has made AI available to every enterprise without the PhD teams that used to deploy it, so the hard problem is now architecture. His advice: do not commit to any one model family; design a layered stack with harnesses, orchestration, your own evals and governance, so models can be swapped as the market and geopolitics shift.

## Key points

- **From industrial to physical AI.** Gupta describes Hitachi's 2016-2017 bet on industrial AI: predictive maintenance, repair recommendation and quality, then computer vision, and now robotics at scale. He says people in Japan accept robots more readily than people in North America, and that the centre of gravity for industrial robotics is China.
- **Three enterprise questions.** With AI "jagged" (strong at coding, weaker at writing emails), Gupta says firms must decide where to use AI, when a cheaper local model is enough, and how to avoid sending away their IP. He cites the report that a recent Anthropic model hacked the Hugging Face website as a reason governance and assurance matter.
- **Sovereignty for companies, not just states.** Every prompt to an external LLM shares data, context and processes. Gupta argues that enterprises, and eventually individuals, need their own governance, "not someone else's constitution."
- **A layered stack.** Compute, data, model library, inference, harnesses (the machinery that turns a model into an outcome), an orchestration layer over many harnesses, consumption, all wrapped in governance and assurance planes. Rackspace offers this from "chip to outcome" with AMD and its own data centres.
- **Your own evals.** Public benchmarks do not reflect your workloads. Gupta compares eval suites to the "golden dataset" industrial customers once demanded, and says they let you swap models without changing the customer experience.
- **A "mirror org".** At Rackspace, Gupta wants solutions proven on internal workloads before they are sold, and sees governance, assurance and orchestration as the underserved layers.

## Quotes

> "Don't marry into any model family because they will swap in and out both for commercial reasons, geopolitical reasons" — Chetan Gupta

> "stop thinking models and start thinking architectures, right, enterprise architectures for AI." — Chetan Gupta
