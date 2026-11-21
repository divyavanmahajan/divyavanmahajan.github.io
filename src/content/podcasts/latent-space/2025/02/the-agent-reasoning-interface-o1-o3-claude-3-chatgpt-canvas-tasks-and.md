---
title: >-
  The Agent Reasoning Interface: o1/o3, Claude 3, ChatGPT Canvas, Tasks, and
  Operator — with Karina Nguyen of OpenAI
description: >-
  Karina Nguyen explains how Canvas and Tasks were built by joint
  product-research teams through post-training, and why collaboration and trust
  must come before fully delegated agents.
pubDate: '2025-02-01'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_agent_reasoning_interface_o1_o3_claude_3_chatgpt_canvas_tasks_and_operator_with_karina_nguyen_of_openai
durationMin: 69
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Karina Nguyen
tags:
  - agents
  - interface-design
  - post-training
  - chatgpt
  - model-behavior
draft: false
---
## Thesis

Karina Nguyen, who wrote much of the early Claude.ai code at Anthropic and now leads a research team at OpenAI, argues that new AI interfaces come from training models and building products together. In her view, ChatGPT should become a task-oriented generative OS that shapes itself to the user's intent, and agents earn delegation by first proving themselves as reliable collaborators.

## Key points

- **Anthropic years.** Nguyen joined around August 2022 as a designer and front-end engineer. She built Claude in Slack, then wrote about the first 50,000 lines of Claude.ai, without review, after ChatGPT launched. On Claude 3 she worked on Haiku post-training, new evals and the model card, and notes that GPQA was so noisy that results were averaged over five runs.
- **Behavioural design.** She describes model personality as character design built on core values. The hard part is when values conflict, such as honesty versus harmlessness, and she calls dataset crafting more art than science.
- **Canvas process.** Canvas began as a pitch to Barrett Zoph around 4 July, staffed with five or six engineers. The team started with a prompted baseline and then post-trained 4o to handle choices like when to open the canvas, when to make targeted edits rather than full rewrites, and when to comment. Writing quality was judged with rubric-based human evals alongside Jan's model design team.
- **Tasks and process.** Tasks took under two months, compared with roughly four for Canvas. Her recipe: prompted baseline, evals the baseline fails, hill-climb, check for regressions, bug bash, ship as a separate beta model, then fold it into the core model.
- **Agents and computer use.** Nguyen defines agents as a progression from one-off actions to collaboration to trusted long-horizon delegation. swyx says he is bearish on computer use, which he finds slow, expensive and imprecise, and proposes expense reports as his benchmark for it. Nguyen expects small models to help with latency.

## Quotes

> "I think the model's personality is actually the reflection of the company or the reflection of the people who create that model." — Karina Nguyen

> "I feel like we are bottlenecked by like human creativity on like completely changing the way we think about the internet" — Karina Nguyen
