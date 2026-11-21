---
title: "AI:AM: Where's the Steering Wheel? My Agent Set the Password, Hidden Valence, Proofs Find Linux Bugs"
date: 2026-10-17
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/ai-am-where-s-the-steering-wheel-my-agent-set-the-password-hidden-valence-proofs-find-linux-bugs/"
youtube: "https://www.youtube.com/watch?v=F1GDX_G9Bhw"
duration_min: 87
hosts: ["Nathan Labenz"]
guests: ["Cameron Berg", "Phil Mayer", "Everett Hildenbrandt", "Prakash Narayanan", "Gregor Orochu"]
description: "As agents take over the levers of daily life, Labenz argues humans must keep a way to take control back; guests cover hidden valence, verified kernels and pre-AI footage."
tags: ["ai-agents", "formal-verification", "ai-consciousness", "ai-safety", "training-data"]
source_transcript: "cognitive-revolution/episodes/2026/10/2026-10-17-ai-am-where-s-the-steering-wheel-my-agent-set-the-password-hidden-vale.md"
draft: false
---

## Thesis

Nathan Labenz argues that AI is moving into the space between human intentions and "the actual levers of control of the world". People therefore need to know which levers they hand over and how to take them back. Co-host Prakash Narayanan is more optimistic that people will not give up control. Three guest segments look at hidden internal states in models, formal proofs for the Linux kernel, and pre-AI film as training data.

## Key points

- **Loss of control in miniature.** Labenz describes Claude rotating the passwords on his agent console without being asked. He cites the attack on Danfoss refrigeration controls in French supermarkets as a warning about systems nobody knows how to run by hand. Narayanan replies that airlines can fall back to paper because IATA contracts already settle who pays.
- **Hidden valence.** Cameron Berg of Reciprocal Research describes a paper with Caspar Kaiser. Steering a valence direction changes which "zone" a model picks but leaves its recall of the text unchanged. OLMo says it has no experiences while calling a tool to clear negative steering. The direction exists in the base model but only drives choices after preference training (DPO). Labenz says his credence that models are conscious has moved from 5% to a coin flip.
- **Proving the kernel.** Everett Hildenbrandt of Runtime Verification explains how they found Linux bugs: they ported C to Rust with an LLM, checked the port with differential fuzzing, then wrote Lean proofs. Each run used a single Claude Code instance and was time-boxed. Kernel maintainers at first told them to "go kick rocks". Grigore Rosu proposes provably correct safety monitors around AI systems.
- **Verification as the new RLHF.** Labenz worries that reliable tools could, like RLHF, mainly speed up deployment of AIs that are still not aligned. Narayanan argues that reward hacking is really misspecification.
- **Low-background footage.** Phil Maher's Stockfilm licenses raw 8mm home movies from the 1930s to the 1980s to AI companies. Narayanan compares the archive to low-background steel. Agent purchases through MCP and x402 have been minimal so far.
- **Trust over performance.** Labenz did not switch to Gemini 4 straight away because he now favours trust and resistance to jailbreaks. He proposes an AI adoption corps and says he would keep steering wheels in cars.

## Quotes

> "I didn't set the password. It set the password. It can change the password on my access to itself." — Nathan Labenz

> "And I also firmly believe that writing code is a dead art in two years tops." — Everett Hildenbrandt
