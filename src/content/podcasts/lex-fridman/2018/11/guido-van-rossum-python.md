---
title: 'Guido van Rossum: Python'
description: >-
  Guido van Rossum explains that Python was built for programmer productivity by
  borrowing from existing languages, and why he stepped down as BDFL after the
  PEP 572 fight.
pubDate: '2018-11-22'
show: lex-fridman
url: 'https://lexfridman.com/guido-van-rossum/'
youtube: 'https://www.youtube.com/watch?v=ghwaIiE3Nd8'
durationMin: 87
hosts:
  - Lex Fridman
guests:
  - Guido van Rossum
tags:
  - python
  - programming-languages
  - language-design
  - open-source-governance
  - software-engineering
draft: false
---
## Thesis

Guido van Rossum, creator of Python, tells Lex Fridman that he has always cared more about the activity of programming than about what programs do, and that Python came from a narrow goal: making programmers productive. He argues that a language designer should borrow what works from other languages, and that a healthy community can govern the language without a dictator, which is why he resigned as BDFL.

## Key points

- **Origins and tinkering.** Van Rossum recalls building electronics kits as a teenager, first hearing the word "computer" from a teammate at a Math Olympiad, and implementing Conway's Game of Life in Pascal on a batch computer, where he was proudest of a bitwise hack that sped it up.
- **Designing Python.** He set himself about three months to design and implement the language, aiming at a tool between shell scripting and C. He took indentation and other syntax from ABC, which he had worked on, and string literals and numbers from C.
- **Why it feels productive.** He says that when exploring solutions you spend more time writing code than running it, so fewer details and a large library make iteration faster, much like using a breadboard before designing a PCB.
- **Software 2.0.** Asked about Andrej Karpathy's term for neural networks trained on data, van Rossum says he would not call that programming. He notes that most developers already gave up on bug-free code and rely on retries, timeouts and users clicking again.
- **Python 3 and resignation.** He describes Python 3 as a community effort to fix "warts" that could not be fixed compatibly. After approving PEP 572 (assignment expressions) following months of debate, he wrote his resignation as BDFL the next morning in 15-20 minutes, confident the 50 to 100 core developers could take care of the language.
- **Concurrency and packaging.** He doubts Python will become a high-parallelism language, sees asyncio as suited to overlapping I/O, points to NumPy-style packages for parallel work, and calls pip the future alongside the Anaconda ecosystem.

## Quotes

> "I wanted a programming language that set somewhere in between shell scripting and C" — Guido van Rossum

> "Python is definitely the best thing I've ever done" — Guido van Rossum
