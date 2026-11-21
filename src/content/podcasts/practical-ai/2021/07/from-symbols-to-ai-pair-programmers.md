---
title: "From symbols to AI pair programmers \U0001F4BB"
description: >-
  GitHub Copilot is a useful tactical tool rather than a threat, while LeCun,
  Hinton and Bengio argue that scaled-up deep learning, not a return to symbolic
  AI, remains the path forward.
pubDate: '2021-07-13'
show: practical-ai
episode: 140
url: 'https://share.transistor.fm/s/d3329d33'
durationMin: 49
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - github-copilot
  - deep-learning
  - ai-history
  - transformers
  - robustness
draft: false
---
## Thesis

Daniel Whitenack and Chris Benson discuss the newly announced GitHub Copilot and then walk through the July 2021 Communications of the ACM article "Deep Learning for AI" by Yann LeCun, Geoffrey Hinton and Yoshua Bengio. Benson sees Copilot as a welcome productivity aid; Whitenack worries more about over-trust and training-data bias. On the article, Benson reads it as the three Turing Award winners defending deep learning against calls for brain-inspired alternatives, a view he is sceptical of.

## Key points

- **Copilot as pair programmer.** Whitenack explains that Copilot, built by GitHub and OpenAI on a system called Codex, reads comments and code structure and can turn comments into code, closer to machine translation than autocomplete. Benson, who uses VS Code, says it will help him ramp back into languages like Go.
- **Risks are in the workflow.** Whitenack argues the danger is not job loss but expecting too much: generated code can introduce hard-to-debug errors you did not write.
- **Training-data bias.** Whitenack notes that much robust code sits in private repositories, so a model trained on public code may lean towards side projects; Benson hopes static analysis was used to filter for quality.
- **From symbols to depth.** Benson, whose parents worked on symbolic AI at Georgia Tech in the 1980s, says most researchers have moved on. The hosts credit GPUs and composable layers that build abstractions on abstractions, plus unsupervised pre-training, transfer learning and attention.
- **The article's open problems.** Benson cites GPT-3's 175 billion parameters versus GPT-2's 1.5 billion, then the authors' limits: too much labelled data, too many reinforcement-learning trials, weak robustness to change and immature "system two" reasoning. Whitenack wants robustness testing in his own workflow.
- **Recommended reading.** Whitenack recommends "Human-in-the-Loop Machine Learning" by Robert Monarch; Benson recommends Jeff Hawkins' "A Thousand Brains".

## Quotes

> "I think that a tool like this is not a strategic threat to us. I think that this is a tactical goodie that we get to use to make our lives better." — Chris Benson

> "It's more in the human computer interaction. That happens when you introduce something like this into your development cycle." — Daniel Whitenack
