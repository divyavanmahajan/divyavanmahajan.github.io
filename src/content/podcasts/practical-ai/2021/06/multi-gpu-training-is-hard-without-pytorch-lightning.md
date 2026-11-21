---
title: Multi-GPU training is hard (without PyTorch Lightning)
description: >-
  William Falcon argues that separating model code from hardware and
  engineering, via PyTorch Lightning and the Grid AI platform, lets
  practitioners iterate faster and scale training without rewriting code.
pubDate: '2021-06-15'
show: practical-ai
episode: 138
url: 'https://share.transistor.fm/s/30369d53'
durationMin: 46
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - William Falcon
tags:
  - pytorch
  - distributed-training
  - gpus
  - mlops
  - cloud-computing
draft: false
---
## Thesis

William Falcon, creator of PyTorch Lightning and CEO of Grid AI, tells Daniel Whitenack and Chris Benson that results in AI depend mostly on how fast you can try ideas. His answer is to decouple the science (the model) from the engineering (hardware, training loops, precision tricks) so code becomes shareable and scales without changes, then to remove the remaining cloud work with Grid AI.

## Key points

- **Origin story.** Falcon kept copying training code between projects, from computational neuroscience in Theano to NLP startup work and his PhD. Factoring out a trainer became Lightning, which he open-sourced and then stress-tested on 500-GPU jobs during a FAIR internship.
- **Models are systems.** He says the LightningModule captures collections of interacting models such as autoencoders, GANs and transformers, while the trainer handles backward passes, half precision and stochastic weight averaging. Close to 500 contributors add new techniques.
- **Refactor, don't rewrite.** Converting PyTorch code means deleting boilerplate loops and keeping three methods: init, training step and configure optimizers. Falcon advises overfitting a batch with both versions using the same seed to check results match before scaling up.
- **Scale with plugins.** With Microsoft's DeepSpeed as a trainer plugin, Falcon reports training a 45-billion-parameter GPT model on eight A100s. He counts about 3,000 open-source projects using Lightning.
- **Grid AI and cost.** Grid lets users paste a GitHub link, choose a GPU count and run, with community, teams and enterprise tiers that can use the customer's own cloud account. Falcon concedes owned hardware is cheaper when running 24/7, but argues bursting and spot instances at 50 to 80% discounts change the maths. Deployment is not yet supported.
- **Long-term aim.** He wants machine learning infrastructure to fade into the background like Wi-Fi so domain experts can train and deploy models themselves.

## Quotes

> "Today's models are actually not models. We need a new name because there's something that doesn't exist." — William Falcon

> "Anything with AI nowadays is honestly a function of how fast you iterate through ideas, right?" — William Falcon
