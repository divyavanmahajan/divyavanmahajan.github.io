---
title: >-
  Claude Code for Finance + The Global Memory Shortage: Doug O'Laughlin,
  SemiAnalysis
description: >-
  SemiAnalysis's Doug O'Laughlin argues Claude Code has crossed the line into
  general information work, while AI demand is driving a multi-year memory and
  CPU supply squeeze.
pubDate: '2026-02-24'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/claude_code_for_finance_the_global_memory_shortage_doug_o_laughlin_semianalysis
durationMin: 124
hosts:
  - Alessio Fanelli
  - swyx
guests:
  - Doug O'Laughlin
tags:
  - claude-code
  - semiconductors
  - memory
  - knowledge-work
  - ai-infrastructure
  - microsoft
draft: false
---
## Thesis

Doug O'Laughlin of SemiAnalysis tells swyx that Claude Code on Opus 4.5 was his "awakening": agents now finish multi-step analyst work, so finance and other information work will follow software engineering. On the hardware side he argues that this demand, after years of underinvestment, is creating a memory shortage that will last about two years and will force choices about who gets chips.

## Key points

- **Claude Code as an analyst tool.** O'Laughlin dates his shift to late December, when Opus 4.5 began one-shotting projects. He uses it for portfolio frameworks, charts styled from summarised visualisation books, and a weekend attempt to fine-tune a time-series foundation model on NAND and DRAM prices. The forecast failed because of regime changes, but the data gathering was worth it. He treats the agent as a junior analyst whose output still needs expert "hygiene".
- **Tracking adoption.** His team scraped GitHub commits signed by Claude Code and found about 4% of public commits (now nearer 5%). He calls his 25% end-of-year forecast a sandbag. He rates Codex 5.3 as excellent for coding but too "coding pilled" for general research.
- **Interfaces for humans lose value.** He argues Excel, Bloomberg and PowerPoint are human IDEs. Claude Code using Python beats Claude for Excel, so Microsoft has the most to lose. He describes Azure renting GPUs to OpenAI as paying the barbarians at the gate, and calls Oracle's debt-funded build-out too aggressive for an illiquid market.
- **TPUs have a window.** He says TPU v7 (Ironwood) has its widest TCO lead over Nvidia now, which explains Google selling externally to Anthropic. He expects v8 to fall behind Rubin on HBM.
- **Memory squeeze.** Each bit of HBM costs roughly three to four bits of DRAM capacity. KV-cache offload is also taking the middle tier, and no one built clean rooms after the last bust. SemiAnalysis sees DRAM prices possibly doubling again, which will hit phones and gaming GPUs. He expects revived CXL memory pooling and a CPU shortage from COVID-era server refreshes, RL environments and agent-written software.

## Quotes

> "Excel is a human IDE for information work that's generalizable." — Doug O'Laughlin

> "It's not AGI today, but it can do these crazy long tasks, and as long as you finish it at the end and deposit it as information work, that's very valuable." — Doug O'Laughlin
