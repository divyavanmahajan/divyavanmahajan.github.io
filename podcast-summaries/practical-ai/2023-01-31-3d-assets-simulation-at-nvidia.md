---
title: "3D assets & simulation at NVIDIA"
date: 2023-01-31
show: practical-ai
episode: 209
url: "https://share.transistor.fm/s/2cd2558b"
duration_min: 43
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Beau Perschall"]
description: "NVIDIA's Beau Perschall argues that industrial simulation and synthetic data depend on standardised, metadata-rich 3D assets, which his SimReady standard on top of USD aims to provide."
tags: ["simulation", "synthetic-data", "3d-assets", "digital-twins", "omniverse"]
source_transcript: "practical-ai/episodes/2023/01/2023-01-31-3d-assets-simulation-at-nvidia.md"
draft: false
---

## Thesis

Beau Perschall, director of Omniverse Sim Data Ops at NVIDIA, describes the industrial metaverse as practical simulation work: factory planning, digital twins and autonomous vehicle training. He argues that the bottleneck is 3D content, which rarely carries the labels, physics and materials that data scientists need, and that an open, flexible standard called SimReady, built on Pixar's Universal Scene Description (USD), can fix that.

## Key points

- **What Omniverse is.** Perschall calls it NVIDIA's platform for building metaverse applications, with over 200,000 downloads. BMW uses it to plan factories and simulate worker safety; Ericsson built city digital twins to place cell towers. Connectors link it to Siemens, Revit, Blender, Houdini, Maya and Unreal.
- **Metaverse as the next internet.** He describes connected 3D worlds instead of linked pages, and says no single company builds it, any more than one company built the internet.
- **Simulation for safety and cost.** The Drive Sim platform tests dangerous traffic scenarios that cannot be captured in the real world. Robot arms can be retrained in simulation instead of taking a work cell offline.
- **SimReady.** Hired a year earlier after 20-plus years as a 3D artist, Perschall found NVIDIA researchers received assets with no semantic labels and built their own taxonomies. SimReady tooling adds labels, physics, materials and dimensions, then validates and exports USD. He compares glTF to a JPEG and USD to a layered Photoshop file.
- **Synthetic data.** He explains domain randomisation with "Toy Jensen", a model of NVIDIA's CEO hidden among random objects, and furniture retailers training AR systems to recognise sofas and chairs.
- **AI for SimReady.** His long-term aim is a cloud service that uses AI to identify materials, label assets and apply physics automatically. On edge deployment without bandwidth, which Benson asks about, he admits he does not yet know.

## Quotes

> "And everyone thinks everyone's competing. That's like saying who's building the internet." — Beau Perschall

> "I was a 3D artist for 20 plus years. In fact, I learned 3D before the Internet was a thing." — Beau Perschall
