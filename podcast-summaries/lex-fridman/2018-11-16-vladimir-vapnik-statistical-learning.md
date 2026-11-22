---
title: "Vladimir Vapnik: Statistical Learning"
date: 2018-11-16
show: lex-fridman
url: "https://lexfridman.com/vladimir-vapnik/"
youtube: "https://www.youtube.com/watch?v=STFcvzoxVw4"
duration_min: 54
hosts: ["Lex Fridman"]
guests: ["Vladimir Vapnik"]
description: "Vladimir Vapnik argues that the hard, unsolved part of learning is how a teacher picks good predicates and invariants, which can cut the training data needed a hundredfold."
tags: ["machine-learning", "statistical-learning-theory", "vc-dimension", "deep-learning", "philosophy-of-ai"]
source_transcript: "lex-fridman/episodes/2018/11/2018-11-16-vladimir-vapnik-statistical-learning.md"
draft: false
---

## Thesis

Vladimir Vapnik, co-inventor of support vector machines and VC theory, tells Lex Fridman that learning splits into a statistical part, which he considers solved, and an intelligence part: choosing the right predicates and invariants. A good teacher supplies those predicates, and with them a machine needs far fewer examples. Vapnik is dismissive of deep learning as interpretation rather than mathematics, while Fridman pushes back on its empirical success.

## Key points

- **Instrumentalism versus realism.** Vapnik says most machine learning is instrumentalist, seeking a classification rule for prediction, while understanding requires estimating the conditional probability, which he frames as trying to understand what God did.
- **Admissible sets and VC dimension.** He explains that a learning machine picks one function from an admissible set; if that set has small VC dimension and still contains good functions, few observations are needed. Textbooks take the set as given, but he argues constructing it is the hardest problem.
- **The duck test.** Using the proverb that something which looks, swims and quacks like a duck is probably a duck, Vapnik argues that three well-chosen predicates each sharply shrink the admissible set, while a predicate like "jumps like a duck" carries zero information. Choosing useful predicates is where the teacher comes in.
- **Deep learning critique.** Vapnik calls deep learning and hand-made features "fantasy", says mathematics only knows functions such as piecewise linear ones, and cites the Representer theorem as showing that optimal solutions lie on shallow networks. On AlphaGo, he says its success shows Go is not a very difficult problem.
- **The MNIST challenge.** He notes deep learning reaches about 99.5% on digit recognition with 60,000 examples and challenges researchers to match it with a hundred times less data using invariants such as horizontal symmetry for the digit 3.
- **Intelligence beyond the individual.** Pointing to near-simultaneous discoveries such as non-Euclidean geometry by Lobachevsky, Gauss and Bolyai, Vapnik speculates intelligence may not be only inside us.

## Quotes

> "Mathematics does not know deep learning. Mathematics does not know neurons; it is just functions." — Vladimir Vapnik

> "That means it's not a very difficult problem. That's it." — Vladimir Vapnik
