---
title: "Training the AIs' Eyes: How Roboflow is Making the Real World Programmable, with CEO Joseph Nelson"
date: 2026-04-04
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/training-the-ais-eyes-how-roboflow-is-making-the-real-world-programmable-with-ceo-joseph-nelson/"
youtube: "https://www.youtube.com/watch?v=9Nvvg0j9_8Q"
duration_min: 116
hosts: ["Nathan Labenz"]
guests: ["Joseph Nelson"]
description: "Roboflow's Joseph Nelson argues computer vision is nearing its ChatGPT moment, but real-world use still depends on small, fast, task-specific models distilled from frontier systems."
tags: ["computer-vision", "edge-ai", "open-source-ai", "model-distillation", "ai-regulation"]
source_transcript: "cognitive-revolution/episodes/2026/04/2026-04-04-training-the-ais-eyes-how-roboflow-is-making-the-real-world-programmab.md"
draft: false
---

## Thesis

Joseph Nelson, CEO of Roboflow, argues that vision lags language because the physical world has a much fatter tail of unfamiliar scenes than text does. Many vision tasks also need answers in milliseconds on edge hardware. His recipe is to use frontier models to see what is possible, then distil them into small models that customers own. On policy, he wants regulators to target harmful outcomes rather than the tools used.

## Key points

- **Where the frontier fails.** Nelson says multimodal models still struggle with grounding, precise measurement, spatial reasoning and reproducibility. On Roboflow's RF100-VL benchmark of real user tasks, the best model at publication, Gemini 2, scored 12.5% zero-shot, and few-shot examples added at most about 10%. Roboflow tracks failures at visioncheckup.com.
- **Distil to the edge.** For Wimbledon instant replay, which needs sub-10-millisecond responses, a customer used SAM3 to auto-label past footage and then trained a small RF-DETR model to run at the court. He estimates about an 18-month lag between a cloud capability and running it on edge devices. A fine-tuned RF-DETR 2XL beats fine-tuned SAM3 on accuracy and is 40 times faster.
- **Neural architecture search.** RF-DETR builds on Meta's DINOv2 backbone and uses weight-sharing NAS to train thousands of subnetwork configurations in one run, producing a speed-accuracy frontier. Customers can now run NAS on their own data to get a one-of-a-kind model. It is Apache 2.0 licensed, unlike commercial YOLO versions, and Roboflow has raised about $63 million in total.
- **Who builds open vision.** Nelson says Chinese labs such as Alibaba's Qwen, GLM and DeepSeek have usually led in vision, with Meta (SAM, DINO) and NVIDIA the main US contributors. He sees world models, vision-language-action models for robotics, and wearables (8 million smart-glasses pairs sold last year against 60 million AirPods) as the next growth curves.
- **Regulate outcomes.** Labenz floats a right to be judged by the narrowest model suited to a task. Nelson prefers punishing misuse, warning that tool-level health-AI rules could stop a UNC lab from automating neutrophil counting.

## Quotes

> "in visual AI in particular, the US has almost never led" — Joseph Nelson

> "regulating at the tool level is rife for accidental slowdown and deceleration of what I view to be the modern Industrial Revolution" — Joseph Nelson
