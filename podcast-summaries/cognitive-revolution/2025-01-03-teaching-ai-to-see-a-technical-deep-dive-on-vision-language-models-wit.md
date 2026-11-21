---
title: "Teaching AI to See: A Technical Deep-Dive on Vision Language Models with Will Hardman of Veratai"
date: 2025-01-03
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/teaching-ai-to-see-a-technical-deep-dive-on-vision-language-models-with-will-hardman-data-sci/"
youtube: "https://www.youtube.com/watch?v=mLgyZ5GauhM"
duration_min: 234
hosts: ["Nathan Labenz"]
guests: ["Will Hardman"]
description: "Vision language models have advanced fast through better data curation, staged pre-training and high-resolution tiling, but benchmarks like BLINK show basic visual perception is still unsolved."
tags: ["vision-language-models", "multimodal-ai", "benchmarks", "model-architecture", "training-data"]
source_transcript: "cognitive-revolution/episodes/2025/01/2025-01-03-teaching-ai-to-see-a-technical-deep-dive-on-vision-language-models-wit.md"
draft: false
---

## Thesis

Will Hardman walks Nathan Labenz through how vision language models (VLMs) are built, from the vision transformer and CLIP to InternVL, Llama 3-V and NVIDIA's NVLM. His argument is that most recent progress comes from training recipes and data quality rather than any one architecture: staged pre-training, interleaved image-text data, synthetic augmentation and high-resolution tiling. Strong scores on reasoning benchmarks like MMMU hide weak perception, which the BLINK benchmark exposes.

## Key points

- **Two ways to connect vision to language.** Hardman contrasts cross-attention (DeepMind's Flamingo, Llama 3-V), which keeps the language model frozen, with the more common autoregressive approach (LLaVA, Qwen-VL, InternVL), where projected visual tokens go straight into the decoder. Hugging Face's IDEFICS work found cross-attention adds about 25% trainable parameters against roughly 10% for a projection.
- **Synthetic instruction data.** He credits LLaVA with using text-only GPT-4 and COCO captions with bounding boxes to generate conversations "as though" the model could see the image. That made instruction tuning possible when no such data existed.
- **Staged, efficient pre-training.** Qwen-VL moves up in data quality and unfreezes more parameters at each stage. InternVL 2.5 aligns its vision encoder to progressively larger language models and needs about 120B tokens, against 1.4T for Qwen2-VL.
- **Vision can lift text skills.** NVLM's hybrid model edged out the other two variants on MMMU validation. With a curated text-only SFT set it also improved on text-only math and coding, which Hardman takes as a small sign that multimodality helps without proving it is needed.
- **Perception lags reasoning.** BLINK covers 14 tasks humans solve "in a blink". Models do well on art style and forensics but poorly on relative reflectance, IQ-style puzzles and counting, and GPT-4o regressed on counting and jigsaw tasks compared with GPT-4V. Apple's AIMv2 tests generative pre-training of the vision encoder as one fix.
- **Current leaders.** Hardman's late-2024 snapshot has o1 top on MMMU at 78%, with Claude 3.5 Sonnet (new) and InternVL 2.5 near 70%. Labenz points out that the Shanghai lab basically matches Anthropic.

## Quotes

> "it feels to me just like tipping the image into a blender, pressing on, and then somehow when it's finished training, the important features are retained" — Will Hardman

> "we're going up the quality scale, down the size, and unfreezing more parameters as we go." — Will Hardman
