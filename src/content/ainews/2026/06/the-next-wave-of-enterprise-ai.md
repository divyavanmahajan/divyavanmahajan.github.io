---
title: The Next Wave of Enterprise AI
description: >-
  This episode of the AI Daily Brief (dated June 3, 2026) covers three
  interconnected topics: a convoluted U.S. AI executive order focused on
  cybersecurity model testing, Anthropic's continued rollout of its Mythos
  model, and — as the main segment —...
pubDate: 2026-06-03T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# The Next Wave of Enterprise AI

## Overview
This episode of the **AI Daily Brief** (dated June 3, 2026) covers three interconnected topics: a convoluted U.S. AI executive order focused on cybersecurity model testing, Anthropic's continued rollout of its Mythos model, and — as the main segment — the emerging shape of enterprise AI adoption as illustrated by simultaneous announcements from OpenAI (Codex updates) and Microsoft (Build conference, MAI model family). The host argues that the second half of 2026 will be defined by enterprises wrestling cost management and workflow integration into workable strategies, building on the capabilities unlocked in the first half of the year. The speaker is the host of the AI Daily Brief podcast/video channel; no personal name is given.

**Source video:** *(URL not provided)*

---

## Prerequisites
- Basic familiarity with large language models (LLMs) and AI assistants (ChatGPT, Claude, Codex)
- General understanding of enterprise software and knowledge work (documents, spreadsheets, dashboards)
- Awareness of the competitive landscape among major AI labs: OpenAI, Anthropic, Microsoft/MAI
- Understanding of token-based pricing and compute cost structures in AI APIs
- Familiarity with agentic AI concepts (autonomous, multi-step task execution)
- General awareness of U.S. technology policy and executive orders

---

## Main Points

### 1. The Trump AI Executive Order: A Confusing Policy Process

- A draft executive order circulated ~two weeks prior would have required AI labs to submit advanced models to the government **90 days** before public release; a signing ceremony was scheduled but cancelled hours beforehand after former AI czar David Sachs called the president directly.
- The order ultimately signed is nearly identical to the draft, except the pre-release sharing window was reduced from **90 days to 30 days**; safety testing remains **voluntary**.
- The NSA has primary responsibility for model testing; a cybersecurity clearinghouse will be run by the Treasury in consultation with NSA, DHS, and CISA; civilian and military agencies are directed to harden systems against AI-driven cybersecurity risk.
- The signed order explicitly disclaims creation of a "mandatory government licensing, preclearance, or permitting requirement," a direct response to industry fears of a de facto FDA-style regime.
- The policy is essentially a **formalization of existing voluntary agreements** already in place between major AI labs and the government (per Center for a New American Security analyst David Remler).
- Political reactions span the full spectrum: the New York Times called it a shift from a hands-off approach; the White House OSTP disputed that; Dean Ball (former White House advisor) called it a "fairly major win for the safety contingent"; Steve Bannon called it a first step toward mandatory regulation; Bernie Sanders said it does almost nothing.

### 2. Anthropic Mythos Expansion and Deployment Challenges

- Anthropic expanded Project Glasswing (controlled Mythos rollout) to **150 new partners** across **15 countries**, adding sectors including energy, water, communications, healthcare, and computer hardware.
- The common thread among partners: a successful attack on their codebase could affect **more than 100 million people**.
- A general public release of Mythos-level capabilities was previously suggested as coming "in the next couple of weeks," but the latest Glasswing update walked this back, citing the need for "highly robust safeguards" for cybersecurity capabilities that "we, and to our knowledge, all other AI developers have yet to develop."
- Mythos is described as **eye-wateringly expensive** by testers; firms are burning through millions of dollars in tokens quickly, and Anthropic is currently **subsidizing usage** so firms aren't paying full cost.
- Despite costs, firms are reportedly aligning budgets and strategies around Mythos for when it becomes broadly available.

### 3. The Token Shortage Era and the Shift to Agentic Workloads

- The host frames the current moment as a transition from a **"subsidy era"** (cheap, abundant tokens) to a **"scarcity era"** (token shortages, rising costs) driven by the shift from assisted to agentic AI workloads.
- Agentic workloads consume dramatically more tokens than simple chat interactions, straining available compute and physical infrastructure.
- Enterprise adoption challenges are therefore **two-dimensional**: (1) cost management and (2) tool and use-case fluency.
- SK Hynix announced plans to **double manufacturing capacity for memory chips** (high bandwidth memory) by end of decade; the cost of HBM for AI servers has more than doubled in 2026 alone.
- SK Hynix Chairman indicated the shortage could last until **2030**, framing the investment as a response to structurally permanent AI-driven demand rather than a cyclical boom.

### 4. OpenAI Codex: Expanding Beyond Developers into Knowledge Work

- OpenAI released a report titled *The Next Era of Knowledge Work* alongside a Codex update event; Codex has reached **5 million weekly active users**.
- The biggest growth segment is **non-technical knowledge workers**, adopting Codex at **3× the pace of developers**.
- OpenAI identifies three core "frictions" of knowledge work: (1) finding relevant inputs across opaque systems, (2) information coordination costs, (3) approvals and verifications.
- The report argues prior software (email, Docs) lowered the cost of producing intermediate artifacts but **multiplied** the volume of those artifacts, worsening attention scarcity rather than reducing it.
- **72%** of knowledge workers using Codex produce an artifact (PDF, spreadsheet, etc.) weekly; ~**50%** now run multiple Codex tasks simultaneously (up from <33% in mid-April), enabling a single worker to "operate at the scale of a small team."

#### Three New Codex Features

- **Annotations:** Allows users to highlight a specific section of a document or artifact in the preview pane and pass only that selection as context to the model, replacing the need for verbal description.
- **Role-specific plugins:** Six new bundles (sales, data analytics, creative production, product design, public equity investing, investment banking), each packaging ~10 apps and ~20 skills. Framed as "productizing best practices" by presenting the app integrations and skills most commonly used by top performers in each role.
- **Codex Sites:** Converts any Codex-built artifact into a shareable website or web app (e.g., a revenue forecast planner, event operations dashboard, product launch hub). The host argues this makes building disposable web apps a new **core knowledge work primitive**, comparable to building slide decks or spreadsheets.

### 5. Microsoft Build: MAI Models and Frontier Tuning for Cost Optimization

- Microsoft announced seven new in-house AI models: **Image 2.5, Image 2.5 Flash, Transcribe 1.5, Thinking 1, Voice 2, Voice 2 Flash, Code 1 Flash** — each optimized for specific use cases.
- The flagship **MAI Thinking 1** is a 1-trillion-parameter mixture-of-experts model, positioned in capability roughly between Sonnet 4.6 and Opus 4.6; notably trained with **zero synthetic data or distillation** from prior models.
- Agentic coding benchmarks (Terminal Bench 2.0, SuiBench Pro) showed Thinking 1 scoring meaningfully below competitors' prior-generation models, indicating it is not yet competitive for autonomous coding tasks.
- The strategic play is **Microsoft Frontier Tuning**: fine-tuning MAI models for specific enterprise clients' tasks. Example cited: tuned for McKinsey's tasks, MAI achieved the highest win rate against GPT-5.5 on quality **while being 10× lower in cost**.
- CEO Satya Nadella framed this as companies moving from "consuming a frontier model" to "fully participating at the frontier," leveraging Microsoft's existing dominant enterprise distribution.

### 6. Cost Management as the Defining Enterprise Challenge of H2 2026

- Uber is cited as an example of the cost pressure reality: the company imposed a **$1,500/month cap on token spending per employee**.
- The host's thesis: the second half of 2026 is about converting the capability unlocks of H1 2026 into **workable, cost-effective enterprise strategies**.
- OpenAI addresses this through workflow interface improvements (Codex); Microsoft addresses it through custom model tuning and cost optimization (Frontier Tuning).

---

## Key Concepts

- **Token scarcity / scarcity era:** The period in which AI token demand from agentic workloads outpaces available compute supply, driving up costs and forcing business model realignment.
- **Agentic workloads:** AI tasks involving autonomous, multi-step execution of complex workflows, as opposed to single-turn assisted queries.
- **Project Glasswing:** Anthropic's controlled, sector-by-sector rollout program for its most capable (Mythos) model, targeting critical infrastructure partners before general release.
- **Mythos:** Anthropic's most advanced AI model, notable for its cybersecurity capabilities; currently in restricted access due to the risk profile of those capabilities.
- **Codex (OpenAI):** OpenAI's AI-powered knowledge work application, originally developer-focused, now expanding to general knowledge workers; a primary enterprise interface product.
- **Codex Sites:** A Codex feature enabling users to publish any artifact as an interactive, shareable website or web app without traditional software development.
- **Role-specific plugins:** Pre-bundled sets of app integrations and skills within Codex tailored to specific professional functions (sales, finance, design, etc.).
- **Annotations (Codex):** A context-selection feature allowing users to highlight specific portions of a document in the preview pane to scope model reasoning precisely.
- **MAI Thinking 1:** Microsoft's flagship in-house LLM (1T parameter, mixture-of-experts architecture), trained without synthetic data, optimized for enterprise customization via Frontier Tuning.
- **Microsoft Frontier Tuning:** Microsoft's capability to fine-tune MAI models on a specific enterprise client's tasks, targeting high quality at significantly lower cost than generic frontier models.
- **Mixture of Experts (MoE):** A model architecture that activates only a subset of parameters per inference call, enabling large model capacity at lower computational cost.
- **Strange abundance:** OpenAI's term for the paradox in which modern tools allow faster production of artifacts while simultaneously increasing the burden of managing, finding, and coordinating those artifacts.
- **Disposable software / web apps:** Lightweight, purpose-built websites or apps created for a specific, time-limited use case, treated as a knowledge work artifact rather than engineered software.
- **High Bandwidth Memory (HBM):** Specialized memory chips used in AI server hardware; currently in acute shortage due to surging AI inference demand.

---

## Summary

The host argues that enterprise AI is entering a new phase defined not by raw capability breakthroughs but by the practical challenges of integration, workflow redesign, and cost management. The episode uses two parallel lenses to make this case: OpenAI's Codex updates (annotations, role-specific plugins, and Sites) illustrate the interface dimension — building tools that make AI-augmented knowledge work accessible and natural for non-technical workers at scale — while Microsoft's MAI model family and Frontier Tuning capability illustrate the cost dimension, positioning custom-tuned enterprise models as a path to frontier-level performance at a fraction of the price. These developments occur against a backdrop of genuine structural strain — token shortages, memory chip scarcity, and enterprise cost caps — as the shift from assisted to agentic workloads drives token consumption far beyond what the subsidy era of AI had conditioned organizations to expect. The executive order saga and the slow, expensive rollout of Anthropic's Mythos model both underscore the same tension: the most powerful AI capabilities are arriving faster than the policy, economic, and organizational infrastructure needed to deploy them responsibly and sustainably.
