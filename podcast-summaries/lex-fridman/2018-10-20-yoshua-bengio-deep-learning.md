---
title: "Yoshua Bengio: Deep Learning"
date: 2018-10-20
show: lex-fridman
url: "https://lexfridman.com/yoshua-bengio/"
youtube: "https://www.youtube.com/watch?v=azOmzumh0vQ"
duration_min: 43
hosts: ["Lex Fridman"]
guests: ["Yoshua Bengio"]
description: "Yoshua Bengio argues that deep learning needs new training objectives, causal and disentangled representations, and agents that learn by acting, not just bigger networks, to reach real understanding."
tags: ["deep-learning", "causality", "representation-learning", "ai-safety", "reinforcement-learning"]
source_transcript: "lex-fridman/episodes/2018/10/2018-10-20-yoshua-bengio-deep-learning.md"
draft: false
---

## Thesis

Yoshua Bengio tells Lex Fridman that today's neural nets have only a shallow, low-level understanding of their data, and that scale alone will not fix this. He argues the missing pieces lie in training objectives and frameworks: learning causal structure, disentangling both variables and the rules that relate them, grounding language in world models, and moving from passive observation to agents that learn by intervening.

## Key points

- **Credit assignment over long spans.** Bengio says recurrent nets handle sequences of dozens or hundreds of steps, while humans can revise a judgment from last year in light of new evidence. He links this to selective memory and consciousness.
- **Objectives, not data or architecture.** Asked whether the gap is a data or architecture problem, Bengio answers "neither": what matters is how and under what objectives systems learn, including rewards for the right kind of exploration. He cites Rebecca Saxe on infants as directed, curious learners.
- **Lessons from symbolic AI.** He says expert systems failed partly because much human knowledge is not consciously accessible, but they had well-factorised rules. Neural nets instead spread knowledge across one large blob of parameters, which causes catastrophic forgetting; he proposes disentangling the mechanisms between high-level variables, not just the variables, to generalise to new distributions.
- **Compute and academia.** Bengio notes models need millions of examples for simple grid worlds that humans learn from dozens, which leaves room for academics without Google-scale compute to improve training frameworks.
- **Safety and bias.** He considers existential risk very unlikely but worth study, and wants public debate focused on face-recognition surveillance, autonomous weapons, jobs, concentration of power and discrimination. He argues debiasing methods such as adversarial training are mature enough for governments to require them, for example of insurers.
- **What comes next.** Bengio calls seminal moments like AlphaGo overrated, says GANs and reinforcement learning are the hottest topics at Mila, and expects generative and model-based agent learning to matter most. He also describes his group's BabyAI project on machine teaching.

## Quotes

> "I don't think that having more more depth in the network in the sense of instead of a hundred layers we have ten thousand is going to solve our problem" — Yoshua Bengio

> "science moved by small steps thanks to the collaboration and community of a large number of people interacting" — Yoshua Bengio
