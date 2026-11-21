---
title: "Andrej Karpathy on Code Agents, AutoResearch, and the Loopy Era of AI"
date: 2026-03-20
show: no-priors
episode: 154
url: "https://www.youtube.com/watch?v=kwSVtQ7dziU"
youtube: "https://www.youtube.com/watch?v=kwSVtQ7dziU"
duration_min: 67
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Andrej Karpathy"]
description: "Andrej Karpathy argues that the human is now the bottleneck: the goal is to arrange autonomous agent loops, like his AutoResearch project, that run on objective metrics without you in the loop."
tags: ["coding-agents", "autoresearch", "open-source-models", "ai-education", "jobs"]
source_transcript: "no-priors/episodes/2026/03/2026-03-20-andrej-karpathy-on-code-agents-autoresearch-and-the-loopy-era-of-ai.md"
draft: false
---

## Thesis

Andrej Karpathy tells Sarah Guo that since December he has gone from writing most of his code himself to delegating almost all of it to agents. The constraint is no longer compute but the human's skill at directing agents, so the goal is to remove yourself from the loop. His AutoResearch project shows the idea: give agents an objective, a metric and boundaries, then let them run. He warns that it works only where results can be verified, because models stay "jagged".

## Key points

- **Macro actions and token throughput.** Karpathy says he has barely typed a line of code since December. He points to Peter Steinberger tiling a monitor with Codex agents, and says he feels nervous when subscription quota goes unused, much as he once did with idle GPUs.
- **Claws and Dobby.** He credits OpenClaw with persistence, memory and a well-crafted personality. His home "claw", Dobby, scanned his network, reverse-engineered Sonos and lighting APIs, and now runs his HVAC, pool and security camera (via a Qwen model), replacing six apps. He thinks many bespoke apps should become APIs for agents.
- **AutoResearch.** An overnight run on his already hand-tuned nanochat found settings he had missed, such as weight decay on value embeddings and the Adam betas. He imagines research organizations described as program.md files that can themselves be optimized, and untrusted internet swarms, like Folding@home, contributing verifiable commits.
- **Jaggedness and speciation.** Models move mountains on verifiable tasks but still tell the same "atoms make everything up" joke from years ago, because that falls outside reinforcement learning. He expects more specialized models over time, but says fine-tuning without losing capabilities is still immature.
- **Jobs and open source.** Looking at Bureau of Labor Statistics data, he expects digital work to change first and physical work to lag. Through the Jevons paradox he is cautiously optimistic about demand for software engineers. He puts open models roughly 6-8 months behind closed ones and sees that gap as a healthy balance against centralization.
- **Education.** microGPT boils LLM training down to 200 lines of Python. Rather than make lectures, he now writes explanations and skills for agents, which then teach people.

## Quotes

> "everything is just like happens in these like macro actions over your repository" — Andrej Karpathy

> "I'm not explaining to people anymore. I'm explaining it to agents." — Andrej Karpathy
