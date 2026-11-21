---
title: >-
  Robotics Research Update, with Keerthana Gopalakrishnan and Ted Xiao of Google
  DeepMind
description: >-
  Google DeepMind's Keerthana Gopalakrishnan and Ted Xiao walk through six
  robotics papers showing internet-scale models transfer to robots, while data
  and a few breakthroughs remain the bottleneck.
pubDate: '2024-04-22'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/robotics-research-update-with-keerthana-gopalakrishnan-and-ted-xiao-of-google-deepmind-2/
youtube: 'https://www.youtube.com/watch?v=oH2vjGsBIQA'
durationMin: 84
hosts:
  - Nathan Labenz
guests:
  - Keerthana Gopalakrishnan
  - Ted Xiao
tags:
  - robotics
  - vision-language-models
  - embodied-ai
  - robot-safety
  - google-deepmind
draft: false
---
## Thesis

Nathan Labenz reviews a year of Google DeepMind robotics papers with Keerthana Gopalakrishnan and Ted Xiao. Xiao argues robotics has moved from roughly the GPT-2 era towards the GPT-3 era because foundation models raised component success rates from 20-30% to 60-70%. Both guests say internet-scale models now carry real physical knowledge, but robot action data, sample efficiency and safety still need a few breakthroughs before general-purpose robots become an engineering scale-up problem.

## Key points

- **RT-2.** Co-training a vision language model on web data and robot actions, expressed as language tokens, lets the robot handle unseen objects and concepts, such as moving a Coke can to the sum of 1 plus 2. Gopalakrishnan notes that new motions still only come from the team's own data: 130,000 teleoperated demonstrations covering about 17 objects.
- **RT-X.** A cross-lab dataset of single-arm robots, from small WidowX arms to industrial arms and Berkeley cable-routing robots. Xiao found it striking that one generalist model beat most labs' specialist models, and that it had to infer the robot type from the image alone.
- **RT-Trajectory.** Hindsight line sketches drawn onto existing demonstrations let users steer a robot with a rough drawn path, which Xiao says made it work in entirely new buildings.
- **AutoRT and a robot constitution.** Using 50 robots, about 20 at once, language models proposed tasks and checked them against rules inspired by Asimov's laws plus embodiment-specific rules. Gopalakrishnan stresses that prompting cannot guarantee safety; humans kept line of sight on about five robots each, with limits on speed and force.
- **Learning to Learn Faster and PIVOT.** A day/night cycle distils users' verbal feedback into the model overnight, and PIVOT shows an off-the-shelf VLM can pick motion arrows overlaid on an image with no robot training, though far below RT-2 performance.
- **Next steps.** Gopalakrishnan wants better interfaces between actions and foundation models, plus two-handed, dexterous tasks. Xiao wants to learn how much robot data is needed, whether a little on top or up to a million times more.

## Quotes

> "It's only as different as like English and Chinese or something, and the concepts are similar." — Keerthana Gopalakrishnan

> "So if no one's watching the robot, the rules could be watching the robot." — Keerthana Gopalakrishnan
