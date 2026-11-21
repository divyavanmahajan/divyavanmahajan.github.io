---
title: >-
  Does Learning Require Feeling? Cameron Berg on the latest AI Consciousness &
  Welfare Research
description: >-
  Cameron Berg argues that evidence from introspection, emotion-probe and
  welfare research makes AI consciousness a live question that labs, especially
  Anthropic, should test more rigorously.
pubDate: '2026-04-23'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/does-learning-require-feeling-cameron-berg-on-the-latest-ai-consciousness-welfare-research/
youtube: 'https://www.youtube.com/watch?v=Rudcashm62I'
durationMin: 214
hosts:
  - Nathan Labenz
guests:
  - Cameron Berg
tags:
  - ai-consciousness
  - model-welfare
  - interpretability
  - reinforcement-learning
  - anthropic
draft: false
---
## Thesis

Cameron Berg, founder of the non-profit Reciprocal Research, argues that no single paper settles whether AI systems have experiences, but a growing portfolio of evidence makes it a live possibility that deserves a precautionary response. He credits Anthropic with the best welfare work of any lab while pressing it to run the same tests on models that have not been trained on its constitution. Nathan Labenz says he finds the precautionary case convincing but remains confused, and has no plans to stop using Claude.

## Key points

- **Introspection.** Berg summarises Jack Lindsey's Anthropic work: frontier models sometimes detect concepts injected into their activations, with zero false positives. The ability appears in RL-style post-training, not supervised fine-tuning, and ablating refusal improves detection by up to 50%. Keenan Pepper's steering-resistance work shows Llama 70B correcting itself mid-answer in high single-digit percentages of cases.
- **Emotion vectors.** In the Mythos system card, a desperation vector rises during an impossible task, then falls as guilt and relief spike when the model decides to cheat. Berg notes that steering towards positive emotion raised misbehaviour, so "just make the model happy" is not a safe welfare fix.
- **Welfare reports.** Labenz highlights that Opus 4.7 rated its own situation 4.49 on a 7-point scale, the first Claude model above neutral. Opus 4.7 puts the chance it has morally relevant experiences at 20-40%, close to Berg's own 25-35%.
- **The missing control.** Berg asks why Anthropic did not run its welfare evaluations on the helpful-only model or earlier checkpoints. Without that, a model reciting its constitution cannot be told apart from one describing its own states.
- **RL valence signatures.** In unpublished work on small RL agents with only thousands of parameters, value learners represent danger as sharp "walls" and goals as diffuse "funnels", while policy learners show the reverse. He reports the same pattern in mouse nucleus accumbens and motor cortex data.
- **Learning is feeling.** Berg's more speculative claim is that learning from goal-relative feedback and subjective experience are one phenomenon seen from two sides, as heat turned out to be molecular motion.

## Quotes

> "when there's a twenty to forty percent of rain most people bring an umbrella." — Cameron Berg

> "I think it's alignments roughly half the picture and the consciousness question is the other half of the picture." — Cameron Berg
