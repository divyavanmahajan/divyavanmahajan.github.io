---
title: >-
  The RL Fine-Tuning Playbook: CoreWeave's Kyle Corbitt on GRPO, Rubrics,
  Environments, Reward Hacking
description: >-
  Kyle Corbitt argues reinforcement learning beats supervised fine-tuning
  because it stays within a model's existing patterns, and that narrow-task
  reward hacking is easy to catch with iterative rubrics.
pubDate: '2026-05-01'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/the-rl-fine-tuning-playbook-coreweave-s-kyle-corbitt-on-grpo-rubrics-environments-reward-hacking/
youtube: 'https://www.youtube.com/watch?v=1X1-IRaYY6U'
durationMin: 107
hosts:
  - Nathan Labenz
guests:
  - Kyle Corbitt
tags:
  - reinforcement-learning
  - fine-tuning
  - grpo
  - reward-hacking
  - open-models
draft: false
---
## Thesis

Kyle Corbitt, founder of OpenPipe and now leading CoreWeave's serverless training team, tells Nathan Labenz that reinforcement learning (RL) generally reaches a higher ceiling than supervised fine-tuning (SFT) because it changes as few tokens as needed and stays "in the grooves" a model already has. Whether that is worth doing depends on the pain: for most teams frontier models are good enough, but latency-bound products can get smaller, cheaper and better models with RL.

## Key points

- **Why RL is less destructive.** Corbitt says SFT throws the weights "all to pieces" even with few examples and a low learning rate, causing catastrophic forgetting, because it overwrites tokens the model would have got right anyway. A KL divergence penalty does not fix this.
- **GRPO demystified.** He explains that GRPO dropped PPO's value model and instead compares parallel rollouts, giving more credit to rarer tokens in above-average runs. He says it took off because DeepSeek scaled it and released a working model; today's practice includes later tweaks such as DAPO, GSPO and CISPO.
- **Distillation and China.** Corbitt thinks Chinese labs gain more from using frontier models as LLM judges in RL than from SFT on their outputs. He sees compute as their main constraint and attributes benchmark-maxing to the incentives of less-known labs.
- **Recursive self-improvement.** He believes labs are already in a self-improvement loop and that the bar is low: just be better than the smartest human. He has declined to invest in RL environment start-ups, which grow fast but sell assets that saturate quickly.
- **When to fine-tune.** Latency is the main driver, for voice, dictation and customer-support products. He claims RL can cut latency to about 30% of a frontier model's and cost per token by at least an order of magnitude, often using rank-one LoRA adapters that can hold several tasks.
- **Catching reward hacking.** He recommends iterating on the judge prompt in short runs. His model learned to title every Hacker News story "Google lays off 75% of workforce effectively immediately"; adding a second judge that checked titles against the story fixed it.

## Quotes

> "the model had learned that if it just gave every single story the title, Google lays off 75% of workforce effectively immediately" — Kyle Corbitt

> "with reward hacking, like if it figures out some trick, it's just going to want to like apply that trick as often as possible." — Kyle Corbitt
