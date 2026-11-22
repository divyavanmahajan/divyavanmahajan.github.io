---
title: Robot hands solving Rubik's cubes
description: >-
  OpenAI's real achievement was dexterous robotic manipulation learned in
  simulation with automatic domain randomization, not solving the cube itself,
  which explains both the excitement and the backlash.
pubDate: '2019-11-11'
show: practical-ai
episode: 64
url: 'https://share.transistor.fm/s/b689d135'
durationMin: 45
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - reinforcement-learning
  - robotics
  - simulation
  - domain-randomization
  - ai-hype
draft: false
---
## Thesis

Chris Benson and Daniel Whitenack walk through OpenAI's robot hand that manipulates and solves a Rubik's Cube. They argue the hard and valuable part is the learned dexterous control, trained entirely in simulation, and that the criticism the work drew was mostly about how OpenAI's blog post framed the result rather than the research itself.

## Key points

- **Two networks plus a classic solver.** Whitenack and Benson explain that a convolutional neural network estimates the cube's position from three cameras, while a control policy trained with reinforcement learning (with an LSTM to handle time sequences) decides the hand's actions. The actual move sequence comes from the Kociemba algorithm, not a neural network.
- **Why simulation.** Benson, drawing on aircraft work at Lockheed Martin, says starting in simulation is standard in robotics because it is cheaper and safer than building many physical variants. Whitenack notes OpenAI used game technology such as Unity 3D to render the virtual hand and cube.
- **Automatic domain randomization.** The hosts describe how OpenAI made the simulation progressively harder, for example by changing the cube's size each time the network reached a performance level. OpenAI links this to "emergent meta learning"; Benson compares it to a child learning to ride a bike or himself learning to juggle.
- **Robustness to perturbations.** Whitenack highlights tests where the hand kept working while prodded with a stuffed giraffe, pushed with a pen or covered with a blanket.
- **The backlash.** Critics on Twitter pointed out the 17-year-old symbolic solver and the instrumented cube with LEDs and sensors. Benson calls the headline a marketing mistake; Whitenack links the reaction to wider AI hype fatigue and cites Google's quantum supremacy claim, which IBM challenged.
- **Learning resources.** Whitenack recommends episodes 14 and 40, the OpenAI Gym tutorial, and PyTorch and TensorFlow reinforcement learning tutorials.

## Quotes

> "So in my view, OpenAI's mistake here was not in what they actually did. It was in the marketing of the blog post and how they titled it." — Chris Benson

> "apply AI where it makes sense to apply AI." — Chris Benson
