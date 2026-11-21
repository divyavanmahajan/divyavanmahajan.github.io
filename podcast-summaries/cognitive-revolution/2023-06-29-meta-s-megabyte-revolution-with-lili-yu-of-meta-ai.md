---
title: "Meta's MEGABYTE Revolution with Lili Yu of Meta AI"
date: 2023-06-29
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/metas-megabyte-revolution-with-lili-yu-of-meta-ai/"
youtube: "https://www.youtube.com/watch?v=8EIqHFFdccA"
hosts: ["Nathan Labenz"]
guests: ["Lili Yu"]
description: "Meta AI researcher Lili Yu explains MEGABYTE, a multiscale transformer that models million-byte sequences directly, aiming to remove tokenizers from text, image and audio models."
tags: ["tokenization", "transformers", "multimodal", "model-architecture", "open-source"]
source_transcript: "cognitive-revolution/episodes/2023/06/2023-06-29-meta-s-megabyte-revolution-with-lili-yu-of-meta-ai.md"
draft: false
---

## Thesis

Lili Yu, research scientist at Meta and author of the MEGABYTE paper, argues that tokenizers cause real problems for text, are lossy for images and audio, and that removing them requires a new architecture that can handle very long byte sequences. MEGABYTE does this by splitting bytes into patches, running a large global transformer over patch embeddings and small local transformers that predict bytes within each patch. Whether it can replace tokenized models, she says, depends on scaling it up.

## Key points

- **Why drop tokens.** Yu lists BPE problems with spaces, prompt tricks and out-of-domain text such as biology, chemistry or code. Image tokenizers like VQGAN are lossy, and a 600 by 600 image is already about 1,000,000 bytes.
- **Global and local models.** Patches of bytes are concatenated into one vector for the global model, which therefore sees a much shorter sequence. Its outputs feed local models that predict each byte; padding and causal masking let every byte contribute a loss during training. The 256-value byte vocabulary uses an embedding size of only 32.
- **Choosing patches.** Patch size is chosen by heuristic: 8 bytes for text, close to the roughly 4 bytes per BPE token, and 8x8 or 16x16 for images. Yu says results were stable across a wide range.
- **Results.** In compute-matched runs against a standard Transformer and Perceiver AR on bytes, MEGABYTE performed best. On PG19 she converts about 0.8 bits per byte to a word-level perplexity of about 42 for comparison with tokenized work.
- **What comes next.** Meta is training at LLaMA-like compute to test whether bytes can match tokens. Yu expects gains in code and maths, noting an in-house tokenizer from Meta's InCoder work produced 30% fewer tokens on code than GPT-2's.
- **Openness and policy.** Yu says Meta's research lab keeps open science as its goal, with responsible AI reviews before any release, and she sees researchers sorting between open and closed labs. On the US-China question she says AI policy is a worldwide issue, citing recent Israeli and Japanese rules on training data.

## Quotes

> "We are not thinking about now we have ChatGPT, now we have Midjourney. Why can't we have a unified model that's being able to do everything?" — Lili Yu

> "That just tells you a GPT-2 tokenizer on code is not efficient. It's 30% less efficient." — Lili Yu
