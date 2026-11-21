---
title: "Moonlake: Causal World Models should be Multimodal, Interactive, and Efficient — with Chris Manning and Fan-yun Sun"
date: 2026-04-02
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/moonlake_causal_world_models_should_be_multimodal_interactive_and_efficient_with_chris_manning_and_fan-yun_sun"
duration_min: 67
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Chris Manning", "Fan-yun Sun"]
description: "Moonlake argues that useful world models must be action-conditioned and built on symbolic abstractions and tools like game engines, not only on scaled-up pixel prediction."
tags: ["world-models", "multimodal-ai", "game-development", "embodied-ai", "symbolic-reasoning"]
source_transcript: "latent-space/episodes/2026/04/2026-04-02-moonlake-causal-world-models-should-be-multimodal-interactive-and-effi.md"
draft: false
---

## Thesis

Chris Manning and Fan-yun Sun of Moonlake argue that video generators such as Sora or Veo produce attractive pixels without understanding the consequences of actions. Moonlake instead uses a multimodal reasoning model that works with symbolic abstractions and tools such as physics engines to build interactive, persistent worlds, then a separate diffusion model to make them look realistic. They describe this as "structure and scale", not a rejection of the bitter lesson.

## Key points

- **Origin.** Sun saw at NVIDIA Research how much companies pay vendors for hand-built interactive worlds to train and evaluate robots and agents, and concluded that models need interactive data to learn the consequences of actions.
- **Action-conditioned models.** Manning says observational video lacks the actions behind it, and pixels are far less abstract than language. If abstraction lets you use five orders of magnitude less data, progress is faster; he cites neuroscience showing humans process only a small part of what they see.
- **Disagreement with LeCun.** Manning says Yann LeCun undervalues language and symbols. Citing Dan Dennett, he calls language a cognitive tool that set humans apart from chimpanzees, and argues a transformer's weights can serve as a joint representation of the world.
- **Reasoning traces and tools.** A bowling demo shows the model reasoning about geometry, physics, scoring and audio triggers. Sun treats code and physics engines as tools the model chooses, which also gives spatial audio and multiplayer support that pure video models lack.
- **Reverie.** Moonlake's diffusion model restyles a persistent game state into photorealistic or arbitrary styles. Sun calls it a new rendering paradigm that could replace rasterisers and DLSS, and lets game state drive rendering.
- **Evaluation.** Both say world models lack clean benchmarks: for games the metric is time spent, for robotics robustness after deployment. Moonlake has about eighteen people and is hiring people who combine code generation, vision and graphics skills.

## Quotes

> "it's the language that's doing ninety percent of the work and the vision barely works." — Chris Manning

> "you only actually have a world model if you can predict, given some action is taken, what is going to change in the world because of it." — Chris Manning
