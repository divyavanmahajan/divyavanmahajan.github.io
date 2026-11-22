---
title: 'Tuomas Sandholm: Poker and Game Theory'
description: >-
  Tuomas Sandholm explains how Libratus beat top heads-up no-limit poker pros
  using data-free game theory, and argues that computational game solving is
  ready to move into business and military strategy.
pubDate: '2018-12-28'
show: lex-fridman
url: 'https://lexfridman.com/tuomas-sandholm/'
youtube: 'https://www.youtube.com/watch?v=b7bStIQovcY'
durationMin: 66
hosts:
  - Lex Fridman
guests:
  - Tuomas Sandholm
tags:
  - game-theory
  - poker
  - imperfect-information-games
  - mechanism-design
  - ai-milestones
draft: false
---
## Thesis

Tuomas Sandholm, CMU professor and co-creator of Libratus, tells Lex Fridman that heads-up no-limit Texas Hold'em was the last widely agreed game-solving benchmark, and that it fell to Nash-equilibrium reasoning rather than opponent modelling or learning. He argues that the field must test ideas at scale, and that the next goal is to show that business and military strategy can be done with computational game theory.

## Key points

- **The 2017 match.** Sandholm describes inviting four of the top 10 heads-up specialists to Rivers Casino in Pittsburgh for 20 days and 120,000 hands, with $200,000 paid out by performance. Eighteen months after his earlier AI, Claudico, lost, he rated the odds 50/50 while betting sites made Libratus a four-to-one or five-to-one underdog.
- **Abstraction and search.** With a game tree of about 10^161, Libratus abstracts both cards (automated "potential-aware" abstraction) and bet sizes. Sandholm explains that in imperfect-information games a state's value depends on both players' beliefs, which is why newer depth-limited search lets the opponent choose among continuation strategies.
- **No opponent data.** Sandholm says Nash equilibrium yields strategies and beliefs from the rules alone, so Libratus did not exploit opponents; these pros had too few holes and are experts at counter-exploitation. Two-player zero-sum games are far easier than multiplayer or general-sum games, where collusion and equilibrium selection arise.
- **Theory versus practice.** He notes CFR-based algorithms are fastest in practice despite weaker theoretical convergence rates, and that mechanism design has had limited direct success; even the FCC spectrum auctions do not make truthful bidding optimal.
- **Real-world impact.** Sandholm cites the nationwide kidney exchange and 800 combinatorial sourcing auctions at his earlier startup CombineNet, which he says raised efficiency on $60 billion of spend by 12.6%. His current startups are Strategic Machine and Strategy Robot.
- **Risk.** He calls value misalignment a fairly theoretical worry he has not seen in applications, and names climate change and nuclear war as his main concerns, saying nuclear risk may be higher now than ever.

## Quotes

> "game theory isn't really player specific so that's what also why we don't need any data we don't need any history how these particular humans played in the past" — Tuomas Sandholm

> "if anything to me our work has made poker a richer more interesting game for humans to play" — Tuomas Sandholm
