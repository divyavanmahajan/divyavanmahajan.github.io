---
title: Evaluating models without test data
description: >-
  Charles Martin argues that the weight matrices of a trained neural network
  reveal, layer by layer, whether it has converged, so models can be diagnosed
  without training or test data.
pubDate: '2022-09-20'
show: practical-ai
episode: 194
url: 'https://share.transistor.fm/s/0c672de3'
durationMin: 45
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Charles Martin
tags:
  - model-evaluation
  - deep-learning
  - open-source
  - model-training
  - statistical-physics
draft: false
---
## Thesis

Charles Martin, an AI consultant with a background in theoretical physics, argues that deep learning training is mostly brute force and lacks engineering principles. His open-source tool WeightWatcher applies statistical physics methods from the 1990s to a model's weight matrices. It flags layers that are under-trained or broken, with no need for training or test data.

## Key points

- **Why test sets fall short.** Martin started on the problem while training LSTMs to generate text, where no test set exists. He gives other examples: search relevance work for clients such as Walmart, where A/B tests are expensive and presentation bias distorts the data, and quantitative finance, where models trained directly on the market always overfit.
- **Under-trained large models.** He cites a Google DeepMind scaling paper showing that earlier OpenAI conclusions were wrong because the learning rate was not adapted to dataset size. He says BERT is highly under-optimised and that XLNet looks far better in WeightWatcher.
- **The alpha metric.** Alpha measures the fractal, correlated structure a layer has learned. Martin says it should be around 2 for computer vision and between 3 and 4 for transformer NLP models. Values of 6 to 8 on text mean the layer learned little. Rank collapse and "correlation traps" are other warning signs.
- **Using it.** WeightWatcher is pip-installed, runs an SVD on each layer on CPU, and returns a data frame and optional plots. Whitenack tried it on an XLM-RoBERTa question-answering model and found 10 under-trained layers. Martin's suggested fixes include more dropout, lower learning rates, more data, freezing earlier layers, or training longer.
- **An engineering tool, not a regulariser.** Martin compares it to spotting cracks in San Francisco's Millennium Tower. He dismisses expensive AutoML offerings and says the tool, at version 0.56 or 0.57, is self-funded and has 60,000 downloads from users he cannot identify.
- **Community over forks.** Martin wants a Slack-based open-source community and cites the Emacs/XEmacs split as an example of how forking can damage a project.

## Quotes

> "It's an engineering tool. It's designed to go in and find out where the cracks are." — Charles Martin

> "How many cars are you going to crash into the ocean until you get the bridge right?" — Charles Martin
