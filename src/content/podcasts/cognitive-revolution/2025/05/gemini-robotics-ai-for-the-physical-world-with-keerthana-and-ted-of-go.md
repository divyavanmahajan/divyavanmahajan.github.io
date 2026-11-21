---
title: >-
  Gemini Robotics – AI for the Physical World, with Keerthana and Ted of Google
  DeepMind
description: >-
  Google DeepMind researchers argue robotics is an AGI problem best solved on
  top of frontier models, placing robot AI somewhere between GPT-3 and GPT-3.5.
pubDate: '2025-05-17'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/gemini-robotics-ai-for-the-physical-world-with-keerthana-and-ted-of-google-deepmind/
youtube: 'https://www.youtube.com/watch?v=8burcVPvRjU'
hosts:
  - Nathan Labenz
guests:
  - Ted Xiao
  - Keerthana Gopalakrishnan
tags:
  - robotics
  - gemini
  - foundation-models
  - imitation-learning
  - humanoids
  - ai-safety
draft: false
---
## Thesis

Ted Xiao and Keerthana Gopalakrishnan, co-authors of the Gemini Robotics technical report, argue that general robot manipulation is an AGI-hard problem. In their view it needs the world knowledge of a frontier model, extended with embodied reasoning and actions, rather than a separate robotics stack. Robotics has entered a scaling era, but deployment, data and safety still lag well behind language models.

## Key points

- **Where robotics stands.** Xiao places robot models between GPT-3 and GPT-3.5: they work out of the box in many settings but still need fine-tuning for reliability. Gopalakrishnan doubts there will be a "ChatGPT moment" because few people own robots.
- **Two models, one family.** Gemini Robotics-ER is a cloud-only vision-language model tuned for spatial reasoning (pointing, grasp poses, bounding boxes), measured on the new ERQA benchmark. The Gemini Robotics VLA is distilled from it and runs split between a cloud backbone and an on-robot decoder, replanning about every 250 milliseconds while controlling at 50 Hz.
- **Dexterity without catastrophe.** The guests cite origami folding, food tongs and zip-lock bags on ALOHA arms. They describe failures as low success rates and retries, not flailing, unlike the RL policies at Everyday Robots that regularly knocked bins over.
- **Safety in layers.** On the ASIMOV common-sense safety benchmark the model scores around 80%. Gopalakrishnan says semantic safety is only one layer, alongside operational safety, human supervision and physical e-stops.
- **Data is the bottleneck.** Xiao notes datasets such as Open X-Embodiment already hold tens of billions of tokens, against tens of trillions for frontier LLMs. Real-world teleoperation data is still "gold"; simulation and video models are promising but not yet good enough.
- **Humanoids and fine-tuning.** Gopalakrishnan says imitation learning works even on high-degree-of-freedom humanoids for narrow tasks. Xiao is less sure how this scales to multitask whole-body control, and doubts the first robots deployed at scale will be humanoids.

## Quotes

> "A billion tokens of just generic pick and place on a conveyor belt is not going to solve AGI." — Keerthana Gopalakrishnan

> "But to solve the general problem, physical AGI, I think that needs a foundation model." — Ted Xiao
