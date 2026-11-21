---
title: "Your Model, Your Weights with MosaicML's Abhi Venigalla and Jonathan Frankle"
date: 2023-06-16
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/your-model-your-weights-with-mosaicmls-abhi-venigalla-and-jonathan-frankle/"
youtube: "https://www.youtube.com/watch?v=5_qAuSQGLHQ"
hosts: ["Nathan Labenz"]
guests: ["Jonathan Frankle", "Abhi Venigalla"]
description: "MosaicML's Jonathan Frankle and Abhi Venigalla argue that cheap, easy training makes proprietary data the moat again, letting enterprises own custom models instead of renting APIs."
tags: ["custom-llms", "enterprise-ai", "model-training", "inference", "long-context"]
source_transcript: "cognitive-revolution/episodes/2023/06/2023-06-16-your-model-your-weights-with-mosaicml-s-abhi-venigalla-and-jonathan-fr.md"
draft: false
---

## Thesis

MosaicML chief scientist Jonathan Frankle and research scientist Abhi Venigalla argue that almost every company has proprietary data worth turning into a model it owns. By making training cheap and routine, Mosaic aims to make data, not training difficulty, the source of advantage again. They also cover their new inference service and the MPT-7B StoryWriter model with a 65k-token context window.

## Key points

- **Everyone is a customer.** Frankle says customers range from AI-first startups such as Replit, which trained a 3 billion parameter code model, to large "boring" enterprises with valuable data. Venigalla says model sizes run from under a billion to well beyond single-digit billions of parameters.
- **Extraction and summarisation.** Frankle says the main enterprise workloads are extracting and summarising information, with chat a minority. Venigalla is more interested in enabling things that could not be done before, such as scalable support for users of open-source repos.
- **Customisation, control, cost.** Frankle says some customers bring several hundred billion to over a trillion tokens, train inside their own cloud VPC or on-prem, and own the weights. He calls "GPT-4 or our own model" a false dichotomy; many customers use both.
- **Data mix and cleanliness.** Frankle dislikes the term fine-tuning for 200 billion token runs and says open-source data must be mixed in to avoid catastrophic forgetting. Your model is what you put into it, he says, so data cleaning matters.
- **Inference economics.** The guests explain that the starter tier is priced per token (about 1 cent per 20,000 tokens for MPT-7B Instruct, per Labenz), while custom models run on dedicated capacity priced per GPU hour, on any cloud, with Oracle as a preferred partner.
- **ALiBi and long context.** The guests explain that ALiBi replaces positional embeddings with a fixed, stretchable attention bias. Fine-tuning at 65k raised work per token about 4x, and inference can extend to roughly 2x the trained length before quality degrades.

## Quotes

> "So it's almost making ML training boring again. We're bringing it back to a position where actually your proprietary data is what makes your model so much better." — Abhi Venigalla

> "It is customization, control, and cost, and I love that they all start with C." — Jonathan Frankle
