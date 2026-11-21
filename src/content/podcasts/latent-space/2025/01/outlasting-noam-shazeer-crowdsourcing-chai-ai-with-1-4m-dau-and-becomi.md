---
title: >-
  Outlasting Noam Shazeer, crowdsourcing Chai AI with >1.4m DAU, and becoming
  the "Western DeepSeek" — with William Beauchamp, Chai Research
description: >-
  Chai founder William Beauchamp argues that consumer AI wins through
  user-generated content, fast human-feedback loops and inference efficiency,
  not ever-larger monolithic models.
pubDate: '2025-01-26'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/outlasting_noam_shazeer_crowdsourcing_chai_ai_with_1_4m_dau_and_becoming_the_western_deepseek_with_william_beauchamp_chai_research
durationMin: 76
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - William Beauchamp
tags:
  - consumer-ai
  - ai-companions
  - human-feedback
  - inference
  - rejection-sampling
draft: false
---
## Thesis

William Beauchamp, a former quant trader who founded Chai Research, argues that AI will look less like a single monolithic intelligence and more like a platform where many small teams and users build specialised models, much as quant firms specialise within a market. He credits Chai's growth to customer obsession, a crowdsourced model platform scored by human preference, and a focus on performance per dollar at inference time, which he compares to DeepSeek's approach.

## Key points

- **Finding product-market fit by accident.** Beauchamp says news and recipe bots got no traction. A therapist bot built by his sister drew users who stayed about 20 minutes each, which led Chai to let users create their own bots on GPT-J, a six-billion-parameter model.
- **Competing with Character AI.** He says Chai was the top AI app with around 100,000 DAU before Character AI launched and raised large rounds. Chai now reports 1.4 million DAU and revenue that has grown from $10 million to over $22 million.
- **Chaiverse and human feedback.** Developers submit models, each model is shown to users for about 5,000 completions to get an Elo-style ranking, and the team ships at least 100 LLMs a week. Feedback that once took 30-day retention tests now takes about three hours. Beauchamp says "blending", randomly serving 50/50 from two strong models, works well.
- **Most features fail.** Voice took three months to build. Only 10-15% of users tried it, for 10-15% of their time, so it made no difference to the metrics and was dropped.
- **Inference choices.** Chai never streams responses. It generates 16 completions and picks one with a reward model trained on whether users reply, using an inference engine from MK1 that Beauchamp says beat vLLM.
- **Scepticism on reasoning.** Beauchamp sees LLMs as simulators with "super knowledge" rather than reasoning engines, and expects capability to follow an S-curve.

## Quotes

> "The surprising thing, like, the most surprising thing what doesn't work is almost everything doesn't work." — William Beauchamp

> "We're like, we're feedback rich. Like, when you've got one and a half million people a day, we get as much feedback from humans as we want." — William Beauchamp
