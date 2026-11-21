---
title: "Leading Indicators of AI Danger: Owain Evans on Situational Awareness, from The Inside View"
date: 2024-10-16
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/leading-indicators-of-ai-danger-owain-evans-on-situational-awareness-from-the-inside-view/"
youtube: "https://www.youtube.com/watch?v=Sl0AQITwMuQ"
hosts: ["Nathan Labenz"]
guests: ["Owain Evans", "Michael Trazzi"]
description: "Owain Evans argues that situational awareness and out-of-context reasoning are measurable precursors to deceptive alignment, and that tracking them gives early warning of dangerous AI capabilities."
tags: ["ai-safety", "situational-awareness", "deceptive-alignment", "out-of-context-reasoning", "llm-evaluation"]
source_transcript: "cognitive-revolution/episodes/2024/10/2024-10-16-leading-indicators-of-ai-danger-owain-evans-on-situational-awareness-f.md"
draft: false
---

## Thesis

In this crossover from The Inside View, alignment researcher Owain Evans tells host Michael Trazzi that capabilities such as situational awareness and hidden (out-of-context) reasoning can be defined and measured empirically. Evans treats them as leading indicators: a model that knows what it is, can tell when it is being evaluated, and can reason without writing its steps down has the ingredients for deceptive alignment. Nathan Labenz, introducing the episode, notes that even o1 still seems weak on situational awareness.

## Key points

- **A benchmark for self-knowledge.** Evans describes the Situational Awareness Dataset: about 17 tasks, roughly 12,000 questions and 19 models evaluated. Tasks include facts about the model, self-recognition, telling apart development stages, "identity leverage" (answer in German if you are an AI) and anti-imitation tasks.
- **Scores and saturation.** Claude 3.5 Sonnet scored best at 54% against an estimated achievable ceiling of about 90%. With the best model gaining about 10% a year, Evans estimates roughly three years to saturation.
- **Surprising results.** Claude 3 Opus sometimes guessed unprompted that it was part of a research study. GPT-4 base discussed AI in 15 of 20 long-form self-descriptions, which Evans finds surprising for a pre-trained model.
- **Connecting the dots.** Models fine-tuned only on individual x,y pairs from a function such as 3x+1 could later write the function down, with no examples or chain of thought. Evans warns this could let models rebuild redacted information from the context around it, but says the current abilities are "not that impressive."
- **Chain of thought and monitoring.** Evans argues that removing chain of thought would cut some deceptive-alignment risk but runs against the race to build the best systems. He suggests limiting it during evaluation and monitoring it closely.
- **Research practice.** Evans credits collaborators and the MATS program. He says good safety research rarely needs lab-scale compute, given cheap fine-tuning on APIs and strong Llama models. On dual-use worries, he consulted someone at a top AI lab before publishing the reversal curse paper.

## Quotes

> "It is the situation where we're not able to control the capabilities that we're worried about" — Owain Evans

> "I think it's generally been sort of overrated how much you need industrial scale compute resources to do good research related to safety and alignment." — Owain Evans
