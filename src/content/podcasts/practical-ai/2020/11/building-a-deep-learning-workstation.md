---
title: Building a deep learning workstation
description: >-
  Daniel Whitenack explains why he built his own two-GPU deep learning
  workstation instead of renting cloud GPUs, and what he would change next time.
pubDate: '2020-11-17'
show: practical-ai
episode: 112
url: 'https://share.transistor.fm/s/c0861e4d'
durationMin: 49
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - gpus
  - hardware
  - deep-learning
  - cloud-costs
  - ml-infrastructure
draft: false
---
## Thesis

Daniel Whitenack walks Chris Benson through the deep learning workstation he built for his NLP and speech work. He argues that for long, repeated training runs a self-built machine can beat cloud GPU costs and prebuilt workstations, provided you plan for expansion, cooling and storage. He is open about being "not a hardware person" and lists the mistakes he would avoid.

## Key points

- **Break-even with the cloud.** Whitenack estimated a summer of speech training would cost at least $8,000-12,000 in cloud GPUs, versus prebuilt Lambda Labs or System76 machines at $10,000-12,000. Blog posts by Jeff Chen and Curtis Northcutt showed a cheaper do-it-yourself route.
- **Two GPUs, room for four.** He fitted an RTX 2080 Ti and a Titan RTX on a Gigabyte X399 Aorus board so he and one colleague could each run single-GPU jobs, avoiding multi-GPU complexity. He notes NVLink, PCIe lane budgets (roughly eight lanes per GPU) and blower-style versus open-fan cards for heat.
- **Headless workflow.** The machine runs only Ubuntu, Docker and CUDA. Whitenack connects over SSH or to a remote Jupyter server, pulls data from S3 or DigitalOcean Spaces, and trains TensorFlow and PyTorch models in containers.
- **What he would change.** Rigid power cables stop the case from closing. He would choose an Intel CPU over the AMD Threadripper, because his Intel NUC target machine (i7, 64 GB RAM, OpenVINO) gives faster single-core preprocessing and would avoid moving models between systems.
- **Next steps.** With 30-series GPUs sold out, he plans more automated retraining pipelines, for example for spoken language identification, and mentions Pachyderm, Allegro AI and Weights & Biases as options.

## Quotes

> "don't skimp on the CPU or the RAM and over project your data storage." — Daniel Whitenack

> "As soon as you start working with speech or video data or something like that, one terabyte, it seems like a lot, but it's not." — Daniel Whitenack
