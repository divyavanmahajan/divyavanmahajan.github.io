---
title: "Worlds are colliding - AI and HPC"
date: 2019-09-17
show: practical-ai
episode: 56
url: "https://share.transistor.fm/s/43ed9629"
duration_min: 48
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "High performance computing, long used for simulation, is being reshaped by AI workloads, and an HPC strategy for AI depends on refreshable hardware, extensible software and good user experience."
tags: ["hpc", "infrastructure", "gpus", "mlops", "cloud-computing"]
source_transcript: "practical-ai/episodes/2019/09/2019-09-17-worlds-are-colliding-ai-and-hpc.md"
draft: false
---

## Thesis

Daniel Whitenack interviews his co-host Chris Benson, then an AI strategist at Lockheed Martin, about high performance computing (HPC). Benson argues that AI and machine learning now drive demand for cluster-scale compute, and that an HPC strategy for AI must plan for constant hardware refresh, an extensible software stack and a user experience good enough that data scientists actually use it.

## Key points

- **What HPC is.** Benson describes HPC as massively parallel compute for problems too large for typical on-prem or cloud resources, traditionally CPU clusters for simulation. CPU workloads can use tens of thousands of cores, and their software stacks (he mentions Singularity) sit close to the hardware and differ culturally from Kubernetes.
- **Why AI needs clusters.** Benson says a cluster pays off when many interdependent models must be iterated together, or when one organisation serves many teams. Mass hyperparameter exploration and large-scale self-play in deep reinforcement learning can absorb all available compute. Whitenack cites a report that training one large language model emitted as much carbon as five cars over their lifetimes.
- **Avoiding obsolescence.** Asked how a big investment avoids going stale, Benson says the strategy must run in phases, remove barriers to innovation, let people develop anywhere and deploy where needed, and use a stack new hires recognise. He notes NVIDIA's internal Maglev platform as an example.
- **User experience.** Whitenack recalls compiling Fortran, waiting in job queues and tape silos during his NCAR internship. Benson names Google Colab as his favourite workflow and says no vendor, including Domino Data Lab, yet matches that simplicity at cluster scale.
- **Sizing and demand.** Benson admits estimating GPU utilisation is hard and that a good platform raises demand: "if you build it, they will come." He expects cloud providers to move towards clustering as a service.
- **Learning paths.** Benson suggests Georgia Tech's HPC course on Udacity and small home or team clusters; Whitenack recommends NCAR's SIParCS internship.

## Quotes

> "your HPC strategy has to accommodate that natural refresh, that natural progress, because you don't want to buy into a technology and expect to just to leave it there." — Chris Benson

> "a year or two ago, doing neural network development was still a bit of a specialization" — Chris Benson
