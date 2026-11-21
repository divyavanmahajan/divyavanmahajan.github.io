---
title: 'Red-Teaming after Mythos — Zico Kolter & Matt Fredrikson, Gray Swan'
description: >-
  AI models fail in alien ways that scale does not fix, so agents need dedicated
  red teaming and purpose-trained guard models, plus ordinary system security
  around them.
pubDate: '2026-06-22'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/red-teaming_after_mythos_zico_kolter_matt_fredrikson_gray_swan
durationMin: 66
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Zico Kolter
  - Matt Fredrikson
tags:
  - ai-security
  - red-teaming
  - prompt-injection
  - agents
  - guardrails
draft: false
---
## Thesis

Carnegie Mellon professors Zico Kolter and Matt Fredrikson, co-founders of Gray Swan, argue that AI systems bring a new class of vulnerabilities: they can be tricked the way people are, yet fall for things no human would. Because robustness does not improve just by making models bigger, they say it must be trained deliberately, with specialised red-teaming models finding the attacks and a separate filter model enforcing each company's policies.

## Key points

- **Testing frontier models.** Gray Swan tested Anthropic's Mythos preview for indirect prompt injection (IPI), checking whether a coding agent fetching untrusted content stays on task. It runs a red-teaming arena with about 15,000 people on its Discord, and private, NDA-bound arenas for enterprises' pre-release agents.
- **Machines out-attack humans.** Kolter says frontier models are poor automated red teamers because their safety training makes them refuse, so Gray Swan trains its own system, Shade, which beat human red teamers in a recent time-boxed contest. Fredrikson cautions this is not yet superhuman.
- **Humans versus browser agents.** In a challenge where red teamers chose to phish gig workers or prompt-inject browser agents, skilled attackers phished humans 60-70% of the time; a few models were very robust, others easy to inject. Fredrikson notes models still fall for emails no person would obey.
- **Cygnal, the filter.** Gray Swan's guard model sits between user, LLM and tool calls, checking untrusted input and outgoing actions against custom policies. It focuses on whether an agent will actually do something harmful rather than halting a long coding run at every injection attempt. Kolter says it is strong for coding agents but not yet general enough for everything OpenClaw can do.
- **Lethal trifecta and the trade-off.** Kolter explains Simon Willison's trifecta (untrusted input, private data, a way to exfiltrate) and frames the goal as moving the usability-versus-security frontier, while Fredrikson stresses isolation, authentication and access controls. Both say agent identity is unsolved; most agents simply run with the user's permissions.
- **Agents to accelerate the science.** Kolter is newly optimistic that coding agents can make interpretability a real science; Fredrikson sees agents making formally verified code practical.

## Quotes

> "models don't get better by just being bigger, unlike most other areas where models do get better by being bigger." — Zico Kolter

> "we're aware of scenarios that a human would never fall for, that like Opus 4.7 would." — Matt Fredrikson
