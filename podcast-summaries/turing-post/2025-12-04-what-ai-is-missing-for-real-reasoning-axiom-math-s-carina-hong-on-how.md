---
title: "What AI Is Missing for Real Reasoning? Axiom Math’s Carina Hong on how to build an AI mathematician"
date: 2025-12-04
show: turing-post
url: "https://www.turingpost.com/podcast/s/turing_post/what_ai_is_missing_for_real_reasoning_axiom_math_s_carina_hong_on_how_to_build_an_ai_mathematician"
duration_min: 33
hosts: ["Ksenia Se"]
guests: ["Carina Hong"]
description: "Carina Hong argues that an AI mathematician needs verifiable formal proofs in Lean, a growing knowledge base and a conjecture model, combined with informal LLM reasoning."
tags: ["ai-for-math", "formal-verification", "lean", "reasoning", "superintelligence"]
source_transcript: "turing-post/episodes/2025/12/2025-12-04-what-ai-is-missing-for-real-reasoning-axiom-math-s-carina-hong-on-how.md"
draft: false
---

## Thesis

Carina Hong, co-founder and CEO of Axiom Math, argues that next-token prediction and preference training do not produce real mathematical reasoning. Her bet is a hybrid system: informal LLM reasoning plus formal verification in Lean, so that every intermediate step of a proof can be checked, aimed at a domain-specific "superintelligent" AI mathematician rather than general AGI.

## Key points

- **Retrieval, not discovery.** Hong says current models act like a mathematician's secretary, good at finding citations, but weak at new mathematics and at deep multi-step problems.
- **Three pillars.** Axiom's design has a prover, a graph-structured knowledge base that grows as conjectures become theorems, and a conjecturer that sets new problems for the prover in a self-improving loop. Auto-formalization (English to Lean) and auto-informalization connect them.
- **Why now.** She credits Google DeepMind's AlphaGeometry as her "eureka moment" and says LLMs, strong code generation and Lean together make a hybrid approach timely, unlike purely formal AlphaProof or a general LLM company like OpenAI.
- **Benchmarks and data.** IMO-level benchmarks are plentiful, but research-level ability (theory building, library learning) has none; a proven solution costs roughly $200-300 per IMO problem and about $1,000 at PhD-qualifier level. Lean has only about 10 million tokens against more than 1 trillion for Python, a 100,000x gap that creates a cold-start problem.
- **Practical uses.** For individuals she recommends the Natural Number Game and contributing to Mathlib in thin areas such as topology. For enterprises she points to formal verification of legacy code and hardware, and to graph problems in logistics and routing.
- **Specialist bet.** Like Periodic Labs, Axiom sees AI for math as the "algorithmic pillar" of AI for science; Hong is happy for her model to be bad at poetry.

## Quotes

> "they're really not great at coming up with de novo mathematical knowledge." — Carina Hong

> "We're very much bullish in building a super intelligent AI mathematician, but I'm not bullish about my model being good at poetry." — Carina Hong
