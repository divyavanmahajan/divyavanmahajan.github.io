---
title: "Amp: The Emperor Has No Clothes"
date: 2025-09-25
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/amp_the_emperor_has_no_clothes"
duration_min: 80
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Quinn Slack", "Thorsten Ball"]
description: "Sourcegraph's Quinn Slack and Thorsten Ball argue that because models change every few months, Amp must stay minimal, ship constantly and build only for early adopters."
tags: ["coding-agents", "developer-tools", "product-strategy", "context-engineering", "ai-engineering"]
source_transcript: "latent-space/episodes/2025/09/2025-09-25-amp-the-emperor-has-no-clothes.md"
draft: false
---

## Thesis

Quinn Slack (Sourcegraph CEO) and Thorsten Ball (lead engineer on Amp) tell Alessio Fanelli that no coding tool has held developers for more than six to twelve months, so the only defensible strategy is to build the best coding agent and stay able to rebuild it when the next model lands. That leads them to drop features many customers ask for, skip formal processes, and target only the developers who want to move as fast as they do.

## Key points

- **A new brand to escape old contracts.** The guests explain that Amp was split off from Cody so it would not be tied to Sourcegraph's release cycle or enterprise expectations; they say usage grows more than 50% month over month, with some two- or three-person teams at annual run rates of hundreds of thousands of dollars.
- **No code review, 15 deploys a day.** Ball describes a core team of about eight people pushing straight to main and dogfooding; Amp writes 80 to 90% of its own code, and everyone reviews what their agent wrote. He says they run no formal evals and rely on fast internal feedback instead.
- **Saying no.** The guests reject model pickers, bring-your-own-key, prompt enhancers, custom sub-agents and large MCP tool lists, arguing they add tokens and unreliability. Models are hidden (Sonnet 4 drives the agent, o3 is the "Oracle"), and about half the internal team now uses a non-Sonnet model.
- **Scaffolding, not harness.** The guests want features that fall away as models improve, in the spirit of the Bitter Lesson, and are wary of conversation compaction because it loses signal.
- **CLI and editor both stay.** An internal poll split 50/50 between the CLI and the VS Code extension; the team nearly killed the extension but kept it because async agents on web and phone need a richer UI.
- **Early adopters only.** The guests say their one head-to-head loss came from rivals discounting 100% and 85% for two years. They are happy to serve the 20% of developers a company trusts most, and cite a non-coding board member who used Amp to replace a 250K-a-year tool.

## Quotes

> "The only thing that matters is building the best coding agent. Nothing else matters because if you can build that, that's way bigger than anything else that came before." — Quinn Slack

> "And if you ship twenty times a day, you will get a lot of good feedback." — Thorsten Ball
