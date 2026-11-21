---
title: "#387 – George Hotz: Tiny Corp, Twitter, AI Safety, Self-Driving, GPT, AGI & God"
date: 2023-06-30
show: lex-fridman
episode: 387
url: "https://lexfridman.com/george-hotz-3/"
youtube: "https://www.youtube.com/watch?v=dNrTrx42DGQ"
duration_min: 195
hosts: ["Lex Fridman"]
guests: ["George Hotz"]
description: "George Hotz argues that the real AI risk is centralized power, and that open-source models, simple software and home-owned compute through his tiny corp are the answer."
tags: ["ai-safety", "open-source", "ai-hardware", "self-driving", "software-engineering", "decentralization"]
source_transcript: "lex-fridman/episodes/2023/06/2023-06-30-george-hotz-tiny-corp-twitter-ai-safety-self-driving-gpt-agi-god.md"
draft: false
---

## Thesis

George Hotz, founder of comma.ai and tiny corp, tells Lex Fridman that the danger in AI is not machines rebelling but humans using them, and that concentrating AI in a few hands is worse than giving it to everyone. His response is to decentralize compute: tinygrad, a minimal neural network framework, and the tinybox, a deep learning computer that runs from a home wall outlet. He applies the same taste for simplicity to self-driving and Twitter.

## Key points

- **AI safety as decentralization.** Hotz agrees AI may end society as we know it, but blames human misuse, for example an "infinite TikTok" that people cannot look away from. He argues open-sourcing models such as Meta's LLaMA guards against a single controlled AI, and criticizes OpenAI for citing safety to withhold details. Fridman pushes back on lowering the barrier to harm.
- **tinygrad and NVIDIA.** He says tinygrad uses about 25 primitive operations against roughly 250 in PrimTorch, with no built-in matrix multiply, and fuses kernels through laziness. He says AI chip startups fail on software, and recounts AMD's 7900 XTX drivers crashing in a simple loop test before Lisa Su answered his email.
- **The tinybox.** Priced at $15,000, it would hold six GPUs, over 100 GB of GPU RAM and almost a petaflop of compute, run quietly, and serve 65-billion-parameter LLaMA locally. Hotz pitches it as keeping AI aligned with its owner, not a cloud provider.
- **Self-driving.** comma is building what Hotz calls "drive GPT", a learned simulator trained on driving data, with reinforcement learning rewarded on whether a human would disengage. He says Tesla stays one to two years ahead, and that tinygrad already runs openpilot's model on a Snapdragon 845, twice as fast as Qualcomm's library.
- **Twitter and code quality.** From his internship, Hotz says Twitter needed refactors before features, blames a promotion system that rewarded writing new libraries, and maintains 50 people could run it. He would start with trusted tests, like comma's process replay.
- **Programming with LLMs.** He does not use GPT for coding, calls Copilot junior-engineer level and wants an AI that finds bugs rather than types code.

## Quotes

> "What’s ironic about all these AI safety people is they’re going to build the exact thing they fear." — George Hotz

> "AI accelerators are a software problem, not really a hardware problem." — George Hotz
