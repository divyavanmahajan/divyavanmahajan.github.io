---
title: >-
  The Adversarial Mind: Defeating AI Defenses with Nicholas Carlini of Google
  DeepMind
description: >-
  Nicholas Carlini explains why attackers keep beating machine learning
  defenses, how he finds the flaw in a new defense, and why he expects models to
  stay vulnerable.
pubDate: '2025-02-27'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/the-adversarial-mind-defeating-ai-defenses-with-nicholas-carlini-of-google-deepmind/
youtube: 'https://www.youtube.com/watch?v=fyGdlnUDOdg'
durationMin: 156
hosts:
  - Nathan Labenz
guests:
  - Nicholas Carlini
tags:
  - adversarial-machine-learning
  - ai-security
  - jailbreaks
  - open-source-ai
  - cryptography
draft: false
---
## Thesis

Nicholas Carlini, a security researcher at Google DeepMind, argues that attack is structurally easier than defense in machine learning, and that most published defenses fail for reasons their authors did not see. His median prediction is that models stay roughly as vulnerable as they are now, so systems should be built on the assumption that models make mistakes, using layered defenses as in classical security.

## Key points

- **Why attackers win.** Carlini says the attacker only needs one success and also goes second, studying a fixed defense for months. Data poisoning is an exception, because the poisoner must publish data before the defender trains.
- **Simple objectives, cheap attacks.** He recommends the simplest loss function: PGD from Aleksander Madry's group got "99% of the way" with a far simpler method than his own. Ian Goodfellow's fast gradient sign method takes one gradient step, PGD runs 10 to 1,000 iterations in a minute or two, and the GCG jailbreak suffix takes an hour or a few.
- **Gradient masking.** Many defenses only make the loss surface hard to optimise. Defensive distillation worked only because the loss became numerically zero; the TAR tamper-resistant fine-tuning defense trained against one-step attacks, which earlier image work showed stronger attacks break.
- **Best defense is weak by security standards.** Adversarial training gives 50-70% accuracy under attack, real progress over zero but poor next to five nines of reliability. He links this to Madry's group's paper "Adversarial Examples Are Not Bugs, They Are Features": models rely on non-robust features such as fur texture.
- **LLMs as attackers.** In his experiments, models could break defenses rewritten as about 20 lines of clean Python but failed on real research repositories, because the hard part is isolating the one piece that matters.
- **Open source and policy.** Carlini compares asking for an open model that cannot be misused to asking for a hammer with seven forbidden uses. He cites 1990s US export limits on cryptography (40-bit browsers) as a restriction that was rightly dropped, and asks that policy rest on what is technically true.

## Quotes

> "70% accuracy as an attacker means to me, I try 4 times and probably 1 of them works." — Nicholas Carlini

> "I feel like open source up until today has only been good for computer security and safety in general." — Nicholas Carlini
