---
title: "Don't Fight Backprop: Goodfire's Vision for Intentional Design, w/ Dan Balsam & Tom McGrath"
date: 2026-03-05
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/don-t-fight-backprop-goodfire-s-vision-for-intentional-design-w-dan-balsam-tom-mcgrath/"
youtube: "https://www.youtube.com/watch?v=q5IIN0pUK-E"
duration_min: 107
hosts: ["Nathan Labenz"]
guests: ["Dan Balsam", "Tom McGrath"]
description: "Goodfire's Dan Balsam and Tom McGrath argue interpretability should shape what models learn during training by reshaping the loss landscape, not blocking gradients, while warning the methods aren't ready for frontier models."
tags: ["interpretability", "intentional-design", "hallucinations", "ai-safety", "life-sciences"]
source_transcript: "cognitive-revolution/episodes/2026/03/2026-03-05-don-t-fight-backprop-goodfire-s-vision-for-intentional-design-w-dan-ba.md"
draft: false
---

## Thesis

Goodfire CTO Dan Balsam and chief scientist Tom McGrath tell Nathan Labenz that interpretability is for three things: scientific discovery, monitoring and auditing, and a new pillar they call "intentional design". Intentional design uses interpretability as the observation half of a closed-loop controller for training. Their core principle is not to fight backprop: rather than blocking gradient descent, make the desired behaviour the easiest thing for the model to learn.

## Key points

- **Funding and geometry.** Goodfire has raised a $150M Series B at a $1.25B valuation and has about 40 staff. McGrath says the field is moving beyond sparse autoencoders towards the geometric structure of concepts, such as days of the week arranged in a plane. Intentional design needs this, because changing a computation should change every case it covers at once.
- **Projection fails, inoculation works.** McGrath says removing unwanted directions from the gradient fails because the model finds another route, as in his "pirate" example. Inoculation prompting and preventative steering instead change what the model is pushed to learn.
- **Hallucination probes with a frozen copy.** Goodfire trained a probe on hallucination labels gathered with Gemini 2.5 and web search. It used the probe both to steer at runtime and as an RL reward, but ran it on a frozen copy of the model and never backpropagated through it. McGrath says changing behaviour proved easier than evading the probe, benchmarks showed essentially no degradation, and the number of claims per answer did not drop.
- **Caution and publishing.** McGrath's rule is "first, do no harm": he would not use these methods on a frontier training run today, so as not to undermine interpretability as an audit tool. Balsam says they won't target deception for now. Both cite safety and commercial reasons for publishing selectively.
- **Memorisation vs reasoning.** Using loss-landscape curvature, they separated weights used for memorisation from those used for general reasoning. Removing the memorisation weights improved some reasoning tasks.
- **Alzheimer's discovery.** Probing Prima Mente's cell-free DNA model Pleiades showed it relied mainly on DNA fragment length, which the Alzheimer's literature had not used. A simple logistic-regression proxy built on that insight generalised to an independent cohort better than published baselines.

## Quotes

> "Projecting the gradient out fights backprop." — Tom McGrath

> "There's one door where we build super intelligence that we don't understand at all, and then there's one door where we build super intelligence that maybe we have a shot of understanding." — Dan Balsam
