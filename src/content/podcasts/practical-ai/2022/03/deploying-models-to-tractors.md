---
title: "Deploying models (to tractors \U0001F69C)"
description: >-
  Greeneye and ClearML explain how MLOps automation and Kubernetes at the edge
  took precision-spraying model deployments from about ten a year to thousands,
  all running on tractors.
pubDate: '2022-03-01'
show: practical-ai
episode: 169
url: 'https://share.transistor.fm/s/dc874154'
durationMin: 51
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Alon Klein Orback
  - Moses Guttmann
tags:
  - mlops
  - edge-computing
  - kubernetes
  - agriculture
  - computer-vision
draft: false
---
## Thesis

Alon Klein Orback, CTO and co-founder of agricultural AI company Greeneye, and Moses Guttmann, CEO and co-founder of ClearML (formerly Allegro AI), argue that MLOps pays off wherever a model has to be refined over and over. Greeneye's precision sprayers show that end-to-end automation and running Kubernetes on the tractor itself can turn a slow, manual deployment process into a one-click pipeline.

## Key points

- **The problem.** Klein Orback describes self-propelled sprayers with booms so tall you can walk underneath without bending. Instead of spraying a whole field, cameras looking slightly ahead detect weeds in real time, with no cloud connection, so only about 10% of the chemicals are used.
- **From 10 to thousands of models.** Before automation, Greeneye converted and froze models by hand (ONNX to TensorRT) and shipped about 10 a year to tractors. Now one click handles conversion, metric checks and delivery, and thousands of models reach the tractors.
- **Kubernetes on the tractor.** Greeneye runs K3s on devices on the tractor, after hitting limits with its own deployment system and Azure IoT. Klein Orback notes that ARM 64-bit support in libraries was weak. New researchers work only in remote pods through Kubeflow notebooks or PyCharm, never installing dependencies locally.
- **Why retrain so often.** Crops, geography, weather, sunlight and tillage practices differ between Israel and the US Midwest. Sprayers travel about six metres per second, so on-device speed matters as much as accuracy. Greeneye looks for disagreement between models to find data worth retraining on.
- **MLOps is not microservices.** Guttmann says Kubernetes restarts failed services by default, whereas a failed training job should simply be dropped; ClearML uses Kubernetes mainly as a resource scheduler. He adds that Greeneye's requests drove ClearML's deeper Kubernetes integration.
- **What is next.** Guttmann previews a redesigned ClearML Serving with no-code pre-processing and autoscaling, to be released before a GTC talk. Klein Orback wants Greeneye's field data to support farmer decisions beyond spraying.

## Quotes

> "When we got automation, we have thousands of models to the tractors and rerun." — Alon Klein Orback

> "If it failed, then it'll continue failing. Like, just drop it. That's the default. That's the total opposite of microservices." — Moses Guttmann
