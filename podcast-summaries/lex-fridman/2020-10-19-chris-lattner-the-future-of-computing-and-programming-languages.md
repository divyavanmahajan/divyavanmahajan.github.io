---
title: "#131 – Chris Lattner: The Future of Computing and Programming Languages"
date: 2020-10-19
show: lex-fridman
episode: 131
url: "https://lexfridman.com/chris-lattner-2/"
youtube: "https://www.youtube.com/watch?v=nWTvXbQHwWs"
duration_min: 168
hosts: ["Lex Fridman"]
guests: ["Chris Lattner"]
description: "Chris Lattner argues that programming languages, compilers and chip design are all design problems about trade-offs, and that good defaults with escape hatches make people more productive."
tags: ["programming-languages", "compilers", "swift", "risc-v", "chip-design", "machine-learning"]
source_transcript: "lex-fridman/episodes/2020/10/2020-10-19-chris-lattner-the-future-of-computing-and-programming-languages.md"
draft: false
---

## Thesis

Chris Lattner, creator of LLVM, Clang and Swift and then head of platform engineering at SiFive, tells Lex Fridman that a programming language is a user interface between humans and hardware, and that its value lies in how productive it makes people, not in syntax debates. He extends the same view to chip design, which he describes as a fragmented set of compilers, and argues that the end of easy single-threaded speed-ups shifts the burden to languages, libraries and custom hardware.

## Key points

- **Value semantics and progressive disclosure.** Lattner says Swift's value semantics, built on copy-on-write, remove the defensive tensor cloning PyTorch users know from Python while keeping performance. Swift lets beginners start with "hello world" and reach C-level pointers only when needed.
- **Libraries should feel native.** In Swift, Int is a struct in the standard library, so user-defined types get the same power; Lattner contrasts this with Java, where a complex number loses value semantics.
- **Governance.** He credits Swift's small core team plus the Swift Evolution process with removing mistakes such as the ++ and -- operators. On Python's walrus operator, he suggests Guido van Rossum carried too much of the decision-making personally.
- **MLIR and RISC-V.** Lattner presents MLIR ("multi-level") as general infrastructure for building domain-specific compilers. He describes RISC-V as an open instruction set that gives customers options after cases such as HP's move from PA-RISC to Itanium, and says SiFive aims to cut the cost of designing custom chips.
- **Moore's law and parallelism.** He agrees with both Jim Keller and Dave Patterson in their own terms, but says the old doubling of single-threaded performance is dead. He prefers explicit, predictable concurrency such as Swift actors over auto-parallelising compilers.
- **Software 2.0 and GPT-3.** Lattner sees machine learning as a new programming paradigm alongside others, not a replacement for imperative code, and says GPT-style models lack a way to express intent and check correctness.

## Quotes

> "it's not about tabs versus spaces or curly braces or whatever it's about how productive do you make the person" — Chris Lattner

> "if you care about performance predictability is a very important thing" — Chris Lattner
