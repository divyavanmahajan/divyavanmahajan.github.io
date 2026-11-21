---
title: "Simulation: the new Scaling Law — Joon Sung Park, Simile AI"
date: 2026-08-21
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/simulation_the_new_scaling_law_joon_sung_park_simile_ai"
duration_min: 70
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Joon Sung Park"]
description: "Frontier LLMs know what people say online, not how they actually behave; models post-trained on interviews and randomised trials can simulate real people and show signs of scaling laws."
tags: ["simulation", "generative-agents", "behavioral-models", "synthetic-panels", "scaling-laws"]
source_transcript: "latent-space/episodes/2026/08/2026-08-21-simulation-the-new-scaling-law-joon-sung-park-simile-ai.md"
draft: false
---

## Thesis

Joon Sung Park, co-author of the Generative Agents ("Smallville") paper and co-founder of Simile, argues that frontier models are trained to be rational reasoners on web text, which captures what people say rather than what they do. Simulating people well needs a "behavior foundation model" post-trained on interviews, observed behaviour and randomised controlled trials. He says Simile already sees early scaling laws: more human data and compute give predictable gains.

## Key points

- **Origins.** Park describes a Stanford "time machine game" with Michael Bernstein and Percy Liang that picked recreating the world as the most ambitious application of foundation models. He argues that good personal assistants first need an accurate model of the user.
- **Three kinds of data.** Life-story interviews for texture, observational data such as transactions for base rates, and RCTs for causal mechanisms. Park says decision-makers rarely want a forecast; they want to know how to change the outcome.
- **Validation.** In the Generative Agent Simulations of 1,000 People study, digital twins built from two-hour sessions replicated participants' survey and experiment answers 85% as accurately as people replicate their own answers two weeks later. Park says frontier models can drop to 20-30% on niche populations and 50-60% on the general population.
- **Pre-registered studies as training data.** A follow-up post-trained models on tens of thousands of pre-registered experiments from the Open Science Foundation platform, which the field built in response to the replication crisis.
- **Use cases.** Customers query a modelled population with a filter and an environment (survey, A/B test, focus group, website walkthrough). Simile partners with Gallup and holds back on politics until it has guardrails. Panel partnerships reach tens of millions of people.
- **Long-term ambition.** Park points to Thomas Schelling's segregation model as proof that agent-based simulation can inform policy, and hopes high-fidelity agents could one day help with "wicked problems" such as climate change.

## Quotes

> "What they want to know is, \"Well, what do we need to do now to avoid that future?\" That's causal mechanism" — Joon Sung Park

> "what we're trying to create are models that are as dumb as I am, right? So if I make such mistakes, the model has to make the same kind of mistake." — Joon Sung Park
