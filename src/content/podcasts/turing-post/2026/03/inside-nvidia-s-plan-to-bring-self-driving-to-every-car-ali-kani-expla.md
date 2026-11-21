---
title: Inside NVIDIA’s Plan to Bring Self-Driving to Every Car | Ali Kani explains
description: >-
  NVIDIA's Ali Kani argues an open, end-to-end driving model paired with a
  classical safety stack can make many carmakers' vehicles self-driving, not
  just closed fleets.
pubDate: '2026-03-31'
show: turing-post
url: >-
  https://www.turingpost.com/podcast/s/turing_post/inside_nvidia_s_plan_to_bring_self-driving_to_every_car_ali_kani_explains
durationMin: 34
hosts:
  - Ksenia Se
guests:
  - Ali Kani
tags:
  - autonomous-driving
  - nvidia
  - open-source
  - simulation
  - synthetic-data
  - physical-ai
draft: false
---
## Thesis

Recorded during a ride through San Francisco traffic in a production Level 2 car running NVIDIA's software, Ali Kani, NVIDIA's VP of automotive, argues that all the key pieces for self-driving now exist. In his view, an open stack, rather than a closed system like Tesla's or Waymo's, lets many carmakers make their own vehicles autonomous. He expects Level 4 trials in the first half of next year.

## Key points

- **Cheap Level 2 hardware.** The demo car uses a single Orin computer (250 TOPS) with 10 cameras, five radars and 12 ultrasonic sensors. Kani puts computer plus sensors at under $1,000. The Level 4 architecture, Hyperion, uses two Thor chips (2,000 TOPS), lidar and redundant computers and sensors.
- **Two stacks, one guardrail.** An end-to-end vision-language-action model with reasoning (Alpamayo) outputs trajectories, while a classical, traceable stack called Halos enforces road rules. In one example, Halos blocks a turn at a no-right-on-red intersection even though the end-to-end model would take it.
- **Compute becomes data.** Kani concedes Tesla has more real driving data but says synthetic data from Cosmos and Omniverse fills the gaps. Failures get neurally reconstructed into simulation and then varied. A real-time generative closed-loop simulator (AlphaDream in the show notes) is due in the coming months.
- **Open source in practice.** He cites 150,000 downloads of Alpamayo and 1.5 million for NVIDIA's physical AI driving dataset. Partners distil the large open model down to their own hardware.
- **Regional behaviour.** NVIDIA tests fleets in 20 relatively distinctive cities. Rules such as Autobahn lane discipline, or how close to drive to the curb on narrow European roads, can be set per OEM or per region on top of what the model learns.
- **Remaining polish.** The beta ships next quarter. Kani names occasional "ghost" braking and negotiation at unprotected intersections and four-way stops as open issues. Only drives scored as good are used for training.

## Quotes

> "we have an End-to-End model that is literally like a large language model that a ChatGPT is based on, except it's a video language model" — Ali Kani

> "Tesla is a closed system, and this, this system allows many, many cars to become self-driving cars." — Ali Kani
