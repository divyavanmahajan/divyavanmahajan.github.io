---
title: "🔬 “We have foundation models for language, not for physics” — Anima Anandkumar, Bren Professor of Computing"
date: 2026-08-26
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/we_have_foundation_models_for_language_not_for_physics_anima_anandkumar_bren_professor_of_computing"
duration_min: 84
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Anima Anandkumar"]
description: "Neural operators that combine data with physics constraints at any resolution already beat traditional simulators on speed, and point towards foundation models for the physical world."
tags: ["ai-for-science", "neural-operators", "weather-forecasting", "physics-simulation", "formal-verification"]
source_transcript: "latent-space/episodes/2026/08/2026-08-26-we-have-foundation-models-for-language-not-for-physics-anima-anandkuma.md"
draft: false
---

## Thesis

Caltech professor Anima Anandkumar, formerly head of AI research at NVIDIA, argues that language models generate ideas but cannot test them in the physical world. Physical data is scarce, high-resolution and multi-scale, so it needs architectures with built-in structure. Her neural operators learn mappings between continuous functions, mix data with physics constraints, and have matched traditional simulators in fields from weather to fusion while running orders of magnitude faster. (This episode was hosted by Latent Space's AI for Science hosts Brandon of Atomic AI and RJ Haneke.)

## Key points

- **Why PINNs are not enough.** Physics-informed neural networks re-solve each equation from scratch and often fail to optimise, especially for turbulent, time-dependent problems. Neural operators learn from many solved instances and can add physics losses at finer resolution than the training data.
- **Fourier neural operators.** Anandkumar says working in the Fourier domain captures non-local effects at roughly quasi-linear cost, whereas transformers become infeasible at the hundreds of billions of grid points that industrial 3D-plus-time simulations need.
- **FourCastNet.** Trained in 2021 on about 50,000 global ERA5 reanalysis samples, it was nearly as accurate as traditional forecasts and tens of thousands of times faster on a consumer-grade GPU. It was released open source, and ECMWF now publishes its output. FourCastNet 3 adds spherical geometry for stable long rollouts and calibrated ensembles for extreme events; the Allen AI Institute has built climate emulators on the architecture.
- **Other domains.** Plasma modelling with the UK Atomic Energy Agency runs a million times faster than simulation, alongside carbon sequestration, car aerodynamics and inverse design of lithography masks, quantum dots and photonics.
- **Verification.** TorchLean lets developers write PyTorch-like networks in Lean and prove properties such as robustness bounds, though Lean remains CPU-bound and hard to scale.
- **Policy and bottlenecks.** Now on the UN scientific advisory board, she warns that regulation which equates AI with language models will slow AI for science. The bottleneck she would remove is compute for research.

## Quotes

> "Because we have foundation models for language, maybe vision, but not for physics." — Anima Anandkumar

> "To me, theory should not be a constraint, right? It should be an enabler." — Anima Anandkumar
