---
title: >-
  Red Teaming o1 Part 1/2–Automated Jailbreaking w/ Haize Labs' Leonard Tang,
  Aidan Ewart& Brian Huang
description: >-
  Haize Labs found o1 fairly difficult but not impossible to jailbreak; they
  argue subtle, dual-use failures and capability-scaling attacks matter more
  than flagrant refusals.
pubDate: '2024-09-14'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/red-teaming-o1-part-1-2-automated-jailbreaking-w-haize-labs-leonard-tang-aidan-ewart-brian-huang/
youtube: 'https://www.youtube.com/watch?v=98V8wVir2HI'
hosts:
  - Nathan Labenz
guests:
  - Leonard Tang
  - Aidan Ewart
  - Brian Huang
tags:
  - ai-safety
  - red-teaming
  - jailbreaking
  - evals
  - openai-o1
draft: false
---
## Thesis

Leonard Tang, Aidan Ewart and Brian Huang of Haize Labs describe their automated red teaming of OpenAI's o1. They found the model harder to jailbreak than earlier generations, but argue the hard problems now are subtle and context-dependent failures, poorly calibrated LLM judges, and attacks that get stronger as models get more capable. Host Nathan Labenz frames the episode around whether safety still improves for free with capability.

## Key points

- **Haize Labs' approach.** Tang says the company started in January, sells to frontier labs including OpenAI, Anthropic and AI21 Labs, and raised a seed round from General Catalyst. Its attacks go beyond gradient-based GCG (its sped-up version is called ACG) to MCTS, evolutionary and reverse language model methods.
- **Transferability is fading.** The guests argue white-box-to-black-box transfer relied on data and model monoculture, which is breaking down as labs use more synthetic data.
- **Automated, with humans in the loop.** They had around a month and focused on a broad misuse taxonomy rather than bio or chem expertise. Tang says off-the-shelf LLM judges are poorly calibrated, so uncertain cases go to human review.
- **Dual use and context.** The team argues safety is context-specific: examples include biotech research via the OpenAI and Moderna partnership, departmental data silos in enterprises, and regulated trading at a bank like Goldman Sachs.
- **What still works.** Multi-turn, long-context attacks and a new encoding attack called bijection learning were effective. Tang credits Brian with an inverse scaling law: larger models were more vulnerable to it.
- **Overall difficulty.** Brian Huang calls jailbreaking o1 "fairly difficult" but not impossible; Tang says o1 "absolutely crushes" formal tasks like maths and coding but felt little better in general chat.

## Quotes

> "Subtle, again, doesn't mean benign." — Leonard Tang

> "The bigger and more capable the model is, the more vulnerable it is to our bijection learning attack." — Leonard Tang
