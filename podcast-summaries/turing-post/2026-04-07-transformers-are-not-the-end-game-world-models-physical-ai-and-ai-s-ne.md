---
title: "Transformers Are Not the End Game | World Models, Physical AI, and AI’s Next Frontier"
date: 2026-04-07
show: turing-post
url: "https://www.turingpost.com/podcast/s/turing_post/transformers_are_not_the_end_game_world_models_physical_ai_and_ai_s_next_frontier"
duration_min: 18
hosts: ["Ksenia Se"]
guests: ["Sanja Fidler"]
description: "NVIDIA's Sanja Fidler argues transformers and world models are not rivals, that learned simulation is overtaking reconstruction for self-driving, and that physical AI remains the frontier."
tags: ["world-models", "physical-ai", "autonomous-driving", "robotics", "simulation"]
source_transcript: "turing-post/episodes/2026/04/2026-04-07-transformers-are-not-the-end-game-world-models-physical-ai-and-ai-s-ne.md"
draft: false
---

## Thesis

Recorded at NVIDIA GTC, this conversation features Sanja Fidler, VP of AI Research at NVIDIA and head of its Spatial Intelligence Lab. She argues that the transformer-versus-world-models debate is a false choice: transformers are an architecture, world models are a task. She sees world models and spatial intelligence as the next frontier, expects new architectures to follow, and thinks autonomous driving will reach a "ChatGPT moment" well before general robotics.

## Key points

- **Architecture versus task.** Fidler explains that transformers can power LLMs or world models, which act as simulators that predict what happens next after an action. Spatial intelligence stresses 3D, which robots need. She points to state space models and mixture of experts as signs that architectures will keep changing.
- **From Cosmos to Alpa Dreams.** NVIDIA's Cosmos, released the year before, took minutes to generate five seconds of video. Alpa Dreams, announced at GTC, is real-time and interactive, "like a game engine" with a human driver or robot in the loop.
- **Evolution of AV simulation.** Simulation went from artist-built graphics engines (two months for a new San Francisco intersection) to NeRF and Gaussian-splat reconstructions, which NVIDIA uses for two million simulations a day but which cannot change how other road users behave. Learned simulation, pretrained on general video and fine-tuned on driving data, aims to fix that; Fidler declines to call it "solved."
- **Open problems.** Current models still depend on separate map-and-cuboid simulation, which can fall out of sync with what the model renders. They also need radar, lidar and audio (hearing an ambulance before seeing it). For robots, touch data is scarce: options include data-collection gloves or classical physics simulators as data generators.
- **Timelines.** She sees physical AI as where AGI is clearly not there yet. Autonomous driving at mass scale is probably under five years away; general robotics looks like driving in 2017-18, though more people now work on it. NVIDIA has itself shifted from heavy 3D toward learning from camera data, and she says the field is still betting on both.

## Quotes

> "So I don't think transformers is the end game, or I would be very sad if that's the case." — Sanja Fidler

> "These models right now is, is the upper bound is data, right? So if we never teach it how force looks like, it's not gonna know." — Sanja Fidler
