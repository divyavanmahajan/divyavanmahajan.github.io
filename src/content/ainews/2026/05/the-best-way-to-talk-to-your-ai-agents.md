---
title: The Best Way to Talk to Your AI Agents
description: >-
  This episode of The AI Daily Brief (hosted by NLW) explores a debate ignited
  by a viral essay from Tariq Shahipar, an engineer on the Claude Code team at
  Anthropic. The essay, titled "The Unreasonable Effectiveness of HTML," argues
  that HTML is a ...
pubDate: 2026-05-11T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.youtube.com/watch?v=NNxGQw1uQHc'
draft: false
---
# The Best Way to Talk to Your AI Agents

## Overview

This episode of **The AI Daily Brief** (hosted by NLW) explores a debate ignited by a viral essay from **Tariq Shahipar**, an engineer on the Claude Code team at Anthropic. The essay, titled *"The Unreasonable Effectiveness of HTML,"* argues that HTML is a superior file format to Markdown for communicating with AI agents. NLW uses this as a springboard to articulate a broader thesis: that the real issue underlying the Markdown-vs-HTML debate is a fundamental shift in the nature of knowledge work itself — from *producing* outputs to *staging conditions* for agents to produce outputs.

**Source:** The AI Daily Brief (episode published ~May 11, 2026). No URL available.

---

## Prerequisites

- Familiarity with **Markdown** (`.md` files) as a lightweight text formatting syntax
- Basic understanding of **HTML** as a web markup language
- Working knowledge of **AI coding agents** such as Claude Code, OpenAI Codex, or Cursor
- General awareness of **AI agent workflows**: context handoffs, session management, prompt engineering
- Some exposure to concepts like **context windows**, **token costs**, and **multi-session AI workflows**

---

## Main Points

### 1. Headlines: Anthropic's Massive Pre-IPO Fundraising Round
- The *Financial Times* reports Anthropic is considering a final private funding round before an IPO expected in fall 2026.
- The round is expected to raise up to **$50 billion** at a **$900 billion pre-money valuation**, surpassing OpenAI's last valuation of $852 billion (March 2026).
- A pre-IPO blockchain instrument on Jupiter implied a **$1.2 trillion valuation**, suggesting strong speculative demand.
- Investors cited Anthropic's deal with SpaceX (resolving compute supply concerns) and parabolic revenue growth as confidence drivers.
- No terms have been finalized; the round could complicate the AI IPO landscape later in the year.

### 2. Headlines: Cerebras IPO Demand and TSMC Slowdown
- **Cerebras** is considering raising its IPO share price from $115–$125 to **$150–$160**, boosting implied valuation from ~$26B to ~$$34B, amid demand reported at **20x available shares**.
- **TSMC** reported its slowest sales growth in six months (17.5% annualized for April vs. ~35% forecast), attributed to: (a) weakness in non-AI consumer electronics/smartphone chips, and (b) physical capacity constraints — TSMC's advanced fabs are effectively **sold out**.
- **Apple** signed a preliminary chipmaking deal with **Intel**, diversifying away from TSMC for the first time, partly under White House pressure following government investment in Intel.
- AMD and Intel surged ~25% over the week; NVIDIA gained only ~8% comparatively, prompting talk of a potential "changing of the guard" in AI semiconductors.

### 3. Headlines: Distributed Home Data Centers and OpenAI's Codex Chrome Plugin
- Housing developers including **Pulte Group**, in partnership with NVIDIA and startup Span, are testing **micro data centers installed on home exteriors** as distributed compute nodes — suited for batch and non-time-sensitive workloads.
- **OpenAI** launched a **Chrome plugin for Codex** that gives the agent direct, live browser access (rather than connector-based scraping), enabling multi-tab navigation, form-filling, and browser-native artifact creation alongside a user's live session.

### 4. Tariq Shahipar's Case for HTML Over Markdown
- Tariq's essay, *"The Unreasonable Effectiveness of HTML,"* accumulated approximately **10 million views**, signaling widespread resonance.
- His core argument: Markdown was designed for human editing, but as agents do more of the editing, Markdown's primary advantage disappears.
- **Key benefits of HTML he identifies:**
  - **Information density**: Can represent tables, CSS design data, SVG illustrations — nearly any information Claude can read
  - **Visual clarity**: Easier to navigate with tabs, links, and layout; more shareable than `.md` files
  - **Ease of sharing**: Renders natively in browsers; dramatically increases the chance someone actually reads a spec or report
  - **Two-way interaction**: Supports sliders, knobs, interactive elements; allows changes to be copied back into prompts
  - **Enjoyment**: More engaging and immersive for the creator

- **Primary use cases cited:**
  - Specs, planning documents, and brainstorming explorations
  - Code review with rendered diffs, flowcharts, and annotations
  - Design mockups and prototypes
  - Reports, research, and custom editing interfaces

### 5. Community Response: The Token Cost Objection and the "Both/And" Resolution
- A significant strand of pushback centered on **token cost**: HTML is more verbose than Markdown, increasing API costs, with some cynics framing the essay as Anthropic promoting more token consumption.
- Practical users shared positive experiences: one developer switched from Markdown to HTML mid-project for a Codex explainer, finding the flow diagram alone justified the switch.
- The more nuanced community consensus, articulated by commentator "SmartApe," reframes the question around **three variables**:
  - **Audience**: Claude reading it → Markdown; humans reading it → HTML
  - **Lifecycle**: Edited many times → Markdown; written once → HTML
  - **Horizon**: Indexed/lasting → Markdown; ephemeral → HTML
- When all three votes align, the format is clear; when they split, a hybrid pattern is appropriate.

### 6. NLW's Broader Thesis: The Shift from Production to Staging
- NLW argues the Markdown-vs-HTML debate is a surface manifestation of a deeper structural change: **the atomic unit of knowledge work has shifted** from finishing work to *staging the conditions under which agents finish work*.
- This "staging" or "scaffolding" or "priming" work is now where knowledge workers spend a significant portion of their time — especially in **session handoffs** between tools (e.g., Claude web app → Claude Code, or ChatGPT → Codex).
- A recurring friction in Markdown handoff documents: AI-generated summaries tend to present all decisions as **fully resolved and canonical**, when in reality most mid-process documents reflect a state of **mixed doneness**:
  - Some elements are **locked** (non-negotiable)
  - Some are **open** (agent can explore freely)
  - Some are **semi-decided** (provisional, subject to pressure-testing)
- Markdown requires embedding meta-commentary *about* the document *inside* the document to communicate these states, which is clunky and error-prone.

### 7. HTML as a Native Encoding of Mixed Doneness
- HTML's native features — **tabs, progressive disclosure, side-by-side cards, color-coded status indicators, expandable sections, visual hierarchy, interactive elements** — can communicate the *state* of a decision (firm vs. exploratory vs. open) through the format itself, without textual meta-commentary.
- Example scenario (brainstorming brief for a new onboarding experience):
  - **Locked**: Goal (reduce time-to-first-value from 14 → 7 days); platform (web-first, mobile in v2, iOS native out of scope)
  - **Open**: Visual system (four distinct directions invited)
  - **Semi-decided**: UX flow and tone (leaning toward a direction, but still provisional)
- HTML can visually encode these different states natively; Markdown cannot without heavy annotation.

### 8. The Broader Implication: Living in Liminal Space
- Pre-AI, knowledge work was a direct path from blank page to finished output; in-between states were transitory.
- In the agentic era, workers **live in a liminal in-between space** — establishing and maintaining conditions for the agent, then re-entering that space after each agent output to calibrate the next step.
- The core new skill is **calibrating how much structure to impose**: over-specification kills the agent's generative range; under-specification produces flailing or generic output.
- This connects to broader conversations about **context engineering** — ensuring the agent has what it needs, including accurate representations of *where the work currently stands*.

---

## Key Concepts

- **Markdown (`.md`)**: A lightweight plain-text formatting syntax widely used for documentation and AI context files; human-editable but limited in visual expressiveness.
- **HTML**: HyperText Markup Language; a richer web-native format supporting layout, interactivity, color, diagrams, and visual hierarchy — the alternative format Tariq proposes.
- **Context handoff**: The practice of summarizing a conversation or work session into a file (typically Markdown) to transfer context between AI tools or sessions.
- **Agent-operator dynamic**: A working model in which the human (operator) sets up conditions, context, and constraints, while the AI agent executes the production work.
- **Staging/scaffolding/priming work**: NLW's term for the preparatory work a human does to give an agent what it needs before the agent can execute effectively.
- **Mixed doneness**: NLW's concept describing the typical state of a mid-process project document, in which some elements are finalized, some are exploratory, and some are provisional — all coexisting simultaneously.
- **Liminal space**: NLW's term (borrowed from academic usage) for the in-between working state that defines much of knowledge work in the agentic era.
- **Token cost**: The computational (and financial) cost of processing text in an LLM; HTML's verbosity relative to Markdown is a real tradeoff.
- **Context engineering**: The practice of deliberately constructing the information environment an agent receives to maximize the quality of its output.
- **Codex /goal feature**: OpenAI Codex's version of a REPL loop that runs autonomously against preset success criteria, allowing extended unsupervised agent execution.

---

## Summary

NLW uses Tariq Shahipar's viral essay arguing for HTML over Markdown as an entry point into a more fundamental argument about the changing nature of knowledge work. While the practical case for HTML — richer visuals, easier sharing, native interactivity, better human readability — has merit and real community support, NLW contends that the deeper issue is that workers in the agentic era no longer primarily *produce* finished outputs; instead, they *stage conditions* for agents to do the producing. This means a growing portion of professional time is spent in a "liminal" in-between space, managing handoffs, calibrating how much structure to impose, and communicating the *state* of partially-decided work. Markdown, designed for human editing, struggles to represent this "mixed doneness" without cumbersome meta-commentary, whereas HTML's native visual and interactive features can encode which parts of a document are locked, exploratory, or provisional without additional textual annotation. Rather than a definitive verdict for one format, NLW concludes that the community is only at the beginning of figuring out the right tools and conventions for this new mode of work — and that the Markdown-vs-HTML debate is an early, revealing signal of that larger transition.
