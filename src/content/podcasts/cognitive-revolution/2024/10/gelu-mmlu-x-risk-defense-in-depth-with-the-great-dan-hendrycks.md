---
title: 'GELU, MMLU, & X-Risk Defense in Depth, with the Great Dan Hendrycks'
description: >-
  Dan Hendrycks argues that compute and data drive AI progress, that safety will
  come from stacked imperfect safeguards rather than proofs, and that benchmarks
  must keep getting harder.
pubDate: '2024-10-19'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/gelu-mmlu-x-risk-defense-in-depth-with-the-great-dan-hendrycks/
youtube: 'https://www.youtube.com/watch?v=1fyqkH6hXJw'
durationMin: 156
hosts:
  - Nathan Labenz
guests:
  - Dan Hendrycks
tags:
  - ai-safety
  - benchmarks
  - robustness
  - representation-engineering
  - ai-policy
draft: false
---
## Thesis

Dan Hendrycks, executive director of the Center for AI Safety and adviser to xAI, describes himself as an empirical deep-learning researcher: try many things, keep what works, and don't expect to fully understand why. He tells Nathan Labenz that capabilities come mainly from compute and data, not clever architectures. For the same reason he thinks safety will come from "defense in depth", meaning many imperfect safeguards stacked together, rather than from provable guarantees.

## Key points

- **Scale over architecture.** Hendrycks says most attempts to improve on the Transformer's architecture have quietly failed. Mixture-of-experts gave maybe 30% efficiency, far less than 10x more compute or data. When his team plotted open-weight models' benchmark scores against compute, the correlation was about 95%.
- **Benchmarks.** MMLU covers 57 subjects. Models have sat in the high 80s since GPT-4, and Hendrycks expects saturation around 90%, which is roughly where 95th-percentile human test takers land. Its successor, "Humanity's Last Exam", will crowdsource expert questions, offer $500,000 to $1 million in prizes and keep part of the set private.
- **Robustness needs more than scale.** His "safety washing" paper finds that jailbreak robustness is not correlated with compute. Circuit breakers, built with Andy Zou and Zico Kolter, moved models from about 90% to 99% reliable. In an ongoing jailbreak competition, circuit-breaker models held up against 20,000+ attempts while other models fell quickly.
- **Representation engineering and tamper resistance.** Hendrycks calls representation engineering top-down interpretability, as opposed to bottom-up mechanistic work. Tamper-resistant training simulates adversaries who fine-tune a model to strip out its safeguards, so open-weight models might keep them. He says the performance cost still makes it unready for production.
- **Policy and geopolitics.** Hendrycks broadly supports chip export controls, thinks US-China cooperation is unlikely without a catastrophe, and favours subsidising domestic chip manufacturing.
- **The extinction-risk statement.** He asked signatories in a deliberate order, starting with those who would sign alone and then those who needed several peers to sign first. He says a mass email would have failed.

## Quotes

> "And the amount of secret sauce inside of labs, I think is actually fairly minimal." — Dan Hendrycks

> "I think the philosophy in safety engineering when dealing with these complex adaptive systems is generally not proofs, but instead other sorts of safety engineering principles such as defense in-depth." — Dan Hendrycks
