---
title: Cryptography Will Revolutionize AI Data Privacy with Daniel Kang
description: >-
  Daniel Kang argues zero-knowledge proofs can break the trade-off between
  privacy and authenticity, proving a specific AI model ran without revealing
  weights or inputs, once costs fall.
pubDate: '2023-09-05'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/cryptography-will-revolutionize-ai-data-privacy-with-daniel-kang/
youtube: 'https://www.youtube.com/watch?v=O9sWKxwp-0I'
durationMin: 81
hosts:
  - Nathan Labenz
guests:
  - Daniel Kang
tags:
  - zero-knowledge-proofs
  - cryptography
  - privacy
  - model-verification
  - deepfakes
draft: false
---
## Thesis

Daniel Kang, assistant professor of computer science at the University of Illinois, tells Nathan Labenz that as generative AI improves, people face a growing trade-off between privacy and authenticity. He argues cryptography, specifically zkSNARK zero-knowledge proofs applied to ML inference and attested camera sensors, lets you prove a model ran faithfully, or that a photo is real, without revealing private weights or personal data. The main obstacle, in his view, is cost.

## Key points

- **Motivating cases.** Kang cites face-scan humanity checks that upload biometrics to servers, a Stanford and Berkeley analysis showing ChatGPT accuracy on one task dropping from about 93% to 7% with no customer recourse, and the risk of a tampered medical model flipping a cancer diagnosis.
- **How the protocol works.** The provider commits to a salted hash of the model weights. Inside the proof it recomputes that hash and runs the quantized architecture, using exact lookup tables for nonlinearities such as ReLU, so it cannot swap in a different model. The verifier checks a polynomial at a random point using a verification key that reveals the architecture but not the weights.
- **Exact, not probabilistic.** Labenz's biggest update is that each proof is fully guaranteed; statistics only enter when sampling, for example proving 100 or 1,000 examples from a 100,000-item test set.
- **Cost.** Kang puts the overhead in his paper at about 10,000 times a normal forward pass. Upcoming work cuts some model types' costs 10 to 100 times, but transformers are harder; he hopes for roughly 100x overhead within a couple of years.
- **Smart contracts and disputes.** Labenz, who tested GPT-4 mediation on its red team, sees AI arbitration for things like home repairs. Kang notes that 10,000x GPT-4 costs approach a human arbitrator, and both parties must agree on the model and prompt.
- **Attested cameras.** A chip beside the camera sensor signs a hash of the raw bits. Kang says the iPhone's secure enclave could do this if wired to the camera, at an estimated 1 to 10 dollars per device, and argues regulation could push manufacturers to do it.

## Quotes

> "cryptography gives us a hammer that lets us bypass this fundamental trade off between privacy and authenticity." — Daniel Kang

> "You can literally just do this on your own, and there's no way to cheat it." — Daniel Kang
