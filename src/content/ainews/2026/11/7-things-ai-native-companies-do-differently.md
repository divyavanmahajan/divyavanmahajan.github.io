---
title: 7 Things AI-Native Companies Do Differently
description: >-
  The talk is an episode of The AI Daily Brief, a daily podcast and video about
  news and discussions in AI, delivered as a "Long Read Sunday / Big Think"
  episode. The host (Nathaniel Whittemore, the show's regular presenter — not
  named in the transc...
pubDate: 2026-11-15T00:00:00.000Z
type: episode
tags:
  - agents
  - enterprise-adoption
  - context-engineering
  - anthropic
url: 'https://www.patreon.com/posts/175392001'
draft: false
---
## Overview

The talk is an episode of **The AI Daily Brief**, a daily podcast and video about news and discussions in AI, delivered as a "Long Read Sunday / Big Think" episode. The host (Nathaniel Whittemore, the show's regular presenter — not named in the transcript) sets out two linked arguments.

First, that a usable picture of what "AI native" actually means has finally emerged, because over the past few months a handful of aggressive AI adopters — Stripe, Shopify, Uber, Ramp, Cloudflare, Anthropic, OpenAI, Warp, Snap, RunLayer, and the year-old startup Odessia (acquired by OpenAI) — have published how they run agents in production. From a close reading of those shares, the speaker extracts **seven practices** that AI-native organisations have in common, most of which come back to how they manage context.

Second, that a practice many listeners would expect on that list is conspicuously absent: **agents as teammates**. The speaker argues this mental model was useful as a transitional analogy but does not reflect how sophisticated users actually work, and proposes **on-demand consulting firms** as a directionally better analogy.

Source video: no URL was provided with this transcript (`2026-11-15-7-things-ai-native-companies-do-differently`).

An explicit caveat the speaker raises up front: most published examples come from software engineering, because code got there first — it has tests, verifiability, and a clear definition of "done." Applying these practices outside engineering will be less clear-cut. The speaker's stated justification for looking at engineering anyway is that watching what engineers do today previews what the rest of the organisation may be doing in three to six months. The speaker also notes he is deliberately "blissfully breezing over" the security implications of the context practices.

## Prerequisites

- **Agentic AI vs. assisted AI** — the distinction between AI as a chat window you ask for help and AI that goes and performs work autonomously.
- **Context windows and context management** — why the amount and freshness of information a model can see is typically the binding constraint rather than model capability.
- **MCP (Model Context Protocol) and CLI tool access** — the mechanisms by which agents are wired into a company's systems.
- **Orchestrator / sub-agent architectures** — a lead agent that plans work and spawns workers, each with isolated context.
- **Software engineering workflow basics** — pull requests, merges, code review, CI, tests, reverts, on-call triage, mono repos.
- **Agent coding environments** — Claude Code, Codex, and the "OpenClaw" agent tooling the speaker references from earlier in 2026.
- **The "bitter lesson"** — the idea that general, learned approaches tend to outperform structures hand-designed from human intuition.

## Main Points

### 1. Give agents the whole picture

- The limit for meaningful knowledge work is not the model and has not been for some time; it is the context, information, and systems the model can reach.
- Odessia's founder Francis Davidson calls the approach **"context maxing"**: agents get MCP or CLI access to everything — every meeting recording, Slack, email, Drive, and every tool the company uses.
- Odessia also writes clean shared documents for every decision, which agents keep up to date. This preserves a track record not just of decisions but of what went into them and how they were reached — a practice the speaker flags as readily stealable.
- Other implementations: Ramp runs a daily pipeline pulling Slack, Notion, Linear, and Calendar into persistent memory so sessions never start cold; Uber built a context graph from more than 30 internal systems; Shopify has agents work inside a mono repo holding code plus skills, conventions, runbooks, and agent-facing instruction files.
- Two failure modes: the context layer is itself an artefact that must be maintained (Ramp's analyst agent degrades measurably when its context goes stale), and George Savolka of Hevia observed a **political** problem — employees uncertain about their future hoard context as job security. The speaker frames this as a cultural problem leaders must address head on, not a technical one.

### 2. Put agents in every function, not just engineering

- Being AI native means the whole organisation is AI native, not that the engineering team is.
- Odessia placed agents across strategy, partnerships, product design, marketing, support, legal, and finance, with groups sharing their usage patterns so each can see how other functions differ.
- Anthropic's growth marketing team has operated as a single person using agent workflows: reading CSVs of hundreds of running ads, flagging underperformers, and dispatching sub-agents to write headlines and descriptions — producing hundreds of new ads in minutes.
- OpenAI's Enterprise Signals research surfaced further non-engineering cases: Basis running customer onboarding with agents, Clay running account management with a workspace and sub-agent per account, and XA running developer ecosystem growth.
- The speaker cites his own agentic video pipelines, covered in a prior episode, as another non-engineering example.

### 3. A signal, not a prompt, starts the work

- In non-AI-native companies, AI does nothing unless a human explicitly tells it to. In AI-native companies, work begins from a trigger without a human translating that trigger into a prompt.
- Typical triggers: a customer message, an invoice, a renewal, an operational alert.
- RunLayer's work arrives from customer calls, custom Slack channels, failing builds, Slack mentions, and pins users drop directly in the live product. At Uber, most agent sessions are now started by *other agents* — code review, self-healing CI, and on-call triage.
- The diagnostic question shifts from "what should I ask the AI to do?" to "which events in my business should start work on their own?" — e.g. a churn signal, a renewal coming due, an invoice arriving.

### 4. One orchestrator that staffs the job, not a roster of standing agents

- Teams increasingly interact with a single main or orchestrator agent that determines what is needed and spins up or calls in sub-agents as the problem requires.
- Anthropic's research system is the clearest public example: a lead agent plans, then spawns sub-agents in parallel, each with its own task, own context, and own output format, and none aware the others exist. Agent count scales to the job — one for a simple fact check, ten or more for a hard problem. This beat a single agent by roughly **90%** on Anthropic's internal research evaluations.
- Warp runs an orchestrator whose only job is routing, never doing the work: for each job it picks which agent or agents, which models, and which slice of context each gets. Ramp's coding agent, Inspect, is offered as an example of this pattern reaching the shared/team-agent domain.
- The underlying reason is again context: rather than maintaining comprehensive context across many standing agents, the orchestrator holds the summaries and key context, and each worker gets a narrow instruction on a clean slate with only what it needs.

### 5. Have agents check each other's work and show proof

- The bottleneck across knowledge work has moved from producing work to verifying it. AI-native organisations treat verification as its own job with its own designed systems, and do not consider an agent done when it has produced its output.
- Shopify's security system treats every finding as a **claim that must be proven**: if the system cannot write a test that actually exploits the bug, the finding is rejected or downgraded — and the model that checks the finding is a different model from the one that found it.
- At RunLayer, an agent fixes a problem and opens a pull request with before/after screenshots or a recorded walkthrough; a second agent reviews it adversarially; after shipping, a QA agent tries to break it in production.
- The two-line summary the speaker gives: check the work, and use a *different* agent than the one that produced it to do the checking.

### 6. Scale human review to risk, and keep a named person accountable

- AI-native companies review neither everything nor nothing. They decide in advance which categories of work need a human, and they always know which human owns the result.
- Uber retains a **chain of responsibility** across agent-to-agent handoffs: every call one agent makes to another carries a record of the whole chain, so even a long handoff traces back to a specific responsible person.
- Stripe has agents write code but humans merge it — every merge has a human reviewer. RunLayer inverts the default: small, low-risk changes merge on their own and humans step in when asked.
- Ramp is productising this for finance, selling agents that either approve low-risk expenses outright or recommend a decision with their reasoning, with each customer setting how far the agents may go alone.
- Snap reports putting **more than half** of its agent investment into guardrails rather than into the agents themselves.

### 7. Make the system consistent — and self-improving — across the organisation

- Even companies working hard at AI typically show wide variation in how individuals or departments use it. The more AI native the organisation, the more there is one system, dynamic enough to adapt and open enough for everyone to improve, that everyone nonetheless works within.
- Shared skills libraries make workflows reusable: Ramp has **350** shared workflows in one library plus a tool that recommends skills by role; Uber's library has **3,600** skills invoked over **30,000 times a day**.
- Shopify builds shared learning differently — its coding agent works only in public Slack channels and never via DM, so every session becomes a searchable transcript anyone can learn from.
- Warp closes the loop on improvement: scoring agents evaluate finished runs, and another agent proposes improvements to the system as pull requests the team reviews — using agentic capacity to examine the agentic system itself.
- A caution on metrics: Shopify does not count lines of AI-written code or pull requests, measuring instead things like **how often changes get reverted**.

### Why "agents as teammates" is not on the list

- The expectation had been that every person would have a digital representation, or that there would be persistent, named, anthropomorphised agents each owning a defined role.
- What the model got right was shifting thinking from AI-as-chat-window to AI-that-goes-and-does-work; it was a useful bridge from assisted AI to agentic AI.
- Where it breaks down: a teammate model assumes a **fixed roster**. What has emerged instead is dynamically sized fleets. Four substitutions follow — capacity that follows the job instead of a fixed roster; fresh context per task instead of persistent identity; interchangeable models and workers instead of enduring roles; and company-wide knowledge instead of personal memory.
- Anthropic's multi-agent guidance found that splitting agents by job function — planner, coder, tester, reviewer — tends to **backfire**: each handoff becomes a game of telephone, and in one experiment role-split agents spent more effort coordinating with each other than doing the work. The speaker reads this as a version of the bitter lesson: humans naturally assume agents should be organised the way we have learned to manage people, when letting them organise themselves works better.
- Every ran per-person proxy agents early in the year and abandoned the design, concluding it made more sense to have a smaller number of agents sitting at intersections that could expand through sub-agents as needed.
- The speaker's own trajectory mirrors this. Early in 2026, with OpenClaw, he ran multiple project-specific research agents, a coordinator, project-tracking agents, and a chief of staff above them. Now, in Claude Code and Codex, he organises projects around shared context in repositories and spins agents up against them — closer to launching a fresh orchestrator each session. As he puts it: not a persistent named anthropomorphised agent, but **a persistent bundle of context that any set of agents can be dropped into**.

### A better analogy: on-demand consulting firms

- The engagement maps cleanly: you bring a goal (a prompt or signal); the engagement lead staffs it (the orchestrator); you never manage and may never meet the staff; the deliverable comes back with evidence; you sign off and own the result internally.
- When the engagement ends the workers are gone, but the work and the records of the work stay — and if done well, the firm's methodology improves with every engagement.
- The speaker calls this imperfect but directionally closer than "teammates."

### Evidence of measurable downside to the teammate framing

- A Harvard Business Review study published in May, involving researchers working with BCG, had managers review identical documents with planted errors. The only variable was the stated author: an AI tool, a human colleague named Alex, or an AI teammate named Alex3.
- When work was attributed to the AI teammate, managers checked it **less carefully**. The clearest effect was at companies that already said they treat AI as employees, where scrutiny dropped roughly **16%**.
- One manager, describing an agent named Kevin, identified the structural issue: when Kevin makes a mistake, Kevin literally cannot be accountable.
- The speaker explicitly limits the claim — it is one study, conducted very early in agent adoption — and says that anyone finding success with the teammate analogy should keep using it.

### Reconciling this with named personal agents

- An apparent tension: Meta and ChatGPT are having users name personal agents ("muse," "dot"), and those products are doing well.
- The speaker argues this is not actually in conflict, because the point of the seven practices is that **your interactions should focus on the orchestrator**. Personal agents are effectively "ur-orchestrators" — holding all the context about everything in a user's life, and therefore best positioned to orchestrate whatever agents and sub-agents are needed while leaving the user a single point of contact.
- He states it is still too early to know whether the two trend lines merge or simply represent different parts of the AI experience.

## Key Concepts

- **AI native** — an organisation where agentic work is systemic across every function, not confined to an AI-fluent engineering team.
- **Context maxing** (Francis Davidson, Odessia) — giving agents MCP or CLI access to everything a company runs on: meetings, Slack, email, Drive, and all tools.
- **Context layer** — the maintained body of information agents draw on; a first-class artefact that degrades agent quality when it goes stale.
- **Context hoarding** (George Savolka, Hevia) — employees withholding knowledge from agents as perceived job security; a cultural rather than technical obstacle.
- **Signal-triggered work** — work initiated by a business event (invoice, renewal, churn signal, failing build) rather than by a human writing a prompt.
- **Orchestrator agent** — an agent whose job is to route work, selecting which agents, which models, and which slice of context, without doing the work itself.
- **Sub-agent** — a worker spawned by an orchestrator with a narrow task, isolated context, and specified output format, unaware of its peers.
- **Dynamically sized fleet** — agent capacity that scales to the job at hand, replacing the fixed roster implied by the teammate model.
- **Finding-as-claim** — a verification stance in which an asserted result is rejected unless it can be independently proven, as in Shopify's requirement of an exploiting test.
- **Cross-model verification** — having a different model check work than the one that produced it.
- **Adversarial review** — a second agent explicitly attempting to break or refute the first agent's output, including post-ship QA agents in production.
- **Chain of responsibility** (Uber) — a record carried through every agent-to-agent call that traces any outcome back to an accountable human.
- **Risk-scaled human review** — deciding in advance which classes of work require human sign-off rather than reviewing everything or nothing.
- **Guardrails** — the constraint and safety layer around agents; Snap allocates over half its agent investment here.
- **Shared skills library** — a reusable, organisation-wide collection of agent workflows (Ramp: 350; Uber: 3,600, run 30,000+ times daily).
- **Public-channel-only agents** (Shopify) — barring DM access so every agent session becomes a searchable, shared transcript.
- **Self-improving agentic system** (Warp) — scoring agents evaluate finished runs and another agent submits system improvements as reviewable pull requests.
- **Revert rate as a metric** — measuring how often changes get rolled back rather than counting lines of AI code or pull requests.
- **Agents-as-teammates** — the model of persistent, named, role-owning agents; the speaker's chief argument is that this is the wrong mental model.
- **Game of telephone** — the degradation and coordination overhead incurred at each handoff when agents are split by job function.
- **Bitter lesson (applied to agent organisation)** — the observation that organising agents by analogy to human management underperforms letting them organise themselves.
- **On-demand consulting firm** — the speaker's proposed replacement analogy: goal in, orchestrator staffs it, deliverable returns with evidence, workers dissolve, records and methodology persist.
- **Ur-orchestrator** — a personal agent holding full life context, positioned as the single point of contact that marshals all other agents.

## Summary

Drawing on a wave of recent public write-ups from Stripe, Shopify, Uber, Ramp, Anthropic, Warp, Snap, RunLayer, and Odessia, the speaker argues that becoming AI native is less about model access than about building the company into a system — and that almost every observable practice traces back to context management. The seven practices are: give agents everything an employee can see and actively maintain that context layer; deploy agents in every function rather than only engineering; let business signals rather than human prompts initiate work; interact with one orchestrator that staffs dynamically sized sub-agent fleets rather than a roster of standing agents; make verification its own designed layer, with a different model proving the work than produced it; scale human review to risk while always keeping a named person accountable; and converge on one shared, improvable system — shared skill libraries, searchable public sessions, agents that propose their own improvements, and metrics like revert rate rather than lines of code. The deliberate omission is agents-as-teammates: useful as a bridge from assisted to agentic AI, but contradicted in practice by dynamic fleets, by Anthropic's finding that role-split agents spend more effort coordinating than working, by Every's abandoned per-person proxy agents, and by an HBR study in which attributing work to a named AI teammate cut managerial scrutiny by about 16% at companies already treating AI as employees — with the accountability problem captured by a manager's remark that when an agent named Kevin makes a mistake, Kevin cannot be accountable. The speaker's proposed replacement is the on-demand consulting engagement: you bring a goal, an orchestrator staffs it, the deliverable returns with evidence, you own the result, the workers dissolve — and the work, the records, and the methodology remain. He notes this does not necessarily conflict with named personal assistants, which function as the ultimate orchestrators, while conceding it is too early to know whether the two trends converge.
