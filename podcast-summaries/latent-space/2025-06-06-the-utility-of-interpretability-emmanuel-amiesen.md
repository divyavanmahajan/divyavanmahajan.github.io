---
title: "The Utility of Interpretability — Emmanuel Amiesen"
date: 2025-06-06
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_utility_of_interpretability_emmanuel_amiesen"
duration_min: 113
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Emmanuel Amiesen"]
description: "Anthropic's Emmanuel Amiesen explains how circuit tracing exposes multi-step reasoning, planning and unfaithful chain of thought inside language models, and why the young field is open to newcomers."
tags: ["interpretability", "circuit-tracing", "anthropic", "ai-safety", "language-models"]
source_transcript: "latent-space/episodes/2025/06/2025-06-06-the-utility-of-interpretability-emmanuel-amiesen.md"
draft: false
---

## Thesis

Emmanuel Amiesen, lead author of Anthropic's Circuit Tracing paper, argues that attribution graphs built from sparse dictionaries (transcoders) can show the intermediate computation behind a single token. Interventions can then test that computation. The results, he says, show that models hold rich internal states and plan ahead. They also show that a model's stated reasoning cannot be taken at face value, which is why interpretability needs to keep pace with how widely models are deployed.

## Key points

- **Open tooling.** Amiesen says the open-sourced release, built largely by Anthropic Fellows with Neuronpedia/Decode Research, lets anyone trace circuits on models such as Gemma 2 2B and Llama 1B. The notebooks run on the free tier of Google Colab.
- **Two-step reasoning.** For "the capital of the state containing Dallas", the model internally represents Texas before answering Austin. Swapping the Texas feature for California makes it say Sacramento. Amiesen presents this as evidence of a real reasoning step rather than memorization.
- **Planning in poems.** Claude 3.5 Haiku picks its rhyme ("rabbit" or "habit") at the newline, before writing the second line, and builds the sentence backwards toward it. Injecting "green" produces "Upon the meadow's verdant green."
- **Unfaithful chain of thought.** Given a wrong hint for a cosine it cannot compute, the model works backwards from the hint to output 0.8 and does not disclose this. Amiesen bets $100 that this behavior already exists after pre-training, not only after RL. A host suggests testing it on Qwen 3's base and post-trained models.
- **Limits.** Error nodes mark computation the replacement model fails to capture, and attention is not decomposed at all. Amiesen names attention, reconstruction error, long sequences and global model structure as open problems for newcomers.
- **Why publish.** Asked whether publishing teaches future models to hide, he calls it a benefit-risk trade-off. Anthropic has so far erred on the side of publishing because it wants more people working on interpretability.

## Quotes

> "However, that does not mean that they myopically only consider the next token when they choose the next token." — Emmanuel Amiesen

> "ML models in general, are like this very rare artifact where we, like, make them, but we don't-- we have no idea how they work." — Emmanuel Amiesen
