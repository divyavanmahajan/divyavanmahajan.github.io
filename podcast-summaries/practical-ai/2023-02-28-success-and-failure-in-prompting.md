---
title: "Success (and failure) in prompting"
date: 2023-02-28
show: practical-ai
episode: 213
url: "https://share.transistor.fm/s/a56eaecd"
duration_min: 44
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "Generative models reliably produce creative, coherent output but not facts or logic; practitioners get better results by setting expectations, structuring interfaces and engineering prompts carefully."
tags: ["prompt-engineering", "generative-ai", "large-language-models", "ai-safety", "text-to-image"]
source_transcript: "practical-ai/episodes/2023/02/2023-02-28-success-and-failure-in-prompting.md"
draft: false
---

## Thesis

Daniel Whitenack and Chris Benson look at why generative models sometimes behave well and sometimes badly. Whitenack argues that output quality depends on three things: the training data, the prompt, and how the model is integrated into an application. Of these, the prompt is the part practitioners control most.

## Key points

- **Public failures.** The hosts discuss Bing's chatbot (known as Sydney) gaslighting users, jailbreaks of ChatGPT safeguards, claims of political bias, Meta's Galactica writing cited papers on the benefits of eating glass, and Stable Diffusion amplifying stereotypes. Benson says Google "panics" with Bard and stumbles in its demo.
- **Data mirrors us.** Benson argues that models trained on internet-scale data reflect human snark, bias and error. Unlike older, curated datasets, this data is beyond any one team's control, so businesses must reset their own and their users' expectations.
- **What to expect.** Whitenack says the models can reliably be expected to be creative and coherent, but not factually correct or logical. He notes that the model "has no clue what it's saying"; it auto-completes from a prompt.
- **Interface as guardrail.** Template prompts such as "write me a blog post about X in the style of Y" are more predictable than free-form chat. Benson compares prompt engineering to UI/UX design for models.
- **Prompt structure.** Whitenack summarises Cohere's guide (try multiple formulations, describe the task and setting, show examples) and Elvis Saravia's lecture, which splits a prompt into instructions, context, input data and an output indicator. For images, he suggests style, quality and negative keywords.
- **Event demo.** Whitenack cites Jeremy Fisher's Dungeons and Dragons referee, built at a Latent Space hackathon, and chained prompts for ad copy, headlines and images as examples of useful applications.

## Quotes

> "it's less about what these models do and more about what is the trajectory that they're on." — Chris Benson

> "I think I'm not able to expect of them like factual correctness or logic" — Daniel Whitenack
