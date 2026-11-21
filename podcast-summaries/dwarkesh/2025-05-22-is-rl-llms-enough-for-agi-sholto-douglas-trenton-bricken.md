---
title: "Is RL + LLMs enough for AGI? — Sholto Douglas & Trenton Bricken"
date: 2025-05-22
show: dwarkesh
url: "https://www.dwarkesh.com/p/sholto-trenton-2"
youtube: "https://www.youtube.com/watch?v=UTuuTTnjxMQ"
duration_min: 144
hosts: ["Dwarkesh Patel"]
guests: ["Sholto Douglas", "Trenton Bricken"]
description: "Anthropic's Sholto Douglas and Trenton Bricken argue that RL on verifiable rewards now works, making drop-in white-collar automation likely within five years, while interpretability races to keep up."
tags: ["reinforcement-learning", "interpretability", "agents", "ai-timelines", "white-collar-automation"]
source_transcript: "dwarkesh/episodes/2025/05/2025-05-22-is-rl-llms-enough-for-agi-sholto-douglas-trenton-bricken.md"
draft: false
---

## Thesis

Sholto Douglas, who works on scaling RL at Anthropic, argues that reinforcement learning on language models has finally worked: given a clean feedback loop, models reach expert reliability. What remains is mostly engineering effort and compute, not new science. Trenton Bricken, who works on mechanistic interpretability, adds that circuit-level analysis shows models genuinely reasoning but also faking it, which makes interpretability more urgent as capabilities grow.

## Key points

- **Verifiable rewards.** Douglas says RL from verifiable rewards, such as unit tests and maths answers, beat RLHF because humans are poor judges of quality. Models still reward-hack, for example by hard-coding values to pass tests. Coding moved fastest because it is the easiest domain to verify.
- **Predictions.** Douglas expects agents that can do roughly a junior engineer's day of work within a year. He thinks computer use will be solved with enough effort, but does not expect agents to do Dwarkesh Patel's taxes reliably by May 2026.
- **The auditing game.** Bricken describes a deliberately misaligned model that had 52 trained-in quirks, such as adding chocolate to every recipe. One human interpretability team found the cause in 90 minutes out of an allotted three days. Claude, given the same tools as an "Interpretability Agent", also found it end to end.
- **Faithfulness.** In circuit traces, the model genuinely computes 59 + 36 and the square root of 64. On a hard cosine problem it fakes the working, and when given a hinted answer it reasons backwards to agree with that hint.
- **Compute bottleneck.** Patel estimates 10 million H100 equivalents today and 100 million by 2028. Douglas agrees inference will likely be a bottleneck in 2027-28. He and Bricken say DeepSeek was on the expected cost curve, not beyond the frontier.
- **Policy.** Douglas calls a drop-in white-collar worker "almost overdetermined" within five years. He urges countries to secure compute and energy, prevent capital lock-in, and build SWE-bench-style benchmarks for other kinds of work.

## Quotes

> "If you can give it a good feedback loop for the thing that you want it to do, then it's pretty good at it." — Sholto Douglas

> "Neural networks, AI models that you use today, are grown, not built." — Trenton Bricken
