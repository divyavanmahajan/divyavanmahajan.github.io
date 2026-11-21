---
title: >-
  Debugging the Internet with AI agents – with Itamar Friedman of Codium AI and
  AutoGPT
description: >-
  CodiumAI's Itamar Friedman argues that verifying code logic needs LLMs
  combined with classic testing techniques, and that spec, tests and code will
  be kept in sync by AI agents.
pubDate: '2023-05-25'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/debugging_the_internet_with_ai_agents_with_itamar_friedman_of_codium_ai_and_autogpt
durationMin: 63
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Itamar Friedman
tags:
  - ai-coding-assistants
  - software-testing
  - agents
  - code-integrity
  - autogpt
draft: false
---
## Thesis

Itamar Friedman, CEO and co-founder of CodiumAI, argues that neither large language models nor traditional techniques can verify code logic on their own, but combined they can move developers toward "zero bugs". His longer-term vision is an extreme form of "don't repeat yourself": AI agents keep the specification, the tests and the implementation aligned, while the developer stays in the driving seat.

## Key points

- **LLMs plus classic analysis.** Friedman says static and dynamic analysis, ASTs and mutation testing are inefficient on their own; AI can, for example, point mutation testing at the most useful places to mutate, and being right 80% of the time already beats random selection.
- **The product.** In his demo of the VS Code and JetBrains extension, CodiumAI writes a code analysis ("spec"), generates six tests by default, runs them and offers "reflect and fix", which can conclude that the bug is in the code rather than the test. One feature call can trigger a dozen model calls, with different models benchmarked for different properties.
- **Traction.** Friedman reports high thousands of weekly active users seven weeks after launch, doubling every two to three weeks, and sees more sharing inside companies than on social media.
- **Model strategy and evals.** He advises using the best available model first, finding its "glass ceiling", then fine-tuning, and only later training your own; CodiumAI aims for its own models in 2024. He proposes level-based, property-based benchmarks for generative systems.
- **Designated versus general agents.** Friedman contrasts CodiumAI's narrow, reliable agents with AutoGPT's general "swarm" approach; he contributes tests to AutoGPT and suggests CodiumAI could become one of its agents.
- **Developer roles.** Over the next five years he expects developers to drive teams of agents, with strong low-level programmers building more sophisticated software.

## Quotes

> "LLM by themself cannot really do the job of verifying code logic and, and neither like the traditional ones, so you need to merge them." — Itamar Friedman

> "we're actually, true to this month, overestimating what gen AI can do. Overestimating, but we're underestimating what it can do in the future." — Itamar Friedman
