---
title: "One algorithm to rule them all?"
date: 2022-02-15
show: practical-ai
episode: 168
url: "https://share.transistor.fm/s/2bd0e363"
duration_min: 45
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "Benson and Whitenack review early-2022 AI milestones and argue that the real shift is many narrow task-specific models, not one all-knowing intelligence."
tags: ["ai-news", "self-supervised-learning", "code-generation", "robotics", "ai-ethics"]
source_transcript: "practical-ai/episodes/2022/02/2022-02-15-one-algorithm-to-rule-them-all.md"
draft: false
---

## Thesis

In this news round-up, Chris Benson and Daniel Whitenack walk through protein-docking prediction, Meta's data2vec, an autonomous surgical robot and DeepMind's AlphaCode. Benson's recurring argument is that these systems are narrow pattern learners. The ethical question, he says, is society handing more of life to thousands of task-specific models, not a single super-intelligent model, which he calls a fiction.

## Key points

- **Protein docking.** Both hosts flagged MIT work in which a model predicts how two proteins will bind, turning 3D structures into graphs. Whitenack cites speedups of 80 to 500 times and sees it as humans and machines working together rather than replacing experts.
- **One model, many modalities.** Whitenack explains Meta AI's data2vec, which uses masking and a student-teacher setup to learn representations for images, speech and text with a single approach, matching or beating single-modality models such as RoBERTa on some benchmarks.
- **Surgery without a human hand.** Benson describes a Johns Hopkins robot that performed laparoscopic surgery on pig soft tissue unaided, and links it to DARPA's AlphaDogfight, where automated F-16 simulator pilots outperformed humans. Whitenack asks whether human-plus-machine teams still beat either alone.
- **Moving goalposts.** Citing Richard Hamming, Whitenack notes that once a machine achieves a task, people stop calling it intelligence. Benson says the public conflates intelligence with consciousness and self-awareness.
- **AlphaCode.** DeepMind claims its system codes at the level of an average competitive programmer on Codeforces problems. Whitenack splits code into thirds by how automatable it is; Benson thinks 95 to 99% of code shares patterns across projects.
- **Learning resources.** Whitenack recommends Brown's Seeing Theory site and Hardt and Recht's book "Patterns, Predictions, and Actions".

## Quotes

> "the term artificial intelligence is otherwise a very, very nebulous and imprecise way of describing it." — Chris Benson

> "if you look at all code that's written on like the one side, one third of it is probably almost repetitive enough to just be like rule based generation." — Daniel Whitenack
