---
title: >-
  Artificial Analysis: Independent LLM Evals as a Service — with George Cameron
  and Micah-Hill Smith
description: >-
  Artificial Analysis argues that independent, repeatable benchmarking of
  intelligence, cost and speed is essential as labs target known evals, and
  introduces new hallucination, agentic and openness measures.
pubDate: '2026-01-08'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/artificial_analysis_independent_llm_evals_as_a_service_with_george_cameron_and_micah-hill_smith
durationMin: 78
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - George Cameron
  - Micah Hill-Smith
tags:
  - evals
  - benchmarks
  - hallucination
  - ai-costs
  - open-models
draft: false
---
## Thesis

George Cameron and Micah Hill-Smith, co-founders of Artificial Analysis, argue that model numbers are only trustworthy when one independent party runs every model the same way and reports intelligence alongside cost and speed. Because whatever gets measured gets targeted by labs, they keep building new evals, now covering hallucination, white-collar agentic work and openness, and they expect both the falling cost of intelligence and rising total AI spend to continue.

## Key points

- **Business model.** Started as a side project after Hill-Smith found that building a legal AI assistant was mostly benchmarking. The company now has just over 20 people, sells reports and private benchmarking to enterprises and AI companies, and nobody pays to appear on the public site.
- **Keeping it honest.** Labs prompt models differently when reporting their own scores, so Artificial Analysis runs everything itself, uses many repeats to reach about plus or minus one point at 95% confidence on its Intelligence Index, and runs a "mystery shopper" policy using accounts the labs cannot identify.
- **Omniscience index.** Scores run from -100 to 100 and penalise wrong answers so that saying "I don't know" pays. Claude models had the lowest hallucination rates; hallucination did not correlate with intelligence, while knowledge accuracy tracked total parameter count closely, leading the hosts to speculate that Gemini 3 Pro may be in the 5 to 10 trillion parameter range.
- **GDPval-AA and Stirrup.** They turned OpenAI's GDPval tasks into an Elo-scored eval graded by Gemini 3 Pro. Models did better in their minimalist harness, released as Stirrup, than in the labs' own chatbots.
- **Openness index.** An 18-point score covering weights, licence, data and training-code disclosure; AI2's Olmo leads.
- **The smiling curve.** GPT-4-level intelligence is now over 100 times cheaper, yet total spend rises because frontier models, reasoning tokens and long agentic runs multiply usage. They say token efficiency and number of turns now matter more than the reasoning versus non-reasoning label.

## Quotes

> "the more you go into building something using LLMs, the more each bit of what you're doing ends up being a benchmarking problem." — Micah Hill-Smith
