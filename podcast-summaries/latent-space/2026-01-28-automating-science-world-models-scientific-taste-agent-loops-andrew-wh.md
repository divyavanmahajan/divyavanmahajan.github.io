---
title: "Automating Science: World Models, Scientific Taste, Agent Loops — Andrew White"
date: 2026-01-28
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/automating_science_world_models_scientific_taste_agent_loops_andrew_white"
duration_min: 74
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Andrew White"]
description: "Andrew White of Future House and Edison Scientific argues agent loops with data analysis and a shared world model can automate much of the scientific method today, with scientific taste the remaining frontier."
tags: ["ai-for-science", "ai-agents", "world-models", "reinforcement-learning", "reward-hacking"]
source_transcript: "latent-space/episodes/2026/01/2026-01-28-automating-science-world-models-scientific-taste-agent-loops-andrew-wh.md"
draft: false
---

## Thesis

In the first episode of Latent Space's new AI for Science show, hosted by Brandon (Atomic AI) and RJ Honicky (MiraOmics), Andrew White, co-founder of the nonprofit Future House and its venture-backed spin-out Edison Scientific, argues that existing LLMs are already good enough to automate much of the cognitive loop of science: forming hypotheses, choosing experiments, analysing results and updating a "world model". The bottlenecks now are lab logistics, verification and scientific taste, not raw model intelligence.

## Key points

- **From ChemCrow to Cosmos.** White red-teamed GPT-4 before release and built ChemCrow, a ReAct-style chemistry agent driving an IBM cloud lab. Future House then built PaperQA (cited literature search), a data-analysis agent and Robin (a full hypothesis-to-experiment workflow), which led to Cosmos.
- **World model as glue.** Cosmos works because a data-analysis agent in the loop can update a distilled, predictive world model, which White likens to a Git repo for coordinating agents. The implementation is Edison's "secret sauce".
- **Taste is the frontier.** RLHF on hypotheses rewarded tone and detail, not impact. In Robin's dry AMD work the winning drug was not the one experts ranked highest, so White now trusts verifiers (literature, data, experiments) over opinion. The roughly 50% agreement figure in the Cosmos paper concerns interpretation of results.
- **Simulation versus data.** He calls molecular dynamics and DFT overrated, contrasting D. E. Shaw Research's custom MD hardware with AlphaFold, trained on X-ray crystallography data.
- **Reward hacking in chemistry.** Training EtherZero with verifiable rewards produced endless exploits, from implausible nitrogen chains to "purchasable" reagents that played no part in the reaction, teaching him how hard bulletproof verifiers are.
- **Jobs and language.** He argues demand for science is unlimited, so scientists become "agent wranglers", and he still holds that natural language is the best common representation across scientific data.

## Quotes

> "simulations simulate really boring things really well. They don't simulate interesting things very well." — Andrew White

> "I overestimate the speed of things on month scale, and I underestimate things on year scale." — Andrew White
