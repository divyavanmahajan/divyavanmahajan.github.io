---
title: 'Why performant code matters (but gets widely ignored), with Casey Muratori'
description: >-
  Casey Muratori argues that most software runs far slower than the hardware
  allows because performance is not designed into the architecture, and that
  reading assembly makes the gap visible.
pubDate: '2026-08-26'
show: pragmatic-engineer
url: >-
  https://newsletter.pragmaticengineer.com/p/why-performant-code-matters-but-gets
youtube: 'https://www.youtube.com/watch?v=8xBJPa_480Q'
durationMin: 113
hosts:
  - Gergely Orosz
guests:
  - Casey Muratori
tags:
  - software-performance
  - software-architecture
  - game-development
  - assembly
  - testing
  - ai-coding
draft: false
---
## Thesis

Casey Muratori, founder of Molly Rocket and author of the Computer, Enhance Substack, argues that performance is mostly an architectural property, not something fixed later by tuning hotspots. Developers who know roughly what the hardware can do, and can read assembly, avoid designs that leave software 10 to 100 times slower than it needs to be. Gergely Orosz pushes back with the "premature optimization" argument and draws a parallel between licensable game engines and AI coding.

## Key points

- **Why performance gets ignored.** Muratori cites enterprise buyers who weigh cost and compliance rather than speed, and monopoly platforms that are hard to displace. He sees the tide turning, with products such as File Pilot and the Blick video editor competing on speed; Orosz adds Bun versus npm and Linear versus Jira.
- **Optimize against the theoretical limit.** Muratori says profiling and tweaking only finds a local minimum. Good optimizers first work out what the hardware can theoretically do, then close the gap.
- **Architecture beats hotspots.** His example is code built as a chain of serial server requests: no expert can fix it later without a rewrite. Company blog posts about full rewrites show, he says, that hotspot tuning alone does not work.
- **Read assembly, understand the CPU.** About 20 to 30 instructions cover most compiler output. In Python, A plus B takes on the order of 100 times more instructions than the single add in C. He groups CPU knowledge into data movement and caches, instruction flow, and execution-unit throughput.
- **Clean code and TDD.** Muratori says polymorphism-heavy "clean code" stops the compiler from inlining and optimizing. He treats tests as a cost/benefit decision for each project rather than the driver of development.
- **Games and AI.** He calls licensable engines the games industry's "AI transition": a wave of new creativity, then so many Steam releases that organic discovery is close to impossible without a marketing plan. He writes his game code by hand and thinks it is too early to judge AI's effect.

## Quotes

> "If it was always hotspots that made your performance bad, you'd never have to rewrite the whole thing." — Casey Muratori

> "I would say the part that I don't like about test driven development is the test driven part. I don't think development should ever be driven by tests." — Casey Muratori
