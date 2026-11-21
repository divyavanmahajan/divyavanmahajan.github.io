---
title: >-
  [Cognitive Revolution] The Tiny Model Revolution with Ronen Eldan and Yuanzhi
  Li of Microsoft Research
description: >-
  Microsoft Research's Ronen Eldan and Yuanzhi Li show that models under 33
  million parameters trained on simple synthetic stories learn coherent English
  and basic reasoning.
pubDate: '2023-07-01'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/cognitive_revolution_the_tiny_model_revolution_with_ronen_eldan_and_yuanzhi_li_of_microsoft_research
durationMin: 125
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Ronen Eldan
  - Yuanzhi Li
tags:
  - small-language-models
  - synthetic-data
  - interpretability
  - emergence
  - curriculum-learning
draft: false
---
## Thesis

In this feed swap, swyx introduces a Cognitive Revolution interview in which Nathan Labenz talks to Ronen Eldan and Yuanzhi Li about TinyStories. Eldan and Li argue that a narrow but complete synthetic dataset lets tiny models show coherence, reasoning and interpretable structure that otherwise appear only at large scale. They see the balance between knowledge and reasoning in training data as the main lever.

## Key points

- **The dataset.** GPT-4, plus some GPT-3.5, wrote about 1.5 million stories using a vocabulary of about 2,000 words a three-year-old would know. Each prompt combined a random verb, noun and adjective to force diversity, since unprompted generations kept returning to children scared of slides. Labenz estimates about $10,000 at retail GPT-4 prices.
- **Emergence at small scale.** The guests report that 1-million-parameter models hardly write coherent stories while 10 million mostly do; reasoning prompts fail at 1-5 million and mostly succeed at 30 million. GPT-2 XL, at 1.5 billion parameters, still fails a simple dog-or-cat exclusion example.
- **Why reasoning comes late.** The guests argue web data rewards memorising facts far more often than reasoning, so limited capacity goes to facts first. Eldan estimates reasoning is needed for only one word in 20 to 30.
- **Depth versus width.** Layers determine how many times information can pass between tokens, so they matter for multi-step logic; width matters more for storing facts.
- **Interpretable parts.** Single-block models separate distance-based attention heads, resembling ALiBi, from semantic heads that track main characters. Individual neurons map to concepts, such as introducing the main character, which the guests could not find in GPT-2 XL.
- **Limits.** Eldan doubts large models can be interpreted well enough to control them, offering horseback riding as an analogy for useful control without understanding.

## Quotes

> "only once in every 20 to 30 words to predict the next word, you need to use some reasoning capabilities." — Ronen Eldan

> "I would make analogy like human child is learning with our RLHF algorithm, just doing reinforcement learning with the parent's feedback." — Yuanzhi Li
