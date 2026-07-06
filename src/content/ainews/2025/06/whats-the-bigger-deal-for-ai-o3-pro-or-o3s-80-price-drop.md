---
title: 'What''s the Bigger Deal for AI: o3 Pro or o3''s 80% Price Drop?'
description: >-
  This episode of the AI Daily Brief (recorded approximately June 11, 2025)
  examines two simultaneous OpenAI announcements: the release of the O3 Pro
  model and an 80% price reduction on the existing O3 model. The host argues
  that both developments a...
pubDate: 2025-06-11T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/131251402'
draft: false
---
# Study Document: O3 Pro vs. O3's 80% Price Drop — What's the Bigger Deal for AI?

## Overview

This episode of the *AI Daily Brief* (recorded approximately June 11, 2025) examines two simultaneous OpenAI announcements: the release of the O3 Pro model and an 80% price reduction on the existing O3 model. The host argues that both developments are significant but in fundamentally different ways — one signals a leap in practical model capability, the other demonstrates that AI inference costs are declining faster than even the most optimistic predictions suggested. Alongside these two main topics, the episode covers Meta's reported ~$15 billion investment in Scale AI, turbulence in xAI's fundraising amid Elon Musk's political feuding, and Lovable's reported $100M raise.

*Source video URL: not available (internal reference: `2025-06-11-whats-the-bigger-deal-for-ai-o3-pro-or-o3s-80-price-drop`)*

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and the OpenAI model family (GPT-4, O1, O3 series)
- Understanding of AI inference pricing (tokens, cost per million tokens)
- General awareness of the AI competitive landscape: OpenAI, Anthropic (Claude/Sonnet), Google (Gemini), Meta (Llama)
- Familiarity with concepts such as reinforcement learning from human feedback (RLHF), agentic AI, and tool-use in LLMs
- Basic knowledge of antitrust concerns in big tech acquisitions
- Awareness of benchmark evaluations like ARC-AGI

---

## Main Points

### 1. O3 Price Drop: 80% Reduction in Output Token Cost

- O3 output token pricing dropped from **$40 per million tokens to $8 per million tokens** — an 80% reduction announced by Sam Altman.
- Input pricing now stands at **$2 per million tokens**.
- OpenAI also **doubled rate limits** for O3 for Plus users.
- OpenAI's go-to-market representative (Adam) confirmed this is **the same model, not a distilled or quantized version** — the gains are attributed to inference engineering improvements ("the inference engineers ate").
- Researcher Noam Brown noted that the cost-vs-intelligence curve will continue improving rapidly, urging builders to "skate to where the puck is going."

### 2. Competitive Context and the Goldman Sachs Rebuttal

- Some observers (e.g., Lisan Al-Gaib) attributed the price drop at least partially to competitive pressure from **Gemini 2.5 Pro** and **Anthropic's Claude Sonnet**.
- The host revisits a June 2024 Goldman Sachs report ("Gen AI: Too Much Spend, Too Little Benefit") in which head of global equity research Jim Cavello argued:
  - AI costs would **not** decline substantially over time.
  - The starting cost base was too high to make AI automation affordable.
- The host's counter: within roughly three months, the most capable model in its class saw an **80% cost reduction** — faster than any analyst predicted.
- Key takeaway: **cost will not be the constraining factor** in AI's impact.

### 3. O3 Pro: A Model Built for Real-World Context

- O3 Pro was released alongside the price cut. Sam Altman noted the pricing would be favorable "for the performance."
- AI entrepreneur **Ben Heilach** (guest post on Latent Space, titled *"God is Hungry for Context"*) provided the most detailed early evaluation:
  - Simple tests and isolated prompts did not reveal O3 Pro's advantage.
  - When given **rich, real-world context** (meeting notes, goals, voice memos), the model produced specific, actionable business plans that "changed how we are thinking about our future."
  - O3 Pro is notably better at: discerning its environment, accurately reporting what tools it has access to, knowing when to ask questions vs. when to act, and choosing the right tool.
  - Key limitation: **without sufficient context, it overthinks** and confuses itself.
- Investor Eric Wall tested O3 vs. O3 Pro in a strategic animal-selection game:
  - O3 Pro (thinking for ~10 minutes) **lost** to O3 (thinking for ~25 seconds).
  - O3 Pro's self-explanation: "Thinking longer is only an advantage when the extra cycles surface new decisive information."
  - Lesson: excess inference on low-context problems is counterproductive.

### 4. O3 Pro and Agentic Capability

- Ben Heilach's framing: O3 Pro is "insanely good at analyzing, amazing at using tools to do things" but weaker at direct, context-light execution.
- Described as a potential **fantastic orchestrator** in multi-agent systems.
- Compared to "a high-IQ 12-year-old going to college" — smart in isolation but needing integration into real-world systems (tool calls, external data, human collaboration) to be truly useful.
- On **ARC-AGI-1**, O3 Pro performs roughly in line with O3, but at higher cost — however, ARC intentionally caps inference, so this may underrepresent O3 Pro's real-world performance.

### 5. Meta's ~$15B Investment in Scale AI

- Meta is reportedly paying ~$15 billion for a **49% non-voting stake** in Scale AI — structured to avoid antitrust classification as a full acquisition.
- **28-year-old Scale AI CEO Alexander Wang** is expected to head a new internal "superintelligence lab" at Meta.
- Multiple **seven-to-nine-figure compensation offers** reportedly made to dozens of researchers at other leading AI labs.
- Mark Zuckerberg is personally overseeing the new team (reportedly ~50 people) and has physically rearranged office seating to be closer to them.
- Scale AI reported **~$870M revenue in the prior year**, on track for **$2B** — but the host argues revenue is not the primary motivation.
- Key strategic rationale debated:
  - **Data moat**: Scale AI has 100,000+ global contractors for labeling images, video, and text — increasingly important for RLHF and regulatory compliance (e.g., EU AI Act).
  - **Leadership/talent acquisition**: The host's reading is that Zuckerberg is primarily buying Wang's leadership and energy to "right the ship" on AI strategy following concerns about DeepSeek and Llama 4 reception.
- Skeptical reaction (summarized from "Signal"): concerns that Meta is "brute-forcing with cash" without a coherent vision, drawing comparisons to the metaverse investment.
- Wang's personal payout estimated at ~$4.2 billion, raising questions about post-deal motivation.

### 6. xAI Fundraising and Musk's Political Feud

- xAI was seeking **$5 billion in debt funding**; Morgan Stanley pitched the deal to investors on a Thursday afternoon coinciding with Musk's public attacks on the Trump administration.
- Investors were reportedly tracking Musk's tweets on their phones during the pitch.
- Early signals: demand for both debt and equity reportedly **increased** despite the controversy.
- Musk subsequently walked back his posts: "I regret some of my posts about President Donald Trump last week. They went too far."
- Host's read: likely a temporary bump given Musk's historically unconstrained access to capital.

### 7. Lovable's Fundraising and Vibe Coding

- Lovable reportedly in talks to raise **$100M at a $1.5B valuation**.
- Company crossed **$60M ARR** at end of May with **50% week-over-week growth** and only ~28 employees.
- Host characterizes the valuation as potentially cheap given growth trajectory.
- Rationale for raising despite strong revenue: the vibe-coding / AI-assisted development space will be "hotly contested" and will require resources to compete.

---

## Key Concepts

- **O3 / O3 Pro**: OpenAI's high-capability reasoning model family; O3 Pro is positioned as a more powerful, context-hungry variant optimized for agentic and complex real-world tasks.
- **Inference efficiency gains**: Improvements in how a model is run at serving time (not the model architecture itself) that reduce the compute cost per token without changing model weights.
- **Agentic AI**: AI systems that take sequences of actions, use external tools, and make decisions over time rather than responding to single prompts in isolation.
- **Tool calls**: Mechanism by which LLMs invoke external functions, APIs, or data sources to act on the real world rather than relying solely on trained knowledge.
- **Orchestrator (in AI systems)**: A model or agent that coordinates other agents or tools, delegating subtasks rather than executing them directly.
- **Reinforcement Learning from Human Feedback (RLHF)**: Training technique using human preference labels to align model behavior; increasingly requires large-scale data labeling operations.
- **ARC-AGI**: A benchmark (Abstraction and Reasoning Corpus for Artificial General Intelligence) designed to test general reasoning abilities; intentionally resistant to saturation by current models.
- **Data labeling / data annotation**: The process of tagging raw data (images, text, video) with labels used to train and fine-tune AI models; Scale AI is the leading startup in this space.
- **Non-voting shares**: Equity stake that confers economic interest but no governance rights; used here to avoid triggering full acquisition antitrust review.
- **Vibe coding**: A colloquial term for AI-assisted software development, particularly using natural language to generate or modify code; Lovable is a leading platform in this category.
- **Cost-per-million-tokens**: Standard pricing unit for LLM API usage, separately quoted for input (prompt) and output (completion) tokens.
- **Superintelligence group**: Meta's reported internal team, led by Alexander Wang, tasked with pursuing AGI-level capabilities.

---

## Summary

The episode's central argument is that June 11, 2025 represented a particularly dense and consequential day in AI news, with two OpenAI announcements together illustrating the dual trajectory of the field: model capabilities are rising while costs are falling, and both are doing so faster than mainstream analysts predicted. The 80% drop in O3 pricing — confirmed as a genuine inference engineering achievement rather than model degradation or mere competitive capitulation — directly refutes prior skeptical arguments (notably from Goldman Sachs) that AI costs could not decline at meaningful rates. O3 Pro, meanwhile, represents a shift toward models whose value is unlocked not by isolated benchmark performance but by depth of real-world context and agentic integration; it is a more powerful thinker that also requires richer inputs to avoid counterproductive overthinking. Surrounding these core topics, Meta's reported $15B Scale AI deal is read less as a data play and more as a leadership acquisition — a bet on Alexander Wang's vision to revitalize Meta's AI ambitions under Zuckerberg's direct oversight — though skepticism about the strategy's coherence is noted. The overall message is optimistic: taken together, these trends point toward a near-term future of intelligence "too cheap to meter" paired with rapidly expanding practical capability.
