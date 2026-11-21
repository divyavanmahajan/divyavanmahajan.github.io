---
title: >-
  AI Agents That Reason and Code with Imbue Co-Founders Kanjun Qiu and Josh
  Albrecht
description: >-
  Imbue's founders treat agents as a reliability problem, solved step by step
  through reasoning, error correction, code and careful evaluation rather than
  one giant model.
pubDate: '2023-11-16'
show: no-priors
episode: 41
url: 'https://www.youtube.com/watch?v=xvMOsYyAdKk'
youtube: 'https://www.youtube.com/watch?v=xvMOsYyAdKk'
durationMin: 33
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Kanjun Qiu
  - Josh Albrecht
tags:
  - ai-agents
  - reasoning
  - coding-agents
  - evaluation
  - developer-tools
draft: false
---
## Thesis

Imbue co-founders Kanjun Qiu (CEO) and Josh Albrecht (CTO) tell Sarah Guo and Elad Gil that the main obstacle to useful agents is reliability, not a single missing capability. They argue that reasoning, error correction, and moving repeated work into code will make agents gradually more general and autonomous, and that agent building should eventually feel like natural-language programming for everyone.

## Key points

- **Origins.** The founders ran Sourceress, an AI recruiting company they describe as their first agent, and say housemates building GPT-3 convinced them that scaling works. Imbue started around early 2020, when self-supervised learning began working across images, video and language.
- **Two spectra.** The founders place agents on a specific-to-general axis and a copilot-to-autonomous axis, and compare today's agents to lossy Ethernet with no error correction. Albrecht argues language models need an outer loop to decide the next step.
- **Code as specialization.** Albrecht says general agents can write code to replace expensive repeated calls, for example turning 10,000 model calls into a Python function. The founders favour "minimal viable models" for each capability.
- **Serious use.** Imbue builds agents its staff use daily, from a to-do agent for any codebase task to one that fixes type errors in every pull request; agents can call sub-agents. The founders describe progress as moving from 60% to 70% to 80% reliability.
- **Evaluation.** They break outputs into many smaller questions (style, variable names, minimal change, passing tests), which they say also works for non-code tasks such as recruiting.
- **Capital and team.** A large share of the $200 million round from Astera, Nvidia and others goes to compute. The founders say they train state-of-the-art models with about 13-14 people and see recursive self-improvement as a slow 1% daily gain, not a sudden jump.

## Quotes

> "maybe you start out by doing your plane booking with gp4 but eventually you realize like oh actually like this is so expensive and slow" — Josh Albrecht

> "we're a software Dev tooling company but in the future everyone will be a software engineer and so everyone will need de Dev tools" — Kanjun Qiu
