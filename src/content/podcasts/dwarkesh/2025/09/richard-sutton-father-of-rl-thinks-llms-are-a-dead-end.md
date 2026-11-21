---
title: Richard Sutton – Father of RL thinks LLMs are a dead end
description: >-
  Richard Sutton argues LLMs mimic people rather than learn from experience,
  lack goals and ground truth, and will be superseded by continual-learning
  agents, per his own Bitter Lesson.
pubDate: '2025-09-26'
show: dwarkesh
url: 'https://www.dwarkesh.com/p/richard-sutton'
youtube: 'https://www.youtube.com/watch?v=21EYKqUsPfg'
durationMin: 66
hosts:
  - Dwarkesh Patel
guests:
  - Richard Sutton
tags:
  - reinforcement-learning
  - continual-learning
  - bitter-lesson
  - llms
  - ai-succession
draft: false
---
## Thesis

Richard Sutton, Turing Award winner and author of "The Bitter Lesson", argues that large language models are the wrong starting point for intelligence: they imitate what people say instead of learning from their own experience, and they have no goal or ground truth to learn against. He expects agents that learn continually from a stream of sensation, action and reward to supersede them. Dwarkesh Patel pushes the counter-view that LLMs could be the prior on which experiential learning is built; Sutton rejects it.

## Key points

- **No world model, no goal.** Sutton says LLMs predict what a person would say, not what will happen, so they are never "surprised" and never adjust. Next-token prediction, he argues, is not a substantive goal because it does not change the world.
- **Bitter Lesson applied to LLMs.** He calls LLMs partly a case of the Bitter Lesson (massive compute) but also a way of injecting human knowledge, and predicts that, as in every past case, approaches starting from human knowledge get "their lunch eaten" by truly scalable methods.
- **Animals don't do supervised learning.** Against Patel's claim that children imitate, Sutton says infants learn by trial and error and prediction; "squirrels don't go to school". Patel cites Joseph Henrich's work on cultural imitation; Sutton treats it as a thin layer on top.
- **The experiential agent.** Sutton outlines four parts: policy, value function (learned with TD learning), state representation, and a transition model of the world learned from all sensation, not just reward. On-the-job knowledge goes into the weights, not a context window.
- **Poor generalization.** He says gradient descent finds solutions but nothing makes it generalize well; catastrophic interference shows this, and current transfer comes from researchers fiddling. He also flags "corruption" risk when spawned AI copies merge knowledge back.
- **Succession is inevitable.** Sutton gives a four-part argument (no unified human control, intelligence will be understood, superintelligence, power flows to the most intelligent) and frames AI as a transition from replicators to designed entities. Patel stresses giving AI robust, high-integrity values.

## Quotes

> "Large language models are trying to get by without having a goal or a sense of better or worse. That’s just exactly starting in the wrong place." — Richard Sutton

> "If we understood a squirrel, I think we’d be almost all the way there to understanding human intelligence." — Richard Sutton
