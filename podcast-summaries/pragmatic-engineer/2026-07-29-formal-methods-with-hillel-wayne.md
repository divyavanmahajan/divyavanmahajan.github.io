---
title: "Formal methods with Hillel Wayne"
date: 2026-07-29
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/formal-methods-with-hillel-wayne"
youtube: "https://www.youtube.com/watch?v=KSkcgIYQy0U"
duration_min: 84
hosts: ["Gergely Orosz"]
guests: ["Hillel Wayne"]
description: "Hillel Wayne argues formal methods like TLA+ pay off for distributed-system designs, but AI will only modestly widen their use, and most engineers should stop at property-based testing."
tags: ["formal-methods", "tla-plus", "distributed-systems", "property-based-testing", "software-engineering"]
source_transcript: "pragmatic-engineer/episodes/2026/07/2026-07-29-formal-methods-with-hillel-wayne.md"
draft: false
---

## Thesis

Formal methods consultant Hillel Wayne argues that specifying and model-checking a simplified version of a system catches design bugs, especially concurrency bugs, that testing and review miss. He also says full specs of real-world software are impractical, so formal methods stay niche. AI is making them more popular, but not mainstream. Gergely Orosz closes by agreeing that formal verification of everyday code is unlikely to take off, even with AI.

## Key points

- **Are we engineers?** For his Crossover Project, Wayne interviewed about 15-20 people who had worked in both traditional engineering and software. He changed his view and now says software developers probably are engineers. All of them wished their old fields had version control like software's.
- **Why specs are hard.** Wayne contrasts a "max of a list" spec with "find the file with the most lines", which pulls in encodings, permissions, symlinks and binaries. An imperative program that is right 99% of the time is usually good enough.
- **TLA+ in practice.** Wayne demos a trading-platform model where TLA+ finds a stale-offer bug in 53 states. He also shows an Alloy access-control model with a non-transitive permission bug. He cites AWS's 2014 paper, in which a DynamoDB/S3 bug needed a 35-step error trace.
- **Concurrency is a practice problem.** Wayne argues engineers are bad at race conditions because feedback takes months, while a model checker reports race, timeout and time-of-check-to-time-of-use bugs in seconds. Orosz compares this to migrations, which engineers rarely do often enough to get good at.
- **Stop at property-based testing.** Wayne demos Hypothesis generating and shrinking random lists to expose a buggy max function. He recommends this lighter method for most engineers.
- **AI and specs.** Wayne says LLMs are good at fixing syntax, explaining error traces and boilerplate, but bad at inventing meaningful properties. He sees AI lifting adoption from maybe 0.1% to 0.3%. On jobs, he worries that software work will become lower-paid, ordinary white-collar work.

## Quotes

> "The core tension of engineering is between how expensive it is to make a mistake and how quickly you can iterate." — Hillel Wayne

> "To get good results, you have to already know how to get good results without it. It just helps you get good results faster." — Hillel Wayne
