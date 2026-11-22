---
title: "PyTorch 1.0 vs TensorFlow 2.0"
date: 2018-10-15
show: practical-ai
episode: 16
url: "https://share.transistor.fm/s/b9e3dac8"
duration_min: 44
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "PyTorch 1.0 pushes from research into production while TensorFlow 2.0 adopts eager execution, and most companies will apply existing models through transfer learning rather than invent new ones."
tags: ["deep-learning-frameworks", "pytorch", "tensorflow", "transfer-learning", "responsible-ai", "learning-resources"]
source_transcript: "practical-ai/episodes/2018/10/2018-10-15-pytorch-1-0-vs-tensorflow-2-0.md"
draft: false
---

## Thesis

In a news episode, Chris Benson and Daniel Whitenack argue that the two main deep learning frameworks are converging: PyTorch 1.0 targets production use, while TensorFlow 2.0 makes the easier eager mode the default. They also argue that practical AI in companies mostly means applying existing models to your own data, guided by published practice checklists.

## Key points

- **PyTorch moves to production.** Benson says PyTorch, once mainly academic, now competes with TensorFlow for corporate teams under the slogan "from research to production". Whitenack highlights ONNX model exchange, Kubeflow integration and Google Cloud work to run PyTorch on TPUs.
- **TensorFlow 2.0 goes eager first.** Benson explains that TensorFlow 2.0 makes eager execution the primary mode, with graph mode available for performance, and removes deprecated APIs, which he links to competition from PyTorch.
- **Practice guidelines as scaffolding.** Whitenack walks through Google's Responsible AI Practices (multiple metrics, examining raw data, testing, monitoring after deployment) and would use them as a team checklist. Benson adds NVIDIA's five-step deep learning workflow article and compares AI's maturity to the internet around 1993.
- **Transfer learning is the norm.** Discussing a Fast Forward Labs article, both hosts argue that companies rarely design new architectures; a "custom" model usually means training a published model on company data.
- **Surveillance and state spending.** Benson describes an ABC report on China's planned social credit system and calls it alarming; Whitenack compares it to a Black Mirror episode and mentions India's Aadhaar. Benson also cites the Pentagon's $2 billion DARPA AI investment and China's $150 billion industry goal, and argues Western governments should invest more.
- **Tools and learning.** The hosts recommend a decision tree visualisation package, the Anatomy of an AI System infographic, Google Dataset Search, Stanford CS229 cheat sheets and Georgia Tech's free Udacity machine learning course.

## Quotes

> "transfer learning gives you the option of standing on the shoulders of giants." — Chris Benson

> "I love having choice. I love having the option to go where I want." — Chris Benson
