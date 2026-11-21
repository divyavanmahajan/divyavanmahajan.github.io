---
title: "Popular Mechanistic Interpretability: Goodfire Lights the Way to AI Safety"
date: 2024-08-17
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/popular-mechanistic-interpretability-goodfire-lights-the-way-to-ai-safety/"
youtube: "https://www.youtube.com/watch?v=45g68Zu3E2k"
duration_min: 112
hosts: ["Nathan Labenz"]
guests: ["Dan Balsam", "Tom McGrath"]
description: "Goodfire's founders argue that sparse autoencoders have turned interpretability into a scalable engineering discipline and that deployed AI models should, by default, be ones we understand."
tags: ["mechanistic-interpretability", "sparse-autoencoders", "ai-safety", "superposition", "ai-startups"]
source_transcript: "cognitive-revolution/episodes/2024/08/2024-08-17-popular-mechanistic-interpretability-goodfire-lights-the-way-to-ai-saf.md"
draft: false
---

## Thesis

Nathan Labenz talks with Dan Balsam (CTO) and Tom McGrath (chief scientist) of Goodfire, a new mechanistic interpretability company in which Labenz has made a small investment. They argue that sparse autoencoders have moved interpretability from artisanal study of single neurons to industrial-scale analysis of model internals. Their goal is a world where nobody deploys a model they do not understand, and where interpretability also pulls new science out of domain models.

## Key points

- **From neurons to features.** McGrath traces the path from polysemantic neurons, which fire on several unrelated concepts, through Anthropic's work on superposition, to sparse autoencoders: very wide MLPs with a sparsity penalty that, in his words, worked far better than expected.
- **How models pack concepts.** Activations between layers have only 4,096 dimensions in Llama 3 8B, so models reuse near-orthogonal directions. McGrath names three pressures: importance, compression and the structure of the data.
- **The residual stream as RAM.** Balsam compares the residual stream to global variables that each layer writes to, which makes it the easiest place to intervene. McGrath adds that each token position is like a thread in a multithreaded program.
- **Costs and engineering.** SAEs can be bigger than the model itself, and splicing them in recovers only mid-nineties percent of the loss. Goodfire harvests activations to disk so one expensive inference pass supports many training sweeps. They credit NDIF's tooling.
- **Business model.** Goodfire raised a $7 million seed round led by Lightspeed and is a public benefit corporation. Balsam cites a McKinsey survey in which 44 percent of business leaders reported harm from unintended model behaviour, and plans a research preview for steering Llama models.
- **Science and limits.** McGrath hopes to extract new knowledge from models like AlphaFold and ESM 3. He doubts that mixing weather and language training yields much transfer, and suspects claims that video models are "world simulators" describe the future, not the present.

## Quotes

> "the story of interpretability over the last decade has been the story of kind of courage paying off. People who believe it can be done have managed to get it done." — Tom McGrath

> "If we live in a future where we're capable of explaining models, anything you can train a model to do, you can explain." — Dan Balsam
