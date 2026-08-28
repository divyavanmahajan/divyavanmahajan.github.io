---
title: AI Companies Still Haven’t Delivered on Their Biggest Promises
description: >-
  This episode of the AI Daily Brief (hosted by an unnamed presenter) covers two
  major story threads from a single news cycle:
pubDate: 2026-08-17T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/166961319'
draft: false
---
# AI Companies Still Haven't Delivered on Their Biggest Promises
## Study Document: AI Daily Brief — August 17, 2026

---

## Overview

This episode of the **AI Daily Brief** (hosted by an unnamed presenter) covers two major story threads from a single news cycle:

1. **GLM 5.3 release by ZAI** — a new Chinese open-weight model claiming performance gains through reinforcement learning scaling.
2. **Dario Amadei's rare public engagement on X** — responding to claims about Anthropic's internal culture, regulatory philosophy, and AI's public trust problem.

The central thesis of the main segment is captured in Amadei's own words: *"The most accurate criticism of AI companies, including Anthropic, is that we haven't yet delivered on our big promises to benefit the world."* The episode argues this trust deficit is structural and cannot be resolved through messaging alone — it requires demonstrated, real-world impact.

**Source video:** URL not provided in source material.

---

## Prerequisites

- Familiarity with major AI labs: Anthropic, OpenAI, ZAI (智谱AI), Kimi (Moonshot AI), xAI (Grok)
- Basic understanding of AI model benchmarking (coding benchmarks, agentic benchmarks, cybersecurity benchmarks)
- Awareness of the U.S.–China AI competition narrative
- Understanding of AI regulatory discourse in the U.S. (SB 1047, SB 53, CAISI, the "pacing the frontier" letter)
- Familiarity with the concepts of open-weight vs. closed-source models
- General knowledge of AGI discourse, regulatory capture, and scaling laws

---

## Main Points

### 1. ZAI Releases GLM 5.3 — Gains Through RL Scaling, Not Model Size

- GLM 5.3 is built on the **same base model as GLM 5.2** — not a new large-scale pre-training run; performance improvements are attributed entirely to **scaling reinforcement learning (RL)**.
- **Coding benchmark (Terminal Bench 3.0):** GLM 5.3 scores 28.3% — approximately 5 points behind frontier models (Fable 5, GPT-5.6 Sol) but **11 points ahead of Kimi K3**.
- **DeepSui benchmark:** 66.9% — behind Kimi K3 (half a point), Fable (3 points), and GPT-5.6 Sol (6 points); less impressive result.
- **Agentic benchmarks (Automation Bench, GDP Val):** State-of-the-art results, slightly edging out top U.S. frontier models.
- **Cybersecurity (CyberGym):** Jumped 7 points from GLM 5.2 to **overtake Fable 5** — ZAI explicitly framed this as a defensive capability argument, citing the Hugging Face attack where defenders were forced to use GLM 5.2 because frontier model guardrails made them unusable.
- ZAI is taking a **phased release** approach, testing with trusted partners before publishing full weights.
- **Cost:** GLM 5.3 is less than one-tenth the per-token cost of Fable or GPT-5.6 Sol; roughly two-thirds the cost of Kimi K3 or Grok 4.6 for equivalent tasks.
- Early real-world testing is **mixed**: strong cybersecurity results (1,000+ vulnerabilities found in open-source repos; reported vulnerability in Cursor), but some users found it slower than Kimi K3 on game development tasks and complained of painful latency.

---

### 2. The Narrative Around Chinese AI Labs Is Shifting

- Researcher **Nathan Lambert** argues the community should **stop being surprised** by strong Chinese lab performance and stop attributing it solely to distillation or benchmark gaming.
- ZAI's strength is characterized as **post-training excellence**; Kimi's strength is **pre-training**.
- **Wall Street analysts** are updating their priors: the pricing gap between Chinese and U.S. models has contracted substantially. Cheaper U.S. models (Grok 4.6, GPT-5.6 Luna, Muse Spark 1.2) are now cost-competitive with Chinese alternatives.
- Morningstar analyst **Malik Khan** notes that even open-weight Chinese models require cloud infrastructure to deploy — a tailwind for cloud providers, countering the post-DeepSeek narrative that cheap models would invalidate large-scale GPU investment.

---

### 3. Anthropic Has Unreleased Models More Capable Than Mythos 5

- Anthropic's **second Risk Report** (dated July 15, 2026) disclosed three significant unreleased internal models:
  - **Opus 5** and **Model 1** — capabilities broadly in line with Mythos 5.
  - **Model 2.2** — described as "somewhat more capable than Mythos 5," scoring **62.8% on Anthropic's internal AI R&D benchmark** vs. 50.3% for Mythos 5 and 54.8% for Mythos Preview.
- Anthropic stated **no plans to release Model 2.2 publicly** and has not run it through their standard evaluation suite.
- The report is a **month-old snapshot**; Anthropic's current internal frontier is likely further ahead still.
- This widens the known gap between publicly available models and internal lab capabilities, particularly relevant when assessing how far Chinese models lag behind "state of the art."

---

### 4. Anthropic IPO Signals and Financial Projections

- Anthropic has begun **investor roadshow meetings**; investors (not Anthropic itself) have floated a **$2 trillion IPO valuation** — higher than SpaceX's $1.7 trillion valuation earlier in 2026 and more than double Anthropic's May fundraising valuation.
- **Q2 revenue:** $11.5 billion (14x year-over-year growth); annualizes to ~$46 billion.
- Investor projections: **$100–$120 billion in revenue by end of 2026**.
- Anthropic's own internal forecast: **$190–$200 billion by 2028**.
- Financial press notes that at a $2 trillion valuation, Anthropic would need annual profits of **$59–$79 billion** to justify the valuation on standard earnings multiples — a challenge highlighted by *Fortune*.

---

### 5. The Discourse: Did Dario Amadei Say Anthropic Might Be the Only Private Company Left?

- Investor **Gavin Baker** (CIO, Atreides Capital) claimed on the *All In* podcast that multiple trusted sources told him Dario Amadei had said **Anthropic might be the only private company in the world at some point** — leaving only Anthropic and governments.
- Anthropic's **Sholto Douglas** denied this on X, calling the claim false and arguing it contradicted Anthropic's explicit concern about economic concentration of power.
- **Dario Amadei** entered the thread directly — a rare social media appearance — and did **not explicitly deny or confirm** the original claim, instead redirecting to a substantive discussion of regulatory philosophy and public trust.

---

### 6. Dario Amadei on Regulation — His Actual Position

- Amadei rejects the Silicon Valley shorthand: **regulation ≠ regulatory capture ≠ concentration of power**, calling it an oversimplification.
- He argues that well-designed institutional processes have a **decentralizing effect** — analogizing to formal courts vs. mob justice.
- Anthropic's specific regulatory proposals (SB 53, SB 1047, CAISI testing protocols, the "pacing the frontier" letter) are designed to **disadvantage frontier labs** (including Anthropic) and **advantage smaller competitors and open-weight challengers**.
- Amadei's view: **AI structurally concentrates power** due to scaling law dynamics — not regulation — and open weights merely shift that concentration to those with the most compute (frontier labs and hardware providers), not eliminate it.
- He expressed support for the Trump administration's reported approach of **pre-deployment testing for frontier models** and testing of open-weight models as they approach the frontier.
- He expressed support for **Demis Hassabis's FINRA-like entity** proposal for AI oversight.

---

### 7. Dario Amadei on the Real Source of AI's Trust Problem

- Amadei explicitly disagrees that his messaging has been disproportionately negative, noting he has written **one major essay on risks** (*The Responsible Scaling Policy* context) and **one on benefits** (*Machines of Loving Grace*), plus a policy essay (*Policy on the AI Exponential*).
- He argues the trust deficit is **not caused by warning about risks** — it is a **decades-long structural crisis of trust** in companies, governments, and tech institutions generally; AI is the latest iteration.
- He explicitly states: **"The most accurate criticism of AI companies, including Anthropic, is that we haven't yet delivered on our big promises to benefit the world."**
- He rejects glossy marketing campaigns: *"Saying AI will cure cancer is more of a cliché than it is inspiring. Most people think it is deceptive. The thing that will work is actually curing cancer."*
- Anthropic is **ramping up biology and medicine efforts**, with Amadei personally motivated by the loss of his father to hepatitis C shortly before curative antivirals became available.
- His position: honesty about risks, combined with actual demonstrated results, is the path to trust — not messaging management.

---

### 8. Community Reactions — Divided on Substance and Style

- **Positive responses:** Gavin Baker, Will Dupu (former OpenAI), and Jessica Lesson (*The Information* founder) praised the engagement as constructive and trust-building.
- **Skeptical responses:** Critics (Austin Allred, Terminally Online Engineer, Susan Zhang, AI commentator Hater) noted Amadei did not deny the original claim and accused him of deflection or gaslighting.
- **PR analysis (Lulu Cheng-Meservee):** Identified a structural mismatch — Amadei measures messaging balance *quantitatively* (essays written) while critics assess it *qualitatively* (vibes, clips, soundbites) — predicting they will continue talking past each other.
- **Regulatory critique (David Sachs):** Called Amadei's framing that critics equate all regulation with regulatory capture a **straw man**.
- **Technical challenge (Anjan Massad, Replit):** Disputed Amadei's claim that AI structurally centralizes power due to compute requirements, arguing 125 years of compute price-performance improvement makes it unreasonable to assume AGI will always require data center scale.
- **Broader structural critique (OpenAI's Angel Brodin):** Argued even spectacular breakthroughs (like curing cancer) will not resolve trust if concerns remain about pricing, access, lobbying, opacity, and distribution of economic gains — pointing to pharma as an industry that delivers breakthroughs yet remains deeply distrusted.

---

### 9. Host's Takeaways on the Discourse Itself

- Public debate based on **actual stated positions** rather than secondhand reports produces higher-quality discourse.
- Dario participating on social media — even rarely — has **disproportionate value** given the stakes and the public's desire for agency over AI's direction.
- The **short-form X post format** may suit Amadei better than 13,000-word essays or long interviews — harder to clip out of context, easier for people to verify.
- The host agrees with Amadei that the trust problem is structural and cannot be messaging-fixed alone — but disagrees that Amadei understands or accounts for how his messaging *actually functions* in the real media environment.
- The host's view: Amadei can simultaneously understand that social media clips negative soundbites and continue giving interviews generating negative soundbites — and that contradiction reflects a genuine blind spot, not just critics misreading him.

---

## Key Concepts

- **GLM 5.3:** ZAI's latest open-weight model, improved over GLM 5.2 via reinforcement learning scaling rather than new pre-training.
- **Terminal Bench 3.0:** A coding capability benchmark used to compare AI model performance.
- **CyberGym:** A cybersecurity capability benchmark; GLM 5.3 overtook Fable 5 on this metric.
- **Automation Bench / GDP Val:** Agentic task benchmarks where GLM 5.3 claimed state-of-the-art results.
- **Reinforcement Learning (RL) Scaling:** Improving model performance post-training through reinforcement learning rather than increasing pre-training compute or parameters.
- **Open-weight models:** AI models whose weights are publicly released, allowing anyone with sufficient compute to run or fine-tune them.
- **Regulatory capture:** The phenomenon where regulated industries gain undue influence over the regulators meant to oversee them; a common concern in AI policy debates.
- **Pacing the frontier:** A regulatory concept where rules modulate the pace of development at the leading edge of AI capability while leaving challengers and smaller players less constrained.
- **SB 1047 / SB 53:** California AI safety bills; SB 53 passed with Anthropic support; SB 1047 was more controversial; both exempted smaller companies below revenue/training cost thresholds.
- **CAISI:** A U.S. government AI safety testing framework that Anthropic has advocated involving stricter testing requirements for frontier models than for off-frontier models.
- **FINRA-like entity:** A proposed self-regulatory organization for AI, modeled on the Financial Industry Regulatory Authority, advocated by DeepMind's Demis Hassabis.
- **Machines of Loving Grace:** Dario Amadei's essay arguing AI could radically improve human health and biology, curing most diseases within 5–10 years.
- **Scaling laws:** Empirical relationships showing that model performance improves predictably with increases in compute, data, and parameters — not physical laws, as critics note, but observed patterns for specific architectures.
- **Model 2.2:** An unreleased Anthropic internal model, disclosed in the second Anthropic Risk Report, scoring notably higher than Mythos 5 on internal benchmarks but not planned for public release.
- **Hugging Face attack:** A referenced incident in which an unreleased advanced model allegedly hacked Hugging Face infrastructure; open-source models were reportedly used by defenders because frontier model guardrails rendered them unsuitable for the task.
- **Fable 5 / GPT-5.6 Sol / Mythos 5:** Named frontier model versions used throughout as performance benchmarks; likely Anthropic, OpenAI, and/or Google model releases in this future timeline.

---

## Summary

This episode of the AI Daily Brief presents a Monday news cycle centered on two converging themes: the continuing competitive advance of Chinese AI labs through efficient post-training methods (exemplified by ZAI's GLM 5.3), and a rare and substantive public exchange between Anthropic CEO Dario Amadei and Silicon Valley investors over Anthropic's internal beliefs, regulatory philosophy, and AI's deep trust problem with the public. On the model side, the episode argues that Chinese labs deserve to be taken seriously on their own technical merits — not dismissed as benchmark gamers or distillation shops — while noting that the cost and capability gap with U.S. frontier models has substantially narrowed rather than disappeared. On the Anthropic discourse, the host concludes that Amadei's most important and honest statement — that AI companies, including Anthropic, have simply not yet delivered on their biggest promises to benefit humanity — is the most accurate and productive framing available, and that no amount of messaging strategy can substitute for demonstrated real-world results. The episode also argues that Amadei's rare willingness to engage directly in short-form public posts is a communications tool he should use more frequently, as it is structurally harder to distort than long-form essays or interviews, even as the underlying disagreements about regulation, power concentration, and the nature of AI's trust deficit remain substantively unresolved.
