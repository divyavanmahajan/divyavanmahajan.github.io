---
title: '#109 – Brian Kernighan: UNIX, C, AWK, AMPL, and Go Programming'
description: >-
  Brian Kernighan traces Unix and C to a small, open Bell Labs community built
  around programmer productivity, and argues simple general mechanisms and good
  examples explain why they lasted.
pubDate: '2020-07-18'
show: lex-fridman
episode: 109
url: 'https://lexfridman.com/brian-kernighan/'
youtube: 'https://www.youtube.com/watch?v=O9upVbGSBFo'
durationMin: 104
hosts:
  - Lex Fridman
guests:
  - Brian Kernighan
tags:
  - unix
  - programming-languages
  - software-history
  - bell-labs
  - awk
draft: false
---
## Thesis

Brian Kernighan, Princeton professor and co-author of The C Programming Language, argues that Unix succeeded because it was built as an environment for programmers. It ran on very modest hardware, which forced it to use a few general mechanisms, and it grew inside a cooperative Bell Labs community with fast feedback. He says its spread was more luck than inevitability. He sees the same values of expressiveness, efficiency and useful examples behind C, AWK and AMPL.

## Key points

- **Origins of Unix.** Kernighan describes how Bell Labs pulled out of Multics in 1969. Ken Thompson then wrote the first Unix on a little-used PDP-7 in three weeks while his wife and son were away. Kernighan stresses that he wrote none of the operating system code.
- **Free licence, not open source.** He corrects Fridman: Unix was proprietary, but AT&T licensed the source freely to universities. That trained generations of students and led to BSD (Bill Joy) and, in 1991, Linus Torvalds' Unix-like Linux.
- **Design through constraint.** Kernighan points to the file system interface as a general mechanism that also covers devices and processes, an idea Plan 9 extended.
- **C and the book.** He credits C's survival to its balance of expressiveness and efficiency, and to the portability of Unix. He says the 1977 book with Dennis Ritchie worked because of timing and because it used realistic text-processing examples rather than syntax drills.
- **AWK, Go and other languages.** AWK, built with Al Aho and Peter Weinberger, automates the pattern-action loop over lines and fields. Kernighan credits Alan Donovan with most of the Go book and praises Go's concurrency model, which follows Tony Hoare's communicating sequential processes. He has written the same small text formatter in more than 20 languages: Lua took an hour, while Haskell and Rust took far longer.
- **AMPL, AI and libraries.** Kernighan wrote the first AMPL in C++ in about 3,000 lines with Bob Fourer and Dave Gay, starting in 1984. On machine learning, he worries that bias in training data gets propagated. He also says pip and npm leave programmers not knowing what they installed.

## Quotes

> "in terms of programming languages you get the most bang for the buck by learning awk" — Brian Kernighan

> "one of the reasons programming was fun in the old days was that you were really building it all yourself" — Brian Kernighan
