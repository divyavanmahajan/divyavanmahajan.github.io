---
title: "Tomaso Poggio: Brains, Minds, and Machines"
date: 2019-01-19
show: lex-fridman
url: "https://lexfridman.com/tomaso-poggio/"
youtube: "https://www.youtube.com/watch?v=aSyZvBrPAyk"
duration_min: 80
hosts: ["Lex Fridman"]
guests: ["Tomaso Poggio"]
description: "Tomaso Poggio argues that neuroscience inspired the main AI breakthroughs and will likely inspire the next, while deep learning still needs far fewer labels to approach how children learn."
tags: ["neuroscience", "deep-learning", "learning-theory", "computer-vision", "agi"]
source_transcript: "lex-fridman/episodes/2019/01/2019-01-19-tomaso-poggio-brains-minds-and-machines.md"
draft: false
---

## Thesis

Tomaso Poggio, MIT professor and director of the Center for Brains, Minds, and Machines, tells Lex Fridman that understanding intelligence is the greatest problem in science. He bets that neuroscience, which inspired both reinforcement learning and deep learning, will keep feeding future breakthroughs. He also argues that theory can explain why deep networks work, while their dependence on huge labelled datasets remains a key gap compared with biology.

## Key points

- **Neuroscience as the source.** Poggio traces reinforcement learning, a core part of AlphaGo, back to Pavlov and Minsky, and the layered architecture of deep networks to Hubel and Wiesel's work at Harvard in the 1960s. Mobileye, started by Amnon Shashua, whom Poggio advised, builds on those ideas.
- **From n to infinity to n to one.** He says deep learning relies on labelled data like ImageNet's 1 million images, while a child learns "car" from a few examples. He suggests babies bootstrap weak evolutionary priors, such as motion detection, which separates objects from the background.
- **Weak priors, not hard wiring.** Poggio cites Marge Livingstone's experiments: monkeys raised without seeing faces developed no face-selective area, and some cells responded to the technicians' gloved hands instead.
- **Why depth helps.** He argues deep networks avoid the curse of dimensionality for compositional functions, where small local computations combine hierarchically, as in vision and reading. He thinks the brain may be wired this way because short-range connections are easier to grow, which differs from Max Tegmark's physics-based explanation.
- **Overparameterisation.** Using Bezout's theorem, Poggio estimates that networks with more parameters than data have vast numbers of global minima, which makes stochastic gradient descent's success less mysterious. He doubts that biology uses SGD.
- **Risk and timelines.** He thinks some concern about AI is good, but calls claims that AI is more dangerous than nuclear weapons misleading, and leans toward Rodney Brooks's estimate of roughly 200 years for AGI.

## Quotes

> "recent history suggests the neuroscience played a big role in these breakthroughs" — Tomaso Poggio

> "there are probably more minima for a typical deep networks than atoms in the universe" — Tomaso Poggio
