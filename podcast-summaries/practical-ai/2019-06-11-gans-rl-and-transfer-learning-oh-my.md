---
title: "GANs, RL, and transfer learning oh my!"
date: 2019-06-11
show: practical-ai
episode: 47
url: "https://share.transistor.fm/s/2e2248f6"
duration_min: 52
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "Reinforcement learning, GANs and transfer learning are not model types but training approaches that wrap ordinary neural networks such as CNNs inside a larger loop or workflow."
tags: ["reinforcement-learning", "gans", "transfer-learning", "deep-learning-basics", "neural-networks"]
source_transcript: "practical-ai/episodes/2019/06/2019-06-11-gans-rl-and-transfer-learning-oh-my.md"
draft: false
---

## Thesis

Daniel Whitenack, prompted by questions from his corporate trainings, and Chris Benson explain three terms that newcomers often mistake for model architectures. Their point is that reinforcement learning, generative adversarial networks and transfer learning are methodologies: scaffolding in which standard networks such as CNNs or RNNs are plugged together like Lego bricks, as Benson puts it.

## Key points

- **Reinforcement learning loop.** Benson, drawing on robotics work at a previous employer, describes an agent acting on an environment, changing its state and receiving rewards that shape its policy. Whitenack adds that a neural network can sit inside the agent, for example a CNN that takes camera images and outputs "move left" or "move right" instead of a class label.
- **RL in the news.** Whitenack points to DeepMind's human-level play in Quake III Capture the Flag, Practical AI episodes 14 and 40, and the official PyTorch reinforcement learning tutorial.
- **How GANs work.** Benson traces GANs to Ian Goodfellow's 2014 paper: a generator creates fake samples and a discriminator classifies real versus fake, each improving the other, like a counterfeiter and a policeman. Whitenack notes each half is itself an ordinary network and mentions DCGAN and a TensorFlow tutorial.
- **GAN uses and risks.** Benson cites the GAN portrait Christie's sold for $432,000 and Yann LeCun calling GANs the most interesting idea in machine learning in ten years. Whitenack uses thispersondoesnotexist.com to raise concerns about fake content and invented influencer personas.
- **Transfer learning.** Benson explains how early layers learn lines and corners that can be reused; Whitenack compares it to reusing code and gives an English-to-Hindi model adapted to Urdu. Both stress it saves data, GPU time and cost, citing Machine Box, Google AutoML, BERT, GPT-2 and a Hugging Face conversational AI tutorial.

## Quotes

> "I think transfer learning is something that pretty much all AI practitioners should be familiar with and utilize heavily." — Daniel Whitenack

> "It's kind of the secret weapon of kind of getting yourself going." — Chris Benson
