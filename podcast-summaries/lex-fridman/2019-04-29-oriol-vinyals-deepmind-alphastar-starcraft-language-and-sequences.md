---
title: "Oriol Vinyals: DeepMind AlphaStar, StarCraft, Language, and Sequences"
date: 2019-04-29
show: lex-fridman
url: "https://lexfridman.com/oriol-vinyals/"
youtube: "https://www.youtube.com/watch?v=Kedt2or9xlo"
duration_min: 106
hosts: ["Lex Fridman"]
guests: ["Oriol Vinyals"]
description: "Oriol Vinyals explains how AlphaStar treated StarCraft as a sequence modelling problem, imitating human replays before league-based self-play, and argues generalisation remains deep learning's core limit."
tags: ["reinforcement-learning", "alphastar", "sequence-modeling", "deepmind", "meta-learning"]
source_transcript: "lex-fridman/episodes/2019/04/2019-04-29-oriol-vinyals-deepmind-alphastar-starcraft-language-and-sequences.md"
draft: false
---

## Thesis

Oriol Vinyals, co-lead of DeepMind's AlphaStar project and a former semi-professional StarCraft player, tells Lex Fridman that beating professional players came from treating the game like machine translation: predict the next action from all prior observations and actions. He argues the bigger open problem in deep learning is generalisation, and that meta-learning, where a network solves new tasks without retraining from scratch, is a more useful marker of progress than the Turing test.

## Key points

- **Exploration was the hardest barrier.** Vinyals says StarCraft's huge action space, partial observability and roughly 22 game steps per second meant random exploration got nowhere; early reinforcement-learning attempts just learned to attack with all workers.
- **Language architectures play the game.** AlphaStar ingests units as a set with x-y coordinates, processed with transformers, LSTMs and pointer networks. It first imitates Blizzard's human replays (3,500 MMR and above), conditioned on the skill level it should mimic.
- **A "battlenet for agents".** The AlphaStar League builds a population of agent personalities, including "cheese" and all-in strategies, because Vinyals says pure self-play got stuck on a subset of strategies.
- **Fairness of actions.** Vinyals notes older bots issued 20,000 to 40,000 actions per minute against 300 to 800 for professionals. DeepMind capped AlphaStar's rate, but he concedes the cutoff was probably set too high when combined with machine precision.
- **The matches.** Vinyals expected to lose 5-0 to TLO, then the team also beat MaNa. He says this shows pro or high Grandmaster level, not an unbeatable agent, and points to weaknesses in scouting and reading opponents.
- **Limits and next steps.** He calls generalisation deep learning's main challenge, citing adversarial examples, and favours combining neural networks with programs or discrete reasoning. He thinks the full Turing test is still too early as a research goal and says he is not concerned about near-term existential risk, while supporting AI safety work.

## Quotes

> "scale is a bit more boring but it really works" — Oriol Vinyals

> "the weights those weights are useless even to play another race" — Oriol Vinyals
