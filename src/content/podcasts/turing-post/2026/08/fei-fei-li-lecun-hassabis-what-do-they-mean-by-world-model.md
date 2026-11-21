---
title: 'Fei-Fei Li, LeCun, Hassabis: What Do They Mean by “World Model”?'
description: >-
  'World model' names a job, not an architecture: predicting the consequences of
  actions. Ksenia Se argues these models should be tested by intervening in
  their world, not by how realistic they look.
pubDate: '2026-08-31'
show: turing-post
url: >-
  https://www.turingpost.com/podcast/s/turing_post/fei-fei_li_lecun_hassabis_what_do_they_mean_by_world_model
durationMin: 17
hosts:
  - Ksenia Se
guests: []
tags:
  - world-models
  - jepa
  - video-generation
  - planning
  - evaluation
draft: false
---
## Thesis

Ksenia Se argues that when Demis Hassabis, Yann LeCun and Fei-Fei Li say "world model", they share a goal but are not building the same machine. A world model is the predictive part of a planning loop: it compresses observations into a state and predicts what an action will cause. Its training objective decides what it keeps and what it forgets. She concludes that realism and low prediction error are weak evidence of understanding, and that the better test is to change one factor and see whether the prediction responds correctly.

## Key points

- **Core vocabulary.** Se explains a "latent state" as numbers the model invents for itself, with no readable label such as friction. She explains "imagination" as prediction run in a loop: each predicted step becomes the input for the next.
- **Three families.** Pixel-predicting models such as Sora, Kling and DeepMind's Genie (the approach Hassabis champions) generate future frames. JEPA-style models predict how a compressed representation changes. MuZero keeps only what the planner needs, such as rewards and values. The families overlap.
- **Model predictive control.** In the PushT task, the planner imagines several pushes, carries out only the first and then replans, so prediction errors do not build up.
- **Colour breaks the plan.** The Stable World Model platform, from Randall Balestriero's group at Brown with LeCun's lab and Mila, showed that changing the agent's colour cut PushT success from about 51% to 12%. Prediction errors for successful and failed plans overlapped heavily.
- **Video still fails physics.** In VideoPhy-2 from Aditya Grover's group at UCLA, the best model passed both the event and physics checks only 22% of the time. A March 2026 evaluation, Physion-Eval, found physical glitches in 83% of third-person and 93% of first-person videos from models including Veo 3.1 and Kling 2.4.
- **Test with interventions.** Se suggests painting the background purple (the prediction should not change) or changing friction or mass (it should).

## Quotes

> "I would actually call it prediction run in a loop, which, in my opinion, gives you the more precise picture." — Ksenia Se

> "The model aced the wallpaper, but it failed the block." — Ksenia Se
