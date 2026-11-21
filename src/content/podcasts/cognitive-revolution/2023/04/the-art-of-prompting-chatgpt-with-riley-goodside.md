---
title: The Art of Prompting ChatGPT With Riley Goodside
description: >-
  Scale AI's Riley Goodside traces how language models moved from pure text
  prediction to instruction tuning and RLHF, and argues they are best used as
  composable task capabilities.
pubDate: '2023-04-18'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/the-art-of-prompting-chatgpt-with-riley-goodside/
youtube: 'https://www.youtube.com/watch?v=zg3H-9nxkyI'
hosts:
  - Nathan Labenz
  - Erik Torenberg
guests:
  - Riley Goodside
tags:
  - prompt-engineering
  - large-language-models
  - rlhf
  - gpt-4
  - red-teaming
draft: false
---
## Thesis

Riley Goodside, Staff Prompt Engineer at Scale AI, argues that understanding what a large language model is requires knowing how it was built: pretraining, then instruction tuning, then RLHF. With that history in mind, he says the practical approach is to treat models as a set of known capabilities to compose, while staying skeptical of their output.

## Key points

- **Three eras of models.** Goodside describes pretrained models as predicting a "multiverse" of possible documents, so early prompting meant framing text that could only be completed correctly, such as flattering the model as a "masterful French translator". InstructGPT-style tuning, using Scale contractors, made models follow instructions; RLHF in text-davinci-003 and ChatGPT made them reject absurd premises like Hofstadter's Golden Gate Bridge question.
- **Mode collapse.** Tuning concentrates probability on one "best" answer. Goodside cites text-davinci-002 picking 97 about 20% of the time when asked for a random number, and repetitive phrasing in creative writing.
- **Prompting tricks and limits.** He calls the format trick, learned from Boris Power at OpenAI, his favorite technique, and notes models cannot reverse strings because they see tokens, not letters.
- **Instructions replace datasets.** Extracting US cell phone carrier names from tweets once required data collection and a custom model; now a page of instructions plus a few edge-case examples works, and a new carrier means one added line.
- **Comparing models.** Goodside sees Claude, Bard and leaked LLaMA weights eroding OpenAI's lead, and compares models by building progressively harder test cases. Scale's Spellbook helps deploy and evaluate prompts across models.
- **Work and safety.** He expects paralegal-style document review and clerical work to be most exposed, describes red teaming as "breaking chatbots so that they can be fixed", and estimates AGI within the next decade. Labenz suggests pausing scale-ups for interpretability; Goodside says alignment and capability are hard to decouple.

## Quotes

> "I think the best way to think of these is to approach them as like LEGO bricks. Each brick is a capability" — Riley Goodside

> "So I think we want to accelerate alignment research as much as possible because there isn't any realistic prospect of slowing down research into capabilities, I think." — Riley Goodside
