---
title: The ins and outs of open source for AI
description: >-
  AI software is built largely on open source, but code, data and models carry
  different licences, and practitioners should learn the norms of finding,
  testing and contributing back.
pubDate: '2020-07-07'
show: practical-ai
episode: 95
url: 'https://share.transistor.fm/s/ac57faa4'
durationMin: 47
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - open-source
  - licensing
  - open-data
  - developer-tools
  - community
draft: false
---
## Thesis

Daniel Whitenack and Chris Benson argue that most AI software (TensorFlow, PyTorch, spaCy, Docker, Kubernetes) is open source, while organisations pay mainly for hardware and compute. Because AI is now part of the software lifecycle, practitioners who did not come from software need to learn open source licensing, how to find and test tools, and how to contribute back.

## Key points

- **What open source means.** Whitenack notes that open source does not always mean free, and describes the "open core" pattern and permissive licences such as Apache 2.0 (TensorFlow) and MIT. Benson stresses that source code travels with the distribution and that company policies may approve specific licences.
- **Data and models have licences too.** Whitenack cites Mozilla's Common Voice terms, which forbid re-identifying speakers, and asks what licence covers a pre-trained model linked from a GitHub README. Benson's non-lawyer view is that the model still falls under the licence it was distributed with.
- **Finding tools and data.** Both start from trusted sources such as TensorFlow, PyTorch and NVIDIA documentation. Whitenack recommends Papers with Code leaderboards; Benson points to Google Dataset Search and Semantic Scholar.
- **Experimenting safely.** Benson builds a Docker container for each tutorial to control versions. Whitenack spins up several Google Colab notebooks to compare approaches without breaking his local environment, and Benson agrees Colab is the easiest option.
- **Ways to contribute.** Benson suggests documentation, examples, data, or asking maintainers what they need, noting most maintainers are unpaid. Whitenack recommends small documentation pull requests and blog posts, such as guides to building a GPU workstation.
- **Community.** Benson argues AI lacks open source's cross-project sense of community. Whitenack points to TensorFlow and PyTorch hubs and a tweet from Hugging Face's Clem about 25 team members plus 400 open source contributors.

## Quotes

> "Nothing beats Colab in my view." — Chris Benson

> "the majority of maintainers out there are maintaining it for free." — Chris Benson
