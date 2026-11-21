---
title: "Shopify’s AI Phase Transition: 2026 Usage Explosion, Unlimited Opus-4.6 Token Budget, Tangle, Tangent, SimGym — with Mikhail Parakhin, Shopify CTO"
date: 2026-04-22
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/shopify_s_ai_phase_transition_2026_usage_explosion_unlimited_opus-4_6_token_budget_tangle_tangent_simgym_with_mikhail_parakhin_shopify_cto"
duration_min: 72
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Mikhail Parakhin"]
description: "Shopify's CTO says AI use inside the company took off in December 2025, and that the gains come from critic loops, rigorous PR review and auto-research, not raw token volume."
tags: ["ai-adoption", "coding-agents", "code-review", "auto-research", "customer-simulation"]
source_transcript: "latent-space/episodes/2026/04/2026-04-22-shopify-s-ai-phase-transition-2026-usage-explosion-unlimited-opus-4-6.md"
draft: false
---

## Thesis

Mikhail Parakhin, CTO of Shopify, describes a phase transition around December 2025, after which internal AI tool use approached 100% of staff and token consumption grew exponentially. His argument is that spending tokens is not the goal: quality comes from agents critiquing each other, expensive models reviewing PRs, auto-research loops, and proprietary data that makes simulations trustworthy.

## Key points

- **Adoption and budget.** Daily use of at least one AI tool is near universal. CLI tools such as Claude Code, Codex, Pi and Shopify's internal agent River are growing faster than IDE tools like Copilot and Cursor. Shopify funds effectively unlimited tokens but discourages anything below Opus 4.6. Parakhin notes usage is skewing towards the top percentile of users.
- **Quality over volume.** He calls many uncoordinated parallel agents an anti-pattern and prefers a critic loop with a second model. Because AI writes so much more code, more bugs reach production, so he spends heavily on pro-level models for PR review and sees CI/CD as the main bottleneck. PR merges now grow about 30% month on month.
- **Tangle and Tangent.** Tangle, open sourced, is a third-generation system for ML and data experiments with content-hash caching, so shared work is never recomputed. Tangent adds an auto-research loop; one run lifted search from 800 to 4,200 QPS on the same machines, and a PM is its heaviest user.
- **Limits of auto-research.** In a weeks-long personal test, only one of over 400 experiments succeeded, but it still found a gain in heavily optimised code. Parakhin says it handles obvious improvements, not out-of-distribution ideas.
- **SimGym.** Simulated shoppers browse stores visually; Shopify spent nearly a year tuning against historical data to reach a 0.7 correlation with add-to-cart events. Parakhin says the decades of merchant data are what make it work.
- **Liquid models.** Shopify uses Liquid AI's non-transformer models as distillation targets, including a 300M-parameter model running search query understanding in 30 milliseconds, and says Liquid is taking share from Qwen internally.

## Quotes

> "the anti-pattern is running multiple agents, too many agents in parallel that don't communicate with each other." — Mikhail Parakhin

> "if you're not using auto research-like approach in whatever you do, like literally whatever you do, then you're missing out." — Mikhail Parakhin
