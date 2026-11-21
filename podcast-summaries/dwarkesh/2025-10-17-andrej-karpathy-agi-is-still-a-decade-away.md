---
title: "Andrej Karpathy — AGI is still a decade away"
date: 2025-10-17
show: dwarkesh
url: "https://www.dwarkesh.com/p/andrej-karpathy"
youtube: "https://www.youtube.com/watch?v=lXUZvyajciY"
duration_min: 145
hosts: ["Dwarkesh Patel"]
guests: ["Andrej Karpathy"]
description: "Andrej Karpathy argues agents need about a decade of work because LLMs still lack continual learning, good RL and reliability, and that AI will blend into steady 2% GDP growth."
tags: ["agi-timelines", "reinforcement-learning", "ai-agents", "continual-learning", "ai-education"]
source_transcript: "dwarkesh/episodes/2025/10/2025-10-17-andrej-karpathy-agi-is-still-a-decade-away.md"
draft: false
---

## Thesis

Andrej Karpathy argues that this is the decade of agents, not the year of agents: today's models are impressive but cognitively lacking, with no continual learning, weak reinforcement learning and collapsed outputs. Drawing on his years leading self-driving at Tesla, he sees each extra "nine" of reliability as a constant slog. Dwarkesh Patel pushes back that true AGI, as added labour, could lift growth well above the 2% trend; Karpathy expects AI to diffuse gradually like computers did.

## Key points

- **Ghosts, not animals.** Karpathy calls pre-training "crappy evolution": imitation of internet data produces digital "spirits" rather than animals. He wants a "cognitive core" of perhaps a billion parameters, stripped of memorised knowledge, because frontier models waste capacity compressing a mostly garbage internet.
- **Coding agents and nanochat.** Building nanochat, an ~8,000-line ChatGPT clone, coding agents were "not net useful": they pushed PyTorch DDP he had deliberately replaced, added defensive try-catch code and used deprecated APIs. Autocomplete is his sweet spot; agents help with boilerplate and unfamiliar languages such as Rust.
- **RL is noisy.** Outcome-based RL upweights every token of a successful trajectory, including wrong turns. LLM judges for process supervision get gamed; he describes a model earning full reward with the nonsense string "dhdhdhdh".
- **Model collapse.** Synthetic reflection data is "silently collapsed" (ChatGPT knows about three jokes), so training on it degrades models. LLMs also lack an equivalent of sleep-time distillation, culture or self-play.
- **March of nines.** A perfect Waymo demo in 2014 still left years of work; at Tesla he saw two or three nines in five years. He argues production software shares self-driving's high cost of failure.
- **Education as ramps.** His company Eureka is building LLM101N, with nanochat as capstone, aiming for "eurekas per second". He wants a tutor as good as his Korean tutor, which current AI cannot match.

## Quotes

> "Reinforcement learning is terrible. It just so happens that everything that we had before it is much worse because previously we were just imitating people" — Andrej Karpathy

> "I often say that pre-AGI education is useful. Post-AGI education is fun." — Andrej Karpathy
