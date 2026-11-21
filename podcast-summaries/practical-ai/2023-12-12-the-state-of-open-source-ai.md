---
title: "The state of open source AI"
date: 2023-12-12
show: practical-ai
episode: 249
url: "https://share.transistor.fm/s/38b5e899"
duration_min: 43
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Casper da Costa-Luis"]
description: "Casper da Costa-Luis, a contributor to Prem's State of Open Source AI book, argues that practitioners should check licensing and openness carefully, fine-tune for real value, and ignore AGI hype."
tags: ["open-source-ai", "licensing", "fine-tuning", "embeddings", "llm-evaluation"]
source_transcript: "practical-ai/episodes/2023/12/2023-12-12-the-state-of-open-source-ai.md"
draft: false
---

## Thesis

Casper da Costa-Luis, a contributor to Prem's open source State of Open Source AI book, walks Daniel Whitenack and Chris Benson through the open AI ecosystem. He says "open" can cover very different things, so teams should check what is actually released and licensed. He also argues that commercial value comes from fine-tuning and simple, explainable techniques like embeddings, not from prompting a base model.

## Key points

- **A book written in the open.** About a dozen people wrote its 10 chapters. Filippo Pedrazzini settled the chapter structure, and da Costa-Luis wrote the licensing chapter. Comments run through GitHub via utterances, and da Costa-Luis says 10 more chapters are planned for a second volume.
- **Three kinds of openness.** He separates model weights, training data and output licensing. Weights are often the only part developers check. He says output rights depend on how the training data was licensed, and notes that the EU's proposed CRA and PLA could undermine no-warranty clauses.
- **Fine-tune for value.** In his view a pre-trained model is like a smart new hire who knows nothing about your company, so it has to be fine-tuned. His approach is to pick the best model on a current leaderboard for data like yours, then fine-tune it.
- **Embeddings over hype.** He recommends plain vector comparisons for finding related documents, because they are more explainable than letting an LLM paraphrase. He calls the choice of vector database a minor detail unless data volumes are huge. Whitenack replies that both have their use cases.
- **Ecosystem gaps.** Da Costa-Luis points to Apple M1/M2 laptops and WebGPU for local inference, crowded MLOps toolkits, and few desktop apps (LM Studio, GPT4All, Kobold). He sees multimodal models mostly as existing models glued together.
- **Hot takes and contributing.** He does not trust current models to be smarter than "a well-trained secretary" and rejects AGI talk. To newcomers he says that using a project already gets them most of the way to contributing a fix as a pull request.

## Quotes

> "if you're not doing some form of fine tuning, you're not producing anything of commercial value." — Casper da Costa-Luis

> "To me, embeddings are actually the important thing. The database that you happen to store your embeddings in is almost like a minor implementation detail." — Casper da Costa-Luis
