---
title: "Automating Circuit Board Design Using Reinforcement Learning w Sergiy Nesterenko, Founder of Quilter"
date: 2024-04-26
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/automating-circuit-board-design-using-reinforcement-learning-w-sergiy-nesterenko-founder-of-quilter/"
youtube: "https://www.youtube.com/watch?v=0M_0xhb8Uyk"
hosts: ["Nathan Labenz"]
guests: ["Will Summerlin", "Sergiy Nesterenko"]
description: "Quilter founder Sergiy Nesterenko argues reinforcement learning, not imitation of human designs, can turn circuit board layout into a one-click step like compiling code."
tags: ["reinforcement-learning", "pcb-design", "hardware", "electronics", "startups"]
source_transcript: "cognitive-revolution/episodes/2024/04/2024-04-26-automating-circuit-board-design-using-reinforcement-learning-w-sergiy.md"
draft: false
---

## Thesis

This is a cross-post of Will Summerlin's Autopilot podcast, introduced by Nathan Labenz. Sergiy Nesterenko, a former SpaceX avionics engineer, argues that PCB layout, the step between a schematic and a manufacturable blueprint, can be automated with reinforcement learning in the style of AlphaGo. He is frank that Quilter only handles simpler boards today, but expects it to match or beat human designers on physics-heavy work within five years.

## Key points

- **Why layout hurts.** Nesterenko compares the schematic to writing code and layout to compiling it. Layout can take two to three months for a Starlink antenna or iPhone motherboard, and problems such as crosstalk mean first boards almost never work.
- **Market size.** He puts median pay for PCB layout specialists at about $100,000 to $110,000 a year, estimates $20 to $50 billion a year of labour spent on the task, and sees a shortage of electrical engineers.
- **No training data needed.** Quilter treats board design as a game scored on physics and manufacturability. Nesterenko argues that learning from human boards would cap performance near human level, as with DeepMind's early Go work, and the best designs sit locked inside NVIDIA, Apple and SpaceX anyway.
- **Compute and iteration.** He favours fast-to-evaluate problems over huge runs, citing JAX-based physics simulation that trains a walking robot in five minutes on a single GPU.
- **Go-to-market.** Early buyers are "electrical engineering adjacent" roles such as firmware, robotics and test engineers who value speed. Pricing would follow the outsourcing norm of one to ten dollars per pin or connection.
- **Founder lessons.** Nesterenko recommends choosing investors for character, looking after yourself, and explains that Benchmark's Eric Vishria won him over with unusually strong founder references. He hopes to take a video call on a Quilter-designed computer by the end of the year.

## Quotes

> "We want to get to the point where doing a PCB layout is like compiling code" — Sergiy Nesterenko

> "If you focus on learning from human examples, you're likely to peak at roughly human performance" — Sergiy Nesterenko
