---
title: "🔬 Synthesis Superintelligence: from Semiconductors to Superconductors — Periodic Labs’ Liam Fedus and Ekin Dogus Cubuk"
date: 2026-10-08
show: latent-space
url: "https://www.latent.space/p/periodic"
duration_min: 84
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Ekin Dogus Cubuk"]
description: "Periodic Labs argues AI cannot think its way to new materials; it needs autonomous labs whose noisy experimental data, including null results, trains models on the process of science."
tags: ["ai-for-science", "materials-science", "lab-automation", "reinforcement-learning", "superconductivity"]
source_transcript: "latent-space/episodes/2026/10/2026-10-08-synthesis-superintelligence-from-semiconductors-to-superconductors-per.md"
draft: false
---

## Thesis

Liam Fedus and Ekin Dogus Cubuk, who built Periodic Labs together, tell swyx and Alessio Fanelli that new knowledge comes from testing conjectures against reality, not from reasoning alone. Their bet is a loop of AI, simulation and high-throughput physical experiments aimed at what they call "synthesis superintelligence", with the lab's own data as ground truth for reinforcement learning.

## Key points

- **Science is noisy.** The guests contrast math and coding, where all context is available, with experiments that come out of the furnace unlabelled. Cubuk describes furnaces degrading with use, uneven temperatures, and a PhD-era laser setup thrown off by someone walking upstairs at night.
- **RL environments from the lab.** Waiting days for a superconductor result is too slow and noisy to use as a reward. Instead Periodic rewards sub-tasks such as identifying the phases present in X-ray diffraction data, and builds time-stamped environments from its own campaigns so models cannot pass by recalling memorised literature.
- **Why simulation is not enough.** Cubuk explains density functional theory as reducing an exponential quantum problem to roughly N-cubed cost. It still models perfect crystals, misses microstructure, and cannot easily predict superconducting temperature, so DFT results are calibrated against experiment.
- **Intelligent instruments and null results.** AI on the machines captures richer data, and in one case spotted a cyclic loading error across experiments. Negative results matter because the literature mostly reports successes; labelling per campaign rather than per experiment helps balance the data.
- **Team and business.** Hires span solid-state chemists, physicists, hardware engineers and LLM researchers, including Dima Bahdanau, inventor of Bahdanau attention. Forward-deployed engineers now take the tools to semiconductor partners, with a longer-term aim of pricing outcomes.
- **Path to superconductors.** Cubuk argues the hard part is synthesis, not ideas. He cites nickelates, later made superconducting in thin films by Harold Hwang, and the Japanese group that found magnesium diboride after trying about thirty thousand materials.

## Quotes

> "you can't just think your way to a solution." — Liam Fedus

> "in real life, most things that require intelligence are actually more like science." — Ekin Dogus Cubuk
