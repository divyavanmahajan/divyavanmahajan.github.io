---
title: '"Foundation" models'
description: >-
  Whitenack and Benson unpack Stanford's foundation model report: large
  self-supervised models give broad leverage, but concentrate power, spread bias
  downstream and make misuse easier.
pubDate: '2022-03-23'
show: practical-ai
episode: 172
url: 'https://share.transistor.fm/s/99ddb901'
durationMin: 41
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - foundation-models
  - self-supervised-learning
  - transfer-learning
  - ai-bias
  - multimodal-ai
draft: false
---
## Thesis

Daniel Whitenack and Chris Benson walk through the report "On the Opportunities and Risks of Foundation Models" from Stanford's Center for Research on Foundation Models (CRFM). Whitenack argues that the term usefully names a cross-modality trend: one large model, pre-trained with self-supervision at scale, adapted to many downstream tasks. Both hosts stress that this leverage also brings homogeneity, concentrated power and new routes for misuse.

## Key points

- **Definition.** Whitenack reads Stanford's definition (models trained on broad data, generally with self-supervision at scale, adaptable to many downstream tasks) and frames it on two pillars: transfer learning and scale. Self-supervision matters because labelled datasets for every task do not scale; Benson admits he had been conflating it with unsupervised learning.
- **Homogeneity as a single point of failure.** Much NLP, vision and speech work now builds on BERT, GPT-3 or Wave2Vec. Benson compares this to an open-source package that everything imports: a bias in the base model flows downstream, much as a bug does.
- **Who is left out.** Whitenack, who works at SIL International with minority language communities, says local languages are largely missing from NLP foundation models and that those groups risk becoming more marginalised. Benson adds that model builders are economically incentivised to serve the mainstream.
- **Practitioner responsibility.** Whitenack recommends behavioural testing (perturbing inputs and checking that outputs stay invariant) rather than trusting a Google or OpenAI model that scores well on a test set. Benson notes that the same perturbations point to security vulnerabilities.
- **Grounding.** Whitenack explains "grounded" models as learning a concept like "dog" across text, audio, images and video, citing CLIP, a DARPA programme modelled on how children acquire language, and an earlier conversation with Alexa speech veteran Jeff Adams.
- **Misuse.** A flexible model makes sentiment analysis easier, and also fake news. Whitenack sees this as the tension behind OpenAI restricting GPT-3 access. He recommends the Hugging Face course as a hands-on way to learn fine-tuning.

## Quotes

> "For the most part, Local languages, minority languages are left out of foundational models in the NLP world, right? So I already view this as an issue." — Daniel Whitenack

> "I think it's kind of a necessary evil to have foundational models, you know, by that name or otherwise, to build work upon" — Chris Benson
