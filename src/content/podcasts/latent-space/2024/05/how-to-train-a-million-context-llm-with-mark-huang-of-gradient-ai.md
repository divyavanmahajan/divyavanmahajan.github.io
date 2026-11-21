---
title: How to train a Million Context LLM — with Mark Huang of Gradient.ai
description: >-
  Gradient's Mark Huang explains how his team extended Llama 3 to a
  million-token context with curriculum training, theta scaling and ring
  attention, and why evaluations are now the hard part.
pubDate: '2024-05-30'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/how_to_train_a_million_context_llm_with_mark_huang_of_gradient_ai
durationMin: 57
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Mark Huang
tags:
  - long-context
  - llama-3
  - fine-tuning
  - evaluations
  - open-source-models
draft: false
---
## Thesis

Mark Huang, co-founder of Gradient, explains how his team extended Llama 3 from its original 8,000-token context window to one million tokens and later four million. In his account, the hard parts are getting the positional-encoding maths right, building data that forces the model to use the whole window, and running training efficiently on GPUs. He argues that the open question is now evaluation: how to measure whether all that context produces capabilities people actually care about.

## Key points

- **Why Llama 3.** Huang says the main early criticism of Llama 3 was its 8,000-token context. He thought its 15 trillion training tokens would make it adaptable, and set one million tokens as a "North Star" goal after Google's Gemini launched with a million-token window. Crusoe supplied the compute on L40S GPUs.
- **Curriculum and theta.** He cites Meta research showing that gradually lengthening the context beats training at full length from the start. Llama 3's RoPE theta value was the key setting: increasing it lets the model interpolate positions rather than extrapolate. An empirical scaling formula held as they pushed the length up.
- **Systems work.** Huang says the team combined flash attention and ring attention, starting from Zhang Peiyuan's EasyContext PyTorch repo. They found the original Jax implementation hard to run on GPUs.
- **Data matters most.** Training used a filtered, concatenated version of Slim Pajamas followed by reformatted Ultrachat data, with GPT-4 rephrasing some chat examples. Huang warns against long examples where the last two hundred tokens contain the whole answer, because the model then never learns to look further back.
- **Benchmarks.** He calls needle in a haystack a primitive the model has to pass, and prefers the harder Ruler suite (multi-needle retrieval, variable tracking, common-word counting). He links the drop in quality at four million tokens to floating-point precision limits as theta grows very large.
- **Use cases.** Huang points to tracking state across long sessions (coding, investment management), many-shot prompting, and multimodal grounding in finance and healthcare.

## Quotes

> "So I actually think a lot of the moat is in the data pipeline." — Mark Huang

> "if you do not try out the tooling and some of the products out there, you are missing out on someone's compression algorithm." — Mark Huang
