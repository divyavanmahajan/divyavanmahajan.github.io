---
title: "Sunday Robotics: Scaling the Home Robot Revolution with Co-Founders Tony Zhao and Cheng Chi"
date: 2025-11-19
show: no-priors
episode: 141
url: "https://www.youtube.com/watch?v=4-VzXoZqAH0"
youtube: "https://www.youtube.com/watch?v=4-VzXoZqAH0"
duration_min: 39
hosts: ["Sarah Guo", "Elad Gil"]
guests: ["Tony Zhao", "Cheng Chi"]
description: "Sunday's founders argue that robot-free data collection with a sensor glove, plus imitation learning, can scale home robots to consumers within a few years."
tags: ["robotics", "home-robots", "imitation-learning", "robot-data-collection", "hardware"]
source_transcript: "no-priors/episodes/2025/11/2025-11-19-sunday-robotics-scaling-the-home-robot-revolution-with-co-founders-ton.md"
draft: false
---

## Thesis

Tony Zhao and Cheng Chi, co-founders of Sunday and makers of the home robot Memo, tell Sarah Guo that robotics sits between its "GPT" and "ChatGPT" moments: a scalable recipe for manipulation exists, but nobody has scaled it into a consumer product yet. They argue that the bottleneck is high-quality real-world data, and that a glove worn by people, co-designed with a low-cost robot by a full-stack team, can supply it.

## Key points

- **Research lineage.** Chi explains that diffusion policy made imitation learning stable when data contains several ways of doing the same task. Zhao says ALOHA's low-latency teleoperation and ACT, with action chunking, showed transformers work for robotics once the data is dexterous enough.
- **Data without robots.** Chi built the 3D-printed UMI gripper around a GoPro; three students collected about 1,500 espresso-serving clips in two weeks. A failure in direct sunlight, after weeks of rain, showed how much distribution matching matters.
- **Scale and quality.** Sunday's glove is on version 5, with around 20 iterations per version. More than 500 people use it in the wild, and the founders say they have close to 10 million trajectories. They found glove data matches teleoperation in quality once the human is converted to look like the robot.
- **Design choices.** Memo has a friendly face and a three-finger hand, because most fingers move together. AI perception lets it use cheap, compliant, imprecise actuators that are safer at home.
- **Timeline and cost.** A beta programme puts robots in homes in 2026, with wider shipping in 2027 or 2028. Prototypes cost $6,000 to $20,000, mostly cladding, and the founders expect under $10,000 at a few thousand units.
- **Reading demos.** They advise checking whether a demo is autonomous, whether it generalises, and how long the task sequence is. Sunday's own demos include zero-shot tasks in six Airbnbs, loading wine glasses, folding socks and operating an espresso machine.

## Quotes

> "I realized that all this information you can get from a GoPro" — Cheng Chi

> "once you have very strong and dextrous data sets like just throw a transformer at it and it works quite well" — Tony Zhao
