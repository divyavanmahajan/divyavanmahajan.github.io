---
title: "The Virtual Biopsy Revolution with Dr. Tanishq Mathew Abraham (Part 2 of 2)"
date: 2023-06-22
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/the-virtual-biopsy-revolution-with-dr-tanishq-mathew-abraham-part-2-of-2/"
youtube: "https://www.youtube.com/watch?v=Vpt9z3XwoFc"
hosts: ["Nathan Labenz"]
guests: ["Dr. Tanishq Mathew Abraham"]
description: "Tanishq Mathew Abraham shows how an older CycleGAN model, trained on a small, carefully prepared dataset, turns a slow lab diagnostic workflow into a near-instant virtual one."
tags: ["medical-ai", "generative-models", "gans", "data-centric-ai", "small-data"]
source_transcript: "cognitive-revolution/episodes/2023/06/2023-06-22-the-virtual-biopsy-revolution-with-dr-tanishq-mathew-abraham-part-2-of.md"
draft: false
---

## Thesis

Tanishq Mathew Abraham, founder of MedARC, argues that useful medical AI does not need huge datasets or the newest architectures. His paper with a Georgia Tech lab pairs a new imaging device with a CycleGAN that produces "virtual" versions of standard lab images, cutting a workflow of about 8 hours down to roughly a second. He credits careful data preparation more than the model itself. Nathan Labenz frames the result as a large speed-up in how much diagnostic work can be done.

## Key points

- **Before and after.** Labenz describes the current process as an 8-hour, destructive lab workflow. Abraham notes that this is too slow to use during surgery, where surgeons want quick guidance on whether they have finished.
- **Small data.** The training set was about 2,358 new-device tiles and 1,737 conventional tiles, each 512 x 512 pixels, taken from a few subjects. Abraham says medical datasets are hard to scale, especially for new technology that is not yet used in clinics.
- **Old model wins.** Abraham says CycleGAN, from around 2016-2017, worked out of the box with limited data. In his tests, newer contrastive-learning and diffusion approaches did worse. Because paired examples were not available, the model's cycle-consistency step is what keeps the content intact.
- **Data-centric fixes.** A key fix was simply inverting the input images so that their features matched the target images. Training took a few hours on a single A100.
- **Path to the clinic.** Abraham lists the steps still needed: more specimens and more tumour types, hardware reliability, and clinical trials. He says the current system leaned towards false positives rather than missing tumours.
- **Wider view.** Abraham, a part-time Stability AI employee, says Stability provides compute without exclusivity. He points out that UNet and CLIP-style methods came from medical research, and he expects AI to be used with doctors in the loop rather than replacing them.

## Quotes

> "Having the most advanced models is not gonna do you any good if you don't have high quality data." — Dr. Tanishq Mathew Abraham

> "I think AI is one of that unique fields where if something's 6 months old, it's already ancient." — Dr. Tanishq Mathew Abraham
