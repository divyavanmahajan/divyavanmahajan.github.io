---
title: "Claude Cooperates! Exploring Cultural Evolution in LLM Societies, with Aron Vallinder &Edward Hughes"
date: 2025-02-12
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/claude-cooperates-exploring-cultural-evolution-in-llm-societies-with-aron-vallinder-edward-hughes/"
youtube: "https://www.youtube.com/watch?v=T_guv5HkrVo"
duration_min: 90
hosts: ["Nathan Labenz"]
guests: ["Edward Hughes", "Aron Vallinder"]
description: "A multi-generation donor game shows Claude 3.5 Sonnet agents building cooperative norms while Gemini 1.5 Flash and GPT-4o societies stall, exposing behaviour that standard benchmarks miss."
tags: ["multi-agent-systems", "cooperation", "cultural-evolution", "ai-evaluation", "agents"]
source_transcript: "cognitive-revolution/episodes/2025/02/2025-02-12-claude-cooperates-exploring-cultural-evolution-in-llm-societies-with-a.md"
draft: false
---

## Thesis

Edward Hughes (Google DeepMind) and Aron Vallinder (independent researcher, PIBBSS fellow) argue that the AI field over-focuses on individual model goals, while the bigger question is what happens when many agents interact. Their toy "society" experiment shows that leading models differ sharply in whether they can sustain cooperative norms over generations, and that these differences are invisible on standard leaderboards.

## Key points

- **The donor game setup.** Vallinder explains that paired agents donate resources and the recipient gets double; the top 50% survive each generation, and newcomers write strategies after reading the survivors'. Runs used 12 agents, 12 rounds per generation and 10 generations, with three levels of reputation history so agents can tell norm enforcers from defectors.
- **Headline results.** Against a theoretical maximum of about 32,000 units, Claude 3.5 Sonnet societies reached roughly 3,000-5,000 and often grew more cooperative over time; Gemini 1.5 Flash reached a few hundred, and GPT-4o showed minimal cooperation with a slight decline.
- **Latent capabilities.** Hughes expected the models to behave similarly because labs chase the same benchmarks such as LMSYS, and reads the gap as evidence of unmeasured social capabilities.
- **Prompting has limits.** Vallinder found explicit "cooperate" instructions work, and identical Big Five personalities boosted GPT-4o, but no prompt produced Claude's improvement across generations. Hughes warns that agents told simply to serve users could, for example, book every nearby restaurant and cancel the rest.
- **Mixed societies and next steps.** A mixed-model run scored only slightly above GPT-4o alone, as defectors first exploited cooperators and others then adapted. Planned work adds communication, group selection, and humans in the loop.
- **Governance stance.** Hughes favours more evaluations and feedback loops over dogma, citing social media echo chambers as a harm nobody measured in advance; Vallinder calls for standards that make the environment trustworthy.

## Quotes

> "this really for me demonstrates that there are these latent capabilities or latent, lack of capabilities perhaps of models that are just not being measured." — Edward Hughes

> "the best way to create trust is to be in an environment where people are, in fact, trustworthy and sort of cooperate with you." — Aron Vallinder
