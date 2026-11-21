---
title: A developer's toolkit for SOTA AI
description: >-
  Codeium's founders argue that GPU infrastructure expertise lets them offer a
  free AI coding toolkit and self-hosted, fine-tuned models that enterprises can
  trust with private code.
pubDate: '2023-07-12'
show: practical-ai
episode: 231
url: 'https://share.transistor.fm/s/d3eff646'
durationMin: 42
hosts:
  - Chris Benson
guests:
  - Varun Mohan
  - Anshul Ramachandran
tags:
  - ai-coding-assistants
  - gpu-infrastructure
  - fine-tuning
  - enterprise-ai
  - developer-tools
draft: false
---
## Thesis

Varun Mohan and Anshul Ramachandran of Codeium tell Chris Benson that their background in GPU virtualization at Exafunction is what makes their AI coding toolkit possible. They argue that efficient infrastructure lets them keep the individual product free forever and deploy air-gapped, fine-tuned models inside enterprises, where private code matters more than model size.

## Key points

- **From GPUs to code.** Mohan says GPUs are hard to share because of limited memory, and that an H100 costs well over 30 grand. Exafunction's virtualization software managed over 10,000 GPUs in a single GCP region before the team saw that a Copilot-style product would be one of the largest GPU workloads.
- **Toolkit, not autocomplete.** Ramachandran says autocomplete is one task among many, so Codeium adds in-IDE chat, code lenses for explaining, refactoring or testing a function, and embeddings-based search over the codebase.
- **Free at scale.** Mohan cites over 100,000 active individual developers, more than 10 billion tokens of code a day, and says most users churned from Copilot with almost no marketing spend.
- **Self-hosted fine-tuning.** Low-latency autocomplete sees only about 150 lines of context, so Ramachandran argues fine-tuning on a company's own code is needed. Codeium runs fully air-gapped, even in AWS GovCloud, and fine-tunes on serving GPUs during idle time. He cites Meta's 1.3-billion-parameter internal model outperforming Copilot.
- **Acceleration versus exploration.** Mohan says autocomplete is 90 to 95% of usage and distinguishes typing what you already know from exploring unfamiliar APIs, which he calls the real value.
- **Choosing bets.** Mohan says 2023's code-writing agent hype outran the technology for codebases of 10 million lines, and cites lessons from autonomous vehicles about building too early.

## Quotes

> "let's try to build an AI toolkit rather than AI autocomplete tool." — Anshul Ramachandran

> "You just 100% shouldn't be building a tool when the technology just isn't there yet." — Varun Mohan
