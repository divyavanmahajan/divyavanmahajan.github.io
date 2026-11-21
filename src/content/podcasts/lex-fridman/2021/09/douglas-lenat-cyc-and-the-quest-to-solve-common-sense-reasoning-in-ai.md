---
title: '#221 – Douglas Lenat: Cyc and the Quest to Solve Common Sense Reasoning in AI'
description: >-
  Douglas Lenat argues that AI needs tens of millions of hand-built common-sense
  rules, which Cyc has now assembled, to stop being brittle and to explain its
  answers.
pubDate: '2021-09-15'
show: lex-fridman
episode: 221
url: 'https://lexfridman.com/douglas-lenat/'
youtube: 'https://www.youtube.com/watch?v=3wMKoSRbGVs'
durationMin: 179
hosts:
  - Lex Fridman
guests:
  - Douglas Lenat
tags:
  - symbolic-ai
  - knowledge-representation
  - common-sense-reasoning
  - cyc
  - explainable-ai
draft: false
---
## Thesis

Douglas Lenat, who started Cyc in 1984, argues that AI systems stay brittle until they rest on a large base of common-sense knowledge: the unstated rules of thumb people assume strangers already know. After about 37 years of manual entry, he says this knowledge pump is nearly primed, so Cyc can increasingly learn on its own and pair with machine learning, which he likens to the brain's fast, pattern-matching right hemisphere.

## Key points

- **How much knowledge.** Lenat recalls a 1984 Stanford meeting with Marvin Minsky, Allen Newell, Alan Kay and others, where every estimate came out near a million rules. They were off by a factor of ten: Cyc now holds tens of millions of assertions, built by about 50 people over thousands of person-years, starting at MCC in Austin.
- **Local, not global, consistency.** Cyc gave up global consistency and split its knowledge into contexts, like tectonic plates, that are each consistent internally, such as the real world versus a Road Runner cartoon. Lenat says the Japanese Fifth Generation project failed partly because it stored knowledge as a tree instead of a graph.
- **Expressiveness plus speed.** Lenat says triple-store knowledge graphs and the semantic web are too weak for nested beliefs, so Cyc uses higher-order logic. To keep it fast, more than a thousand specialised heuristic-level modules work like a community of agents, alongside about 150 speed-up ideas.
- **Explanations matter.** When his daughter was diagnosed with meningitis as a baby, Ted Shortliffe's rule-based MYCIN gave the same diagnosis as her doctors but explained why. In an NIH project with the Cleveland Clinic, Cyc built causal chains that filtered out spurious genome-wide correlations.
- **Business and OpenCyc.** Lenat says almost all funding now comes from companies such as hospital chains and energy firms rather than government. He says OpenCyc, a taxonomy-only subset, was meant to show researchers what they were missing, but many treated it as good enough.
- **Long bets.** Now over 70, Lenat says mortality pushes him to commercialise Cyc within a few years, and tells young people to avoid the path of least resistance.

## Quotes

> "we had to give up Global consistency so the knowledge base can no longer be consistent" — Douglas Lenat

> "remember that you're mortal remember that you have a limited number of decade sized bets to make with your life" — Douglas Lenat
