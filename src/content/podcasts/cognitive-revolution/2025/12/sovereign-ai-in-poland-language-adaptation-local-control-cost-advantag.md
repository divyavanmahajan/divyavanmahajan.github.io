---
title: >-
  Sovereign AI in Poland: Language Adaptation, Local Control & Cost Advantages
  with Marek Kozlowski
description: >-
  Marek Kozlowski argues Poland can keep AI sovereignty by adapting small open
  models to Polish language and culture, matching far larger frontier models on
  local tasks at lower cost.
pubDate: '2025-12-06'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/sovereign-ai-in-poland-language-adaptation-local-control-cost-advantages-with-marek-kozlowski/
youtube: 'https://www.youtube.com/watch?v=KVos1kBh234'
durationMin: 90
hosts:
  - Nathan Labenz
guests:
  - Marek Kozlowski
tags:
  - sovereign-ai
  - small-language-models
  - language-adaptation
  - eu-ai-act
  - on-premise-ai
draft: false
---
## Thesis

Marek Kozlowski, head of the AI Lab at Poland's National Information Processing Institute, leads PLLuM (Polish Large Language Models). He argues that "localized" models, adapted to a language or domain, can be an order of magnitude smaller than closed frontier models while matching them on linguistic and cultural quality, and that building them preserves national competence, control and privacy. Host Nathan Labenz probes how this holds up if frontier scaling keeps delivering.

## Key points

- **English and Chinese dominate training data.** Kozlowski says 90%+ of frontier training data is English and Chinese, with Polish around 1% or less. His team's PLCC benchmark measures Polish linguistic and cultural competence, and he reports some newer Claude and GPT releases scoring lower than their predecessors.
- **Regulation shapes the data.** He says the EU AI Act and Polish copyright rules can remove around 80% of usable training data, a bigger constraint than any value "constitution"; PLLuM has no such constitution yet. Licences for models such as Kimi exclude EU use.
- **Language adaptation, not training from scratch.** After deduplication and filtering PLLuM had roughly 200 billion Polish tokens, short of the ~1 trillion he says stable pre-training needs, so the team continues pre-training Llama and Mistral base models, then applies SFT and preference learning with hundreds of in-house annotators.
- **Small fine-tuned models for business.** Kozlowski says 1,000-3,000 instructions per use case let a small SFT model match few-shot cloud LLMs on-premise. Domain adaptation for PKO BP worked, but he puts the threshold at about 10 billion clean tokens (30-40 billion raw).
- **Public, not commercial, goals.** PLLuM is funded by the Ministry of Digital Affairs through a consortium of eight institutes and universities, prioritising openness, legal compliance and public-sector chatbots over market share.
- **Plateau and centralisation.** Kozlowski sees GPT-5 as a modest step over GPT-4 and notes that fast results favour centralisation, while federated learning is not yet practical because firms rarely know what data they hold.

## Quotes

> "I believe that the AI agentic revolution will be based on the small localized models." — Marek Kozlowski

> "sometimes it's better to have the competences to build even something a little bit worse, but have the ability to do it, then don't have this." — Marek Kozlowski
