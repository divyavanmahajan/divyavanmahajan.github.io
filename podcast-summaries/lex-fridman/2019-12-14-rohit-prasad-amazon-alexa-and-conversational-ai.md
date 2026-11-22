---
title: "Rohit Prasad: Amazon Alexa and Conversational AI"
date: 2019-12-14
show: lex-fridman
url: "https://lexfridman.com/rohit-prasad/"
youtube: "https://www.youtube.com/watch?v=Ad89JYS-uZM"
duration_min: 106
hosts: ["Lex Fridman"]
guests: ["Rohit Prasad"]
description: "Rohit Prasad argues that open-ended human-machine dialogue is the ultimate test of intelligence, and that Alexa's next leap depends on reasoning about users' latent goals, built on earned trust."
tags: ["conversational-ai", "voice-assistants", "speech-recognition", "privacy", "deep-learning"]
source_transcript: "lex-fridman/episodes/2019/12/2019-12-14-rohit-prasad-amazon-alexa-and-conversational-ai.md"
draft: false
---

## Thesis

Rohit Prasad, vice president and head scientist of Amazon Alexa, tells Lex Fridman that conversation is a harder test of intelligence than games or self-driving, because the goal is undefined and the state keeps changing. He traces Alexa from the far-field speech recognition problem to today's work on multi-skill, goal-anticipating dialogue, and argues that trust, built through transparency and customer control, is the precondition for all of it. Fridman pushes on personality and memory.

## Key points

- **The Alexa Prize.** Prasad describes the university challenge to build a social bot that converses coherently and engagingly for 20 minutes; after wins by the University of Washington and the University of California, he estimates the bar is still five to ten years away, though humour is starting to appear.
- **Far-field speech.** When Prasad joined in April 2013, the speech team was about ten people and most thought the problem could not be solved. Collecting far-field training data before any customers existed, plus an early bet on deep learning and distributed GPU training, cut error rates by a factor of five within six months, ahead of the November 2014 Echo launch.
- **Statistical-first understanding.** Prasad says Alexa used trained entity recognisers and intent classifiers from the start, with deterministic rules added only to fix bugs, across 13 launch domains; it now has 90,000-plus skills.
- **Privacy by transparency and control.** He cites the light ring, physical mute button, deletable recordings, voice deletion and an opt-out from human review, and says the device listens only for the wake word. Fridman says he would welcome always-on listening given control and trust.
- **Towards goals and self-learning.** Prasad describes Alexa Conversations, which builds dialogue flows from sample interactions with a recurrent neural network, cross-skill handoffs such as movie tickets to a ride or restaurant, and unsupervised correction of millions of misrecognised requests from user rephrasing.
- **Reasoning is the hard part.** He says prediction-based methods still have room, but long-term memory and reasoning over a long tail of needs are at a very early stage; five years should bring planning a night out by voice.

## Quotes

> "it was 10 people 9 out of 10 people thought it can't be done" — Rohit Prasad

> "the bar to earn customer trust for AI is very high in some sense more than a human" — Rohit Prasad
