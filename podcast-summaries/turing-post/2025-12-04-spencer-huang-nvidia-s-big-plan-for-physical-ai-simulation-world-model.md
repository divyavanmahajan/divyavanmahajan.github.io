---
title: "Spencer Huang: NVIDIA’s Big Plan for Physical AI: Simulation, World Models, and the 3 Computers"
date: 2025-12-04
show: turing-post
url: "https://www.turingpost.com/podcast/s/turing_post/spencer_huang_nvidia_s_big_plan_for_physical_ai_simulation_world_models_and_the_3_computers"
duration_min: 28
hosts: ["Ksenia Se"]
guests: ["Spencer Huang"]
description: "Spencer Huang argues that robots need simulation, world models and open, interoperable tooling to learn robust physical skills, and that the industry must share data to reach a baseline."
tags: ["robotics", "physical-ai", "simulation", "world-models", "open-source", "nvidia"]
source_transcript: "turing-post/episodes/2025/12/2025-12-04-spencer-huang-nvidia-s-big-plan-for-physical-ai-simulation-world-model.md"
draft: false
---

## Thesis

Spencer Huang, who leads NVIDIA's robotics software products, argues that physical AI depends on three computers (training, simulation and deployment) and on simulation that captures the distribution of the real world, not an exact copy of it. He tells Ksenia Se that conventional physics simulators and neural world models will mature together, and that the field's biggest problem is a data gap that only open, shared ecosystems can close.

## Key points

- **Three computers.** DGX trains the robot brain, OVX/Omniverse simulates and validates it at high fidelity before deployment, and on-robot compute runs it with headroom for functional safety and graceful failure.
- **Randomize, don't replicate.** In Isaac Lab, reinforcement learning randomizes properties such as floor friction, so a robot that meets snow for the first time treats it as "universe N plus one". Huang says this is the sense in which robots understand physics.
- **Simulators plus world models.** Conventional simulators struggle with soft bodies, while world models such as GR00T Dreams can generate diverse scenes but lack grounded physics. Huang describes a data flywheel in which each feeds the other, so the two grow up side by side like siblings.
- **Interop against fragmentation.** Teams build their own toolchains out of necessity. NVIDIA's answer is the Newton physics layer (with Google DeepMind and Disney Research, now under the Linux Foundation), a robotics flavour of OpenUSD, a solver-agnostic Isaac Lab and Isaac Lab Arena for policy evaluation, all open source along with Warp and PhysX.
- **Culture.** NVIDIA's flat "mission is boss" structure lets teams borrow work from elsewhere in the company, for example from gaming motion generation, to pull action data out of web videos. Huang, who has no PhD, says product work aims at platforms that don't require one.
- **Data worry.** Unlike LLMs, robotics lacks a large corpus. Huang urges the industry to stop hoarding data and to work together to reach a generalist baseline.

## Quotes

> "a car spends all of its time trying not to hit the world, whereas a robot spends all of its time trying to hit the world just right." — Spencer Huang

> "There's no way that one entity, one university, one country is going to be able to represent and, and digitize the entire world." — Spencer Huang
