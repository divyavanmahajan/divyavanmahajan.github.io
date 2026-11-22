---
title: "Visualizing and understanding RNNs"
date: 2019-06-04
show: practical-ai
episode: 46
url: "https://share.transistor.fm/s/d218af2a"
duration_min: 46
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Andreas Madsen"]
description: "Accuracy scores hide how models actually behave; interactive visualization shows that LSTM and GRU networks with similar scores rely on very different kinds of memory."
tags: ["rnn", "interpretability", "visualization", "lstm", "freelancing"]
source_transcript: "practical-ai/episodes/2019/06/2019-06-04-visualizing-and-understanding-rnns.md"
draft: false
---

## Thesis

Andreas Madsen, a freelance machine learning engineer and author of a Distill article on memorization in recurrent neural networks, argues that benchmark scores alone tell practitioners little about what changed between models. Interactive visualization, he says, is needed both to explain models to the people affected by them and to do sound science.

## Key points

- **Freelancing in deep learning.** Madsen, who came to the field via the book Programming Collective Intelligence and a mathematical engineering degree, says clients expect a working product, so freelance work pushes him towards predictable scikit-learn style solutions rather than deep learning research, which he does as a university volunteer.
- **Why explainability matters.** He recalls a Danish bank whose loan model outperformed its advisors, who did not trust it and could not explain refusals to customers.
- **Three ingredients.** Madsen lists an understandable dataset, a good visualization and a fast interactive feedback loop, such as hovering over a character to see its effect. He built his Distill tools from scratch, mentions LSTMVis, and says TensorBoard is more for debugging.
- **Distill versus PDFs.** He describes Distill as using the web's interactivity instead of print-era PDFs; his article took about eight months from writing to publication, with volunteer editors giving detailed feedback.
- **LSTM versus GRU.** On an autocomplete task, he found an LSTM better at short-term memory (characters in the current word) and a GRU better at long-term context, despite almost equal cross-entropy. He warns this is dataset-specific, not a general rule.
- **Custom units.** Madsen discusses sparsemax and the neural arithmetic logic unit (NALU), whose gate between addition and multiplication struggles because the options behave so differently. His advice for new units: watch for zero gradients and plan weight initialization, using Taylor approximations of moments.

## Quotes

> "And then we benchmark them on the same data set, and then we clap our hands when we get 0.1% better performance, right?" — Andreas Madsen

> "The thing about freelancing is your clients, they don't pay the hours, they pay the product, right?" — Andreas Madsen
