---
title: >-
  The AI Doctor Can See You Now, with Vivek Natarajan and Khaled Saab from
  Google
description: >-
  Google's Vivek Natarajan and Khaled Saab argue that careful data curation,
  self-play and rigorous evaluation can already turn current models into capable
  medical AI, with trust and evaluation as the bottleneck.
pubDate: '2024-06-22'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/the-ai-doctor-can-see-you-now-with-vivek-natarajan-and-khaled-saab-from-google/
youtube: 'https://www.youtube.com/watch?v=n_YEwSJAzXA'
durationMin: 97
hosts:
  - Nathan Labenz
guests:
  - Khaled Saab
  - Vivek Natarajan
tags:
  - healthcare-ai
  - medical-llms
  - synthetic-data
  - ai-evaluation
  - ai-policy
draft: false
---
## Thesis

Nathan Labenz walks Vivek Natarajan (Google Research) and Khaled Saab (Google DeepMind) through five Google medical AI papers. The guests argue that the gains come less from bigger base models and more from curated data, synthetic self-play and slow expert evaluation. They say a good general-practice AI doctor could probably be built on Gemini 1.5-class models, but deployment will move at the pace of clinical evidence and public trust. Labenz uses this to support his "adoption accelerationist, hyperscaling pauser" position.

## Key points

- **Old models, long shelf life.** Natarajan says the radiology report work on Flamingo, published in April 2022, reached near-clinical usefulness by fine-tuning on cleaned public MIMIC data. Reports edited by radiologists beat both the AI alone and the humans alone.
- **AMIE and self-play.** Built on PaLM 2, AMIE beat general practitioners in text-based diagnostic chats. The team had expected this to take two years; it took six months. Saab describes patient, doctor and critic agents using tens of thousands of generated patient profiles, with seven rounds of self-play. Natarajan warns that the comparison is not fully fair to doctors, who are not used to working by text.
- **Specialists over one generalist.** Natarajan says Med-Gemini is a family of models, not one model, because real deployments must balance latency, throughput and cost. Saab explains uncertainty-guided search: the model searches the web on the points where its sampled answers disagree.
- **Benchmarks lag capabilities.** Both guests say evaluation by panels of clinicians is the slow, necessary step. Labenz cites chest X-ray reports rated equivalent or better than radiologists' in 57% and 96% of normal cases, and 53% of CT reports judged clinically acceptable.
- **Cost and global access.** Labenz says cost matters less as Gemini 1.5 Pro costs $7 per million input tokens. Natarajan replies that Google designs for billion-user scale, and that a price of $500 a year rules out large parts of India and Africa.
- **Speed of trust.** Natarajan compares deployment to drug trials and notes low public trust in AI. Saab names hallucination as his main concern.

## Quotes

> "But as a matter of fact, as things stand today, we don't have enough data to say that these things are meaningfully improving the standard of care." — Vivek Natarajan

> "I think that we can do a lot with Gemini 1.5 to benefit humanity." — Khaled Saab
