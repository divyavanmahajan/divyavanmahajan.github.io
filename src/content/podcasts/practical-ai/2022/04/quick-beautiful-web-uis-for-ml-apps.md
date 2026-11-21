---
title: 'Quick, beautiful web UIs for ML apps'
description: >-
  Gradio turns ML models into shareable web demos written in Python, letting
  non-experts test models, build trust in good ones and expose flaws in bad
  ones.
pubDate: '2022-04-05'
show: practical-ai
episode: 174
url: 'https://share.transistor.fm/s/b48cb33f'
durationMin: 42
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Abubakar Abid
tags:
  - gradio
  - hugging-face
  - ml-demos
  - model-evaluation
  - bias
draft: false
---
## Thesis

Abubakar Abid, Gradio team lead at Hugging Face, argues that interactive demos are the missing bridge between people who build ML models and people who use them. Letting stakeholders try a model with their own inputs builds trust in good models and exposes bias and fragility in bad ones, which aggregate metrics on clean benchmarks hide.

## Key points

- **Origins.** Abid built Gradio during his Stanford PhD so doctors and clinicians could test medical imaging models; Hugging Face later acquired it. It is an open source Python library that wraps a model or function in a web GUI without Flask, Docker or front-end code.
- **Small code, wide components.** Whitenack ran a question answering demo in 10 lines of code. Abid says pre-built components (video, data frames, chatbot output, real-time speech recognition) cover about 95% of ML use cases.
- **Testing builds trust.** A cardiologist whited out a pacemaker in an echocardiogram and watched the prediction change in real time. Abid's sister found an MNIST model predicting on a dot, leading to the idea of abstention.
- **Skepticism is earned.** Abid cites his own study of anti-Muslim bias in GPT-3 and a Nature-published ICU model its author would not trust clinically. A flag button collects failures, such as Pakistani or Indian brides labelled "costume", into a CSV for retraining.
- **Scope at Hugging Face.** Spaces hosts demos for free; `share=True` creates temporary links. Gradio targets prototyping, not production APIs, which Abid calls a crowded "Heroku type problem", and is moving towards labelling and dataset tools.
- **Career tip.** Whitenack and Benson say a live demo sets job candidates apart more than a notebook on GitHub.

## Quotes

> "if your model is bad, it can help expose those issues of bias and other things that are really important as well." — Abubakar Abid

> "Like billions of people can literally drag and drop images into a browser and try it out." — Abubakar Abid
