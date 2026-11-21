---
title: "The AI Scouting Report: Jailbreaks and Defense"
date: 2023-10-13
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/the-ai-scouting-report-jailbreaks-and-defense/"
youtube: "https://www.youtube.com/watch?v=VC_mGSU0wd4"
duration_min: 75
hosts: ["Nathan Labenz"]
guests: ["Eric Tornberg"]
description: "Seven recent safety papers show real progress in reading and steering model internals, but jailbreaks and cheap fine-tuning show that control of language models remains far from reliable."
tags: ["ai-safety", "jailbreaks", "interpretability", "representation-engineering", "open-source-models"]
source_transcript: "cognitive-revolution/episodes/2023/10/2023-10-13-the-ai-scouting-report-jailbreaks-and-defense.md"
draft: false
---

## Thesis

Nathan Labenz walks Eric Tornberg through seven recent results, alternating four "good" and three "bad" for AI control. His conclusion: interpretability and control techniques are making real progress, perhaps an order of magnitude, but if a jailbreak could one day be catastrophic, several more orders of magnitude are needed. High uncertainty is the honest position.

## Key points

- **P(doom) among engineers.** Labenz cites Barr Yaron's AI Engineer survey (850 responses): 60% gave a P(doom) of 25% or more, and 30% gave 50% or more.
- **Representation engineering.** Work by Andy Zou, Dan Hendrycks and Zico Kolter on Llama 2 uses contrasting prompt pairs to find directions for concepts such as truthfulness or harmlessness in the middle layers. Those directions can detect a concept (around 90% accuracy) and steer output, and they can block universal jailbreaks. Oddly, pushing toward "happiness" itself works as a jailbreak.
- **Low-resource languages.** A Brown University paper found GPT-4's refusals fail on under 1% of harmful prompts in English, but 53% in Zulu, and 79% when low-resource languages are combined.
- **Monosemanticity.** Anthropic's dictionary-learning paper trains a sparse auxiliary network on a small transformer's 512 activations (100 billion tokens of training data), separating them into more than 100,000 mostly interpretable features. Pinning an Arabic feature forces Arabic output. Chris Olah calls scaling it up an engineering challenge; Labenz says it is unproven on large models.
- **Safety training is easy to remove.** "Shadow Alignment" shows that 100 harmful examples and about one GPU hour fine-tune Llama 2's safety out. Labenz argues this undercuts compute monitoring and favours controlling the training data instead.
- **Unlearning, cheap jailbreaks, ensembles.** Ronen Eldan's team made Llama 2 forget Harry Potter using 1,500 GPT-4-identified terms, with little benchmark loss. Telling GPT-4 it is the year 2123 got it to produce Calvin and Hobbes content. Reward model ensembles reduce RLHF overfitting.

## Quotes

> "5% is enough to worry about and also 5% is enough to try to fight for, I would say." — Nathan Labenz

> "low to mid nineties accuracy and classification is not going to get the job done. That just means you have to run 20 of these instead of one." — Nathan Labenz
