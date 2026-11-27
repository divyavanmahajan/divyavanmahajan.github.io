---
title: "Silicon Horizons"
date: 2026-04-29
show: moonshot
episode: 6
url: "https://www.youtube.com/watch?v=WpVNQxv0eKc"
youtube: "https://www.youtube.com/watch?v=WpVNQxv0eKc"
duration_min: 37
hosts: ["Astro Teller"]
guests: ["Tammo Spalink", "Raj Apte"]
description: "With Moore's law ending and AI demand for compute and energy rising, two X projects bet on specialised inference chips (Positron) and AI-driven automated chip design (Bodger)."
tags: ["semiconductors", "chip-design", "ai-hardware", "inference", "moores-law"]
source_transcript: "moonshot/episodes/2026/04/2026-04-29-silicon-horizons.md"
draft: false
---

## Thesis

Astro Teller argues that AI's demand for compute and electricity has become a crisis, and that it will not be solved by software alone. The substrate itself has to change. Tammo Spalink describes Positron, an early chip built for real-time inference rather than training throughput. Raj Apte describes Bodger, which aims to let computers design chips cheaply enough that many more application-specific chips become viable.

## Key points

- **Inference versus training.** Spalink says training chips optimise for throughput, while inference chips for robots must optimise for response time. Teller compares this to a violinist's 10,000 hours of practice versus the live performance. Around 2015, Positron chose Waymo as its first proto-customer because self-driving needs instant decisions.
- **Unpopular bets that held up.** According to Spalink, the team wrote its tools in Haskell and pushed 8-bit and 4-bit integer formats when most people used 16-bit. Teller recalls the team being laughed at for it. Spalink notes that all inference chips now use small numeric formats.
- **Pivot to the cloud.** Spalink says Google's existing inference load for Translate and image recognition made data centres a better first market. Positron graduated to Jeff Dean's Google Brain team.
- **End of Moore's law.** Apte says transistors now measure single-digit nanometres, a few atoms across. Citing Hennessy and Patterson's Turing lecture, he argues the answer is application-specific hardware. Designing a chip still costs $10-20 million for a small one and $50-100 million for a medium one.
- **A hardware compiler.** Apte wants an hour-long, $1,000 compile to replace a year of hand work by about 100 people. CTO Benoit Schillings told him to pursue the craziest of his six ideas. Bodger uses inverse design, a figure of merit plus computer search, and drops human-friendly constraints such as Manhattan-only wiring.
- **Why it matters now.** Apte says machine learning and the goal of AGI, which he puts 5-15 years away, turned the work into a moonshot. Bodger is now an in-house team contributing to Google's chip designs.

## Quotes

> "we were building the hardware for artificial brains and we had to be together. It was fate." — Tammo Spalink

> "We don't really care if the chip is explainable. It just needs to be right." — Raj Apte
