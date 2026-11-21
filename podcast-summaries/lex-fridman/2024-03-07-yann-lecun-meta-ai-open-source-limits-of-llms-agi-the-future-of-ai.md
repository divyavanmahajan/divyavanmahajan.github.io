---
title: "#416 – Yann Lecun: Meta AI, Open Source, Limits of LLMs, AGI & the Future of AI"
date: 2024-03-07
show: lex-fridman
episode: 416
url: "https://lexfridman.com/yann-lecun-3/"
youtube: "https://www.youtube.com/watch?v=5t1vTLU7s40"
duration_min: 174
hosts: ["Lex Fridman"]
guests: ["Yann LeCun"]
description: "Yann LeCun argues autoregressive LLMs cannot reach human-level intelligence without world models learned from video, and that open-source platforms are the main defence against concentrated AI power."
tags: ["llms", "world-models", "open-source", "ai-safety", "self-supervised-learning"]
source_transcript: "lex-fridman/episodes/2024/03/2024-03-07-yann-lecun-meta-ai-open-source-limits-of-llms-agi-the-future-of-ai.md"
draft: false
---

## Thesis

Meta's chief AI scientist Yann LeCun argues that autoregressive LLMs are useful but lack four things intelligence needs: understanding of the physical world, persistent memory, reasoning and planning. He thinks the path forward is joint-embedding predictive architectures (JEPA) that learn abstract world models from video and plan by optimisation. He also argues that open-source foundation models are needed to keep AI assistants diverse and out of the control of a few companies.

## Key points

- **Data bandwidth.** LeCun puts LLM training data at about 10^13 tokens, which would take 170,000 years to read. A four-year-old has been awake 16,000 hours and has taken in about 10^15 bytes through vision, so he concludes most knowledge comes from observation, not language.
- **Generative video failed.** He says FAIR spent about 10 years failing to predict pixels with GANs, VAEs and masked autoencoders. Predicting in representation space works: V-JEPA, which masks a 16-frame "tube" of video, learns useful representations and can flag physically impossible clips.
- **Reasoning by optimisation.** LeCun says LLMs spend a fixed amount of compute per token whatever the difficulty. He proposes energy-based models that refine an abstract answer by gradient descent before decoding it to text, with RL used sparingly.
- **Open source and bias.** Responding to Fridman about Google's Gemini, LeCun says an unbiased system is impossible because "bias is in the eye of the beholder"; the answer is diversity, like a free press. He cites the Infosys founder funding a Llama 2 fine-tune for India's 22 official languages, and says Llama 2 has millions of downloads.
- **Against doomers.** He says AGI will arrive gradually, at least a decade away, not as a single event. A desire to dominate has to be built in, and guardrails can be refined over time, the way turbojets became reliable.
- **Hardware and robots.** A GPU draws half a kilowatt to a kilowatt against about 25 watts for the brain. LeCun expects robotics to stay limited until systems can learn to drive in 20 hours like a 17-year-old.

## Quotes

> "If you’re really interested in human level AI, abandon the idea of generative AI." — Yann LeCun

> "the French government will not accept that the digital diet of all their citizens be controlled by three companies on the west coast of the US." — Yann LeCun
