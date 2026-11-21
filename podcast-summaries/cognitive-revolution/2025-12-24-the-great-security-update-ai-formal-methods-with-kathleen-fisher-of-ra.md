---
title: "The Great Security Update: AI ∧ Formal Methods with Kathleen Fisher of RAND & Byron Cook of AWS"
date: 2025-12-24
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/the-great-security-update-ai-formal-methods-with-kathleen-fisher-of-rand-byron-cook-of-aws/"
youtube: "https://www.youtube.com/watch?v=Dm3DHPUFNwU"
duration_min: 99
hosts: ["Nathan Labenz"]
guests: ["Kathleen Fisher", "Byron Cook"]
description: "Kathleen Fisher and Byron Cook argue that pairing generative AI with formal verification can make secure code cheap enough for a society-wide rewrite of vulnerable software."
tags: ["cybersecurity", "formal-methods", "automated-reasoning", "ai-coding", "agent-guardrails"]
source_transcript: "cognitive-revolution/episodes/2025/12/2025-12-24-the-great-security-update-ai-formal-methods-with-kathleen-fisher-of-ra.md"
draft: false
---

## Thesis

Kathleen Fisher (RAND, incoming CEO of the UK's ARIA) and Byron Cook (AWS) argue that AI helps attackers at every skill level, but the same technology, combined with formal methods, can make provably safer software practical. Generative AI makes proofs much easier to find, and proof checkers can verify the results. They expect coding models to become very good at writing secure code; Fisher says the open question is whether society will be motivated to replace existing vulnerable code.

## Key points

- **AI boosts attackers.** Fisher says AI helps everyone from script kiddies to nation-state attackers across the whole cyber kill chain. Cook expects each security incident to feed formal properties that improve future systems.
- **What formal methods are.** Cook describes them as algorithmic proof search under strict rules. Fisher places them on a spectrum from Java type checking to full functional correctness, such as the CompCert compiler and the seL4 kernel (about 10,000 lines of C, roughly 100,000 lines of Isabelle proof).
- **HACMS helicopter.** Fisher recounts DARPA's HACMS program (2011-2016): red teams hacked Boeing's Unmanned Little Bird at the start, but not after it was rebuilt on seL4. Years later, hackers at DEF CON could not break into a hardened quadcopter.
- **AWS in practice.** Cook cites IAM Access Analyzer and VPC Reachability Analyzer, proofs on the s2n TLS library, and a verified hypervisor for Graviton 5. He says the policy interpreter runs over a billion times per second, and getting the specification right is the hardest part.
- **Gen AI plus proofs.** Both describe a flywheel where verified proofs become training data and reward signals. Cook says rapid advances in SAT solvers and LLM-found invariants make proofs cheaper, and that code can be translated between languages (DARPA's TRACTOR targets C to Rust).
- **Automated reasoning checks.** Cook explains how AWS turns natural-language policies (family leave, Portland zoning) into logic that users test and refine, then checks agent outputs against it. Labenz asks whether strict rules leave room for human exceptions.

## Quotes

> "So there's always assumptions all the way down. So you're only ever raising assurance. You're never getting 100% assurance." — Byron Cook

> "Formal methods gives you guarantees, but are not very flexible and hard to use. And AI is very flexible and easy to use, but often not trustworthy." — Kathleen Fisher
