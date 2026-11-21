---
title: Does AI Understand the Machine It Runs On? | Inside OpenAI
description: >-
  OpenAI's Philippe Tillet and Matthew Ferrari explain how models now optimise
  OpenAI's own inference stack, and why humans still pick the bottlenecks and
  own the risk.
pubDate: '2026-09-09'
show: turing-post
url: >-
  https://www.turingpost.com/podcast/s/turing_post/does_ai_understand_the_machine_it_runs_on_inside_openai
durationMin: 33
hosts:
  - Ksenia Se
guests:
  - Philippe Tillet
  - Matthew Ferrari
tags:
  - inference
  - efficiency
  - gpu-kernels
  - speculative-decoding
  - ai-for-engineering
draft: false
---
## Thesis

Philippe Tillet (creator of Triton) and Matthew Ferrari, who work on efficiency at OpenAI, tell Ksenia Se that models have moved from writing code to doing real engineering work on the inference stack that serves them. They argue the gains are large, but only when humans point the models at the bottlenecks that matter end to end and keep responsibility for anything that touches production.

## Key points

- **The inflection point.** Ferrari says GPT-5.4 was his moment: with it he redid in a couple of days work that had taken him two months by hand. Tillet agrees, and says the benefit has kept growing with 5.5 and 5.6.
- **From Triton to Gluon.** Tillet says the models were held back by Triton, a high-level language where the compiler makes many decisions. OpenAI built Gluon, a lower-level offshoot, which its models now mostly use on GPUs and on OpenAI's custom accelerator.
- **20% cheaper serving.** Kernel improvements cut the end-to-end cost of serving GPT-5.6 by 20%. Ferrari says the savings can go to more users, lower latency, reliability or price, and he links them to a roughly 20% API price cut. Models also tuned load-balancing heuristics on production traffic data.
- **Where models get autonomy.** Kernels are easy to test, so the team leans on models there. The runtime has many edge cases, so humans stay in the loop. Long autonomous debugging runs are allowed because they do not change production code; they have traced early GB hardware firmware issues to root causes.
- **End-to-end focus.** Ferrari warns that a model will happily optimise something that does not matter. Speculative decoding for 5.6 used the model across architecture, systems and the training loop, which widened the set of ideas the team could try.
- **"The model is different."** Tillet says changing floating-point accumulation order can shift behaviour slightly. Correctness tests now catch this, so an optimisation should not change GPT-5.6's behaviour. He describes reasoning-effort levels as points on a Pareto frontier of intelligence, latency and cost.

## Quotes

> "you don't really want a compiler to make decisions that an AI could make." — Philippe Tillet

> "it almost in a way kind of trivializes the, the implementation of it" — Matthew Ferrari
