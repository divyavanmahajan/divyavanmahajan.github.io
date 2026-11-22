---
title: "Flying high with AI drone racing at AlphaPilot"
date: 2019-10-07
show: practical-ai
episode: 59
url: "https://share.transistor.fm/s/db834f34"
duration_min: 48
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Keith Lynn"]
description: "Lockheed Martin's AlphaPilot uses autonomous drone racing on a standard drone to test algorithms and, Keith Lynn argues, to make AI visible and inspiring to the public."
tags: ["autonomous-systems", "drones", "robotics", "simulation", "edge-computing"]
source_transcript: "practical-ai/episodes/2019/10/2019-10-07-flying-high-with-ai-drone-racing-at-alphapilot.md"
draft: false
---

## Thesis

Keith Lynn, AlphaPilot program manager at Lockheed Martin, describes an open innovation challenge, run with the Drone Racing League, in which university teams write software that flies racing drones with no human input. He argues that racing has historically made new technology familiar, and that public AI races can do the same for autonomy.

## Key points

- **Origins.** Lynn, a physicist with about 11 years at Lockheed, took on the project roughly a year earlier when a vice president asked for a global challenge on autonomy. Human drone racing is about four years old, and the league reports over 80 million viewers a year, with drones reaching around 80 miles an hour.
- **The challenge.** Prize money is $2 million for the top teams plus a $250,000 bonus if an algorithm beats a professional human pilot. About 430 teams entered, and a simulation-based qualifier picked nine, including Georgia Tech, UCLA, University of Zurich and KAIST.
- **Standard hardware.** Every team flies the same drone so that results depend on the algorithms. Decisions run on board on an NVIDIA Xavier, with four cameras, an inertial measurement unit and a downward laser range finder sampling at about 200 Hz.
- **Simulation to reality.** Teams train in a modified DRL simulator with a hardware-in-the-loop kit, test at a two-gate facility in Littleton, Colorado, and submit final code a week before each race. Lynn stresses modelling wind, glare, drag and sensor error to close the sim-to-real gap.
- **Wider applications.** Lynn sees near-term value in cognitive assistance, human-machine teaming, disaster relief, space and undersea inspection. He does not expect fully automated passenger aircraft soon.
- **Getting involved.** He points to drones with a Raspberry Pi or NVIDIA Nano, and the open-source FlightGoggles simulator from Sertac Karaman at MIT. The first race was set for October 8 at the University of Central Florida, with coverage on NBC Sports.

## Quotes

> "we wanted this to be about the quality of the algorithms." — Keith Lynn

> "racing has a history of being a catalyst for getting people inspired with new technology." — Keith Lynn
