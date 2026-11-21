---
title: "🔬 An Oscar, Two Asteroids, and the Algorithm in Your sklearn: John Platt on AI for Science"
date: 2026-09-22
show: latent-space
url: "https://www.latent.space/p/john-platt"
duration_min: 121
hosts: ["Alessio Fanelli", "swyx"]
guests: ["John Platt"]
description: "Google's John Platt argues that LLM-driven search over scorable tasks is a power tool for scientists, demanding more rigour against overfitting while leaving creativity and descriptive models to humans."
tags: ["ai-for-science", "scientific-discovery", "climate", "overfitting", "quantum-computing"]
source_transcript: "latent-space/episodes/2026/09/2026-09-22-an-oscar-two-asteroids-and-the-algorithm-in-your-sklearn-john-platt-on.md"
draft: false
---

## Thesis

On the Latent Space Science series, hosts Brandon and RJ talk to John Platt, a Google Fellow and head of Applied Science at Google Research. Platt explains ERA, Google's system that turns scientific problems into "scorable tasks" and lets Gemini search over code to maximise a score. He argues that such tools free scientists to concentrate on creativity, problem framing and rigour. But because they relentlessly optimise whatever score they are given, he says they make careful hold-out discipline more important than ever.

## Key points

- **How ERA works.** A Gemini agent first helps the user define a scoring function in a Python notebook. It then runs a Monte Carlo tree search using an upper-confidence-bound rule, growing about ten candidates in parallel and sometimes recombining ideas. Platt says it works because an LLM, unlike random mutation, knows which changes are worth trying. He thinks it would have been impossible with Gemini 2.0. The project began as an attempt to win Kaggle competitions automatically and did very well in a CDC challenge to forecast COVID and flu cases.
- **Predictive versus descriptive.** Platt distinguishes models that fit data from models that capture physics and can extrapolate, using Newton's apples and planets as the example. Finding descriptive models is still the scientist's job. He warns of Goodhart's law and recalls Kaggle entrants exploiting a half-pixel label error in Google's contrails competition.
- **Contrails.** By Platt's account, contrails cause about 1% of human-caused warming and add roughly one watt per square metre of forcing over busy regions such as Europe. Planes can avoid ice-supersaturated layers by dropping about two flight levels. ERA solved a counterfactual model for reflected sunlight that his team had been stuck on for two years.
- **Climate and resilience.** Platt says AI has transformed weather forecasting but not climate modelling, which is low on data and non-stationary. Uncertainty about how much CO2 the biosphere absorbs spans about 300 ppm by 2100. He also describes FireSat, a constellation of 50 to 80 satellites able to spot fires about five metres across, which has launched one prototype with Muon Space and Earth Fire Alliance.
- **Careers and history.** Platt advises young scientists to build deep domain expertise while experimenting with tools, and to protect time for "training". His stories include Feynman's 1982 physics-of-computation class, an Oscar for cloth and elasticity simulation 20 years after his internship work, two asteroids found at Palomar, and claiming to have coined "convolutional net". He expects useful quantum computing in a few to several years.

## Quotes

> "random mutation in code space is pretty much worthless." — John Platt

> "Someone please make, uh, the, the everything lab that you could like send JSON blob to, and it will do any experiment at all." — John Platt
