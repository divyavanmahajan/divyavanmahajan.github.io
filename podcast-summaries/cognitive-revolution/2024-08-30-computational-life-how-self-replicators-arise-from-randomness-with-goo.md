---
title: "Computational Life: How Self-Replicators Arise from Randomness, with Google’s Researchers"
date: 2024-08-30
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/computational-life-how-self-replicators-arise-from-randomness-with-googles-researchers/"
youtube: "https://www.youtube.com/watch?v=1kBGDVjrxpU"
hosts: ["Nathan Labenz"]
guests: ["Ettore Randazzo", "Luca Versari"]
description: "Google researchers show that self-replicating programs arise spontaneously from random 64-byte code strings with no fitness function, and debate what that means for origins of life and AI."
tags: ["artificial-life", "self-replication", "complexity", "emergence", "ai-safety"]
source_transcript: "cognitive-revolution/episodes/2024/08/2024-08-30-computational-life-how-self-replicators-arise-from-randomness-with-goo.md"
draft: false
---

## Thesis

Ettore Randazzo and Luca Versari, of Google's Paradigms of Intelligence team, discuss their paper "Computational Life: How Well-Formed Self-Replicating Programs Emerge from Simple Interaction". Their result is that self-replicators appear spontaneously from random code, with no objective or selection mechanism. Nathan Labenz takes this as a reason to expect self-replicating AI systems. The guests are more cautious and note that nobody yet knows how to produce unbounded growth in complexity.

## Key points

- **The setup.** The "soup" is a collection of random 64-byte strings. Pairs are picked at random, joined, run as code in a variant of the minimal language Brainfuck, and then split again. The variant replaces terminal input and output with two read/write heads. Background noise is optional, and the measured complexity is never fed back into the system.
- **Measuring structure.** Randazzo defines complexity as the gap between Shannon entropy and Kolmogorov complexity, estimated with a proxy because Kolmogorov complexity cannot be computed. He compares a building with its blueprint to a pile of rubble: the same molecules, but far less structure.
- **Pre-life before life.** Versari says copy and loop instructions become more common even before any replicator exists, similar to autocatalytic sets. Once a working self-replicator appears, the soup changes abruptly.
- **Extinction and succession.** In one run, an early replicator could not write over null bytes. It filled the soup with zeros and died out, and a sturdier replicator then took over. The researchers also saw a symbiosis-like pattern built on a one-byte replicator, and colleagues have seen parasitic behaviour.
- **Odds.** A single replicator placed in the soup takes over only about 23% of the time. Even so, takeover happens in roughly 40 to 60% of runs within 16,000 epochs. Randazzo notes the first replicators appeared after about 50 billion executed instructions.
- **Implications for AI.** Labenz argues that a digital ecosystem could give rise to self-replicating AI. Randazzo doubts large models could run at comparable speed and scale, and worries more about drift through imperfect copying. Versari stresses that most such experiments eventually plateau in complexity.

## Quotes

> "it's hard to say whether one program is a self-replicator, but it's a lot easier to say whether the soup is full of self-replicators." — Ettore Randazzo

> "We still don't know how to create unbounded complexity of behaviors." — Luca Versari
