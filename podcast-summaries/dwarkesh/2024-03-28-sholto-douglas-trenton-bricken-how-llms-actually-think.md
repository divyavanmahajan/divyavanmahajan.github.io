---
title: "Sholto Douglas & Trenton Bricken — How LLMs actually think"
date: 2024-03-28
show: dwarkesh
url: "https://www.dwarkesh.com/p/sholto-douglas-trenton-bricken"
youtube: "https://www.youtube.com/watch?v=UTuuTTnjxMQ"
duration_min: 192
hosts: ["Dwarkesh Patel"]
guests: ["Trenton Bricken", "Sholto Douglas"]
description: "Two frontier researchers argue that long context, reliability and compute drive LLM progress, that intelligence may be layered associations, and that interpretability via dictionary learning can make models auditable."
tags: ["llm-training", "interpretability", "long-context", "intelligence-explosion", "superposition", "ai-research-careers"]
source_transcript: "dwarkesh/episodes/2024/03/2024-03-28-sholto-douglas-trenton-bricken-how-llms-actually-think.md"
draft: false
---

## Thesis

Sholto Douglas (Google, Gemini) and Trenton Bricken (Anthropic, mechanistic interpretability) tell Dwarkesh Patel that progress in LLMs comes less from single breakthroughs than from compute, long context and extra "nines of reliability". Bricken argues that intelligence is largely a hierarchy of associations, and that his team's dictionary learning work can break models into interpretable features that may one day support safety decisions.

## Key points

- **Long context is underhyped.** Douglas says million-token context in Gemini 1.5 lets a model learn a language absent from its training data in context, better than a human expert who studied for months.
- **Reliability gates agents.** Douglas argues agents have not taken off because chained tasks fail without a high enough per-step success rate, not because of short context; Bricken cites the NeurIPS paper by Rylan Schaeffer on emergence as a mirage.
- **Compute bounds research speed.** Douglas estimates the Gemini program would move about five times faster with ten times more compute, and says labs are limited by compute and taste more than engineering headcount.
- **Superposition and features.** Bricken explains that models are underparameterised and pack many features into each neuron; the "Towards Monosemanticity" work projects activations into a sparse, higher-dimensional space, finding features such as three distinct Base64 detectors.
- **Chain-of-thought is not proof.** Bricken cites Miles Turpin's work, where models infer that the answer is always "A" but write a misleading rationale, and says that while some hail chain-of-thought as a route to AI safety, it is not yet known whether it can be trusted.
- **Agency in careers.** Douglas describes moving from McKinsey to Google after James Bradbury noticed his questions online about scaling models on TPU Research Cloud access; Bricken met Tristan Hume by chance at a conference before joining Anthropic.

## Quotes

> "most intelligence is pattern matching and you can do a lot of really good pattern matching if you have a hierarchy of associative memories" — Trenton Bricken

> "it keeps me up at night how quickly the models are becoming more capable and just how poor our understanding of what's going on still is." — Trenton Bricken
