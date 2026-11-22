---
title: "AI in healthcare, synthesizing dance moves, hardware acceleration"
date: 2018-09-03
show: practical-ai
episode: 12
url: "https://share.transistor.fm/s/cec26cda"
duration_min: 21
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "AI is reviving specialised chip design, refining standard architectures and reaching into medicine, while generated video is becoming hard to tell apart from real footage."
tags: ["ai-hardware", "healthcare-ai", "video-synthesis", "sequence-models", "learning-resources"]
source_transcript: "practical-ai/episodes/2018/09/2018-09-03-ai-in-healthcare-synthesizing-dance-moves-hardware-acceleration.md"
draft: false
---

## Thesis

In a news-and-resources episode, Chris Benson and Daniel Whitenack review how AI is changing the chip industry, a new sequence-to-sequence architecture, deep learning in cancer detection and drug design, and Berkeley's dance video synthesis. Benson's main takeaway is that AI is reversing the commoditisation of hardware, and that generated motion will soon be indistinguishable from real life.

## Key points

- **Chips are no longer a commodity.** Benson cites a VentureBeat article arguing that AI has created room for chip startups such as Nervana (now Intel), Graphcore and Cerebras to challenge NVIDIA, Intel, Google TPUs and others, and that the future may lie in application-specific integrated circuits (ASICs).
- **Hardware at the edge.** Whitenack points to Intel's Movidius neural compute sticks, USB "visual processing units" that run neural networks at low power on a Raspberry Pi or drone; Benson adds that they have opened AI to software developers without a data science background.
- **Sequence models without an encoder/decoder.** Whitenack describes a paper from Grenoble, with a PyTorch implementation, that merges the encoder and decoder into a single 2D convolutional layer; Benson notes how often CNNs now handle sequential data.
- **Deep learning in medicine.** Benson highlights Johns Hopkins research using deep learning on CAT scans to spot subtle tissue changes in pancreatic cancer, where only 7% of patients survive five years, potentially moving a third of diagnoses 4 to 12 months earlier. He also mentions ReLeaSE, a teacher/student reinforcement learning system for designing new molecules.
- **Synthetic dancing.** Whitenack shares Berkeley work that transfers a source dancer's moves onto other people; Benson says his six-year-old daughter did not realise the video was generated.
- **Learning resources.** Whitenack recommends a visual map of machine learning books; Benson recommends the Udemy course "Complete Guide to TensorFlow for Deep Learning with Python" (14 hours of video, about $10 at the time).

## Quotes

> "if there's anything we know about deep learning, it's pretty useful in high-dimensional spaces sometimes." — Daniel Whitenack

> "You'll be unable to distinguish generated motion from real life." — Chris Benson
