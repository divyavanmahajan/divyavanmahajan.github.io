---
title: "Leslie Kaelbling: Reinforcement Learning, Planning, and Robotics"
date: 2019-03-12
show: lex-fridman
url: "https://lexfridman.com/leslie-kaelbling/"
youtube: "https://www.youtube.com/watch?v=Er7Dy8rvqOc"
duration_min: 62
hosts: ["Lex Fridman"]
guests: ["Leslie Kaelbling"]
description: "Leslie Kaelbling argues that intelligent robots need a pragmatic mix of learning and built-in structure, abstraction for long-horizon planning, and explicit reasoning about uncertainty rather than dogma."
tags: ["robotics", "reinforcement-learning", "planning", "uncertainty", "academic-publishing"]
source_transcript: "lex-fridman/episodes/2019/03/2019-03-12-leslie-kaelbling-reinforcement-learning-planning-and-robotics.md"
draft: false
---

## Thesis

MIT roboticist Leslie Kaelbling tells Lex Fridman that building intelligent robots is an engineering question, not a theological one: the open problem is deciding what to build in and what to learn. She argues for abstraction, hierarchical planning and reasoning in belief space, and against both hand-written expert rules and giant end-to-end networks trained from scratch.

## Key points

- **From philosophy to robots.** Kaelbling studied philosophy at Stanford, which had no computer science undergraduate degree then, and got into robotics at SRI building Flaky, a successor to Shakey. She praises the Shakey tech report for inventing A* search, symbolic planning and more.
- **Why expert systems failed.** She says the core mistake was assuming people can articulate how they make decisions; experts give post-hoc stories that are not the real reasons.
- **Abstraction and hierarchy.** You cannot plan a PhD at the level of images and torques, she says, so spatial and temporal abstraction shrink the state space and horizon. Her airport example: you plan to fly to New York trusting that you can work out the walk through the airport once there.
- **MDPs, POMDPs and belief space.** Kaelbling treats these models as a stance, not a claim about the world. Planning in belief space lets a robot choose information-gathering actions, like a driver glancing over a shoulder, and accept approximation when problems are intractable.
- **Built-in bias.** She argues end-to-end learning is too sample-hungry, and calls for more priors "like convolution", such as the notion that objects exist or relational representations.
- **Publishing and incentives.** Kaelbling describes founding the open-access Journal of Machine Learning Research after about 75% of the Machine Learning editorial board resigned over Kluwer's prices; it cost a couple of hundred dollars a year to run. She worries that short research horizons discourage hard multi-year problems, and says engineers will shift from designing algorithms to designing objective functions.

## Quotes

> "I'm interested in doing a very bad job of very big problems" — Leslie Kaelbling

> "the problem you have to solve is the problem you have to solve so if the problem you have to solve is intractable that's what makes us AI people" — Leslie Kaelbling
