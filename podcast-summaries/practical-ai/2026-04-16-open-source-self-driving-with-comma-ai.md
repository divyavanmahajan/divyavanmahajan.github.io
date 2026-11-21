---
title: "Open Source Self-Driving with Comma AI"
date: 2026-04-16
show: practical-ai
episode: 353
url: "https://share.transistor.fm/s/9d157a1b"
youtube: "https://www.youtube.com/watch?v=EsorzvTn_y0"
duration_min: 46
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Harald Schäfer"]
description: "Comma AI ships useful driver assistance today by betting on end-to-end models trained inside a learned world-model simulator, on a fraction of competitors' compute."
tags: ["autonomous-driving", "world-models", "open-source", "robotics", "edge-ai"]
source_transcript: "practical-ai/episodes/2026/04/2026-04-16-open-source-self-driving-with-comma-ai.md"
draft: false
---

## Thesis

Harald Schäfer, CTO of Comma AI, argues that self-driving should be solved incrementally: ship useful, supervised driver assistance now while working towards full autonomy. Comma's bet is a fully end-to-end model trained inside a learned diffusion simulator, which needs less human labelling than the approaches of Waymo and Tesla and suits a company that wants to stay profitable.

## Key points

- **Product and stack.** A windshield device plugs into the car's CAN bus near the rear-view mirror and runs openpilot, which Schäfer calls the most popular open source self-driving stack and possibly the most popular robotics project on GitHub. Over 50% of users' miles are driven by the system.
- **End to end.** The on-device model takes video and outputs longitudinal acceleration and curvature, with no intermediate detectors. Training starts from hundreds of millions of miles of human driving, but Schäfer says pure imitation learning fails; the model must see mistakes and learn recoveries in simulation.
- **World model as simulator.** Comma now trains its small policy model entirely in a learned video simulator. Schäfer says the hard part is not photorealism but making the generated video respond accurately to actions such as "turn left 10 degrees". The world model also supervises recovery trajectories.
- **Compute constraints.** Comma runs its own training data center with about 100x less compute than Waymo or Tesla, and the device uses under a hundredth of an FSD computer. An external GPU is planned; a 10x bigger model detected green lights in nuanced situations twice as often.
- **Unsolved problems.** Schäfer names controls, RL and continual learning as not working at all for robotics. Comma still learns tyre stiffness and friction live per car with classical optimisation.
- **Why open source.** The community ports support to new cars, which needs an open car interface. Schäfer also says owning a device means knowing and controlling what runs on it.

## Quotes

> "You need to expose the model during training to mistakes and show it how to recover from those mistakes." — Harald Schäfer

> "you should question whether you really own the device or you're in some weird contract with someone." — Harald Schäfer
