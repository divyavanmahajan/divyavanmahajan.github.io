---
title: >-
  #490 – State of AI in 2026: LLMs, Coding, Scaling Laws, China, Agents, GPUs,
  AGI
description: >-
  Nathan Lambert and Sebastian Raschka argue that AI progress now comes from
  post-training, inference-time scaling and compute rather than new
  architectures, with no lab holding a lasting technical lead.
pubDate: '2026-02-01'
show: lex-fridman
episode: 490
url: 'https://lexfridman.com/ai-sota-2026/'
youtube: 'https://www.youtube.com/watch?v=EV7WhVT270Q'
durationMin: 280
hosts:
  - Lex Fridman
guests:
  - Nathan Lambert
  - Sebastian Raschka
tags:
  - llms
  - scaling-laws
  - open-weight-models
  - post-training
  - ai-coding
  - china
draft: false
---
## Thesis

Sebastian Raschka (author of Build a Large Language Model (From Scratch)) and Nathan Lambert (post-training lead at Ai2) argue that no lab will keep a technology monopoly, because researchers move between labs; budgets and hardware are the real differentiators. The architecture has barely changed since GPT-2. The big gains of 2025 came from reinforcement learning with verifiable rewards (RLVR) and inference-time scaling, and both expect steady, jagged progress rather than a near-term singularity.

## Key points

- **China and open weights.** Lambert says DeepSeek is losing its crown as China's top open model maker to Z.ai's GLM, MiniMax and Moonshot's Kimi K2 Thinking. Chinese labs release open weights because US companies will not pay for Chinese APIs. He expects more open model builders in 2026 than in 2025.
- **Who leads.** Lambert credits Claude Opus 4.5 and Claude Code for Anthropic's lead in coding, and expects Gemini to keep gaining on ChatGPT thanks to Google's scale and TPUs. He still sees OpenAI as the most likely source of a new paradigm.
- **Scaling is alive but expensive.** Lambert says pre-training scaling still works, but serving costs far exceed training costs: DeepSeek reported about $5 million for pre-training, and Ai2 spent about $2 million on OLMo 3's cluster. He predicts a $2,000-a-month subscription this year.
- **Post-training recipe.** Mid-training adds reasoning traces, RLVR lets models learn by trial and error on math and code, and RLHF adds the finishing style. Unlike RLHF, RLVR shows a log-compute, linear-gain scaling curve. Raschka saw Qwen 3 go from 15% to 50% on MATH-500 in 50 steps, which Lambert says may reflect data contamination.
- **Coding and AGI.** Lambert calls AI "jagged": strong at front-end work, weak at distributed ML. He thinks software will be largely automated sooner than research. Fridman notes the AI 2027 authors moved their superhuman-coder estimate to 2031.
- **Open models in the US.** Lambert's ATOM Project argues that about $100 million could produce competitive American open models. He cites Ai2's $100 million NSF grant and NVIDIA's Nemotron 3 as signs of progress.

## Quotes

> "I don't think the ideas will be proprietary, but rather the resources that are needed to implement them." — Sebastian Raschka

> "Big tech is going to spend $100 billion much faster than we get an automated AI researcher that enables an AI research singularity." — Nathan Lambert
