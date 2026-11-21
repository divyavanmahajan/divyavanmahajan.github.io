---
title: Autonomous Vehicle Research at Waymo
description: >-
  Waymo's Drago Anguelov argues that autonomy has two equally hard problems,
  building the onboard driver and validating it, and that large models and
  learned simulators drive both.
pubDate: '2025-11-13'
show: practical-ai
episode: 336
url: 'https://share.transistor.fm/s/7b9cfe10'
durationMin: 52
hosts:
  - Daniel Whitenack
  - Chris Benson
guests:
  - Drago Anguelov
tags:
  - autonomous-vehicles
  - robotics
  - simulation
  - world-models
  - vision-language-models
draft: false
---
## Thesis

Drago Anguelov, who leads Waymo's AI foundations team, returns five years after his last appearance to describe how Waymo grew from one Phoenix service into a multi-city robotaxi business. His central point is that autonomy means solving two problems: building the onboard driver and proving it is safe, which needs large-scale, realistic simulation. He sees ideas from LLMs, such as scaling laws, next-token prediction and reinforcement learning, transferring to driving, but with real-world twists.

## Key points

- **Scale and safety record.** Anguelov says Waymo serves hundreds of thousands of paid rides a week in San Francisco, Los Angeles, Phoenix, Atlanta and Austin, has passed 100 million autonomous miles, and is five times less likely to be in crashes with critical injuries. He cites a Swiss Re study as outside validation.
- **Expanding the operating domain step by step.** Waymo moved from suburban Chandler to dense San Francisco, is giving employees highway rides, plans a snow-capable sixth-generation vehicle, and intends to launch driverless service in London, with testing under way in Tokyo.
- **Fewer, larger models.** Waymo's onboard stack has consolidated into fewer models. Off board, his team builds a Waymo Foundation Model that combines vision language models with lidar and radar fusion and world-evolution modelling, used to curate data and teach onboard models. A safety harness checks against VLM hallucination.
- **LLM ideas transfer, with differences.** Waymo's MotionLM tokenises motion like language. Anguelov says driving needs much more data per parameter than language because motion is less diverse.
- **Simulation is the hard part.** Rare events happen once in a million miles or more, so Waymo runs millions of virtual miles daily. Closed-loop testing must handle covariate shift and simulated agents that react plausibly. He is interested in world models like Google's Genie and in fast/slow "system one/system two" designs.
- **Motivation.** He notes that about 40,000 people die on US roads each year and sees that as a mandate to expand.

## Quotes

> "There are two main problems in autonomy. One is to build this onboard driver and another one is to test and validate this onboard driver" — Drago Anguelov

> "The decision is fairly low dimensional. It's like, okay, steering or acceleration, but the inputs are incredibly bulky" — Drago Anguelov
