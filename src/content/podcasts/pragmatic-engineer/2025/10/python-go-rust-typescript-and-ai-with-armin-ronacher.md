---
title: 'Python, Go, Rust, TypeScript and AI with Armin Ronacher'
description: >-
  Flask creator Armin Ronacher argues language choice still matters in the age
  of coding agents, explains why he picked Go for his startup, and says
  TypeScript did not measurably cut errors.
pubDate: '2025-10-08'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/python-go-rust-typescript-and-ai'
youtube: 'https://www.youtube.com/watch?v=45kVol96IlM'
durationMin: 74
hosts:
  - Gergely Orosz
guests:
  - Armin Ronacher
tags:
  - programming-languages
  - agentic-coding
  - error-handling
  - startups
  - python
draft: false
---
## Thesis

Armin Ronacher, creator of Flask and an early engineer at Sentry, argues that AI coding agents make the choice of programming language more important, not less, because agents perform better in some languages than others. He describes how he went from sceptic to heavy user of Claude Code and Codex for his new startup, while warning that agentic coding can push people into unhealthy work patterns.

## Key points

- **Python 2 to 3.** Ronacher says the migration took ten years or more and only worked once people accepted that libraries had to support both versions. He notes that Rust later cited it when designing its edition system.
- **Picking a language.** He calls Rust a good fit for binary data, load balancers, databases and WebAssembly, but too slow to compile and too rigid for a startup's rapid iteration. He chose Go for his email-parsing startup because it is pragmatic, and avoids server-side TypeScript because it is hard to build anything with fewer than 500 npm dependencies.
- **Agents and languages.** Ronacher had an agent write the same kind of program 10 times in different languages and found it did much better in Go than in Python, and much better than in Rust.
- **Why he changed his mind.** His view shifted between February and May. He says Claude built a debugging visualiser of about 5,000 lines in 30 minutes, where the same kind of tool took three weeks at Sentry, and that more than 80% of his startup's code is now written by agents. He still wants to hire people, because Claude is not a human.
- **Work intensity.** Ronacher compares agentic coding to a slot machine and criticises startups that advertise "996" hours, pointing out that early founders and later employees get very different rewards.
- **Errors.** From his time at Sentry, he says TypeScript adoption had no measurable effect on JavaScript error rates, while React hydration errors created a new class of bugs. He argues runtimes should carry richer error context, such as context locals.

## Quotes

> "I just noticed how good Go code scales for AI because the abstractions are very thin." — Armin Ronacher

> "I think the human will stay in the loop longer than we want and in many more cases than we want." — Armin Ronacher
