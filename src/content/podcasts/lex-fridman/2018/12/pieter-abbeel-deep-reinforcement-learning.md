---
title: 'Pieter Abbeel: Deep Reinforcement Learning'
description: >-
  Pieter Abbeel argues that deep reinforcement learning works because neural
  networks tile space with simple linear controllers, and that self-play,
  demonstrations and simulator ensembles are the ways to get robots more
  learning signal.
pubDate: '2018-12-16'
show: lex-fridman
url: 'https://lexfridman.com/pieter-abbeel/'
youtube: 'https://www.youtube.com/watch?v=l-mYLq6eZPY'
durationMin: 43
hosts:
  - Lex Fridman
guests:
  - Pieter Abbeel
tags:
  - reinforcement-learning
  - robotics
  - imitation-learning
  - meta-learning
  - simulation
draft: false
---
## Thesis

Pieter Abbeel, UC Berkeley professor and director of the Berkeley Robot Learning Lab, tells Lex Fridman that reinforcement learning's main bottleneck is signal: sparse rewards force huge numbers of trials. He sees the way forward in formulations that yield more signal per experience (self-play, human comparisons, demonstrations, meta-learning) and in simulation, while noting that long-horizon credit assignment and hierarchy remain unsolved.

## Key points

- **Hardware lags software for some tasks.** Asked when a robot could beat Roger Federer at tennis, Abbeel says the physical hardware is the bigger gap, guessing perhaps 10-15 years, though a stationary arm learning to swing a racket with RL seems feasible.
- **Why deep RL works.** Abbeel's intuition, from Berkeley work started around 2011-2013 with John Schulman, is that ReLU networks act as piecewise linear feedback controllers that tile the state space and share expertise; linear control already stabilised his group's helicopter in hover.
- **Rewards from comparisons.** He cites Paul Christiano and collaborators at OpenAI, whose one-legged Hopper learned a backflip purely from humans saying which of two behaviours they preferred, as a model for learning social or interactive objectives.
- **Hierarchy via meta-learning.** Because a PhD decision sits far above muscle-level control, Abbeel says credit assignment needs hierarchical reasoning; the RL-squared paper led by Rocky Duan meta-learned behaviour like moving consistently down hallways in mazes.
- **Demonstrations and third-person learning.** Teleoperation can teach a robot a basic skill in about 10 minutes; Chelsea Finn's work lets a robot map a watched human demonstration onto its own body.
- **Simulator ensembles and testing.** Rather than one precise simulator, Abbeel proposes training across many so the real world is just another sample; he says robots still lack the equivalent of a driving test.

## Quotes

> "every time you play yourself you get signal and so whenever you can turn something into self play you're in a beautiful situation" — Pieter Abbeel

> "it's almost like machine translation for demonstrations were you have a human demonstration and the robot learns to translated into what it means for the robot to do it" — Pieter Abbeel
