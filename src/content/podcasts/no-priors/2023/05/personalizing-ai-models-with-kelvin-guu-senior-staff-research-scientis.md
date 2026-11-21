---
title: >-
  Personalizing AI Models with Kelvin Guu, Senior Staff Research Scientist,
  Google Brain
description: >-
  Kelvin Guu argues that retrieval, expert models and model editing give
  modular, updatable ways to adapt LLMs, while today's agents still lack learned
  instincts and memory consolidation.
pubDate: '2023-05-04'
show: no-priors
episode: 15
url: 'https://www.youtube.com/watch?v=XAjVmQFFJoI'
youtube: 'https://www.youtube.com/watch?v=XAjVmQFFJoI'
durationMin: 40
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Kelvin Guu
tags:
  - retrieval
  - instruction-tuning
  - training-data-attribution
  - model-editing
  - agents
draft: false
---
## Thesis

Kelvin Guu, a senior staff research scientist at Google Brain who worked on REALM and FLAN, argues that you do not need to put all knowledge into pre-training. Retrieval, expert models and direct model editing let organisations adapt shared models in a modular way. He says the agents built so far depend too much on explicit reasoning and lack the learned instincts that humans develop over time.

## Key points

- **Why retrieval.** Guu names three motives for retrieval-augmented models: more memorisation capacity, modularity (swapping data sources like a database) and timely information without retraining. He says common web knowledge now scales into dense models, so retrieval matters most for personal and enterprise data.
- **Retrieval vs experts.** Guu compares REALM-style retrieval with Branch-Train-Merge, which trains one model per sub-corpus. Retrieval suits precise facts like a wifi password. An expert model suits learning an enterprise's specialised code language.
- **Instruction following.** In FLAN, training on about a hundred tasks let the model handle an unseen task, which paved the way for InstructGPT and ChatGPT. Guu says fine-tuning and RL still matter for problems like hallucination that prompts cannot fix.
- **Attribution and editing.** Simfluence simulates training runs to estimate how much each training example influenced the model. Guu says this could show whether models generalise or just patch together what they have seen. He highlights ROME, which edits weights so the model places the Eiffel Tower in Rome, and that change carries through to related facts.
- **Agent gaps.** Guu argues that agents using sticky-note memory cannot easily undo a wrong sub-goal and do not learn user preferences from feedback. He suggests that ideas like "fear" from reinforcement learning, along with memory consolidation, may help. Sarah Guo cites models that count forever when asked to count down from 21 to 26.
- **Careers.** Guu advises researchers to set more ambitious goals. In reply to Elad Gil, he says the valuable skill is shifting from technical proficiency towards framing problems, though someone still has to validate model output.

## Quotes

> "you can't just tell the model, please don't make things up and expect that to just solve the problem" — Kelvin Guu

> "Everything is explicit reasoning and at some point that might not scale or that might become brittle." — Kelvin Guu
