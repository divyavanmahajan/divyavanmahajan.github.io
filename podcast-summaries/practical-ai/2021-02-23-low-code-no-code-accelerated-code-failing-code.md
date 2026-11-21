---
title: "Low code, no code, accelerated code, & failing code"
date: 2021-02-23
show: practical-ai
episode: 123
url: "https://share.transistor.fm/s/22650fd9"
duration_min: 48
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "Chris Benson and Daniel Whitenack discuss why runnable code does not mean a validated model, where low-code tools fit in ML, and how GPU generation can matter more than interconnects."
tags: ["low-code", "data-leakage", "gpu-hardware", "reproducibility", "mlops"]
source_transcript: "practical-ai/episodes/2021/02/2021-02-23-low-code-no-code-accelerated-code-failing-code.md"
draft: false
---

## Thesis

In this hosts-only Fully Connected episode, Daniel Whitenack and Chris Benson argue that the practical bottlenecks in machine learning are often mundane: code that will not run, datasets that leak, and hardware choices made on marketing labels. Benson expects low-code and no-code tools to become a serious part of deep learning as architectures commoditise.

## Key points

- **Cheap data at scale.** Benson mentions a ResNet-based approach that turns standard CT images into virtual monoenergetic counterparts. Whitenack links this to a trend of using lots of low-resolution data, such as drone-based persistent surveillance, and both hosts note the privacy concerns.
- **Running code, failing models.** Whitenack discusses Rajiv Shah's DataRobot article: being able to rerun released code does not validate the model. Shah found the Sarcos robotic-arm dataset's holdout set overlapped the training set by about 4,500 examples.
- **Why released code breaks.** Whitenack blames assumed environments and missing dependency versions rather than malice. His team containerises everything with Docker, using images from NVIDIA NGC or the TensorFlow team; he also points to MLCommons' MLCube.
- **Low code, no code.** Whitenack saw Alteryx used for drag-and-drop data pipelines and found it useful, while questioning how far it goes once custom Python is needed. Benson predicts good commercial and open-source low-code options for deep learning.
- **Specifying a GPU server.** Using Lambda Labs benchmarks, Whitenack found that a consumer RTX 3090 reaches about half the A100's training throughput, and two PCIe-connected 3090s beat two NVLink-connected RTX 8000s. His team chose one server of unlinked newer cards plus a second with linked cards.
- **Learning resources.** Benson recommends Yann LeCun's free NYU deep learning course; Whitenack highlights TensorFlow Everywhere, regional events in several languages, and hopes post-pandemic events stay open to people from Africa, Asia and Latin America.

## Quotes

> "I am predicting that deep learning eventually has many options in the low-code, no-code arena, and that some of them become quite good" — Chris Benson

> "Just because something can provide... Beneficial results doesn't mean that it is beneficial as a whole." — Daniel Whitenack
