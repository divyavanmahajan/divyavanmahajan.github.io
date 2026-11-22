---
title: When AI meets quantum mechanics
description: >-
  Quantum computing is a different technology, not a faster CPU, and quantum
  physics and machine learning share mathematics that lets each field help the
  other through hybrid, cloud-based systems.
pubDate: '2019-05-14'
show: practical-ai
episode: 43
url: 'https://share.transistor.fm/s/f12c2f5e'
durationMin: 62
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Shohini Ghose
  - Marcus Edwards
tags:
  - quantum-computing
  - quantum-machine-learning
  - open-source
  - research
  - tensorflow
draft: false
---
## Thesis

Shohini Ghose (Wilfrid Laurier University) and Marcus Edwards (Institute for Quantum Computing, University of Waterloo) argue that quantum computing harnesses different physical laws and so offers new "rules" for computation rather than more speed. Because quantum theory and machine learning both rest on high-dimensional linear algebra and tensor networks, they see the two fields helping each other, with quantum processors most likely reached through the cloud as back ends for hybrid algorithms.

## Key points

- **A different technology.** Ghose compares quantum versus classical computing to cars versus horse-drawn carriages. Qubits in superposition allow new gates and algorithms for cryptography, factoring and search, which she likens to 3D chess.
- **Current hardware is still a toy.** Edwards cites D-Wave's annealing devices, which Lockheed Martin bought in 2010 and used to debug 30-year-old F-16 code, and IBM's 20-qubit universal machine available via the cloud. He calls these multi-million-dollar machines too small for large optimisation or ML gains yet.
- **Hybrid, cloud-first future.** Ghose sees no need for quantum laptops; she expects near-term uses in encryption and molecular simulation within about a decade, behind familiar front ends. Edwards notes Rigetti, Google and Xanadu offer software portals and says a fully quantum computer would be useless without classical interfaces.
- **Programming the stack.** Edwards describes IBM's open-source OpenQASM assembly language and his five months contributing to Xanadu's Strawberry Fields, which with PennyLane aims to be the TensorFlow of quantum computing and can use TensorFlow as a simulation back end.
- **Each field helps the other.** Ghose says classical simulation doubles in cost with each added qubit, but tensor-network methods that map onto neural networks have helped study magnetic materials. Whitenack recalls ML outperforming hand-built physics methods in his grad school work.
- **Quantum emulation and getting started.** Edwards' project emulates quantum behaviour in hardware such as FPGAs and analogue circuits; Ghose says the goal is to find where a real quantum computer becomes necessary. Edwards recommends IBM's Qiskit tutorials and the Quantum Open Source Foundation.

## Quotes

> "It's not like you can just build better and better horses and make a car." — Shohini Ghose

> "I don't necessarily think anyone truly understands quantum mechanics." — Marcus Edwards
