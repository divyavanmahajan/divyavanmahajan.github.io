---
title: The State of Silicon and the GPU Poors - with Dylan Patel of SemiAnalysis
description: >-
  Compute will stay the bottleneck for everyone, so Dylan Patel argues the GPU
  poor should skip low-value work and that Nvidia, Google TPUs and memory
  bandwidth will set the pace.
pubDate: '2023-11-17'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_state_of_silicon_and_the_gpu_poors_-_with_dylan_patel_of_semianalysis
durationMin: 53
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Dylan Patel
tags:
  - semiconductors
  - gpus
  - inference
  - ai-hardware
  - supply-chain
draft: false
---
## Thesis

Dylan Patel of SemiAnalysis argues that efficient infrastructure, not software, is becoming the main advantage in AI, and that relative to scaling ambitions everyone is "GPU poor". He thinks smaller players should stop on work he sees as low value, such as fine-tuning small models or chasing Hugging Face leaderboards, and focus on on-device inference, distribution and new techniques. On hardware, he expects Nvidia and Google's TPUs to stay dominant because of supply chain capacity and release cadence.

## Key points

- **Training versus serving.** Patel puts GPT-4 at about 20,000 A100s and roughly $500 million all-in, and calls training costs largely irrelevant. In his view AI software will have lower R&D costs than SaaS but much higher cost of goods sold.
- **Memory bandwidth matters for inference.** He argues model bandwidth utilisation (MBU) matters more than MFU at inference. Serving Llama 70B at human reading speed (about 30 ms per token) needs roughly 2.1 TB/s, and he says Hugging Face libraries reach only about 15% MBU on 8 A100s.
- **Google's lead.** Patel says Google will have more compute than any other company by a large factor, and that its TPU networking relies on a Broadcom partnership Google has repeatedly tried to leave, with 2027 the latest target.
- **Advice to the GPU poor.** He sees value in speculative decoding work such as Together's Medusa, on-device models like Replit's, and asynchronous training research from Tim Dettmers. By his estimate about 10 companies could beat GPT-4 with around 7,000 H100s for three months.
- **Alternative chips.** First-wave startups such as Graphcore and Cerebras bet on on-chip SRAM, which Patel calls a mistake once models outgrew it. He says AMD's MI300 costs more than twice as much as an H100 to manufacture.
- **Supply chain fragility.** Patel says many in Taiwan expect a Chinese invasion around 2026-27, and argues the chip supply chain, including two Austrian toolmakers and Japanese chemical suppliers, cannot be rebuilt in the US within a few years.

## Quotes

> "compute will always be a bottleneck, just like data will always be a bottleneck." — Dylan Patel

> "Semiconductors are more complex than any other thing that humans do." — Dylan Patel
