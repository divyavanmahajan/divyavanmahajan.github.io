---
title: "Hybrid computing with quantum processors"
date: 2022-11-08
show: practical-ai
episode: 200
url: "https://share.transistor.fm/s/bebc875e"
duration_min: 44
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Yonatan Cohen"]
description: "Quantum Machines CTO Yonatan Cohen argues quantum processors will first matter as accelerators beside CPUs and GPUs, reached through control hardware and high-level hybrid workflow libraries."
tags: ["quantum-computing", "hybrid-computing", "optimization", "hardware-acceleration", "developer-tooling"]
source_transcript: "practical-ai/episodes/2022/11/2022-11-08-hybrid-computing-with-quantum-processors.md"
draft: false
---

## Thesis

Yonatan Cohen, CTO of Quantum Machines, argues that quantum computers will not replace classical machines but act as QPU accelerators in heterogeneous data centres. Getting there requires classical control hardware that drives the qubits, plus a software stack that lets AI developers call quantum subroutines from familiar tools without learning quantum mechanics.

## Key points

- **Qubits and parallelism.** Cohen explains that a qubit can be in a weighted superposition of zero and one, so many qubits together can explore many states at once, giving an advantage for some problems but not all.
- **Known and heuristic algorithms.** He cites Shor's algorithm (exponential speedup for factoring) and Grover's search (square-root speedup), and says QAOA for combinatorial optimisation and VQE for chemistry are unproven heuristics, comparable to where AI stood a decade or two ago.
- **Access today.** IBM's quantum cloud, Azure and AWS give access to small, error-prone prototypes from vendors such as IonQ. Cohen says experiments that took a Weizmann Institute PhD student years to set up 12 years ago now take hours.
- **Hybrid loops.** In variational algorithms, the QPU evaluates a cost function for a parameterised circuit while a classical optimiser such as gradient descent proposes new parameters. Cohen hopes this could help train neural networks, and mentions work suggesting quantum neural networks may need less data.
- **Why control hardware.** Control systems send precisely timed microwave pulses to the qubits and measure signals back for feedback. Cohen and CEO Itamar Sivan started there because a friend, Nisim, had to build his own controller to demonstrate quantum error correction at Rob Schoelkopf's Yale lab.
- **Developer workflow.** Cohen agrees with Whitenack and Benson that most developers will use libraries wrapped by frameworks like TensorFlow or PyTorch. Underneath, Quantum Machines offers a pulse-level language and a workflow tool called Entropy for mixing CPU, GPU and QPU steps.

## Quotes

> "But right now, you will have your CPU, you have a GPU, and you have your QPU." — Yonatan Cohen

> "at the end of the day, there is no reason why someone would program quantum gates." — Yonatan Cohen
