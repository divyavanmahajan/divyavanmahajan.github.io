---
title: Context engineering with Dex Horthy
description: >-
  Dex Horthy argues that coding agents work best when engineers manage context
  deliberately and keep humans at the design checkpoints, because unread AI code
  degrades a codebase within months.
pubDate: '2026-07-15'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/context-engineering-with-dex-horthy'
youtube: 'https://www.youtube.com/watch?v=Usufn8IQJgw'
durationMin: 92
hosts:
  - Gergely Orosz
guests:
  - Dex Horthy
tags:
  - context-engineering
  - coding-agents
  - software-factories
  - ai-assisted-development
  - code-quality
draft: false
---
## Thesis

Dex Horthy, CEO and cofounder of HumanLayer, argues that output quality from LLMs depends almost entirely on what goes into the context window, and that this follows from how transformer attention works. He tried a "lights off" software factory where nobody read the code and shut it down after four months. His recommendation is to "token smarter": put human judgment at the points with the most leverage, such as design and architecture, and let agents do the rest.

## Key points

- **Where context engineering came from.** Horthy says he named the term after talking to about 100 AI engineers who had dropped LangChain and CrewAI for hand-written LLM calls. That work became his 12-Factor Agents repo; factor three is "own your context window".
- **Smart zone and dumb zone.** A bigger context window does not make the model smarter. Horthy suggests staying around 100K tokens on smaller models and 200K on Opus 4.8-class models. Past that, models do desperate things like deleting a .env file.
- **Trajectory.** Horthy says only size, information quality, missing information and trajectory matter. Models are autoregressive, so repeated corrections breed more mistakes, and "you're absolutely right" means start a fresh session.
- **The failed dark factory.** HumanLayer stopped reading agent code in July 2025. By November Opus 4.1 could not find the root cause of a production bug, a mis-routed primary key, and getting familiar with the codebase again took three weeks. Horthy blames SWE-bench-style training, which ignores maintainability.
- **Research, design, plan.** In his RPI workflow each phase runs in a fresh session, with a compressed markdown doc passed between phases. Humans review the design, where models are weakest. He discards the docs after each task so they can't drift from the code.
- **Three factory options.** Horthy says you can turn the lights off, review every line for a 30-50% lift, or put planning time where it has leverage and move two to three times faster. His team's nightly "slow loops" open small cleanup PRs that a person reviews.

## Quotes

> "I think it takes about three to six months of you shipping all the time with nobody reading the code before you realize like, wow, this is getting way worse" — Dex Horthy

> "The cost function of bad architecture and bad program design can't be evaluated by running the unit test" — Dex Horthy
