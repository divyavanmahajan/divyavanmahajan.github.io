---
title: Humility in the Age of Agentic Coding
description: >-
  Steve Klabnik, a former AI sceptic, argues agentic coding works and is a
  learnable skill, and that developers should re-examine habits like DRY and
  code review instead of dismissing the tools.
pubDate: '2026-03-17'
show: practical-ai
episode: 349
url: 'https://share.transistor.fm/s/7e1ca2c8'
durationMin: 55
hosts:
  - Daniel Whitenack
  - Chris Benson
guests:
  - Steve Klabnik
tags:
  - agentic-coding
  - software-engineering
  - programming-languages
  - rust
  - developer-tools
draft: false
---
## Thesis

Steve Klabnik, co-author of *The Rust Programming Language*, tells Daniel Whitenack and Chris Benson how he went from calling himself an "AI hater" at the start of 2025 to building a programming language, Rue, largely with Claude. He argues that agentic tools now clearly work, that using them well takes practice, and that many software engineering practices are beliefs rather than proven facts, so they deserve rethinking with humility.

## Key points

- **The conversion.** Klabnik says two things changed his mind. One was trying an agentic VS Code extension about two months after such tools first appeared. The other was his mother's boyfriend, a retired non-programmer who uses ChatGPT to draft reports and fact-checks everything. Klabnik concluded that programmers expect determinism, while ordinary users have always treated computers as unreliable.
- **Practices are beliefs.** He points to OpenAI's report that adding developers to an agent-first project increased velocity, which contradicts Fred Brooks's long-held rule. He now cares less about DRY: five duplicate functions can be cleaned up later, which turns "shift left" upside down.
- **Rue's second attempt.** His first try, started in August, stalled on oversized PRs and weaker models. Starting again from scratch around November, he wrote a language spec first and built a test framework linking the spec to example programs, so the agent could check its own work.
- **What Rue is for.** He aims for a language between Rust and Go: strongly typed, faster to compile than Rust, and with no borrow checker, using mutable value semantics borrowed from Swift and a related language. It also tests whether Claude can write a language that isn't in its training data and build a production compiler.
- **Jobs.** Klabnik attributes many layoffs to over-hiring during the zero-interest-rate era and to poor management. He says he will worry when frontier labs stop hiring software engineers, because more productive teams usually find more work to do.
- **The open question.** He merged 100 Rue PRs on Christmas Day with only light review. He calls keeping quality high while letting agents merge code the biggest unsolved problem in software engineering.

## Quotes

> "And I think we could all deal with a little more humility" — Steve Klabnik

> "I think one of the most critical things to do when developing with agentic programming is give the agent the ability to evaluate if its work is correct or not" — Steve Klabnik
