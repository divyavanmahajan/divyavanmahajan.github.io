---
title: Representation Engineering (Activation Hacking)
description: >-
  Control vectors applied to a model's hidden states offer a middle ground
  between unreliable prompt engineering and costly fine-tuning for steering LLM
  behaviour.
pubDate: '2024-02-28'
show: practical-ai
episode: 258
url: 'https://share.transistor.fm/s/20514e97'
durationMin: 44
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - representation-engineering
  - llm-control
  - prompt-engineering
  - open-models
  - video-generation
draft: false
---
## Thesis

Daniel Whitenack walks Chris Benson through representation engineering, or "activation hacking": steering a model by adding control vectors to its hidden states during the forward pass, without changing its weights or the prompt. Whitenack presents it as a step between basic prompting, which often fails to enforce behaviour, and fine-tuning, which needs GPUs and model hosting. The hosts then cover OpenAI's Sora and Google's Gemma, where Benson argues small open models are where practical work happens.

## Key points

- **Origin of the topic.** Whitenack picked it up after Karan Malhotra of Nous Research mentioned activation hacking, and draws on Theia Vogel's January post on Mistral 7B and an October 2023 Center for AI Safety paper on representation engineering.
- **How control vectors are built.** Whitenack describes four steps: write contrasting prompt pairs (for example extremely happy versus extremely sad), collect hidden states for each, take the differences, then reduce them per layer with PCA into a single control vector.
- **Same prompt, different behaviour.** Asked what being an AI feels like, Mistral gives a bland answer by default, a joyful one with the happy vector on, and a gloomy one with it reversed. Other axes include honest/dishonest, trippy, lazy, left/right wing and self-aware.
- **Uses and risks.** Benson imagines a cheerful drive-through assistant using RAG over a menu; Whitenack notes White Castle already has one. He adds that vectors could both jailbreak safety-trained models and help prevent jailbreaks, and points to the repeng library.
- **Sora and Gemma.** The hosts note Sora was announced but not yet released, with demo artefacts such as a birthday candle with two flames. Whitenack says Gemma, including a 2 billion parameter model, was the top trending language model on Hugging Face but comes with custom terms of use rather than Apache 2 or MIT.
- **Magic and code-to-AGI.** Whitenack describes Magic, a code generation startup that raised money on the pitch that an AI junior developer is a path to AGI.

## Quotes

> "So with the control vectors, maybe it's a step between those two places, right, where you have a certain vector of behavior that you want to induce." — Daniel Whitenack

> "Models this size are really where the action is at. It's not where the hype is at, but it is where the action's at for practical, productive, and accessible models." — Chris Benson
