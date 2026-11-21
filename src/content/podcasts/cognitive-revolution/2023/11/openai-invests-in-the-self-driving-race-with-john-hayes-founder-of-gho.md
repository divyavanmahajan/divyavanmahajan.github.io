---
title: >-
  OpenAI Invests in the Self-Driving Race with John Hayes, Founder of Ghost
  Autonomy
description: >-
  Ghost Autonomy founder John Hayes argues a multimodal LLM making
  maneuver-level decisions over a fast in-car safety system can replace the
  endless edge-case engineering of classic self-driving stacks.
pubDate: '2023-11-09'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/openai-invests-in-the-self-driving-race-with-john-hayes-founder-of-ghost-autonomy/
youtube: 'https://www.youtube.com/watch?v=2I3snMT_Qrg'
hosts:
  - Nathan Labenz
guests:
  - John Hayes
tags:
  - autonomous-vehicles
  - multimodal-models
  - gpt-4v
  - robotics
  - regulation
draft: false
---
## Thesis

John Hayes, founder and CEO of Ghost Autonomy, tells Nathan Labenz that the classic autonomy stack, inherited from the DARPA Urban Challenge, has spent a decade grinding through edge cases that are really missing common sense. His answer, backed by an investment from OpenAI's startup fund, is to split driving into a fast in-car system for safety and a slow multimodal LLM that tells the car what maneuver to make.

## Key points

- **Two philosophies.** Hayes contrasts companies that prove safety from components, such as Aurora with its limited truck fleet, with Tesla, which measures outcomes across about a million cars. He describes Waymo and Cruise as classic map, perception, prediction and planning stacks, and Wayve as an end-to-end bet.
- **Ghost's base stack.** Ghost runs on consumer cameras and chips, with stereo cameras for distance instead of LiDAR. Hayes says it runs at 30 hertz, about 10 times faster than most stacks, so a wrong decision costs about 30 milliseconds, and the company has about 60 engineers against Waymo's thousands.
- **Fine-tuning result.** Asking open models such as LLaVA whether the car is on a freeway gave about 60% accuracy; Hayes says a few hundred fine-tuning examples raised that to about 98%.
- **Car as API.** GPT-4V receives navigation goals, map facts and annotated images and returns maneuvers. Hayes concedes calls can take 10 to 30 seconds, but expects models to become 100 to 1000 times faster and cheaper over a five-year auto planning cycle. He also wants drivers to chat with the car and have it explain itself.
- **Levels and robotaxis.** He calls level 3 products from Mercedes, BMW and Acura traffic-jam features under 40 mph, and suggests complacency in the robotaxi "uncanny valley" may partly explain Cruise's incident, which he calls a government relations failure.
- **Society and China.** Hayes says consumers turn positive once they ride, and that China adds 20 million new drivers a year. In his view US carmakers are consumed by electric vehicles rather than autonomy.

## Quotes

> "hallucination is actually the best part of these models because the hallucination is where all the common sense applies." — John Hayes

> "Whenever you go to any automotive conference, it is 1% AV and 99% EV." — John Hayes
