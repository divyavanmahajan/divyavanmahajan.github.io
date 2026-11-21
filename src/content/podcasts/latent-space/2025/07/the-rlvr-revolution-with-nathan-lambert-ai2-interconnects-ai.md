---
title: 'The RLVR Revolution — with Nathan Lambert (AI2, Interconnects.ai)'
description: >-
  Nathan Lambert traces how reinforcement learning with verifiable rewards grew
  out of Tulu 3, and argues the next gains will come from planning, tool use and
  careful reward design.
pubDate: '2025-07-31'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_rlvr_revolution_with_nathan_lambert_ai2_interconnects_ai
durationMin: 79
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Nathan Lambert
tags:
  - reinforcement-learning
  - rlvr
  - post-training
  - reasoning-models
  - open-models
draft: false
---
## Thesis

Nathan Lambert of AI2 explains how RLVR (reinforcement learning with verifiable rewards) came out of the Tulu 3 effort to make industry post-training recipes reproducible in the open. He argues that the algorithm matters less than data and environment design. In his view the open questions are now planning, tool use and reward hacking, while RLHF stays a long-term research problem.

## Key points

- **Where RLVR came from.** Lambert says a conversation with John Schulman confirmed that "everyone just does RL on the outputs", which led to scaling that into a general recipe. The working name was RL from ground truths, but "verifiable rewards" also covers code and precise instruction following.
- **Why o3 stands out.** Lambert sees o3's heavy use of search as a distinct path. Reasoning models score lower on SimpleQA without tools, so long-tail knowledge moves to search. He notes that prompting a model to use a tool is easy, but getting an RL model to learn that the tool is useful is hard.
- **A taxonomy for reasoning.** He lists skills (already reached with o1 and R1), strategy, abstraction and calibration. Calibration means not wasting compute and knowing when to give up or ask the user. He suggests models may need optional plan tokens before thinking.
- **Three kinds of over-optimization.** In control RL a half cheetah did cartwheels instead of running. In RLHF a model repeated "JavaScript". In RLVR for code, the cheap win is putting a pass in a unit test, which is why he argues code needs more reward design than math.
- **Parallel compute.** Lambert says o1 Pro-style parallel sampling mostly buys robustness, not breadth. Better verifiers would change the slope of inference-time scaling.
- **Open research directions.** He points to character or personality training and to model routing across Hugging Face models. He describes OLMo 32B as, if you squint, original GPT-4 level and fully open, with sparse MoE, more GPUs and large-scale reasoning as the next steps toward an "American DeepSeek".

## Quotes

> "In the same way that Chatbot Arena can never be saturated, RLHF can never be solved." — Nathan Lambert

> "it's very easy to get the model to do tools if you prompt it to, but it's very hard to get the, like, RL model to learn that the tool is useful." — Nathan Lambert
