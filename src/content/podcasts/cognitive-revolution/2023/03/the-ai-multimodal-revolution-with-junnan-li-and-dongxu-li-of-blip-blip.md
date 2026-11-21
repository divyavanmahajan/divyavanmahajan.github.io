---
title: The AI Multimodal Revolution with Junnan Li and Dongxu Li of BLIP & BLIP2
description: >-
  Salesforce researchers Junnan Li and Dongxu Li explain how BLIP-2 trains a
  small connector between frozen vision and language models, making multimodal
  AI far cheaper to build.
pubDate: '2023-03-09'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/the-ai-multimodal-revolution-with-junnan-li-and-dongxu-li-of-blip-blip2/
youtube: 'https://www.youtube.com/watch?v=zTr5vDjEy2I'
hosts:
  - Nathan Labenz
guests:
  - Junnan Li
  - Dongxu Li
tags:
  - multimodal
  - computer-vision
  - image-captioning
  - open-source
  - foundation-models
draft: false
---
## Thesis

Junnan Li and Dongxu Li of Salesforce Research argue that vision-language models no longer need to be pre-trained from scratch. BLIP-2 instead trains a small connector between an off-the-shelf frozen image encoder and a frozen large language model. Junnan Li says the key to making this work is a two-stage pre-training strategy, and the pair present it as a reusable method for connecting other modalities too.

## Key points

- **Original BLIP.** BLIP built on their earlier ALBEF work and combined three losses: contrastive learning, image captioning and image-text matching. They filtered out noisy web captions that did not match their images. Junnan Li says the largest model trained in about a week on 32 A100 GPUs, after a few dozen trial runs. Labenz notes the base captioning model had 18,976 Hugging Face downloads in the past month and that his company, Waymark, uses it without fine-tuning.
- **Efficiency.** Junnan Li says BLIP-2 has fewer than 200 million trainable parameters, fewer than BLIP, because the large models stay frozen. Dongxu Li contrasts this with Google's CoCa and PaLI, which he says used far more compute and data for comparable results.
- **Two-stage pre-training.** The connector (Q-Former) is first aligned with the vision model, and only then attached to the language model. Junnan Li says skipping the first stage made performance much worse and led to catastrophic forgetting.
- **Injected embeddings.** The connector passes 32 vectors of 768 dimensions into the language model as soft prompts. Junnan Li says these do not map to human-readable text, but the language model can still use them.
- **Practical advice.** Dongxu Li recommends trying the web-pretrained BLIP-2 captioner before fine-tuning. Fine-tuning is supported in their LAVIS library, and Junnan Li says a V100 should handle the smallest BLIP-2 model.
- **Openness and safety.** Junnan Li says almost all of their research is open-sourced to make pre-training more accessible. Dongxu Li describes an ethics team that reviews demos, and Junnan Li points to their OmniXAI explainability library.

## Quotes

> "But for the vision-language domain, people are still doing pre-training from scratch. That's kind of puzzling for me." — Junnan Li

> "I would still consider them to be quite artificial and even stupid a lot of times." — Junnan Li
