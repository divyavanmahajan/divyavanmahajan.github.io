---
title: "Dodging Latent Space Detectors: Obfuscated Activation Attacks with Luke, Erik & Scott"
date: 2025-01-18
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/dodging-latent-space-detectors-obfuscated-activation-attacks-with-luke-bailey-erik-jenner-an/"
youtube: "https://www.youtube.com/watch?v=WirqcBPy36A"
hosts: ["Nathan Labenz"]
guests: ["Scott Emmons", "Luke Bailey", "Erik Jenner"]
description: "Attackers can push a model's internal activations past probes, out-of-distribution detectors and sparse autoencoders while keeping harmful behaviour, so latent-space monitors are useful but not magically robust."
tags: ["ai-safety", "interpretability", "adversarial-attacks", "latent-space-monitoring", "backdoors"]
source_transcript: "cognitive-revolution/episodes/2025/01/2025-01-18-dodging-latent-space-detectors-obfuscated-activation-attacks-with-luke.md"
draft: false
---

## Thesis

Luke Bailey, Erik Jenner and Scott Emmons, co-authors of "Obfuscated Activations Bypass LLM Latent-Space Defenses", explain how they broke defenses that read a model's internal activations. With a loss that rewards the target behaviour and also penalises detection, they could usually elicit harmful output while the monitor saw nothing. They still think latent defenses are promising, but argue the activations are not a privileged signal that is hard to fake.

## Key points

- **Three case studies.** The team tested Llama 3.1 8B Instruct on harmfulness monitoring (hard-token and soft-prompt adversarial suffixes against supervised probes), backdoor detection (out-of-distribution detectors) and SQL detection with sparse autoencoders. Labenz sums up the results: detector scores fell below a 1% false-positive threshold in most experiments.
- **Backdoors without seeing the trigger.** Data poisoning used either the string "deployment" or a fictitious software-engineer biography as the trigger. The speakers say the complex semantic trigger weakened defenses even without any explicit attack. In the fine-tuning setting, the attacker trains its own copy of the monitor and attacks that, and the result transfers to the defender's monitor.
- **Whoever moves last wins.** In 70 rounds of attack and retraining, the attacker always found new obfuscated activations, even against an ensemble of 70 linear directions. In the backdoor case the defender moves last and can still lose, because it never sees triggered examples.
- **Obfuscation has a cost.** Fooling SAEs or probes at more layers made the model much worse at writing SQL. Emmons adds that you cannot just nudge a random benign activation into a jailbreak.
- **Practical defense.** Bailey notes that the gray-box hard-prompt attack took thousands of queries, which a provider could detect. He recommends probing every layer and the whole generation. All agree that structured access helps and that open weights have no good answer.
- **Obfuscated adversarial training (OAT).** Retraining the model rather than the probe made attacks costlier: a roughly 10-minute GPU attack stopped working, but about 10 hours of search still broke it.

## Quotes

> "practically everything in machine learning is not necessarily robust, and the attacks where we do reduce performance to literally zero are often pretty strong attacks." — Luke Bailey

> "the more reasoning moves away from natural language into model latents, I think the harder it gets to monitor models." — Luke Bailey
