---
title: '#333 – Andrej Karpathy: Tesla AI, Self-Driving, Optimus, Aliens, and AGI'
description: >-
  Andrej Karpathy argues that neural networks trained on data are replacing
  hand-written code, and that Tesla's camera-only data engine shows how Software
  2.0 works at production scale.
pubDate: '2022-10-29'
show: lex-fridman
episode: 333
url: 'https://lexfridman.com/andrej-karpathy/'
youtube: 'https://www.youtube.com/watch?v=cdiD-9MMpb0'
durationMin: 214
hosts:
  - Lex Fridman
guests:
  - Andrej Karpathy
tags:
  - software-2-0
  - self-driving
  - transformers
  - data-engine
  - agi
  - humanoid-robots
draft: false
---
## Thesis

Andrej Karpathy, former director of AI at Tesla, tells Lex Fridman that software is moving from hand-written code to neural network weights compiled from data sets and objectives ("Software 2.0"). He describes Tesla's autopilot as that shift in practice: a vision-only system improved by a data engine that mines rare cases from the fleet. He is bullish on AGI, sees the humanoid Optimus robot as a hedge in case internet data alone is not enough, and names nuclear weapons as his top concern for humanity.

## Key points

- **Transformers as general computers.** Karpathy calls the transformer a general-purpose differentiable computer: expressive in the forward pass, optimisable with backpropagation and efficient on GPUs. He notes that the architecture has barely changed since "Attention is all you need", while progress has come from scaling data and evaluation.
- **Software 2.0 at Tesla.** He says the autopilot's C++ fusion and tracking code was gradually replaced by neural nets that take all eight cameras and predict directly in 3D over time. He grew the annotation team from zero to about a thousand people and relied on offline 3D reconstruction to create ground truth.
- **Sensors as liability.** Karpathy argues that radar, ultrasonics and LiDAR add supply-chain cost, calibration work and "entropy", and that having a fleet matters more than the sensor choice. He predicts some LiDAR users will drop it and calls centimetre-level HD maps a crutch.
- **Optimus and revenue.** He says much of the autopilot stack was copied into the robot, which "thinks it's a car", and stresses building a product that earns revenue along the way instead of a "zero-one-loss function".
- **Leaving Tesla.** He left after five years because the job had become mostly meetings and he wanted to do technical work and teach again; he uses GitHub Copilot daily but says humans must still supervise its output.
- **AGI and risk.** Karpathy expects AGI to arrive gradually through products such as Copilot and "oracles", sees consciousness as emergent from large world models, and worries that bad AGI outcomes may be only a small step away from good ones.

## Quotes

> "Humans are just not very good at writing software, basically." — Andrej Karpathy

> "Do you have a fleet or not is significantly more important whether you have LiDAR or not." — Andrej Karpathy
