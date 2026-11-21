---
title: >-
  Jev: System One models for Prod, not God — with Diogo Almeida, CEO, TypeSafe
  AI
description: >-
  TypeSafe AI's Diogo Almeida argues that AI should be built for code, not chat:
  cheap, calibrated 'System One' models that programs call as reliable building
  blocks.
pubDate: '2026-09-21'
show: latent-space
url: 'https://www.latent.space/p/jev'
durationMin: 141
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Diogo Almeida
tags:
  - ai-models
  - calibration
  - developer-platforms
  - post-training
  - coding-agents
draft: false
---
## Thesis

Diogo Almeida, InstructGPT co-author and CEO of TypeSafe AI, argues that the industry has optimised models for humans (RLHF chatbots) and benchmarks (RLVR reasoning), while most economic value will come from code calling AI. Jev, TypeSafe's first "System One" or "large programmable" model, aims to be the leader on intelligence per dollar and to give calibrated, structured outputs that software can rely on.

## Key points

- **A new task, RLCD.** Almeida says progress comes from picking the right "North Star" task: RLHF set instruction following, RLVR optimises verifiable benchmarks, and TypeSafe's RLCD targets reliability for programmatic use. He calls TypeSafe a data lab and says all its training data is synthetic.
- **Calibration over mode collapse.** He argues RLHF causes mode dropping and overconfidence, which makes string outputs poor for decisions. Jev returns three primitives (choice, score and a Bernoulli-style probability) that map to switch statements, thresholds and if statements.
- **No refusals in an API.** Almeida calls refusals "a type error" for a background dependency and says safety alignment fractures intelligence. He would not build usage checks into the model layer. He favours robustness, meaning similar inputs give similar outputs, over determinism.
- **Decompose everything.** His advice: pass structured JSON state instead of templated system prompts, and ask many small parallel questions. Each one can then be tested and thresholded, which he calls "ML without the ML".
- **Launch and use cases.** The launch video reached about 38 million views. Almeida lists dark data analysis, real-time products, verifying LLM calls and "smart software" as the main use cases. He expects open coding agents to gain over single-model tools like Claude Code and Codex.
- **Pacing and neo-labs.** He calls the labs' push to pace the frontier a "sleight of hand" that takes ever more RLVR as given. He describes most neo-labs as value-destroying without a clear direction.

## Quotes

> "I think intelligence will be more like a database than a coworker." — Diogo Almeida

> "if you gave me a billion dollars, I wouldn't pre-train." — Diogo Almeida
