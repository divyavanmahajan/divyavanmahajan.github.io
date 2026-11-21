---
title: '#94 – Ilya Sutskever: Deep Learning'
description: >-
  OpenAI co-founder Ilya Sutskever argues that deep learning succeeded through
  data, compute and conviction, that the field keeps underestimating it, and
  that AGI may need only a few more ideas.
pubDate: '2020-05-08'
show: lex-fridman
episode: 94
url: 'https://lexfridman.com/ilya-sutskever/'
youtube: 'https://www.youtube.com/watch?v=13CZPWmke6A'
durationMin: 98
hosts:
  - Lex Fridman
guests:
  - Ilya Sutskever
tags:
  - deep-learning
  - language-models
  - gpt-2
  - agi
  - ai-safety
draft: false
---
## Thesis

Ilya Sutskever, co-founder and chief scientist of OpenAI, tells Lex Fridman that the ideas behind deep learning were in place long before it worked; what was missing was large supervised datasets, enough compute and the conviction to combine them. He argues that every year the field underestimates how far neural networks can go, that they can learn to reason, and that AGI will likely be deep learning plus a few more ideas, with self-play among them.

## Key points

- **The AlexNet moment.** Sutskever says James Martens' Hessian-free optimizer, which trained a 10-layer network end to end in 2010, convinced him large networks could be trained; Alex Krizhevsky's fast CUDA kernels then made the ImageNet result possible. Hard benchmarks, he argues, are what ended decades of rational scepticism.
- **Unity across modalities.** He sees vision and NLP as nearly the same problem with different architectures (convolutional networks versus transformers) and expects possible unification; reinforcement learning differs mainly because acting makes the world non-stationary.
- **Double descent and small information.** Sutskever explains OpenAI's deep double descent paper: test performance worsens exactly where a model reaches zero training error, then improves as it grows; early stopping largely removes the bump. He now describes networks as large circuits whose weights hold little information.
- **Scale brings semantics.** He cites the sentiment neuron, which appeared when an LSTM trained on Amazon reviews grew from 500 to 4,000 cells, and describes GPT-2 as a 1.5-billion-parameter transformer trained on about 40 billion tokens from Reddit-linked pages. The transformer works, he says, because it combines attention, a GPU-friendly design and no recurrence.
- **Staged release.** Sutskever says the field is leaving its childhood, so GPT-2 was released in stages over misinformation concerns, and companies need to build trust with one another. He expects the next real bar to be visible economic impact.
- **Control and alignment.** He pictures AGIs acting as CEOs answerable to democratic "boards" that can press a reset button, and says he would find it trivial to give up control of such a system.

## Quotes

> "i think that we are still massively underestimating deep learning" — Ilya Sutskever

> "it's definitely possible to build ai systems which will want to be controlled by their humans" — Ilya Sutskever
