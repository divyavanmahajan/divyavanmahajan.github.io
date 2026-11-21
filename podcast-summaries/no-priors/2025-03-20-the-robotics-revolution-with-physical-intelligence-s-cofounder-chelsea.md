---
title: "The Robotics Revolution, with Physical Intelligence’s Cofounder Chelsea Finn"
date: 2025-03-20
show: no-priors
url: "https://www.youtube.com/watch?v=AzqsJk1f12k"
youtube: "https://www.youtube.com/watch?v=AzqsJk1f12k"
duration_min: 35
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Chelsea Finn"]
description: "Chelsea Finn argues general-purpose robot foundation models depend above all on more diverse real-robot data, pooled across embodiments, rather than on humanoid hardware or new sensors."
tags: ["robotics", "foundation-models", "embodied-ai", "training-data", "open-source"]
source_transcript: "no-priors/episodes/2025/03/2025-03-20-the-robotics-revolution-with-physical-intelligence-s-cofounder-chelsea.md"
draft: false
---

## Thesis

Chelsea Finn, cofounder of Physical Intelligence and a Stanford professor, tells Elad Gil that the company is building one large neural network meant to control any robot doing any task in any setting. She argues that the main bottleneck is not hardware, sensors or reasoning but the diversity of real-robot data. That data can be pooled across different robot bodies, and pre-trained vision-language models add to it.

## Key points

- **Generalists over single applications.** Finn says robotics has often gone deep on one application and got stuck there. Physical Intelligence instead trains on data from many platforms (one or two arms, six or seven joints), so that changing the hardware does not mean throwing data away.
- **Diversity over quantity.** The late-October release (laundry folding, table cleaning, box building) used data collected in three buildings. Finn's top priority is taking robots into many more places, objects and tasks, collected mainly by teleoperation.
- **Openness as strategy.** The company has open-sourced weights and shared robot designs with hardware companies. Finn says this helps the field mature and attracts researchers, and that her bigger worry is the problem going unsolved, not competition.
- **Turning points.** She credits planning with language models, web-scale vision-language transfer (a robot handing a can to a picture of Taylor Swift), cross-lab training with RT-X, and Aloha teleoperation work. The new hierarchical interactive robot pairs a high-level model that reasons over prompts and corrections with a low-level motor policy.
- **Humanoids and sensors.** Finn thinks humanoids are "a little overrated" because they are harder to teleoperate. Wrist-mounted RGB cameras give much of what touch sensors would, and she would add memory to the policies, which currently look only at the current frame, before adding new sensors.
- **Compared with self-driving.** Robotics has a higher-dimensional action space (14 dimensions on static two-arm robots) and less data. But Finn says many commercial uses do not require handling the full distribution of situations, and they carry less safety risk. She expects a "Cambrian explosion" of specialized hardware.

## Quotes

> "I'm not really worried about competitors I'm more worried that no one will solve the problem" — Chelsea Finn

> "I would much rather add memory to our models before we add other sensors" — Chelsea Finn
