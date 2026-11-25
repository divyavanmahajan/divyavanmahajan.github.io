---
title: 'Design-first software engineering: Craft – with Balint Orosz'
description: >-
  Craft founder Balint Orosz argues that great products need both a backend and
  a UI engineering culture, and that owning your own components gives the
  control needed for fluent software.
pubDate: '2025-03-05'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/design-first-software-engineering'
youtube: 'https://www.youtube.com/watch?v=rVQoh0CIVFs'
durationMin: 73
hosts:
  - Gergely Orosz
guests:
  - Balint Orosz
tags:
  - frontend-engineering
  - ios
  - local-first
  - design-systems
  - engineering-culture
draft: false
---
## Thesis

Balint Orosz, founder and CEO of Craft (Mac App of the Year 2021) and Gergely Orosz's brother, argues that a standout product needs both a backend engineering culture and a UI-first one. Neither is better on its own. He says Craft gets its fluent feel by building its own components instead of relying on Apple's frameworks, while keeping data handling conservative and measurable.

## Key points

- **Design-focused engineers are undervalued.** Balint says backend wins such as saving $2 million on infrastructure are easy to measure, while making a click take 2 milliseconds instead of 10 is not. He saw this at Skyscanner, which acquired his startup Distinction, when leaders from larger companies brought in competency frameworks built around throughput.
- **Two cultures.** He describes Apple as UI-first with weak backends, and Amazon and Google as the reverse. At Craft, data work aims for zero data loss using well-understood approaches, while the editor UI is iterated freely.
- **Own the canvas.** Craft avoids Auto Layout and SwiftUI. Balint challenges new iOS hires to match one of Craft's transitions with the same performance in Auto Layout. One codebase, about 99% shared, covers iPhone, iPad, Mac (via Mac Catalyst) and Vision Pro, built by three or four native engineers. A shared animation engine stands in for a conventional atomic design system.
- **Local-first and personal software.** Personal data fits on a device, so Balint designs services to swap between local and remote. One example: instead of one Elasticsearch cluster, per-user search indexes that can be downloaded or read by a Lambda. He calls computing a pendulum between local and cloud.
- **Small teams.** About 20 people across product engineering, design and QA, with no product managers. Platform teams of four or five worked better than larger feature teams, he says.
- **Prototypes and GenAI.** His advice to frontend engineers is to put a working prototype in decision makers' hands. He says OpenAI's o1 helped him build Apple Pencil shape recognition in three hours, a job he had estimated at one or two weeks.

## Quotes

> "I believe the M4 Pro is a faster processor than anything you can buy on an AWS cloud." — Balint Orosz

> "So that is, for me, buy-in has always been about show, not tell." — Balint Orosz
