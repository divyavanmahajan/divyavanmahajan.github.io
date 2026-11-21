---
title: >-
  [State of Post-Training] From GPT-4.1 to 5.1: RLVR, Agent & Token Efficiency —
  Josh McGrath, OpenAI
description: >-
  OpenAI's Josh McGrath argues post-training progress now hinges on trustworthy
  reward signals and token efficiency, not new optimisation tricks, as models
  move from GPT-4.1 to 5.1.
pubDate: '2025-12-31'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/state_of_post-training_from_gpt-4_1_to_5_1_rlvr_agent_token_efficiency_josh_mcgrath_openai
durationMin: 28
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Josh McGrath
tags:
  - post-training
  - reinforcement-learning
  - token-efficiency
  - long-context
  - openai
draft: false
---
## Thesis

Josh McGrath, a post-training researcher on OpenAI's thinking models, argues that the real advances since the PPO-versus-DPO debates of 2023 come from better data and reward signals rather than new optimisation algorithms. He frames RLHF and RLVR as the same policy-gradient machinery fed with signals of different quality, and says the measure that matters for agents is how many tokens a model needs to finish a task.

## Key points

- **Why post-training.** McGrath moved from pre-training data curation because post-training could shift model behaviour far more than the small compute-efficiency gains available in pre-training. He says RL runs have many more moving parts, since every task can have its own grading setup.
- **Signal quality over optimisation.** He finds most RLVR and RLHF papers read like optimisation papers, while the real innovation is where the data comes from. In his view, GRPO from the DeepSeek math paper mattered most because it came with a reward signal that can be trusted.
- **Token efficiency.** From GPT-5 to 5.1, evals rose a little but the tokens needed to reach them fell sharply. McGrath says he lives by that kind of chart because it decides how many tool calls an agent can make within a budget OpenAI can serve.
- **Products and personality.** He worked on the shopping model, a deep-research-style model that can be interrupted mid-task, released around Black Friday. He uses GPT-5 Thinking on high instead of the original Deep Research. He also says users care a lot about personality, which is why ChatGPT now has personality toggles.
- **Long context.** McGrath helped increase GPT-4.1's effective context window by about 10x. He points to the Graph Walks evals, which need transformations across the whole window, as still climbing. A host counters with an 8-billion-token support corpus and grep-based agents.
- **Hiring gap.** His personal view is that the field needs more people who can do both distributed systems and ML research, because the bottleneck at the frontier keeps moving between the two.

## Quotes

> "do I wanna make compute efficiency wins of like three percent or do I wanna like change the behavior by forty percent?" — Josh McGrath

> "if you look at a two D plot of how many tokens it takes for us to get that, it went way down." — Josh McGrath
