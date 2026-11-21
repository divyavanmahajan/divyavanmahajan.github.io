---
title: "Chris on AI, autonomous swarming, home automation and Rust!"
date: 2025-11-26
show: practical-ai
episode: 338
url: "https://share.transistor.fm/s/50ac2613"
duration_min: 97
hosts: ["Chris Benson"]
guests: ["Jerod Santo", "Adam Stacoviak"]
description: "Chris Benson argues that open models, cheap hardware and Rust make physical AI accessible to anyone, while true autonomous swarming remains a hard, largely unsolved problem."
tags: ["swarming", "robotics", "home-automation", "rust", "physical-ai", "open-models"]
source_transcript: "practical-ai/episodes/2025/11/2025-11-26-chris-on-ai-autonomous-swarming-home-automation-and-rust.md"
draft: false
---

## Thesis

Republished from The Changelog, this episode has Jerod Santo and Adam Stacoviak interviewing Practical AI co-host Chris Benson. Benson argues that the convergence of AI, hardware and robotics makes this "the coolest moment in human history", and that most real progress comes from small teams and makers using open models and cheap devices rather than from the big labs. He sets a deliberately high bar for "swarming" and says almost nothing marketed as a swarm today meets it.

## Key points

- **Open models commoditise the frontier.** Benson says the gap between frontier and open models has narrowed sharply, pushing big providers towards vertical AI services; he sees a future of many small models and agents rather than one giant model.
- **What swarming means.** He reads his own definition: independent, fully autonomous platforms acting as one decentralised decision-making entity with humans "on the loop" (supervising and assigning missions) rather than in the loop. Drone light shows are pre-programmed fleets, "not a swarm".
- **Lessons from nature.** As a licensed wildlife rehabber, Benson draws on ants, bees and starling murmurations; an ant bridge shows a collective achieving what no individual can. Santo's toilet-removing cleaning swarm prompts discussion of guardrails and a human kill switch.
- **Timeline.** Over two to three years he expects many products calling themselves swarms but few meeting his definition, with nation states and well-funded companies likely first.
- **Home automation, locally.** Benson inherited a heavily automated house, buys only Matter-compatible devices and is moving away from cloud services such as Alexa for privacy, adding agents with small Hugging Face models on home hardware.
- **Getting started.** He recommends ROS 2, open drone projects and Rust, citing Tokio for concurrency and Embassy for running code on boards too small for an operating system.

## Quotes

> "the world is turning out to be a mini model world instead of a giant model world." — Chris Benson

> "I really think the next big revolution in AI is going to be physical AI" — Chris Benson
