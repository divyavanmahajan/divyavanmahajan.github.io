---
title: Building a best-selling game with a tiny team – with Jonas Tyroller
description: >-
  Jonas Tyroller explains how two developers built Thronefall, which sold a
  million copies in its first year, through fast throwaway prototypes,
  off-the-shelf tools and a focus on fun over engineering rigour.
pubDate: '2025-01-29'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/thronefall'
youtube: 'https://www.youtube.com/watch?v=Oiz6Q7txUqk'
durationMin: 90
hosts:
  - Gergely Orosz
guests:
  - Jonas Tyroller
tags:
  - game-development
  - indie-games
  - unity
  - prototyping
  - engineering-practices
draft: false
---
## Thesis

Jonas Tyroller, one of the two developers behind the minimalist strategy game Thronefall, walks Gergely Orosz through how it was built. He argues that indie success depends on speed, small scope and finding the overlap between what you enjoy making and what will sell. Many standard software practices matter much less for a two-person game that ships once.

## Key points

- **Tech stack.** Thronefall is built in Unity with C#. It uses a toon shader and an A* pathfinding plugin bought from the Unity Asset Store, plus 3D models made in Blender. Tyroller made the music himself, and the download is only 100-200 MB.
- **Practices skipped.** Tyroller says they write no unit tests, do no code review, debug with print statements and push straight to main. Bugs are caught through self-testing, then beta testers, then real players. Orosz argues this fits a product that ships rarely, unlike a service at Uber where pushing to main deploys to every user.
- **Prototype first.** Both developers built one- or two-day prototypes for about two months; he suggests scaling prototyping to project size. They dropped a card-game direction after a month. Paul's simple top-down castle-defence prototype won, and a separate art phase followed, explored on a Miro board.
- **Balancing and feedback.** Early playtesters found too little choice, which led to building upgrade options. Tyroller says strategy games are "snowbally", so he made enemies drop gold to smooth the economy, and he deliberately made levels feel easy to him.
- **Hardest problems.** Pathfinding was the main technical challenge: separate node graphs for enemy, player and flying units, path post-processing and walls only some units can cross. Tyroller does most of the gameplay code, while Paul built the UI, which he estimates at 40 to 50% of the work.
- **Business and advice.** Steam is about 90% of revenue; Warp Digital ported the game to Switch for a revenue share. Tyroller uses ChatGPT to fill in skeleton code and explain shader code. He advises engineers not to build their own engine, to keep games small and to make a game other people want.

## Quotes

> "If you're making games alone or in a tiny team of two or three people, you need insane speed to even be able to finish your game." — Jonas Tyroller

> "games don't automatically sell better if they're bigger" — Jonas Tyroller
