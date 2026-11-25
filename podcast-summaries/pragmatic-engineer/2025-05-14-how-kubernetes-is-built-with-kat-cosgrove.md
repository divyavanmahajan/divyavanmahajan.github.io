---
title: "How Kubernetes is Built with Kat Cosgrove"
date: 2025-05-14
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/how-kubernetes-is-built-with-kat"
youtube: "https://www.youtube.com/watch?v=vBjonut1JMk"
duration_min: 69
hosts: ["Gergely Orosz"]
guests: ["Kat Cosgrove"]
description: "Kat Cosgrove, Kubernetes release team subproject lead, argues that strict documentation rules, written-down process and anti-burnout policies keep the second-largest open-source project running."
tags: ["kubernetes", "open-source", "release-management", "documentation", "burnout"]
source_transcript: "pragmatic-engineer/episodes/2025/05/2025-05-14-how-kubernetes-is-built-with-kat-cosgrove.md"
draft: false
---

## Thesis

Kat Cosgrove tells Gergely Orosz that Kubernetes first caught on through hype, Google's name and its link to Docker, but has stayed popular because of its documentation. She describes a project that is unusually well organised by necessity: everything is written down, features must be documented to ship, and release roles rotate so that volunteers do not burn out.

## Key points

- **Origins.** Cosgrove explains that Kubernetes grew out of Google's internal Borg system and was the first project donated to the Cloud Native Computing Foundation, with Joe Beda making the first commit. The seven-spoke logo is a nod to Star Trek's Seven of Nine.
- **Scale and governance.** She estimates 150 to 200 maintainers, a couple dozen SIGs and more than a thousand contributors a month. No company may have more than two people on the steering committee, though she says Google still has considerable influence.
- **Release team.** Releases take 14 to 16 weeks and need 20 to 30 people: five selected leads, the rest "shadows" chosen by application. Cosgrove says they receive hundreds of applications per cycle, about half from students, and no prior contribution is required.
- **Anti-burnout rules.** After leading a release you must sit out a cycle, and the SIG Release charter says a release will be delayed rather than asking anyone to work nights or weekends.
- **KEPs and feature flags.** Features go through a Kubernetes Enhancement Proposal, modelled on Python's PEPs. Alpha features are off by default, beta on by default, and GA removes the flag. Any user-facing change without documentation is reverted at the docs freeze.
- **AI and adoption advice.** Calling it her personal view, Cosgrove says most generative AI tools are a scam. SIG Docs bans them, and a paid tool's drive-by PR broke generated files. She would welcome automated PR labelling. For startups she advises a managed service and an experienced SRE, never a self-built cluster, since Kubernetes is not secure by default.

## Quotes

> "Kubernetes is just an abstraction on something that we used to do manually." — Kat Cosgrove

> "But our priority isn't making the devs happy. It's building a usable, sustainable project that people want to keep using." — Kat Cosgrove
