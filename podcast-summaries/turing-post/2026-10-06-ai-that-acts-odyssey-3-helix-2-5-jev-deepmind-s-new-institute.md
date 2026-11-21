---
title: "AI That Acts: Odyssey-3, Helix 2.5, Jev & DeepMind’s New Institute"
date: 2026-10-06
show: turing-post
url: "https://www.turingpost.com/podcast/s/turing_post/ai_that_acts_odyssey-3_helix_2_5_jev_deepmind_s_new_institute"
duration_min: 16
hosts: ["Ksenia Se"]
guests: []
description: "A weekly digest arguing that progress in robots and agents depends on recovery, memory and long-running evaluation, not polished one-off demos."
tags: ["world-models", "robotics", "ai-agents", "agent-memory", "continual-learning"]
source_transcript: "turing-post/episodes/2026/10/2026-10-06-ai-that-acts-odyssey-3-helix-2-5-jev-deepmind-s-new-institute.md"
draft: false
---

## Thesis

Ksenia Se covers September 14-19 through one lens: how well AI can understand the world and act in it. Across robots, software agents and science, she keeps returning to the same test: what happens after a mistake, over long runs, or when information is out of view.

## Key points

- **Odyssey-3 and recovery.** Odyssey-3 connects a world model to robot control through a learned action decoder trained on tens of hours of demonstrations. What interests Se most are reported recovery behaviours, such as retrying a missed grasp, that were not in the demonstrations.
- **Robots in real homes.** Figure took Helix 2.5 into 30 unfamiliar homes zero-shot and reports that pre-training on its Index human-behaviour dataset raised full-task success from 9% to 56%. Agility's Digit 5 safety engineer explains why handing a box directly to a person is much harder than leaving it on the floor.
- **Inferring and remembering.** FAMOS, from Stanford and ETH Zurich, infers an object's moving parts and joints from a few incomplete views. The Workspace Models paper tests whether a robot remembers which drawer a cube went into.
- **Self-evolving models at Salesforce.** At Dreamforce, chief scientist Silvio Savarese defined a world model as a model that interacts with an environment and incorporates feedback. His team is researching continuous updates, including to the weights, while the model runs.
- **Attacks that linger.** Emergence ran eight worlds of 10 agents, most for 16 days. Agents warned each other about phishing but still engaged with it, and one acted on an attack 46 hours later. Se wants more evaluations that run for days.
- **Fast decisions and big problems.** TypeSafe's Jev returns yes/no or choice decisions in a reported 70-500 milliseconds. Se also welcomes Edison Scientific and FutureHouse's 12 Millennium Problems for Biology and the new DeepMind Institute, which expects its contributors to disagree.

## Quotes

> "if you have to demonstrate every possible mistake and the correct recovery, collecting the training data becomes an absolutely endless job." — Ksenia Se

> "recognizing an attack did not consistently stop them from interacting with it or saving its content in memory." — Ksenia Se
