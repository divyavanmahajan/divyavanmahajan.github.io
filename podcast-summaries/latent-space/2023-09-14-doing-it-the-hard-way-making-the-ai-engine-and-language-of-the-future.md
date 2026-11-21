---
title: "Doing it the Hard Way: Making the AI engine and language 🔥 of the future — with Chris Lattner of Modular"
date: 2023-09-14
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/doing_it_the_hard_way_making_the_ai_engine_and_language_of_the_future_with_chris_lattner_of_modular"
duration_min: 89
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Chris Lattner"]
description: "Chris Lattner argues that AI software is fragmented by hand-written kernels and vendor stacks, and that Modular's rebuilt engine and the Mojo language restore generality, performance and programmability."
tags: ["mojo", "ai-compilers", "ai-infrastructure", "programming-languages", "hardware-software"]
source_transcript: "latent-space/episodes/2023/09/2023-09-14-doing-it-the-hard-way-making-the-ai-engine-and-language-of-the-future.md"
draft: false
---

## Thesis

Chris Lattner (LLVM, Swift, TensorFlow at Google, now Modular) argues that AI infrastructure is a pile of fragmented systems: thousands of hand-written kernels, compilers tied to one chip, and frameworks designed before LLMs existed. Modular's answer is to "do it the hard way", rebuilding the engine from first principles so that it is general, fast and programmable, with Mojo as the language for writing it.

## Key points

- **The kernel problem.** Lattner says TensorFlow and PyTorch have thousands of operators, each needing hand-written kernels for every new chip. XLA showed compilers can scale better through kernel fusion, but it is not extensible outside Google. He adds programmability (CUDA) to data and compute as the third cause of the AlexNet moment.
- **CPU first.** Lattner calls AI "a large scale heterogeneous parallel compute problem": data loading and pre-processing run on CPUs, and much inference still does. Modular first showed it could beat vendor software on Intel, AMD and Arm Graviton, with GPU support to follow.
- **Rebuilt foundations.** He says TensorFlow and PyTorch still use Caffe's blocking thread pool. Modular's runtime is non-blocking and asynchronous, an approach that once gave a 2x gain in Google ads throughput. swyx cites the resulting engine as two to three times faster than PyTorch and TensorFlow.
- **Why Mojo exists.** Modular never planned a language: the team hated writing low-level MLIR by hand. Mojo's lexer and parser date from the previous October. Lattner says it must be a Python superset for the sake of the community, borrows Rust ideas such as lifetimes and a borrow checker, and avoids Swift's mistake of launching without internal users.
- **On tinygrad and quantisation.** Lattner calls George Hotz's tinygrad a tensor contraction compiler that will struggle beyond matmuls. He argues that auto-fusion helps quantised models on performance, memory and accuracy, because intermediate values stay at higher precision.
- **Neutrality.** Modular builds no hardware, cloud or LLM, so customers who compete with Google or Meta can trust it. Lattner plans to open-source Mojo under a permissive licence and expects traits by the end of the year.

## Quotes

> "the thing they often forget is that the third part was programmability." — Chris Lattner

> "We're like Switzerland, right? We, we do not build hardware. We do not have a cloud. We are not building an LLM, right?" — Chris Lattner
