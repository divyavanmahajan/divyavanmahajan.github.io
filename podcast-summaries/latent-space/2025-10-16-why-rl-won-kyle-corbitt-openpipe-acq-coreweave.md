---
title: "Why RL Won — Kyle Corbitt, OpenPipe (acq. CoreWeave)"
date: 2025-10-16
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/why_rl_won_kyle_corbitt_openpipe_acq_coreweave"
duration_min: 68
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Kyle Corbitt"]
description: "Kyle Corbitt argues that task-specific reinforcement learning, with relative LLM-judged rewards, can make agents production-reliable, and that building realistic training environments is now the main bottleneck."
tags: ["reinforcement-learning", "fine-tuning", "ai-agents", "llm-as-judge", "continual-learning"]
source_transcript: "latent-space/episodes/2025/10/2025-10-16-why-rl-won-kyle-corbitt-openpipe-acq-coreweave.md"
draft: false
---

## Thesis

Kyle Corbitt, co-founder of OpenPipe, explains to Alessio Fanelli and swyx why the company moved from distilling GPT-4 into small models to reinforcement learning on specific tasks. He argues that rewards are now largely solved by LLM judges that rank outputs against each other. The hard part, in his view, is building realistic environments. If continual RL works, he says, many agents stuck at proof-of-concept could go into production.

## Key points

- **Distillation era.** OpenPipe started right after GPT-4 launched and reached $1M ARR about eight months after its product launch. It sold distillation to customers paying OpenAI hundreds of thousands of dollars a month. Repeated price cuts on frontier models then eroded that value proposition.
- **When to fine-tune.** Corbitt says fine-tuning pays off mainly when latency forces you onto a smaller model, as in real-time voice. For about 90% of other cases it is not worth it. The real cost is engineering time and slower iteration; a training run costs between five and a couple of hundred dollars. He remains a LoRA bull.
- **The RL bet.** In January 2025 he gave RL about a 25% chance of being the right direction. He now puts it at 55-60%.
- **GRPO's limits.** GRPO drops PPO's value model and only needs relative scores. But it needs parallel rollouts in a fully reproducible environment, and replicating something like Airbnb, including its bugs and its users, is hard. He expects GRPO to be a dead end.
- **RULER and prompt optimization.** OpenPipe's RULER asks an LLM to rank a group of runs. Using Qwen 2.5 14B as the trained model and Qwen 2.5 32B as the judge, the agent beat frontier models on the task. On one benchmark, GEPA prompt optimization went from about 50% to 56%, while RL reached about 96%.
- **CoreWeave and continual learning.** The Weights & Biases founders approached OpenPipe, which now ships serverless RL. Corbitt estimates ten times today's inference is stuck in proofs of concept for lack of reliability, which continual learning could fix. He says reward hacking is easy to spot and fix.

## Quotes

> "I honestly kinda feel like the reward assignment problem is like fairly solved." — Kyle Corbitt

> "I would say for ninety percent of use cases where you aren't forced to a smaller model, then it's still not a good ROI" — Kyle Corbitt
