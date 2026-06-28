---
title: 'How to Use /Goal to Do More With AI '
description: >-
  This episode of The AI Daily Brief serves as a primer on the `/goal` primitive
  introduced in Codex (OpenAI) and subsequently adopted by Claude Code
  (Anthropic). The host explains what `/goal` is, how it differs from standard
  prompting, what makes ...
pubDate: 2026-05-31T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
## Overview

This episode of *The AI Daily Brief* serves as a primer on the `/goal` primitive introduced in Codex (OpenAI) and subsequently adopted by Claude Code (Anthropic). The host explains what `/goal` is, how it differs from standard prompting, what makes a good goal, and how knowledge workers — not just software engineers — might apply it. The speaker references an OpenAI developer guide and commentary from figures including Jason Liu, Thibaut (Codex team), Pavel Heron, Andrej Karpathy, and Swix (Sean Wang).

*Source video URL not provided.*

---

## Prerequisites

- Familiarity with AI chat interfaces and the standard prompt-response interaction model
- Basic understanding of AI coding agents (Codex, Claude Code)
- Awareness of concepts like context windows, threads/sessions, and AI agent loops
- Optional but helpful: prior exposure to the "Codex Maxing" tips (Jason Liu's blog post) and the "Ralph Wiggum loop" pattern for autonomous agent execution

---

## Main Points

### The Limits of the Turn-Based Paradigm
- The default interaction pattern with AI — prompt → wait → review → feedback → repeat — is fundamentally sequential and bottlenecked by human availability.
- Jason Liu's "Codex Maxing" work explored ways to reduce latency between human guidance and model output, including voice input, side-panel inspection, steering mid-run, and heartbeats.
- The overarching goal of these techniques is to move toward a more parallel, less turn-by-turn way of working with agents.

### What `/goal` Is and Why It Matters
- `/goal` was described by the Codex team's Thibaut as "the most consequential thing we have shipped in Codex."
- Pavel Heron summarized: "You state the outcome, the model loops, self-evaluates, and stops when it's done."
- Andrej Karpathy noted: "LLMs are exceptionally good at looping until they meet specific goals. Don't tell it what to do, give it success criteria, and watch it go."
- Claude Code adopted the same `/goal` command name, recognizing it as an emerging industry primitive rather than a proprietary feature.

### `/goal` vs. a Prompt: The "Finish Line Contract"
- A prompt asks for a result and waits for feedback; `/goal` is a **continuous loop** that works toward a durable objective, checks evidence against a defined finish line, and decides autonomously whether to continue, complete, or stop.
- `/goal` is described as a "finish line contract": what should be true, how success will be checked, and what must stay intact along the way.
- It is suited to sequential work where each step reveals what the next step should be — the model cannot know step N+1 until step N is complete.

### The Anatomy of a Good Goal
- A good goal requires three properties in the work itself:
  - **Durable objective**: the target remains constant across turns.
  - **Uncertain path to success**: the model may need to inspect, compare, rerun, or revise before knowing the next move.
  - **Clear finish-line evidence**: completion is proven by tests, artifacts, citations, or logs — not by "vibes."
- OpenAI's tip document identifies six elements of a strong goal prompt:
  1. **Outcome** — what should be true when work is done
  2. **Verification surface** — the artifact, test, or source that proves it
  3. **Constraints** — what must not regress
  4. **Boundaries** — which files, tools, and resources can be used
  5. **Iteration policy** — how the model decides what to try next after each attempt
  6. **Block-stop condition** — when the model should stop because no defensible path remains

### Scope: The Goldilocks Zone
- Too narrow (e.g., "fix this one line") gives the system insufficient flexibility to discover upstream or dependency-related issues.
- Too broad (e.g., "improve the whole system") makes it difficult to define concrete evidence of success.
- The right scope sits between these extremes and allows the model to self-judge completion reliably.
- Artifact definition matters: a weak artifact ("write docs for this feature") provides a poor evidence surface; a strong artifact specifies format, content, and a verifiable check (e.g., "produce a docs page explaining the lifecycle, command surface, and two examples; verify it builds locally and all commands match current CLI behavior").

### User Control and Lifecycle Management
- `/goal` increases autonomy but does not remove the user from the loop entirely.
- Lifecycle authority stays with the user: goals can be paused (`/goal pause`), resumed (`/goal resume`), or cleared (`/goal clear`).
- Goals operate within a single durable thread (the "monothread" pattern) — the objective and accumulated context travel within that thread, not in global project memory.

### The Evolution of the Loop as a Product Primitive
- Nicholas Bustamante (Microsoft) traced the progression:
  - **2024**: developers wrote their own `while` loops
  - **2025**: developers wrote prompt files and hooks (the "Ralph Wiggum" pattern)
  - **2026**: the loop is becoming a product primitive built into harnesses
- Swix (Sean Wang) mapped the autonomy ladder: `/skill` (preset prompts) → `/plan` (human-refined inputs) → `/goal` (AI-evaluated outputs).

### Applying `/goal` to Knowledge Work
- The key signal for a good knowledge-work goal is when the output is **an audit, not just an answer** — a ledger of what was checked, supported, contradicted, weak, or unknown.
- Success criteria in knowledge work come from two sources:
  - **External rubrics**: published standards, official docs, third-party datasets, RFP questions.
  - **User-provided rubrics**: hiring criteria, vendor scorecards, editorial standards, lead qualification rules, investment diligence priorities — cases where the user must articulate measurable criteria for the AI to test against.
- Ten suggested knowledge-work domains for `/goal` experimentation:
  1. Literature reviews
  2. Market landscapes
  3. Vendor evaluations
  4. Due diligence
  5. Claim audits
  6. Policy research
  7. Interview synthesis
  8. Timeline reconstruction
  9. Spreadsheet audits
  10. Strategy memos (structuring messy inputs)

### Three Worked Examples for Knowledge Work
- **Claim audit**: "Audit this memo claim by claim. Verify each claim against provided and reputable external sources. Produce a table labeling each claim as supported, contradicted, partially supported, or unverified, with citations and uncertainty notes." — Works because every conclusion traces back to evidence.
- **Market landscape**: "Create a market landscape for X, verified by cited company pages, filings, analyst reports, pricing pages, and product docs. End with a comparison table, confidence levels, and gaps where evidence was unavailable." — Elevated from a research question to a `/goal` task by requiring an auditable comparison artifact.
- **Literature review**: "Provide an evidence-backed literature review on X. Build a source matrix covering methods, sample sizes, findings, limitations, and conflicts. End with confirmed themes, disputed findings, and open questions." — Works by surfacing rather than flattening conflicting evidence.

### When `/goal` Is Not the Right Tool
- Not every task benefits from `/goal`; the traditional interaction pattern remains sufficient for many — possibly most — tasks.
- `/goal` is a poor fit when the objective is small and straightforward or when success criteria cannot be made clean and inspectable enough for the model to self-judge.
- The full spectrum of interaction autonomy (from standard prompting through Codex Maxing techniques through `/goal`) remains relevant; different methods suit different tasks.

---

## Key Concepts

- **`/goal`**: A harness-level primitive in Codex and Claude Code that instructs the model to loop autonomously toward a user-defined outcome, self-evaluate after each step, and stop only when the finish line is met or the task is blocked.
- **Finish line contract**: The conceptual frame for a goal — specifying what should be true, how success is verified, and what constraints must hold throughout execution.
- **Verification surface**: The inspectable artifact, test output, citation, or log that the model uses to determine whether the goal has been achieved.
- **Block-stop condition**: The explicit instruction telling the model when to halt because no further productive path exists, rather than looping indefinitely.
- **Monothread / durable thread pattern**: Using a single conversation thread as the persistent unit of context for a long-running task, relying on compaction rather than shared project memory.
- **Ralph Wiggum loop**: An early user-constructed workaround (pre-`/goal`) that kept an agent working on a problem without requiring continuous human steering.
- **Codex Maxing**: A set of interaction techniques (Jason Liu) for getting maximum output from Codex, including voice input, side-panel inspection, steering, and heartbeats.
- **Iteration policy**: The model's decision rule for what to attempt next after each step within a goal loop.
- **User-provided rubric**: A success criterion defined by the user rather than drawn from an external standard — especially common in knowledge-work `/goal` applications.
- **Autonomy ladder (Swix)**: The progression from `/skill` (preset prompts) to `/plan` (human-refined inputs) to `/goal` (AI-evaluated outputs), representing increasing levels of model autonomy.

---

## Summary

The `/goal` primitive in Codex and Claude Code represents a structural shift in how users can direct AI agents — away from the turn-by-turn prompt-response cycle and toward a continuous, self-evaluating loop anchored to a user-defined finish line. Rather than telling the AI what to do step by step, the user defines an outcome, a verification surface, constraints, and a stop condition, then allows the model to iterate autonomously until the evidence says the work is done. What makes a goal effective is the clarity and inspectability of its success criteria: the model must be able to self-judge completion against something concrete, whether that is a passing test, a citation table, or a user-supplied rubric. While the primitive originated in software engineering contexts, the speaker argues it extends naturally to knowledge work — particularly tasks that are audit-like in character, such as claim verification, market landscapes, literature reviews, and vendor evaluations — wherever the valuable output is a structured ledger of evidence rather than a single answer. At the same time, `/goal` is not universally appropriate; standard prompting and the richer interaction patterns of Codex Maxing remain valuable for tasks that are too small, too straightforward, or too difficult to define with clean finish-line evidence.
