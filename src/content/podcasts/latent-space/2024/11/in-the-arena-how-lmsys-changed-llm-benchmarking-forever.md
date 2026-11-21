---
title: 'In the Arena: How LMSys changed LLM Benchmarking Forever'
description: >-
  Chatbot Arena's leads argue that crowdsourced pairwise votes, analysed after
  the fact with statistical controls, measure open-ended model quality in ways
  static benchmarks cannot.
pubDate: '2024-11-01'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/in_the_arena_how_lmsys_changed_llm_benchmarking_forever
durationMin: 41
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Anastasios Angelopoulos
  - Wei-Lin Chiang
tags:
  - llm-evaluation
  - benchmarks
  - chatbot-arena
  - statistics
  - red-teaming
draft: false
---
## Thesis

Wei-Lin Chiang and Anastasios Angelopoulos, the Berkeley PhD students who lead Chatbot Arena, argue that generative models cannot be fully judged with fixed answer keys. Open-ended tasks need human pairwise preferences. Their approach is to collect organic votes and then mine the data afterwards, using regression to separate out style, length and other confounders without changing how the data is collected.

## Key points

- **Origins.** Chiang says the Arena grew out of Vicuna, a Llama 1 fine-tune trained on ShareGPT conversations. The team had no good way to evaluate it, so they built anonymous side-by-side battles where the community votes.
- **Method.** Angelopoulos explains that the Arena score is a Bradley-Terry-style logistic regression on model identity. Adding coefficients for length and markdown features gives "style control", and the same method could adjust for cost or latency.
- **Who votes.** The guests say 20-30% of users ask coding questions, so the voters are enthusiasts and power users, not the general population. To filter noise, they built automated categories such as coding, math, instruction following and hard prompts, and released the pipelines as open source.
- **o1.** The guests say o1 slowed the interface because responses take 30-60 seconds or more. Its large lead on technical categories showed that the leaderboard was not saturated.
- **Private testing.** Responding to claims that labs test several anonymous variants and release the best, Angelopoulos says simulations show little selection bias from about five models. A Bonferroni correction could address it, and fresh votes correct any early inflation over time.
- **Next steps.** Plans include Red Team Arena (which ranks users as well as models), RouteLLM for routing between models, a REPL for running code, and spinning the Arena off from the LMSYS student group.

## Quotes

> "And what that's telling us is that it's not saturated yet." — Anastasios Angelopoulos

> "static benchmarks are in-intrinsically to s-some extent unable to measure generative model performance." — Chatbot Arena guest
