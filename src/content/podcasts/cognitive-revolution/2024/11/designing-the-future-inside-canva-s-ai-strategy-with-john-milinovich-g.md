---
title: >-
  Designing the Future: Inside Canva's AI Strategy with John Milinovich, GenAI
  Product Lead at Canva
description: >-
  Canva's John Milinovich argues that AI design tools should embed automation
  and augmentation at the point of need, moving users from object-level to
  concept-level editing while keeping humans in control.
pubDate: '2024-11-23'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/designing-the-future-inside-canvas-ai-strategy-with-john-milinovich-genai-product-lead-at-canva/
youtube: 'https://www.youtube.com/watch?v=onAFbxq21Ck'
durationMin: 83
hosts:
  - Nathan Labenz
guests:
  - John Milinovich
tags:
  - generative-ai
  - design-tools
  - ai-evaluation
  - fine-tuning
  - ai-product-development
draft: false
---
## Thesis

John Milinovich, head of generative AI product at Canva, tells Nathan Labenz that AI is moving design from object-level to concept-level manipulation, just as Canva once moved it from pixels to objects. He argues for an embedded strategy that puts AI at the point of need, with rigorous human-judged evaluation, because human taste and control over the output remain essential.

## Key points

- **Automation versus augmentation.** Milinovich splits AI features into automation, which removes tedious work (background remover, Magic Switch, Magic Sort), and augmentation, where the user stays in the driver's seat. Canva's research found a third of users want to spend more time designing, a third less and a third the same.
- **Scale of use.** Canva's AI features have been used over 10 billion times across 200 million-plus users. He cites Expedia cutting an eight-hour workflow to 20 minutes with Magic Switch and Magic Resize. Canva runs over 100 of its own models in production.
- **Evaluation for taste.** Since no LMSYS-style arena exists for design, Canva writes custom evaluation rubrics and trains professional designers to score competing generators on five to ten dimensions such as visual quality and prompt adherence. From Pinterest's 4 billion pins he learned that predicting low quality is easy but predicting high quality is hard.
- **Context before fine-tuning.** Diffusion-model LoRAs can capture a style with tens of examples, but Milinovich says language models overfit easily; nine times out of ten, 30,000-50,000 tokens of examples in context beat fine-tuning. Fine-tuning suits classification, not style.
- **Engineering habits.** The team's order is "make it work, make it good, make it fast, make it cheap", citing a roughly 95% drop in inference costs in a year. He stresses problem orientation over solution orientation, using former Canva CTO Dave Herndon's hoverboard analogy.
- **Architecture and the application layer.** Milinovich, who studied architecture, expects AI first to help architects win bids by visualising options. He believes value will shift from infrastructure to applications and looks for founders with deep customer focus in under-digitised industries.

## Quotes

> "a lot of folks start with like vibe driven development, but you've really got to get to this kind of like eval based approach as fast as you possibly can." — John Milinovich

> "our development flow is just, like, make it work, make it good, make it fast, and then make it cheap." — John Milinovich
