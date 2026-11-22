---
title: '#75 – Marcus Hutter: Universal Artificial Intelligence, AIXI, and AGI'
description: >-
  Marcus Hutter argues that intelligence can be defined mathematically, and his
  AIXI model, which combines Solomonoff induction with sequential decision
  theory, is the uncomputable gold standard for AGI.
pubDate: '2020-02-26'
show: lex-fridman
episode: 75
url: 'https://lexfridman.com/marcus-hutter/'
youtube: 'https://www.youtube.com/watch?v=E1AxVXt2Gv4'
durationMin: 100
hosts:
  - Lex Fridman
guests:
  - Marcus Hutter
tags:
  - agi
  - aixi
  - compression
  - reinforcement-learning
  - ai-theory
draft: false
---
## Thesis

Marcus Hutter, a senior research scientist at DeepMind and professor at the Australian National University, tells Lex Fridman that intelligence can be formalised. His AIXI model joins Solomonoff induction (prediction through the shortest programs that explain the data) with long-term reward-maximising planning. Hutter argues this gives a provably optimal but uncomputable agent that serves as a gold standard and a guide for practical AGI work.

## Key points

- **Compression is understanding.** Hutter calls Occam's razor central to science and says he sees no difference between compression, understanding and prediction. Fridman notes that Hutter's prize for compressing Wikipedia rose tenfold to 500,000 euros alongside this episode.
- **A definition of intelligence.** Following his work with Shane Legg, Hutter defines intelligence as an agent's ability to perform well across a wide range of environments, and says creativity, planning and memory emerge from it.
- **How AIXI works.** Hutter replaces the unknown true distribution in expectimax planning with a universal prior that weights programs by 2 to the minus their length. He says exploration follows automatically from Bayesian learning plus long-term planning, and argues the Markov and ergodicity assumptions common in reinforcement learning are limiting, since real life has traps.
- **Where rewards come from.** Hutter cites Sutton's elevator example of misspecified rewards, suggests humans give rewards to household robots, and describes a DeepMind colleague's curiosity agent, rewarded for information gain, as a fully autonomous "optimal scientist".
- **Approximations and Gödel machines.** His group approximated AIXI with context tree weighting and Monte Carlo tree search (UCT), playing Pac-Man and small poker games with no prior rules. Schmidhuber's self-improving Gödel machine could, in theory, speed up a computable AIXI variant.
- **Consciousness and embodiment.** Hutter thinks AGI developers need not solve the hard problem of consciousness, and sees physical robots as more distraction than help, though simulated 3D worlds may matter. He recommends Russell and Norvig, Sutton's reinforcement learning book, and a high school Theory of Knowledge textbook.

## Quotes

> "I believe that Occam's razor is probably the most important principle in science" — Marcus Hutter

> "definitely AGI because once the AGI problem solve they can ask the AGI to solve the other problem for me" — Marcus Hutter
