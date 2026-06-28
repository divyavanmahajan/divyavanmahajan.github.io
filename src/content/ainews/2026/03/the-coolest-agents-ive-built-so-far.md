---
title: 'The Coolest Agents I''ve Built So Far '
description: >-
  The speaker, NLW (host of the AI Daily Brief), walks listeners through a
  self-styled "Agent Madness" bracket tournament—16 AI-assisted or agentic
  projects he built in early 2026, seeded and matched head-to-head until one
  champion is crowned. The e...
pubDate: 2026-03-14T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# The Coolest Agents I've Built So Far (Agent Madness Tournament)

## Overview

The speaker, NLW (host of the *AI Daily Brief*), walks listeners through a self-styled "Agent Madness" bracket tournament—16 AI-assisted or agentic projects he built in early 2026, seeded and matched head-to-head until one champion is crowned. The episode serves as a behind-the-scenes tour of his personal and professional AI builds, reflecting on technical complexity, daily utility, broader value, and personal affinity. The broader context is a major industry shift toward agentic AI that the speaker argues has accelerated dramatically over the preceding three to four months.

**Source video:** *(URL not provided)*

---

## Prerequisites

- Familiarity with the concept of **AI agents** and **multi-agent systems**
- Basic understanding of tools such as **Claude / Claude Code**, **OpenClaw** (an agentic framework), **ChatGPT**, **Perplexity**, and **Lovable** (no-code web builder)
- Awareness of **vibe coding** / AI-assisted development workflows
- Knowledge of **Slack** as a platform for deploying conversational agents
- General understanding of enterprise AI strategy concepts (use cases, governance, change management, ROI)
- Familiarity with **March Madness** bracket tournament format (helpful for following the structure)

---

## Main Points

### The Premise: An Agentic Shift and the Tournament Format
- The speaker argues there has been a "massive shift" toward agentic AI in the preceding 3–4 months, driven by tools like Claude Code, Codex, Perplexity Computer, and OpenClaw.
- To celebrate "Agent Madness" (a community bracket tournament held in March), he seeds 16 of his own builds into a personal mini-tournament.
- Seeding was validated by asking both Claude and ChatGPT independently; both produced nearly identical rankings.
- Judging criteria: technical complexity, daily utility, value beyond the individual builder, and personal X-factor.

---

### Bracket A — Match 1: AIDB Website vs. Holmes Agent
- **AIDB Website** (8-seed): Built and maintained with Lovable; a simple terminal-themed homepage for the podcast ecosystem. Low technical complexity, moderate utility.
- **Holmes Agent** (1-seed): Part of a Sherlock Holmes–themed agent ecosystem for AI strategy at the speaker's company, Superintelligent.
  - Conducts interviews with individuals via a web interface or Slack (DMs and threads).
  - Builds a persistent "case file" per person: role, daily work, AI tool usage, working style, communication preferences.
  - Generates personalized AI tool recommendations with ratings/feedback loops.
  - Updated weekly by pulling data from the **221B knowledge hub** (see below).
- **Winner: Holmes**

---

### Bracket A — Match 2: OpenClaw Coder (WittyBuilder) vs. Perplexity AI Research Library
- **WittyBuilder** (OpenClaw Coder): First OpenClaw agent built; designed for vibe coding via Telegram from anywhere (e.g., the gym). Did not become a regular workflow tool. A later iteration—a database writer bot triggered by a researcher agent—made it more useful.
- **Perplexity AI Research Library**: One-shot build using Perplexity Computer to aggregate AI adoption research, studies, and surveys into a browsable library. Natural language interaction was weak out of the box.
- **Winner: OpenClaw Coder** (narrowly, bolstered by the database writer iteration)

---

### Bracket A — Match 3: Chucky (Agent Representative) vs. AIDB New Year's Program
- **AIDB New Year's**: A self-directed 10-week AI skills program launched at New Year's; over 7,000 participants, thousands of project submissions. High community impact.
- **Chucky**: An agent that acts as a portfolio representative for AI builders, inspired by the film *Good Will Hunting*.
  - Designed to solve the credibility problem for agent builders: resumes and static portfolios are insufficient proof of skill.
  - A potential client or partner interacts with Chucky directly; Chucky presents the builder's projects (e.g., Holmes), with screenshots and links to live tools.
  - Includes a visualization of the builder's full agent ecosystem and a traditional portfolio view as a fallback.
  - Positioned as a potential future job-matching format.
- **Winner: Chucky** (future potential over present impact)

---

### Bracket A — Match 4: 221B Knowledge Hub vs. Model Mog
- **221B**: The backend "brain" powering both Holmes and Mycroft.
  - Automatically ingests podcast transcripts, performs web searches, conducts weekly interviews with the speaker, and assembles dossiers on trends in enterprise AI.
  - Not user-facing but critical infrastructure for the agent ecosystem.
- **Model Mog**: A platform for surfacing user preferences across AI models by use case (e.g., "Which model would you use to generate a 15-second product demo video?"). Built informally; reflects survey data showing power users average ~3.5 models.
- **Winner: 221B** (more strategically significant)

---

### Bracket B — Match 1: Claw Camp vs. Mycroft
- **Claw Camp**: A self-directed program (successor to AIDB New Year's) teaching OpenClaw agent and agent-team building. Includes project check-ins and a showcase of participant builds.
- **Mycroft**: The company-level counterpart to Holmes; named after Sherlock Holmes's smarter older brother.
  - Lives in Slack and on the web; conducts discovery interviews and builds an ongoing AI roadmap for an entire organization.
  - Roadmap covers: use cases, data/systems integration, governance, upskilling, and ROI goals.
  - Continuously improves via new conversations and 221B intelligence feeds.
- **Winner: Mycroft**

---

### Bracket B — Match 2: OpenClaw Chief of Staff vs. Mission Control Center
- **OpenClaw Chief of Staff**: Represents ~6 project manager agents (one per major initiative: AIDB, Superintelligent, training programs, benchmarking, etc.) with a chief of staff coordinating them. In practice, functions more like an externalized to-do list competing with Notion; not yet wired into Slack for live context.
- **Mission Control Center**: A dashboard interface for managing 10+ agents; tracks persistent state, monitors overdue heartbeats, and flags cron job failures. Described as the most technically difficult build, requiring extensive iteration.
- **Winner: Mission Control Center**

---

### Bracket B — Match 3: Witty Radars Researcher (OpenClaw) vs. Maturity Maps
- **Witty Radars Researcher**: A 24/7 OpenClaw agent that continuously scans the web for AI research, studies, and surveys to populate the "Opportunity Radars" use case database. Categorizes use cases as *Prime Time* (broadly viable), *Emerging* (setup required), or *Frontier* (high-capability requirement). Described as the speaker's most useful OpenClaw agent overall.
- **Maturity Maps**: A forthcoming benchmarking framework designed to replace aging tools like the Gartner Magic Quadrant. Assesses AI/agent readiness across six vectors: use cases, systems, data integration, outcomes, people, and governance. Uses a simple *on track / behind / ahead* visualization updated quarterly.
- **Winner: Witty Radars Researcher** (currently operational vs. forthcoming)

---

### Bracket B — Match 4: Agent Madness Platform vs. Compass
- **Agent Madness Platform** (agentmadness.ai): The bracket/tournament platform itself, built for the community competition.
- **Compass**: A beta enterprise platform for AI adoption professionals. Integrates Opportunity Radars, Maturity Maps, roadmap building, company context uploads, and self-directed assessments of the type Superintelligent deploys with clients.
- **Winner: Compass**

---

### Semifinal and Final Rounds

| Round | Matchup | Winner | Reasoning |
|---|---|---|---|
| Bracket A SF | Holmes vs. OpenClaw Coder | Holmes | Greater long-term individual value |
| Bracket A SF | Chucky vs. 221B | Chucky | Novel form factor for showcasing builder credibility |
| Bracket B SF | Mycroft vs. Mission Control | Mycroft | Digital Chief AI Officer concept has strong legs |
| Bracket B SF | Witty Researcher vs. Compass | Witty Researcher | Last OpenClaw standing; Compass will absorb many tools anyway |
| Bracket A Final | Holmes vs. Chucky | **Chucky** | Mycroft may absorb Holmes's function; Chucky's form factor is novel and durable |
| Bracket B Final | Mycroft vs. Witty Researcher | **Mycroft** | Active in testing, scalable, operationally meaningful now |
| **Grand Final** | Chucky vs. Mycroft | **🏆 Mycroft** | Mycroft is closer to release, has immediate enterprise value, and best represents the speaker's vision for scaling AI strategy work |

---

## Key Concepts

- **Agent Madness**: A March Madness–style community bracket tournament for AI agent builders, hosted at agentmadness.ai.
- **OpenClaw**: An agentic AI framework used to build persistent, autonomous agents; runs locally (e.g., on Mac).
- **Vibe coding**: AI-assisted, informal coding where the developer describes intent and the AI generates or iterates on code with minimal traditional engineering.
- **Holmes**: A personal AI advisor agent that interviews individuals, builds case files, and generates personalized AI tool recommendations.
- **Mycroft**: A company-level AI strategy agent that conducts discovery, builds roadmaps, and continuously updates them; positioned as a "digital Chief AI Officer."
- **221B**: An agentic knowledge hub that ingests content and generates enterprise AI intelligence dossiers to power other agents.
- **Chucky**: An agent that acts as an interactive portfolio representative for AI builders, enabling potential clients or employers to converse with an agent about the builder's work.
- **Opportunity Radars**: A use case database organizing AI applications into Prime Time, Emerging, and Frontier tiers.
- **Maturity Maps**: A six-vector benchmarking framework for assessing organizational AI readiness, designed as a modern replacement for legacy analyst frameworks like the Magic Quadrant.
- **Compass**: A beta enterprise SaaS platform integrating Superintelligent's AI adoption tools (radars, maps, roadmaps, assessments).
- **Witty Radars Researcher**: A 24/7 OpenClaw agent that autonomously scans for AI research to populate and update the Opportunity Radars database.
- **Lovable**: A no-code/AI-assisted web application builder used for the AIDB website.
- **Mission Control Center**: A custom dashboard for monitoring the health and status of a multi-agent system (heartbeats, cron jobs, persistent data).

---

## Summary

In this bonus episode of the *AI Daily Brief*, NLW uses a March Madness–style bracket to tour 16 AI-assisted and agentic projects he built in early 2026, arguing that a fundamental "agentic shift" is underway across the industry. The tournament surfaces two standout builds: **Chucky**, a novel agent-as-portfolio-representative that he believes could reshape how AI builders demonstrate credibility to clients and employers, and **Mycroft**, a Slack- and web-based digital Chief AI Officer agent that conducts ongoing discovery interviews, builds continuously updated company-level AI roadmaps, and draws on a backend knowledge hub (221B) for external intelligence. Mycroft is crowned champion on the basis that it is closest to production-ready, addresses a scalable enterprise need, and best embodies the speaker's vision for replacing traditional one-time AI strategy consulting with persistent, agentic, continuously updated advisory systems.
