---
title: 'How I Built My 10-Agent OpenClaw Team '
description: >-
  This talk is a first-person account by the host of the AI Daily Brief podcast
  (who goes by NLW) describing how he designed, built, and is currently using a
  10-agent team on the OpenClaw platform. The central thesis is that even a
  non-technical per...
pubDate: 2026-02-12T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# How I Built My 10-Agent OpenClaw Team

## Overview

This talk is a first-person account by the host of the *AI Daily Brief* podcast (who goes by NLW) describing how he designed, built, and is currently using a 10-agent team on the OpenClaw platform. The central thesis is that even a non-technical person can stand up a meaningful multi-agent system today using AI as a build partner, and that the value lies less in technical sophistication and more in thoughtful system design matched to real personal workflows. The episode is framed as practical inspiration rather than a step-by-step tutorial.

**Source video:** No URL was provided for this recording.

---

## Prerequisites

- Basic familiarity with the concept of AI agents and autonomous AI systems
- General understanding of large language model (LLM) chat interfaces (Claude, ChatGPT, etc.)
- Awareness of tools such as Telegram or WhatsApp as chat interfaces
- Some exposure to vibe-coding or no-code/low-code build tools (Replit, Lovable) is helpful but not required
- No programming experience is required; the speaker explicitly identifies as non-technical

---

## Main Points

### 1. Why OpenClaw and Why Now

- OpenClaw has moved from early-adopter hype to a representative example of a broader inflection point in AI: the shift from AI assistants to digital employees that work independently.
- The platform's appeal is its flexibility: rather than locking users into a predefined digital-employee template, it allows full customization of agent behavior.
- Network effects benefit all users: a larger community produces more documentation, shared skills, community lessons, and plugin/capability development.

### 2. Setting Up a Build Coach Before Writing a Single Line

- The speaker's first step was creating a dedicated Claude project to act as coach, mentor, and build partner throughout the entire initiative.
- This project accumulated dozens of conversations and many context-handoff files as the work progressed.
- The recommendation is emphatic: use an AI build partner in any major LLM platform (Claude, ChatGPT, Gemini, Grok) because it provides infinite patience and can handle non-technical questions at any level of granularity.
- The speaker watched zero tutorials and read zero external guides, relying entirely on the AI coach and OpenClaw's own documentation fed into context.

### 3. Hardware and Environment Setup

- The speaker purchased a dedicated Mac Mini to provide a clean, always-on environment with no risk of bleed into existing personal systems.
- A dedicated machine is **not required**; any laptop will work.
- Key setup steps include:
  - Installing Homebrew (Mac package manager)
  - Installing Node.js and Claude Code
  - Disabling sleep so the machine runs as a persistent server
  - Installing Tailscale to create a private network for remote access from any device
- The build coach (Claude) walked through every step of this process.

### 4. OpenClaw Agent Architecture

Each OpenClaw agent is defined by a set of markdown files loaded at the start of every session:

| File | Purpose |
|---|---|
| `identity` | Name, emoji, one-line description |
| `soul.md` | Personality, communication style, values, behavioral boundaries |
| `agents.md` | Operating instructions, protocols, rules for inter-agent interaction |
| `user.md` | Everything the agent knows about the user (name, role, preferences, time zone) |
| `tools.md` | File paths, APIs, services, and account access available to the agent |
| `memory.md` | Long-term curated memories persisted across sessions |
| `heartbeat.md` | Instructions for autonomous background tasks; fires every 30 minutes by default |

- **Heartbeat** enables agents to work without user input; if there is nothing to do, the agent replies "heartbeat okay" and idles.
- **Cron jobs** allow scheduling tasks at specific times (e.g., an 8 a.m. status update and a 5 p.m. check-in).

### 5. Deciding Which Agents to Build

The speaker used three criteria to match agents to tasks:

1. **Mobile management** — tasks that benefit from being instructable via a phone chat app at any moment
2. **Persistent work** — tasks that benefit from around-the-clock operation
3. **Scheduled work** — tasks that benefit from recurring triggers at specific times

He mapped all of his existing work against these criteria before building anything.

### 6. The Builder Bot — Least Used Agent

- The first agent built was a coding/builder agent, intended to handle coding projects overnight without iterative human feedback.
- In practice, his actual coding projects turned out to be discrete, highly iterative, and feedback-dependent — not suited to autonomous overnight runs.
- The builder is still used occasionally but is the least utilized agent in the team.
- **Lesson:** Match agent capabilities to how your work actually behaves, not how you imagine it behaves.

### 7. Research Agents — Core Value Driver

- Two dedicated research agents support his *AIDB Intelligence* platform products:
  - One focused on **Maturity Maps** (visualizing AI maturity across six organizational dimensions: use cases, systems integration, data access, outcomes, people, and governance)
  - One focused on **Opportunity Radars** (categorizing AI use cases by applicability for different business types)
- These agents run continuously, surfacing and cataloging new studies, surveys, and research, and actively proposing changes to the maps and radars based on new findings.
- Required calibration: the speaker had to train the agents on what constitutes a high-quality source and how to justify their proposals clearly.
- Heartbeat reliability is imperfect; agents occasionally drop off and require a reset — a known and common issue in the OpenClaw community.

### 8. Project Manager Agents

- Four project manager agents cover: AIDB Intel, a new *Super Intelligent Compass* product, podcast growth initiatives, and the AIDB training platform.
- **Current state (Phase 1):** Primarily glorified to-do list managers; the speaker feeds them a brain dump, and they remind him of outstanding decisions and tasks. He can instruct them to send escalating reminders (e.g., "send me skull emojis every 30 minutes until I make this decision").
- **Future state (Phase 2):** These agents will integrate with external systems (Slack, other agents' files) and coordinate with other people's agents to provide a real-time project state view independent of the speaker's own input.
- A **Chief of Staff** agent has been built but remains largely idle, waiting for Phase 2 to make cross-project triage meaningful.

### 9. NLW Tasks Agent — Most Used Agent

- A personal task management agent that replaces the speaker's previous Notion workflow.
- Interfaces via Telegram; the speaker dictates tasks the moment they occur to him regardless of context (driving, gym, meetings).
- Maintains multiple list types: today, this week, next week, future, and an icebox for indefinitely deferred items.
- The value is a user experience that maps precisely to how the speaker's brain works, not a feature that required complex agent architecture.

### 10. The Mission Control Dashboard

- The speaker built a custom mission control web interface to monitor all agents simultaneously: scheduled interactions, findings, costs, and items awaiting decisions.
- This was the most technically demanding part of the entire project.
- His assessment: **probably not worth building yourself.** Off-the-shelf solutions will exist very soon. He built it for learning purposes and to fill a gap that Telegram's per-chat view does not cover.
- Many community dashboards currently optimize for sequential/pipeline agent workflows (Kanban-style); his needed a different design for parallel, independent monitoring.

### 11. Current Scope and Deliberate Limits

- OpenClaw is **not** currently given access to email, inboxes, or many third-party skills.
- Skills were deliberately avoided initially after reports of malware in the skills ecosystem (being actively remediated by OpenClaw).
- Agents do not yet hand off tasks to each other in a true pipeline; interaction is limited to shared context files and the Chief of Staff reading other agents' system files.
- The speaker considers full inter-agent orchestration the next major unlock in value — but has not implemented it yet.

### 12. Accessibility and the Path for Non-Technical Users

- The speaker accidentally wiped all 10 agents by forcing an unsupported model upgrade and was able to fully recover through the AI build partner.
- There will be a period of negative ROI in time; hours of troubleshooting are inevitable.
- The core promise: **you will never get permanently stuck** if you use an AI build partner consistently.
- Non-technical status is not a barrier; the limiting factor is willingness to invest time.

---

## Key Concepts

- **OpenClaw** — An agent platform billed as "AI that actually does things," running locally on a user's machine with file read/write, script execution, and browser access capabilities, controllable via chat apps like Telegram or WhatsApp.
- **Heartbeat** — OpenClaw's autopilot mechanism; a scheduled trigger (default: every 30 minutes) that causes an agent to read its `heartbeat.md` file and execute any listed tasks autonomously.
- **Cron job** — A time-based scheduled task; in this context, used to trigger agent actions at specific clock times (e.g., daily morning status reports).
- **Markdown agent files** — The set of `.md` files (soul, agents, user, tools, memory, heartbeat) that define an OpenClaw agent's identity, behavior, knowledge, and autonomy.
- **Build coach / build partner** — An LLM project (in Claude, ChatGPT, etc.) set up specifically to guide, troubleshoot, and co-develop the entire agent-building initiative; acts as a persistent technical mentor.
- **Tailscale** — A VPN tool that creates a private network across devices, enabling remote access to a dedicated always-on machine from any location.
- **Homebrew** — A Mac package manager used to install developer tools (Node.js, Claude Code, etc.) on macOS.
- **Skills/plugins (OpenClaw)** — Third-party capability extensions for OpenClaw agents; noted as having had early security/malware issues that are being actively addressed.
- **Mission control** — A custom-built web dashboard for monitoring the status, outputs, costs, and pending decisions of all running agents simultaneously.
- **Maturity Maps** — An AIDB Intelligence product visualizing organizational AI maturity across six dimensions (use cases, systems integration, data access, outcomes, people, governance).
- **Opportunity Radars** — An AIDB Intelligence product categorizing AI use cases by function and business applicability.
- **Vibe coding** — Informal term for iterative, conversational AI-assisted coding using tools like Replit or Lovable, without traditional programming expertise.
- **Chief of Staff agent** — A meta-agent designed to triage across all project manager agents and surface the highest-priority items; currently inactive pending Phase 2 agent integration.

---

## Summary

The speaker argues that the current moment represents a genuine inflection point at which non-technical individuals can build meaningful multi-agent AI systems without programming experience, provided they commit to using an AI build partner as their guide throughout the process. Drawing on his own experience assembling a 10-agent OpenClaw team — including research agents, project managers, a builder, a chief of staff, and a personal task agent — he demonstrates that the highest-value design decisions are not technical but conceptual: understanding which categories of work benefit from persistence, scheduling, or mobile-first interaction, and matching agent design to actual rather than imagined workflows. His honest assessment is that the system as currently built is a relatively simple, early-stage version of what these tools will eventually enable, that heartbeat reliability and skills security remain genuine rough edges, and that the custom mission control dashboard he built was probably not worth the effort given how quickly off-the-shelf tooling will catch up. The central takeaway is that the barrier to entry is time and willingness, not technical skill, and that starting now — even imperfectly — is worthwhile because of the compounding learning and the network effects of a growing community.
