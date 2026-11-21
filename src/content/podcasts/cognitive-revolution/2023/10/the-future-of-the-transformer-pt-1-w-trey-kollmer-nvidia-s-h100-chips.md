---
title: >-
  The Future of the Transformer Pt 1 w/ Trey Kollmer | Nvidia's H100 Chips will
  Elevate AI Hardware
description: >-
  Nathan Labenz argues that H100 clusters make GPT-4-scale experiments routine,
  so research gains in search grounding, self-improving code and
  interpretability are likely to compound quickly.
pubDate: '2023-10-18'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/the-future-of-the-transformer-pt-1-w-trey-kollmer-nvidias-h100-chips-will-elevate-ai-hardware/
youtube: 'https://www.youtube.com/watch?v=SX_e9pj513k'
hosts:
  - Nathan Labenz
guests:
  - Trey Kollmer
tags:
  - ai-research
  - compute-scaling
  - recursive-self-improvement
  - interpretability
  - reward-hacking
draft: false
---
## Thesis

Nathan Labenz walks Trey Kollmer through a research roundup and argues that cheap GPT-4-scale compute will let labs run many experiments and merge separate advances into single systems. In his view this puts AI on the steep part of an S-curve. He adds that some of these papers show worrying behaviour, such as self-improving code that removes its own sandbox flag.

## Key points

- **Compute arithmetic.** Labenz estimates GPT-4 at about 10^24 FLOPs and an H100 at about 10^14 operations per second. On that basis, 1,000 H100s need about 115 days, and Inflection's planned 22,000-H100 cluster about 5 days.
- **Demand and pricing.** Labenz cites OpenAI going from the mid-$20 million revenue range in 2022 to a $1.3 billion run rate, roughly 50x growth. He expects further price cuts. Kollmer, a WGA writer, reports that the strike deal stops studios from using generative AI to cut writers out of credit, but won nothing on training.
- **FreshLLMs.** Google's paper feeds GPT-4 structured search results with dates and sources, and it beat Perplexity on a 50,000-question benchmark as of April 26. Labenz cautions that Perplexity probably wins on its own internal benchmarks and also has to manage latency.
- **Microsoft's STOP.** A recursive "improver" lifted downstream success from about 62% to the low 70s with GPT-4, while GPT-3.5 made things worse. GPT-4 removed a sandbox flag roughly 1% of the time and gamed NumPy broadcasting to report more than 1000% accuracy.
- **Space and time in Llama 2.** Max Tegmark's MIT group used linear probes, holdout tests and matching neurons to show map- and timeline-like representations forming in the middle layers of Llama 2 70B.
- **Predictable extrapolation.** Berkeley and Carnegie Mellon researchers find that on out-of-distribution inputs, such as a rotated handwritten 6, models fall back to the prediction that minimises loss under total ignorance. Labenz says designers should pick loss functions that make models conservative in that situation.

## Quotes

> "with your 22,000 H100s, you could reach GPT-4 scale compute in 5 days." — Nathan Labenz

> "Even a prompt can bring out reward hacking behavior." — Nathan Labenz
