---
title: Eric Jang – Building AlphaGo from scratch
description: >-
  Eric Jang rebuilds AlphaGo with LLM coding tools and argues that MCTS gives a
  better label for every move, avoiding the credit-assignment problem that
  limits LLM reinforcement learning.
pubDate: '2026-05-15'
show: dwarkesh
url: 'https://www.dwarkesh.com/p/eric-jang'
youtube: 'https://www.youtube.com/watch?v=X_ZVSPcZhtw'
durationMin: 157
hosts:
  - Dwarkesh Patel
guests:
  - Eric Jang
tags:
  - reinforcement-learning
  - alphago
  - search
  - automated-research
  - deep-learning
draft: false
---
## Thesis

Eric Jang, formerly vice president of AI at 1X Technologies, used a sabbatical to rebuild AlphaGo with LLM coding assistants. At a chalkboard with Dwarkesh Patel, he argues that AlphaGo is still the cleanest example of search, learning from experience and self-play. Its key strength is that Monte Carlo tree search turns RL into stable supervised learning on improved labels, while LLM policy gradients learn "through a straw".

## Key points

- **Cheap to reproduce now.** Jang says work that took a DeepMind team millions of dollars can now be done for a few thousand. A donation of about $10K from Prime Intellect paid for roughly $4K of exploratory research and about $3K for the final run. His AutoGo repo is open source.
- **How the search works.** Each simulation runs selection (the PUCT rule), expansion, evaluation and backup. A ResNet with a value head and a 361-way policy head cuts both the depth and the breadth of the tree. For small budgets, Jang found ResNets beat transformers.
- **Better labels, not credit assignment.** MCTS proposes a strictly better action at every move, and the policy imitates the full search distribution, which is a soft label. Naive RL, by contrast, has to work out which of many moves actually caused a win. Patel adds that RL learns very few bits per sample when the pass rate is low.
- **What still matters.** Starting from a strong initialisation, such as best-response training against KataGo, matters more than KataGo's auxiliary tricks. Pre-training on 9x9 boards transfers to 19x19 and shortens the warm start. Jang thinks MCTS does not carry over easily to LLMs because language has too many possible actions for PUCT-style exploration.
- **Automated research.** Using Opus 4.6 and 4.7 and a Claude skill called Experiment, Jang found the models strong at hyperparameter tuning and running experiments. They were weak at choosing the next experiment or stepping back from dead ends. He suggests Go could serve as a hard-to-cheat outer loop when training automated scientists.

## Quotes

> "In deep learning, initialization is everything." — Eric Jang

> "The compute required to be the first to do something is always much larger than the compute it takes to catch up." — Eric Jang
