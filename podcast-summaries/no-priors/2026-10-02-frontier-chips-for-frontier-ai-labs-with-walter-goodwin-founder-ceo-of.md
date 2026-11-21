---
title: "Frontier Chips for Frontier AI Labs, with Walter Goodwin, Founder/CEO of Fractile"
date: 2026-10-02
show: no-priors
url: "https://www.youtube.com/watch?v=OpeCP4wCxkA"
youtube: "https://www.youtube.com/watch?v=OpeCP4wCxkA"
duration_min: 36
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Walter Goodwin"]
description: "Walter Goodwin argues that frontier AI needs inference chips that combine very high memory bandwidth with cheap DRAM capacity, built by a full-stack team that can turn workload bets into hardware faster."
tags: ["ai-chips", "inference", "memory-bandwidth", "semiconductors", "chip-design"]
source_transcript: "no-priors/episodes/2026/10/2026-10-02-frontier-chips-for-frontier-ai-labs-with-walter-goodwin-founder-ceo-of.md"
draft: false
---

## Thesis

Walter Goodwin, founder and CEO of Fractile, tells Sarah Guo that the next step in AI capability comes from running multi-trillion-parameter models at thousands of tokens per second for long-running agents. He argues that this needs chips with very high memory bandwidth and cheap memory capacity. A full-stack chip company that controls design end to end can place those bets and bring them to volume faster than rivals.

## Key points

- **A zoo of similar chips.** Goodwin says most AI ASICs look alike: HBM memory, tensor cores and TSMC packaging, often delivered through ASIC houses such as Broadcom. Examples include Google's TPU, Meta's MTIA, Microsoft's Maia and OpenAI's chip. Few teams cover the whole stack.
- **From SRAM to DRAM.** Fractile began, like Groq and Cerebras, with an SRAM-based design. Growing parameter counts and context lengths raised concerns about scalability, so it moved to getting very high bandwidth from lower-cost DRAM. The platform ramps in the second half of next year.
- **Bandwidth as a scaling law.** Goodwin says flops have grown about a millionfold in 20 years against roughly 40x for memory bandwidth. Fractile targets about 25 times the bandwidth per chip of HBM-based parts. That could make sparser mixture-of-experts models (1 in 128 or 256) practical and save flops for the same intelligence.
- **A full-stack team.** About 150 people cover front-end, physical design, back-end implementation and advanced packaging. Goodwin wants a "rolling frontier" of bets ready to ramp, aiming for a 3- to 6-month lead. Fab cycles and 3-5 year amortisation still limit how often chips change.
- **AI in chip design.** When told a top semiconductor CEO expects intent-to-GDSII automation in 10 years, Goodwin divides by four. He says conventional place-and-route tools become the bottleneck, so fast approximate tools matter, while Cadence and Synopsys keep final sign-off.
- **Market structure.** He sees in-house hyperscaler chips partly as leverage on Nvidia pricing. He argues that frontier labs cannot risk going all in on proprietary silicon, which leaves room for third-party frontier chip vendors.

## Quotes

> "We've scaled flops like a millionfold in the last 20 years. Memory bandwidth has gone up about 40x in the same time frame." — Walter Goodwin

> "if you can just find a way to structurally carve out a three to six-month advantage, uh you will be winning all of those deployments." — Walter Goodwin
