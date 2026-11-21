---
title: "Giving Agents Computers — Ivan Burazin, Daytona"
date: 2026-05-21
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/giving_agents_computers_ivan_burazin_daytona"
duration_min: 70
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Ivan Burazin"]
description: "Daytona CEO Ivan Burazin argues agents need fast, stateful, composable computers of their own, a market he sees as far larger than human developer tooling."
tags: ["sandboxes", "agent-infrastructure", "computer-use", "reinforcement-learning", "cloud-computing"]
source_transcript: "latent-space/episodes/2026/05/2026-05-21-giving-agents-computers-ivan-burazin-daytona.md"
draft: false
---

## Thesis

Ivan Burazin, CEO of Daytona, argues that agents need their own computers, and that infrastructure built for humans does not fit them. Daytona pivoted in January of the previous year from dev environments for people to "composable computers for AI agents", built on bare metal with its own scheduler, and Burazin expects the market to be bounded only by how many agents will run.

## Key points

- **The pivot.** Burazin says early testers rejected a sandbox built on existing infrastructure; he vibe-coded a new MVP on New Year's Eve, his CTO rebuilt it in two weeks, and testers then chased the team for API keys. The founders previously built CodeAnywhere, a browser IDE used by about three million people.
- **Fast and stateful.** Agents, he argues, want both speed and persistence, like a Lambda combined with an EC2 instance. Daytona keeps snapshots on local NVMe drives: he cites 60 ms to start one sandbox, about 75 seconds for 50,000 concurrently, and a top customer running roughly 850,000 a day.
- **Two workload shapes.** Background agents (he names Cognition and Harvey among others) follow the sun; RL and eval runs are square spikes, which have grown from nothing to about half of usage. Mean utilisation is 15% with peaks of 90%, so researchers are locked into capacity commitments.
- **Computer use and Windows.** Burazin estimates the knowledge-work automation opportunity at about $10 trillion a year, much of it in legacy Windows apps. Daytona is building Windows sandboxes that start in about a second, against 3-5 minutes for cloud VMs; macOS licensing (two VMs per machine, 24-hour licences) makes Mac sandboxes harder.
- **Open source and support.** Daytona is AGPL 3; he says open source mainly helps agents integrate it. Customers cite responsiveness from a 25-person team, about 13 of whom have worked with the founders for seven years or more.
- **Hot take.** He argues SaaS firms reselling tokens through their own agents is not true revenue re-acceleration; they should expose data via APIs and charge for consumption.

## Quotes

> "agents will be like humans in the sense of you don't want your laptop to be shut down until you're done with work." — Ivan Burazin

> "I've never experienced this, that people literally call you if you do not give them access." — Ivan Burazin
