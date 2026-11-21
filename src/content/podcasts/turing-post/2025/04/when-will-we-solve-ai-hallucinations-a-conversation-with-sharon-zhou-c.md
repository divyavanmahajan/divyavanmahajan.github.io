---
title: >-
  When Will We Solve AI Hallucinations? A conversation with Sharon Zhou, CEO @
  Lamini
description: >-
  Lamini's Sharon Zhou argues hallucinations are a solvable technical problem:
  editing model weights for factual recall can lift enterprise accuracy to about
  90% on objectively defined tasks.
pubDate: '2025-04-30'
show: turing-post
url: >-
  https://www.turingpost.com/podcast/s/turing_post/when_will_we_solve_ai_hallucinations_a_conversation_with_sharon_zhou_ceo_lamini
durationMin: 34
hosts:
  - Ksenia Se
guests:
  - Sharon Zhou
tags:
  - hallucinations
  - fine-tuning
  - enterprise-ai
  - open-source-models
  - ai-education
draft: false
---
## Thesis

Sharon Zhou, co-founder and CEO of Lamini, argues that hallucinations are a technical problem, not a philosophical one. For many enterprises, a hallucination simply means that certain tokens must be deterministic in a given context. Her team addresses this by building factual recall into the model weights. She also argues that more people, starting with developers, should be able to steer models, and that the gains are largest when a use case has objective outputs.

## Key points

- **Why Lamini exists.** Zhou studied classics and worked as an enterprise product manager before doing a PhD on generative models with Andrew Ng. She says people who understand their own problems are best placed to steer models toward them. Lamini moved from text-to-SQL to general fine-tuning, then narrowed to hallucinations after talking to 300 potential customers.
- **Weights instead of external retrieval.** Lamini's recipe alters the LoRA adapter layer into a mixture of experts. Zhou describes this as a learned index inside the weights, as opposed to an external retriever as in RAG.
- **Enterprise evals over benchmarks.** Zhou says customers ignore MMLU and text-to-SQL benchmarks such as Spider and Bird, so Lamini helps them build easy/medium/hard internal evals. She cites Colgate going from 30% accuracy with OpenAI's latest model to about 90%, and another Fortune 100 company going from 6% to 90%. A global 2000 biotech firm hopes to cut three-to-five-year cancer research timelines to weeks.
- **Objective outputs matter most.** Zhou argues that subjective goals give a model "multiple North Stars". That is why text-to-SQL suits Lamini: everyone can agree when a query has failed.
- **Agents and RAG.** Zhou says researchers are puzzled by the hype. RAG is information retrieval, "the ultimate retrieval is Google", and agents are an object-oriented view of the same models. She now accepts that the agent framing helps non-experts.
- **Open models and education.** Lamini builds on Llama, DeepSeek and Mistral, and partners closely with Meta. Zhou's thesis is that customers should own their models. She wants post-training to become as easy as prompting. She teaches millions on Coursera and once explained neural networks to policymakers using only multiplication and addition.

## Quotes

> "And we realized it was actually a technical problem, not a philosophical one." — Sharon Zhou

> "I believe that people who understand their own problems best are, when given the right tools, are best suited to solve them." — Sharon Zhou
