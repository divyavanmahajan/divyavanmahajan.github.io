---
title: Mother of Robots Keerthana Gopalakrishnan of Google Robotics
description: >-
  Google robotics researcher Keerthana Gopalakrishnan argues that transformers
  for control, language as interface and foundation models for reasoning give
  robotics a recipe that scales with data.
pubDate: '2023-03-30'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/mother-of-robots-keerthana-gopalakrishnan-of-google-robotics/
youtube: 'https://www.youtube.com/watch?v=5tlQhgz-xuY'
hosts:
  - Nathan Labenz
guests:
  - Keerthana Gopalakrishnan
tags:
  - robotics
  - transformers
  - multimodal-models
  - robot-safety
  - google
draft: false
---
## Thesis

Keerthana Gopalakrishnan, an author on SayCan and RT-1, tells Nathan Labenz that robotics sits somewhere between GPT-2 and GPT-3. She argues that Google has found a scalable recipe of transformers for control, language for interface and foundation models for reasoning, and that the main bottlenecks are now action data and hardware rather than algorithms.

## Key points

- **The RT-1 dataset.** RT-1 was trained by supervised learning on about 130,000 teleoperated episodes covering 700 tasks with 17 objects, collected using Oculus controllers in mock kitchens called "robot classrooms". She says action data scales only linearly, so it has to be supplemented by autonomous collection and transfer from human video.
- **Planner plus executor.** A language model (SayCan, now PaLM-E) breaks "bring me a coffee" into steps, and RT-1 carries out each step. RT-1 turns actions into tokens: 11 variables covering arm, base and episode termination. Inference takes 100 ms, the full stack runs at about 3 Hz, and thinking and acting happen concurrently.
- **Layered safety.** A language model judges whether a task should be done, RT-1 is trained on cleaned data, and a C++ control layer blocks collisions. Her example: a robot proposed taking a phone out of her hand, which shows that it needs better relational scene understanding.
- **Deploy with humans in the loop.** Following self-driving cars, she suggests rolling robots out with human intervention for the long tail and reducing the intervention rate over time.
- **Form factor.** Arms are the most costly part, so cost limits the design today, but she expects humanoids to be the eventual form because the world and video data are built around human bodies.
- **Hopes and fears.** She hopes for an AI scientist this decade, and is worried about inequality from centralised model training, so she supports open-source efforts such as Stability AI and Hugging Face.

## Quotes

> "And I think robotics is basically our quest to understand ourselves and build more of ourselves." — Keerthana Gopalakrishnan

> "But you don't have to solve the long tail. You can solve as much as you can and then you can make humans solve the rest." — Keerthana Gopalakrishnan
