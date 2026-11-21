---
title: "#111 – Richard Karp: Algorithms and Computational Complexity"
date: 2020-07-26
show: lex-fridman
episode: 111
url: "https://lexfridman.com/richard-karp/"
youtube: "https://www.youtube.com/watch?v=KllCrlfLuzs"
duration_min: 128
hosts: ["Lex Fridman"]
guests: ["Richard Karp"]
description: "Turing Award winner Richard Karp explains P versus NP, NP-completeness and randomized algorithms, bets that P is not equal to NP, and doubts that current AI approaches human-level intelligence."
tags: ["algorithms", "computational-complexity", "p-vs-np", "randomized-algorithms", "computer-science-history"]
source_transcript: "lex-fridman/episodes/2020/07/2020-07-26-richard-karp-algorithms-and-computational-complexity.md"
draft: false
---

## Thesis

Richard Karp, the Berkeley professor whose 1971 paper proved 21 problems NP-complete, walks Lex Fridman through the core ideas of complexity theory. He argues that P is almost certainly not equal to NP, so practitioners must lean on heuristics, randomization and approximation, while worst-case theory still struggles to explain why many hard problems are easy in practice.

## Key points

- **P, NP and reductions.** Karp explains P as problems solvable in polynomial time and NP as problems whose solutions can be checked quickly. Building on Stephen Cook's proof that satisfiability is universal for NP, he reduced satisfiability to integer programming, clique and other problems, showing that either all of them or none are in P.
- **His bet.** Karp would bet that P is unequal to NP, citing problems like factoring that have resisted centuries of effort, and says any proof either way will need concepts "now outside the box".
- **Elegant algorithms.** He recalls the Hungarian algorithm for the assignment problem as the moment he knew he was a "geek", names the Gale-Shapley stable matching algorithm as a favourite, and singles out his own Rabin-Karp string search for showing the power of random fingerprints.
- **Theory versus practice.** SAT solvers handle millions of variables in chip design, and integer programming codes solve travelling salesman instances with tens of thousands of cities. Karp says his own average-case work on random graphs was "a great playground" but lacked practical bite, and theory has no equivalent of a training set.
- **Doubts about AI.** Karp considers the Turing test too subjective, doubts a Turing machine will reach human-level intelligence, and notes that deep learning works empirically without theoretical understanding or interpretability.
- **Teaching.** He dedicates his Turing Award lecture to his father, a teacher, and says former students remembered his classes more than his papers.

## Quotes

> "i don't think there's any computer program which surpasses a six-month-old child in terms of comprehension of the world" — Richard Karp

> "the top three would be preparation preparation and preparation" — Richard Karp
