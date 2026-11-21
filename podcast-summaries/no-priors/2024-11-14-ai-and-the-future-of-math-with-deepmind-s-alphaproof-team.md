---
title: "AI and the Future of Math, with DeepMind's AlphaProof Team"
date: 2024-11-14
show: no-priors
episode: 87
url: "https://www.youtube.com/watch?v=uX6ceY1vcUg"
youtube: "https://www.youtube.com/watch?v=uX6ceY1vcUg"
duration_min: 39
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["AlphaProof Team"]
description: "DeepMind's AlphaProof team explains how AlphaZero-style reinforcement learning over formal Lean proofs reached IMO silver level, and argues formal verification will reshape mathematical collaboration."
tags: ["mathematics", "reinforcement-learning", "formal-verification", "reasoning", "test-time-compute"]
source_transcript: "no-priors/episodes/2024/11/2024-11-14-ai-and-the-future-of-math-with-deepmind-s-alphaproof-team.md"
draft: false
---

## Thesis

Thomas Hubert, Rishi Mehta and Laurent Sartran of Google DeepMind tell Sarah Guo and Elad Gil that mathematics suits AlphaZero-style reinforcement learning because formal proofs give a perfect, machine-checkable reward. They argue that AlphaProof shows a system can learn mathematics almost from scratch to strong high-school level, but that reaching research mathematics will require theory building, which it cannot yet do.

## Key points

- **IMO result.** AlphaProof solved four of the six problems at this year's International Mathematical Olympiad, a silver-medal standard. Some problems took minutes, others three days of compute.
- **How it works.** The team describes AlphaZero's three components: a neural network, large-scale learning by trial and error, and search. AlphaProof's actions are lines of proof written in a formal language, so a checker confirms a correct proof and the system learns from it.
- **Test-time RL.** When stuck, the agent generates many variations of the problem, solves some, learns from them and climbs towards the original. It is strongest at algebra and number theory, weaker at combinatorics, and was not applied to geometry.
- **Problem 6.** Only five of the roughly 500 contestants solved it. Fields medallist Tim Gowers, a judge, could not find the needed construction in a couple of hours; AlphaProof found the function f(x) = -x + 2 times the ceiling of x, showing the bound c equals two.
- **Limits and human data.** The team names theory building and auto-formalising obfuscated combinatorics problems as the main obstacles. They see small amounts of expert human data seeding an agent that reinforcement learning then pushes further, with its own "alien" proof style.
- **Applications.** The team points to formal code verification beyond avionics and cryptography, and to larger mathematical collaborations where a formal system checks everyone's work, citing Terence Tao's comments on small author counts.

## Quotes

> "I'm not a mathematician so who am I to advise mathematicians but like I guess my advice from the outside would be like learn lean as early as you can" — AlphaProof team member

> "as machines get better at finding the answers like we're we we're going to have to get better at finding the questions" — AlphaProof team member
