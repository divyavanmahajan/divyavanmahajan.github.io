---
title: "Agentic AI for Drone & Robotic Swarming"
date: 2025-07-15
show: practical-ai
episode: 321
url: "https://share.transistor.fm/s/6743e631"
duration_min: 46
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "Chris Benson argues that true swarming means decentralized, emergent decision-making across autonomous platforms at the edge, not pre-programmed drone shows or centrally controlled robot fleets."
tags: ["swarm-robotics", "drones", "multi-agent-systems", "edge-ai", "autonomy"]
source_transcript: "practical-ai/episodes/2025/07/2025-07-15-agentic-ai-for-drone-robotic-swarming.md"
draft: false
---

## Thesis

Chris Benson, speaking for himself rather than his employer Lockheed Martin, argues that swarming is a behavior, not just many autonomous machines. A swarm functions as a single, distributed, decentralized decisioning entity with emergent behavior and humans on the loop. Daniel Whitenack questions him on what that means for AI models and oversight. Benson says such systems are only now becoming feasible.

## Key points

- **What is not a swarm.** Benson says drone light shows such as the one Whitenack recalls from the Beijing Olympics are pre-programmed GPS paths from a ground control station. Giving a group of vehicles "plays" also falls short.
- **Nature as the model.** Benson points to starling murmurations: thousands of birds sensing each other and moving together with no leader bird. He breaks down each word of his definition: single, independent, logical, distributed, decentralized and decisioning.
- **Why the edge matters.** A warehouse fleet controlled over WiFi by a central server is not a swarm, Benson says. Swarms matter where connectivity fails, such as disaster recovery after hurricanes or tornadoes, where a heterogeneous mix of robots moves rubble and searches for survivors.
- **The AI stack.** Each platform runs multiple agents and small models, some classical data science, on battery-powered edge hardware. Benson describes election algorithms that pick which platforms run which inference and issue results.
- **Guardrails.** Asked about mob-like emergent behavior, Benson distinguishes humans "in the loop" from "on the loop", where an operator approves or vetoes swarm decisions or orders a full recall.
- **Getting started.** Benson recommends ROS 2 and cheap maker hardware like Arduino, Raspberry Pi and Jetson. Whitenack mentions open, experimentation-friendly robots from Pollen Robotics, one of which his company Prediction Guard has ordered.

## Quotes

> "if you put 10 people into a room and ask them each to define swarming, you'll end up with about 17 different definitions of what swarming is." — Chris Benson

> "It's the human on the ground programming in their path." — Chris Benson
