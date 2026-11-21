---
title: "The Autonomy Revolution with Hayk Martiros of Skydio"
date: 2023-07-04
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/the-autonomy-revolution-with-hayk-martiros-of-skydio/"
youtube: "https://www.youtube.com/watch?v=aaLIxW3OMXo"
hosts: ["Nathan Labenz"]
guests: ["Hayk Martiros"]
description: "Skydio's Hayk Martiros explains how a vertically integrated, mostly hand-engineered autonomy stack makes drones reliable enough for infrastructure inspection, and why Skydio refuses to weaponize them."
tags: ["drones", "robotics", "autonomy", "edge-ai", "defense"]
source_transcript: "cognitive-revolution/episodes/2023/07/2023-07-04-the-autonomy-revolution-with-hayk-martiros-of-skydio.md"
draft: false
---

## Thesis

Hayk Martiros, VP of Autonomy at Skydio, the largest US drone maker, argues that a trustworthy autonomous robot requires control of the whole stack, from motor currents to mission planning. He says the next step is not end-to-end navigation but end-to-end missions, where docked drones act as domain experts for inspection. He also explains why Skydio has committed not to weaponize its drones.

## Key points

- **Inputs and outputs.** Martiros describes six navigation cameras with 200-degree fields of view as the main input (the first drone had 13), and motor voltages updated at around 30 kilohertz as the lowest-level output.
- **Layered loops.** He says each order-of-magnitude change in control rate justifies a separate system, giving about four layers. A second-order nonlinear optimiser runs around 500 iterations per second to balance aerodynamics, obstacles and user commands together.
- **Learning where it helps.** Over ten deep networks run on the drone. Skydio shipped what Martiros calls the first deep-learning obstacle avoidance on the Skydio 2, after a 2017 paper. He argues known physics should be built in rather than learned.
- **SymForce.** His open-source library does symbolic computation, code generation and nonlinear optimisation; the core motion planner compiles to about 100,000 branch-free instructions.
- **Economics and compute.** The consumer Skydio 2 costs roughly $1,000 to $2,000; enterprise drones and docks run to tens of thousands and are priced on value. Labenz estimates missions could eventually cost about $1 each. Martiros puts compute at roughly 10% of flight power but says its weight matters more, since even 5 grams affects performance.
- **Work and war.** Martiros expects inspection workers to become managers of drone fleets and endorses universal basic income. Skydio's drones are used for reconnaissance in Ukraine, where GPS jamming favours its vision-based navigation.

## Quotes

> "it has to be about as reliable as somebody installing a printer copier, or buying a pickup truck or a washing machine." — Hayk Martiros

> "For a bunch of reasons, basically, I'm against weaponized autonomous systems. We will not weaponize our drones." — Hayk Martiros
