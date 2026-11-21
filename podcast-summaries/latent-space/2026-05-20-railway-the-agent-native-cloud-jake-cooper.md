---
title: "Railway: The Agent-Native Cloud — Jake Cooper"
date: 2026-05-20
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/railway_the_agent-native_cloud_jake_cooper"
duration_min: 89
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Jake Cooper"]
description: "Railway founder Jake Cooper argues agents need the same primitives as humans at a thousand times the speed, which pushed Railway onto its own bare-metal cloud."
tags: ["cloud-infrastructure", "agents", "bare-metal", "developer-platforms", "deployment"]
source_transcript: "latent-space/episodes/2026/05/2026-05-20-railway-the-agent-native-cloud-jake-cooper.md"
draft: false
---

## Thesis

Jake Cooper, solo founder of Railway, argues that agents do not need fundamentally different infrastructure from humans; they need versioning, forking, observability and compute that work at a thousand times the speed and concurrency. Delivering that cheaply is why Railway avoids Kubernetes and now runs most workloads in its own data centres. (The episode was recorded before Railway's major GCP-related outage on 19 May.)

## Key points

- **Growth on a lean team.** Cooper says Railway has about three million users, adds roughly 100,000 a week and has 35 staff. He describes a free-tier period losing about $500,000 a month against perhaps $50,000 in revenue, which forced a rebuild of the business.
- **Owning the metal.** He puts the payback period on bare metal versus renting cloud capacity at about three months, with metal margins around 70%. Railway keeps cloud presence for bursting, finances servers with debt secured on hardware, and says rising RAM prices mean its servers have appreciated.
- **Built for agents.** Cooper argues CLIs with dozens of arguments suit agents, and telemetry shows where they get stuck. The canvas becomes an output for human approval rather than an input. Railway's internal rule is never to wait on compute.
- **Safe iteration.** He remains sceptical of AI SRE without primitives such as copy-on-write production clones and progressive rollouts, and describes rolling changes to low-impact users first, which limited a recent caching incident to about 3,000 users.
- **Software process.** Cooper sees spec, code and tests as a reinforcing trio, told staff after the winter break that writing code by hand is now wrong, and expects pull requests and Git-style versioning to change. He calls Temporal a "jet engine": powerful but easy to misuse.
- **Focus.** He attributes Heroku's decline to it not being Salesforce's core business, and says Railway will do GPUs eventually but not now.

## Quotes

> "you never ever, ever wanna be waiting on compute anymore. You always wanna be waiting on intelligence, right?" — Jake Cooper

> "I'm actually still not a believer on the AI SRE because I believe that you need, you need the primitives to make those things safe." — Jake Cooper
