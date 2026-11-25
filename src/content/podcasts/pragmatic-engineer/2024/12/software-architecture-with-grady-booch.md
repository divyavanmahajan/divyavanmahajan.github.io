---
title: Software architecture with Grady Booch
description: >-
  Grady Booch traces software architecture from defence systems to cloud
  building blocks, arguing architecture is about costly decisions and that LLMs
  alone are the wrong architecture for AGI.
pubDate: '2024-12-04'
show: pragmatic-engineer
url: >-
  https://newsletter.pragmaticengineer.com/p/software-architecture-with-grady-booch
youtube: 'https://www.youtube.com/watch?v=u7WaC429YcU'
durationMin: 91
hosts:
  - Gergely Orosz
guests:
  - Grady Booch
tags:
  - software-architecture
  - history-of-computing
  - uml
  - object-oriented-design
  - llms
draft: false
---
## Thesis

Grady Booch, IBM Fellow and co-author of UML, argues that the history of software engineering is one of rising levels of abstraction. Many architectural decisions are now built into frameworks and cloud services, so the architect's job has shifted to systemic and economic choices. He sees LLMs as useful but unreliable, and not a path to AGI on their own.

## Key points

- **Defence roots.** Booch says complex systems began in defence, not commerce, citing SAGE and the software crisis that led to the NATO conference. The Ada language prompted the Booch method, which decomposed systems into classes and objects rather than algorithms.
- **Rational and UML.** He recounts founding Rational with Paul Levy and Mike Devlin, building the R1000 and the Rose tool, then unifying his method with James Rumbaugh's OMT and Ivar Jacobson's use cases. He says turning UML into a programming language in version 2.0 was "a profound mistake" and started its decline, after peaking at 20 to 30% market penetration. IBM bought Rational for about $2.7 billion.
- **Saying no to Bill Gates.** Booch says Gates offered him the role of chief architect for enterprise at Microsoft. He declined, describing the company at the time as dysfunctional, with rival Office and Windows groups.
- **Three axes.** Booch frames how much architecture a project needs by ceremony, risk and complexity. Startups building familiar apps need little; systems such as the James Webb Space Telescope still use UML.
- **Migrations and entropy.** He argues migrations stay hard because design rationale lives outside the code, and asks how the Linux kernel will drift once Linus Torvalds retires.
- **LLMs.** Booch calls LLMs "unreliable narrators" and, with Gary Marcus, says scaling is hitting limits. He favours neuro-symbolic, embodied systems such as his SELPH work with NASA's Robonaut 2. His advice to new engineers: learn widely, find an unoccupied niche, and have fun.

## Quotes

> "Architecture represents the set of significant design decisions that shape the form and function of a system where significant is measured by cost of change." — Grady Booch

> "the code is the truth, but the code is not the whole truth." — Grady Booch
