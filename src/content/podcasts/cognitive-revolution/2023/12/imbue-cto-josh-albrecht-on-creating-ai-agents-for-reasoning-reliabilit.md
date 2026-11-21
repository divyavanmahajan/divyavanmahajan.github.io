---
title: >-
  Imbue CTO Josh Albrecht on Creating AI Agents for Reasoning, Reliability, and
  Robustness
description: >-
  Imbue's CTO argues reliable agents will come from breaking tasks down, writing
  code and spending compute wisely on mid-sized models, not from ever-larger
  single training runs.
pubDate: '2023-12-02'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/imbue-cto-josh-albrecht-on-creating-ai-agents-for-reasoning-reliability-and-robustness/
youtube: 'https://www.youtube.com/watch?v=pQgL91Y7Pvc'
durationMin: 82
hosts:
  - Nathan Labenz
guests:
  - Josh Albrecht
tags:
  - ai-agents
  - reasoning
  - coding-agents
  - compute
  - hyperparameter-optimization
draft: false
---
## Thesis

Josh Albrecht, co-founder and CTO of Imbue, tells Nathan Labenz that agents become useful only when each step is reliable, and that the route there is automatic task decomposition, code written by the agents themselves, and better data, rather than training the biggest possible model. He describes Imbue as a "research company" that is still pre-product but building tools its own staff use.

## Key points

- **Reliability compounds.** Albrecht argues that at 80% per-step accuracy a ten-step task usually fails, so agents need 99% or better per step. He expects systems that handle longer tasks to appear over the next year or two.
- **Limits of next-token models.** He says transformers learn many representations, most not matching reality; they learn modular rather than general addition, and break when Python's print and len are swapped. He thinks extra modalities, especially video, push models towards more robust representations.
- **Decomposition and code.** Albrecht says the demo behind the $200 million raise automatically broke questions on academic datasets into sub-questions and reassembled the answers. He expects most new code to sit in agents' inner loops, citing Jim Fan's Eureka and Voyager papers.
- **Compute strategy.** The 10,000 H100s are bought by Voltage Park, with Imbue renting access. Rather than a huge single run, Albrecht prefers models of around 200 billion parameters, which he estimates would take 45 days on 4,000 H100s, and says fine-tuned Llama beats GPT-4 on many tasks. He advises FP16 over FP8 for large training runs for now.
- **CARBS.** Imbue's cost-aware hyperparameter optimizer combines Bayesian optimization with natural evolution strategies; Albrecht says it runs overnight and maps how every parameter changes with scale.
- **Policy and team.** Imbue used language models to analyse thousands of public comments to the NTIA. Albrecht calls the executive order and UK AI Safety Summit more measured than he expected. The company had 27 people.

## Quotes

> "If you're right 80% of the time and you do 10 things in a row, you're actually fairly likely to fail." — Josh Albrecht

> "When we fine-tune Llama, we see better than GPT-4 performance on a lot of tasks." — Josh Albrecht
