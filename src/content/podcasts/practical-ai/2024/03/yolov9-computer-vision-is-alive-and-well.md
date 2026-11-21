---
title: 'YOLOv9: Computer vision is alive and well'
description: >-
  Efficiency-focused architecture work like YOLOv9, 1-bit LLMs and Qualcomm's AI
  Hub is pushing models to the edge, but real deployments will mix local and
  cloud inference.
pubDate: '2024-03-06'
show: practical-ai
episode: 259
url: 'https://share.transistor.fm/s/b15dacfe'
durationMin: 43
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - computer-vision
  - object-detection
  - model-efficiency
  - edge-ai
  - mlops
draft: false
---
## Thesis

Daniel Whitenack and Chris Benson argue that while attention is on generative AI, computer vision researchers keep making real architecture advances, with YOLOv9 as the latest example. Whitenack links this to a wider push for parameter- and compute-efficient models, including 1-bit LLMs, and concludes that AI will run both locally and in the cloud as just another layer of the software stack.

## Key points

- **Why YOLO mattered.** Whitenack explains that YOLO detects bounding boxes and classes in a single pass, unlike multi-stage approaches such as Fast R-CNN. Benson recalls using YOLOv2 on projects while leading AI at Honeywell.
- **Programmable gradient information.** YOLOv9, published around 21 February 2024 and built on the Ultralytics YOLOv5 code base under GPL 3, targets the information bottleneck in lightweight networks. Whitenack describes an auxiliary reversible branch that preserves gradient information during training and is removed for inference.
- **GELAN and the efficiency numbers.** The Generalized Efficient Layer Aggregation Network draws on CSPNet and earlier YOLO versions. Whitenack cites 42% fewer parameters and 21% less compute than YOLOv7 at comparable accuracy, with OpenVINO-quantized versions running in real time on CPUs.
- **1.58-bit LLMs and on-device models.** Whitenack covers Microsoft's BitNet paper, where ternary weights (-1, 0, 1) give "1.58 bits", and Qualcomm's AI Hub of models optimized for Snapdragon devices. He sees uses in disaster relief with poor connectivity and in latency-sensitive settings.
- **Choosing a deployment path.** Whitenack advises starting with off-the-shelf models in Colab or locally via Ollama, LM Studio or llama.cpp, then picking edge or cloud by use case. Processing 1.5 million documents, he notes, does not belong on a Mac M2.
- **MLOps versus DevOps.** For API-based models, Whitenack sees mostly classic DevOps work, but warns that product layers around closed models, as in the recent Gemini issues, can change outputs. He recommends the MLOps Community podcast and Intel's free MLOps certification.

## Quotes

> "AI is just a new layer in your kind of software stack." — Daniel Whitenack

> "YOLOv9 operates with 42% fewer parameters. And 21% less computational demand than YOLOv7, yet it achieves comparable accuracy." — Daniel Whitenack
