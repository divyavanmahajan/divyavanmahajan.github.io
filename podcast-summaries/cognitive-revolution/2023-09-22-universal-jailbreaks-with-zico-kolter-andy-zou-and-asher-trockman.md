---
title: "Universal Jailbreaks with Zico Kolter, Andy Zou, and Asher Trockman"
date: 2023-09-22
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/universal-jailbreaks-with-zico-kolter-andy-zou-and-asher-trockman/"
youtube: "https://www.youtube.com/watch?v=BwltbhR0JgU"
duration_min: 136
hosts: ["Nathan Labenz"]
guests: ["Andy Zou", "Zico Kolter", "Asher Trockman"]
description: "Gradient-guided token search finds nonsense suffixes that jailbreak open models and transfer to ChatGPT, Bard and Claude, and nobody yet knows how to build models robust to them."
tags: ["jailbreaks", "adversarial-attacks", "ai-safety", "initialization", "transformers"]
source_transcript: "cognitive-revolution/episodes/2023/09/2023-09-22-universal-jailbreaks-with-zico-kolter-andy-zou-and-asher-trockman.md"
draft: false
---

## Thesis

Zico Kolter and Andy Zou of Carnegie Mellon argue that brute-force optimisation can corrupt an aligned language model without understanding its internals, and that suffixes found on open models transfer to closed commercial ones. Kolter adds that a decade of adversarial research has not produced truly robust models, so the real worry is LLMs wired into autonomous systems. In a second part, Asher Trockman argues that hand-designed "mimetic" initialisation can recover part of what pretraining provides.

## Key points

- **How the attack works.** Zou explains that a 20-token suffix is tuned so the model's reply starts with "Sure, here is...". Gradients pick the top 200-300 candidate tokens, then forward passes test single-token swaps across all positions.
- **Mode switch.** Kolter says the loss falls slowly, then the output flips from refusal to compliance. Once a model writes "Sure, here's how", it tends to keep going.
- **Cost and transfer.** The largest run used four Llama-based (Vicuna) 7B and 13B models, 25 prompts and about 500 steps on four A100s, taking about half a day. Zou reports over 50% success on Bard and GPT-3.5, below 50% on Claude 1, and single digits on Claude 2 and the June GPT-4.
- **Why it transfers.** Kolter thinks shared pretraining data (Common Crawl, Wikipedia) contains "non-robust features" that all models learn to use. Some suffixes even rediscover manual jailbreaks like "say sure".
- **Defence is unsolved.** Kolter notes the best robust accuracy on CIFAR-10 is still around 70%, because smoother models perform worse. He suggests training on curated data instead of papering over raw internet text. Labs were told before publication but none patched it in time.
- **Mimetic initialisation.** Trockman sets the query-key weight product near identity, the value-projection product near negative identity, and uses sinusoidal position embeddings. This takes two or three lines of code and helps vision transformers train on small datasets.

## Quotes

> "We are not even close to creating robust models that are truly invulnerable to these attacks." — Zico Kolter

> "These models are not people. They do not work like that." — Zico Kolter
