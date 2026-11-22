---
title: 'Vladimir Vapnik: Predicates, Invariants, and the Essence of Intelligence'
description: >-
  Vladimir Vapnik argues that intelligence means finding a small set of good
  predicates that shrink the space of admissible functions through weak
  convergence, so learning needs far less data.
pubDate: '2020-02-14'
show: lex-fridman
url: 'https://lexfridman.com/vladimir-vapnik-2/'
youtube: 'https://www.youtube.com/watch?v=bQa7hpUpMzM'
durationMin: 105
hosts:
  - Lex Fridman
guests:
  - Vladimir Vapnik
tags:
  - machine-learning
  - statistical-learning-theory
  - weak-convergence
  - philosophy-of-ai
  - computer-vision
draft: false
---
## Thesis

Vladimir Vapnik, co-inventor of support vector machines and VC theory, tells Lex Fridman that engineering intelligence (imitating human behaviour) is a different problem from understanding it. He argues that understanding comes from a small set of abstract "predicates", in the spirit of Plato's world of ideas, which through weak convergence restrict learning to a small admissible set of functions. Fridman repeatedly presses on whether such predicates can be found automatically and whether intelligence will turn out to be a mess of heuristics.

## Key points

- **Predicates and invariants.** Vapnik defines a predicate as a function whose inner product with the target measures a property, such as degree of symmetry in a digit image. Only functions that keep the training-data average of that property are admissible, which shrinks the VC dimension and the data needed.
- **Vladimir Propp as the model.** Vapnik repeatedly cites Propp's 1928 "Morphology of the Folk Tale", whose 31 units describe Russian tales and also films and theatre, as evidence that a few universal predicates can cover many situations.
- **The MNIST challenge.** Vapnik calls the 60,000 training examples behind current digit-recognition records "unacceptable" and challenges researchers to match the best neural networks with about 100 times fewer examples.
- **Deep learning critique.** He describes neural networks as large sets of piece-wise linear functions and says convolution, introduced by Yann LeCun 25 years earlier, is essentially a single translation-invariance predicate built by hand rather than by reasoning. Fridman counters that architecture design, such as attention, is a legitimate engineering problem.
- **Finding new predicates.** Vapnik's suggested method, which he calls brute force, is like physics: find cases where existing invariants fail, add a predicate to remove the contradiction, then retrain. He doubts symbolic logic alone can find good predicates.
- **Privileged information.** He describes a late friend, a professor of Russian poetry, who described digit images in poetic vocabulary; using those descriptions as privileged information improved learning, which leads him to propose mining music and art criticism for universal predicates.

## Quotes

> "Engineering is imitation of human activity. You have to make a device which behaves as a human behaves." — Vladimir Vapnik

> "how stupid I was for 50 years, I did not see weak convergence. I work only on strong convergence." — Vladimir Vapnik
