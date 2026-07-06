---
title: How to Use Claude's Massive New Upgrades
description: >-
  This episode of The AI Daily Brief (published March 25, 2026) provides a
  comprehensive retrospective of the major new features released for Claude Code
  and Claude Cowork over the preceding month. The host argues that these updates
  collectively rep...
pubDate: 2026-03-25T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.youtube.com/watch?v=wZB5fpm8oUA'
draft: false
---
# How to Use Claude's Massive New Upgrades

## Overview

This episode of *The AI Daily Brief* (published March 25, 2026) provides a comprehensive retrospective of the major new features released for Claude Code and Claude Cowork over the preceding month. The host argues that these updates collectively represent not merely incremental improvements but a fundamental shift in how users interact with AI — moving toward an always-on, persistent, mobile-accessible, orchestration-based model of work. No external speaker affiliation is given beyond the show itself.

**Source video:** *(URL not provided)*

---

## Prerequisites

- Familiarity with Claude Code (Anthropic's AI-powered coding terminal environment)
- Familiarity with Claude Cowork (Anthropic's AI-powered desktop productivity agent)
- Basic understanding of agentic AI concepts (agents, orchestration, MCP servers)
- Awareness of OpenClaw (a third-party Claude harness that popularized mobile and persistent AI agent interaction patterns)
- General knowledge of terminal/CLI usage and concepts like SSH, local vs. cloud execution

---

## Main Points

### 1. Context: The "Clawdification" Trend

- OpenClaw (founded by Peter Steinberger, who was subsequently hired by OpenAI) popularized a set of interaction patterns: mobile access, persistent sessions, agent delegation, and event-driven automation.
- Anthropic's response was a rapid series of features that brought these capabilities natively into Claude Code and Claude Cowork — a trend the host calls the "Clawdification" of Claude.
- This wave of updates builds on a prior capability leap from the Opus/Sonnet model generation and represents a third distinct phase: democratizing agentic interaction patterns.

---

### 2. Remote Control (Claude Code)

- Allows a Claude Code terminal session started on a desktop to be accessed and continued from a mobile device.
- The session runs **locally** on the user's machine; the phone is merely a window into that session — no cloud intermediary.
- Full local environment is preserved: file system, MCP servers, tools, and project configurations remain accessible.
- **Three startup modes:**
  - `cloud remote control` — dedicated server mode; phone-only control
  - Interactive mode — switch back and forth between terminal and mobile
  - `/remote-control` or `/rc` from inside an existing session — generates URL or QR code for mobile access
- Early adopters described it as shifting the mental model from "a tool you operate" to "something you delegate to and check in with."

---

### 3. Dispatch (Claude Cowork)

- A **single persistent conversation thread** with Claude that runs on the user's desktop and is accessible from any device.
- Unlike ephemeral sessions, Dispatch maintains context across tasks — the thread does not reset between interactions.
- When a task is assigned, Dispatch routes it to the appropriate session type: development tasks go to Claude Code, knowledge work stays in Cowork.
- Users receive push notifications when tasks complete or when Claude requires approval.
- Claude returns **outputs** (spreadsheets, memos, pull requests) rather than showing intermediate steps.
- Described by power users as an "orchestrator" — the phone acts as a command chair while the desktop performs the heavy lifting across multiple simultaneous sessions.
- **Example workflow (Pavel Heron):** ~25 minutes of mobile direction during daily life activities resulted in 3+ hours of parallel Claude execution across competitor analysis, Notion pages, infographic iterations, and gap analyses.

---

### 4. Claude Code Channels

- Allows Claude Code sessions to receive **pushed events** from external services via MCP servers, initially supporting Telegram and Discord.
- Unlike Remote Control or Dispatch, Channels are designed for developers who want a more hackable, event-driven interface.
- Events can originate not just from the user but from external systems: CI failures, Sentry alerts, webhook payloads, monitoring notifications.
- Claude can react to these events even when the user is not at the terminal.
- Positioned as the most technically advanced of the remote interaction options.

---

### 5. Scheduled Tasks (Claude Cowork and Claude Code)

- Three tiers of scheduling were released in sequence:
  1. **Cowork scheduled tasks** — e.g., morning briefings, weekly spreadsheet updates
  2. **Local scheduled tasks in Claude Code Desktop** — run while the computer is awake; e.g., checking error logs every few hours and opening PRs for actionable errors
  3. **Cloud-based recurring tasks** — run on Anthropic infrastructure independent of local machine uptime; useful for sweeping open PRs, building features from approved issues, analyzing CI failures overnight, syncing docs from merged PRs

---

### 6. Computer Use

- The most widely discussed announcement: Claude can now **control the user's computer** — mouse, keyboard, and screen — to operate any application.
- Claude defaults to using existing connectors (Slack, Google Calendar, etc.) first; computer use is engaged when no connector exists.
- Not sandboxed or simulated — operates directly on the real desktop environment.
- Especially powerful in combination with Dispatch: Claude can be given a persistent directive (e.g., "check email every morning") and carry it out autonomously on a schedule.
- Example use cases cited: batch photo processing in Photoshop, IDE edits, running tests and opening pull requests, managing legacy corporate software with no API access.
- Raised significant discussion around security concerns: prompt injection risk, identity/permissions management, volume-of-activity signals becoming unreliable, and headless compatibility of existing software.

---

### 7. Supporting Quality-of-Life Improvements

- **Projects in Cowork** — addressed a major usability gap; tasks can now be organized within persistent project contexts.
- **Code Review** — Claude dispatches a team of agents to identify bugs in a codebase.
- **1 million token context window** — now generally available for Claude Opus and Claude Sonnet; enables complex, large-codebase analysis without hitting context limits.
- **Interactive charts and diagrams** — available in the main Claude app.
- **Claude for Excel and PowerPoint upgrades** — cross-file context sharing; Skills (reusable saved workflows) now available in both add-ins.
- **Memory and Connectors on free plan** — expanded access for non-paying users.
- **Plugin marketplace** — available for enterprise customers.

---

## Key Concepts

- **Remote Control:** A Claude Code feature that exposes a locally running terminal session to mobile devices via URL or QR code, with no cloud intermediary.
- **Dispatch:** A persistent, context-retaining Claude Cowork thread that orchestrates multiple task sessions from a single mobile interface.
- **Channels:** MCP server integrations (Telegram, Discord) that push external events — monitoring alerts, CI failures, user messages — into a running Claude Code session.
- **Scheduled Tasks:** Time-triggered Claude tasks that run either locally (while the computer is awake) or on Anthropic cloud infrastructure.
- **Computer Use:** Claude's ability to control mouse, keyboard, and screen to operate any application on the user's desktop.
- **MCP Server (Model Context Protocol):** A server interface standard that allows Claude to interact with external tools and services; the underlying mechanism for Channels.
- **Clawdification:** The host's term for the trend of Anthropic rapidly integrating interaction patterns pioneered by OpenClaw into native Claude products.
- **OpenClaw:** A third-party harness for Claude that popularized persistent, mobile-accessible, event-driven agentic workflows.
- **Skills (Excel/PowerPoint add-ins):** Saved, reusable workflow templates that team members can trigger in one click from the Claude sidebar within Office applications.
- **1 Million Token Context Window:** The extended context capacity now generally available in Claude Opus and Sonnet, enabling analysis of very large codebases or document sets in a single session.

---

## Summary

Over the course of roughly one month, Anthropic shipped a dense cluster of features — Remote Control, Dispatch, Channels, Scheduled Tasks, Computer Use, expanded context windows, and various productivity integrations — that collectively reframe how users are expected to work with Claude. Rather than treating Claude as a tool operated in discrete sessions at a desktop, Anthropic's product direction points toward an always-on, persistent, mobile-accessible system in which the user delegates work, checks in from wherever they are, and receives completed outputs. Computer Use is the capstone of this shift, removing the constraint that Claude could only act within systems that exposed APIs or connectors, and enabling it to operate any application as a human would. The host argues that while each individual feature might appear incremental, their aggregate effect — particularly when combined — constitutes a genuine change in the nature of human-AI collaboration, with broad implications for small-team productivity, enterprise automation, and the future architecture of knowledge work.
