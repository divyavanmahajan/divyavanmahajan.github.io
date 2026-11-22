---
title: "AutoML and AI at Google"
date: 2019-09-09
show: practical-ai
episode: 55
url: "https://share.transistor.fm/s/14c3d6bb"
duration_min: 59
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Sherol Chen"]
description: "AutoML turns labelled data into a deployable model in a few clicks, but data preparation and judging model quality still need data science expertise."
tags: ["automl", "google-cloud", "tabular-data", "democratization", "machine-learning"]
source_transcript: "practical-ai/episodes/2019/09/2019-09-09-automl-and-ai-at-google.md"
draft: false
---

## Thesis

Sherol Chen, a machine learning developer at Google, explains how Google's AI groups fit together and what AutoML does. She argues that AutoML's goal is the most accurate prediction model for a given labelled dataset, with less hands-on modelling, but that it should extend data scientists rather than replace them, because getting the data right and judging the result remain hard.

## Key points

- **From games to Google.** Chen traces her path from the original Nintendo and Final Fantasy VII to research on AI and storytelling at UC Santa Cruz. At Google, she says, product scale reset her sense of impact: asked how many users YouTube had, she guessed 10,000.
- **How Google's AI groups relate.** Chen describes research and product sides, with TensorFlow developed inside Google Brain, then led by Jeff Dean. She mentions Ray Kurzweil's separate team (Talk to Books, the Semantris semantic search game), Magenta's generative work and medical research, and Brain's move to the centre of campus after Sundar Pichai's "AI first" announcement.
- **What AutoML covers.** Chen treats AutoML as a product that draws on research such as learning to learn and hyperparameter tuning; the aim is the best predictor, even if it turns out to be a couple of if statements. She points to Quoc Le's Google Brain team for the research.
- **Expertise still matters.** Chen says expertise comes in after training: deciding whether 99% accuracy is good enough and reshaping data when it is not. Whitenack adds that reading precision and recall, and serving models via REST APIs or containers, still takes skill.
- **Limits.** AutoML Tables, launched in April 2019, hides feature analytics and hyperparameters, so users trade control and interpretability for simplicity, according to Chen.
- **Workflow.** Using a banking dataset that predicts which customers turn on direct deposit, Chen describes loading a CSV or BigQuery table, choosing a target column, training, then calling a REST API or exporting a TensorFlow package.

## Quotes

> "I ultimately feel like AutoML's purpose should really be able to extend the data scientist's abilities and intuitions." — Sherol Chen

> "You're loading the data. You click a button. It says train. And then an hour later, you have this model" — Sherol Chen
