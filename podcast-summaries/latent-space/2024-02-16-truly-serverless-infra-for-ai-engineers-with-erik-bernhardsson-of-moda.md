---
title: "Truly Serverless Infra for AI Engineers - with Erik Bernhardsson of Modal"
date: 2024-02-16
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/truly_serverless_infra_for_ai_engineers_-_with_erik_bernhardsson_of_modal"
duration_min: 62
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Erik Bernhardsson"]
description: "Erik Bernhardsson argues that fast container startup makes serverless GPUs a natural fit for bursty AI inference, letting Modal act as a second-layer cloud built for developer productivity."
tags: ["serverless", "gpu-compute", "cloud-infrastructure", "developer-tools", "inference"]
source_transcript: "latent-space/episodes/2024/02/2024-02-16-truly-serverless-infra-for-ai-engineers-with-erik-bernhardsson-of-moda.md"
draft: false
---

## Thesis

Modal founder Erik Bernhardsson, formerly of Spotify and CTO of Better, tells Alessio Fanelli and swyx that developer productivity comes down to fast feedback loops, and that cloud tooling such as Docker and Kubernetes breaks them for data teams. He argues generative AI turned out to fit serverless well: a small prompt goes in, the GPU does heavy compute, a small answer comes back. Modal therefore positions itself as a second-layer cloud on top of AWS, GCP and Oracle, much as Snowflake did.

## Key points

- **Built from the bottom up.** Bernhardsson skipped Docker's image push and pull, ran containers with runc on a custom network file system, and wrote his own scheduler. Most of a multi-gigabyte image is never read, he notes, so code can start in the cloud within a second or two.
- **Infrastructure as Python.** Modal has no config files: a function decorator can request an A100, and containers call each other like functions. swyx links this to his "self-provisioning runtime" essay.
- **Inference was the killer app.** About a year and a half in, Modal had few users or revenue; Stable Diffusion changed that. Rapid autoscaling means customers pay only for GPU time in use, so many save money despite a higher hourly price. Ramp fine-tunes 100 models in parallel, and Suno runs production music models on Modal.
- **Staying out of the price war.** LLM switching costs are zero, he says, so Modal focuses on custom models, image, audio and video. He compares the VC-subsidised GPU glut to the 1998-99 fiber boom: investors lose, consumers gain.
- **Capital efficiency over owning hardware.** He wants costs to track revenue closely, though Modal now uses significant reservations. He calls Oracle's GPUs good value and says sandboxes, built on gVisor, are becoming "a platform for platforms".
- **Developer demand keeps rising.** Bernhardsson, an IOI gold medallist, expects AI to raise demand for engineers by making software cheaper to build.

## Quotes

> "And I think, you know, every startup is a wrapper to some extent, but like you need to be like a fat wrapper." — Erik Bernhardsson

> "When AI makes engineers more productive, like the demand actually goes up because the cost of engineers goes down because you can build software more cheaply." — Erik Bernhardsson
