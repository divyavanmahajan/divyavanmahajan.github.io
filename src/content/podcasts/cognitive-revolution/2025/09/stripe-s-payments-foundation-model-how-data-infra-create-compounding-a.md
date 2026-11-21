---
title: >-
  Stripe's Payments Foundation Model: How Data & Infra Create Compounding
  Advantage, w/ Emily Sands
description: >-
  Stripe treats payments as their own modality, turning transaction sequences
  into reusable embeddings that sharpen fraud detection and feed a data flywheel
  competitors will struggle to match.
pubDate: '2025-09-25'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/stripes-payments-foundation-model-how-data-infra-create-compounding-advantage-w-emily-sands/
youtube: 'https://www.youtube.com/watch?v=zhUrizDKL5I'
durationMin: 81
hosts:
  - Nathan Labenz
guests:
  - Emily Sands
tags:
  - foundation-models
  - fraud-detection
  - payments
  - embeddings
  - agentic-commerce
draft: false
---
## Thesis

Emily Sands, head of data and AI at Stripe, explains how Stripe built a domain-specific transformer that turns each payment, and the recent history of the card, device and merchant around it, into a dense embedding. Exposed as a shared feature, it improves Stripe's hundreds of existing models. Nathan Labenz argues the bigger lesson is strategic: proprietary modalities plus scale give incumbents a compounding advantage that may be close to unassailable.

## Key points

- **Payments as a modality.** Sands says Stripe sees about 50,000 new transactions a minute, enough density that payments start to behave like language. A custom tokenizer compresses the structured signals; v1 used BERT-style masked modelling plus similarity fine-tuning, and v1.5 moves to encoder-decoder setups with compressed sequence memory.
- **Card testing win.** The first application treated sequences "like frames in a movie". Detection of card testing at large merchants rose from 59% to 97%. Sands reveals the first step was internal: model-generated labels were checked by human experts and fed to the existing classifier.
- **Modular deployment.** Embeddings live in Shepherd, Stripe's feature platform, so teams can add them to existing models; a merchant intelligence service does the same for merchant data.
- **Iterating faster than fraudsters.** Sands cites e-commerce fraud up about 15% while disputes on Stripe fell 17%. Tools include dynamic risk thresholds, Adaptive 3DS as a "soft block" (a 30% average fraud drop for US users), rules blended with model scores, and LLM-as-judge to grade labels where no ground truth exists.
- **Stripe as system of record.** With six nines of uptime and billing APIs handling 100,000 events per second, Sands advises startups not to mirror Stripe data. Lovable, which reached $100 million ARR in eight months, is her example.
- **Flywheel and AI bets.** Volume of $1.3 trillion growing 38% a year matters less than the loop of better models, more value and more transactions. Two thirds of the Forbes AI 50 run on Stripe; Sands rules out building a frontier model for now.

## Quotes

> "Once you have a shared embedding, then spinning up a new model becomes a weekend project, not a quarter project" — Emily Sands

> "The real advantage, I think, isn't the raw size, though. To your comment earlier, it's more the compounding loop." — Emily Sands
