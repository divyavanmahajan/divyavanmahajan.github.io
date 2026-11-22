---
title: 'Chris Lattner: Compilers, LLVM, Swift, TPU, and ML Accelerators'
description: >-
  Chris Lattner argues that LLVM's real contribution was standardised, modular
  compiler infrastructure that rivals share, and that machine learning
  frameworks such as TensorFlow are compilers needing the same treatment.
pubDate: '2019-05-13'
show: lex-fridman
url: 'https://lexfridman.com/chris-lattner/'
youtube: 'https://www.youtube.com/watch?v=yCd3CzGSte8'
durationMin: 73
hosts:
  - Lex Fridman
guests:
  - Chris Lattner
tags:
  - compilers
  - llvm
  - swift
  - tensorflow
  - ml-accelerators
  - open-source
draft: false
---
## Thesis

Chris Lattner, then a senior director at Google and creator of LLVM, Clang and Swift, tells Lex Fridman that the hard part of compilers is software engineering at scale, not research novelty. He argues that LLVM succeeded because its modular, reusable design let competitors build on shared infrastructure, and that the same approach should now be applied to machine learning, where TensorFlow is itself a compiler.

## Key points

- **LLVM as shared infrastructure.** Lattner describes compilers as a front end, an optimiser and a hardware-specific back end, with LLVM standardising the last two for Swift, Julia, Rust and Clang. He says Google, Apple, AMD, Intel and Nvidia collaborate on it because no single company wants to build it alone, and credits standardisation, not new algorithms, for uses such as Sony's movie graphics pipeline.
- **Clang and community.** Clang was built to give better error messages, faster compiles and refactoring tools than GCC. Lattner explains that LLVM now runs on a hierarchy of code owners and a non-profit foundation, with him mainly resolving technical disagreements.
- **Why Swift.** Lattner started Swift in his spare time around 2010, with encouragement from Bertrand Serlet. He says the deciding argument was memory safety, which could not be added to Objective-C without removing pointers, and that Swift follows "progressive disclosure of complexity".
- **Swift for TensorFlow.** He calls TensorFlow fundamentally a compiler and says Swift lets Google add language features, such as dynamic member lookup for Python interop (about 1,200 lines of Swift) and language-integrated automatic differentiation.
- **TPUs and MLIR.** Lattner cites third-generation TPU pods at 100 petaflops and the bfloat16 format, which trades mantissa precision for range and is cheaper in silicon. MLIR aims to give vendor compilers such as XLA, TensorRT and nGraph a common infrastructure.
- **Tesla and open source.** Recalling five months as VP of Autopilot Software, Lattner says he saw the highest turnover of any company but respects Elon Musk's ability to sell a vision. He prefers Google's open-source approach to Apple's and calls open-sourcing TensorFlow a revolution for the field.

## Quotes

> "people always assume that it's impossible to implement and it's very nearly impossible but it's just really really hard" — Chris Lattner

> "it's not your string library that's the thing that's going to make you money it's going to be the amazing UI product differentiating features" — Chris Lattner
