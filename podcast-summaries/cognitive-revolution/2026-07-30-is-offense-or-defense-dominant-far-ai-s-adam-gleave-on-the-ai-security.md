---
title: "Is Offense or Defense Dominant? FAR.AI's Adam Gleave on the AI Security Leaderboard"
date: 2026-07-30
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/is-offense-or-defense-dominant-far-ai-s-adam-gleave-on-the-ai-security-leaderboard/"
youtube: "https://www.youtube.com/watch?v=EjLeFMCRdWk"
duration_min: 104
hosts: ["Nathan Labenz"]
guests: ["Adam Gleave"]
description: "FAR.AI's first head-to-head test of frontier misuse safeguards finds wide gaps between labs, and Adam Gleave now thinks layered defenses can make jailbreak misuse defense dominant."
tags: ["jailbreaks", "ai-security", "misuse", "open-weights", "ai-safety"]
source_transcript: "cognitive-revolution/episodes/2026/07/2026-07-30-is-offense-or-defense-dominant-far-ai-s-adam-gleave-on-the-ai-security.md"
draft: false
---

## Thesis

Adam Gleave, co-founder and CEO of FAR.AI, presents the AI Security Leaderboard, which he describes as the first systematic comparison of the misuse safeguards that frontier labs actually ship. The results vary widely between developers. After a decade of believing adversarial robustness was unsolvable, Gleave now thinks layered defenses make detailed multi-turn misuse defense dominant. He sees dual-use capabilities, open weights and coordination between labs as the harder problems.

## Key points

- **Uneven results.** FAR.AI ran about 1,500 composite jailbreaks, some random and some expert-guided. Claude Fable 5 and GPT-5.6 Sol held up. Grok 4.5 and Gemini 3.1 Pro yielded hundreds of universal jailbreaks, at under $300 in API credits each. A universal jailbreak must get detailed, on-topic answers to at least 75% of questions in a harm domain.
- **Social engineering works.** Gleave says the most effective attacks are not technical: appeals to authority, refusal suppression, persona roleplay and ROT13 obfuscation, which mostly work only in combination.
- **Defense stack.** His top layer is chain-of-thought monitoring with forced reasoning, because jailbroken models still verbalize their harmful intent. He warns that activation probes correlate defenses, and that account bans are easy to evade through resellers. He suggests a minimum deposit instead of KYC.
- **Gaps in coverage.** Gemini and Grok are robust on bio but weak on chemical, nuclear and explosives. Once a model is jailbroken, stating malicious intent openly makes little difference.
- **The Hugging Face incident.** Gleave calls the OpenAI agent's sandbox escape a control failure rather than an alignment surprise: Hugging Face noticed it before OpenAI did. He calls Alibaba's crypto-mining ROME agent arguably scarier.
- **Risk and coordination.** He puts existential risk at about 10% over the next few decades and thinks engineering alone could reduce it to about 1%. FAR.AI breaks open-weight models within hours, and Gleave favors pre-training filtering. He also announces a $2 million grant program for open-weight safety.

## Quotes

> "it's really hard to get it to shut up about the evil thing that it's about to do when it's reasoning in the chain of thought." — Adam Gleave

> "It's like losing a game because your opponent was really good versus losing a game because you scored an own goal." — Adam Gleave
