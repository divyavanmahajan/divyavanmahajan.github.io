---
title: "#381 – Chris Lattner: Future of Programming and AI"
date: 2023-06-02
show: lex-fridman
episode: 381
url: "https://lexfridman.com/chris-lattner-3/"
youtube: "https://www.youtube.com/watch?v=pdJQ8iVTwj8"
duration_min: 218
hosts: ["Lex Fridman"]
guests: ["Chris Lattner"]
description: "Chris Lattner argues that AI's real enemy is software complexity, and that Mojo, a Python superset, plus Modular's stack can unify research and deployment across fast-multiplying hardware."
tags: ["programming-languages", "mojo", "python", "ai-infrastructure", "compilers", "hardware-accelerators"]
source_transcript: "lex-fridman/episodes/2023/06/2023-06-02-chris-lattner-future-of-programming-and-ai.md"
draft: false
---

## Thesis

Chris Lattner, creator of LLVM, Clang and Swift and co-founder of Modular, tells Lex Fridman that AI is held back by complexity: thousands of operators, thousands of chips, and a split between Python research code and C++ deployment code. His answer is Mojo, a superset of Python meant to keep Python's usability while reaching hardware-level performance, so code doesn't have to be rewritten every time a new device arrives.

## Key points

- **Superset, not a replacement.** Lattner says Mojo must run existing Python, including CPython packages through an integration layer, because he does not want to repeat the Python 2 to 3 migration. He draws on Swift's gradual adoption alongside Objective-C, and says he showed Mojo to Guido van Rossum before launch.
- **Where the speed comes from.** He lists the layers: moving from an interpreter to a compiler (2 to 10x), keeping values out of heap objects, vectorisation, parallelism and tiling. Progressive typing and auto-tuning let developers opt in to more performance, which Lex links to the claimed 35,000x speed-up.
- **Language design choices.** Mojo has structs as well as classes, value semantics with lazy copying, an ownership model related to Rust's, a strict `fn` alongside Python's `def`, errors that cost about as much as a return, and values destroyed right after their last use.
- **Modular's mission.** Lattner says deploying a model can take weeks or months and big teams, because PyTorch and TensorFlow were not built for LLMs or today's hardware. Modular's engine sits underneath both frameworks rather than replacing them.
- **Launching at 0.1.** Remembering the buggy 2014 Swift launch, he released Mojo early and labelled it 0.1. He reports more than 70,000 sign-ups in two weeks and over 10,000 people on Discord.
- **LLMs and the future.** Lattner sees code-generating LLMs as helpers that take over rote work, not a replacement for programmers. He worries that $100 million training runs will concentrate AI in a few hands, and wants AI to be as easy to use as Python.

## Quotes

> "Our view is that Python is just not done yet." — Chris Lattner

> "Physics isn't going back to where we came from. It's only gonna get weirder from here on out, right?" — Chris Lattner
