---
title: How the Most AI-Pilled Company in the World Works
description: >-
  This episode of The AI Daily Brief examines what it actually looks like to run
  a company where autonomous agents perform nearly all operational work, leaving
  humans only long-term vision, taste, and direction. The occasion is a blog
  post by Jacob ...
pubDate: 2026-10-30T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/173888400'
draft: false
---
# 2026-10-30 — How the Most AI-Pilled Company in the World Works

## Overview

This episode of **The AI Daily Brief** examines what it actually looks like to run a company where autonomous agents perform nearly all operational work, leaving humans only long-term vision, taste, and direction. The occasion is a blog post by **Jacob Sandbury**, founder of the gaming startup **Spawn**, titled *"How I Built the Most AI-Pilled Company in the World,"* which documents two years of trial and error building an agent-first startup. The host — who identifies himself only by affiliation, as working on **AIDB (the AI Daily Brief)** and **Super Intelligent** — walks through Sandbury's playbook and then extracts the principles he believes generalise to other companies.

The central thesis: most organisations are using AI to do existing work faster inside an org structure that would still be recognisable 20 years ago. Spawn instead discarded the structural assumptions of software development — pull requests, inter-team communication, human bug triage, human approval gates — because those systems exist to coordinate *humans*, and they become bottlenecks when the workers are agents. The claim that matters beyond gaming is Sandbury's closing one: with the right structure, every new frontier model makes the whole company significantly better, which is "very hard to catch up with."

**Structure.** The episode has two segments: a ~5-minute *Headlines Edition* covering five unrelated news items, then the main episode on Spawn. The title and thesis belong to the main episode.

**Source link.** No source URL was supplied with this transcript. The AI Daily Brief episode of 2026-10-30 is distributed via Patreon; the underlying primary source discussed is Jacob Sandbury's own blog post, *"How I Built the Most AI-Pilled Company in the World."*

## Prerequisites

- **Agentic AI basics** — the distinction between a chatbot, a single-shot coding assistant, and a persistent autonomous agent that holds a goal, system access, and memory across sessions.
- **Software delivery practice** — pull requests, code review, CI test suites, continuous deployment, production outages, reverts, and observability. The episode's core argument is that specific practices here are human-coordination artefacts.
- **Frontier model landscape** — that Anthropic, OpenAI, Google, and xAI ship competing models with different behavioural profiles, and that model releases can discontinuously change what a system can do.
- **Startup and capital-markets vocabulary** — tokens-as-cost-of-goods, payroll vs. compute spend, cash flow, hyperscaler capex, Chapter 11, letters of intent.
- **Law-firm economics** (for the headlines segment) — that partner "rainmakers" carry the client relationships, so a firm's equity value is near zero once they leave.
- **Reinforcement-learning training data** — why proprietary workflow and precedent archives are valuable for training agents on specialised professional work.

## Main Points

### 1. Headlines: an AI law firm bids for a collapsed Wall Street giant

- The 95-year-old firm **Weil, Gotshal & Manges** filed for Chapter 11. The *New York Times* attributed the collapse to an exodus of high-profile lawyers, a failed succession plan, and a scuttled merger — **not** to AI disruption.
- Legal AI startup **Crosby** (~$400M valuation, ~50 lawyers, backed by Sequoia, Bain Capital, Lux Capital, Index Ventures) submitted a letter of intent for some Weil assets: the trademark and brand plus internal data, with hopes of hiring some of Weil's 1,200 lawyers.
- The asset is not client records (selling those would be illegal) but the archive of **precedent documents, contract templates, and workflows** encoding institutional knowledge in large-corporate bankruptcy work. Harneet K., a lawyer building AI tools for distressed credit, called it "a seminal buy" and "exceptionally valuable … in RL training," noting Google recently bid $10M for Spirit Airlines' far less specialised operational data.
- Dissent: Ryan Walker, CEO of GenLegal, said "the data belongs to the clients and is not acquirable. The talent who does the work has already left." Crosby is unusual in operating as an AI-enhanced law firm with its own clients rather than selling tools to other firms — so the bid is a bet on the agentic firm itself.

### 2. Headlines: AI revenue is surging while legacy businesses subsidise the build-out

- **AWS** grew 39% annualised — its fastest cloud growth in nearly five years — but Amazon's overall revenue grew 12% with $20.7B net income, missing forecasts. Stock fell 6% after hours.
- **Intel** posted 78% data-center growth and in-line 21% overall revenue, but forecast a growth slowdown and worsening margins on weak consumer demand. Stock fell 23%. Its foundry division grew 58% while losing $1.9B for the quarter.
- **Google** dropped 12%, losing half a trillion in market cap; the Nasdaq fell 1.4%. Amazon is cash-flow negative by $42.4B over the trailing 12 months.
- The common pattern: AI revenues are red hot but still too small to fund their own build-out, so legacy businesses carry the capex. Andy Jassy projected AWS growth "north of 40% in each of 2027 and 2028" and a trillion-dollar revenue business within 5–10 years. Analyst Andreas Steno Larsen: "Mag 7s are not budging. They keep spending despite markets disliking it. One of the fiercest battles between capital market investors and executives of the tech companies I can recall." The host's caveat: the bubble-burst narrative is not in the financial reports, but will be written into them if stocks keep sliding.

### 3. Headlines: Grok logs, Granola dictation, and the Jensen Huang espionage report

- Representatives **Raskin and Garcia** (ranking members of House Judiciary and Oversight) demanded preservation of President Trump's Grok chatbot logs as US property, following a *Time* profile reporting he consulted Grok on the implications of forcibly removing Venezuelan President Maduro. They called introducing a "highly manipulatable and demonstrably error-prone" technology into foreign-policy decisions "deeply troubling." The White House said it "preserves all required records in accordance with the law."
- **Granola** launched free, unlimited dictation that types for the user in any app — Mac now, iOS and Windows coming. The host, a long-standing advocate of voice input, says he now almost exclusively talks to AI rather than typing.
- The *New York Times* reported that NVIDIA CEO **Jensen Huang** was the target of Chinese intelligence via an executive at Singapore-based data-center firm **Megaspeed**, who was under US surveillance on suspicion of diverting AI chips to China. Trump reportedly took no action after the briefing, and Huang received no defensive briefing. NVIDIA said customers like Megaspeed "receive ordinary business information, not sensitive NVIDIA trade secrets," and that diversion claims were "thoroughly investigated and debunked last year." Megaspeed retained outside counsel and said it "cannot respond to a media trial."

### 4. What Spawn is, and why the product is almost beside the point

- **Spawn** is a massively multiplayer game creation platform — Sandbury's framing: a creation engine where thousands of people can be inside one game, changing its rules, assets, and graphics in real time across a wide range of devices without lag. The host's analogy: metaverse × Lovable × Steam.
- Developer **Simon Willison**'s first-hand account: players prompt an in-game agent, **Savi**, to modify the world. He prompted a castle into existence, then a dragon, then rode the dragon around the castle — from his phone.
- The host explicitly brackets the product: the transferable artefact is the **playbook**, which applies to any company that ships code and probably many that don't.
- Scale of the operation: a **10-person human team**, **$3.1M spent on tokens last month — 30× payroll**, making Spawn one of Anthropic's largest customers; **77,000 code changes last month** (~108/hour); infrastructure of **5,000 CPUs, 17 TB RAM, and 150 GPUs on AWS**, with another 60% surge capacity on standby.

> Note on figures: the episode's cold open says "10 times the amount on compute and AI that you are on salaries"; the sourced body figure is 30× payroll. The 77,000/month and the later 7,000/day figures cover different periods — the AI judges came online 6 October.

### 5. The fleet: persistent agents with names, memory, and ownership

- Unlike the common pattern of spinning agents up and down per task, Spawn's agents — **"the fleet"** — are **persistent**. Each has its own name and identity, its own memory, and ownership of a function: a team maintaining the game engine, another hunting bugs, another handling finance. (The agents get Sundays off for downtime.)
- Every day the fleet spawns **thousands of helper agents** to do granular work. The human employees use a **modified version of Claude Code** for bigger-picture items needing hands-on steering.
- The fleet is also the product's runtime infrastructure: when one player changes the world via their personal agent, the fleet must produce a stable build that propagates to every player's device while keeping the world in sync. Functionally, **players are all working on a live codebase**, tied together by the fleet. Sandbury: "this is not a simple problem. And as far as we know, nothing else in the world is even a fraction of it."
- **None of it worked before Fable.** That model multiplied shippable changes by 500×, but required rebuilding operations around its capabilities. Sandbury's model comparison, verbatim: "OpenAI's models game their own checks, Google's models don't stay coherent for very long, and XAI's models just aren't smart enough yet, though they don't do anything cartoonishly bad. Anthropic's models stay coherent, make good decisions, and can do the work. In my opinion, the thing that holds them back most is that they won't take enough risk."
- Sandbury initially assumed he was using agents wrong, because his AI bills dwarfed what friends inside big tech were seeing. His conclusion: "Most companies run big human teams that use AI, and we run a small human team alongside a big team of agents." An Anthropic researcher he compared notes with told him Spawn is the customer that works most like Anthropic itself.

### 6. Problem one: agent-to-agent communication scales quadratically

- The first bottleneck was chatter. Agents spent most of their time telling each other what they were doing. Sandbury: "Most of the talking in engineering is people saying what they're about to change. … If every agent tells every other agent, the messages grow much faster than the work. Double the agents and you roughly quadruple the chatter."
- The diagnosis: **agents don't need the communication because they aren't specialised.** Human coordination exists because the database engineer and the front-end designer each hold only part of the system; an agent understands the whole system deeply, so the message has no purpose.
- Consequence: earlier in the year Spawn **killed pull requests** and had agents commit directly to the codebase. Changes are made with little concern about breaking things elsewhere.
- The safety net is detection and repair rather than prevention: if something breaks, an agent is spawned to triage and fix it; the fleet must **reconcile everything once an hour**; **test suites run every 15 minutes**. Of **123,000 changes made over the past year, only ~1,000 were reverted**.
- The trade-off is cost: this mode of operation is extremely resource-intensive (see the infrastructure footprint above).

### 7. Problem two: closing the loop so humans never relay bugs

- The second bottleneck was humans in the loop — agents waiting to be told what broke in production. Sandbury: "Many teams still run their agents privately on test machines with copies of the product and expect them to update it and ship it to customers. Then humans relay the faults and bugs back to the agents. That loop is a huge mess and a waste of time."
- Spawn's product is instead **designed to be operated and observed by agents**. Player agents detect bugs and file reports as they navigate the game world; those join feature requests and log anomalies in one intake.
- Described textually, the closed loop:

```
player's agent navigates world
        │  detects fault / files bug report
        ▼
intake  ──  feature requests  ──  log anomalies
        │
        ▼
small triage model  ──► malformed / not a real issue ──► discard or revise
        │  routes
        ▼
owning fleet agent  ──► commits directly to live codebase (no PR)
        │
        ├──► test suite  (every 15 min)
        └──► fleet-wide reconcile  (every hour)
```

- The result is effectively **self-healing software**: issues players hit are detected and fixed without human intervention. Sandbury's worked example — a fault was detected **8 minutes** after it affected a player, the cause named **a minute later**, the fix live **11 minutes** after that; the platform was then stable for four hours.
- Counter-intuitively, **speed is a stability property**, not a risk: because agents have memory and context limits, the system works better when it moves faster. "A system that moves steadily is much more stable than one that's frozen and suddenly moves again." Spawn treats **not shipping within an hour as an outage**. Getting to hourly deploys without disrupting users took sustained engineering discipline and keeping old systems online during transitions.

### 8. Problem three: the founder as bottleneck, and the AI judges

- By October, Sandbury's only remaining interaction with the fleet was **matters of taste** — should we add this feature, should we support this API surface. That worked at low volume until he woke up to **700 pending requests**: "the agents were finding questions faster than I could answer them."
- The insight: he had already made most of these calls hundreds of times, and Spawn had **two years of decision logs**. Those were formalised into a set of principles, and **AI judges** were trained to apply them.
- The judge's three-way branch, described textually:

```
agent raises a taste question
        ▼
   AI judge
        ├── prior human decision on the record
        │        └──► apply same outcome + audit trail citing the precedent
        ├── question doesn't make sense
        │        └──► kick back to the agent for revision
        └── genuinely novel situation
                 └──► escalate to a human team member
```

- First judges came online **6 October**; in their first eight days they made **over 11,000 decisions**: ~7,300 decided on human precedent, ~2,200 kicked back to agents, ~1,800 passed to a human. **Sandbury himself had to make the call 27 times.**
- Throughput effect: before the judges the fleet shipped ~**1,000 changes/day**; after they scaled up, over **7,000/day**. Human taste still governs the product, but at a scale the founder's calendar could never support.

### 9. What the humans do now: taste, deletion, and entropy

- Engineers have shifted from owning systems to being, in Sandbury's word, **"paratroopers"** — they drop into whatever situation needs them, get familiar fast, and work out how to unblock the agents. A year ago each engineer owned and deeply understood one system.
- **Job one is taste**: playing with the product and deciding what should change, rather than micromanaging development. Concretely, it means "telling Claude no even if something works."
- **Deletion is a large part of the work.** Each new model changes what the system can do and renders prior work redundant. In June, Sandbury scrapped six months of work covering 70% of the engine — it had perpetually felt "one commit away." He expects the fleet to absorb this duty eventually, but ripping out redundant platform chunks is currently human work.
- **Job two is managing entropy** — "asking the models for things they wouldn't have suggested on their own." Two kinds: *ambition* and *creative entropy*. Models are excellent at building the next 2% of the platform each week, but "really bad at recognizing that they've headed in the wrong direction for days at a time and need to take drastic steps to get back on track."
- "The models also won't ask for 100x on their own, so we do." Example prompts: *imagine if worlds could be actually unlimited*; *how do we make a world a thousand times the size of GTA load on a phone in one second?* The latter triggered the current build of Spawn — the first the team felt delivered on the original vision — and, per Sandbury, would never have happened if the agents were left to themselves.

### 10. Why Sandbury thinks this is hard to copy

- **You have to close the loop, and that means accepting risk**: "You have to be willing to let your agents break production." His argument is empirical — humans break production all the time, changes are the number one cause of outages, and humans make changes; agents cause problems far less often and usually fix them fast. Reverts help, but even unrevertable breakage gets fixed quickly **as long as the agent notices** — and whether it notices depends entirely on whether the loop is closed.
- **The second mistake is "shoving AI into human-shaped boxes."** Spawn's agents do work nobody can fully verify, such as customer support. "Sometimes they're a little bit wrong, but not that wrong, and they recover fast. When we take them off support, our customers get upset." Customers prefer an AI that answers immediately with the clearest information it has and can act on the problem over a human who promises to look into it and returns two days later. Spawn does not pass its AI off as human.
- **The compounding claim**: Fable made the system functional but left many problems; **Fable 5.1 fixed most of them**, and the team expects that pattern to continue. "With the right structure, every new model makes the whole company significantly better, and that's very hard to catch up with."
- **The host adds two further reasons** (his own analysis, not Sandbury's): first, a system this hard to build from scratch with the intent baked in seems ill-suited to retrofitting onto an existing one — he'd attempt it in a new division or product rather than an old section of the company. Second, he questions how much it depends on a product with an **inherently fast feedback loop**: the self-healing behaviour comes from real users' agents auto-reporting bugs, which most product categories don't naturally provide. His open question is whether agent-first operation *requires* that loop, and whether one can be engineered into products that lack a natural place for it.

### 11. The host's five transferable principles

- **Give agents ongoing responsibility** — put them in a perpetual system with real ownership, rather than spinning them up when a need arises.
- **Let the work carry the context** — more agents create more coordination overhead, so a shared, up-to-date record of what changed, who owns the next step, and what's unresolved substitutes for messaging.
- **Make the results observable** — new agents can only come up to speed in a system that predates them if they have visibility into what exists; observability becomes critical infrastructure.
- **Turn decisions into precedent** — decisions do double duty, resolving the issue at hand *and* building the canon that makes future issues cheaper to resolve. (This is the generalisation of Spawn's AI judges; the host notes a historical analogy to 11th-century Islamic jurisprudence.)
- **Keep human attention on direction** — and recognise specifically that **ambition and long-horizon views do not come naturally to agents**, an insight the host considers applicable well beyond Spawn.

## Key Concepts

- **AI-native / AI-pilled company** — an organisation structured around agents doing the work, with humans retained for vision and taste, rather than humans doing the work faster with AI assistance.
- **The fleet** — Spawn's persistent, named, memory-holding agents, each owning a company function (engine maintenance, bug hunting, finance) and holding real system access.
- **Helper agents** — the thousands of short-lived agents the fleet spawns daily to execute granular work.
- **Savi** — Spawn's in-game agent, which players prompt to modify the game world in real time.
- **Closing the loop** — wiring fault detection, triage, fix, and deploy so agents observe and repair production themselves, with no human relaying bugs back to them.
- **Self-healing software** — the property that follows from a closed loop: issues users encounter are detected and fixed automatically.
- **AI judges** — models trained on two years of formalised human decision logs that resolve taste questions by precedent, kick back malformed questions, and escalate genuinely novel ones.
- **Precedent and audit trail** — a judge's decision records the prior human decision it relied on, so scaled automated judgement stays traceable to human taste.
- **Paratrooper engineer** — the post-fleet human role: no owned system, drops into whatever needs unblocking and gets familiar fast.
- **Managing entropy** — deliberately asking models for things they wouldn't propose: *ambition* (100× goals) and *creative entropy* (direction changes models won't self-initiate).
- **Shipping cadence as an outage condition** — Spawn treats any hour without a shipped change as an outage, on the premise that steady motion is more stable than long freezes punctuated by large changes.
- **Agentic quadratic chatter** — the observation that if every agent announces changes to every other, message volume grows roughly as the square of agent count while useful work grows linearly.
- **RL training data (institutional archives)** — precedent documents, templates, and workflows historically valued at zero, now potentially worth tens of millions for training agents on specialised professional work.
- **Rainmaker equity problem** — the law-firm economics by which a firm has almost no standalone value once its fee-generating partners leave, making its data archive the residual asset.
- **Defensive briefing** — a warning US intelligence sometimes gives to the target of a foreign espionage operation; the NYT reported Huang did not receive one.

## Summary

The episode argues that the practices defining modern software organisations — pull requests, status communication, human bug triage, approval gates, review before merge — exist to coordinate humans with partial knowledge, and that they become pure overhead once the workers are agents that understand the whole system. Jacob Sandbury's two-year account of building Spawn is presented as the first detailed public playbook for removing them: persistent named agents owning real functions instead of task-scoped spin-ups; direct commits to a live codebase with hourly reconciles and 15-minute test suites instead of review gates; a product instrumented so players' agents file their own bug reports and the fleet repairs itself; and AI judges that encode two years of founder decisions as precedent so taste can scale past one person's calendar. The numbers that make the case — 77,000 changes a month, 123,000 changes a year with about 1,000 reverted, 30× more spent on tokens than payroll, a 10-person human team — come with a cost and a precondition: enormous compute, and a willingness to let agents break production, because detection and fast repair replace prevention. Sandbury's own view is that large companies will struggle to follow, both because closing the loop requires accepting that risk and because the common failure is forcing agents into human-shaped roles. The host adds that retrofitting this onto existing systems looks far harder than building it in from the start, and raises the open question of whether the model depends on a product with an unusually tight natural feedback loop. What he takes as durable regardless of scale: give agents standing responsibility, let shared records carry context instead of messages, invest in observability, convert decisions into precedent, and reserve human attention for ambition and long-horizon direction — the things models will not ask for on their own. Sandbury's closing claim is the strategic one: structured this way, every new model release makes the entire company better, and that compounding is very hard to catch up with.
