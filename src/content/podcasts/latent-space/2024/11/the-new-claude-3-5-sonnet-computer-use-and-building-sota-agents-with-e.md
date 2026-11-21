---
title: >-
  The new Claude 3.5 Sonnet, Computer Use, and Building SOTA Agents — with Erik
  Schluntz, Anthropic
description: >-
  A minimal agent loop with carefully engineered tools let Claude 3.5 Sonnet
  reach state of the art on SWE-bench Verified; tool design matters more than
  prompts or frameworks.
pubDate: '2024-11-28'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_new_claude_3_5_sonnet_computer_use_and_building_sota_agents_with_erik_schluntz_anthropic
durationMin: 71
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Erik Schluntz
tags:
  - agents
  - swe-bench
  - tool-use
  - computer-use
  - robotics
draft: false
---
## Thesis

Erik Schluntz, who works on tool use, computer use and SWE-bench in Anthropic's product research team, argues that the new Claude 3.5 Sonnet needs very little scaffolding: give it tools and let it loop until it decides it is done. The effort belongs in designing tools the model cannot misuse. He expects the next limit for agents to be whether humans can trust and audit their output.

## Key points

- **Minimal scaffold.** Schluntz's reference agent runs until it finishes or fills the 200K context window, with no hard-coded workflow, loop detection, path pruning or code indexer. Runs sometimes exceed 100 turns. The hosts note it scored 49% on SWE-bench Verified against a previous best of 45%; 3.5 Haiku scored 40.6.
- **Tools over prompts.** A string-replace edit tool proved most reliable; full-file regeneration was more accurate but too costly. Requiring absolute paths and warning against commands that never return, such as Vim, made the tools "foolproof" for the model.
- **Benchmark limits.** SWE-bench covers 12 Python repositories. Failures come from fixing at the wrong level of abstraction and from not looking at images, for example Matplotlib output. A colleague's detailed prompt did better on tasks rated over four hours but worse overall, so Schluntz suggests routing task types to separate prompts.
- **Frameworks and real use.** He advises building without agent frameworks, which hide prompts and make it too easy to add complexity. Real coding agents should ask follow-up questions and have humans approve a plan, as Replit does.
- **Computer use cuts integration work.** At Cobalt Robotics, each elevator API integration took about six months, while a robot arm pressing buttons was deployed in a day, slower and less reliable. He sees computer use the same way and ships it sandboxed by default.
- **Robotics view.** He credits LLMs for common sense and diffusion-inspired motion policies, but compares robotics to self-driving ten years ago: reliability must climb from 95% to 99.9%, and he doubts the unit economics.

## Quotes

> "I would say actually we did more engineering of the tools than the overall prompt." — Erik Schluntz

> "And if you can't find some way to trust that agent's work, it kinda wasn't valuable at all." — Erik Schluntz
