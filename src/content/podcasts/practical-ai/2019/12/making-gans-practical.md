---
title: Making GANs practical
description: >-
  GANs lead on image generation, but training difficulty and unclear business
  fit mean they are deployed mostly by specialists or as supporting components
  in larger ML pipelines.
pubDate: '2019-12-02'
show: practical-ai
episode: 67
url: 'https://share.transistor.fm/s/4e919eac'
durationMin: 59
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Jakub Langr
  - Vladimir Bok
tags:
  - gans
  - generative-models
  - deep-learning
  - deepfakes
  - computer-vision
draft: false
---
## Thesis

Jakub Langr and Vladimir Bok, authors of "GANs in Action", describe generative adversarial networks as the first general-purpose learned generative framework. They argue GANs lead on image and video generation, but unstable training and a lack of intuition about where they pay off keep them inside specialist startups and teams.

## Key points

- **How GANs work.** Langr describes a generator, like an amateur painter, competing against a discriminator, like an art critic, with labels implied by real versus generated data. Bok says training is better seen as a game than an optimisation, placing GANs between supervised and unsupervised learning.
- **Origins and uses.** Bok recounts Ian Goodfellow inventing the idea in 2014 after a pub discussion. He links GANs to consumer image editing such as FaceApp ageing and Snapchat's baby filter, while Langr lists tabular data, audio, NLP, graphs and a dentistry crown-design experiment.
- **Training is the hard part.** Langr says hundreds if not thousands of papers address training dynamics, with five to ten new proposals at every major conference. He advises starting from a proven architecture and paying close attention to the dataset.
- **Variants.** Langr explains CycleGAN as mapping between two domains (satellite images to maps, day to night) and StyleGAN as injecting latent information at each resolution for finer control. Bok explains conditional GANs, which use labels or text descriptions to steer output.
- **Open problems.** Langr expects growth in audio, citing DeepMind's GAN-TTS, and in GANs as parts of larger pipelines for domain adaptation, tabular data generation or anonymisation. Bok highlights learned representations that support image arithmetic, such as adding sunglasses to a face.
- **Deepfakes and ethics.** Langr says many deepfake methods are not GAN-based, cites Synthesia's use of GANs for film dubbing, and notes Photoshop has long enabled manipulation. Whitenack and Bok point to augmenting scarce medical imaging data.

## Quotes

> "GANs are indisputably the state of art for those type of tasks." — Vladimir Bok

> "the original deepfake algorithm and quite a few of the more successful are not actually GAN-based." — Jakub Langr
