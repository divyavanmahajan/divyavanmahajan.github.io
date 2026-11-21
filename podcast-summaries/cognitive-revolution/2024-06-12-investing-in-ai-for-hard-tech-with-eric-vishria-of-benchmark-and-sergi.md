---
title: "Investing in AI for Hard Tech, with Eric Vishria of Benchmark and Sergiy Nesterenko of Quilter"
date: 2024-06-12
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/investing-in-ai-for-hard-tech-with-eric-vishria-of-benchmark-and-sergiy-nesterenko-of-quilter/"
youtube: "https://www.youtube.com/watch?v=64iPS9AXrcc"
duration_min: 52
hosts: ["Nathan Labenz"]
guests: ["Eric Vishria", "Sergiy Nesterenko"]
description: "Circuit board layout should be fully automated with physics-verified reinforcement learning rather than copilots, and durable AI businesses must solve enduring problems, not ride depreciating foundation models."
tags: ["venture-capital", "reinforcement-learning", "hardware-design", "foundation-models", "vertical-ai"]
source_transcript: "cognitive-revolution/episodes/2024/06/2024-06-12-investing-in-ai-for-hard-tech-with-eric-vishria-of-benchmark-and-sergi.md"
draft: false
---

## Thesis

Benchmark general partner Eric Vishria explains why he backed Quilter: founder Sergiy Nesterenko argued that printed circuit board layout is an "AI and done" problem, not a copilot problem, and that reinforcement learning against physics simulators can eventually beat human designers. Vishria also lays out how Benchmark separates durable AI companies from those on a revenue "sugar high", and why it has not invested in foundation model companies.

## Key points

- **Not a copilot problem.** Vishria says a tool that lays out 90% of a dense board leaves the human the hardest 10%. He cites Chris Dixon's "Idea Maze" and Nesterenko's board work at SpaceX as signs of deep founder exploration.
- **Reinforcement learning over imitation.** Nesterenko says there are few open board designs, and human data would cap the system at human level anyway. Like AlphaGo, it should learn from the game itself. He avoids sparse rewards by splitting the work into placement and routing, scored with fast heuristics.
- **Physics as the judge.** Nesterenko says about 80% of boards built are faulty, and 3 in 4 sent to manufacturers fail on physics. Solving the Maxwell equations gives a reward he trusts more than human review, but it is slow, so Quilter uses conservative approximations; full-wave validation may cost a few GPU days per board.
- **Product and roadmap.** Today Quilter returns results overnight and trains on each uploaded board. It handles low-speed boards up to about 4 amps, with high-speed digital next. Nesterenko compares layout to compiling code. He guesses small boards are a few years from superhuman results and motherboards about 5 years, and says talent is the main bottleneck.
- **Three AI categories.** Vishria sorts AI startups into foundation models, infrastructure (he sits on the boards of Cerebras and Fireworks) and vertical applications such as Quilter and Sierra. He says a model that costs $150 million can be matched six months later for $5 million. He doubts LLM observability will last and says vertical apps grow fastest but have thin moats.
- **Research versus engineering.** Vishria says AI tooling resembles software around 2002, and scaling researchers' prototypes into products is a new gap.

## Quotes

> "fundamentally, people are not good at designing boards. Just full stop." — Sergiy Nesterenko

> "I think they're the fastest depreciating asset in the history of humankind" — Eric Vishria
