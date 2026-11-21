---
title: 'SF Compute: Commoditizing Compute to solve the GPU Bubble forever'
description: >-
  Evan Conrad argues GPU clouds are real-estate businesses where price-sensitive
  buyers erase software margins, and that a liquid spot market, then
  cash-settled futures, would reduce risk across AI.
pubDate: '2025-04-11'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/sf_compute_commoditizing_compute_to_solve_the_gpu_bubble_forever
durationMin: 72
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Evan Conrad
tags:
  - gpu-compute
  - compute-markets
  - ai-infrastructure
  - cloud-economics
  - futures
draft: false
---
## Thesis

Evan Conrad, of SF Compute, tells Alessio Fanelli and swyx that GPUs do not behave like CPUs: every extra GPU earns more for a model trainer, so buyers are extremely price sensitive and will not pay for cloud software. He argues that GPU clouds should be run as real estate on long-term contracts, with software sold separately, and that SF Compute's spot market and a future cash-settled futures contract can take risk out of the industry.

## Key points

- **CoreWeave's playbook.** Conrad says CoreWeave succeeded by selling locked-in long-term contracts to low-credit-risk customers and borrowing cheaply against them. swyx notes that Microsoft and OpenAI make up seventy-seven percent of its revenue. Conrad calls it closer to a bank or real estate company than a software cloud.
- **Why software margins fail.** On a billion dollars of hardware, a ten percent premium is a hundred million dollars, so customers will switch or build the software themselves. He expects coupled hardware-plus-software players, including hyperscalers reselling Nvidia GPUs, to lose money, while Modal (no owned hardware) and CoreWeave (pure real estate) do well.
- **Origin story.** SF Compute began as a music and audio model lab that could only get year-long contracts. It used one month and sublet the other eleven, owing about $500,000 every thirty days with about $500,000 in the bank.
- **How the market works.** Buyers reserve compute by the hour; unsold blocks drop in price before they expire, like day-old milk. Setting a high limit price (say four dollars) while buying at market has given buyers prices near a dollar an hour, sometimes eighty cents.
- **Auditing clusters.** SF Compute burns in clusters with Linpack, runs performance tests and active and passive checks, asks vendors for BMC access, and is building automated refunds and a UEFI shim to image clusters from bare metal.
- **Supply and peers.** Conrad attributes the H100 glut to delayed clusters coming online together, not falling demand, and expects test-time inference to push back towards shortage. He is skeptical of peer-to-peer GPU networks because of speed-of-light limits.

## Quotes

> "The GPU clouds are fantastic real estate businesses. If you treat them like real estate businesses, you will make a lot of money." — Evan Conrad

> "The whole point of SF Compute is to reduce the risk, reduce the technical risk, reduce the financial risk." — Evan Conrad
