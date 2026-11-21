---
title: "Google DeepMind's Vision for AI, Search and Gemini with Oriol Vinyals from Google DeepMind"
date: 2024-08-01
show: no-priors
episode: 72
url: "https://www.youtube.com/watch?v=NHN1bdtFKKA"
youtube: "https://www.youtube.com/watch?v=NHN1bdtFKKA"
duration_min: 46
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Oriol Vinyals"]
description: "Oriol Vinyals argues that general models are here but reasoning is not yet reliable, and that better reward models and self-evaluation are the next lever beyond pre-training scale."
tags: ["gemini", "long-context", "reinforcement-learning", "reward-models", "agi"]
source_transcript: "no-priors/episodes/2024/08/2024-08-01-google-deepmind-s-vision-for-ai-search-and-gemini-with-oriol-vinyals-f.md"
draft: false
---

## Thesis

Oriol Vinyals, VP of Research at Google DeepMind and Gemini technical co-lead, describes a shift from the 2010s, when general algorithms produced specialised models, to general models built on language and now multimodality. He argues that the open problem is crisp, reliable reasoning, which depends on better reward functions, possibly supplied by the models themselves. He also says that whether AGI is "achieved" matters less than what the models can usefully do.

## Key points

- **How Gemini formed.** Vinyals says two parallel LLM efforts in Google Brain and legacy DeepMind were merged, with Jeff Dean and himself bringing the teams together, before all AI research was combined as Google DeepMind. Teams in California and London let training run around the clock.
- **Search versus chat.** He sees no convergence yet: search can serve as a tool that adds citations to chat answers, while Search integrates LLM summaries. Product areas, not the research team, set that strategy.
- **Long context.** Million-token context surprised him most, for example asking questions about an hour-long video. He expects commodity context to grow about 10x within one to two years, with retrieval and hierarchical memory staying in a hybrid setup.
- **Where compute goes.** Contrasting AlphaGo, where reinforcement learning dominated compute, Vinyals says pre-training today takes over 90% and could fall to around 50%, with more going to RL once good rewards exist. Imperfect human-preference rewards get gamed, for instance by emitting emoticons.
- **General versus specialised.** He describes general models as broad but only moderately good at each task, and says important problems such as protein folding, fusion or weather still justify specialised models, with results feeding back into Gemini.
- **AGI and advice.** He cites Shane Legg's 2009 prediction of AGI in 2028, and advises students to follow their passion, adopt AI tools, or find corners AI has not reached, such as climate modelling.

## Quotes

> "if checking that something is correct is easier than creating the solution then we're in business" — Oriol Vinyals

> "they're like 20% good at everything" — Oriol Vinyals
