---
title: Production data labeling workflows
description: >-
  Xelex CEO Mark Christensen argues that data labeling succeeds through trained,
  well-treated annotators and workflow platforms, not commoditised click work
  managed on spreadsheets.
pubDate: '2022-09-27'
show: practical-ai
episode: 195
url: 'https://share.transistor.fm/s/7af850a8'
durationMin: 32
hosts:
  - Daniel Whitenack
guests:
  - Mark Christensen
tags:
  - data-labeling
  - training-data
  - annotation
  - mlops
  - quality-assurance
draft: false
---
## Thesis

Mark Christensen, CEO of Xelex, argues that the hard part of training data is not collecting labels but running labeling as a managed production process. He says skilled, well-briefed annotators and a workflow platform with built-in quality checks produce usable data faster than crowdsourced labor coordinated by data scientists on spreadsheets.

## Key points

- **From healthcare to AI.** Christensen's company spent 17 years running medical dictation and transcription at scale. An NLP-company owner liked the platform, and after about two years of discovery and two of modification it launched Xelex AI. Healthcare habits carried over: audit trails, encryption in transit and at rest, and no data on labelers' devices.
- **Against commoditised labor.** He says crowdsourced click work often fails for specialty or new-language projects, causing repeated relabeling and stalled projects. Xelex instead invests in training and paying annotators to build long-term relationships.
- **Explain the use case.** In his paper on translation for NLP models, Christensen recommends telling annotators what the model is for, citing a call-center automation brief as an example.
- **Where the demand is.** He sees off-the-shelf models handling more general work, so custom data is needed for medical documentation, customer-specific sentiment and intent, call-center business intelligence and new languages. Teams mix in-house, click-worker and vendor labeling but stitch results together manually.
- **Data scientists as project managers.** Christensen says senior data scientists waste time vetting samples and scoring annotators. A platform gives sales, ops, procurement and QA teams visibility into budget, timeline and quality.
- **Quality assurance.** Xelex sets a ground-truth version of each data object and measures editors' distance from it, routes work through multi-level QA, and runs an error script against known errors. Whitenack notes his own speech projects needed five labels per sample.

## Quotes

> "the commoditization of the annotation workforce is, I think it can be a project killer." — Mark Christensen

> "This is one area where the tooling is broadly not keeping pace with the growth of the industry." — Mark Christensen
