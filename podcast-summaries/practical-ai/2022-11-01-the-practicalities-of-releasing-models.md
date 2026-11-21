---
title: "The practicalities of releasing models"
date: 2022-11-01
show: practical-ai
episode: 199
url: "https://share.transistor.fm/s/36181d91"
duration_min: 37
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "Daniel Whitenack describes writing a Responsible AI License for his team's language models, then the hosts discuss expressive synthetic voices and graph neural networks."
tags: ["model-licensing", "responsible-ai", "speech-synthesis", "graph-neural-networks", "low-resource-languages"]
source_transcript: "practical-ai/episodes/2022/11/2022-11-01-the-practicalities-of-releasing-models.md"
draft: false
---

## Thesis

Daniel Whitenack argues that releasing models responsibly is a practical exercise, not just a debating topic: models sit between software and data licences, and RAIL licences let a publisher attach usage restrictions. He walks through how his SIL team did this for benchmark models tied to an EMNLP paper, before he and Chris Benson turn to synthetic voices and graph neural networks.

## Key points

- **How RAIL licences work.** Whitenack explains that Responsible AI Licenses (licenses.ai) contain normal copyright, patent and warranty terms, all subject to a restricted-use clause at the end. Stable Diffusion's Open RAIL licence, for example, bars misinformation and harm to others.
- **SIL's restrictions.** The team trained on books from SIL's Bloom Library written by local language communities. Whitenack says they restricted commercial use, so big companies cannot profit without benefit returning to those communities, and banned uses that discriminate against indigenous peoples, citing the UN statement on indigenous people.
- **Data licences versus models.** Most Bloom books carry Creative Commons licences. By the team's reading, models trained on them were not derivative works, but Whitenack says they matched the original restrictions in good faith anyway.
- **Expressive synthetic voice.** Coqui opened a waitlist for a voice studio that adjusts emotion, pitch and phonemes and mixes voices; Benson is number 6,466 in line. Whitenack sees value for marginalised language communities that cannot safely put a real speaker's voice on 100 hours of content. Benson predicts video-call providers will offer live translation with lip matching.
- **Graph neural networks.** Prompted by an NVIDIA blog post, Whitenack describes message passing, which relates a data point to an arbitrary number of neighbours, unlike convolutions or transformers. He contrasts subword tokenisation in large language models with graph structures that encode syntax, and mentions Pinterest's Pixie recommender.
- **Learning resource.** Whitenack recommends Zak Jost's courses at graphneuralnets.com, whose basics module is free.

## Quotes

> "In our case, the models that we trained off of this data, whether it's surprising or not, according to how we read those were not derivative works." — Daniel Whitenack

> "I think the thing we would lose is that there is the element of the unexpected in our conversations often." — Chris Benson
