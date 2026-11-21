---
title: '#120 – François Chollet: Measures of Intelligence'
description: >-
  François Chollet argues that intelligence is the efficiency of acquiring new
  skills, not skill itself, and that tests like his ARC benchmark must control
  for priors and experience.
pubDate: '2020-08-31'
show: lex-fridman
episode: 120
url: 'https://lexfridman.com/francois-chollet-2/'
youtube: 'https://www.youtube.com/watch?v=PUAdj3w3wO4'
durationMin: 155
hosts:
  - Lex Fridman
guests:
  - François Chollet
tags:
  - artificial-general-intelligence
  - intelligence-measurement
  - arc-benchmark
  - deep-learning
  - gpt-3
draft: false
---
## Thesis

François Chollet, the creator of Keras, walks Lex Fridman through his 2019 paper "On the Measure of Intelligence". He argues that skill at any fixed task says little about intelligence, because skill can be bought with hard-coded rules or more training data. What matters is how efficiently a system adapts to genuinely new situations, given its priors and experience, and his ARC benchmark is built to test exactly that.

## Key points

- **Process versus output.** Chollet compares a chess program to one road and intelligence to a road-building company: the program is the crystallised output of a human programmer's intelligence, not intelligence itself.
- **GPT-3 and scaling.** Chollet says GPT-3 likely pattern-matches new tasks to ones seen in training, and that its text is constrained only by plausibility, not facts or consistency. He expects training data, not compute or model size, to be the bottleneck, and cites his Google work on 150 million noisily labelled images, where smaller, human-annotated data beat more noisy data.
- **Driving is not a test of intelligence.** Chollet thinks L4 autonomy is probably achievable and L5 probably not by pure end-to-end learning, citing a Google paper where 30 million road situations were not enough. Fridman pushes back that driving keeps producing edge cases.
- **Priors and the ARC challenge.** ARC has about a thousand grid tasks, including a private test set, built only on Elizabeth Spelke's core knowledge priors: objectness, agentness, geometry and topology, and numbers. Humans find it easy; after a Kaggle competition the state of the art was about 20 percent.
- **Generalisation spectrum.** Chollet separates robustness, flexibility and extreme generalisation, and calls for "developer-aware" generalisation to novelty the system's creators could not foresee.
- **Turing test, Hutter Prize, Neuralink.** Chollet calls the Turing test a cop-out that hands judgement to unreliable human judges; Fridman disagrees. Chollet no longer believes cognition is compression, since intelligence must hedge against an unknown future. He is sceptical of brain interfaces because he does not see bandwidth as the bottleneck.

## Quotes

> "intelligence is the efficiency with which you acquire new skills at tasks that you did not previously know about that you did not prepare for" — François Chollet

> "it is a tool for cognition it is not cognition itself" — François Chollet
