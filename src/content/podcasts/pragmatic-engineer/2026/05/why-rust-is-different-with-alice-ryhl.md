---
title: 'Why Rust is different, with Alice Ryhl'
description: >-
  Alice Ryhl explains how Rust turns common programming mistakes into compile
  errors, combining reliability with performance, and how the language is
  governed and spreading into the Linux kernel.
pubDate: '2026-05-20'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/why-rust-is-different-with-alice'
youtube: 'https://www.youtube.com/watch?v=q9xD36NCtZ8'
durationMin: 65
hosts:
  - Gergely Orosz
guests:
  - Alice Ryhl
tags:
  - rust
  - memory-safety
  - programming-languages
  - linux-kernel
  - open-source
draft: false
---
## Thesis

Alice Ryhl, an engineer on Google's Android Rust team and a Tokio maintainer, argues that Rust's appeal is a combination that did not exist before: a language without a garbage collector, usable in kernels and firmware, whose compiler systematically catches the mistakes programmers keep making. Gergely Orosz explores how that design, a team-based governance model and a strict release process explain Rust's growing use.

## Key points

- **Mistakes become compile errors.** Ryhl points to the absence of null, errors returned as values with the `?` operator, exhaustive `match`, mandatory variable initialisation and documentation examples that run as tests. Refactoring becomes a matter of fixing compiler errors until none remain.
- **The pitch depends on the starting language.** From TypeScript, Ryhl positions Rust as a backend language for reliable servers, not a frontend replacement. From C++, the case is stronger: memory safety removes a class of bugs that often become security vulnerabilities, such as use-after-free exploits in the kernel.
- **Data structures are the learning curve.** Ryhl says newcomers build cyclic object graphs, like a book and pages that reference each other, then fight the borrow checker when the fix is to redesign the struct or use a reference-counted pointer like `Arc`.
- **Governance without a dictator.** Unlike Python or Linux, Rust is run by teams. Big changes go through RFCs and a final comment period; features ship behind nightly flags, then via a stabilisation report into a six-week release cycle. Editions allow breaking syntax changes while crates from different editions still interoperate.
- **Linux and AI.** Ryhl reports that the kernel maintainer summit agreed Rust is no longer experimental. She says AI review bots on kernel mailing lists impressed Linus Torvalds and others, but warns AI can create false understanding, citing an agent that added pointless Rust build flags.

## Quotes

> "And then I just fix the compiler errors until the compiler stops shouting. And then once I've done that, I've updated every place I need to update." — Alice Ryhl

> "What Rust ensures is that if you have no use of unsafe then no matter how stupid your code is you will never have one of those bugs." — Alice Ryhl
