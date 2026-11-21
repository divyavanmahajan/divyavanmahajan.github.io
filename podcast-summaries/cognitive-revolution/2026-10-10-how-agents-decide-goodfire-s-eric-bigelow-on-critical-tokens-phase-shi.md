---
title: "How Agents Decide: Goodfire's Eric Bigelow on Critical Tokens, Phase Shifts, & In-Context Learning"
date: 2026-10-10
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/how-agents-decide-goodfire-s-eric-bigelow-on-critical-tokens-phase-shifts-in-context-learning/"
youtube: "https://www.youtube.com/watch?v=LgX0QF2D9y0"
duration_min: 122
hosts: ["Nathan Labenz"]
guests: ["Eric Bigelow"]
description: "LLM decisions are made largely during sampling, with answer distributions collapsing suddenly at critical tokens, so understanding agents needs far more interpretability research than chain-of-thought reading."
tags: ["mechanistic-interpretability", "in-context-learning", "chain-of-thought", "reasoning-models", "ai-safety"]
source_transcript: "cognitive-revolution/episodes/2026/10/2026-10-10-how-agents-decide-goodfire-s-eric-bigelow-on-critical-tokens-phase-shi.md"
draft: false
---

## Thesis

Goodfire researcher Eric Bigelow tells Nathan Labenz that a model's "decision" mostly happens during sampling: each sampled token changes the context, and the model then stays consistent with it. He frames reasoning as in-context learning from the model's own output, argues that chain of thought is becoming less reliable to monitor, and calls for much more investment in understanding models.

## Key points

- **Forking paths.** In his 2024 Forking Paths work, Bigelow resampled about 30 GPT-3.5 rollouts at every token of a chain of thought. The answer distribution often holds steady and then suddenly collapses, sometimes at the first mention of an answer, sometimes on an arbitrary token such as the open parenthesis in "kilowatt hours (kWh)".
- **In-context learning, broadly defined.** Following Lampinen and colleagues, he treats in-context learning as everything a model does to adapt that is not in-weights learning. His story work, inspired by Kurt Vonnegut, shows smooth averages but sharp belief turns in individual stories. He expects harnesses and memory to beat per-user fine-tuning.
- **What post-training does.** He sees SFT and RLHF as sharpening the output distribution and RL as pushing it somewhere new. A heavily RL'd Qwen model wrote about a clockmaker in two thirds of its stories, while GPT-6 Astra varies its stories, probably by listing options in its reasoning and picking one. DeepSeek R1 can say "wait" 50 or more times in one chain.
- **Choosing models.** Interesting zero-shot behaviour starts around 7-8 billion parameters. Kimi K3 is a step change for studying frontier coding and reward hacking, and Bigelow says frontier interpretability outside the labs currently depends on Chinese models; a ban on open-weights models generally would hurt far more.
- **Drifting chain of thought.** He attributes strange chain-of-thought dialects and Astra's subagent messages to outcome-only RL, language evolution and Goodhart's law; the "stolen chain of thought" paper lowered his confidence in monitoring. He retires the stochastic parrot but insists sampling stays central, even in looped models like Ouro.
- **Research with agents.** Bigelow ran the Forking Fast research entirely with Goodfire's Silico agent in a week. His advice: give agents rich context, explain your reasoning, and keep the scientific narrative yourself.

## Quotes

> "I think reasoning is almost like a misnomer for what reasoning models are doing." — Eric Bigelow

> "research taste and scientific taste is everything. It's worth its weight in gold." — Eric Bigelow
