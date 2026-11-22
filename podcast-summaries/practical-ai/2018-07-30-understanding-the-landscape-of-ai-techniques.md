---
title: "Understanding the landscape of AI techniques"
date: 2018-07-30
show: practical-ai
episode: 7
url: "https://share.transistor.fm/s/a2c1cf77"
duration_min: 45
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Jared Lander"]
description: "Much of what is sold as AI is automation or regression; deep learning is extreme nonlinear modelling, and R offers a full path from linear models to TensorFlow."
tags: ["machine-learning", "deep-learning", "r-language", "data-science", "model-deployment"]
source_transcript: "practical-ai/episodes/2018/07/2018-07-30-understanding-the-landscape-of-ai-techniques.md"
draft: false
---

## Thesis

Jared Lander, founder of Lander Analytics and organiser of the New York R meetup and conference, places AI on a spectrum: scripted automation, then linear and generalised linear models, then trees and boosting, then deep learning, which he describes as extreme nonlinear modelling. He argues that R, built as a data and statistics language, covers that whole range and is used in production, and that tool choice should depend on the task.

## Key points

- **Vocabulary first.** Lander says learners drown in terminology because different fields name the same thing differently, such as intercept versus bias or coefficients versus weights.
- **The AI hype stack.** Lander claims much "AI" is an if-else statement, most of the rest is logistic regression, and some is plain automation, such as replacing copy-and-paste between spreadsheets with scripts.
- **From linear models to deep learning.** He traces the path from linear models through random forests and XGBoost, which he says won almost every Kaggle competition, to neural networks with many layers. Nonlinear activation functions such as tanh or ReLU stop stacked layers collapsing into one linear model.
- **Interpretability depends on the goal.** Lander says a medical trial needs to explain a treatment's effect, while pure prediction may not, and that deep learning gives up more interpretation.
- **R in practice.** Lander reports the most R adoption in finance, pharma and healthcare, and defence, because statisticians gravitate to R and engineers to Python. His learning path runs from his book "R for Everyone" through caret (Max Kuhn) to JJ Allaire's TensorFlow and Keras packages.
- **Serving models.** Lander points to the Plumber package and Algorithmia for turning models into REST APIs; Whitenack links this to a new layer in the software stack that lets developers use models without the maths.

## Quotes

> "half the time when someone says they have an AI, they mean they have an if-else statement." — Jared Lander

> "As long as you're doing machine learning, doing AI, doing data science, people shouldn't care how you're doing it." — Jared Lander
