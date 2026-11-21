---
title: Eliminate AI failures
description: >-
  Yaron Singer argues that model safety should be decoupled from model building,
  with stress testing and an AI firewall that catches bad input before it
  reaches the model.
pubDate: '2022-01-11'
show: practical-ai
episode: 163
url: 'https://share.transistor.fm/s/259c38d4'
durationMin: 42
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Yaron Singer
tags:
  - ai-risk
  - model-robustness
  - data-drift
  - adversarial-ml
  - ai-testing
draft: false
---
## Thesis

Yaron Singer, CEO of Robust Intelligence and a Harvard professor, argues that trying to make models robust by retraining them costs too much accuracy. Protection should be a separate layer, like antivirus and firewalls in software. Chris Benson compares this to separation of concerns.

## Key points

- **Two kinds of failure.** Singer cites Microsoft's chatbot, which users manipulated into posting racist output within about 36 hours, and Zillow's pricing models, which failed after the pandemic changed conditions (distributional drift). He treats both as risk regardless of cause, though each needs different algorithms.
- **Risk differs by team.** In one company a fraud team faces adversarial input while a forecasting team worries about changing conditions such as weather, so protection has to cover both.
- **Automation is coming.** Singer predicts most retraining will run without a human in the loop within a few years. He believes technology should support human judgment, but says a person at every critical decision point does not scale.
- **The theory is discouraging.** His Harvard work shows that good decisions can need data exponential in input dimension, and that tiny errors can cause arbitrarily bad ones. He says retraining an image classifier for adversarial robustness can cut accuracy from 98% to 37%.
- **AI firewall and continuous testing.** Robust Intelligence stress-tests models (drift, unseen categoricals, bias across categories) and trains a firewall, one line of code on the model server, that can flag inputs such as a birth year in an age field. A lighter option reads prediction logs in CI/CD, often on-premise.
- **Predictions.** Singer expects mandatory third-party stress testing for AI that affects people, and AI firewalls to become standard.

## Quotes

> "an AI firewall is a piece of software that wraps around an AI model to protect it from making mistakes." — Yaron Singer

> "You know, we can just all imagine the nightmare if every time that we wrote software, we'd also have to write the antivirus and the firewall, right, for that software." — Yaron Singer
