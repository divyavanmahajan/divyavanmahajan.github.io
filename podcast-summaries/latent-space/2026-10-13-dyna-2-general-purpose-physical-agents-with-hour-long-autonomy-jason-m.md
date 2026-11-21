---
title: "Dyna-2: General Purpose Physical Agents with Hour-Long Autonomy — Jason Ma, Dyna Robotics"
date: 2026-10-13
show: latent-space
url: "https://www.latent.space/p/dyna"
duration_min: 72
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Jason Ma"]
description: "Dyna Robotics' Jason Ma argues that world action models pre-trained on human video, paired with in-house hardware and an agentic harness, can bring general-purpose robots into real deployments."
tags: ["robotics", "world-models", "physical-ai", "training-data", "hardware"]
source_transcript: "latent-space/episodes/2026/10/2026-10-13-dyna-2-general-purpose-physical-agents-with-hour-long-autonomy-jason-m.md"
draft: false
---

## Thesis

Recorded at Dyna Robotics' office, co-founder and chief scientist Jason Ma argues that robotics will follow the bitter lesson: scale the right data with simple algorithms. Robotics has no internet of training data, so a company must also own its sensors, hardware and deployments. Dyna-2, a "world action model" trained on more than one million hours of data, predicts future video and uses it to produce robot actions.

## Key points

- **What a world action model is.** Ma says inputs are camera video, joint-encoder readings and language instructions. The diffusion transformer predicts the future state of the world and then actions, which he compares to chain of thought in visual space. He argues this beats VLA models because predicting abstract representations builds in human bias.
- **Data strategy.** Human egocentric data gives a broad prior for physical tasks; a small amount of robot data bridges the gap to the robot's body. New tasks need hours or even tens of minutes of teleoperated demonstrations; chopping food took 45 minutes. Ma sees synthetic environments from frontier models as the next frontier, building on his Eureka work at Nvidia.
- **Hardware choices.** Dyna buys mature parts such as lidar but plans to build its own actuators. It sized its wheeled "semi-humanoid" to human proportions to match the human training data and gave it four degrees of freedom at the waist. Ma argues that legged robots are less safe and less energy efficient for now, and that dexterous hands still overheat.
- **Latency and the harness.** Models must run on the device with Dyna's own inference stack. They output roughly 50 or more continuous action dimensions 10 to 20 times a second. An agentic harness handles higher-level planning, such as moving towels from washer to dryer, so a full laundry loop runs for about an hour.
- **Deployments over demos.** Dyna's robots fold thousands of napkins a day across many Din Tai Fung locations in the US. The chain signed a larger contract and is considering food cutting. Best Western is another customer. The goal is to go from tens of deployed robots to hundreds next year.
- **Where Ma could be wrong.** A world model that also uses touch or sound might be far more data-efficient than one based on vision alone. Ma argues that robotics companies would adapt to that faster than video-generation companies moving into robotics.

## Quotes

> "But I think the bitter lesson here is that just keep the algorithm simpler and scale the right kind of data, then generalization, better behavior will emerge." — Jason Ma

> "Like you can't just hold a knife and not do anything for three second. That's gonna freak people out, right?" — Jason Ma
