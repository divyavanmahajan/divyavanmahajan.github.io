---
title: "Seeing beyond the scan in neuroimaging"
date: 2025-04-30
show: practical-ai
episode: 311
url: "https://share.transistor.fm/s/c2ab9c38"
duration_min: 43
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Gavin Winston"]
description: "Machine learning can spot patterns in brain MRI that people miss, but scarce labelled data, trust, ethics and liability keep clinical adoption slow and humans in the loop."
tags: ["healthcare-ai", "medical-imaging", "explainable-ai", "human-in-the-loop", "ai-adoption"]
source_transcript: "practical-ai/episodes/2025/04/2025-04-30-seeing-beyond-the-scan-in-neuroimaging.md"
draft: false
---

## Thesis

Gavin Winston, a professor at Queen's University who applies machine learning to MRI in epilepsy, argues that AI's value in neuroimaging lies in finding patterns the human eye cannot see and in triaging growing scan volumes. He says the gap between what is technically possible and what is used clinically remains wide, and that AI will augment physicians rather than replace them.

## Key points

- **Data volume drives the need.** Winston explains that a single MRI can be 256 x 256 x 256 voxels across several scan types, and scan numbers keep rising, so manual review cannot keep up.
- **Classifiers alone are of limited use.** He notes many papers train a "condition X or not" classifier (often support vector machines or convolutional neural networks), but clinicians need to choose among many possible conditions, locate the problem, and predict treatment outcomes.
- **Data and labels are the bottleneck.** Unlike large language models trained on the internet, a university study may scan about a hundred subjects, and manually outlining an abnormality can take several hours per subject. Augmentation helps, but he doubts data can be synthesised from scratch.
- **Explainability builds trust.** Winston cites the MELD multicentre study, led by colleagues at UCL, which reports not only where a likely abnormality is but which features drove that decision, so radiologists can re-check the image.
- **Barriers are ethical and legal.** He lists data privacy, storage and reuse concerns, frequent false positives, and unclear liability when an algorithm is wrong, and says the law lags technology.
- **A triaged workflow.** His target state: radiologists get scans ordered from most to least likely abnormal, each with an AI-generated pre-report, and urgent results are pushed back to the referring physician faster. He sees generative AI mainly in triaging scan requests.

## Quotes

> "There's a fairly big chasm between what's possible technically versus what is actually used in practice." — Gavin Winston

> "it's going to augment the abilities of whichever type of physician you are." — Gavin Winston
