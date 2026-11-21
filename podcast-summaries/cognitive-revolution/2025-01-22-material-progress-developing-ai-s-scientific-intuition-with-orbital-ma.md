---
title: "Material Progress: Developing AI's Scientific Intuition, with Orbital Materials' Jonathan & Tim"
date: 2025-01-22
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/material-progress-developing-ais-scientific-intuition-with-orbital-materials-jonathan-tim/"
youtube: "https://www.youtube.com/watch?v=eVlXEJhCRvo"
hosts: ["Nathan Labenz"]
guests: ["Tim Duignan", "Jonathan Godwin"]
description: "Orbital Materials says neural network potentials trained on small crystals capture enough physics to simulate proteins and design materials, replacing decades of hard-won chemical intuition with fast simulation."
tags: ["materials-science", "ai-for-science", "diffusion-models", "molecular-simulation", "carbon-removal"]
source_transcript: "cognitive-revolution/episodes/2025/01/2025-01-22-material-progress-developing-ai-s-scientific-intuition-with-orbital-ma.md"
draft: false
---

## Thesis

Jonathan Godwin (founder and CEO of Orbital Materials) and researcher Tim Duignan tell Nathan Labenz that AI models trained on small, cheap first-principles simulations learn physics that carries over to much larger and messier systems. That lets them run simulations orders of magnitude faster than numerical methods. Combined with generative design and an in-house wet lab, they argue this can replace the trial-and-error craft knowledge that has long driven materials science.

## Key points

- **Why materials matter.** Godwin uses the low-K dielectrics in chips as his example: without steady materials advances there would be no extra transistors and no AI. He says TSMC is hard to copy because its expertise sits in craftspeople, not documents.
- **Two model families.** Godwin explains that Linus, the foundation model, is a diffusion model that generates materials with target properties such as a given band gap. ORB models, fine-tuned on quantum calculations, predict forces from atomic coordinates. Duignan notes that a diffusion model's score is mathematically analogous to a force field.
- **Distance as a first-class input.** Godwin says message-passing networks work like transformers that take interatomic distances as input. Because they have no positional encoding, there is no context-window limit, and simulations can grow with the number of chips.
- **Potassium ion channel.** Running ORB on a single V100, with atoms beyond about 20 angstroms frozen, Duignan saw water entering the selectivity filter. A hydroxyl group appeared to pull it in, which could explain why removing that group cuts conductivity by almost an order of magnitude. He stresses that the result is not yet peer reviewed.
- **Data centres first.** Godwin says Orbital has raised less than $40 million. It focuses on data centre materials and decarbonisation, including a CO2-capture sponge that uses data-centre waste heat, which will be piloted with AWS.
- **Job satisfaction.** Asked about an MIT study that found 44% more materials discovered but 82% of scientists less satisfied, Duignan says the tools let a physicist like him gain chemical intuition. Godwin expects creative work to be automated before manual work.

## Quotes

> "The thing that completely blew my mind was training on small inorganic crystals, like 20-atom systems, to then simulate a protein through out-of-the-box generalization." — Jonathan Godwin

> "I literally thought this is such a silly idea. This is just not going to work. It's going to crash straight away." — Tim Duignan
