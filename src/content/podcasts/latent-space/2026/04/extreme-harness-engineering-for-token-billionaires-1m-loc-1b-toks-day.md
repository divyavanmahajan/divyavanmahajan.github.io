---
title: >-
  Extreme Harness Engineering for Token Billionaires: 1M LOC, 1B toks/day, 0%
  human code, 0% human review — Ryan Lopopolo, OpenAI Frontier & Symphony
description: >-
  When agents write all the code, the engineer's job becomes harness
  engineering: encoding the team's taste and non-functional requirements as
  text, tools and checks the agent can see.
pubDate: '2026-04-07'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/extreme_harness_engineering_for_token_billionaires_1m_loc_1b_toks_day_0_human_code_0_human_review_ryan_lopopolo_openai_frontier_symphony
durationMin: 73
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Ryan Lopopolo
tags:
  - harness-engineering
  - coding-agents
  - codex
  - agent-orchestration
  - developer-productivity
draft: false
---
## Thesis

Ryan Lopopolo of OpenAI Frontier describes a five-month experiment in which his small team built a million-line Electron app without writing any code themselves. Since models and tokens are effectively unlimited, he argues the only scarce resource is human attention, so engineers should spend it on building the harness: docs, lints, review agents and tools that put every non-functional requirement into the agent's context.

## Key points

- **Paying the upfront cost.** Starting with an early Codex mini model, the first month and a half was ten times slower than coding by hand. Whenever the model could not do something, the team broke the task into smaller building blocks, which later let them out-produce any single engineer.
- **Adapting to each model.** When GPT 5.3 added background shells and became less willing to wait on blocking scripts, the team moved the build from Make through Bazel and Turbo to Nx within a week to keep builds under one minute.
- **Text as the control surface.** A short AGENTS.md table of contents points to skills and docs such as core beliefs and a quality score. When a page reveals a missing timeout, Lopopolo has Codex both fix it and update the reliability docs. Review agents are told to merge unless an issue is above P2, and author agents may push back.
- **Humans out of the merge loop.** Most human review now happens after merge. A "land" skill drives a PR through reviews, CI flakes, conflicts and the merge queue. Lopopolo says small dependencies of a few thousand lines can now be pulled in-house in an afternoon.
- **Symphony.** At 5-10 PRs per engineer per day, switching between terminals became exhausting, so the team built Symphony, an Elixir orchestrator that runs agents from Linear tickets and throws away rejected work so it can restart from scratch. It is distributed as a spec for others to rebuild, and he says it raised productivity about fivefold.
- **Limits.** He says models still struggle to turn a new product idea into a prototype and with the hardest refactorings.

## Quotes

> "The only fundamentally scarce thing is the synchronous human attention of my team." — Ryan Lopopolo

> "There's this really neat thing that, like, the models fundamentally crave text." — Ryan Lopopolo
