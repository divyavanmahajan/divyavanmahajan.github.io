---
title: Building Reddit’s iOS and Android app
description: >-
  Reddit's mobile platform leads explain how the Core Stack modernisation, from
  GraphQL to Compose and MVVM, rescued developer experience and app performance
  for some 200 native engineers.
pubDate: '2025-04-23'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/building-reddits-ios-and-android'
youtube: 'https://www.youtube.com/watch?v=qDTW3EGnrkw'
durationMin: 86
hosts:
  - Gergely Orosz
guests:
  - Lauren Darcey
  - Brandon Kobilansky
  - Eric Kuck
tags:
  - mobile-engineering
  - platform-teams
  - graphql
  - server-driven-ui
  - developer-experience
draft: false
---
## Thesis

Lauren Darcey (Head of Mobile Platform), Brandon Kobilansky (iOS Platform Lead) and Eric Kuck (Principal Android Engineer) tell Gergely Orosz how Reddit rebuilt its native apps from 2021 onwards. Their argument is that a clear, opinionated stack plus platform teams that serve feature teams paid off in both developer experience and user metrics, while some bets, notably server-driven UI for the feed, did not.

## Key points

- **Scale.** Kuck cites about 2.5 million lines of code, roughly 800 modules and 580 screens on Android. Darcey says two platform teams of 10 to 11 engineers each support about 200 mobile engineers across some 20 feature teams.
- **Where they started.** Darcey says mobile headcount went from 40-50 to around 200 in two years. At the time builds hit two-and-a-half-hour CI timeouts, unit test coverage was about 2%, QA relied on an overseas vendor with a 12-hour turnaround, and Android startup was 13 seconds at P90.
- **Core Stack.** One monorepo per platform, modularised by feature; Kotlin and Swift; GraphQL-first, then GraphQL-only; MVVM; and a new design system. Android bet on Jetpack Compose while it was still in alpha, first for Reddit Talk. iOS built SliceKit and is now gradually moving to SwiftUI.
- **GraphQL lessons.** Kuck says the first migration was a naive one-to-one port of REST models, which led to over-fetching. Darcey says GraphQL initially added latency, so the client move waited until the backend team had made it faster.
- **Server-driven UI.** Kuck says applying it to the feed caused double fetching and user-visible bugs, while the reporting flow works well. Darcey argues the problem was the implementation, not the idea.
- **Payoff.** Darcey reports Android crash-free rate up 1.5 percentage points and iOS almost 1%, and Reddit Recap built with half the people of the year before. The team says P90 startup is now under three to four seconds.

## Quotes

> "If the bet didn't pay out, I was the sole developer on this feature. I completely owned it." — Eric Kuck

> "You need to sit in the consequences of your decisions." — Brandon Kobilansky
