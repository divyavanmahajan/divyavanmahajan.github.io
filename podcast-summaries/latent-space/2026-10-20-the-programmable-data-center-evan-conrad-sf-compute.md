---
title: "The Programmable Data Center — Evan Conrad, SF Compute"
date: 2026-10-20
show: latent-space
url: "https://www.latent.space/p/sfcompute2"
duration_min: 37
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Evan Conrad"]
description: "SF Compute's CEO argues a GPU compute market needs physical settlement first, explains how its order book prices interruptible and future capacity, and why only a neutral player can run it."
tags: ["compute-markets", "gpu-capacity", "physical-settlement", "ai-infrastructure", "derivatives"]
source_transcript: "latent-space/episodes/2026/10/2026-10-20-the-programmable-data-center-evan-conrad-sf-compute.md"
draft: false
---

## Thesis

Evan Conrad, CEO of SF Compute, argues that a real market for GPU compute must be built on physical settlement, meaning reliable delivery of working clusters, before cash-settled derivatives can be trusted. SF Compute therefore operates everything a cloud does without owning hardware, so it can stay neutral. swyx, a former derivatives trader, presses him on liquidity, standardisation and the shape of the forward curve.

## Key points

- **From subleasing to running the hotel.** Conrad says SF Compute began by trying to sublease one cluster and kept taking on more operations, like a hotel guest who ends up running the hotel. It now handles site visits, bill of materials, cluster architecture, rack rollout and backplane management.
- **Thin volume, concentrated liquidity.** About 5% of SF Compute's capacity is on the order book. Conrad says a customer who spends $100 on capacity makes back $25 on average by reselling it.
- **No standard contract yet.** Machines differ: one virtual machine type can be 40% slower on GPU kernel launches than another, and early H100s and GB200s had firmware faults. Rather than one standard grade, buyers post orders with constraints, for example any Blackwell under $6 an hour, accepting wider spreads.
- **A market for breaking leases.** Clusters are financed over three to five years. Conrad describes a humped forward curve: unsold near-term capacity is discounted like milk near expiry. He points to an arbitrage where a B300 earns about $40 an hour at full use, or $25 at 50%, from inference, but rents for $5 to $6.
- **Why NVIDIA does not build it.** He argues NVIDIA, the neoclouds, hyperscalers and inference providers all benefit from a neutral market but cannot run one without giving up their own big deals. He warns that cash-settled indices built on little data invite LIBOR-style manipulation.
- **Programmable data centre.** SF Compute reports close to several hundred million dollars of volume and now lets customers redraw their InfiniBand fabric on the fly, which swyx and Conrad describe as virtualising the data centre.

## Quotes

> "NVIDIA can't make it, but benefits tremendously from it existing." — Evan Conrad

> "you have to kill your business in order to make this." — Evan Conrad
