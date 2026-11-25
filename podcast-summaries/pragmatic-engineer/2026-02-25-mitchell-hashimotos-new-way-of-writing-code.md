---
title: "Mitchell Hashimoto’s new way of writing code"
date: 2026-02-25
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/mitchell-hashimoto"
youtube: "https://www.youtube.com/watch?v=WjckELpzLOU"
duration_min: 118
hosts: ["Gergely Orosz"]
guests: ["Mitchell Hashimoto"]
description: "Mitchell Hashimoto traces HashiCorp from a failed research project to IPO, then argues agents should always run in the background while AI forces open source and Git to change."
tags: ["coding-agents", "open-source", "infrastructure-as-code", "startups", "version-control"]
source_transcript: "pragmatic-engineer/episodes/2026/02/2026-02-25-mitchell-hashimotos-new-way-of-writing-code.md"
draft: false
---

## Thesis

Mitchell Hashimoto, co-founder of HashiCorp and creator of the Ghostty terminal, tells Gergely Orosz how HashiCorp grew out of a notebook of unsolved infrastructure problems, and how his own engineering now centres on always having an agent doing something. He argues that AI has removed the natural effort barrier in open source, and that tools such as Git and GitHub do not yet fit agent-driven workflows.

## Key points

- **From Vagrant to Terraform.** Vagrant came from a Rails consultancy where setting up a client's dev environment could waste half a day of unbillable time. Hashimoto says Terraform was roughly seventh to market in infrastructure as code and won through conferences, community and developer experience; he travelled somewhere new at least every eight days for about nine years.
- **A failed first product.** For four years HashiCorp had no real business. Its first commercial product, Atlas, required the whole stack, so no single budget owner would buy it. After a bad board meeting, Hashimoto and Armon Dadgar switched to open core, per-product enterprise sales, starting with Vault secrets replication.
- **The VMware offer.** With three people, VMware verbally offered $20 million; the founders asked for 100, and the VMware board rejected the deal by one vote. Hashimoto says Terraform probably would never have existed otherwise.
- **Cloud partners.** He describes AWS as arrogant, Microsoft as the most competent business partner, and Google Cloud as having the best technology but little interest in co-selling.
- **Agent workflow.** Hashimoto uses Claude Code, Amp and Codex, runs at most two agents, turns off notifications, and starts slow research tasks before leaving the house. He reviews all Ghostty code but not a throwaway wedding site.
- **Open source and Git.** Ghostty now closes AI pull requests without an accepted feature request and is moving to a Lobsters- and Pi-inspired vouching system. He sees agent churn straining merge queues and compares the needed shift to Gmail's never-delete approach to email.

## Quotes

> "If I'm coding, I want an agent planning. If they're coding, I want to be reviewing." — Mitchell Hashimoto

> "open source has always been a system of trust. Before we've had a default trust and now it's just a default deny and you must get trust by somebody." — Mitchell Hashimoto
