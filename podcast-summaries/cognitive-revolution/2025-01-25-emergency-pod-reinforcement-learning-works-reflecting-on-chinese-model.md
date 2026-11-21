---
title: "Emergency Pod: Reinforcement Learning Works! Reflecting on Chinese Models DeepSeek-R1 and Kimi k1.5"
date: 2025-01-25
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/emergency-pod-reinforcement-learning-works-reflecting-on-chinese-models-deepseek-r1-and-kimi-k1-5/"
youtube: "https://www.youtube.com/watch?v=MbX9J1Tt_I0"
hosts: ["Nathan Labenz"]
guests: []
description: "Nathan Labenz argues DeepSeek-R1 and Kimi k1.5 show that simple reinforcement learning on strong base models produces reasoning, shrinking both the open-source gap and the West's lead."
tags: ["reasoning-models", "reinforcement-learning", "deepseek", "open-source-ai", "ai-policy"]
source_transcript: "cognitive-revolution/episodes/2025/01/2025-01-25-emergency-pod-reinforcement-learning-works-reflecting-on-chinese-model.md"
draft: false
---

## Thesis

In a solo episode, Nathan Labenz walks through the DeepSeek-R1 and Moonshot AI Kimi k1.5 papers, both released on Trump's inauguration day. He argues that their main lesson is how simple it now is to get reasoning: reward a strong base model for correct answers and problem-solving behaviour emerges on its own. He concludes that the West's lead is small and that compute-based governance looks weaker.

## Key points

- **R1-Zero is pure RL.** Labenz explains that DeepSeek took V3, a 671-billion-parameter mixture-of-experts model with 37 billion active parameters (Zvi called it the "$6 million model"), and trained it with only a binary accuracy reward and a format reward. There was no supervised fine-tuning and no reward model.
- **Emergent reasoning.** Over roughly 8,000 steps, average thinking length grew from about 500 to about 10,000 tokens. On the AIME benchmark, single-shot accuracy rose from 15% to over 70%. Reflection and the paper's "aha moment" appeared without being trained in, alongside unreadable, language-switching chains of thought.
- **Productised R1.** DeepSeek added cold-start fine-tuning data, then 600,000 reasoning and 200,000 general examples, and applied its harmlessness reward to the whole chain of thought. Labenz contrasts this with OpenAI, which avoids putting pressure on the chain of thought so that hidden behaviour does not get pushed out of sight.
- **Cheap, distillable, uncensored at the model layer.** Labenz cites R1 at $2 per million tokens on Hyperbolic against $60 for o1. A distilled Llama 70B scores 65% on GPQA Diamond. He notes that R1-Zero answered questions about Tiananmen Square, while chat.deepseek.com refuses them.
- **Kimi k1.5 converges.** Moonshot also skipped Monte Carlo tree search, process reward models and value functions. It added a length penalty and found that a chain-of-thought reward model beat a traditional one. Labenz takes this as evidence that the US and China still share the same technical path.
- **Policy doubts.** Labenz calls Alex Wang's "AI war" framing irresponsible and questions what chip export controls are meant to prevent.

## Quotes

> "What really comes out of this is that it just works. That simple accuracy reward." — Nathan Labenz

> "Any strategy to get to a good AI future that depends on the West - the good guys - having some insurmountable lead, I don't think that's a great strategy anymore." — Nathan Labenz
