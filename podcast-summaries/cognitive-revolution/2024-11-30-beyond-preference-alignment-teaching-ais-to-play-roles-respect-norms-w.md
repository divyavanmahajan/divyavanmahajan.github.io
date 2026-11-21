---
title: "Beyond Preference Alignment: Teaching AIs to Play Roles & Respect Norms, with Tan Zhi Xuan"
date: 2024-11-30
show: cognitive-revolution
url: "https://www.cognitiverevolution.ai/beyond-preference-alignment-teaching-ais-to-play-roles-respect-norms-with-tan-zhi-xuan/"
youtube: "https://www.youtube.com/watch?v=Y21syyyABOs"
duration_min: 114
hosts: ["Nathan Labenz"]
guests: ["Tan Zhi Xuan"]
description: "Tan Zhi Xuan argues AI should be aligned to the norms of specific social roles agreed through social consensus, not to maximising aggregated human preferences."
tags: ["ai-alignment", "rlhf", "contractualism", "social-norms", "bayesian-inference"]
source_transcript: "cognitive-revolution/episodes/2024/11/2024-11-30-beyond-preference-alignment-teaching-ais-to-play-roles-respect-norms-w.md"
draft: false
---

## Thesis

Tan Zhi Xuan, an MIT PhD student, argues in the paper "Beyond Preferences in AI Alignment" that treating AI as an expected utility maximiser of human preferences is the wrong frame. AI systems should instead play defined social roles, held to standards that society could agree on, in a contractualist sense. Their technical work shows how agents can learn such shared norms by observing others.

## Key points

- **What RLHF actually does.** Xuan says current training is not pure preference maximisation: the KL-regularised objective mixes imitation of human text with reward maximisation, which avoids some classic risks of utility maximisers.
- **Roles, not preferences.** Household robots, flight booking assistants, customer service agents and government information agents each need different standards. Xuan draws on Tim Scanlon's question of what we owe each other: principles no one could reasonably reject.
- **Constitutional AI.** Xuan sees Anthropic's collective constitutional AI, built from surveys of Americans, as close to their contractualist idea but limited because it is a one-off process. They say current models have turned out better at basic normative reasoning than they expected.
- **Timelines.** Xuan dislikes the term AGI and expects automating 50 to 80% of the industrial economy to take a decade or two or more, noting that definitions of AGI leave out robotics and motor intelligence.
- **Learning norms.** In a grid world with apples and a river, agents treat deviation from self-interest as evidence of a norm, doing Bayesian inference over about 72 candidate rules and paying a cost scaled by belief. Xuan admits nothing guarantees convergence to good norms, pointing to pluralistic ignorance, where oppressive norms persist because everyone thinks others endorse them.
- **Safety stance.** Xuan favours differential acceleration of inherently safer technology and guaranteed safe AI, and is sceptical of self-other overlap training without stronger theory.

## Quotes

> "There's a basic kind of minimal morality that the system should comply to, which is like meet the minimum moral standards that society would agree to allow you to operate." — Tan Zhi Xuan

> "I think people really underrate how much of human and animal intelligence was dedicated to solving hard motor tasks." — Tan Zhi Xuan
