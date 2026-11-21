---
title: GPU dev environments that just work
description: >-
  Brev.dev's Nader Khalil argues that GPU dev environments should be
  reproducible, shareable and cheap to run, so ML developers spend time building
  rather than fixing machine problems.
pubDate: '2023-01-24'
show: practical-ai
episode: 208
url: 'https://share.transistor.fm/s/25e6c751'
durationMin: 40
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Nader Khalil
tags:
  - dev-environments
  - gpu
  - mlops
  - cloud-computing
  - developer-experience
draft: false
---
## Thesis

Nader Khalil, co-founder and CEO of Brev.dev, argues that environment setup is one of the monotonous machine problems that get in the way of creative development, and that it is worst in AI work, where GPUs are expensive, drivers are fiddly and environments are hard to replicate. Brev's answer is a CLI and UI that spin up remote GPU environments, connect local editors to them and keep costs down by moving work between cheap and powerful instances.

## Key points

- **Origin story.** Khalil's previous YC startup put tablets in Ubers and Lyfts to advertise local businesses; it reached about a quarter million ARR before the March 2020 shelter-in-place took the fleet from 400 cars to seven. He says the hardest weeks of that business were spent on dev environment bugs they could not reproduce locally.
- **A flexible abstraction.** After a year and a half of pivots, including a heavy, opinionated Replit-like platform, Khalil concluded that an abstraction only works if it fits the problem, so Brev settled on a simple bash setup script on a known Ubuntu version, with containers optional.
- **Cost controls.** Auto stop, volume-aware backups and BrevScale, which lets users drop the GPU for a pennies-per-hour CPU instance. Khalil cites one user whose Google Cloud bill fell from about $280 to roughly $25-27.
- **Sharing and secrets.** Templates (Stable Diffusion, Dreambooth, Whisper, CLIP and others) can be shared as a URL; each user's own shell settings are layered on top, and HashiCorp Vault scopes which secrets travel with a shared environment. Whitenack describes `brev open` launching VS Code against the remote machine as the moment it clicked.
- **Interactive vs non-interactive compute.** Khalil sees Brev as the place to develop and Banana's serverless GPUs as the place to deploy, with planned one-click moves in both directions for debugging.
- **Roadmap.** Partnering with Lambda Labs, whose GPUs he says cost a third as much, and a container strategy to start and stop environments across clouds. Enterprises can run the control plane inside their own VPC.

## Quotes

> "But ultimately we learned that a good abstraction is only good if it pairs well with the problem it's solving." — Nader Khalil

> "A GPU is a commodity. It's like, you just want the cheapest one and you want to be able to run your code on it easily." — Nader Khalil
