---
title: "The Timeline for Realistic 4-D: Devi Parikh from Meta on Research Hurdles for Generative AI in Video and Multimodality"
date: 2023-07-20
show: no-priors
episode: 24
url: "https://www.youtube.com/watch?v=x7n5Fdc3u0I"
youtube: "https://www.youtube.com/watch?v=x7n5Fdc3u0I"
duration_min: 40
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Devi Parikh"]
description: "Meta's Devi Parikh argues that AI video generation is still stuck at animated images, and that progress needs better representations, hierarchical architectures, data recipes and richer controls."
tags: ["video-generation", "generative-ai", "multimodality", "computer-vision", "creativity"]
source_transcript: "no-priors/episodes/2023/07/2023-07-20-the-timeline-for-realistic-4-d-devi-parikh-from-meta-on-research-hurdl.md"
draft: false
---

## Thesis

Devi Parikh, a Research Director in Generative AI at Meta and an associate professor at Georgia Tech, argues that generative video is harder than images or language. She says it may advance more slowly than the usual scaling curves would suggest. In her view, the goal is broader creative expression. Getting there requires models that are longer, more coherent and much more controllable than today's text-to-video systems.

## Key points

- **How Make-A-Video works.** Parikh explains that Meta's model starts from a pretrained image generator. It learns appearance and language from image-text pairs and learns motion separately from video clips, so paired video-text data is not needed. Image-level diversity, such as dragons and unicorns, carries over to video.
- **Still animated images.** She says results remain four-second clips of a single scene, with no objects appearing or reappearing and no scene transitions. In the nine months or so since Make-A-Video, she has not seen a breakthrough comparable to the progress in images.
- **Bottlenecks.** Parikh lists four: slow and expensive iteration on video infrastructure, representations that do not exploit redundancy between frames, hierarchical architectures for very high-dimensional signals, and immature data recipes or curricula. Elad Gil compares this to the infrastructure costs that pushed YouTube into an early sale to Google.
- **Control.** She wants multimodal prompts (sketches, images, audio clips, video) and iterative editing in place of retrying prompts. She expects control to lag behind core capability, and says editing existing video, as Runway does, is arriving sooner.
- **Audio and robotics.** She estimates that text-to-audio works roughly one time in five for clips of a few to tens of seconds, and calls audio under-invested. For robots, she says video understanding matters more than generation, because their actions shape what they see next.
- **Advice.** She recommends putting tasks on a calendar rather than a to-do list, and urges young researchers not to self-select out of applications.

## Quotes

> "I think control sort of tends to lag behind the core capability" — Devi Parikh

> "it's on the World to say no to you if you are not a good fit" — Devi Parikh
