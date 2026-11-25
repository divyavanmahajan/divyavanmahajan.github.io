---
title: Building Figma Slides with Noah Finer and Jonathan Kaufman
description: >-
  Figma engineers Jonathan Kaufman and Noah Finer explain how Figma Slides
  reuses the infinite canvas and multiplayer engine, and why its simple-looking
  single slide view was the hardest part.
pubDate: '2025-03-26'
show: pragmatic-engineer
url: >-
  https://newsletter.pragmaticengineer.com/p/building-figma-slides-with-noah-finer
youtube: 'https://www.youtube.com/watch?v=XXXa31L9Uos'
durationMin: 58
hosts:
  - Gergely Orosz
guests:
  - Noah Finer
  - Jonathan Kaufman
tags:
  - figma
  - product-engineering
  - multiplayer
  - feature-flags
  - testing
  - webassembly
draft: false
---
## Thesis

Jonathan Kaufman and Noah Finer tell Gergely Orosz that Figma Slides went from a hack-week project to a beta in April 2024 by building on Figma's shared C++ canvas instead of starting from scratch. The single slide view is just a zoomed-in viewport on the grid, which keeps multiplayer and interop working but creates hard state and reconciliation problems.

## Key points

- **Grid first, carousel later.** The team began with the grid view designers already used on the infinite canvas, plus templates, themes and presenting. Single slide view came six or seven months in, because it seemed less risky; it zooms into the grid, hides everything else and snaps the viewport between slides.
- **Stack.** The canvas is rendered by a C++ codebase compiled to WebAssembly, drawing via WebGL or WebGPU, with TypeScript and React for panels and a bindings layer between them. Both guests mostly learned C++ on the job. Finer describes using Chrome's DWARF debugging extension to set breakpoints in React and C++ at once and find a race condition.
- **Interop and mouse behaviours.** The same Wasm bundle powers Design, FigJam and Slides, so new node types such as stickies must work in every editor. Editor-specific "mouse behaviours", borrowed from game engines, express the differences. Custom text rendering keeps files identical across browsers but meant building spellcheck in-house.
- **Minimal mutations.** Reordering slides naively changed every slide's coordinates. The fix nests slides in row and grid auto layout nodes and uses parent indexes, with a reconciler that computes the minimum mutations; it is the most unit-tested part of Slides.
- **Release practice.** Risky core changes go behind one of more than 2,000 feature flags, are dogfooded in staging and went to select alpha customers in March 2024. All unit and interaction tests run with every flag off and then on.
- **Team habits.** The team had 10 to 12 engineers, two designers, a researcher and a UX writer but no dedicated QA. They describe viewport tuning as "vibes" testing with designers, zero-bug triage during on-call, FigJam-based eng crits and a "web bisect" tool built on commit previews.

## Quotes

> "I feel like everyone should do this is my takeaway." — Noah Finer
