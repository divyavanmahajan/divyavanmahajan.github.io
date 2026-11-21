---
title: "Cline: the open source coding agent that doesn't cut costs"
date: 2025-07-16
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/cline_the_open_source_coding_agent_that_doesn_t_cut_costs"
duration_min: 76
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Saoud Rizwan", "Pash"]
description: "Cline's founders argue that an open source, bring-your-own-key coding agent that skips RAG and fast-apply shortcuts and spends freely on context builds a better agent."
tags: ["coding-agents", "open-source", "mcp", "context-engineering", "developer-tools"]
source_transcript: "latent-space/episodes/2025/07/2025-07-16-cline-the-open-source-coding-agent-that-doesn-t-cut-costs.md"
draft: false
---

## Thesis

Saoud Rizwan and Pash of Cline argue that the best coding agent stays close to the model: it reads files into context aggressively, explores a repository the way a senior engineer would, and does not take a margin on inference. Because Cline is open source and users bring their own API keys, the team says its incentive is to build the best agent rather than to cut costs with smaller models or retrieval tricks.

## Key points

- **Plan and act.** The guests say Cline was first to split work into a plan mode (exploring, asking questions, filling context) and an act mode (editing files, running commands), a pattern copied from how users already worked with markdown plans.
- **Extension, not fork.** They chose a VS Code extension over a fork because Microsoft makes forks hard to maintain, and an extension also runs inside Cursor and Windsurf.
- **MCP marketplace.** Cline launched an MCP marketplace in February with one-click installs and has listed over 150 servers; the team forks some third-party servers to lock versions against malicious updates.
- **Simplicity beats workarounds.** The guests call RAG a distraction for code and say fast-apply models, started by Cursor in July 2024, are fading: diff-edit failures with Claude Sonnet 4 are down to about four percent, from the twenties and thirties.
- **Context management.** Instead of naive truncation, Cline uses summarization and passes forward a to-do list, which in internal tests kept the agent on track across many compactions. Memory files are described as mostly useless compared with rules files.
- **Business model.** Revenue is to come from enterprise: a Fortune 5 company with hundreds of engineers on Cline asked for governance, invoices and ROI insight. The team is at twenty people, aiming for a hundred by year end, with some 6,000 forks of Cline.

## Quotes

> "So our, our thesis is inference is not the business." — Cline guest

> "I think memories right now, for the large part, are mostly useless." — Cline guest
