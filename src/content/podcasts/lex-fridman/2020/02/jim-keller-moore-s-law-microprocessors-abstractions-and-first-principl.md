---
title: 'Jim Keller: Moore’s Law, Microprocessors, Abstractions, and First Principles'
description: >-
  Chip architect Jim Keller argues that Moore's law is a cascade of thousands of
  innovations that is far from dead, and that progress comes from simple
  thinking, frequent rewrites and first principles.
pubDate: '2020-02-05'
show: lex-fridman
url: 'https://lexfridman.com/jim-keller/'
youtube: 'https://www.youtube.com/watch?v=Nb2tebYAaOA'
durationMin: 95
hosts:
  - Lex Fridman
guests:
  - Jim Keller
tags:
  - semiconductors
  - moores-law
  - computer-architecture
  - autonomous-driving
  - first-principles
draft: false
---
## Thesis

Jim Keller, the microprocessor engineer behind AMD's K7, K8 and Zen designs and Apple's A4 and A5, tells Lex Fridman that computing is a stack of abstraction layers from atoms to data centres, and that Moore's law will keep delivering because it is really thousands of overlapping innovations. He argues that engineers and organisations should think simpler, rewrite designs from scratch regularly, and question their assumptions, a habit he credits partly to working with Elon Musk.

## Key points

- **Found versus given parallelism.** Keller explains that modern CPUs fetch around 500 instructions, build a dependency graph and run them out of order, while GPUs exploit parallelism the programmer hands them. Branch predictors now use something like a neural network: about 1,000 bits got 85% accuracy, while 99% takes tens of megabits.
- **Rewrite every five years.** Incremental tweaks hit diminishing returns, Keller says; a rewrite is often faster and half as complex. He notes x86 designs tend to be redone every ten years but should be every five.
- **Moore's law is not dead.** Keller, then at Intel, describes Moore's law as a cascade of diminishing-return curves that adds up to an exponential. A transistor is roughly 1,000 atoms on a side and quantum effects start around 10, so he expects 10 to 20 more years of shrinking, with nanowires as a next step.
- **Designing for more transistors.** Since people do not get smarter and teams cannot grow much beyond 100, Keller argues abstraction layers and design strategy must change to use, and cope with, the extra transistors.
- **Tesla Autopilot.** Keller says the hardware was straightforward but had to be cheap enough for every car, unlike startups with a server in the trunk costing ten or twenty thousand dollars. He calls driving largely a ballistics problem; Fridman pushes back that human behaviour makes it harder.
- **AI risk and meaning.** Keller is not worried about superintelligence turning on humans and calls himself, in his nephew's phrase, a "jaded optimist".

## Quotes

> "if you want to really make a lot of progress on computer architecture every five years you should do one from scratch" — Jim Keller

> "I imagine 99% of your thought process is protecting your self conception and 98% of that's wrong" — Jim Keller
