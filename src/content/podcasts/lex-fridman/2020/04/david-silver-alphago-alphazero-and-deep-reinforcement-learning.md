---
title: '#86 – David Silver: AlphaGo, AlphaZero, and Deep Reinforcement Learning'
description: >-
  DeepMind's David Silver argues that intelligence can be framed as the
  reinforcement learning problem, and that systems which learn and correct their
  own errors, as AlphaGo to MuZero did, keep improving.
pubDate: '2020-04-03'
show: lex-fridman
episode: 86
url: 'https://lexfridman.com/david-silver/'
youtube: 'https://www.youtube.com/watch?v=uPUEq8d73JI'
durationMin: 108
hosts:
  - Lex Fridman
guests:
  - David Silver
tags:
  - reinforcement-learning
  - deep-learning
  - alphago
  - self-play
  - game-ai
draft: false
---
## Thesis

David Silver, who leads reinforcement learning research at DeepMind, tells Lex Fridman that the problem of intelligence can be formalised as reinforcement learning: an agent acting to maximise a reward. He traces how Go moved from handcrafted search to learned intuition and then to pure self-play, arguing that a system able to correct its own errors can climb from random play to superhuman level with no obvious ceiling.

## Key points

- **Why Go was hard.** Silver notes that when a million-dollar prize expired in 2000, the strongest Go program lost to a nine-year-old giving it nine stones. Go has about 10^170 positions and no reliable static evaluation, so the heuristic search behind Deep Blue failed; Monte Carlo tree search (Rémi Coulom, 2006) and Sylvain Gelly's MoGo helped but plateaued at amateur dan level.
- **Learned intuition first.** Silver says AlphaGo's first paper showed a pure deep learning network, with no search, reaching dan level. Human game data was a pragmatic shortcut; self-play was the goal from the start.
- **Lee Sedol match.** Silver predicted a 4-1 result because AlphaGo developed "delusions" in about one game in five. He describes move 37, a fifth-line shoulder hit, as computer creativity, and says about 100 million people watched online.
- **AlphaGo Zero and AlphaZero.** The AlphaZero idea came to Silver on his honeymoon. He rated self-play alone a 50/50 bet; it beat the earlier AlphaGo 100 games to zero, then worked unmodified on chess and shogi. He reports Magnus Carlsen crediting AlphaZero's games for his improved play.
- **MuZero and real uses.** MuZero learns a model without being given the rules, matching AlphaZero on board games and beating the state of the art on Atari. Silver cites Nature papers that applied AlphaZero to chemical synthesis and quantum computation.
- **Rewards and meaning.** Silver argues intelligence needs a well-defined ultimate goal, with sub-goals set along the way. Asked about the meaning of life, he sketches layers, from entropy to evolution to brains to AI, borrowing metaphors from Max Tegmark.

## Quotes

> "if you bestow a system with the ability to correct its own errors then it can take you from random to something slightly better than random" — David Silver

> "in general in my research I don't like to do research on questions for which we already know the likely outcome" — David Silver
