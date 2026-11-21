---
title: Deep learning technology for drug discovery
description: >-
  Atomwise CEO Abe Heifets argues that drug discovery should move most
  experiments into the computer, and that only rigorous, prospective testing
  shows whether models actually work.
pubDate: '2021-03-09'
show: practical-ai
episode: 125
url: 'https://share.transistor.fm/s/8f9f5eb1'
durationMin: 57
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Abe Heifets
tags:
  - drug-discovery
  - deep-learning
  - convolutional-neural-networks
  - data-quality
  - benchmarks
draft: false
---
## Thesis

Abe Heifets, co-founder and CEO of Atomwise, argues that pharma is the one major industry that still runs most of its experiments physically, while aerospace and structural engineering simulate first. He says deep learning can change that. But he also says the field has rewarded overfitting to benchmarks, so a model only earns trust when it predicts results it has not seen, across many targets and labs.

## Key points

- **Images to molecules.** Heifets explains that Atomwise treats "does this molecule bind to this protein?" as a binary classification problem. It uses a 3D grid in which element types (carbon, nitrogen, oxygen, sulfur) take the place of RGB colour channels. The first network ran in January 2013, weeks after AlexNet was published.
- **Dirty data.** He says about 98% of roughly 240 million binding data points in the NIH's PubChem database fail Atomwise's quality filters. One example is a typo of "milli" for "nano" that puts a value off by a factor of a million. Atomwise puts ML engineers and domain scientists in one room to clean it.
- **Benchmarks reward memorisation.** Heifets compares many published results to "predicting yesterday's stock price". His paper found that the more overlap there was between training and test sets, the better every algorithm looked on every benchmark he examined.
- **Prospective results at scale.** The AIMS academic programme drew more than 1,600 applications from over 250 institutions in 50 countries and accepted more than 775 projects covering 600 proteins. Heifets reports about a 75% success rate, against the 10% that chemists typically guess.
- **Hard targets.** Heifets says only 4% of human genes have FDA-approved drugs. In a Canavan disease project with the University of Toledo, Atomwise screened 7.2 million molecules against a distant bacterial homology model, tested 60, and found 5 hits.
- **Why AI is needed.** On-demand synthesis catalogues hold 16 billion compounds and grow by about a billion a month. Heifets projects a trillion by 2024, a scale where 99% accuracy would still mean 10 billion false positives.

## Quotes

> "my personal conclusion is that most of the history of computational chemistry in this sort of corner of it has been rewarding overfitting and teaching to the test." — Abe Heifets

> "Every chemist today is a computational chemist if they're being, you know, if they're really looking at it this way." — Abe Heifets
