---
title: Dylan Patel — Deep dive on the 3 big bottlenecks to scaling AI compute
description: >-
  Dylan Patel argues that by 2030 AI compute will be capped by chipmaking,
  ultimately ASML's EUV tools, with memory a nearer crunch and power the easiest
  constraint to solve.
pubDate: '2026-03-13'
show: dwarkesh
url: 'https://www.dwarkesh.com/p/dylan-patel'
youtube: 'https://www.youtube.com/watch?v=mDG_Hx3BSUE'
durationMin: 151
hosts:
  - Dwarkesh Patel
guests:
  - Dylan Patel
tags:
  - semiconductors
  - ai-compute
  - asml
  - memory
  - data-centers
  - energy
draft: false
---
## Thesis

SemiAnalysis CEO Dylan Patel tells Dwarkesh Patel that the binding constraint on AI scaling is moving away from power and data centres and back to chips. Fabs take two to three years to build, memory makers underinvested for years, and by 2028-2029 the bottleneck falls to ASML's EUV tools. Power, by contrast, can be solved with messy but workable alternatives.

## Key points

- **H100s have gained value.** Patel says an H100 costs about $1.40/hour to deploy over five years, but some labs are signing $2.40/hour deals for two to three years, because a GPU's value is set by the best model it can serve (GPT-5.4), not by newer chips.
- **Anthropic was too cautious on compute.** He says Anthropic added $4 billion of revenue in January and $6 billion in February and now must buy last-minute capacity or rely on Bedrock, Vertex and Foundry revenue shares. Google got squeezed after Anthropic locked up TPU capacity first.
- **The EUV maths.** One gigawatt of Nvidia Rubin needs about 55,000 3 nm wafers, 6,000 5 nm wafers and 170,000 DRAM wafers, or roughly 2 million EUV passes, which works out to about 3.5 tools. ASML makes about 70 tools a year, rising to just over 100 by 2030. With 250-300 already installed, that gives about 700 tools and roughly 200 GW of AI chips a year.
- **Memory crunch.** About 30% of Big Tech's 2026 capex goes to memory. Patel expects smartphone sales to fall from about 1.1 billion to 800 million this year and 500-600 million next year, with Xiaomi and Oppo halving low-end volumes.
- **Power is solvable.** Aeroderivative turbines, reciprocating and ship engines, Bloom fuel cells and batteries that unlock about 20% of the terawatt-scale US grid could add hundreds of gigawatts. Doubling the price of power adds only about ten cents an hour to a Hopper's cost.
- **Space GPUs and China.** Patel rules out space data centres this decade: about 15% of Blackwells need RMA, and launch delays cost months. With short timelines the US pulls ahead; with long ones, China's integrated supply chain could win.

## Quotes

> "You sort of have this dynamic that is quite interesting in that an H100 is worth more today than it was three years ago." — Dylan Patel

> "At the end of the day, all that matters in a chip-constrained world is getting these chips producing tokens ASAP." — Dylan Patel
