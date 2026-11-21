---
title: 'Why AI Still Needs Us? A conversation with Olga Megorskaya, CEO of Toloka'
description: >-
  Toloka CEO Olga Megorskaya argues that in the agent era, humans matter as
  experts and as the benchmark, especially for knowing when an AI agent's plan
  is wrong.
pubDate: '2025-06-19'
show: turing-post
url: >-
  https://www.turingpost.com/podcast/s/turing_post/why_ai_still_needs_us_a_conversation_with_olga_megorskaya_ceo_of_toloka
durationMin: 29
hosts:
  - Ksenia Se
guests:
  - Olga Megorskaya
tags:
  - human-in-the-loop
  - training-data
  - ai-agents
  - benchmarks
  - synthetic-data
draft: false
---
## Thesis

Olga Megorskaya, CEO of Toloka, tells Ksenia Se that the human role in AI has moved from crowd labelling to expert judgment and "co-agency" with agents. In her view the most valuable human contribution now is recognising when an agent's plan is wrong. She rejects the idea of humans as "callable functions". She describes humans as the source of ground truth and the benchmark that models are measured against, and doubts that a "complete AGI" will remove that need.

## Key points

- **Three eras of data work.** Megorskaya says classical ML needed simple labels (cat, dog, pedestrian) across thousands of projects. Foundation models needed PhDs, senior engineers and lawyers. Agent tasks are both complex and varied. Toloka's average task time, once hard-coded at thirty seconds, can now be ten hours or several days per data item.
- **What co-agency means.** For Megorskaya, co-agency means a human and an AI agent working on the same task. Agents break tasks into steps, plan them and check that humans don't skip steps. Humans catch the cases where the agent's plan is wrong, which she puts at about 30%, and she calls that judgment the key signal for the system.
- **Training people like models.** Toloka trains experts to distrust LLMs by showing them labelled examples of right and wrong cases. After ChatGPT, Toloka shifted to recruiting practising professionals, since full-time AI trainers lose touch with their field.
- **Synthetic data has a ceiling.** Toloka's clients, which she names as Anthropic, Amazon, Microsoft and Poolside, can generate synthetic data themselves. Toloka uses hybrid pipelines: experts define a taxonomy, a synthetic skeleton is generated, then experts validate and improve it.
- **Benchmarks.** Public benchmarks leak fast, so companies commission private ones. She mentions Sierra's tau-bench ("TAO" in the transcript), SWE-bench, GAIA, and an MLCommons red-teaming dataset Toloka contributed to. She prefers several specialised benchmarks to one general one.
- **The power of text.** Her favourite book, Umberto Eco's *Foucault's Pendulum*, shows how a short string of letters can produce very different stories, which she sees playing out in LLMs.

## Quotes

> "And this is ironically the most important skill that we are training our experts right now is to distrust LLM" — Olga Megorskaya

> "Because ultimately the whole concept of AI is that human expert is not an executor. Human expert is a benchmark." — Olga Megorskaya
