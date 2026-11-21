---
title: "Thinking in Silico: Goodfire CTO Dan Balsam on Concept Manifolds & a $1000/Month ML Research Agent"
date: 2026-08-08
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/thinking-in-silico-goodfire-cto-dan-balsam-on-concept-manifolds-a-1000-month-ml-research-agent/"
youtube: "https://www.youtube.com/watch?v=YduOnBDuD0c"
duration_min: 117
hosts: ["Nathan Labenz"]
guests: ["Dan Balsam"]
description: "Goodfire's Dan Balsam on the geometry of concepts inside models, predictive data debugging and Silico, an agentic ML research platform that brings interpretability to trillion-parameter models."
tags: ["interpretability", "feature-geometry", "ai-research-agents", "ai-safety", "open-source-ai"]
source_transcript: "cognitive-revolution/episodes/2026/08/2026-08-08-thinking-in-silico-goodfire-cto-dan-balsam-on-concept-manifolds-a-1000.md"
draft: false
---

## Thesis

Dan Balsam, CTO of interpretability startup Goodfire, argues that models represent concepts not as isolated directions but as rich geometric structures: circles, helices, trees and manifolds. Understanding the relationships between features is what makes reliable steering and debugging possible. Goodfire is now packaging its tools and research taste into Silico, an agent platform for long-horizon ML research, because interpretability is the kind of empirical science that agent swarms are good at.

## Key points

- **Predictive data debugging.** Concepts active on a dataset predict what fine-tuning will change, so unwanted effects can be caught beforehand. Balsam says filtering the data and reward-shaping on activations are "two sides of the same mountain", and the results replicate on Kimi and GLM.
- **Concept geometry.** Balsam describes models as "a sparse mixture of subspaces". Steering along a manifold, round the days-of-the-week circle rather than through its middle, beats linear steering, including for protein models. Evo 2 recovers the tree of life, and LLMs represent the affective circumplex. Block-sparse featurizers generalise SAEs to multi-dimensional features.
- **Factoring versus refactoring.** Balsam compares models to spaghetti-code legacy codebases. Interpretability can now find a single under-firing neuron behind a drunk-driving answer, or make a model forget German but not Dutch. The harder goal is training models that are clean in the first place.
- **Silico.** At $1,000 a month, Silico bundles trillion-parameter training and interpretability infrastructure, hand-written research skills and long autonomous runs. In a one-day internal hackathon it produced state-of-the-art bio-risk classifiers and halved robotics and biology models' parameters with no performance loss.
- **Safety views.** Balsam calls open models net positive for cyber defence but runs only OpenAI and Anthropic models on Silico, with its own guardrails. He signed the pacing letter, would avoid multi-agent RL optimisation, and argues safety will ultimately require shaping training, not only monitoring.
- **Consciousness at lunch.** Balsam guesses Claude is "somewhere between jellyfish and mouse"; Labenz now puts the odds of model consciousness closer to fifty-fifty.

## Quotes

> "I think the way to think about a model is more like a sparse mixture of subspaces." — Dan Balsam

> "Like, I think we have to grab the steering wheel. I think that's the only way it can work." — Dan Balsam
