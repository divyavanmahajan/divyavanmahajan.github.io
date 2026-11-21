---
title: "\U0001F52C Scaling Past Informal AI - Carina Hong, Axiom Math"
description: >-
  Carina Hong argues that formal verification in Lean is a performance
  multiplier, not a compliance tax, and that verified reasoning is the path to
  mathematical superintelligence and trustworthy AI-written code.
pubDate: '2026-06-03'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/scaling_past_informal_ai_-_carina_hong_axiom_math
durationMin: 93
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Carina Hong
tags:
  - formal-verification
  - lean
  - ai-for-math
  - theorem-proving
  - code-verification
draft: false
---
## Thesis

Carina Hong, founder and CEO of Axiom Math, tells guest hosts Brandon Anderson and RJ Haneke (Latent Space's AI for Science series) that verification is about "scaling brilliance", not catching hallucinations. Just as coding turned out to transfer broadly to reasoning, she argues that structured, formal Lean data will transfer beyond maths, and that an informal-only system will not reach maths AGI. Math is the company's DNA; verification is its first market.

## Key points

- **Results and funding.** Axiom, about seven or eight months old with roughly 30 people, has just raised $200 million at a $1.6 billion valuation. On the December 2025 Putnam, Hong says Axiom scored 120/120, against 110 for the best human and 103 for the best LLM (DeepSeek) per Math Arena. On the Code Marina code-with-proof benchmark it solved 187 of 189 problems.
- **Why Lean.** Lean is a Turing-complete functional language and a proof checker based on the Curry-Howard correspondence. Tactics such as grind handle low-level steps so mathematicians can work at the level of intuition; Hong cites Ramanujan, whose intuitions became theorems once he learned proof-writing.
- **The market is all code.** Hong wants a "right of first refusal" on AI-generated code: Claude decomposes a task and calls Axiom for components that must be provably correct. Hardware is the clearest need, since there is no partial credit for a mostly verified GPU. Specification remains unsolved; she sees informal reasoners proposing edge cases as the way forward.
- **Limits and tools.** Formal provers struggle where Mathlib lacks definitions (e.g. differential topology) and on creative combinatorics, so Axiom is open-sourcing non-Lean mathematical discovery code led by François Charton. It also released Axle (Axiom Lean Engine), 14 free proof validation and repair tools.
- **Owning a mistake.** Hong says Axiom relied on Harmonic's literature review for Erdős problems 124 and 481, which turned out to be already solved, and later on another prior result; she calls search and retrieval a hard problem.
- **Fragmentation.** She sees fragmentation of talent across too many startups as the biggest bottleneck for AI, and pressure to prove commercial value as the main risk for AI for maths.

## Quotes

> "Verification to me is about scaling brilliance, compounding brilliance." — Carina Hong

> "there's no partial credit for a mostly verified GPU." — Carina Hong
