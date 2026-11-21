---
title: "Google’s Multimodal Med-PaLM with Vivek Natarajan and Tao Tu"
date: 2023-08-23
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/googles-multimodal-med-palm-with-vivek-natarajan-and-tao-tu/"
youtube: "https://www.youtube.com/watch?v=2RMpqheYKlw"
hosts: ["Nathan Labenz"]
guests: ["Vivek Natarajan", "Tao Tu"]
description: "Google's Med-PaLM M shows one set of model weights can handle text, medical imaging and genomics, though vision capacity, validation and regulation remain the bottlenecks."
tags: ["medical-ai", "multimodal-models", "google", "fine-tuning", "healthcare"]
source_transcript: "cognitive-revolution/episodes/2023/08/2023-08-23-google-s-multimodal-med-palm-with-vivek-natarajan-and-tao-tu.md"
draft: false
---

## Thesis

Vivek Natarajan and Tao Tu describe Med-PaLM M, a generalist biomedical model that uses a single set of weights across clinical text, dermatology, pathology, chest X-ray, mammography and genomics. They argue that medicine is inherently multimodal, so useful clinical AI must be too, and that progress now comes from combining many known training tricks on top of Google's infrastructure. Both call the system a proof of concept: the vision encoder, clinical validation and regulation still limit it.

## Key points

- **Built on PaLM-E.** Tu explains the model started from PaLM-E, a vision-language model originally built for robotics, with no medical pre-training. Genomic data was turned into images using the encoding from Google's DeepVariant variant caller.
- **Scale hit a vision bottleneck.** Of the 12B, 84B and 562B models, the largest was not clearly better than the middle one. Natarajan and Tu attribute this to the language model growing while the ViT encoder stayed fixed and had seen few medical images.
- **Cheap fine-tuning, fast iteration.** Natarajan estimates about 1 million training samples and 1-10% of base-model compute. Tu ran around 300 experiments in four months; a 12B run took a couple of hours, a 562B run took weeks.
- **Full fine-tuning beat frozen layers.** Tu found that freezing the language model converged more slowly, and Natarajan says full end-to-end tuning also beat LoRA in their experience.
- **Zero-shot tuberculosis detection.** Tu describes the model locating a cavitary TB lesion on a chest X-ray, although TB was not a training label. Natarajan notes the 8B model could not do this. Tu calls "emergent" a buzzword and treats it as in-distribution interpolation.
- **Regulation and access.** Natarajan says rules for software as a medical device assume single-task systems and do not fit generalist models. He grounds his motivation in rural India, where seeing a doctor could mean walking 30 to 40 miles.

## Quotes

> "So there's not a lot of, I would say, secret new knowledge. It's all about putting these tricks together in the right way, the right format." — Vivek Natarajan

> "It's no longer science fiction to think that that is possible." — Vivek Natarajan
