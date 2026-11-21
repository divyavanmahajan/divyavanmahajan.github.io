---
title: ⚡️How Claude 3.7 Plays Pokémon
description: >-
  Anthropic's David Hershey explains the simple tool-using harness behind Claude
  Plays Pokémon and why the game works as a rough benchmark for long-running
  agents.
pubDate: '2025-03-04'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/how_claude_3_7_plays_pokemon
durationMin: 38
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - David Hershey
tags:
  - agents
  - claude
  - benchmarks
  - agent-harness
  - vision
draft: false
---
## Thesis

David Hershey, who works with customers at Anthropic, argues that Claude Plays Pokémon is a deliberately simple agent harness that shows what a model can and cannot do over very long tasks. Sonnet 3.7 is the first model that clearly makes progress in Pokémon Red, and Hershey reads that as a sign of better course correction in agents generally, while vision and spatial navigation remain weak.

## Key points

- **Origin.** Hershey started the project in June 2024 with Sonnet 3.5 as a way to experiment with long-running agents. Each new model became his way of getting to know it; an early Sonnet 3.7 was the first to catch Pokémon and beat Brock.
- **Harness design.** The agent has three tools: press emulator buttons, edit a knowledge base, and a Navigator tool that walks to an on-screen coordinate. Hershey reverse engineered the game's RAM (with help from Claude Code) to add coordinates and location data, because Claude otherwise hallucinates zone changes.
- **Context management.** The knowledge base is capped at about 8,000 tokens, and after 30 tool-use messages the history is summarised; 30 worked better than 20 or 40. The largest prompts reach about 100,000 tokens, and serious experimentation burns at least thousands of dollars of tokens.
- **Vision is the bottleneck.** Hershey says prompting does not fix navigation. He describes Claude walking in and out of Oak's lab a dozen times, and the stream sat in Mount Moon for over 50 hours.
- **Less prompt over time.** With each model release his main change has been deleting corrective prompt text. Asking it to nickname Pokémon made Claude more protective of them.
- **Evaluation.** His best test is running a configuration about 10 times and measuring how fast it reaches game milestones such as gym badges. Better memory is the main open improvement, though he says new models have mattered more than any harness tweak.

## Quotes

> "It does PhD-level stuff in some ways and like is unable to screech see a screen as well as a four-year-old in other ways." — David Hershey

> "I will say, all of the many, many hours I've spent tweaking around the edges of this thing, nothing quite does it like a new model though." — David Hershey
