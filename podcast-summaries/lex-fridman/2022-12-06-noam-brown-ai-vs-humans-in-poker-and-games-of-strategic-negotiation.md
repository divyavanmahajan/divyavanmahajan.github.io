---
title: "#344 – Noam Brown: AI vs Humans in Poker and Games of Strategic Negotiation"
date: 2022-12-06
show: lex-fridman
episode: 344
url: "https://lexfridman.com/noam-brown/"
youtube: "https://www.youtube.com/watch?v=2oHH4aClJQs"
duration_min: 154
hosts: ["Lex Fridman"]
guests: ["Noam Brown"]
description: "Meta AI researcher Noam Brown explains how search and game theory beat top poker pros, and why winning Diplomacy required modelling humans, controllable language models and trust."
tags: ["game-theory", "reinforcement-learning", "poker", "diplomacy", "language-models", "search"]
source_transcript: "lex-fridman/episodes/2022/12/2022-12-06-noam-brown-ai-vs-humans-in-poker-and-games-of-strategic-negotiation.md"
draft: false
---

## Thesis

Noam Brown, research scientist at Meta AI (FAIR) and co-creator of the poker bots Libratus and Pluribus and the Diplomacy agent Cicero, argues that real-time search and planning, not just bigger neural nets, drove the poker breakthroughs. In Diplomacy, he says, self-play alone fails: an AI must learn how humans actually play, communicate in their language and earn their trust.

## Key points

- **Game theory beat "reads".** Brown says Libratus did not try to exploit opponents; it approximated a Nash equilibrium. In 2017 it played four top heads-up pros for 120,000 hands over 20 days with $200,000 in prize money, winning close to $2 million in chips, after bettors had initially put the odds at four to one against it.
- **Search is underrated.** Brown says the 2015 bot lost because it acted instantly from a precomputed strategy, while humans thought hard in tough spots. Adding a little search was worth making the precomputed strategy about a thousand times bigger. He notes that AlphaZero drops from about 5,200 to about 3,000 Elo without search, below top humans.
- **Overbets and algorithms.** Libratus made huge bets, sometimes 20 times the pot, which pros then adopted. Brown says depth-limited search let Pluribus (six-player poker) train for under $150 on AWS, against roughly $100,000 for Libratus. Neither used neural nets.
- **Cicero and Diplomacy.** Cicero pairs a language model with "intents" chosen by a planning model that is regularised towards a human "anchor policy" trained on about 50,000 webDiplomacy games. In 40 online games it placed second among the 19 players who played five or more games.
- **Honesty pays.** Brown says lying made the bot score worse because people stopped trusting it, so the team filtered out lies, nonsense and messages with negative expected value. A seven-player bot trained by self-play alone did very badly against humans.
- **Beyond games.** Brown sees human-like, tunable chess and Go bots, NPCs driven by intents, and well-defined domains such as code generation and theorem proving as near-term uses, while flagging cheat detection, deception and data efficiency as open problems.

## Quotes

> "diplomacy is a game about trust and being able to build trust in an environment that encourages people to not trust anyone" — Noam Brown

> "there's always a better outcome than War for all the parties involved" — Noam Brown
