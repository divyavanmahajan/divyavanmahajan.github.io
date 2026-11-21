---
title: "Breakthroughs in AI for Biology: AI Lab Groups & Protein Model Interpretability with Prof James Zou"
date: 2024-12-18
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/breakthroughs-in-ai-for-biology-ai-lab-groups-protein-model-interpretability-with-prof-james-zou/"
youtube: "https://www.youtube.com/watch?v=plq7R9KtDFk"
duration_min: 60
hosts: ["Nathan Labenz"]
guests: ["James Zou"]
description: "James Zou argues that a team of LLM agents can run open-ended research with light human steering, and that sparse autoencoders can pull new biological concepts out of protein models."
tags: ["ai-for-science", "multi-agent-systems", "mechanistic-interpretability", "sparse-autoencoders", "protein-language-models"]
source_transcript: "cognitive-revolution/episodes/2024/12/2024-12-18-breakthroughs-in-ai-for-biology-ai-lab-groups-protein-model-interpreta.md"
draft: false
---

## Thesis

Stanford professor James Zou presents two papers. Virtual Lab shows that a team of LLM agents, steered only at a high level by humans, can choose a research approach, build a new computational workflow and produce candidates that hold up in real experiments. InterPLM shows that sparse autoencoders applied to protein language models can surface concepts that humans had not yet documented. Host Nathan Labenz treats this as some of the clearest evidence yet that models can learn natural concepts humans do not know.

## Key points

- **An AI lab modelled on a real one.** Zou describes an AI professor agent that recruits specialist agents (immunology, computer science, computational biology) plus a critic. They work through group meetings and one-on-one meetings, all built on GPT-4o.
- **Agents made the key choices.** Given only a COVID-related goal, the agents chose nanobodies over the more common antibodies. They combined ESM, AlphaFold Multimer and Rosetta into an iterative pipeline that, as far as Zou knows, is new. Labenz notes the humans wrote about 1.3% of the tokens and compares the nanobody choice to AlphaGo's Move 37.
- **Cheap, parallel deliberation.** Every key decision went through 5 parallel meetings before the agents settled on a consensus. Zou estimates the API cost was under $100. Slow, expensive work remains in model runs and wet-lab validation with the Chan Zuckerberg Biohub. The code is open source.
- **Agents that are too polite.** Zou says RLHF makes the agents, including the critic, overly polite. He wants to test whether a blunter critic produces better science.
- **Interpretability as discovery.** InterPLM trained a sparse autoencoder with about 10,000 features on ESM-2, which learns from sequences only. Around 2,500 features were human-interpretable, and the work found at least one new protein motif. Claude helped annotate features automatically.
- **Limits and next steps.** Zou says some areas, such as disordered proteins, are still limited by data rather than compute. Next steps include larger models such as AlphaFold, and moving from proteins to cells and organs.

## Quotes

> "So in the time that we sit around and introduce each other and have coffee, they've already had hundreds of meetings." — James Zou

> "these protein language models, I think they have learned new concepts. They have filled in some of the gaps in our knowledge." — James Zou
