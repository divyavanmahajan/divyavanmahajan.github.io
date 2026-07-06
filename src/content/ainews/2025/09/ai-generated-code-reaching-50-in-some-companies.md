---
title: AI Generated Code Reaching 50% in Some Companies
description: >-
  This episode of the AI Daily Brief (recorded September 9–10, 2025) covers the
  accelerating adoption of AI-generated code inside major technology companies,
  alongside related funding rounds, tooling developments, and benchmark results
  in the agenti...
pubDate: 2025-09-10T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/138551337'
draft: false
---
## Overview

This episode of the **AI Daily Brief** (recorded September 9–10, 2025) covers the accelerating adoption of AI-generated code inside major technology companies, alongside related funding rounds, tooling developments, and benchmark results in the agentic coding space. The host, **Nathaniel Whittemore** (implied by the show's format), synthesises data points from company CEOs, researchers, and investors to argue that AI-assisted and agentic coding has crossed a meaningful adoption threshold—with some firms now attributing more than 50% of new code to AI tools—while contending the category is still in its earliest innings.

*Source video URL: not provided.*

---

## Prerequisites

- Familiarity with the distinction between **AI code completion tools** (e.g., GitHub Copilot) and **agentic coding systems** (e.g., Devin, Claude Code, Codex)
- Basic understanding of **ARR (Annual Recurring Revenue)** and startup valuation terminology
- Awareness of the **SWE-Bench Verified** benchmark as an industry-standard evaluation for AI software engineering
- General knowledge of leading AI model providers: OpenAI, Anthropic, Google DeepMind
- Familiarity with **inference-time scaling** as a method of improving model performance at runtime rather than through additional pre-training

---

## Main Points

### AI-Generated Code Exceeding 50% at Some Companies

- Coinbase CEO Brian Armstrong reported ~40% of code being written by AI, targeting 50% by October 2025.
- Robinhood CEO Vlad Tenev estimated AI now writes more than 50% of new code at Robinhood; human-authored code is officially in the minority.
- Tenev noted the company has migrated from GitHub Copilot → Cursor → Windsurf, with close to 100% of engineers using AI code editors.
- Anthropic CEO Dario Amodei stated that approximately 90% of code at Anthropic is written or suggested by AI.
- Microsoft's internal figure was reported at ~40% earlier in 2025, up from ~30% earlier in the year.
- Meta CEO Mark Zuckerberg estimated 20–30% in mid-2025 and projected ~50% by 2026.

### Context on Dario Amodei's "90% in 3–6 Months" Prediction

- At a Council on Foreign Relations event in March 2025, Amodei predicted AI would write 90% of all code within 3–6 months and essentially all code within 12 months.
- Critics (including *The Information*, which asked Claude to grade the prediction) gave it an "F" for missing the stated timeline.
- The host argues the miss is attributable to **organisational inertia and adoption lag**, not AI capability limitations.
- The high prediction figure paradoxically makes numbers like 40–50% seem unimpressive, even though they would have seemed extraordinary previously.

### OpenAI's Codex Reclaiming Ground in Agentic Coding

- Following the GPT-5 launch, OpenAI's **Codex** platform saw usage increase approximately 10× in two weeks, per Sam Altman.
- Researchers noted Codex (powered by GPT-5) maintains task focus over longer contexts and does not abandon tasks mid-execution.
- Competitive dynamics shifted rapidly: the community moved from Cursor → Claude Code (July) → back toward Cursor/Codex (September), partly due to alleged (and denied) model degradation by Anthropic.
- The host emphasises that regardless of which tool leads at any moment, all tools are dramatically better than 9–12 months prior.

### Cognition ($10.2B Valuation) and the Devin + Windsurf Combination

- Cognition, maker of **Devin** (AI software engineer agent), raised $400 million at a $10.2 billion post-money valuation.
- ARR grew from ~$1 million annualised (September 2024) to $73 million (June 2025).
- Cognition's acquisition of **Windsurf** (an AI-powered IDE, acquired after the Windsurf–OpenAI deal fell through) more than doubled ARR; combined enterprise-focused ARR grew 30% in seven weeks post-acquisition.
- The strategic logic: combining an **IDE** (synchronous, human-in-the-loop speed) with an **agent** (asynchronous, parallel capacity) gives engineers both modes of working—termed "owning the sync/async spectrum."

### Swix (Sean Wang) Joins Cognition: A Thesis on Agent Labs vs. Model Labs

- Sean Wang (host of *Latent Space*, organiser of the AI Engineer Summit) announced he would join Cognition full-time.
- His central thesis: **"Code AGI will be achieved in 20% of the time of full AGI and capture 80% of the value of AGI."**
- He argues that from 2015–2025, the right career bet was model labs; from 2025 onward, **agent labs** hold relative advantage because:
  - They are product-first, adapting frontier models to unsolved domains.
  - Enterprise demand ("hire the guys who nerd out about AI to keep us on top") operates at a level of abstraction agent labs can directly serve.
- He frames Devin + Windsurf as "local agent speed plus cloud agent capacity."

### Blitzy's SWE-Bench Verified Result: Inference-Time Scaling

- Blitzy (a show sponsor) claimed **86.8% on SWE-Bench Verified**, representing a >13% improvement over the prior best.
- The approach: extending thinking time available to agents from seconds/minutes to **hours or days**, enabling solutions to previously "unsolvable" problems.
- CTO Sid Pardeshi: *"The unsolvables weren't actually unsolvable, they just required deeper thinking than System 1 AI could provide."*
- The result is framed as validation that **inference-time scaling** is a primary lever for exponential capability improvement.

### Headlines: OpenAI Backing an AI Feature Film ("Critters")

- OpenAI is co-producing a feature film titled *Critters* (spelled with a Z), targeting debut at Cannes 2026.
- Budget: ~$30 million; production timeline: ~9 months (vs. the typical ~3 years for comparable animated films).
- The film will use human voice actors and human-drawn sketches fed into OpenAI tools; the extent of AI-generated video is undetermined.
- Investor commentary suggests the film should be judged as a **good movie**, not merely a good AI movie, to constitute a genuine win.

### Other Headlines: Deals, Revenue, and Policy

- **Microsoft** signed a $17.4 billion, 5-year compute deal with **Nebius** (AI neo-cloud), a deal larger than Nebius's entire market cap (~$15 billion).
- **Databricks** is closing a funding round at a $100 billion valuation; reports $4 billion in annualised revenue (up 50% YoY), with $1 billion attributable to AI-related sales; positive free cash flow.
- **ElevenLabs** conducted a tender offer valuing the company at $6.6 billion; CEO reported surpassing $200 million ARR, projecting $300 million by year-end, with enterprise revenue up >200% YoY.
- **California SB 53**: Anthropic endorsed the bill as a more measured successor to the vetoed SB 1047, focusing on disclosure requirements and catastrophic-risk thresholds (≥50 deaths or ≥$1 billion in damage). Former Trump AI advisor Dean Ball praised the bill's "legislative restraint."
- **US Defense Bill**: Proposed temporary AGI Steering Committee for the Department of Defense, tasked with analysing military implications of systems that "match or exceed human intelligence across most cognitive tasks."

---

## Key Concepts

- **Agentic coding**: AI systems that autonomously plan, write, debug, and iterate on code with minimal human intervention, as distinct from autocomplete tools.
- **AI IDE (Integrated Development Environment)**: A code editor augmented with AI assistance (e.g., Cursor, Windsurf) where the human makes each decision but with AI speed-up.
- **SWE-Bench Verified**: An industry benchmark measuring an AI system's ability to resolve real-world GitHub software engineering issues; used to compare agentic coding systems.
- **Inference-time scaling**: Improving AI output quality by allocating more computation at the time of inference (thinking longer), rather than through additional model training.
- **Neo-cloud**: A category of AI-specialised cloud infrastructure providers (e.g., CoreWeave, Nebius) that rent GPU compute to hyperscalers and AI companies.
- **ARR (Annual Recurring Revenue)**: Annualised subscription or recurring revenue, used as a standard growth metric for SaaS and AI startups.
- **Sync/async spectrum**: The distinction between synchronous (real-time, human-directed) and asynchronous (background, agent-directed) modes of software development.
- **Code AGI**: The hypothetical point at which AI systems can autonomously handle the full range of software engineering tasks at or above human expert level.
- **SB 53 / SB 1047**: California state AI safety bills; SB 1047 was vetoed in 2024; SB 53 is a 2025 successor emphasising disclosure over prescriptive technical mandates.
- **Devin**: Cognition's AI software engineering agent, positioned as a fully autonomous "junior engineer" capable of completing multi-step coding tasks.
- **Windsurf**: An AI-powered IDE acquired by Cognition; provides individual developer speed augmentation.

---

## Summary

The episode's central argument is that AI-generated code has moved from an aspirational benchmark to a measurable operational reality: leading technology companies such as Robinhood and Coinbase now attribute 40–50%+ of new code to AI tools, and Anthropic itself reports approximately 90% AI-written code internally. While Dario Amodei's prediction of 90% industry-wide within three to six months was directionally correct but practically premature—held back by adoption inertia rather than capability gaps—the underlying trajectory is unmistakable. The tooling ecosystem (Cursor, Windsurf, Codex, Claude Code, Devin) has improved dramatically in under a year, and the convergence of IDE-based human-augmentation tools with fully autonomous agents—exemplified by Cognition's Devin + Windsurf combination and validated by its $10.2 billion valuation—suggests the category is structurally maturing. Blitzy's 86.8% SWE-Bench result further demonstrates that inference-time scaling remains an underexploited lever for capability gains. Taken together, the host presents AI and agentic coding as one of the most consequential near-term AI adoption curves, one that is still in its earliest innings despite already appearing transformative.
