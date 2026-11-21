---
title: >-
  Automating Scientific Discovery, with Andrew White, Head of Science at Future
  House
description: >-
  Andrew White argues biology is bound by measurement, so Future House builds
  semi-autonomous, quality-first AI agents for literature search and trainable
  scientific workflows rather than simulated cures.
pubDate: '2024-12-05'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/automating-scientific-discovery-with-andrew-white-head-of-science-at-future-house/
youtube: 'https://www.youtube.com/watch?v=umFbsCqG734'
durationMin: 116
hosts:
  - Nathan Labenz
guests:
  - Andrew White
tags:
  - ai-for-science
  - agents
  - scientific-literature
  - reinforcement-learning
  - drug-discovery
draft: false
---
## Thesis

Andrew White, co-founder and head of science at Future House, argues that biology has complexity at every level and is limited by empirical measurement, so no model will simply think its way to a cure. He sees the bigger opportunity in AI that masters the scientific literature and runs as trainable agents working alongside humans and labs. Nathan Labenz pushes on in silico experiments and agent design, and repeatedly endorses White's philosophy of optimising for quality over cost and latency.

## Key points

- **Future House as a moonshot.** White describes the Eric Schmidt-backed nonprofit as Sam Rodriques's idea, modelled on focused research organisations at a 20 to 50 million dollar scale. Its mission is semi-autonomous AI for science, and it deliberately does not try to solve lab robotics.
- **Measurement beats simulation.** White notes that a binding calculation (about $10-15) and the matching experiment (about $20) have become cheaper at similar rates. He argues models mostly raise hit rates, and he is sceptical that multi-omic foundation models will be a silver bullet.
- **PaperQA's design.** White says PaperQA retrieves full-text papers, then has an LLM summarise and re-rank every candidate chunk before answering. That step removes distracting context and beat human performance. WikiCrow used it to write about 18,000 gene articles, where Wikipedia covered roughly 2,500. A query costs 15 cents to a dollar.
- **Aviary and trainable agents.** White defines the agent as everything trainable, including memory, and the environment as the untrained tools. Agents are framed as stochastic compute graphs. Black-box gradient estimation is a technical proof of concept, he says, while an open Q-learning model choosing among closed-model samples works best: a 5-10 point gain on PaperQA and 50 to 70 on a more formulaic benchmark.
- **Slow feedback loops.** White says drug discovery suffers from roughly seven years between mechanism and phase 2 results. He suggests clinical-trial enrolment and releasing FDA IND data would matter more than another foundation model.
- **What holds agents back.** White points to LLMs' poor diversity of hypotheses and an increasingly hostile, anti-bot web that blocks even open-access papers.

## Quotes

> "99% of doing science is knowing literature and the last 1% is like just moving things around a little bit to get to innovation." — Andrew White

> "we just want to build the best possible system, forget cost, forget latency." — Andrew White
