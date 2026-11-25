---
title: 'TypeScript, C# and Turbo Pascal with Anders Hejlsberg'
description: >-
  Anders Hejlsberg argues that a programming language succeeds as a whole
  developer experience, tooling included, over a decade-long cycle, and that AI
  shifts engineers from writing code to reviewing it.
pubDate: '2026-05-13'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/typescript-c-and-turbo-pascal-with'
youtube: 'https://www.youtube.com/watch?v=K-Xv8D8NjTk'
durationMin: 75
hosts:
  - Gergely Orosz
guests:
  - Anders Hejlsberg
tags:
  - programming-languages
  - typescript
  - compilers
  - developer-tools
  - ai-coding-agents
draft: false
---
## Thesis

Anders Hejlsberg, creator of Turbo Pascal, Delphi, C# and TypeScript, tells Gergely Orosz that a language is never just a compiler: the product is the whole edit, compile, run and debug cycle. He argues that languages are a 10-year play, and that AI is turning programmers into reviewers and architects without removing their responsibility for the code.

## Key points

- **Turbo Pascal's formula.** Hejlsberg says Turbo Pascal was ten times better at a tenth of the price: $49.95 against $500 compilers, with an integrated editor and an early debugging trick that stopped the compiler at the address of a runtime error.
- **C# came from a lawsuit.** He joined Microsoft in 1996 to architect Visual J++, but the Sun versus Microsoft lawsuit made Java a poor bet. C# and .NET aimed to combine Visual Basic's ease of use with C++'s power. A design group of six or seven people met three times a week for two hours.
- **Async/await and its cost.** Hejlsberg explains that await lets the compiler write the state machine that humans hate writing, while admitting it introduces "function coloring", which Go avoids with goroutines.
- **TypeScript instead of Script#.** When the Outlook.com team asked for Script#, his team proposed fixing JavaScript with an erasable type system. He credits the 2014 move from CodePlex to GitHub and "open development" for its success, and describes a lazy, interactive compiler that must answer within 200 milliseconds.
- **Languages for AI.** He says AI does best in languages it has seen most, that types plus inference suit AI, and that locality and semantic language services will matter more than grep. His team uses AI for code review, porting PRs to the native compiler and writing tests, but finds it weak on compiler internals.
- **The craft shifts.** Hejlsberg expects developers to act as project managers over agents, and suggests AI could make code review more engaging with guided commentary.

## Quotes

> "The language that's most suited for AI is the language that AI has seen the most of in its training set" — Anders Hejlsberg

> "You can't absolve yourself from understanding what's going on. That's not programming." — Anders Hejlsberg
