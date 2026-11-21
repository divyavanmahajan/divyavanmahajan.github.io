---
title: "Erik Bernhardsson on Creating Tools That Make AI Feel Effortless"
date: 2025-01-09
show: no-priors
episode: 96
url: "https://www.youtube.com/watch?v=rOoarRoowi8"
youtube: "https://www.youtube.com/watch?v=rOoarRoowi8"
duration_min: 24
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Erik Bernhardsson"]
description: "Modal founder Erik Bernhardsson argues that AI infrastructure should feel like local development: a multi-tenant pool that hands out GPUs on demand, billed by usage instead of long-term contracts."
tags: ["ai-infrastructure", "serverless", "gpus", "developer-productivity", "vector-databases"]
source_transcript: "no-priors/episodes/2025/01/2025-01-09-erik-bernhardsson-on-creating-tools-that-make-ai-feel-effortless.md"
draft: false
---

## Thesis

Erik Bernhardsson, founder and CEO of Modal, tells Elad Gil that cloud development for data, AI and ML is still painful, and that GPUs should be as easy to get on demand as CPUs. He says a single, cloud-native, multi-tenant compute pool handles bursty inference better than reserved capacity. He also argues that AI is one more boost to developer productivity, so it will raise demand for software engineers rather than replace them.

## Key points

- **Origins.** Bernhardsson spent seven years at Spotify, starting in 2008, where he built the music recommender, the Luigi workflow scheduler and a vector database. After serving as CTO at Better, he began hacking on what became Modal during the pandemic.
- **Rebuilding the stack.** To make the cloud feel like local development, Modal dropped Docker and Kubernetes. It spent roughly its first two years building its own file system, scheduler and container runtime. Users write Python functions, and Modal turns them into serverless cloud functions.
- **Killer app.** Stable Diffusion drove Modal's early traction. Today its workloads include image, audio, video and music generation; AI music company Suno runs its inference on Modal at large scale.
- **Flexible GPUs.** Bernhardsson argues that long-term GPU contracts are the wrong model for startups, especially for unpredictable inference. Modal charges only while containers are running and can typically deliver 100 GPUs within seconds. He wants to add short, experimental training runs next.
- **Enterprise objections.** In response to Gil's point about enterprises staying on their hyperscalers, Bernhardsson compares today's resistance to early doubts about the cloud and about Snowflake. He also notes that security is moving to the application layer and that zero-egress storage such as R2 cuts bandwidth costs.
- **Models, data and coding.** Bernhardsson thinks companies whose product depends on model quality need their own models as a moat, particularly outside the LLM space. He imagines AI-native storage that embeds and searches text, images and video directly. He also expects demand for engineers to keep rising.

## Quotes

> "we can't really use Docker and kubernetes so we're going to have to throw that out" — Erik Bernhardsson

> "it turns out like there's so much latent demand for software that actually like the number of software goes up" — Erik Bernhardsson
