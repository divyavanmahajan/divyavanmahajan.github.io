---
title: "🔬 Why There Is No \"AlphaFold for Materials\" — AI for Materials Discovery with Heather Kulik"
date: 2026-03-24
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/why_there_is_no_alphafold_for_materials_ai_for_materials_discovery_with_heather_kulik"
duration_min: 35
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Heather Kulik"]
description: "MIT's Heather Kulik argues materials lack an AlphaFold because their data is sparse, low-fidelity and rarely experimental, and because bonding varies far more across materials than across proteins."
tags: ["materials-science", "ai-for-science", "computational-chemistry", "active-learning", "datasets"]
source_transcript: "latent-space/episodes/2026/03/2026-03-24-why-there-is-no-alphafold-for-materials-ai-for-materials-discovery-wit.md"
draft: false
---

## Thesis

Heather Kulik, an MIT chemical engineering professor, argues that AI already speeds up materials discovery and can surprise expert chemists. She says an "AlphaFold for materials" is held back because training data comes mostly from low-fidelity simulations with no experimental ground truth like protein structure prediction's CASP benchmark, and because chemical bonding varies enormously across materials.

## Key points

- **A plastic four times tougher.** Kulik describes AI screening tens of thousands of candidate polymer networks, each of which would take months to years to test in a lab. It found a design about four times tougher, based on a quantum mechanical effect that stabilises molecules as they break. Experimentalists said they would never have come up with it, but made it and confirmed it.
- **Active learning across many objectives.** Her group's metal-organic framework (MOF) work for direct air capture of CO2 optimises seven objectives at once, including cost, humidity and thermal stability, and CO2 selectivity. She estimates even rough ML models give a 100- to 1,000-fold speed-up for each dimension.
- **Hype about "foundation potentials".** Kulik says one widely hailed machine-learned interatomic potential was only about five times faster than her fastest GPU DFT calculation in her tests, and sometimes made stable molecules fall apart. She calls for stricter evidence before claiming such models can replace physics-based simulation.
- **Data gaps.** Repositories such as Materials Project and Open Catalyst Project rely on low-fidelity DFT. Reactivity, transition metals and excited states get little attention because there are no benchmarks. Proteins use 20 amino acids, while materials have far more building blocks, and processing conditions are not modelled at all.
- **LLMs as tools, not experts.** She finds ChatGPT good at "Wikipedia level" chemistry but unable to design a ligand with exactly 22 atoms. Mining the literature for MOF stability showed that the values in authors' graphs often disagree with how the authors describe them, and LLM extraction still produces false positives.
- **The academic's role.** With companies like Microsoft and Meta holding far more compute, Kulik steers her group towards problems that compute alone won't solve. She also wants cloud labs and machine-readable reporting of results.

## Quotes

> "I can never get an answer that has 22 atoms." — Heather Kulik

> "all the smartest ML engineers right now are learning on data that is not going to be reflective of experiment." — Heather Kulik
