---
title: 'François Chollet: Keras, Deep Learning, and the Progress of AI'
description: >-
  François Chollet argues that intelligence is specialised and bounded by its
  environment, so an intelligence explosion is unlikely, and that deep learning
  must be combined with program synthesis to generalise.
pubDate: '2019-09-14'
show: lex-fridman
url: 'https://lexfridman.com/francois-chollet/'
youtube: 'https://www.youtube.com/watch?v=Bo8MY4JpiXE'
durationMin: 57
hosts:
  - Lex Fridman
guests:
  - François Chollet
tags:
  - deep-learning
  - keras
  - intelligence-explosion
  - program-synthesis
  - recommender-systems
draft: false
---
## Thesis

François Chollet, creator of Keras, tells Lex Fridman that intelligence is not a property of a brain in isolation but emerges from a brain, a body and an environment, so improving one part just exposes a new bottleneck. He argues that deep learning only interpolates between nearby training points, and that real progress will come from combining it with symbolic, program-based models and from measuring intelligence as skill-acquisition efficiency rather than task skill.

## Key points

- **Against the intelligence explosion.** Chollet uses science as his model of a recursively self-improving system: its resource consumption grows exponentially while, citing Michael Nielsen's work on the significance of discoveries, its output looks roughly linear. He calls the singularity narrative closer to a belief system than a scientific argument.
- **History of Keras.** Chollet started Keras in February 2015 to get a reusable LSTM implementation, defining models in Python code rather than configuration files as Caffe did, with scikit-learn's fit function as inspiration. After joining Google he ported it to TensorFlow, and the TensorFlow lead, Rajat, later invited him to integrate it into TensorFlow.
- **Limits of deep learning.** He describes neural networks as continuous geometric morphings trained point by point, needing dense sampling of the input space. Successful systems such as robots and self-driving cars are already hybrids, using deep learning for perception inside hand-written, model-based software.
- **Program synthesis.** Chollet compares program synthesis today to deep learning before backprop, names Excel's Flash Fill as the one real-world application he knows, and finds genetic programming promising. He agrees with Rich Sutton's "bitter lesson" about the past 70 years but expects data, not compute, to become the bottleneck.
- **Recommender systems.** His main near-term concern is engagement-maximising feeds that could enable mass manipulation of behaviour. He wants users, not companies, to set the objective function of these algorithms.
- **Measuring intelligence.** He is building a benchmark that controls for priors, based on Elizabeth Spelke's core knowledge, and for experience, so humans and machines can be compared fairly. He warns that overselling AI, as with autonomous vehicles, is like taking on credit card debt for trust.

## Quotes

> "intelligence is essentially the efficiency with which you turn experience into generalizable programs" — François Chollet

> "it's not about being right right it's about being effective" — François Chollet
