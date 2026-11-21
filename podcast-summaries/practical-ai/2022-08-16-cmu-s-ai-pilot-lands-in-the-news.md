---
title: "CMU's AI pilot lands in the news 🗞"
date: 2022-08-16
show: practical-ai
episode: 189
url: "https://share.transistor.fm/s/661a4a9f"
duration_min: 41
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "Model delivery should be treated like software delivery, with packaging and CI tests, while CMU's AI pilot shows autonomy reaching crowded, visually navigated airspace."
tags: ["mlops", "model-deployment", "ci-cd", "autonomous-aircraft", "ai-security"]
source_transcript: "practical-ai/episodes/2022/08/2022-08-16-cmu-s-ai-pilot-lands-in-the-news.md"
draft: false
---

## Thesis

Daniel Whitenack and Chris Benson cover two themes. First, models should be packaged, versioned and tested in CI like any other software artefact. Second, autonomy is moving into busy airspace. Benson, a pilot who works in aerospace, argues that machines already fly better than humans, but that scale and cybersecurity remain open problems.

## Key points

- **Truss from Baseten.** Whitenack describes Baseten's open-source Truss. It packages a model and frozen dependencies into a Docker image that can run locally, on ECS, GCP Cloud Run or Baseten, and it includes secret and API key management. Benson, who is learning Rust, says tools like this help make AI accessible to more people.
- **Python still dominates.** Whitenack sees model development staying Python-centred, with other languages such as Go mainly used for inference.
- **Testing models in CI.** Whitenack's team uses an MLOps platform for experiments that outputs a hashed model bundle linked to a training commit. Application repos use GitHub Actions to run minimum functionality tests, such as fixed sentiment examples, so a bad model fails the build. Benson calls this the exception rather than the rule, and warns that silent model updates can cost weeks of debugging.
- **CMU's AI pilot.** Benson describes a Carnegie Mellon model, tested in simulation, that avoids collisions, predicts other aircraft's intent and communicates over the radio using NLP, with a six-camera vision system. It works under visual flight rules near airports, unlike traditional autopilots.
- **Scale and hacking.** Benson says the model solves single-aircraft decisions, not coordination among thousands of drones and air taxis, which is his own specialism. Whitenack cites Samy's SkyJack, a drone that hijacked nearby drones. Benson points to the DARPA AlphaDogfight trials, where an AI beat an Air Force weapons school instructor five times.
- **Resources.** Whitenack recommends NVIDIA's AI demos, including Vid2Vid Cameo, a survey on 3D vision with transformers, and a paid NLP with Transformers course taught by Hugging Face staff.

## Quotes

> "I'm that one person who would much rather for this technology to be flying the airliner I'm in than the human because I know what the difference is in capability." — Chris Benson

> "if your model is being used in software. And you can update your model without that software being retested in some way. There's like a huge risk and problem, right?" — Daniel Whitenack
