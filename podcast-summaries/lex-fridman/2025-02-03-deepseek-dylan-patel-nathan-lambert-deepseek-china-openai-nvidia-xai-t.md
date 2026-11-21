---
title: "#459 – DeepSeek, China, OpenAI, NVIDIA, xAI, TSMC, Stargate, and AI Megaclusters"
date: 2025-02-03
show: lex-fridman
episode: 459
url: "https://lexfridman.com/deepseek-dylan-patel-nathan-lambert/"
youtube: "https://www.youtube.com/watch?v=_1f-o0nqpEI"
duration_min: 316
hosts: ["Lex Fridman"]
guests: ["Dylan Patel", "Nathan Lambert"]
description: "DeepSeek's cheap open-weight models came from real engineering efficiency, not magic, and the longer contest with China will be decided by compute, chips and power."
tags: ["deepseek", "export-controls", "semiconductors", "reasoning-models", "ai-infrastructure"]
source_transcript: "lex-fridman/episodes/2025/02/2025-02-03-deepseek-dylan-patel-nathan-lambert-deepseek-china-openai-nvidia-xai-t.md"
draft: false
---

## Thesis

Dylan Patel (SemiAnalysis) and Nathan Lambert (Ai2) argue that DeepSeek's V3 and R1 reflect genuine efficiency work, but the headline training cost leaves out most of what was spent. In their view the lasting story is who controls compute, chip manufacturing and power.

## Key points

- **The real cost.** Patel notes DeepSeek disclosed only 2,000 H800s for V3 pre-training. SemiAnalysis believes the company has closer to 50,000 GPUs and points to the 10,000 A100s parent High-Flyer had in 2021. Lambert adds that experiments typically take two to four times the compute of the final run.
- **Architecture.** Patel explains the sparse mixture of experts: 600-plus billion parameters, about 37 billion active per token, 8 of 256 experts. Because the H800's interconnect was cut, DeepSeek scheduled GPU cores itself rather than relying on NVIDIA's NCCL. Lambert credits multi-head latent attention with cutting attention memory by 80 to 90%.
- **Pricing gap.** Lex cites $2 per million output tokens for R1 against $60 for o1. Patel attributes part of the gap to OpenAI's inference gross margins of over 75%, and says GPT-3-level cost has dropped about 1200x, so DeepSeek is on the trend line, not below it.
- **Export controls and Taiwan.** Patel argues compute is the only lever that can slow China. He says NVIDIA shipped about a million China-specific H20s last year, and that leading-edge chip R&D happens in just three places, including Hsinchu in Taiwan.
- **Reasoning from RL.** Lambert describes R1-Zero, where reasoning behaviours emerged from reinforcement learning on verifiable answers with no human preference data. Patel expects the next breakthrough moment in computer use or robotics, where tasks can be checked without limit.
- **Megaclusters.** Patel lists xAI's Memphis site at 200,000 GPUs, Meta at 128,000 and OpenAI at 100,000. He describes Stargate's Abilene site as 2.2 gigawatts and $100 billion of total cost of ownership for phase one, and says OpenAI does not yet have the money for its $19 billion share.

## Quotes

> "Arizona is a paperweight. If Hsinchu disappeared off the face of the planet, within a year, couple years, Arizona would stop producing too." — Dylan Patel

> "it’s a scary reality, which is that these open models are probably going to keep coming for the time being, whether or not we want to stop them" — Nathan Lambert
