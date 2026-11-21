---
title: "World Models & General Intuition: Khosla's largest bet since LLMs & OpenAI"
date: 2025-12-06
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/world_models_general_intuition_khosla_s_largest_bet_since_llms_openai"
duration_min: 64
hosts: ["Alessio Fanelli", "swyx"]
description: "General Intuition bets that billions of action-labelled game clips from Medal can train spatiotemporal agents and world models the way web text trained LLMs."
tags: ["world-models", "imitation-learning", "gaming-data", "spatial-intelligence", "agents"]
source_transcript: "latent-space/episodes/2025/12/2025-12-06-world-models-general-intuition-khosla-s-largest-bet-since-llms-openai.md"
draft: false
---

## Thesis

Pim, CEO of General Intuition (GI) and founder of the game-clipping platform Medal, argues that Medal's clips are to interactive agents what Common Crawl was to LLMs: frames paired with player actions. GI predicts action tokens from pixels, uses imitation learning first, and plans to use world models to move into reinforcement learning. He presents it as a focused bet on spatiotemporal agents, comparable to Anthropic's early focus on code.

## Key points

- **The data asset.** swyx frames Medal as a 12 million user platform with 3.8 billion clips, recorded retroactively so players clip moments after they happen. OpenAI reportedly offered $500 million for the data; Pim declined and raised a $134 million seed led by Khosla Ventures.
- **Privacy by design.** Pim says Medal never logs raw keys such as W, A, S and D. Thousands of human labellers mapped inputs to in-game actions, so models can train on actions without reconstructing any individual's inputs.
- **Demo results.** The vision-only agent is pure imitation learning with no RL, no fine-tuning and no game state, running in real time against humans. Because the clips are highlights, Pim says it inherits peak human behaviour. Action predictions transferred from games to real-world video, and the world models cope with smoke and rapid camera motion.
- **Why not simulate.** Pim argues simulation cost explodes with the number of agents, their degrees of freedom and how much each action reveals, so he would rather bet on video transfer. He sees LLMs as useful orchestrators but text as a weak backbone for spatiotemporal generalisation.
- **Business.** GI offers an API (stream frames, get actions) to replace bot logic in games and engines, keeps low-liquidity games filled, and works with robotics firms whose machines take gaming inputs. It does not sell data and is partnering with Kyutai on open research.
- **2030 goal.** Pim wants GI models behind 80% of AI-driven "atoms to atoms" interactions, with simulation an even larger early market.

## Quotes

> "The baseline of our dataset is peak human performance." — Pim

> "I don't think you can value it unless you actually model it yourself and see what the capabilities are." — Pim
