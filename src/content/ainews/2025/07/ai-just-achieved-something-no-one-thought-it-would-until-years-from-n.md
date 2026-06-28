---
title: Ai Just Achieved Something No One Thought It Would Until Years From N
description: >-
  This episode of the AI Daily Brief (recorded and published around July 22,
  2025) covers several major AI news stories, with the central focus being
  OpenAI's experimental reasoning model achieving gold-medal-level performance
  at the 2025 Internatio...
pubDate: 2025-07-22T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
## Overview

This episode of the **AI Daily Brief** (recorded and published around July 22, 2025) covers several major AI news stories, with the central focus being OpenAI's experimental reasoning model achieving gold-medal-level performance at the 2025 International Mathematical Olympiad (IMO) — a milestone that virtually no expert predicted would arrive this soon. An addendum reveals that Google DeepMind achieved the same result at the same competition. The episode also covers Netflix's first official use of generative AI in final production footage, Meta's rejection of the EU AI Code of Practice, antitrust scrutiny of the ServiceNow/MoveWorks acquisition, and early signals about GPT-5. The host is **Nathaniel (NLW)**, creator of the AI Daily Brief podcast and video series.

*Source video URL: Not provided (YouTube channel/URL unavailable from transcript metadata)*

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and how they are trained (pre-training, fine-tuning, reinforcement learning)
- Understanding of benchmark-driven AI evaluation (e.g., GSM8K, AIME, MATH)
- General awareness of the AGI concept and ongoing debate about what constitutes artificial general intelligence
- Familiarity with the AI regulatory landscape, specifically the EU AI Act
- Basic knowledge of the competitive AI lab landscape (OpenAI, Google DeepMind, Meta AI, Anthropic)
- Understanding of reinforcement learning (RL) at a conceptual level, particularly the importance of verifiable reward signals

---

## Main Points

### Netflix Officially Uses Generative AI in Final Production Footage

- Netflix co-CEO Ted Sarandos confirmed that Gen AI was used in the final cut of an Argentine show, *El Eternata*, to depict a building collapsing
- The AI-assisted VFX allowed producers to complete the scene **10× faster and cheaper** than traditional methods
- Sarandos framed this not as cost-cutting but as **enabling production quality that would otherwise have been unaffordable** for a small-market show
- Co-CEO Greg Peters also noted Netflix is piloting Gen AI for personalization, search, and AI-powered interactive ads (planned for H2 2025)
- The announcement generated extensive media coverage (BBC, NYT, The Guardian), suggesting significant public sensitivity to AI use in entertainment

---

### Meta Refuses to Sign EU AI Code of Practice; Regulatory Fragmentation Grows

- The EU AI Code of Practice is a **voluntary framework** designed to help AI companies comply with the EU AI Act; it includes bans on training with pirated materials, transparency guidelines, and the ability to remove copyrighted data from datasets
- Meta's head of global affairs Joe Kaplan publicly stated Meta will not sign, calling the code an overreach that introduces legal uncertainty and goes beyond the scope of the AI Act
- OpenAI has indicated it will comply — characterized by one academic as "fake compliance" vs. Meta's "principled rejection"
- Over 40 major European businesses signed a letter asking the EU Commission to pause implementation
- The Trump administration has signaled it will defend U.S. tech companies from large EU fines, raising the prospect of this becoming a **U.S.-Europe diplomatic flashpoint**
- Compliance deadline is August 2, 2025, though this could be delayed

---

### DOJ Antitrust Scrutiny of ServiceNow/MoveWorks Acquisition

- The DOJ opened an in-depth antitrust probe into ServiceNow's **$2.85 billion acquisition of MoveWorks**, a B2B AI startup
- This is the **first signal from the Trump-era DOJ** of concern about AI market concentration below the hyperscaler level
- MoveWorks provides data compatibility and discoverability infrastructure for ServiceNow's agentic products; blocking the deal would significantly harm both platforms' competitive positions
- Salesforce's acquisition of Informatica raises similar questions; Meta's acqui-hire activity could also face future DOJ scrutiny
- The deal has already been delayed four months, a costly wait in a fast-moving market

---

### AI Startup Bifurcation: Winners and Losers in the Enterprise Space

- AnySphere (makers of **Cursor**) hired top engineers from AI-powered CRM startup Koala, which is shutting down in September despite having raised a $15M Series A
- TechCrunch describes this as emblematic of a **two-tier AI startup landscape**: high-growth AI tooling companies (Cursor) versus B2B AI startups that ran out of steam
- The host suggests significant private equity/holding company opportunity exists in acquiring or restructuring B2B AI startups funded in 2022–2024 that are now stalling

---

### OpenAI's Experimental Model Achieves IMO Gold Medal Performance — A Historic Milestone

- OpenAI's experimental reasoning model **solved 5 of 6 problems** at the 2025 International Mathematical Olympiad, independently verified by former IMO medalists as equivalent to a gold medal score
- The model operated under the **same constraints as human contestants**: 4.5-hour sessions, no tools, no internet access
- Critically, this was a **general-purpose LLM**, not a narrow math-specific system — the capability emerged from new general-purpose RL and test-time compute scaling techniques
- The model produces multi-page **natural language proofs**, not integer answers — a much harder verification problem than prior benchmarks like AIME
- The model "thinks for hours," a significant extension beyond O1 (seconds) and Deep Research (minutes)

**Benchmark progression cited by Noam Brown (OpenAI researcher):**

```
GSM8K     → ~0.1 min for top humans  (saturated by AI in 2024)
MATH      → ~1 min for top humans    (saturated)
AIME      → ~10 min for top humans   (recently saturated)
IMO       → ~100 min for top humans  (gold achieved July 2025)
```

- AI safety researchers Paul Christiano and Eliezer Yudkowsky had assigned only **8% and 16% probability** (respectively, as of Feb 2022) to AI achieving IMO gold by 2025, even with tools permitted — the actual result used no tools
- Terence Tao (Fields Medal winner, youngest-ever IMO participant) had predicted AI would not score highly on the IMO as recently as June 2025
- Sam Altman tweeted that the model is **more advanced than GPT-5** and that GPT-5-level IMO performance should not be expected "for many months"

---

### Google DeepMind Also Achieves IMO Gold at the Same Competition

- In an addendum, the host reports that Google DeepMind's **advanced Gemini DeepThink** model also achieved a gold-medal-equivalent score: **35 out of 42 points**
- Unlike OpenAI, DeepMind waited for official IMO board clearance before announcing, a distinction Demis Hassabis noted publicly
- DeepMind's solutions were graded by official IMO coordinators and described as "clear, precise, and easy to follow" by Dr. Gregor Dolinar
- DeepMind received what it described as the **first officially graded and certified gold-level AI result** from IMO coordinators
- The host emphasizes that two independent labs achieving gold simultaneously means this is a **state-of-the-art capability threshold**, not a single lab's isolated result

---

### Implications for AGI Timelines and the Road Ahead

- The IMO result is being discussed as a possible AGI marker; commentators including Emad Mostaque (former Stability AI founder) and RL researcher Will Brown weighed in
- OpenAI researcher Jerry Trok noted the team "did very little IMO-specific work — we just kept training general models," reinforcing the generality of the capability
- The new RL techniques enable training on **hard-to-verify tasks** (long-form proofs), potentially unlocking a much wider range of scientific and reasoning domains
- Sam Altman has predicted **2026 as the year AI begins contributing to actual scientific discovery**
- ARC Prize announced **ARC-AGI-3**, an interactive, game-based benchmark where frontier AI currently scores 0% and humans score 100%, designed to test adaptive reasoning, world-model building, and long-horizon planning
- GPT-5 rumors include a **multi-model routing architecture** (reasoning, non-reasoning, tool-using) with automatic prompt routing; GPT-6 reportedly already in training
- More than 10 OpenAI researchers were reportedly offered **$300M four-year packages** by Meta and declined, which observers interpret as a signal of perceived proximity to AGI internally

---

## Key Concepts

- **International Mathematical Olympiad (IMO):** Annual high school mathematics competition involving formal proof-based problems; widely regarded as one of the world's most rigorous intellectual contests
- **Reinforcement Learning (RL):** Training paradigm where a model learns by receiving reward signals for correct or preferred outputs; previously limited by the need for clear, verifiable rewards
- **Test-Time Compute Scaling:** The practice of allowing a model to "think longer" at inference time to improve performance on hard problems
- **Hard-to-Verify Tasks:** Problems where correctness cannot be determined by a simple rule or integer check (e.g., multi-page mathematical proofs), requiring new RL approaches beyond standard verifiable rewards
- **ARC-AGI-3:** The third iteration of the Abstraction and Reasoning Corpus benchmark, redesigned as an interactive, game-based system testing adaptive reasoning and world-model building; current frontier AI scores 0%
- **EU AI Code of Practice:** A voluntary EU framework to help companies comply with the AI Act, covering training data provenance, copyright compliance, and transparency; non-compliance reduces legal protections
- **EU AI Act:** EU legislation regulating AI systems by risk level, including prohibitions on training with pirated materials
- **AGI (Artificial General Intelligence):** A hypothetical AI system capable of performing any intellectual task a human can; its definition and threshold remain contested
- **Gemini DeepThink:** Google DeepMind's enhanced reasoning mode for Gemini, used to achieve IMO gold performance
- **Acqui-hire:** The acquisition of a company primarily to obtain its talent rather than its products or IP
- **General-Purpose Reasoning Model:** An LLM trained with broad RL techniques rather than task-specific methods, capable of applying reasoning across diverse domains

---

## Summary

The central event of this episode is the announcement — later confirmed to apply to both OpenAI and Google DeepMind — that the current frontier of AI reasoning has crossed the threshold of gold-medal performance at the 2025 International Mathematical Olympiad, a benchmark milestone that leading AI safety researchers and prominent mathematicians did not expect to arrive until much later, if at all. What makes the result significant is not merely the score but the method: a general-purpose LLM trained with novel reinforcement learning techniques that do not require easily verifiable reward signals, producing hours-long formal mathematical proofs in natural language without access to any external tools. The host situates this alongside other signals — the acceleration of benchmark saturation from grade-school math to the IMO in roughly one year, talent packages declining $300M offers at OpenAI, vague but urgent warnings from insiders about an impending "phase shift," and Sam Altman's framing of the result as part of OpenAI's core push toward general intelligence — to argue that the AI field is at a genuine inflection point. Secondary stories reinforce the breadth of AI's societal penetration: Netflix integrating Gen AI into production as an enablement tool rather than a cost-cutter, the EU and major U.S. AI labs moving toward regulatory confrontation, antitrust scrutiny emerging for mid-tier AI acquisitions, and a stark bifurcation emerging between AI startups that are scaling explosively and those quietly folding.
