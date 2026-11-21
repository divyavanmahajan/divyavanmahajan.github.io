---
title: Francois Chollet — Why the biggest AI models can't solve simple puzzles
description: >-
  François Chollet argues LLMs scale skill through memorisation, not
  intelligence, and launches the $1 million ARC Prize with Mike Knoop to reward
  on-the-fly program synthesis.
pubDate: '2024-06-11'
show: dwarkesh
url: 'https://www.dwarkesh.com/p/francois-chollet'
youtube: 'https://www.youtube.com/watch?v=UakqL6Pj9xo'
durationMin: 94
hosts:
  - Dwarkesh Patel
guests:
  - François Chollet
  - Mike Knoop
tags:
  - agi
  - benchmarks
  - program-synthesis
  - llm-limitations
  - reasoning
draft: false
---
## Thesis

François Chollet, creator of Keras and the ARC benchmark, argues that LLMs are big interpolative memories: scaling them adds skill and usefulness but not intelligence, which he defines as adapting efficiently to novelty. Dwarkesh Patel pushes back that models sit on a smooth spectrum of generalisation that scale keeps climbing. Chollet and Zapier co-founder Mike Knoop launch a $1 million ARC Prize to find out, and to pull research back towards new ideas.

## Key points

- **ARC resists memorisation.** Each ARC puzzle is novel and needs only core knowledge such as objects, counting and symmetry. Chollet says smart humans score 90-95%, average Mechanical Turk workers about 85, and a five-year-old over 50%; GPT-3 scored zero in the 2020 Kaggle contest.
- **Skill is not intelligence.** Chollet says benchmarks like GSM8K reward fetching memorised reasoning templates. LLMs handle Caesar ciphers with shifts of three or five, common online, but fail at nine. Bigger models gain skill, not generalisation.
- **Test-time fine-tuning.** Jack Cole's 240 million parameter model reaches 35% only by pre-training on millions of generated tasks and fine-tuning on each test problem; without that it gets 1-2%. Chollet calls this active inference.
- **Deep learning plus program search.** Chollet sees gradient descent as System 1 intuition and discrete program search as System 2 reasoning. He expects the winner to merge them, using deep learning to steer search over small DSLs of 100-200 primitives.
- **Automation without AGI.** Chollet concedes memorisation can automate much static work but predicts more software engineers in five years. He says OpenAI set back AGI research by ending open publication and drawing resources into LLMs.
- **Prize rules.** Knoop describes $500,000 for the first team to reach 85% on a private test set, plus a $100,000 progress prize split between leaderboard and paper. Solutions must run offline on a P100 within about 12 hours and be released into the public domain; ARC 2.0 is planned.

## Quotes

> "You are increasing its usefulness, its scope of applicability, but not its intelligence because skill is not intelligence." — François Chollet

> "OpenAI basically set back progress towards AGI by quite a few years, probably like 5-10 years." — François Chollet
