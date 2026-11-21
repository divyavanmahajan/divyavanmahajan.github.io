---
title: "Attack of the C̶l̶o̶n̶e̶s̶ Text!"
date: 2020-08-03
show: practical-ai
episode: 99
url: "https://share.transistor.fm/s/a3d121af"
duration_min: 48
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Jack Morris"]
description: "Adversarial examples in NLP are less clear-cut than in vision, but treated as a kind of unit testing they expose brittle models and feed data augmentation, which TextAttack packages as reusable components."
tags: ["adversarial-examples", "nlp", "model-robustness", "data-augmentation", "open-source"]
source_transcript: "practical-ai/episodes/2020/08/2020-08-03-attack-of-the-c-l-o-n-e-s-text.md"
draft: false
---

## Thesis

Jack Morris, then a University of Virginia researcher heading to the Google AI Residency, argues that NLP models break on small changes such as synonym swaps or typos, yet the field's attack research was scattered across incompatible code. His open source framework TextAttack breaks attacks into shared components so researchers can compare them and engineers can test, augment and retrain their own models.

## Key points

- **Why text is harder than images.** Morris explains that a near-invisible pixel change can flip an image classifier (the panda example), but any change to text is visible, so "adversarial" in NLP depends on agreed constraints: preserving meaning (synonyms, swapping proper nouns) or character-level typos.
- **Safety versus robustness.** Morris separates robustness (no obvious holes in predictions) from safety (resisting manipulation), citing toxic-comment classifiers such as Facebook's as a likely target. Whitenack recalls a sentiment test where replacing "United States" with "Turkey" broke commercial systems.
- **Testing as a workflow.** Whitenack compares adversarial examples to unit tests, and Morris links this to the CheckList paper. Morris also mentions Ian Goodfellow's suggestion that models flag inputs that look malformed or outside the training distribution. Benson sees possible uses in IDEs and word processors.
- **Four components.** TextAttack models an attack as a transformation (for example counter-fitted GloVe word-embedding neighbours), constraints (such as Google's Universal Sentence Encoder as a similarity check), a goal function (flip a label, or lower a translation's BLEU score) and a search method, since the substitution space grows exponentially.
- **Beyond attacks.** Morris sees most future use in the reusable components and in data augmentation, plus adversarial training added that summer. The project borrows Hugging Face's download-and-go model, has been open source since May, and hopes to grow its attack recipes like CleverHans and Foolbox in vision.

## Quotes

> "But if you have two sequences of text, there's no imperceptible change unless they're exactly the same." — Jack Morris

> "It's actually really shocking how many state of the art NLP models will just totally mispredict that for whatever reason." — Jack Morris
