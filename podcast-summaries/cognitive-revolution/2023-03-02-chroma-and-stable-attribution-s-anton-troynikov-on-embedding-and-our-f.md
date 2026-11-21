---
title: "Chroma and Stable Attribution 's Anton Troynikov on embedding and our future with AI"
date: 2023-03-02
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/chroma-and-stable-attribution-s-anton-troynikov-on-embedding-and-our-future-with-ai/"
youtube: "https://www.youtube.com/watch?v=ogy37CdIljg"
hosts: ["Nathan Labenz"]
guests: ["Anton Troynikov"]
description: "Anton Troynikov argues that embeddings are the AI-native way to store data, that machine learning still lacks engineering principles, and that AI's real risks resemble past media shocks."
tags: ["embeddings", "vector-databases", "retrieval", "generative-images", "ai-safety"]
source_transcript: "cognitive-revolution/episodes/2023/03/2023-03-02-chroma-and-stable-attribution-s-anton-troynikov-on-embedding-and-our-f.md"
draft: false
---

## Thesis

Anton Troynikov, co-founder of Chroma, argues that embeddings let applications do geometric operations on meaning, which makes an embedding store the natural storage layer for LLM apps. He uses his Stable Attribution project to argue that machine learning is still in its "early aviation" phase, working on intuition rather than engineering principles. He rejects AI doom arguments but worries about social destabilisation like that seen after earlier media technologies.

## Key points

- **Chroma as a storage layer.** Troynikov says existing vector stores were built for web-scale recommender and search workloads and lacked the transactional, developer-friendly features LLM apps need. Chroma launched the previous Tuesday as a day-one LangChain integration partner. Labenz cites OpenAI pricing of about $40 to embed 100,000 pages.
- **Approximate search trade-offs.** Exact nearest-neighbour search grows quadratically, which Troynikov says starts to hurt past about 10,000 vectors. Approximate methods keep query time roughly flat but may miss results, which he puts at about one in every 100 queries.
- **Working in vector space.** He describes finding directions in the space, such as statement-to-question, and learning transforms from user feedback without retraining the model. He also floats applying a random transform to embeddings so a hosting provider can run queries without reading the data.
- **Stable Attribution.** The tool searches the roughly 5 billion LAION training images for those closest to a Stable Diffusion output in the model's latent space. Troynikov says the principled approach, retraining without each image, is infeasible at about $600,000 per training run. He released it partly to avoid a copyright backlash that would let Disney "own everything forever".
- **Risk view.** Troynikov says he has not seen a convincing argument that AI will kill everyone, and that alignment is what other fields call control theory. His concern is propaganda and destabilisation, comparing it to the printing press and the Thirty Years' War. Labenz, citing Ajeya Cotra, puts more weight on deceptive behaviour learned from human feedback.

## Quotes

> "The Wright brothers were wrong about how the Wright Flyer worked." — Anton Troynikov

> "The thing that people seem to call alignment in AI research is called control theory everywhere else." — Anton Troynikov
