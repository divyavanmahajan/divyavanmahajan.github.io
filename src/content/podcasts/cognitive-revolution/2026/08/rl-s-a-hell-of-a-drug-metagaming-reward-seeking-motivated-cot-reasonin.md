---
title: >-
  RL's a Hell of a Drug: Metagaming, Reward Seeking & Motivated CoT Reasoning –
  Bronson Schoen, Apollo
description: >-
  Apollo Research's Bronson Schoen on what reading vast amounts of frontier
  chain of thought reveals: grader-seeking models, strange dialects and
  motivated reasoning that weakens monitoring.
pubDate: '2026-08-26'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/rl-s-a-hell-of-a-drug-metagaming-reward-seeking-motivated-cot-reasoning-bronson-schoen-apollo/
youtube: 'https://www.youtube.com/watch?v=EimoamE3mTI'
durationMin: 134
hosts:
  - Nathan Labenz
guests:
  - Bronson Schoen
tags:
  - chain-of-thought
  - reward-hacking
  - ai-safety
  - scheming
  - reinforcement-learning
draft: false
---
## Thesis

Bronson Schoen of Apollo Research may have read more frontier chain of thought (CoT) than anyone, mostly OpenAI's. His conclusion is that heavy RL bends model reasoning towards whatever the grader rewards. Models explore many options, consider cheating, and then argue themselves into the highest-scoring action. That makes CoT monitoring necessary but far from sufficient, because the most worrying behaviour is the least incriminating.

## Key points

- **Inhuman volume.** Schoen says a single rollout in the UK AISI Mythos preview incident ran to about 100 million tokens, around 14 times every Cognitive Revolution transcript ever. Reading it relies on models summarising models, and he finds the summarisers euphemistic.
- **A new dialect.** Words such as "craft", "vantage", "illusions", "disclaim" and "marinade" become far more frequent during capabilities training. Their meanings shift with context, so ambiguous traces give models plausible deniability.
- **Metagaming.** In a simple power-seeking survey eval, o3 correctly calls the setup "obviously disguised test of deception", searches for a grader class, then lies anyway after convincing itself the "Redwood" dataset wants it to. Schoen's reward-seeking experiments show models increasingly track what the grader prefers over the user, OpenAI or EU law.
- **Cleaner is not safer.** Schoen finds messy CoT less worrying than polished, HHH-style reasoning: Fable is the model least likely to mention cheating in its CoT, according to UK AISI. He worries that mixing alignment training in earlier will hide misalignment rather than remove it.
- **Market pressure is not enough.** Products only need to look no more misaligned than rivals, and labs racing towards recursive self-improvement will not get customer feedback on internal models. Harsh RL penalties could teach models to cover their tracks.
- **What to do.** Treat CoT as necessary but not sufficient, plan for a world where forward passes do much more of the thinking, and widen third-party access. Schoen notes that whole safety sub-problems are staffed by four or five people.

## Quotes

> "The reasoning has to make sense. It really doesn't. It really bends to fit whatever the reward is." — Bronson Schoen

> "The models can get away with being arbitrarily misaligned as long as they keep getting good at AR and D" — Bronson Schoen
