---
title: "#72 – Scott Aaronson: Quantum Computing"
date: 2020-02-17
show: lex-fridman
episode: 72
url: "https://lexfridman.com/scott-aaronson/"
youtube: "https://www.youtube.com/watch?v=uX5t8EivCaM"
duration_min: 94
hosts: ["Lex Fridman"]
guests: ["Scott Aaronson"]
description: "Scott Aaronson explains quantum computing as choreographed interference of amplitudes, argues Google's supremacy result is real but far from breaking cryptography, and warns that most quantum machine learning claims are unproven."
tags: ["quantum-computing", "quantum-supremacy", "cryptography", "computational-complexity", "philosophy-of-science"]
source_transcript: "lex-fridman/episodes/2020/02/2020-02-17-scott-aaronson-quantum-computing.md"
draft: false
---

## Thesis

Scott Aaronson, director of the Quantum Information Center at UT Austin, tells Lex Fridman that quantum computing is best understood as a generalisation of probability: amplitudes that can be negative or complex and can cancel out. He argues that Google's quantum supremacy experiment is a genuine milestone, but that useful, error-corrected machines are still far off, and that many promised applications rest on shaky foundations.

## Key points

- **Philosophy through sub-questions.** Aaronson describes replacing an unanswerable question Q with a tractable "Q prime", as Turing did with "can machines think?". For free will, he asks how well a person's behaviour could in principle be predicted without destroying their brain.
- **What a quantum computer does.** Aaronson says the popular claim that it "tries every answer in parallel" is wrong; measuring a plain superposition gives a random answer. Algorithms must arrange for wrong answers to cancel and right answers to reinforce.
- **Decoherence and error correction.** Leaking information to the environment destroys quantum states. The theory of quantum fault tolerance from the 1990s set the engineering agenda, but breaking RSA would need thousands of logical qubits, each built from thousands of physical ones: millions in total.
- **Quantum supremacy.** Google's 53-qubit device ran a random sampling task checked with the linear cross-entropy benchmark, which is just barely verifiable on the Summit supercomputer at Oak Ridge. Aaronson, who worked on sampling-based supremacy with Alex Arkhipov, says it refutes skeptics but is not useful in itself. He calls Andrew Yang's tweet that no code is uncrackable "premature" and points to NIST's post-quantum cryptography competition.
- **Most likely applications.** Aaronson expects simulation of chemistry and materials to come first, citing the century-old Haber-Bosch fertiliser process and a Microsoft study suggesting about 100 near-perfect qubits could help.
- **Hype in machine learning.** Grover's algorithm gives only a square-root speed-up for optimisation. His undergraduate Ewin Tang found a classical algorithm matching Kerenidis and Prakash's quantum recommendation algorithm, and other quantum machine learning proposals have since been "dequantized".

## Quotes

> "the entire trick with quantum computing with every algorithm for a quantum computer is that you try to choreograph a pattern of interference of amplitudes" — Scott Aaronson

> "you can build a reliable quantum computer even out of unreliable parts" — Scott Aaronson
