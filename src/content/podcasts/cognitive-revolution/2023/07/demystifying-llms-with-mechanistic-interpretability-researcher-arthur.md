---
title: Demystifying LLMs with Mechanistic Interpretability Researcher Arthur Conmy
description: >-
  Arthur Conmy explains how ACDC automates circuit discovery in transformers,
  and why finding the sub-circuits behind specific behaviours could let
  researchers detect and remove dangerous capabilities.
pubDate: '2023-07-27'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/demystifying-llms-with-mechanistic-interpretability-researcher-arthur-conmy/
youtube: 'https://www.youtube.com/watch?v=Y5Pzch7_8MQ'
hosts:
  - Nathan Labenz
guests:
  - Arthur Conmy
tags:
  - mechanistic-interpretability
  - ai-safety
  - transformers
  - llm-research
  - emergence
draft: false
---
## Thesis

Arthur Conmy, co-author of the ACDC (automatic circuit discovery) paper, argues that mechanistic interpretability, reverse engineering the algorithms a network has learned, can be partly automated. Host Nathan Labenz sees the field as one of the most promising paths to long-term AI safety. Conmy's view is that even if a full understanding of large models proves out of reach, isolating the circuits behind narrow, dangerous behaviours would still be valuable.

## Key points

- **The standard workflow.** Conmy describes three steps: pick a behaviour with a dataset and metric (for example, GPT-2 completing "The war lasted from 1517 to 15..." with a later year), choose a level of abstraction such as attention heads and MLPs, then run intervention experiments. ACDC automates the last and most laborious step.
- **Patch, don't zero.** He explains that replacing activations with those from a contrasting "corrupted" dataset works better than pruning to zero, because zeros fall outside what the model normally sees. He credits evidence for this to work at Redwood Research.
- **How ACDC works.** For each node, ACDC corrupts its input edges one by one and keeps an edge only if removing it degrades the task metric beyond a threshold. It builds on Anthropic's residual-stream framing and Neel Nanda's TransformerLens library.
- **Compute limits.** GPT-2 small (about 100 million parameters) runs in half an hour to an hour, but cost grows roughly with the square of the number of nodes. Conmy says it cannot yet scale much beyond GPT-2 small.
- **Emergence as metric choice.** Conmy argues that many "emergent" abilities look smooth when measured as log-probability, citing the "mirage" paper. He is more concerned about known unknowns such as power-seeking.
- **Next phase.** He expects research to move from narrow circuits to higher-level motifs, such as "copy suppression" spread across several heads, helped by tools like OpenAI's use of GPT-4 to explain GPT-2 neurons.

## Quotes

> "mechanistic interpretability is the reverse engineering of the learned algorithms that neural networks implement into human understandable concepts." — Arthur Conmy

> "we can at least remove those dangerous capabilities even if we don't have an understanding of all capabilities of the model." — Arthur Conmy
