---
title: "[AIEWF Preview] Containing Agent Chaos — Solomon Hykes"
date: 2025-06-03
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/aiewf_preview_containing_agent_chaos_solomon_hykes"
duration_min: 27
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Solomon Hykes"]
description: "Docker creator Solomon Hykes argues coding agents need a standard, portable, container-based environment, or the market will fragment into vendor monoliths as early cloud did."
tags: ["coding-agents", "containers", "developer-tools", "dagger", "platform-engineering"]
source_transcript: "latent-space/episodes/2025/06/2025-06-03-aiewf-preview-containing-agent-chaos-solomon-hykes.md"
draft: false
---

## Thesis

Solomon Hykes, creator of Docker and now running Dagger, argues that developers are turning into platform engineers whose job is to give teams of coding agents somewhere to work. Without an open standard for the agent's environment, he expects the vertical lock-in that marked early cloud, the problem Docker was built to solve.

## Key points

- **Dagger's origins.** Hykes describes Dagger, started six years ago, as an open source workflow engine that turns builds, tests and pipelines into modular, containerised workflows. Its community of platform engineers pulled it into AI by putting LLMs and agents into CI.
- **What an agent environment needs.** Hykes lists the criteria: isolation so parallel agents don't interfere, portability across models, clouds and IDEs, full observability from model reasoning to tool state, and multiplayer access so a human can take over the keyboard and check an agent's work.
- **Against monoliths.** He sees IDE vendors bolting on proprietary environment customisation, observability and background hosting, which he calls fragmentation. The standard should cover only the environment, the "linchpin" between the other pieces.
- **Old tools aren't agent native.** Hykes says the Dockerfile was a 2013 stopgap and Compose a "clone of a clone", both frozen by demand. A new UX should build on containers, Git, the OpenAI API spec and MCP.
- **Local execution as the test.** Hosted vendors think infra-first, he argues, repeating the CI/CD mistake of having no good local story. A solution that developers can't enjoy running locally won't become ubiquitous.
- **Lego, not a platform.** Dagger will stay a component, not an end-to-end platform: it does not solve auth and runs on top of existing CI rather than replacing it. Hykes says startups don't need permission here because developer experience matters more than scale.

## Quotes

> "So what we're witnessing is developers becoming platform engineers." — Solomon Hykes

> "So we're gonna need some sort of a standard, not on everything, just on the environment, right?" — Solomon Hykes
