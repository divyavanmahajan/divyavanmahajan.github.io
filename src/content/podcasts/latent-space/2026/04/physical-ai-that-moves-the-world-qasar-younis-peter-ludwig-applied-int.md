---
title: >-
  Physical AI that Moves the World — Qasar Younis & Peter Ludwig, Applied
  Intuition
description: >-
  Applied Intuition's founders argue physical AI is now limited less by model
  intelligence than by safety-critical deployment: embedded hardware, operating
  systems, simulation and statistical validation.
pubDate: '2026-04-27'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/physical_ai_that_moves_the_world_qasar_younis_peter_ludwig_applied_intuition
durationMin: 72
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Qasar Younis
  - Peter Ludwig
tags:
  - physical-ai
  - autonomy
  - simulation
  - embedded-systems
  - safety-critical
draft: false
---
## Thesis

Qasar Younis (CEO) and Peter Ludwig (CTO) of Applied Intuition describe their company as a technology provider, comparable to NVIDIA or AMD but without chips, that puts AI onto cars, trucks, mining and construction equipment, farm machinery and defence systems. Their argument is that in safety-critical settings the binding constraints are no longer model intelligence but deployment: running models within milliseconds on embedded hardware, updating software safely, and proving reliability statistically.

## Key points

- **Three buckets of work.** Ludwig lists simulation and tooling (where the company started, with robotaxi customers), a real-time operating system, and autonomy and world models. The company has more than 30 products, says it runs driverless L4 trucks in Japan, and counts 18 of the top 20 non-Chinese automakers as customers.
- **An "Android" for machines.** Drawing on his time at Google, Ludwig compares today's vehicles to the phone market before Android: dozens of operating systems. Consolidating them lets AI applications run across many chipsets and enables reliable over-the-air updates without "bricking" a vehicle.
- **Sensors and distillation.** LiDAR is used in R&D vehicles to teach camera models depth, then removed in cheaper production versions. Onboard models are distilled from larger offboard models to fit power and latency budgets.
- **Validation is statistical.** Ludwig says end-to-end models replaced pass-fail test cases, such as Euro NCAP's, with questions of how many "nines" of reliability you can prove. RL on end-to-end models requires neural simulation of sensor data, and sim-to-real matching can never be skipped.
- **Engineering with AI.** Claude Code has overtaken Cursor internally, and they keep a usage leaderboard. Interviews are harder but allow AI tools, and Ludwig sees a bimodal productivity gap among engineers, though humans must still validate safety-critical code.
- **Advice to founders.** Younis urges commercial constraints and narrow problems, warns against copying mature companies' strategies, and argues compounding technology is undervalued, citing Waymo.

## Quotes

> "in physical AI world, we're not really constrained right now by, like, the intelligence of the models." — Qasar Younis

> "every fraction of a millisecond counts." — Peter Ludwig
