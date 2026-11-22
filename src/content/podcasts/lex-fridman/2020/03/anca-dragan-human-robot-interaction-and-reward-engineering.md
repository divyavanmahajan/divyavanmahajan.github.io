---
title: '#81 – Anca Dragan: Human-Robot Interaction and Reward Engineering'
description: >-
  Berkeley roboticist Anca Dragan argues that robots must model people as
  roughly rational agents with their own beliefs, and treat specified rewards as
  evidence of what humans want, not as law.
pubDate: '2020-03-19'
show: lex-fridman
episode: 81
url: 'https://lexfridman.com/anca-dragan/'
youtube: 'https://www.youtube.com/watch?v=iOCfIFBBpVY'
durationMin: 99
hosts:
  - Lex Fridman
guests:
  - Anca Dragan
tags:
  - robotics
  - human-robot-interaction
  - reward-design
  - autonomous-vehicles
  - inverse-reinforcement-learning
draft: false
---
## Thesis

Anca Dragan, a Berkeley professor who also consults for Waymo, tells Lex Fridman that taking a robot out of the lab changes the problem in two ways: it must coordinate with people acting in the same space, and it must optimise for the end user's preferences rather than the programmer's. Her answer is to model humans as approximately rational under their own assumptions, let robots act to gather information, and treat any specified reward as evidence to interpret rather than an objective to follow literally.

## Key points

- **From inverse RL to bounded rationality.** Dragan traces the line from utility maximisation through Luce and Shepard's noisy choice to "Boltzmann rationality". When people look too noisy, as in a Lunar Lander assistance task, her group modelled their simpler intuitive physics instead, and users then landed between the flags.
- **Acting to learn.** An autonomous car can nudge towards a neighbouring driver to test whether they are aggressive or defensive. Robots can also move so their intent is easier for observers to read.
- **Driving is hard because of people.** Dragan says that with no humans in downtown San Francisco, driving would be essentially solved, and she calls not using lidar "kind of irresponsible". Fridman cites Jim Keller's view that driving is mostly a ballistics problem and disagrees with it.
- **Supervised autonomy.** Dragan warns that driver-assist systems may wrongly assume a supervising human is as safe as a driving one. Fridman counters that his data on systems such as Tesla Autopilot and Cadillac Super Cruise suggests drivers can stay engaged when the system is fairly limited.
- **Reward design is still tuning.** After tuning cost functions for 10 years, Dragan says the hand-design work has moved from behaviour into the reward. Citing Goodhart's law, she treats designers' rewards as imperfect evidence.
- **Leaked information.** Physical pushes, emergency stops and even the state of a room (shoes lined up) tell a robot what people want, Dragan argues. She calls Asimov's three laws words that cannot be turned directly into maths.

## Quotes

> "it still seems really hard to anticipate any possible situation and make sure you specify a reward function that when optimized will work well in every possible situation" — Anca Dragan

> "the state itself is kind of like a choice that people implicitly made on how they want their world" — Anca Dragan
