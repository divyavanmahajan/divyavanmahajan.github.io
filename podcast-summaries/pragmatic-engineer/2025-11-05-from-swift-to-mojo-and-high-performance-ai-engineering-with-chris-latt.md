---
title: "From Swift to Mojo and high-performance AI Engineering with Chris Lattner"
date: 2025-11-05
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/from-swift-to-mojo-and-high-performance"
youtube: "https://www.youtube.com/watch?v=Fxp3131i1yE"
duration_min: 92
hosts: ["Gergely Orosz"]
guests: ["Chris Lattner"]
description: "Chris Lattner traces LLVM and Swift at Apple to Mojo at Modular, arguing that predictable, readable languages, not hand-written kernels per chip, will open AI hardware to more programmers."
tags: ["compilers", "programming-languages", "mojo", "gpu-programming", "ai-coding"]
source_transcript: "pragmatic-engineer/episodes/2025/11/2025-11-05-from-swift-to-mojo-and-high-performance-ai-engineering-with-chris-latt.md"
draft: false
---

## Thesis

Chris Lattner, creator of LLVM, Swift and Mojo, argues that AI software today looks like compilers before GCC: every chip vendor builds its own vertical stack. With Mojo, he wants to put compiler power into the hands of ordinary Python-style programmers, so they can reach peak performance across hardware without being compiler engineers.

## Key points

- **LLVM had to earn its place.** Lattner says Apple hired him because it was frustrated with GCC, but he got the message that LLVM had to ship in a product within about a year. A small OpenGL JIT use case came first; over five years LLVM and Clang replaced Apple's toolchain and enabled the iPhone 5S, the first 64-bit iPhone.
- **Swift in secret.** He built Swift alone on nights and weekends for a year and a half while managing about 40 people. Leadership first asked why Apple needed a new language. ARC, modules and literals were added to Objective-C to narrow the gap. Swift launched in 2014 with only about 250 people at Apple aware of it.
- **Mistakes to learn from.** Lattner says calling Swift 1.0 too early, slow type checking and adding features faster than the architecture could absorb created lasting complexity. He also says experts resist change because a new language invalidates their expertise.
- **Mojo's bet.** Mojo is Python-family syntax with SIMD, compressed float formats and Zig-inspired compile-time metaprogramming. It aims for a simpler, predictable compiler instead of a "sufficiently smart" one. Modular has just over 140 people, supports seven architectures from three vendors, and targets Mojo 1.0 in early summer next year.
- **AI coding with adult supervision.** Lattner uses Cursor and estimates about 10% productivity for him, much more for prototypes and PMs, but calls production use hit and miss and warns against vibe coding production systems.
- **No LLM-only language.** He argues readability and expressivity matter more than writability, and that 700,000 lines of open-source Mojo help models learn it.

## Quotes

> "I don't think that optimizing for the LLM is the right thing to do at all." — Chris Lattner

> "the tools are amazing, but they still need adult supervision." — Chris Lattner
