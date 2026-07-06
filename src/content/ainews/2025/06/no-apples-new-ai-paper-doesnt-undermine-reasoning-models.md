---
title: 'No, Apple''s New AI Paper Doesn''t Undermine Reasoning Models'
description: >-
  This episode of the AI Daily Brief (recorded June 10, 2025) covers two related
  Apple stories: the near-total absence of meaningful AI announcements at
  Apple's WWDC 2025, and the controversy surrounding an Apple research paper
  titled "The Illusion ...
pubDate: 2025-06-10T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/131175088'
draft: false
---
# Study Document: Apple's WWDC Non-Event and the "Illusion of Thinking" Paper

## Overview

This episode of the *AI Daily Brief* (recorded June 10, 2025) covers two related Apple stories: the near-total absence of meaningful AI announcements at Apple's WWDC 2025, and the controversy surrounding an Apple research paper titled *"The Illusion of Thinking: Understanding the Strengths and Limitations of Reasoning Models via the Lens of Problem Complexity."* The host argues that the paper's findings are largely overstated, methodologically flawed, and practically irrelevant to most AI practitioners. The speaker is the host of the AI Daily Brief podcast/video channel; no name is explicitly stated in the transcript.

*Source video URL: not provided*

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and reasoning models (e.g., Claude, OpenAI's O3, DeepSeek R1)
- Understanding of what "chain-of-thought" or extended thinking in AI models means
- Awareness of the Tower of Hanoi puzzle and its algorithmic properties
- General knowledge of the AI capability debate (scaling laws, AGI discourse)
- Familiarity with Apple Intelligence and Siri as Apple's AI products

---

## Main Points

### 1. Apple's WWDC 2025: A Conspicuous AI Absence

- Expectations for AI announcements were already minimal heading into WWDC; those low expectations were met
- No significant Apple Intelligence updates were shown; AI Siri was completely absent from the conference
- Minor updates included a new image model, a revised iOS numbering system, and a controversial "Glass UI" redesign widely criticized as confusing and purposeless
- Industry observers described the event as potentially "the most boring WWDC ever," while Bloomberg's Mark Gurman was a notable dissenting voice calling it "excellent" but still acknowledging the lack of AI features as "startling"
- Investor concern is growing: one portfolio manager called Apple's AI gap an "existential risk" for the company's ability to justify premium hardware pricing

### 2. The "Illusion of Thinking" Paper — What It Claims

- The paper tested reasoning models (Claude 3.7, O3 Mini High, and others) on logic puzzles — primarily the **Tower of Hanoi** — where complexity scales exponentially with the number of disks
- Core finding: reasoning models handled up to 6–7 disks well but failed sharply at 8+ disks
- The paper concluded that reasoning models have "limitations in exact computation," "fail to use explicit algorithms," and "reason inconsistently across puzzles"
- The implication promoted in media coverage was that reasoning models do not truly reason — they merely pattern-match
- AI skeptics (notably Gary Marcus) cited the paper as a "knockout blow" for LLMs and evidence that the path to AGI via LLMs is fundamentally limited

### 3. Methodological Flaws Identified by Researchers

- Independent replication (by "Lisan Al-Gaib / Scaling 01") revealed that models were hitting **output token limits**, not reasoning limits
  - The Tower of Hanoi requires 2ⁿ − 1 moves; each move requires ~10 tokens of structured output
  - At 8 disks (255 moves), models predictably ran out of token budget — a known engineering constraint, not a cognitive ceiling
- Rather than failing silently, models **recognized** they could not output a full solution and instead described the algorithmic approach — a sign of metacognitive awareness, not failure
- The researchers **prohibited models from writing code**, which is a standard and highly effective tool for solving algorithmic puzzles
  - When allowed to write code, models solve Tower of Hanoi at seemingly unlimited complexity
- Kevin Bryan (University of Toronto) noted that post-training alignment intentionally prevents models from generating millions of tokens; the paper was measuring **self-imposed constraints**, not fundamental reasoning limits

### 4. The Practical vs. Research Framing Divide

- The host distinguishes two audiences: the **research community** (focused on AGI, cognition, long-term scaling) and the **business/applied community** (focused on current capabilities and productivity)
- The host's position: for business users, whether a model is "truly reasoning" is irrelevant if it reliably performs tasks that weren't previously automatable
- Josh Gans (University of Toronto, management professor) is cited: reasoning models are delivering real value in enterprise and academia, working "exactly as people explained they would work"
- Francois Chollet (ML scientist) provides the strongest counterargument: true reasoning enables **autonomous skill acquisition in new domains**, whereas pattern matching can only emulate known skills — this distinction matters for long-term capability development
- The host acknowledges Chollet's point but maintains it is not immediately relevant to practitioners

### 5. Contextual and Institutional Credibility Issues

- Multiple commentators noted the irony of Apple — whose AI products are widely considered behind competitors — publishing a paper arguing AI reasoning is limited
- The timing (coinciding with a WWDC devoid of AI announcements) led observers to characterize the paper as self-serving
- Apple researchers have a pattern of publishing papers arguing LLMs are fundamentally limited, despite (or perhaps because of) Apple's weak competitive position in AI
- OpenAI's O3 with near-unlimited compute effectively solved ARC-AGI benchmarks, demonstrating that token/compute constraints — not reasoning ceilings — are the operative limitation in deployed models

### 6. The Broader Discourse Problem

- Viral framing ("Apple proves AI doesn't reason") spread via social media without engagement with the paper's actual findings
- Kat Woods noted the paper's abstract explicitly states models *do* reason, just not with 100% accuracy on hard problems — the headline misrepresents this
- The episode identifies a recurring pattern of AI skepticism that overgeneralizes methodologically narrow findings into sweeping claims about the technology's limits
- Gary Marcus is cited as a recurring example, having declared AI at a wall repeatedly since at least March 2022

---

## Key Concepts

- **Reasoning models**: LLMs augmented with extended chain-of-thought processing (e.g., Claude 3.7 with thinking, OpenAI O3) designed to work through multi-step problems before producing an answer
- **Tower of Hanoi**: A classic algorithmic puzzle used as a benchmark; requires 2ⁿ − 1 moves for n disks, making it an exponentially scaling test of sequential reasoning
- **Output token limits**: Engineering constraints on the maximum length of a model's response; in this paper's context, the proximate cause of model failure rather than a reasoning limitation
- **Chain-of-thought (CoT)**: A prompting technique where models reason step-by-step before giving a final answer, forming a visible "reasoning trace"
- **Pattern matching vs. reasoning**: A central debate in AI — whether model outputs reflect genuine logical inference or sophisticated interpolation from training data
- **Apple Intelligence**: Apple's branded suite of on-device and cloud AI features, announced at WWDC 2024 and widely considered underdelivered
- **ARC-AGI benchmark**: A test of general fluid reasoning designed to be difficult for LLMs; O3 with unconstrained compute performed near-human levels, at very high cost
- **Post-training alignment**: The fine-tuning and reinforcement learning process applied after pretraining that shapes model behavior, including output length and tool use — a source of the constraints the paper inadvertently measured
- **Scaling wall**: The hypothesized point at which additional compute or data stops yielding capability improvements — what the paper's critics say it failed to demonstrate

---

## Summary

The episode argues that Apple's *Illusion of Thinking* paper — while generating significant media attention and being weaponized by AI skeptics as proof that reasoning models are fundamentally limited — is methodologically undermined by a straightforward engineering artifact: models failed Tower of Hanoi puzzles at higher complexity not because they hit a reasoning ceiling, but because they ran out of output tokens, a constraint imposed by deployment economics rather than cognitive architecture. Further, the paper excluded code execution, which trivially solves the problem at arbitrary complexity. The host situates this within a broader divide between researchers focused on long-term AGI questions and practitioners focused on current tool utility, firmly siding with the latter: for business users, the philosophical question of whether a model "truly reasons" is irrelevant as long as it performs tasks that create value. The episode also frames the paper within Apple's broader credibility problem in AI — a company whose own AI products lag significantly behind competitors is an unlikely authority on the fundamental limits of a technology it has failed to ship. The paper is best understood as a Rorschach test for pre-existing views on AI, rather than a rigorous demonstration of a scaling wall.
