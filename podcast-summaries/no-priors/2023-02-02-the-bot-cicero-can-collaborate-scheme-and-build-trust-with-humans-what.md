---
title: "The bot Cicero can collaborate, scheme and build trust with humans. What does this mean for the next frontier of AI? With Noam Brown, Research Scientist at Meta"
date: 2023-02-02
show: no-priors
episode: 1
url: "https://www.youtube.com/watch?v=AAv1S9E6ogE"
youtube: "https://www.youtube.com/watch?v=AAv1S9E6ogE"
duration_min: 59
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Noam Brown"]
description: "Noam Brown argues that planning and inference-time compute, not just bigger models, drove poker and Diplomacy breakthroughs and are the missing piece for general reasoning."
tags: ["game-ai", "reasoning", "inference-compute", "self-play", "negotiation-agents"]
source_transcript: "no-priors/episodes/2023/02/2023-02-02-the-bot-cicero-can-collaborate-scheme-and-build-trust-with-humans-what.md"
draft: false
---

## Thesis

Noam Brown, a research scientist at Meta who co-created the Cicero Diplomacy bot and superhuman poker bots, argues that the big wins in game AI came from search and planning at inference time, not only from scaling training. Because training budgets can only grow by another order of magnitude or two, he sees general reasoning, with more compute spent at inference time, as the next frontier.

## Key points

- **Search beat scaling in poker.** Brown says three years of PhD work scaled his poker bot by about 100x. After the bot lost to human pros, he found that adding search while playing was worth the equivalent of 100,000x more scale. The 2017 rematch crushed the pros, and the six-player bot cost under $150 to train.
- **Why Diplomacy.** Brown says games like Settlers of Catan looked too easy in 2019. Diplomacy needs natural-language negotiation, trust and cooperation in private talks, which made it the first major game AI breakthrough involving cooperation.
- **Passing as human.** Cicero played 40 games without being detected as a bot. Brown credits the progress of language models, and notes that players assumed odd messages came from a distracted or drunk person.
- **Human data plus self-play.** Meta trained on about 50,000 games and 13 million messages from webDiplomacy.net, starting from a pre-trained language model. Brown says pure self-play would learn conventions humans don't share, so self-play was used to modify a model of human behaviour.
- **The scaling ceiling.** Brown estimates that current models cost about $50 million to train and that a $500 million model is plausible within a year or two, but there are limits beyond that. He calls the Turing test no longer a useful measure and names sample efficiency as a human advantage.
- **Near-term applications.** Brown thinks bots can already out-negotiate humans in constrained domains such as price or salary negotiation, but not yet in contracts. He speculates that general reasoning could prove the Riemann hypothesis within five years.

## Quotes

> "all research is high risk, high reward, or at least it should be." — Noam Brown

> "everything I had done in my PhD up until that point was just a footnote compared to adding search and scaling search." — Noam Brown
