---
title: The Philosophy of Software Design – with John Ousterhout
description: >-
  Stanford's John Ousterhout argues that as AI tools take over low-level coding,
  software design, the decomposition of complexity into deep modules, becomes
  the developer's main job.
pubDate: '2025-04-09'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/the-philosophy-of-software-design'
youtube: 'https://www.youtube.com/watch?v=lz451zUlF-k'
durationMin: 81
hosts:
  - Gergely Orosz
guests:
  - John Ousterhout
tags:
  - software-design
  - ai-coding
  - tdd
  - code-review
  - complexity
draft: false
---
## Thesis

John Ousterhout, Stanford professor and author of A Philosophy of Software Design, tells Gergely Orosz that design is fundamentally about decomposing large systems to eliminate or hide complexity. He expects AI tools to churn out ever better low-level code, so design will take up a larger share of developers' time, yet universities barely teach it.

## Key points

- **Tactical tornadoes and 10x engineers.** Ousterhout describes tactical tornadoes as prolific but sloppy programmers who leave cruft behind. His 10x engineer instead writes less code with cleaner designs. Orosz notes that AI coding tools resemble tactical tornadoes that never say no.
- **Design it twice.** Ousterhout says bright students latch onto their first idea. His best example is the Tk toolkit API: his second design, sketched on a long flight, made Tk popular, and the exercise cost only 1% or 2% of the project time. Orosz compares it to "alternatives considered" sections in Uber design docs.
- **Deep modules and errors.** A deep module hides a lot of functionality behind a simple interface. Ousterhout argues that every thrown exception adds complexity for callers, but warns that "defining errors out of existence" is like a spice and is often misread as ignoring errors.
- **Whiteboard consensus.** In heated meetings he lists every argument for and against on a whiteboard, bans repeats, then takes a straw poll, which he says almost always yields strong consensus among goal-aligned teams.
- **Disagreements with Clean Code.** He argues Robert Martin's push for very short methods creates entangled interfaces, that TDD encourages tactical point solutions (except writing a test first when fixing a bug), and that interfaces and member variables need comments.
- **Teaching and the kernel.** His Stanford course, modelled on English writing classes, has teams build Raft and revise after he reviews every line. He is now upstreaming Homa, a data-centre transport protocol from his PhD student, into Linux, using ChatGPT to navigate under-commented kernel code.

## Quotes

> "I think software design is going to become more and more important." — John Ousterhout

> "I'm not a fan of TDD because I think it works against design." — John Ousterhout
