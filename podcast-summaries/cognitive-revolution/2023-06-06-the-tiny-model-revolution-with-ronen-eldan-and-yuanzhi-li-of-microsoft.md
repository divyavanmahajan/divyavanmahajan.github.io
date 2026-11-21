---
title: "The Tiny Model Revolution with Ronen Eldan and Yuanzhi Li of Microsoft Research"
date: 2023-06-06
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/the-tiny-model-revolution-with-ronen-eldan-and-yuanzhi-li-of-microsoft-research/"
youtube: "https://www.youtube.com/watch?v=mv3SIgDP_y4"
hosts: ["Nathan Labenz"]
guests: ["Ronen Eldan", "Yuanzhi Li"]
description: "Microsoft researchers Ronen Eldan and Yuanzhi Li show that tiny models trained on a simple synthetic dataset learn coherent English, basic reasoning and interpretable structure."
tags: ["small-language-models", "synthetic-data", "interpretability", "emergence", "curriculum-learning"]
source_transcript: "cognitive-revolution/episodes/2023/06/2023-06-06-the-tiny-model-revolution-with-ronen-eldan-and-yuanzhi-li-of-microsoft.md"
draft: false
---

## Thesis

Ronen Eldan and Yuanzhi Li argue that a narrow but complete dataset, TinyStories, lets models of 1 to 33 million parameters show the same grammar, consistency and reasoning behaviours seen in large models. Because simple vocabulary removes most of the need to memorise facts, the models spend their capacity on consistency. Nathan Labenz draws out what this implies for curriculum design and interpretability.

## Key points

- **Building the dataset.** Eldan says GPT-4 (and some GPT-3.5) wrote about 1.5 million children's stories from a list of roughly 2,000 words a 3-year-old knows, each prompt combining a random verb, noun and adjective. Without that, about one-fifth of stories came out about a child scared of the slide. Labenz estimates about $10,000 at retail GPT-4 prices.
- **Reasoning as consistency.** Li defines basic reasoning as staying consistent beyond nearby words. In the cat-or-dog example, GPT-2 XL (1.5 billion parameters) still answers "dog", while the roughly 30-million-parameter TinyStories models choose "cat".
- **Why small models win here.** Both guests argue that web data rewards memorising facts such as who the US president is, and Eldan estimates that only about one word in 20 to 30 needs reasoning to predict. Emergence, Li says, comes from learning these rare consistency events late in training.
- **Depth versus width.** Eldan suggests layers set how many times information can pass between tokens, and so how many logical steps a model can take. Li notes that a wider network can partly substitute at higher cost.
- **Interpretable parts.** In single-layer models they find separate distance-based attention heads, resembling ALiBi, and semantic heads that attend to main characters, as well as neurons that fire when the main character is introduced. Eldan says small models have no room for a "big mess" solution.
- **Limits.** Eldan is pessimistic about interpreting large models but optimistic about aligning them. Li suggests studying large models more like psychology, as in the Sparks of AGI paper.

## Quotes

> "The model has a finite size, and there is some theoretical limit to the amount of things the model can learn." — Ronen Eldan

> "It's kind of horseback riding for the brain, those LLMs." — Ronen Eldan
