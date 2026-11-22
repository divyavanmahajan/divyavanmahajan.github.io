---
title: "OpenAI, reinforcement learning, robots, safety"
date: 2018-10-01
show: practical-ai
episode: 14
url: "https://share.transistor.fm/s/85a03199"
duration_min: 33
hosts: ["Daniel Whitenack"]
guests: ["Wojciech Zaremba"]
description: "Reinforcement learning can move from games to physical robots if agents train across many randomised simulations, but optimising a single objective also raises misspecification and robustness risks."
tags: ["reinforcement-learning", "robotics", "ai-safety", "agi", "sim-to-real"]
source_transcript: "practical-ai/episodes/2018/10/2018-10-01-openai-reinforcement-learning-robots-safety.md"
draft: false
---

## Thesis

OpenAI co-founder Wojciech Zaremba, speaking with Daniel Whitenack at O'Reilly AI, argues that reinforcement learning can be taken from games to real robots by training in simulation across many varied "universes", so the network learns to adapt quickly in reality. He pairs this with a warning: systems that maximise one reward are indifferent to everything else, which makes safety a core part of the work towards general AI.

## Key points

- **Three ingredients for AGI.** Zaremba names compute, algorithms and data or environments. He argues OpenAI can pursue all three because it is not tied to a product, while academic labs mostly focus on algorithms.
- **Why robots are hard for RL.** He notes that Go and Dota agents needed what amounts to thousands of years of virtual play. Real robots cannot gather that much diverse data or reset themselves easily, so he compares RL to evolution rather than to human learning.
- **The robotic hand task.** OpenAI trained a 24-degree-of-freedom hand to reorient a block and an octagonal prism. A policy that worked in one simulation failed on the real hand, because tendons, rubber and contact effects cannot be modelled exactly.
- **Randomised simulations.** Varying physical parameters and using recurrent networks forced the policy to infer properties such as object weight from its first few seconds of interaction. Solving the task took about three years of virtual experience; transfer capability took another 97. Zaremba says the project ran about a year with 5 to 15 people.
- **Safety problems.** Zaremba describes misspecification (game agents farming points instead of finishing a level) and adversarial robustness, citing Microsoft's Tay bot being hijacked within hours. He sees capabilities, safety and policy as linked areas of work.
- **Advice for learners.** He recommends Coursera, Udacity, Berkeley and Stanford courses, the Goodfellow deep learning book and Sutton's RL book, strong fundamentals, and implementing models from scratch.

## Quotes

> "you can say that the systems that we are training, you can say it has a little bit like a profile of psychopath." — Wojciech Zaremba

> "solving the task itself takes something maybe like three years of virtual experience." — Wojciech Zaremba
