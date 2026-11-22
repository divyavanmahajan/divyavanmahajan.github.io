---
title: Celebrating episode 50 and the neural net!
description: >-
  A neural network is a parameterised function built from simple neurons whose
  weights are fitted by trial and error on examples, which is why scale demands
  data and GPUs.
pubDate: '2019-07-03'
show: practical-ai
episode: 50
url: 'https://share.transistor.fm/s/6441430e'
durationMin: 51
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - neural-networks
  - deep-learning
  - supervised-learning
  - ai-history
  - learning-resources
draft: false
---
## Thesis

For their 50th episode, Daniel Whitenack and Chris Benson go back to basics and explain the neural network from scratch. Their argument is that "learning" is not magic: a model is a definition plus parameters, and training is an iterative, error-correcting process that fits those parameters to labelled examples. The size of modern networks explains why they need so much data and specialised hardware.

## Key points

- **History.** Whitenack traces neural nets to Warren McCulloch and Walter Pitts in the mid-1940s; Benson adds Frank Rosenblatt's perceptron in 1958. Whitenack describes backpropagation in the 1980s, an AI winter, and a revival from the mid-2000s once compute and data caught up, recognised by the Turing award to LeCun, Hinton and Bengio. Benson credits Geoffrey Hinton with leading the field out of that winter.
- **Supervised learning.** Whitenack uses a model predicting monthly sales from website users: in ordinary code a human sets the parameters, in machine learning they are set by repeatedly comparing predictions with known outputs. Benson contrasts explicit if-then programming with a model that learns implicitly.
- **Inside a neuron.** Whitenack explains that each neuron multiplies inputs by weights, adds a bias and applies a nonlinear activation such as sigmoid, ReLU or tanh. Benson describes fully connected feed-forward layers, backpropagation, and notes the show's "fully connected" episodes are named after them.
- **When training stops.** Benson argues the acceptable error depends on the use case; life-and-death applications need far more training.
- **Scale and hardware.** Whitenack cites transformer language models with hundreds of millions of parameters. Benson explains that matrix multiplication at that scale is why GPUs and TPUs replaced CPUs. He also cites the universal approximation theorem.
- **Building intuition.** Both built a toy network in Go; Whitenack did his on the iris dataset and recommends Joel Grus's Data Science from Scratch, Google's machine learning crash course and fast.ai.

## Quotes

> "you can't have like 300 million parameters and then like 2000 training examples and call it good." — Daniel Whitenack

> "that's how you know when your training is over, is that you've achieved an acceptable level of error for your use case." — Chris Benson
