---
title: "AI-driven automation in manufacturing"
date: 2020-01-20
show: practical-ai
episode: 73
url: "https://share.transistor.fm/s/7adef20e"
duration_min: 47
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Costas Boulis"]
description: "Late-stage electronics assembly is still largely manual; Bright Machines argues standardised microfactories, digital twins and modern computer vision can cut deployment time and make automation robust."
tags: ["manufacturing", "robotics", "computer-vision", "digital-twins", "reinforcement-learning"]
source_transcript: "practical-ai/episodes/2020/01/2020-01-20-ai-driven-automation-in-manufacturing.md"
draft: false
---

## Thesis

Costas Boulis, chief scientist at Bright Machines, argues that manufacturing has lagged in AI adoption because labour was cheap, but rising labour costs and demand now require smarter robotics. His company's answer is standardised hardware cells ("microfactories") combined with a software-first approach: digital twins, high-level computer vision and reinforcement learning, aimed at shorter deployment times and solutions that keep working when conditions change.

## Key points

- **Where automation stops.** Boulis explains that placing small surface-mount components on circuit boards is well automated, but later steps such as inserting DIMM chips, heat sinks or ports, and casing products, are still done by people.
- **Outdated vision.** He describes current factory vision as low-level edge and blob detection chained from marker to marker, which takes months to build and breaks when lighting, camera calibration or board alignment shift. Mechanical fixes such as extra lights or 3D-printed cradles, he says, do not scale.
- **Microfactories.** Each cell has an industrial pick-and-place arm, conveyor, lights, cameras and a tray feeder. Standard hardware and a full 3D model of the cell make vision models easier to build and transfer.
- **No ImageNet for factories.** Boulis notes that custom components never appear on Flickr or image search, so Bright Machines relies on its digital twin to generate data and to let reinforcement learning agents explore tasks like DIMM insertion, using force feedback and negative rewards, without breaking physical robots.
- **Deployment constraints.** Models run on edge hardware because of strict latency, need retraining when drift or new defects appear, and need far more localisation precision than standard object detectors.
- **Jobs.** Boulis cites a typical manufacturer turnover rate of 300% and expects repetitive jobs to shift towards monitoring and programming robots over several years, comparing it to the arrival of computers. Benson, who uses digital twins at Lockheed Martin, asks about the human side.

## Quotes

> "The turnover rate for a typical manufacturer is 300%." — Costas Boulis

> "That is like how a blind person would navigate the world." — Costas Boulis
