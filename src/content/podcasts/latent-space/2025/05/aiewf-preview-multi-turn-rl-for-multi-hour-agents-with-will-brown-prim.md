---
title: >-
  [AIEWF Preview] Multi-Turn RL for Multi-Hour Agents — with Will Brown, Prime
  Intellect
description: >-
  Will Brown argues the next frontier is reliable agents trained with multi-turn
  reinforcement learning, turn-level credit assignment and flexible LLM-judged
  rewards, using Claude 4 as the backdrop.
pubDate: '2025-05-23'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/aiewf_preview_multi-turn_rl_for_multi-hour_agents_with_will_brown_prime_intellect
durationMin: 40
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Will Brown
tags:
  - reinforcement-learning
  - agents
  - claude
  - reward-hacking
  - evals
draft: false
---
## Thesis

Will Brown, who now leads reasoning research at Prime Intellect, argues that reasoning models were a stepping stone and that what users actually want is agents that can carry out long, multi-step tasks. He thinks the way to get there is multi-turn reinforcement learning with tool use, where each turn is credited separately and rewards come from LLM judges rather than brittle hand-written parsers. Hosts swyx and Alessio Fanelli use the Claude 4 launch as the starting point.

## Key points

- **Claude 4 reads as steady progress.** Brown sees steady, linear progress rather than a paradigm shift. Anthropic put coding and tool use first, and extended thinking can now call tools in Opus 4.
- **Less reward hacking.** He welcomes Anthropic's reported drop on an internal over-eagerness benchmark from about 45% to 15% compared with Sonnet 3.7, which he says would add unrequested files and helper functions. He sorts models by how far he trusts them inside a codebase.
- **Thinking budgets.** Brown says budgets can be trained into the RL objective so models learn to target a length. He suspects "reasoning effort" settings are token budgets underneath, and sees them as a cost and latency control for developers.
- **The "snitching" controversy.** He reads Anthropic's stress-test results as conflicting-goal scenarios built on purpose to draw out behaviour, and warns against over-reading them in either direction.
- **Turn-level credit assignment.** His paper with intern Silong, begun at Morgan Stanley and built on his verifiers repo, found small models avoid tools or make dummy searches. Rewarding searches that actually retrieved the ground-truth answer, and adjusting the GRPO advantage per turn, fixed this.
- **Evals and rewards.** Brown thinks academia is well placed to build evals, since eval companies selling to labs face a credit-rating-agency conflict (swyx's comparison). He prefers LLM-judged rewards because math parsers are long and still only about 98% accurate.

## Quotes

> "Like you want the models to like do, do the thing and no more." — Will Brown

> "RL was gonna work and that that was going to intersect with agents where the solution was gonna be like RL with tool use." — Will Brown
