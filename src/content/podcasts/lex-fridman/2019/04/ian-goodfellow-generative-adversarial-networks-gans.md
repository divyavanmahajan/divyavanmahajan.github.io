---
title: 'Ian Goodfellow: Generative Adversarial Networks (GANs)'
description: >-
  Ian Goodfellow explains how GANs work as a two-player game, why their success
  is still not fully understood, and why he sees adversarial robustness as a
  central security problem for machine learning.
pubDate: '2019-04-18'
show: lex-fridman
url: 'https://lexfridman.com/ian-goodfellow/'
youtube: 'https://www.youtube.com/watch?v=Z6rxFNMGdn0'
durationMin: 69
hosts:
  - Lex Fridman
guests:
  - Ian Goodfellow
tags:
  - gans
  - deep-learning
  - generative-models
  - adversarial-examples
  - ml-security
draft: false
---
## Thesis

Ian Goodfellow, author of the "Deep Learning" textbook and inventor of GANs, tells Lex Fridman that deep learning is best understood as learning multi-step programs. He argues that its main limits are data hunger and generalization, and that the adversarial ideas behind GANs reach well beyond image generation into privacy, fairness and security, where he considers robustness to adversaries one of the most important open problems.

## Key points

- **What deep learning is.** Goodfellow defines it as machine learning that learns parameters of more than one consecutive step. He separates the model from the optimizer: a deep net trained with a genetic algorithm still counts. He expects backpropagation to stay, but probably not to be everything needed for human-level AI.
- **The GAN game.** A generator produces images and a discriminator guesses real or fake; at the Nash equilibrium the generator captures the data distribution. Friends at the bar doubted it, recalling how deep Boltzmann machines failed to keep two processes in sync. He admits he still cannot name one factor that explains why GANs worked.
- **From MNIST to BigGAN.** He traces progress from the blurry 2014 samples through LAPGAN (Emily Denton, Soumith Chintala) and DCGAN to semi-supervised GANs. Tim Salimans reached under 1% MNIST error with 100 labels instead of about 60,000, and Google Brain Zurich matched BigGAN with roughly 10% of ImageNet labels.
- **Beyond images.** Goodfellow describes domain-adversarial learning, differentially private synthetic patient data from Casey Greene's lab, and adversarial training that stops models from inferring sensitive variables such as gender.
- **Deepfakes.** He worries more about the next few years than 20 years out, expecting authentication such as cryptographically signing phones (citing the startup Truepic) to matter more than pixel-level fake detectors.
- **What's next.** He sees fairness and interpretability as open to quick, low-resource advances through good definitions, as differential privacy was, and suggests models that change on every prediction to resist attackers.

## Quotes

> "as human beings we don't learn to play pong by failing at pong two million times" — Ian Goodfellow

> "if you always output the same answer for the same input then people can just run inputs through until they find a mistake that benefits them" — Ian Goodfellow
