---
title: "#447 – Cursor Team: Future of Programming with AI"
date: 2024-10-06
show: lex-fridman
episode: 447
url: "https://lexfridman.com/cursor-team/"
youtube: "https://www.youtube.com/watch?v=oFfVt3S51T4"
duration_min: 158
hosts: ["Lex Fridman"]
guests: ["Aman Sanger", "Arvid Lunnemark", "Michael Truell", "Sualeh Asif"]
description: "Cursor's founders argue AI coding tools should keep the programmer in control, using fast custom models to remove predictable keystrokes rather than handing work to chatbots."
tags: ["ai-coding", "developer-tools", "llm-inference", "code-review", "scaling-laws"]
source_transcript: "lex-fridman/episodes/2024/10/2024-10-06-cursor-team-future-of-programming-with-ai.md"
draft: false
---

## Thesis

The four Cursor founders, Michael Truell, Sualeh Asif, Arvid Lunnemark and Aman Sanger, argue that model capabilities improve so fast that an AI code editor has to keep reinventing itself. They want the programmer to stay in charge, using speed and direct control to automate predictable edits rather than describing software to a chatbot. Much of Cursor's value, they say, comes from small custom models and UX work, not only from the frontier models.

## Key points

- **Why fork VS Code.** Truell says a plugin limits how much control you have over the editor. Sanger argues that being even a few months ahead matters in AI programming and that Microsoft is not well placed to move as fast as a startup.
- **Cursor Tab.** Asif describes the goal as removing "zero entropy" edits, predicting the next change and where to jump next. Sanger explains it uses small sparse (MoE) models, KV cache reuse, and "speculative edits", which feed the original code back in as the draft tokens.
- **Custom Apply model.** Sanger says frontier models are bad at producing exact diffs, for example counting line numbers. Cursor lets the big model sketch a change and trains a separate model to apply it, because deterministic matching fails "at least 40% of the time".
- **Models and benchmarks.** Sanger calls Claude Sonnet the best overall coding model. Truell says SWE-Bench is heavily contaminated in training data, so the team relies on human qualitative checks.
- **Verification and bugs.** The team says models are poor at finding bugs. Ideas include synthetic data from deliberately added bugs, AI-guided code review, and Lunnemark's hope for formal specs and proofs instead of tests.
- **Infrastructure and privacy.** Asif describes a Merkle tree of file hashes to sync code base indexes. Lunnemark notes over 80% of users are on Windows, which limits local models, and hopes for homomorphic encryption so prompts do not pass in plain text through a few providers.

## Quotes

> "I think the Cursor a year from now will need to make the Cursor of today look obsolete." — Aman Sanger

> "I think in the end, just if you stop innovating on the product, you will lose." — Michael Truell
