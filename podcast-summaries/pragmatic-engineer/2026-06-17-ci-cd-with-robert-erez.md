---
title: "CI/CD with Robert Erez"
date: 2026-06-17
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/cicd-with-robert-erez"
youtube: "https://www.youtube.com/watch?v=2x0eq5oDOJY"
duration_min: 75
hosts: ["Gergely Orosz"]
guests: ["Robert Erez"]
description: "Robert Erez of Octopus Deploy argues that safe delivery depends on feature toggles and rolling forward rather than GitOps dogma or rollbacks, and that AI shifts pipeline priorities from speed to risk."
tags: ["ci-cd", "gitops", "kubernetes", "feature-flags", "progressive-delivery", "platform-engineering"]
source_transcript: "pragmatic-engineer/episodes/2026/06/2026-06-17-ci-cd-with-robert-erez.md"
draft: false
---

## Thesis

Robert Erez, principal engineer at Octopus Deploy and Gergely Orosz's former Skype teammate, argues that most teams simply want to ship software safely, and that labels such as GitOps or continuous deployment matter less than de-risking each change. His preferred tools are feature toggles and rolling forward, and he expects AI-generated code to push pipelines toward reducing risk rather than shaving build minutes.

## Key points

- **Maturity stages.** Erez describes a path from "YOLO" deploys to continuous integration, continuous delivery and, for some, continuous deployment. He says continuous delivery, where the deployment process itself is tested, is enough for many regulated companies. At Skype the team used New Zealand as its canary country.
- **GitOps is not about Git.** He lists four pillars (declarative, versioned and immutable, pulled not pushed, continuously reconciled), none of which requires Git. The name, coined by Weaveworks around 2017, has led teams to push things like secrets into repos. Customers with thousands of Kubernetes clusters in point-of-sale systems get throttled by the Git repository.
- **Kubernetes on-prem.** Erez says many Octopus customers run Kubernetes on their own hardware, including clusters on research vessels that update only when ships return to port.
- **Roll forward, use toggles.** With databases involved, a rollback can leave code out of step with the schema, so he advises fixing in version three rather than reverting to version one. Octopus wraps the OpenFeature SDK so each toggle has an owning team and an expiry date that triggers cleanup reminders.
- **Platform teams and ephemeral environments.** He sees platform teams providing self-service templates at larger organisations, and per-branch ephemeral environments replacing shared test environments, including for AI agents validating their own work.
- **Self-hosting persists.** Erez says it takes about 200 days for half of on-prem customers to adopt a release and over 400 days for 75%. Banks and governments want that control, and he does not expect self-hosting to go away.

## Quotes

> "you want to avoid ever talking about rollback. It's always roll forward. So if there's a bug, roll forward." — Robert Erez

> "The reality is for most customers, they're just trying to ship software and they don't care what name you give it." — Robert Erez
