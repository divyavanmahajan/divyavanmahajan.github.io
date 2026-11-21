---
title: >-
  [NeurIPS Best Paper] 1000 Layer Networks for Self-Supervised RL — Kevin Wang
  et al, Princeton
description: >-
  Reinforcement learning can scale to networks up to 1,000 layers deep, but only
  by swapping reward maximisation for a self-supervised contrastive objective
  plus residual connections and layer norm.
pubDate: '2026-01-02'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/neurips_best_paper_1000_layer_networks_for_self-supervised_rl_kevin_wang_et_al_princeton
durationMin: 28
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Kevin Wang
  - Ishaan Javali
  - Michał Bortkiewicz
  - Benjamin Eysenbach
tags:
  - reinforcement-learning
  - scaling
  - self-supervised-learning
  - robotics
  - neurips
draft: false
---
## Thesis

The Princeton team behind a NeurIPS 2025 best paper argues that deep RL stayed stuck on two-to-four-layer networks because value-based objectives do not scale. By recasting goal-conditioned RL as a self-supervised classification problem and adding standard deep-learning architecture, they trained networks up to 1,000 layers deep with large performance jumps. Their adviser Benjamin Eysenbach stresses that the objective, not just size, is the key.

## Key points

- **Origins.** Kevin Wang started the project as an undergraduate in an independent-work seminar taught by Eysenbach, collaborating with Ishaan Javali and later Michał Bortkiewicz. Eysenbach admits he was sceptical, but saw it as a low-cost bet because Bortkiewicz had built infrastructure that made experiments easy.
- **The recipe.** Instead of learning a value function, the method learns representations of states, actions and future states, pulling together those on the same trajectory and pushing apart others, with no hand-crafted reward. Depth alone degraded performance; only the combination with residual connections and layer norm produced sudden jumps at "critical depths".
- **Depth beats width per parameter.** Javali explains that parameters grow roughly linearly with depth but quadratically with width, so depth is more parameter- and sample-efficient. Many environments saturate by about 64 layers.
- **Data and compute.** GPU-accelerated JAX GCRL environments collect thousands of trajectories in parallel; Bortkiewicz notes gains appear only after about 50 million transitions. Even the 1,000-layer networks run on a single 80GB H100.
- **Blurring categories.** Eysenbach says the code has no reward-maximisation line, so the work sits between RL and self-supervised learning. Wang likens the objective to next-state classification, an implicit world model, and notes deeper networks also unlock batch-size scaling.
- **Next steps.** The team suggests robotics as an alternative to imitation learning, distilling deep "teacher" networks into shallow students (swyx's framing), stitching sub-behaviours at test time, and vision-language-action models.

## Quotes

> "using big networks not only requires these architectural tricks, but also, as Kevin mentioned before, it requires using a different objective." — Benjamin Eysenbach

> "all of our experiments, even the thousand-layer networks, can be run on one single eighty gigabyte H100 GPU." — Kevin Wang
