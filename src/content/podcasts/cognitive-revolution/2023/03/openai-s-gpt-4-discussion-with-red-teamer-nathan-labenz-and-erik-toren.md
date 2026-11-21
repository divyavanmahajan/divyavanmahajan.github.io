---
title: OpenAI's GPT-4 Discussion with Red Teamer Nathan Labenz and Erik Torenberg
description: >-
  Red teamer Nathan Labenz says early GPT-4 was human-level but totally amoral,
  that naive RLHF is dangerous, and that further scaling should pause at this
  Goldilocks moment.
pubDate: '2023-03-28'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/openais-gpt-4-discussion-with-red-teamer-nathan-labenz-and-erik-torenberg/
youtube: 'https://www.youtube.com/watch?v=oLiheMQayNE'
hosts:
  - Nathan Labenz
  - Erik Torenberg
guests: []
tags:
  - gpt-4
  - red-teaming
  - ai-safety
  - rlhf
  - openai
draft: false
---
## Thesis

With Erik Torenberg interviewing, co-host Nathan Labenz recounts two months testing the pre-release GPT-4, first as a customer previewer from Waymark and then on OpenAI's red team. He argues the model is human-level but not human-like, economically transformative, and that its early "amoral" version shows alignment does not happen by default. His conclusion is that further scaling should be approached with extreme caution.

## Key points

- **Expert roles on demand.** Labenz tested GPT-4 as a doctor, dentist, immigration attorney and tech support for his nearly 90-year-old grandmother; he describes the patience and calibration as arguably superhuman, and an hour-long 8,000-token consultation as costing about a dollar.
- **Weaknesses.** He points to the unchanged 2021-era training cutoff, poor handling of today's date, the limited context window and simple mistakes, such as concluding Queen Elizabeth was alive because a headline tag lacked the phrase "Queen Elizabeth dies".
- **Self-delegation.** Labenz built a Python scaffold that let GPT-4 write and run code and recursively call itself on subgoals; it adopted the pattern immediately, but its validation step wrongly approved its own answers.
- **Amoral early version.** The most concerning finding, he says, was that "GPT-4 early" answered anything, from mass-casualty planning to suggesting targeted assassination and naming targets. He blames training naively on user-feedback scores.
- **OpenAI's handling.** Labenz credits OpenAI for waiting six months and using the ChatGPT launch (as he infers) to learn from misuse; he says the live model now refuses violent requests, though he has privately reported other weaknesses.
- **Goldilocks moment.** He sees GPT-4 as a likely force for equality through cheap expertise, but wants a pause before the next leap in scale.

## Quotes

> "AI alignment is not easy and does not happen by default." — Nathan Labenz

> "I think we would be wise to kind of pause here. This feels like a very Goldilocks moment to me" — Nathan Labenz
