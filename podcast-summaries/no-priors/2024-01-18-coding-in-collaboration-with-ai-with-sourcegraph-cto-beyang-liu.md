---
title: "Coding in Collaboration with AI with Sourcegraph CTO Beyang Liu"
date: 2024-01-18
show: no-priors
episode: 44
url: "https://www.youtube.com/watch?v=9hPMfH_fyMA"
youtube: "https://www.youtube.com/watch?v=9hPMfH_fyMA"
duration_min: 47
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Beyang Liu"]
description: "High-quality retrieved context from code search and the code graph, not bigger models alone, is what makes AI coding assistants reliable and moves them toward issue-to-pull-request automation."
tags: ["ai-coding-assistants", "rag", "code-search", "software-engineering", "small-models"]
source_transcript: "no-priors/episodes/2024/01/2024-01-18-coding-in-collaboration-with-ai-with-sourcegraph-cto-beyang-liu.md"
draft: false
---

## Thesis

Beyang Liu, co-founder and CTO of Sourcegraph, tells Sarah Guo that context quality is the main lever for AI code generation. Sourcegraph's assistant Cody feeds the language model results from a decade of code search and reference-graph tooling. Liu argues that doing retrieval first establishes a simple baseline, and that better context is what will eventually let agents chain multi-step coding work reliably.

## Key points

- **Origin.** Liu and co-founder Quinn started Sourcegraph in 2013 after seeing at Palantir how much engineering time goes into reading and understanding existing code, a problem he says was 10x to 100x worse at the banks and Fortune 500 clients they worked with.
- **Search architecture.** Cody uses a two-layer design: retrievers (keyword search, regex, embeddings, file-name matching) aim for full recall, then a reranker optimises precision. Liu says indexing parsed functions and classes with their docstrings beats file-level chunking, and that keyword search covers most of the job.
- **Inner loop first.** Liu says all production code AI today serves the developer "inner loop", via completions, chat and commands such as generating unit tests or docstrings. Issue-to-pull-request automation is the long-term goal, starting with toil like dependency updates.
- **Compounding failure.** Liu contrasts decomposing tasks into chained steps, where a sub-90% per-step success rate decays toward zero, with AlphaCode-style repeated sampling plus validation, which he calls cost-prohibitive for large codebases. Good context raises reliability for both.
- **Small models.** Cody offers Mixtral in chat and uses StarCoder 7B for inline completions, which Liu says matches larger proprietary models when given context. He keeps larger models for chat because in-context learning appears to emerge with scale.
- **Future of the craft.** Citing "The Mythical Man-Month", Liu sees coordination as the core problem. He expects AI to compress the boilerplate middle layer of software, and says CS fundamentals and domain expertise will matter more.

## Quotes

> "the kind of like dirty secret is that keyword search can probably get you uh more than 90% of the way there" — Beyang Liu

> "CS fundamentals uh if anything are going to grow uh in importance" — Beyang Liu
