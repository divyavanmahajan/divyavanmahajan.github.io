---
title: AI code that facilitates good science
description: >-
  Joel Grus argues that data scientists should learn methods from scratch and
  adopt software engineering practices such as unit tests, code review and
  pinned environments to make research reproducible.
pubDate: '2019-07-19'
show: practical-ai
episode: 51
url: 'https://share.transistor.fm/s/89070208'
durationMin: 53
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Joel Grus
tags:
  - data-science
  - software-engineering
  - reproducibility
  - nlp
  - open-source
draft: false
---
## Thesis

Joel Grus, author of Data Science from Scratch and an engineer on AllenNLP at the Allen Institute for AI (AI2), argues that practitioners should understand what their tools do under the hood and should write research code with the same discipline as production software. In his view, untested or unreproducible model code is bad science.

## Key points

- **Why "from scratch".** Grus says it is easy to run a scikit-learn random forest without understanding it, which makes errors such as test-data leakage hard to spot. His maths training taught him not to use a theorem before proving it. The book teaches concepts through Python code rather than equations, building from vectors as lists of floats up to neural networks.
- **Second edition.** Grus says about 99% of the reason was moving from Python 2.7 to Python 3; he also added a deep learning chapter.
- **Selling engineering practices.** Grus argues that data scientists who cannot write production code create an artificial hand-off, and that unit tests and code review have to be "sold" by showing how they make life easier. Benson and Whitenack describe the same tension from their own careers.
- **Testing research code.** Grus recommends tiny datasets of two or three instances, checking that the model runs, outputs the right shapes, reduces loss and can overfit perfectly. He also recommends separating library code from experiment code, writing instructions and stating dependencies. Rare failures caused by randomness can be marked as flaky.
- **AI2 and AllenNLP.** Grus describes AI2's teams (AllenNLP, PRIOR, Semantic Scholar, Aristo, Mosaic). AllenNLP is a PyTorch library with higher-level NLP abstractions, one level below spaCy; he compares it to Lego pieces that are whole walls.
- **Open source friction.** AllenNLP's CI enforces mypy, Pylint and Sphinx docs, which Grus says deters researcher contributors. He is currently working on richer interactive model demos.

## Quotes

> "every day I woke up and felt guilty as hell that there was a book out there with my name on it telling people to use Python 2.7." — Joel Grus

> "if your model is not doing what you think it's doing, I mean, that's bad science out of the gate, right?" — Joel Grus
