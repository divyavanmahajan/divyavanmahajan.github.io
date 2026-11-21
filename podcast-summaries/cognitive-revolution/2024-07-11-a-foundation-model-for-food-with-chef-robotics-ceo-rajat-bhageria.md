---
title: "A Foundation Model for Food, with Chef Robotics CEO Rajat Bhageria"
date: 2024-07-11
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/a-foundation-model-for-food-with-chef-robotics-ceo-rajat-bhageria/"
youtube: "https://www.youtube.com/watch?v=ZUTVwgbM13w"
duration_min: 76
hosts: ["Nathan Labenz"]
guests: ["Rajat Bhageria"]
description: "Rajat Bhageria argues single-purpose food-assembly robots, trained on production data, will beat humanoids in commercial kitchens and eventually make robot-made delivered meals cheaper than cooking at home."
tags: ["robotics", "embodied-ai", "imitation-learning", "food-industry", "data-flywheel"]
source_transcript: "cognitive-revolution/episodes/2024/07/2024-07-11-a-foundation-model-for-food-with-chef-robotics-ceo-rajat-bhageria.md"
draft: false
---

## Thesis

Rajat Bhageria, founder and CEO of Chef Robotics, tells Nathan Labenz that the fastest route to useful embodied AI is partial automation of one narrow, labour-heavy task: scooping food into trays on high-mix production lines. Food cannot be simulated well, so real production data from deployed robots is what trains Chef's generalised food manipulation model. Bhageria argues that the long-term effect will be robot ghost kitchens and more homes without kitchens, rather than humanoid robots cooking in the home.

## Key points

- **Why assembly.** Bhageria says plating and assembly make up about 70% of labour in food manufacturing, because prep and cooking scale sublinearly while assembly scales linearly. Workers often scoop food in 34-degree rooms, and staff turnover is high.
- **The module.** Each module is a person-sized unit on casters with one 6-DOF collaborative arm, RGBD cameras, force-torque sensors and scales. It needs only 110V power and compressed air. Chef has made about 18-20 million servings.
- **Onboarding ingredients.** Customers upload meal cards, which a VLM parses. Sliders with generated images capture traits such as stickiness, and a model proposes a starting policy. The robot then tunes itself on each batch by picking and dumping before it starts placing food.
- **Beating human baselines.** Bhageria says humans over-pick to avoid fines, which matters because 40-50% of COGS is the food itself. On typical items, humans show 4-5% bias and 16-18% coefficient of variation, against about 1% bias and roughly 8% CV for Chef.
- **From parameters to imitation learning.** Early policies were hand-tuned with about 200 parameters per ingredient. Chef now uses teleoperated demonstrations and transformer-based imitation learning to cut the time it takes to onboard new ingredients, which Bhageria calls the core flywheel metric.
- **Business and vision.** Chef sells robotics as a service at an annual fee below the cost of the labour it replaces. Revenue grew 4x from 2022 to 2023. Bhageria thinks humanoids, like autonomous vehicles, are decades away and that the biggest impact of AI will be on physical labour.

## Quotes

> "if I have a humanoid, I'm spending like half of my compute just not trying to fall down." — Rajat Bhageria

> "I think my opinion here is that the biggest impact of AI is gonna be on the physical world." — Rajat Bhageria
