---
title: 'Bjarne Stroustrup: C++'
description: >-
  Bjarne Stroustrup argues that the right abstractions, built on user-defined
  types and a zero-overhead principle, give both the best performance and the
  most reliable code in constrained systems.
pubDate: '2019-11-07'
show: lex-fridman
url: 'https://lexfridman.com/bjarne-stroustrup/'
youtube: 'https://www.youtube.com/watch?v=uTxRF5ag27A'
durationMin: 107
hosts:
  - Lex Fridman
guests:
  - Bjarne Stroustrup
tags:
  - cpp
  - programming-languages
  - software-reliability
  - language-design
  - standardization
draft: false
---
## Thesis

Bjarne Stroustrup, creator of C++, tells Lex Fridman that abstraction and efficiency are not opposites: well-designed abstractions are his main tool for performance. He argues that systems which must run for decades under tight hardware and reliability limits need code that expresses ideas directly, static checking over runtime surprises, and language design guided by principles rather than accumulated features.

## Key points

- **Roots in Simula.** Stroustrup credits Simula, from Kristen Nygaard and Ole-Johan Dahl, with the idea he built on: defining your own types, so program complexity grows with program size rather than its square. He traces the history from Fortran's portability through Algol to Simula.
- **Zero-overhead principle.** An abstraction should cost nothing compared with equivalent lower-level code. He says matrix libraries written this way have beaten Fortran, and cites Jason Turner's CppCon talk where modern C++ for Pong compiled to smaller assembly than C-style code.
- **Reliability through simplification.** Stroustrup says safety, security and performance are system properties. His first step is simpler code that states intent directly, backed by the C++ Core Guidelines and static analysis, since error-handling code is among the hardest to write.
- **Templates and concepts.** He describes concepts, designed with Gabriel Dos Reis and implemented by Andrew Sutton, as compile-time predicates on template arguments (for example "sortable"), arriving in C++20 after a failed attempt for C++0x.
- **The ISO process.** Standardization began in 1989 at the request of IBM and HP. Meetings are open for a fee of about $1,280, with one vote per organization and decisions by consensus. After C++11 slipped to 13 years, the committee moved to a three-year shipping cycle.
- **Favourite feature and machine learning.** His choice is constructor/destructor pairs (RAII), which avoid garbage collection and give predictable performance; he notes Rust has adopted RAII. He says fuzzy machine-learning accuracy suits pre-screening but not life-critical controls, and the human-handover model in cars worries him.

## Quotes

> "I had lunch with Dennis most days for 16 years and we never had a harsh word between us" — Bjarne Stroustrup

> "it's easier to recognize ugly than to recognize beauty in code" — Bjarne Stroustrup
