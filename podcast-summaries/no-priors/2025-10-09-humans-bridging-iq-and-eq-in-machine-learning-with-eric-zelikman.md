---
title: "Humans&: Bridging IQ and EQ in Machine Learning with Eric Zelikman"
date: 2025-10-09
show: no-priors
episode: 135
url: "https://www.youtube.com/watch?v=Oh0oQnKn9dw"
youtube: "https://www.youtube.com/watch?v=Oh0oQnKn9dw"
duration_min: 37
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Eric Zelikman"]
description: "Eric Zelikman, creator of STaR and Quiet-STaR, argues that labs chasing autonomous IQ should instead build models that understand people's long-term goals and collaborate with them."
tags: ["reasoning", "reinforcement-learning", "human-centric-ai", "memory", "startups"]
source_transcript: "no-priors/episodes/2025/10/2025-10-09-humans-bridging-iq-and-eq-in-machine-learning-with-eric-zelikman.md"
draft: false
---

## Thesis

Eric Zelikman, formerly of Stanford and xAI, tells Sarah Guo that the field measures progress by how long models can run without people, and that this leaves humans with less agency and understanding. His new company, humans&, aims to build models with "EQ": systems that model people's goals over time and help large groups of people work together, which he believes will grow the economic pie rather than just replace slices of it.

## Key points

- **STaR and Quiet-STaR.** Zelikman describes STaR as iteratively generating solutions and learning from those that reach the right answer, plus a variant that asks the model to reason about failed problems. On n-digit arithmetic, the number of digits solved kept rising with more iterations, with "no obvious plateau". Quiet-STaR showed the approach could scale to pre-training-style text and needed to be online with a baseline.
- **Jagged intelligence.** After working on Grok 2 pre-training data, the Grok 3 reasoning recipe and Grok 4 tool use at xAI, he says models can solve some Humanity's Last Exam questions that are non-trivial for PhD researchers, yet are tripped up by trick questions. His advice to users: give more context, and ask questions with checkable, closed-form answers.
- **Autonomy as the wrong metric.** Zelikman points to METR-style task-length benchmarks (two hours to 2.5 hours) and warns that 8-hour autonomous runs and 100,000-line PRs leave people feeling they do not understand what is built.
- **Single-turn training causes harm.** He argues that treating each turn as its own game produces models that never ask clarifying questions or express uncertainty, and links this to sycophancy. He was told at Google that task-centric benchmarks persist partly because they simplify credit assignment between teams.
- **Memory and user models.** Zelikman calls memory underinvested, because independent tasks rarely need it in training. His example: a model that knows you are attending a wedding should account for it when you ask about Paris hotels.
- **Hiring.** humans& wants infra, research and product people "who can build stuff", including distributed systems, fast inference and memory research.

## Quotes

> "Imagine if you had a friend where you had to reexlain everything about yourself to them every time you spoke." — Eric Zelikman

> "The most fundamental thing is that the models kind of don't understand the long-term implications of the things" — Eric Zelikman
