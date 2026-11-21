---
title: "#132 – George Hotz: Hacking the Simulation & Learning to Drive with Neural Nets"
date: 2020-10-22
show: lex-fridman
episode: 132
url: "https://lexfridman.com/george-hotz-2/"
youtube: "https://www.youtube.com/watch?v=_L3gNaAVjQ4"
duration_min: 193
hosts: ["Lex Fridman"]
guests: ["George Hotz"]
description: "Comma.ai founder George Hotz argues that end-to-end neural networks trained on real driver data will beat feature-engineered approaches to self-driving, and that honest products that make money beat hype."
tags: ["self-driving-cars", "end-to-end-learning", "driver-monitoring", "open-source", "ai-hardware", "cryptocurrency"]
source_transcript: "lex-fridman/episodes/2020/10/2020-10-22-george-hotz-hacking-the-simulation-learning-to-drive-with-neural-nets.md"
draft: false
---

## Thesis

George Hotz, founder of Comma.ai, tells Lex Fridman that self-driving will be solved end to end, by neural networks learning from what human drivers actually do, rather than by splitting driving into hundreds of hand-defined perception tasks as Tesla does. He presents Comma as the Android to Tesla Autopilot's iOS: an open-source level 2 system that funds itself by selling hardware. Fridman pushes back on how hard driver attention and the human side of autonomy really are.

## Key points

- **End to end versus feature engineering.** Hotz calls Tesla's multi-task approach a higher-level form of feature engineering and says the history of AI shows such methods lose to end-to-end learning. He calls DeepMind's MuZero, with its learned simulator, the cornerstone paper of the deep learning era and the path to self-driving.
- **Openpilot progress.** Hotz says the lateral policy is now almost fully end to end and can drive without lane lines. Unplanned disengagements fell from about one every 10 miles to one every 100 in a year, which he notes is still far from the 100,000 needed.
- **Driver monitoring.** Comma's infrared camera policy adapts to the scene. Hotz argues monitoring can be imperfect because it trains the human, and bets Elon Musk will ship driver monitoring before level 5. Fridman stresses that the user experience is the hard part.
- **Business model.** The comma two costs $1,000 plus $200 for the car harness, supports 91 car models, and Hotz says 70% of buyers are daily users. About 40% of users run community forks. He rejects acquisition offers and says Waymo's product does not compete with Uber on speed or price.
- **AI hardware.** Hotz criticises Nvidia for charging about $10,000 for an A100 and says Google's cloud terms ruled out TPUs for training autonomous vehicles.
- **Crypto and programming.** Hotz recounts writing a 300-line compiler change for Optimism to replace a 3,000-line transpiler, calls Nakamoto consensus a major innovation, and says everyone should learn assembly, C, Python, Haskell, Verilog and PyTorch.

## Quotes

> "feature engineering approaches will always be replaced and lose to end to end" — George Hotz

> "the better technology always wins and lying always loses build technology and don't lie" — George Hotz
