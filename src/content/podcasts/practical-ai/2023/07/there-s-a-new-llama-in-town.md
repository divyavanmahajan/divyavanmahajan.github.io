---
title: There's a new Llama in town
description: >-
  Whitenack and Benson argue that Llama 2's commercial licence and small sizes
  make task-specific fine-tuned models practical for businesses, and compare
  Claude 2 with ChatGPT's Code Interpreter.
pubDate: '2023-07-25'
show: practical-ai
episode: 233
url: 'https://share.transistor.fm/s/50483491'
durationMin: 48
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - llama-2
  - open-models
  - fine-tuning
  - model-licensing
  - nerf
  - claude
draft: false
---
## Thesis

In this news roundup, Daniel Whitenack and Chris Benson argue that Meta's Llama 2, released with a commercial licence, will have a large ripple effect. Most businesses need a model for a specific task, not a general-purpose chatbot, and Llama 2's 7 and 13 billion parameter models can be fine-tuned and run on modest hardware. They also contrast how Claude 2 and OpenAI's Code Interpreter handle uploaded data.

## Key points

- **Zip-NeRF.** Whitenack describes Google's Zip-NeRF, which builds a seamless 3D fly-through from a set of 2D images. The hosts see uses in real estate, e-commerce, simulation and industrial training, and Whitenack mentions Luma AI's app as an example already in users' hands.
- **The Llama 2 licence.** Commercial use is allowed unless a company had more than 700 million monthly active users on the release date. Whitenack says that makes it commercially available but not open source in the official sense.
- **Sizes and fine-tuning.** Llama 2 comes in 7B, 13B and 70B base and chat versions. Whitenack says 7B runs on a Colab T4 with 4-bit quantisation, and 70B on an A100. He recommends PEFT and LoRA fine-tuning of the smaller models for business tasks. As he understands it, a roughly 30-34B model was held back after failing Meta's safety checks.
- **Output restrictions.** The licence forbids using Llama outputs to improve other LLMs. Benson calls this anti-competitive and questions whether it can be enforced, and both note that Meta was vague about its own training data. Fine-tunes such as Stability AI's Free Willy are already appearing.
- **Claude 2 versus Code Interpreter.** Benson uses Claude 2's 100,000-token context for long content. Whitenack tested both tools on a Yoruba transcription CSV: Code Interpreter wrote and showed pandas and matplotlib code, while Claude replied in chat without code. Neither would translate the text.
- **Evaluate on your own use case.** Whitenack advises building evaluation examples, comparing several models at once, and adding consistency checks, factuality checks and input filtering.

## Quotes

> "Most businesses don't need a general purpose model. They need a model to do a thing." — Daniel Whitenack

> "it's kind of like saying, so long as you don't compete with us at Meta, you can use this for commercial." — Chris Benson
