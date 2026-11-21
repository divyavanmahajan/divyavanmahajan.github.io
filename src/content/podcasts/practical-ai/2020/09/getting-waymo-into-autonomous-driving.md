---
title: Getting Waymo into autonomous driving
description: >-
  Fully driverless driving works in bounded areas today; the hard part is
  scaling to the long tail of scenarios, which needs fused sensors, maps and
  structured machine learning.
pubDate: '2020-09-01'
show: practical-ai
episode: 103
url: 'https://share.transistor.fm/s/1f75eb41'
durationMin: 61
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Drago Anguelov
tags:
  - autonomous-vehicles
  - waymo
  - computer-vision
  - behavior-prediction
  - robotics
draft: false
---
## Thesis

Drago Anguelov, principal scientist and head of research at Waymo, argues that self-driving has made real, accelerating progress but that launching a safe, fully driverless product is unusually complex. Waymo can already learn to drive a specific area well; the open work is scaling across new cities, weather and rare events. He sees machine learning, with structured models of objects and their interactions, as the main multiplier.

## Key points

- **Path to Waymo.** Anguelov describes a PhD at Stanford under Daphne Koller with exposure to Sebastian Thrun's robotics lab, a computer vision startup (Riya, later like.com), and eight years at Google on Street View pose estimation, Google Goggles and early deep nets for Google Photos, before joining self-driving in 2015.
- **State of the industry.** He says Waymo gives thousands of rides a week in the Phoenix metro area, with 5 to 10% fully driverless before COVID. Beyond technology, he lists regulation, product design and building hardware at scale as open problems.
- **Sensors and compute.** Camera, LiDAR and radar are the mainstays; Anguelov calls cameras the richest source and LiDAR the most accurate for geometry, with up to a million returns per spin. Compute must handle objects up to 300 meters away and crowded scenes, favouring parallel GPU or TPU-style hardware at low wattage.
- **The modular stack.** He walks through maps (treated as a fourth sensor that must be updated when the world changes), localization, perception, behaviour prediction and planning, calling the whole thing an integration problem.
- **Prediction models.** Anguelov contrasts the rasterised approach of ChauffeurNet with graph neural networks and transformers that model object interactions directly. His MultiPath work uses about 128 "static anchors" to turn trajectory prediction into a supervised, detection-like problem and avoid mode averaging.
- **Why it matters.** He cites about 1.3 million road deaths a year worldwide, mostly from human error, plus access for people who cannot drive, fewer parking lots and a likely boost to electric vehicles, while expecting adoption to take time.

## Quotes

> "I think map is a really important safety feature and in a sense an additional sensor." — Drago Anguelov

> "It's as if a Boeing plane with 150 people crashes every hour all year." — Drago Anguelov
