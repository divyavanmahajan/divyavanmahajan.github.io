---
title: GenAI risks and global adoption
description: >-
  Citadel AI's founders argue that taking LLM proofs of concept into production
  requires testing and monitoring built on custom LLM-as-a-judge metrics
  calibrated to human judgment.
pubDate: '2025-08-27'
show: practical-ai
episode: 327
url: 'https://share.transistor.fm/s/522b45c8'
durationMin: 43
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Rick Kobayashi
  - Kenny Song
tags:
  - ai-safety
  - llm-evaluation
  - llm-as-a-judge
  - japan
  - monitoring
draft: false
---
## Thesis

Rick Kobayashi (CEO) and Kenny Song (CTO) of Citadel AI argue that enterprises moving LLM proofs of concept into production need both pre-deployment testing and live monitoring. Without ground truth, the practical approach is LLM-as-a-judge metrics calibrated against human annotations. Kobayashi also describes Japan as behind the US on AI development but ahead in everyday GenAI adoption.

## Key points

- **Japan's adoption.** Kobayashi estimates Japan is one to two years behind the US on technology, but its use of GenAI applications is among the most advanced. He links this to anime such as Doraemon making talking machines familiar. He describes Japanese regulation as a soft, guidance-based middle path between the EU and the US, with firms more worried about reputational risk than security risk.
- **Financial customers.** According to Kobayashi, banks, insurers and securities firms are Citadel's largest Japanese customers. They deploy LLMs in contact centers, where callers can wait thirty minutes, while already being supervised by financial regulators.
- **From Google Brain to Citadel.** Song worked on TensorFlow and TFX at Google Brain from 2017 to 2020. The company started in 2020 with adversarial attacks, found little commercial interest, moved to monitoring predictive models, and shifted to LLMs about two years ago.
- **Metrics without ground truth.** Song says teams should have humans annotate 50 to 100 examples, then iterate on LLM-judge metrics until they correlate with that judgment. The same metric can then drive testing, monitoring and a production firewall, such as checking whether a refund chatbot follows company policy.
- **Testing and monitoring together.** Kobayashi says Radar features are being merged into the Lens product and recommends starting with testing. Song notes that real users try prompt injections nobody tested. Their open-source library LangCheck, launched around October 2023, targets non-English text as well as English.

## Quotes

> "In some cases, in Japan, like a chatbot or kind of, say, new technology might be a kind of friend in a sense." — Rick Kobayashi

> "You need testing before deployment, and you need monitoring after deployment." — Kenny Song
