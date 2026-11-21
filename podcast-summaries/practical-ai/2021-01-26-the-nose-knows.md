---
title: "The nose knows"
date: 2021-01-26
show: practical-ai
episode: 120
url: "https://share.transistor.fm/s/57e1cd47"
duration_min: 55
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Terri Jordan", "Yanis Caritu"]
description: "Aryballe's Terri Jordan and Yanis Caritu argue that odor can be captured as a repeatable digital signature from a peptide-coated silicon sensor and analysed with fairly standard machine learning."
tags: ["digital-olfaction", "sensors", "machine-learning", "quality-control", "iot"]
source_transcript: "practical-ai/episodes/2021/01/2021-01-26-the-nose-knows.md"
draft: false
---

## Thesis

Terri Jordan, who runs Aryballe's US division, and chief software officer Yanis Caritu argue that smell lacks anything like RGB for vision, so the hard part of digital olfaction is capturing odor reproducibly, not the AI. Once a sensor delivers a stable signature within a defined "universe" of odors, they say commodity machine learning can handle classification, quality control and change detection.

## Key points

- **Sensing like a nose.** Jordan explains that Aryballe grafts short-chain peptides, which mimic biology in the nose, onto a silicon photonics chip. She says this groups chemically dissimilar compounds that both smell like lavender, unlike GC mass spectrometry.
- **Use cases.** Jordan lists raw material checks (telling good corn from musty or sour corn), batch consistency for a large fragrance supplier, and automotive and ride-share odor detection. A test of 20-something cars found that all shared one signature except a new car and one with a cinnamon freshener.
- **Data representation.** Caritu says the sensor outputs fewer than 100 numbers per sample. These are normalised to remove concentration effects and projected onto uncorrelated axes; Whitenack compares this to principal components. Reference odors are defined per domain, such as fine fragrance or automotive malodors.
- **Modelling approach.** Caritu says the team works in Python with scikit-learn and sometimes TensorFlow, reducing dimensions first and then benchmarking classifiers. Logistic regression sometimes beats neural networks, and deploying models on devices and IoT is a large challenge.
- **Robustness and time.** Because annotated odor data is scarce, Caritu reduces variability through normalisation, a balance of specific and non-specific peptides, and extra sensors such as humidity. Odor changing over time supports uses such as harvest timing, cooking doneness and unsupervised grouping of raw materials.
- **Outlook.** Jordan expects a miniaturised silicon product in 2021, with market traction from 2022, and imagines a "Shazam for odors." Caritu points to home appliances and, longer term, health care, which needs detection limits far below parts per billion.

## Quotes

> "Well, we say we're hardware-enabled software dataware. So that's how we define ourselves as a company." — Terri Jordan

> "So you have not a picture of the odor, you have a kind of video of the odor." — Yanis Caritu
