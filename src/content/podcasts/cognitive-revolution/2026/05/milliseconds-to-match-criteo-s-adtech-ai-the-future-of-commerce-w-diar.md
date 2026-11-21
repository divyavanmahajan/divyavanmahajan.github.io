---
title: >-
  Milliseconds to Match: Criteo's AdTech AI & the Future of Commerce w/ Diarmuid
  Gill & Liva Ralaivola
description: >-
  Criteo's CTO and AI lab head explain how ad recommendation runs in
  milliseconds on pre-computed embeddings, and why fresh commerce data should
  complement LLMs in chat-based shopping.
pubDate: '2026-05-09'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/milliseconds-to-match-criteo-s-adtech-ai-the-future-of-commerce-w-diarmuid-gill-liva-ralaivola/
youtube: 'https://www.youtube.com/watch?v=7uXpqnkUE94'
durationMin: 87
hosts:
  - Nathan Labenz
guests:
  - Diarmuid Gill
  - Liva Ralaivola
  - Alex Persky-Stern
tags:
  - advertising
  - recommendation-systems
  - embeddings
  - privacy
  - commerce
draft: false
---
## Thesis

Diarmuid Gill (CTO) and Liva Ralaivola (VP of Research and head of the AI lab) at Criteo argue that personalised advertising is a fair value exchange that keeps the open web free, provided it is transparent and easy to opt out of. Technically, the hard part is speed: picking a product and a bid in milliseconds, which Criteo solves with offline foundation models and cached embeddings. Host Nathan Labenz and Waymark CEO Alex Persky-Stern probe how this changes as LLMs and agents take over product discovery.

## Key points

- **From sparse features to embeddings.** Ralaivola describes the shift from hand-crafted sparse vectors of 2^12 or more inputs feeding logistic regression to a few hundred learned features from Criteo's DeepKNN, and now transformer-based models. The AI lab was created in 2018 to bring in deep learning.
- **Bidding under time pressure.** Gill says each bid draws on roughly 150 features to estimate click and purchase likelihood. The system runs billions of times a day and up to about 300% of normal load around Black Friday.
- **Shared foundation models.** Like Stripe's payments model, Criteo is building three or four foundation models whose product and user-timeline embeddings act as a "warm start" for other teams. Similar vectors yield both recommendations and audiences.
- **OpenAI partnership.** Gill argues that LLM knowledge goes stale, while Criteo ingests catalogues from 17,000 retailers daily, so a hybrid architecture can give accurate prices and stock inside ChatGPT. Ralaivola says MCP makes this integration easier.
- **Europe as an advantage.** Both reject the idea that AI cannot be done in Europe, citing French mathematical training and Mistral. Criteo applies its GDPR-compliant stack globally and publishes its 50-person lab roster and research.
- **Creative and the future.** Generative creative is too slow for real-time rendering, so assets are generated offline and assembled at runtime. Gill expects audience-level rather than one-to-one personalisation; Ralaivola imagines users asking their assistants to show them a set number of ads.

## Quotes

> "we don't want to do anything that's creepy because if it's creepy, it won't work, right?" — Diarmuid Gill

> "You should not strip the user away from his right to decide." — Liva Ralaivola
