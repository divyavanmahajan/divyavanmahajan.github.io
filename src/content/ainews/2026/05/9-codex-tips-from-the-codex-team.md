---
title: 9 Codex Tips From the Codex Team
description: >-
  This episode of the AI Daily Brief covers nine practical tips for maximising
  productivity with OpenAI's Codex, drawn from a post titled "Codex Maxing" by
  Jason Liu, a member of the Codex team, published on his GitHub. The host
  presents and context...
pubDate: 2026-05-19T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.youtube.com/watch?v=dB-Kbylgrdk'
draft: false
---
# Nine Codex Tips from the Codex Team

## Overview

This episode of the **AI Daily Brief** covers nine practical tips for maximising productivity with OpenAI's Codex, drawn from a post titled *"Codex Maxing"* by Jason Liu, a member of the Codex team, published on his GitHub. The host presents and contextualises Jason's tips as a practical 101 guide for users engaging seriously with Codex for the first time. The episode also covers headlines on Cursor's Composer 2.5 model release, Cloudflare's evaluation of Anthropic's Mythos security model, and the conclusion of the Elon Musk vs. OpenAI trial.

**Source video:** *(URL not provided)*

---

## Prerequisites

- Basic familiarity with AI coding assistants and chat-based LLM interfaces (e.g., ChatGPT, Claude)
- General understanding of AI "harnesses" — software layers that manage agent interactions (e.g., Claude Code, Codex, Cursor)
- Awareness of concepts like context windows, threads, and prompt engineering
- Familiarity with tools such as Obsidian (note-taking), GitHub, Slack, and MCP (Model Context Protocol) servers is helpful but not required

---

## Main Points

### Headline: Cursor's Composer 2.5 — Competing on Models

- Cursor, previously a "harness-first" company, set building its own coding model as its number one priority for the year, under competitive pressure from Claude Code on one side and unsustainable Anthropic model costs on the other.
- Composer 2.5 benchmarks are competitive with frontier models:
  - **Terminal Bench 2.0:** 69.3% (vs. Opus 4.7 at 69.4%)
  - **SWE-Bench Multilingual:** 79.8% (vs. Opus 4.7 at 80.5%, GPT-5.5 at 77.8%)
  - **Cursor in-house benchmark:** 63.2% (just ~1 point behind both Opus 4.7 and GPT-5.5)
- The key differentiator is cost and efficiency: priced at $0.50/million input tokens and $2.50/million output tokens — approximately half the cost of comparable models — and achieving under $1/task on SWE-Bench vs. ~$5 (GPT-5.5) or ~$11 (Opus 4.7).
- Composer 2.5 is built on Moonshot's Kimi 2.5 base model; performance gains came entirely from improved reinforcement learning techniques.
- Cursor is training a new model from scratch on XAI's Colossus 2 cluster (1 million H100 equivalents).

### Headline: Cloudflare's Evaluation of Anthropic's Mythos

- Cloudflare described Mythos Preview as "a real step forward" and "a different kind of tool doing a different kind of work."
- Two qualitative differences from prior models:
  1. **Exploit chaining:** Mythos can synthesize multiple attack primitives into a functional exploit chain, rather than simply detecting individual bugs.
  2. **Proof generation:** Mythos generates working exploits rather than lists of potential vulnerabilities, dramatically reducing false positives and providing precise patching guidance.
- Mythos can test and refine exploits iteratively if they fail initially — behaviour more akin to a senior security researcher than an automated scanner.
- Critics who noted other models could find the same bugs missed the key distinction: finding bugs vs. generating full functional exploit code are categorically different outputs.

### Headline: Elon Musk vs. OpenAI Trial Concludes

- After three weeks of testimony, the jury returned a unanimous verdict in just two hours — finding Musk's claims barred by the **statute of limitations**.
- The jury determined that Musk was aware of OpenAI's for-profit plans as early as 2018, starting the three-year clock for filing suit; his 2023 filing was too late.
- Key facts surfaced during the trial: Musk's own 2017 proposal to fold OpenAI into Tesla, and the internal term sheet describing the for-profit structure sent to him in 2018.
- The trial aired significant behind-the-scenes history (the "blip" — Sam Altman's ouster and return) but resolved no substantive questions about OpenAI's governance or mission.

---

### Main Episode: Nine Codex Tips from the Codex Team

#### Tip 1 — Use Long-Running Durable Threads (Monothread Pattern)

- Rather than opening new conversations repeatedly, maintain a single persistent thread per key work stream, relying on Codex's **context compaction** to keep the thread functional over time.
- Compaction collapses long conversation history into its essential elements, preserving context without exhausting the context window.
- Advantage over project-file-based memory: no need to manually retrieve context; the thread holds the living, up-to-date state of that work stream.
- Recommended practice: create separate monothreads for each distinct, ongoing work stream (not every task, but recurring or complex ones).

#### Tip 2 — Use Voice Input ("The Art of the Ramble")

- Codex's internal speech-to-text is described as gold-standard quality; external tools like WhisperFlow are an alternative for other platforms.
- Voice enables richer, messier input: articulating uncertainty, trade-offs, partial knowledge, and context that would be edited out of typed prompts.
- Key insight: *"A lot of plans get better when the model has access to the messy version of what I think, not just the polished one."*
- Voice is particularly effective when combined with the Steer feature (Tip 3), allowing real-time spoken feedback as an agent works.

#### Tip 3 — Use the Steer Feature to Work in Parallel

- **Steer** allows users to add or update the prompt mid-task without stopping the agent's current workflow.
- Shifts the interaction model from sequential (prompt → wait → review → repeat) to **parallel**: user and agent working simultaneously.
- Reduces the need for a perfect upfront prompt; start with broad goals and constraints, then guide incrementally as output emerges.
- Voice is the ideal input medium for steering — observations can be spoken aloud immediately without composing a formal message.

#### Tip 4 — Build a Structured External Memory Vault

- Codex's native memory (Settings → Personalization → Memories) is useful for stable preferences and recurring conventions, but is **not** a substitute for explicit, file-based structured memory.
- Jason uses **Obsidian** (a local markdown file system) as a vault that threads write into automatically.
- The vault stores: people, decisions, open loops, daily notes, project state, rules, design/writing taste, relevant sources, anti-patterns, and links to key artifacts.
- A top-level `agents.md` file instructs the agent: *"As you learn more about people, make progress on projects, or close an open loop, update the relevant pages in the vault."*
- The vault is maintained as a **GitHub repo** for cloud accessibility.
- Reviewing what the agent chose to store is itself a valuable audit step — it surfaces what the agent judged as significant.
- Core principle: *"Work should leave behind structured memory, not just a longer chat."*

#### Tip 5 — Understand and Use the Right Tools

- Codex can act as an evidence gatherer and executor when given access to the appropriate tools:
  - **Computer use:** for files, logs, CSVs, slides, PDFs, and anything requiring visual inspection of local artifacts
  - **Browser use:** for live documents, external sources, and web-based verification
  - **Connectors (MCP servers):** for integration with Slack, Gmail, GitHub, Notion, Vercel, and other external systems
- Matching the right tool to the right environment is a skill that compounds the value of the agent over time.
- Initial setup friction is worth bearing if Codex is being used as a full work system rather than a one-off query interface.

#### Tip 6 — Use Remote Control for Mobile Steering

- Codex is available as a full feature in the ChatGPT mobile app, enabling interaction away from a desktop.
- The primary use case is not doing all work on mobile, but **capturing intent while ideas are fresh** and **steering long-running tasks** without reopening the full project.
- As tasks scale from minutes to hours, remote steering becomes a significant productivity multiplier — allows redirection without being physically at a workstation.

#### Tip 7 — Set Up Heartbeats for Autonomous Loops

- **Heartbeats** are recurring or trigger-based check-ins that allow a thread to wake up and act autonomously.
- Examples:
  - Chief-of-staff thread: checks Slack and Gmail every 30 minutes for unanswered messages and helps prioritise responses.
  - Animation project: checks a Slack thread every 15 minutes for feedback, re-renders a new version when comments arrive, and posts the revised render back tagging the reviewer — crossing tool boundaries (Slack → Remotion render → computer use for file upload).
- Key insight: heartbeats, connectors, and computer use converge into a **feedback loop that runs without the user present**.

#### Tip 8 — Explore Goals for Verifiable Objectives

- The `/goal` feature (available in both Codex and Claude Code) is designed for tasks with **specific, knowable, and verifiable success criteria**.
- Goals keep the agent pushing toward a defined objective in a way that standard prompts may abandon prematurely.
- The host defers detailed treatment to a dedicated future episode, noting that goals represent a sufficiently distinct behavior shift to warrant separate coverage.

#### Tip 9 — Use the Side Panel as a Parallel Workspace

- The side panel is described as the space where *"Codex stops being only a chat app and starts becoming the place where work happens."*
- Three functions: inspecting artifacts, operating web services, and reviewing changes.
- Critical principle: artifacts can be **inspected and annotated without breaking the agent's ongoing loop** — preserving parallelism between human and agent work.
- The side panel is the interface manifestation of the entire tip set's underlying theme.

---

## Key Concepts

- **Codex:** OpenAI's AI coding and productivity harness, offering persistent threads, tool integrations, voice input, and agent automation features.
- **Context Compaction:** A backend process in Codex that compresses long conversation history into essential elements, allowing threads to remain functional over extended periods.
- **Monothread Pattern:** The practice of maintaining one persistent, long-running thread per work stream rather than opening new conversations for each task.
- **Steer:** A Codex feature that allows the user to modify or extend a prompt mid-execution without stopping the agent's current task.
- **Heartbeat:** A recurring or trigger-based scheduled check-in that causes a Codex thread to wake up and perform autonomous actions.
- **Goals (`/goal`):** A feature in Codex (and Claude Code) that anchors an agent to a specific, verifiable success criterion and sustains effort toward it across a longer task.
- **Side Panel:** The Codex interface component used for real-time artifact inspection, web service operation, and change review — enabling parallel human-agent work.
- **Memory Vault:** A structured external file system (e.g., in Obsidian, stored as a GitHub repo) that an agent writes to as it works, creating durable, inspectable knowledge outside the thread.
- **Harness-first Labs:** Companies (e.g., Cursor, Cognition) whose primary value is the software layer managing agent interactions rather than the underlying model itself.
- **Composer 2.5:** Cursor's in-house coding model, built on Moonshot's Kimi 2.5 base, optimised via reinforcement learning for competitive performance at significantly lower cost.
- **Mythos:** Anthropic's security-focused AI model, capable of generating functional exploit chains and iteratively refining them — distinct from general-purpose frontier models.
- **MCP (Model Context Protocol) Server:** A connector standard that allows AI agents to interface with external services such as Slack, GitHub, or Notion.
- **Obsidian:** A local, file-based markdown note-taking application used here as the substrate for Jason Liu's structured memory vault.

---

## Summary

The central message of this episode is that Codex is best understood not as a faster version of a chat interface but as the foundation of an entirely new work system — one in which the human and the agent operate in parallel rather than in sequential turns. Drawing on Jason Liu's *Codex Maxing* post, the host presents nine interdependent practices — durable monothreads, voice input, mid-task steering, external structured memory, appropriate tool use, mobile remote control, heartbeat-driven autonomous loops, goal-anchored tasks, and side-panel parallel inspection — that together shift the interaction paradigm from prompt-and-wait to continuous, collaborative, and increasingly autonomous work. The broader context of the episode reinforces why this matters now: as model labs move into harness territory and harness labs move into model development (illustrated by Cursor's Composer 2.5 release), the ability to extract maximum productivity from whichever harness one chooses becomes a meaningful competitive advantage for both individuals and enterprises.
