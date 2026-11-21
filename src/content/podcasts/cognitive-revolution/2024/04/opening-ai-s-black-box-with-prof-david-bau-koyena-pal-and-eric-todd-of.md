---
title: >-
  Opening AI's Black Box with Prof. David Bau, Koyena Pal, and Eric Todd of
  Northeastern University
description: >-
  Bau Lab researchers show that language models encode several future tokens in
  one hidden state and pass in-context task information through a small set of
  attention heads.
pubDate: '2024-04-05'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/opening-ais-black-box-with-prof-david-bau-koyena-pal-and-eric-todd-of-northeastern-university/
youtube: 'https://www.youtube.com/watch?v=O4Opvjze8Ic'
durationMin: 79
hosts:
  - Nathan Labenz
guests:
  - David Bau
  - Koyena Pal
  - Eric Todd
tags:
  - interpretability
  - mechanistic-interpretability
  - language-models
  - in-context-learning
  - research
draft: false
---
## Thesis

Professor David Bau argues that trained neural networks are a new kind of software that classic computer science tools cannot debug, so they have to be reverse engineered much as biologists study an organism. His students' papers suggest the internals have real, local structure: Koyena Pal's Future Lens shows a single hidden state carries information about tokens several steps ahead, and Eric Todd's function vectors show that the task in a few-shot prompt is carried by a handful of attention heads.

## Key points

- **Locating knowledge.** Bau recaps ROME (finding and editing where facts such as "Michael Jordan played basketball" live), MEMIT (editing up to around 10,000 facts at once) and the LRE paper, which finds many relations behave as linear maps but some are clearly nonlinear.
- **Future Lens setup.** Pal used GPT-J on 100,000 Pile samples, taking the 4,096-dimensional hidden state of the last token at each layer. A bigram baseline already guesses the next token about 20% of the time.
- **Only the model can decode it.** Linear probes and fixed prompts did poorly; a learned 10-token soft prompt worked best, peaking in the middle layers. Bau reads this as the hidden state holding a compact "pointer" that only the model's own weights can unpack, as with the phrase "Back to the Future".
- **Tooling.** The code is at future.baulab.info. Pal used Bau's BauKit and its successor NNsight, which has a shared remote backend (NDIF) for running models too big for a laptop, including Mamba-style state space models.
- **Function vectors.** Todd found that in-context learning across 40-plus tasks (antonyms, country capitals, translation) runs through a small, largely shared set of middle-layer attention heads. Their summed output, patched into a new prompt, makes the model do the task: "the word fast means" then gives "slow".
- **Finding the right abstraction.** Bau suggests function vectors may be one way to group many attention heads into a single unit, part of the search for the right level of abstraction for interpretability. He calls the question of whether larger models become easier to interpret open.

## Quotes

> "Somehow the transformer's own circuits are essential for decoding the information." — David Bau

> "once you get to around like 10, you can start having the significant causal effect of getting the model to flip its prediction" — Eric Todd
