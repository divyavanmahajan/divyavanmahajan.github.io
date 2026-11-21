---
title: '#108 – Sergey Levine: Robotics and Machine Learning'
description: >-
  Berkeley's Sergey Levine argues the robot intelligence gap is in the mind, not
  the body, and that machines must learn from large prior data plus real-world
  experience to keep improving.
pubDate: '2020-07-14'
show: lex-fridman
episode: 108
url: 'https://lexfridman.com/sergey-levine/'
youtube: 'https://www.youtube.com/watch?v=kxi-_TT_-Nc'
durationMin: 98
hosts:
  - Lex Fridman
guests:
  - Sergey Levine
tags:
  - robotics
  - reinforcement-learning
  - offline-rl
  - end-to-end-learning
  - deep-learning
draft: false
---
## Thesis

Sergey Levine, a Berkeley professor working on deep reinforcement learning and robotics, tells Lex Fridman that robot hardware is close to good enough but the intelligence gap is wide, and it widens the more open and unpredictable the environment. He frames robotics less as a problem that needs solved intelligence and more as the best place to study intelligence, and argues that the key open problem is building machines that keep improving from real-world experience on top of large stores of prior data.

## Key points

- **Body versus mind.** Levine cites a 2004 Stanford video of the PR1 robot tidying a room, which was entirely teleoperated by a person: with a human brain, the robot works. He argues the bottleneck is adaptability, not actuators.
- **End-to-end beats modular.** He describes his group's 2014 work mapping pixels directly to torques for a peg-insertion task, where joint training let perception be weaker while overall performance improved. He compares this to the gaze heuristic used by baseball players, pilots and frogs.
- **Common sense from interaction.** Levine suggests common sense emerges from having to act in our world; an image captioner that calls a person in a fur coat a teddy bear lives in a world of pixels and sentences.
- **Offline RL is an algorithms problem.** He sees using large logged datasets (off-policy, offline or batch RL) as the gap to close, with the main difficulty being knowing when a model's predictions can be trusted. He likens the mix to Fridman's iceberg: 99% prior experience, 1% new exploration.
- **Simulation and scaffolding.** Simulation is pragmatic, Levine says, but real-world learning surfaces issues simulators hide, such as a robot breaking all the dishes or needing a vision system just to judge a poured cup of water.
- **Risks and the bitter lesson.** On Rich Sutton's essay, he concludes the field should build general algorithms that collect experience autonomously. Among AI risks he is most concerned about people with nefarious intent and poorly optimised objectives.

## Quotes

> "if your machine has any bottleneck that is built by humans and that doesn't improve from data it will eventually be the thing that holds it back" — Sergey Levine

> "I'd like to build a machine that that can go as far as possible and that runs up against the ceiling of the complexity of the universe" — Sergey Levine
