---
title: Protecting us with the Database of Evil
description: >-
  ActiveFence's Matar Haller argues that online harm detection needs contextual,
  multimodal AI fed continuously by subject matter experts, because keyword
  filters fail in an adversarial space.
pubDate: '2022-11-16'
show: practical-ai
episode: 201
url: 'https://share.transistor.fm/s/8e2526bc'
durationMin: 48
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Matar Haller
tags:
  - trust-and-safety
  - content-moderation
  - contextual-ai
  - active-learning
  - multimodal
draft: false
---
## Thesis

Matar Haller, VP of Data at ActiveFence, argues that trust and safety is now a basic expectation for any platform with user-generated content. Because bad actors keep changing tactics, she says detection has to combine domain experts' knowledge with contextual models that look at text, images, audio and metadata together, and be retrained constantly.

## Key points

- **Why keywords fail.** Haller describes moderation evolving from slur lists to emojis, leetspeak and coded numbers such as 1488, and notes that a word can be quoted, reclaimed or used as an insult, so context matters more than the token.
- **Contextual AI.** An ISIS logo next to a CNN logo, "I love him" beside a photo of Osama bin Laden, or a chef demonstrating knives all show, in her account, that one signal from an image is not enough; titles, comments and the platform's own policy change the verdict.
- **Experts as features.** ActiveFence researchers who speak the languages and know hate, terror, trafficking and misinformation networks feed knowledge that the data team turns into engineered features. Haller says the space is non-stationary, so features and models are rebuilt continuously.
- **The database of evil.** Content gets a risk score, trained analysts verify it, and confirmed violations go into a database used to match known content and retrain models. Clients can have their own definition of "evil", for example whether baby's first bath is allowed.
- **Product and serving.** Customers set codeless workflows with two risk-score thresholds to balance precision and recall, or call a synchronous text API or async API for media. Small lean models serve real-time calls; others are combined through a feature store into explainable ensembles.
- **Analyst well-being.** Active learning sends only the gray zone to human reviewers. Haller says some violations are restricted to very few staff, and the company has a resilience psychologist; answering Benson, she says mission keeps her going.

## Quotes

> "trust and safety, just basically safety online, it's not really a nice to have anymore. At this point, it's a competitive advantage." — Matar Haller

> "How do you build and train a model without looking at the data?" — Matar Haller
