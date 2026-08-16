---
title: How To Decide What Work Ai Should Do For You The Ai Deputization Audi
description: >-
  This episode of the AI Daily Brief (hosted by Nathaniel Whittemore, though the
  speaker is not explicitly named in the transcript) introduces a practical
  framework called the AI Deputization Audit — a structured scoring system for
  determining which...
pubDate: 2026-08-14T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# How to Decide What Work AI Should Do for You: The AI Deputization Audit

## Overview

This episode of the *AI Daily Brief* (hosted by Nathaniel Whittemore, though the speaker is not explicitly named in the transcript) introduces a practical framework called the **AI Deputization Audit** — a structured scoring system for determining which parts of your recurring work are best suited for AI automation. The talk is motivated by two product launches (GrokBot's "Teach a Task" and ChatGPT's "Computer History") that signal a broader shift in AI from capability constraints to context constraints. The episode also covers related AI news including Gemini 3.7 Flash, an AlphaSense model cost-efficiency study, OpenAI's Ultra Fast Mode, and OpenAI executive departures.

**Source video:** URL not provided (published approximately 2026-08-14 on the AI Daily Brief channel)

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and AI assistants (ChatGPT, Grok, Gemini, Claude)
- General understanding of AI agents and automation concepts
- Awareness of the difference between model capability and contextual knowledge
- Familiarity with common knowledge-worker workflows (email triage, CRM, reporting, etc.)
- Some exposure to recent AI product news (Cursor, SpaceX AI, OpenAI's Computer Use, Microsoft Recall)

---

## Main Points

### 1. The Bottleneck Has Shifted: From Capability to Context

- The central challenge in AI is no longer whether a model *can* do a task, but whether it has sufficient personal and organizational context to do it *well for you specifically*.
- Two new product features launched this week directly address this problem:
  - **GrokBot's "Teach a Task"**: A deliberate demonstration model where you press a button, record yourself doing something in a browser, and the bot learns to replicate it.
  - **ChatGPT's "Computer History"**: An ambient observation model where ChatGPT passively monitors your computer interactions over time, building ongoing context without intentional input from the user.
- These features represent a meaningful step forward from earlier approaches like manually building a "personal context file."

### 2. The Privacy Comparison: Microsoft Recall vs. Current Tools

- ChatGPT's Computer History invites comparison to Microsoft's **Windows Recall** (announced early 2024), which took encrypted screenshots every few seconds and was widely criticized as a "privacy nightmare."
- Microsoft recalled Recall before later re-releasing an opt-in version with finer user controls.
- Key differences with current tools:
  - Computer History records **interaction events**, not screenshots or audio, which is a meaningfully different privacy posture.
  - The value proposition has changed: Microsoft pitched Recall as helping users *find things they'd seen before* (low urgency), whereas the current pitch is getting AI to *actually do your work for you* (high urgency).
- Shifting user attitudes toward privacy (trading data for utility) also help explain the different reception.

### 3. Ambient Observation vs. Deliberate Demonstration

- The two new AI learning paradigms have distinct trade-offs:

| Paradigm | Example | Key Advantage |
|---|---|---|
| **Ambient Observation** | ChatGPT Computer History | Requires no intentional effort; learns passively across all apps |
| **Deliberate Demonstration** | GrokBot Teach a Task | User maintains full control over what is taught; intentional and bounded |

- For users who prefer to be intentional about what they hand over to AI, the deliberate demonstration model may feel more natural.
- For users who want a frictionless background intelligence layer, ambient observation provides the "killer feature" of learning without action.

### 4. The AI Deputization Audit — The Core Framework

The audit is a four-step process to identify which recurring tasks are best handed off to AI.

**Step 1: Inventory Your Recurring Processes**
- Focus on recurring (not one-off) workflows, as these are best suited for deputization.
- Examples: email triage, weekly status reports, meeting prep, research briefs, CRM hygiene, content repurposing, scheduling, vendor portal chores, inbound lead qualification, metrics reporting.

**Step 2: Score Each Process Across Five Dimensions (0–2 each, max 10 points)**

| Dimension | Score 0 | Score 1 | Score 2 |
|---|---|---|---|
| **Worth It** (frequency × time cost) | Rare and quick (few times/year, few minutes) | Moderate (most weeks, under an hour) | Very frequent and time-consuming (weekly+, hours) |
| **Teachable** (10-min screen share test) | Impossible or takes months to teach | Demonstrable but with many caveats | One demo covers it completely |
| **Checkable** (verification time vs. production time) | Checking = redoing it | Requires careful read-through | Quick glance confirms quality |
| **Stakes** (cost of undetected error) | Serious or irreversible consequences | Embarrassing but fixable | Low stakes, easy to redo |
| **Your Necessity** (must it be you?) | Only you can do it meaningfully | Your involvement helps but isn't essential | Output quality is person-agnostic |

**Step 3: Interpret the Score**
- **8–10 points → Deputize**: Strong candidate to hand off to AI. Spot-check outputs. These are where to experiment with Computer History or Teach a Task first.
- **4–7 points → Duet**: AI does part of the task; human remains highly involved. Most knowledge work falls here today.
- **0–3 points → Defend**: Keep this work to yourself. Mistakes are costly, relationships are involved, or the output is identity-dependent.

**Step 4: Name the Blocker**
- For Duet and Defend tasks, identify the specific reason AI can't take over yet:
  - *Vendor portals with no API* → Potentially solved by computer-use agents that click screens directly (GrokBot/Computer History may address this)
  - *Hard to explain in a prompt but easy to show* → Solved by Teach a Task / screen recording paradigm
  - *AI lacks your personal context* → Potentially addressed by ambient observation over time, but not by a single 10-minute demo
  - *Work requires taste, judgment, or human relationships* → Not solved by current tools
  - *Privacy/security concerns* → New screen-recording tools may actually *add* a blocker here rather than remove one
- After identifying blockers, check whether new tools (Computer History, Teach a Task) now eliminate any of them.

### 5. Early GrokBot Use Cases and Limitations

- GrokBot is well-suited to users who have not yet built full agent systems; advanced users find limitations in lack of folder-level context control and no model-choice flexibility.
- Emerging best practices:
  - **Chief of Staff pattern**: Spin up individual bots per topic/task, interact with all of them through one coordinating "chief of staff" bot.
  - **Universal starter job**: Inbox + Slack tracker + morning brief automation; reportedly takes about one minute to set up.
- Real-world example: A plumbing company owner went from zero to automated dispatch and office chores within 24 hours, with no engineering staff.

### 6. Supporting News: Model Performance and Cost Efficiency

- **Gemini 3.7 Flash**: Extremely fast (340 tokens/second), improved coding benchmarks, halved price — but occupies an uncomfortable middle ground between frontier performance and ultra-cheap models. Best suited for synchronous coding tasks and powering Google's Spark personal agent.
- **AlphaSense Study**: Tested U.S. and Chinese models on financial analysis tasks. GPT-5.6 Sol outperformed Kimi K3 by ~20% quality at ~13% lower cost. Switching to cheaper Chinese models did not consistently reduce total costs due to token inefficiency. The key lesson for enterprise buyers: measure cost-per-task, not cost-per-token.
- **OpenAI Ultra Fast Mode**: GPT-5.6 Sol running at 750 tokens/second (~2× faster than Gemini 3.7 Flash) via Cerebras hardware, available via API to select customers. Targeted at latency-sensitive workflows: voice, customer support, coding, financial research, security.
- **OpenAI Executive Departures**: CRO Denise Dresser (9 months tenure) departing, replaced by Dali Rajic (former President/COO of Wiz). Follows COO Brad Lightcap's departure days earlier. Pattern noted by markets as a potential concern ahead of a delayed IPO; sources suggest President Greg Brockman is consolidating his own leadership team.

---

## Key Concepts

- **AI Deputization**: Assigning a task to an AI agent to perform on your behalf, with the implication of ongoing oversight — distinct from full automation and "never thinking about it again."
- **AI Deputization Audit**: A five-dimension scoring framework (Worth It, Teachable, Checkable, Stakes, Your Necessity) to evaluate how well-suited a recurring task is for AI delegation.
- **Deputize / Duet / Defend**: The three outcome tiers of the audit (scores 8–10, 4–7, and 0–3 respectively).
- **Ambient Observation**: An AI learning paradigm in which the system passively watches how you work across applications over time (example: ChatGPT Computer History).
- **Deliberate Demonstration**: An AI learning paradigm in which the user intentionally records a workflow to teach the AI a specific skill (example: GrokBot Teach a Task).
- **Capability vs. Context Bottleneck**: The shift in the primary limiting factor for AI usefulness — from whether a model can do something, to whether it has enough personal/organizational context to do it well.
- **GrokBot**: Cursor and SpaceX AI's simplified agentic assistant, featuring a "Teach a Task" screen-recording capability and a multi-bot "chief of staff" coordination pattern.
- **ChatGPT Computer History**: OpenAI's feature allowing ChatGPT to learn from computer interaction events (not screenshots) to build context and suggest automations.
- **Chief of Staff Pattern**: An agent architecture in which dedicated bots handle individual topics or tasks, all coordinated through a single "chief of staff" bot that the user interacts with directly.
- **Cost-per-Task vs. Cost-per-Token**: A distinction in enterprise AI budgeting — a model that costs more per token may be cheaper per completed task if it uses fewer tokens to achieve higher quality.
- **Pareto Frontier (model benchmarking)**: The set of models that are not dominated by any other on both cost and performance simultaneously; used to evaluate whether a model's price-to-intelligence trade-off is justified.

---

## Summary

The central argument of this episode is that the primary challenge in practical AI adoption has moved from whether AI *can* do something to whether it has enough context about *how you specifically work* to do it well — and that two new product features (GrokBot's Teach a Task and ChatGPT's Computer History) directly address this gap through deliberate demonstration and ambient observation respectively. To help individuals take advantage of these tools thoughtfully, the speaker introduces the **AI Deputization Audit**: a structured, five-criteria scoring system (frequency/time value, teachability, checkability, stakes, and personal necessity) that assigns each recurring task a score out of 10 and places it into one of three action tiers — Deputize, Duet, or Defend. The audit's final step — naming the specific blocker for tasks not yet ready for AI handoff — is particularly important because some long-standing blockers (such as software with no API, or processes too complex to describe in text but easy to show) are now directly solved by the newly released tools, while others (judgment, relationships, irreversible consequences, privacy) remain human responsibilities. The broader takeaway is that for most knowledge workers, a large portion of recurring work is already in reach of meaningful AI delegation, and investing the time to identify and experiment with those tasks — even at short-term efficiency cost — is likely to yield substantial long-term returns.
