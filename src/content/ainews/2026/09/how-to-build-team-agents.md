---
title: 'How to Build Team Agents '
description: >-
  Nufar Gaspar joins the Operator's Cut to argue that 2026's agents were built
  as solo tools, while most work happens between people. The fix is team agents:
  one agent many people talk to, with shared knowledge, shared memory and a
  named owner. Covers the four archetypes, three signs to wait, and five design
  decisions.
pubDate: 2026-09-29T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/170926809'
draft: false
---
## Overview

**Title:** How to Build Team Agents — *The AI Daily Brief*, "Operator's Cut" edition (recorded 2026-09-29)
**Speakers:** Nathaniel Whittemore (host, The AI Daily Brief / Superintelligent) in conversation with **Nufar Gaspar**, who delivers the main body of the talk.
**Source video:** no YouTube link was provided with this transcript. The episode is a pre-recorded edition of the AI Daily Brief podcast/video series; the referenced companion material is the free "Multiplayer AI" sprint.

The central thesis is that 2026 made autonomous agents real, but almost all of them were built as **solo** tools — covering only the portion of work a person does alone. Because most work actually happens *between* people, the next shift is toward **team agents**: a single agent that many people talk to, with shared knowledge, shared memory, and one configuration (instructions, skills, access, and a named owner).

Why it matters: Gaspar argues organisations follow a three-step arc — (1) everyone builds personal agents, (2) this produces *agent sprawl* (overlapping agents, inconsistent pictures of the company, each dying when its owner leaves or loses interest), (3) AI-forward companies consolidate into fewer, broader, owned team agents. She cites publicly discussed examples: a company that gave every employee an agent early in the year and moved to shared team agents by May, Sierra merging multiple agent specialists into one, and Shopify's internal agent. Most teams she sees are at step one or two. The talk is positioned as tool-agnostic: the hard part is configuration and knowledge curation, which survives whatever vendors ship next.

## Prerequisites

- **What an AI agent is in a work context** — an LLM-based system with instructions, tool/data access, and some autonomy to complete tasks, not just answer questions.
- **Agent configuration basics** — system instructions, scope and "definition of done", a do/don't list, least-privilege tool access, human approval for irreversible actions. The talk explicitly skips this "security 101" and covers only what *changes* for teams.
- **Skills / skill libraries** — reusable playbooks for specific tasks, and the distinction between a skill and an agent.
- **Memory and retrieval** — the idea that an agent can learn and store facts across sessions, and that where that memory lives determines who sees it.
- **Identity and permissions models** — acting-as-user (delegated access) vs. a service account vs. a shared login; the difference between what an agent can *see* and who can *ask* it.
- **Familiarity with the current tool landscape** — chat-platform agents (Claude in Slack / "CloudTag" as transcribed), ChatGPT workspace agents, Microsoft Copilot, Notion shared spaces, and self-hosted open-source harnesses.
- **Organisational context** — how work hands off across sales, solution engineering, customer success, and delivery; what a CRM contains and why access differs by role.

## Main Points

### 1. Two failure modes motivate team agents

- **The indispensable expert.** Every company has at least one person who alone knows how pricing exceptions work, what the data means, or how the biggest customer was configured three years ago. Work waits for them when they are swamped, they get called on vacation, and when they leave "a piece of the company leaves with them." In one company Gaspar worked with, there was such a person per domain — nobody could take leave uninterrupted.
- **Work nobody fully owns.** A customer moves sales → marketing → customer success. Sales made promises during the deal; marketing runs a campaign with slightly different messaging; customer success discovers the promises weeks before renewal. Each team holds a piece and nobody has the whole picture, because the work sits *between* them.
- Crucially, adding AI per step makes the second problem **worse**: the individual agents don't talk to each other.
- A team agent addresses both — though they are different problems, which is why archetypes matter later.

### 2. Definitions and scope

- **Team agent** (the term used throughout): one agent that many people talk to, with shared knowledge, shared memory, and one configuration — instructions, skills, access, and owner all shared. Synonyms in circulation: multiplayer AI, shared agents, AI teammates, "company brain."
- **A skill library is not a team agent.** A skill is a playbook for a specific task and gives valuable standardisation; a team agent handles a *diverse* set of tasks, ad hoc and repeated, carries team knowledge, remembers what it learns, and *uses* team-level skills. A skill library is an ingredient, not the thing.
- **Scope is work, not life.** Consumer personal agents (Muse, Instinct, and similar) are out of scope; the talk is about agents built for your job.
- **Audience is everyone, not just frontier builders.** If you're about to build one, this is the playbook; if you're not there yet, the same decisions apply to any agent. Even solo operators face them — the "other player" is a customer, or a future version of yourself.

### 3. Not every agent should be shared: a three-setting dial

- **Private agent** — yours, your taste, your access. Gaspar's own social media agent stays private: nobody else should sound like her.
- **Shared knowledge and skills, private agents** — the team maintains one body of knowledge (what we sell, how we work, what our words mean) plus a shared skill library, and everyone points their own agent at it. Often the right answer and the easiest place to start. Example: every salesperson keeps a prospecting agent tuned to their own voice, but all share the same maintained picture of the ideal customer and company messaging.
- **Team agent** — one agent with its own job and its own owner, used by many.
- Agents can move along the dial. **Signal to promote:** colleagues keep asking to borrow your private agent.

### 4. Four archetypes of team agent

| Archetype | What it is | How you recognise it | What it takes to get right |
|---|---|---|---|
| **Expert agent** | One person's or small team's know-how, made available to everyone who depends on it | "The person who can't take a vacation" | Knowledge must come from the experts who hold it — interview them, harvest answers they've already given in DMs, email, and other forums. Involve them from day one: this is what finally makes vacation possible, but also a source of job insecurity, so tread carefully. |
| **Common work agent** | Many people doing similar recurring work, with one shared way to do it | Three people have each built their own version of the same agent | Agree on how the work is done. Merging the best of three versions is really a conversation about the company standard — easier said than executed. Examples: team research / meeting-prep agent, marketing content agent. |
| **Bridge agent** | Work that flows between roles, that nobody can do alone | Handoffs break; every stage re-expands context | Each function must feed in its own piece of knowledge, and users have different access levels — permissions need very careful attention. Example: a customer agent spanning sales, solutions, customer success, and delivery. |
| **Chief of staff** | Owns operationalising the team's day-to-day: decisions, commitments, status, onboarding | The team keeps repeating itself; new joiners take weeks to find their footing | Define clearly what it is allowed to learn, and how it learns processes and ongoing activity automatically — non-trivial — plus permissions questions. |

In the closing discussion, Gaspar notes the **bridge agent is the most attractive in theory and the hardest to execute**, so it is rarely the first built. The **expert agent is the lowest-hanging fruit** and already has many successful implementations. Whittemore agrees, adding that the "agentified internal knowledge hub" (policies, company information via chatbot) has long been an easy, fast early win — effectively a team agent before anyone named it one.

### 5. Three signs to wait

- **Taste beats standards.** If different people genuinely need different answers, or won't agree on a standard, and their own judgment or voice *is* the point — keep agents private so people stay authentic and don't fight over ground truth.
- **Nobody can own the knowledge.** If the team can't agree how work is done, or nobody will own and maintain shared knowledge over time, the agent will drift "within weeks, sometimes within days." Settle ownership first.
- **It complicates more than it simplifies.** Conflicting needs, tangled permissions, endless coordination — if the overhead exceeds the benefit, don't build it until the complexity is untangled.
- **Explicitly *not* on this list:** sensitive data and high stakes. Those are design questions that shape *how* you build, not reasons against building.

### 6. The five design decisions

Illustrated throughout with one running example: a **customer agent** (bridge archetype) that holds everything the company knows about each customer and everything promised to them, used by sales, solution engineering, customer success, and delivery.

**Decision 1 — What it does.** (Generic agent scoping is assumed; only team-specific changes are covered.)
- **Who it serves, by role.** Sales asks different things than delivery. Write down each role and what they'll come for, to confirm coverage.
- **Aim broad within one area of work.** A team agent should be capable enough to justify its existence; focus comes from the *area* (here: customers), not from narrowness. The example agent prepares meeting answers, reports where things stand, flags promises that commit other teams, and drafts every handoff.
- **Write a team "don'ts" list** — the part people skip. Never makes a commitment on someone's behalf; never settles disagreements between people (those escalate to the owner).
- **Put permissions and data handling in the don'ts** — never carries information from a private space into a shared one, never discusses one customer in another customer's space, never speaks for one person to another.
- **Start narrow on capability**: reading and drafting first; expand as it earns validated trust.

**Decision 2 — Where it lives.** Three options, simplest to most involved:
1. **Shared folder with existing tools.** Instructions (and rules for storing new information) in a shared folder; each person points their own tool at it. Naive, but a good stepping stone if the team already uses agentic tools that can read folders.
2. **Vendor ready-made agent.** The vendor hosts, you configure — Claude in Slack ("CloudTag"), OpenAI's ChatGPT workspace agent, Copilot, Notion, and a growing list of shared spaces with agents.
3. **Self-hosted.** An open-source agent (OpenClaw, Hermes) on your own servers or cloud, or a custom harness. Most freedom, most technical demand.

Two questions come attached to this choice:
- **Who can see each person's conversation with the agent?** Vendor-dependent and sometimes configurable. In Claude in Slack, everyone in the channel sees what the agent does and can steer it; in many other tools chats are private.
- **What it learns, and who can read it?** An ideal agent isn't frozen — it has memory and learns on the go. So: does learning accumulate per person, per channel/team, or across the whole workspace (the agent evolving "in public")? Check, choose, and **tell the team before the first real task** — this is where trust is won or lost.
- **Rule of thumb:** pick the simplest option two people will actually use *this week*. For the customer agent, that's a channel agent or simple tool agent — if people must learn how to connect to something instead of walking into a Slack or Teams channel, it won't work.

**Decision 3 — What it knows** (argued to be the most important).
- The recipe is familiar from private agents, but **this is the moment the team agrees on ground truth**: how work actually gets done, which definitions are used, which version of the pricing policy is real. Gaspar says that conversation is worth having *even if you never ship the agent*.
- Shared knowledge is also what makes team agents harder: more contributors, more contradictions, more places for something important to fall through. The *process* around knowledge matters more than it ever did.
- Four stages:
  - **Collect** — interview the people who hold the knowledge, harvest what's already written across channels, and let AI do the heavy lifting of aggregation. In the example, sales, solutions, success, and delivery each contribute their piece.
  - **Refine** — merge sources, surface contradictions (expect five versions of the truth), date everything, and strip what should never be shared: passwords, notes about people, one customer's details in another's space.
  - **Approve** — each piece signed off by whoever owns it; the agent's owner assembles the whole.
  - **Maintain** — decide what the agent may add to its own memory from working experience, and what a human must review first, so one person's definition of "last year" doesn't quietly become everyone's. Put upkeep on a schedule: the agent proposes updates, a person reviews and approves.
- Be disciplined here. Unlike a private agent you can quickly fix, a poorly educated team agent "can create a lot of havoc in your company."

**Decision 4 — What it can touch.** Your own agent acts *as you*; a team agent acts *for many people*. Four team-specific rules (standard least-privilege and human approval for irreversible actions still apply):
- **Whose access does it use?** Three options — (a) *act as the asker*, so it only sees what that person can see: safest, often hardest to implement unless the vendor did it, and the right call when access levels differ; (b) *its own account* with exactly the access the job needs: right when the whole team works on the same shared material; (c) *one person's login*: only ever for read-only, non-sensitive material, because everyone who talks to the agent effectively inherits that person's access — not recommended. The example customer agent acts as the asker, since sales, success, and delivery see different things in the CRM.
- **Who can ask it?** When the agent has its own account, anyone who can talk to it uses that account. Put an agent with pricing-sheet access in a 40-person channel that includes contractors, and all 40 can now get pricing by asking. The agent knows more than some people who can reach it — so gate *who can ask* with the same care as *what it can see*.
- **Where does the answer land?** This runs the other way: the agent uses the asker's access and the asker is entitled to the answer, but the answer surfaces in a shared space in front of people who aren't. Gaspar notes Claude in Slack can use the asker's own connectors inside a team channel after approval, and that Anthropic's documentation currently notes it doesn't account for who else is in the channel. If it's sensitive, the answer must go to the asker privately.
- **Log who asked for what.** When an agent works under its own account, logs only say "the agent did it." Capture the requesting person so behaviour can be traced back.

**Decision 5 — How you run it.** The operating manual that determines whether the agent survives past week one:
- **One owner** — one person (or a very small group) owning priorities and maintenance, deciding when two people ask for opposite things, and setting standing instructions and knowledge/feature evolution. Anyone can hand it work.
- **Clear rules of engagement** — publish what it does and doesn't do, what it can see, who can see conversations with it, and how to correct it when it's wrong. Trust tracks with people understanding what it's learning and how.
- **Put decisions where it can see them** — a team agent only knows what's written somewhere it can reach. Decisions made in private messages and hallway conversations never reach it, so wire in the team's real-time decisions and day-to-day activity.
- **Keep watching** — start with a small pilot group, keep a set of test questions to re-run whenever anything changes (new model, tool, knowledge, or instructions), and monitor continuously. Retire the agent if it isn't behaving as expected.

### 7. Build now or wait for the vendors? (closing discussion)

- Whittemore raises the obvious objection: why invest before OpenAI, Anthropic, Microsoft Copilot, or Grokbot ship a native version — Claude in Slack being the clearest signal they're thinking this way.
- Gaspar's answer: **the heavy lifting is always configuration and knowledge curation.** Pick the tool closest to your existing ecosystem and work out everything else; when better tools arrive you're ready, because you've already agreed on ground truth, do's and don'ts, and use cases. Even a naive first implementation is future-proofing.
- On building your *own* harness or a competing product: possible if you have the skills and justification, but she wouldn't spend energy there now, given these capabilities are clearly coming and will be made accessible and smart. **Your moat is in what those companies cannot tap into** — your own knowledge and standards.
- Prediction for the rest of the year: more formalisation of exactly these practices, more tooling around identity, permissions, and ownership, and more practitioners publishing their learnings.

## Key Concepts

- **Team agent** — One agent many people talk to, with shared knowledge, shared memory, and a single shared configuration and owner.
- **Multiplayer AI / shared agents / AI teammates / company brain** — Interchangeable industry names for the same idea; the speaker standardises on "team agent."
- **Agent sprawl** — The state where many overlapping personal agents each hold a slightly different picture of the company and die with their owner's interest or departure.
- **The sharing dial** — A three-setting spectrum: private agent → shared knowledge and skills with private agents → full team agent.
- **Skill library** — A maintained collection of task-specific playbooks; standardises *how* work is done and is an ingredient of, not a substitute for, a team agent.
- **Expert agent** — Archetype that externalises one person's or small team's know-how so the organisation isn't blocked on them.
- **Common work agent** — Archetype that consolidates several people's duplicate agents for the same recurring work into one agreed standard.
- **Bridge agent** — Archetype covering work that flows between roles, where handoffs break and permissions differ by participant.
- **Chief of staff agent** — Archetype that operationalises a team's day-to-day: decisions, commitments, status, onboarding.
- **Ground truth** — The team's agreed single version of definitions, process, and policy; the thing the knowledge stage forces you to settle.
- **Team don'ts list** — Explicit prohibitions for a shared agent (no commitments on others' behalf, no settling disputes, no moving data between private and shared spaces).
- **Act as the asker** — Permission model where the agent sees only what the requesting person can see; safest when access levels vary.
- **Agent service account** — The agent holding its own credentials with exactly the access its job needs; appropriate when the whole team shares the same material.
- **Shared login** — Running the agent on one person's credentials, which grants that person's access to everyone who can reach it; acceptable only for read-only, non-sensitive data.
- **Answer placement** — The design choice of whether a response lands privately with the asker or in a shared channel visible to people without that access.
- **Attributable logging** — Recording which human asked for what, so actions taken under an agent's own account remain traceable.
- **Agent drift** — Degradation of a shared agent's knowledge when no one owns and maintains it.
- **Rules of engagement** — The published contract telling a team what the agent does, what it sees, who sees their conversations, and how to correct it.
- **Regression test questions** — A fixed set of prompts re-run after any model, tool, knowledge, or instruction change to confirm behaviour.
- **Multiplayer AI sprint** — A free, four-week self-directed team programme covering the decisions in this talk in greater depth.
- **Tools referenced** — OpenClaw and Hermes (open-source, self-hostable harnesses); Claude in Slack (vendor-hosted shared agent); ChatGPT workspace agents; Microsoft Copilot; Notion shared spaces; Muse, Grokbot, and Instinct (consumer/personal agent platforms, out of scope).

## Summary

Gaspar's argument is that the solo agent has already delivered its productivity win, and the next gain lies in the work that happens between people — which no private agent can reach. The move from personal agents to team agents is not primarily a technical upgrade but an organisational one: deciding which agents should stay private (where taste and voice are the point), which should merely share a common knowledge base and skill library, and which should become a single owned agent that a whole team works with. Where a team agent is warranted, its archetype — expert, common work, bridge, or chief of staff — tells you what to get right, and three signals (irreconcilable taste, no one willing to own the knowledge, net added complexity) tell you to wait. Building one well comes down to five deliberate decisions: what it does, where it lives, what it knows, what it can touch, and how you run it — with knowledge curation the most important, because sharing knowledge forces the team to agree on ground truth and multiplies the ways contradictions can creep in, and with permissions the most dangerous, because an agent acting for many people can leak through who can ask it and where its answers land as easily as through what it can see. Gaspar closes by arguing these conclusions are orthogonal to any particular product: the vendors will keep shipping features for identity, permissions, and ownership, but the configuration, the knowledge, and the team standards are the durable work — and the organisation's real moat.
