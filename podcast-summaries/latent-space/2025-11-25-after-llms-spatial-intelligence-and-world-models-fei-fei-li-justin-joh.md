---
title: "After LLMs: Spatial Intelligence and World Models — Fei-Fei Li & Justin Johnson, World Labs"
date: 2025-11-25
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/after_llms_spatial_intelligence_and_world_models_fei-fei_li_justin_johnson_world_labs"
duration_min: 61
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Fei-Fei Li", "Justin Johnson"]
description: "World Labs founders argue spatial intelligence complements language, and present Marble, their editable 3D world generator, as a useful product today and a step toward full world models."
tags: ["world-models", "spatial-intelligence", "3d-generation", "computer-vision", "ai-research"]
source_transcript: "latent-space/episodes/2025/11/2025-11-25-after-llms-spatial-intelligence-and-world-models-fei-fei-li-justin-joh.md"
draft: false
---

## Thesis

Fei-Fei Li and Justin Johnson, co-founders of World Labs, argue that spatial intelligence (reasoning, moving and acting in 3D space) is the next frontier after language models and complements rather than replaces linguistic intelligence. Their first product, Marble, generates editable 3D worlds from text and images, and they pitch it both as a practical tool for creative industries now and as an early step toward general world models.

## Key points

- **Shared history.** Johnson joined Li's Stanford lab in 2012, the same quarter AlexNet came out, and later worked with fellow student Andre on image captioning and the 2016 dense captioning paper, including a real-time webcam demo.
- **Compute as the driver.** Johnson says per-card performance has grown about a thousandfold since AlexNet and usable compute per model about a millionfold, and that visual and spatial data can absorb that compute. He also notes performance per watt barely moved from Hopper to Blackwell, which leaves room for new hardware-aware architectures that academia should explore.
- **What Marble is.** Johnson describes Marble as a generative model of 3D worlds that natively outputs Gaussian splats, which render in real time on phones and VR headsets and allow precise camera control. Users can edit scenes and export them; World Labs' RTFM model instead generates frames one at a time.
- **Use cases.** The founders cite gaming, VFX, film, interior design (Johnson's kitchen remodel example) and synthetic simulation data for robot training, which Li calls a key middle ground given robotics' data shortage.
- **Language versus space.** Li points to the deduction of the DNA double helix and grasping a mug as tasks that are hard to reduce to language, and says nature spent 540 million years optimizing perception versus at most half a million years for language.
- **Academia and open science.** Li argues the real problem is under-resourced academia, citing her work on the NAIRR bill and Stanford's open Behavior benchmark for robot learning.

## Quotes

> "I think the deeply 3D, 4D spatial world has a level of structure that is fundamentally different from a purely generative, uh, signal that is one-dimensional." — Fei-Fei Li

> "A transformer is actually a model of a set of tokens." — Justin Johnson
