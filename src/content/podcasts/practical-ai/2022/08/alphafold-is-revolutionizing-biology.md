---
title: AlphaFold is revolutionizing biology
description: >-
  Chris Benson and Daniel Whitenack argue that DeepMind's AlphaFold turns
  protein structure prediction into a scalable data transformation, and that its
  architecture and training tricks carry lessons for practitioners elsewhere.
pubDate: '2022-08-09'
show: practical-ai
episode: 188
url: 'https://share.transistor.fm/s/096a1573'
durationMin: 45
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - alphafold
  - deepmind
  - transformers
  - scientific-ai
  - self-distillation
draft: false
---
## Thesis

In a hosts-only "Fully Connected" episode, Daniel Whitenack and Chris Benson, both openly non-experts in biology, walk through DeepMind's AlphaFold. Whitenack frames it as a classic AI data transformation: amino acid sequence in, 3D structure out. Benson argues that pairing scale with experiment-level accuracy makes this a moment comparable to the human genome release, and both see reusable ideas for practitioners in other domains.

## Key points

- **From lab capacity to compute capacity.** Whitenack notes that experimental structure determination is slow and limited, while computational prediction scales with compute instead. AlphaFold stood out at the CASP14 shared task by approaching experimental accuracy.
- **Database growth.** The hosts discuss the July 28 release that expanded the AlphaFold database from about 1 million to over 200 million predicted structures, against roughly 190K experimental structures in PDB. The inference pipeline is open source; Whitenack understands the training pipeline is not.
- **Early impact.** Whitenack cites more than 4,000 academic citations and example uses touching malaria vaccine work, mRNA degradation, frost damage in plants and the immune systems of honeybees, which broadens the angle beyond medicine to agriculture.
- **Architecture.** Whitenack describes three stages: encoding the input as a multiple sequence alignment plus a pair representation, a transformer-inspired "Evoformer" that exchanges information between them, and a structure module that outputs Cartesian coordinates, cycled about three times to refine predictions.
- **Training trick worth borrowing.** After training on supervised PDB examples, DeepMind added 350,000 high-confidence self-generated predictions and retrained, a "noisy student self-distillation" approach Whitenack says anyone can use to augment a dataset.
- **Mixing building blocks.** Benson compares transformers, joint embeddings and masked training to Lego pieces being recombined across domains; Whitenack speculates Evoformer-style dual representations could suit multilingual models.

## Quotes

> "using deep neural networks to predict protein structure in and of itself is not an innovation of this work." — Daniel Whitenack

> "I think this is a moment we're going to remember just like the release of the human genome was." — Chris Benson
