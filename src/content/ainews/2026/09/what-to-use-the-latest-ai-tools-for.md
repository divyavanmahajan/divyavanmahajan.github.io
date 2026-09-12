---
title: What to Use the Latest AI Tools For
description: >-
  The talk is an episode of The AI Daily Brief, a daily podcast and video about
  the most important news and discussions in AI. The speaker is not named
  anywhere in the transcript, so this document attributes all first-person
  commentary to "the host."
pubDate: 2026-09-11T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/169270265'
draft: false
---
## Overview

The talk is an episode of **The AI Daily Brief**, a daily podcast and video about the most important news and discussions in AI. The speaker is not named anywhere in the transcript, so this document attributes all first-person commentary to "the host."

**Source link:** not available for this episode. The `URL` field was empty in the source metadata, and per this repository's pipeline the audio originates from Patreon rather than YouTube. The local source identifier is `2026-09-11-what-to-use-the-latest-ai-tools-for`.

**Central thesis.** The week produced so many AI model and product releases that the host split coverage into two episodes. The argument framing this second batch is that a product release carries two separate kinds of value: *what you can do with it now*, and *what it signals about where everyone is headed soon*. Two forward-looking trends are named explicitly in the cold open:

- Human–computer interaction is migrating to **voice**. It will not happen all at once, but with capable live-voice models now exposed to developers — better speaker separation, better noise handling — voice-based applications will proliferate.
- Model deployment is moving toward **complex, cost-tiered architectures**, where teams optimize for "good enough capability at low cost" rather than always reaching for maximum capability.

The episode has two parts: a Headlines Edition covering industry news, and a main segment walking through eight or nine recent launches with a consistent triad — what the launch is, who should consider using it, and what they should use it for.

## Prerequisites

- **LLM API economics**: input/output token pricing, per-minute audio pricing, and why cost-per-task drives model selection.
- **Model distillation**: training a smaller model on a larger model's outputs or reasoning traces, and why labs treat it as misuse of their services.
- **Coding agents and agentic workflows**: familiarity with tools like Devin, Cursor, Claude Code, and OpenAI Codex, and with turn-based chat as the incumbent interaction pattern.
- **Context windows and compaction**: why long agent sessions historically required handing off context between fresh instances.
- **Sub-agents and orchestration**: a coordinator process that plans and delegates rather than doing the work itself.
- **MCP (Model Context Protocol) and data connectors**: how models are wired to external tools and proprietary data.
- **AI benchmarks as a comparison device**: the talk cites SWE-bench-style coding benchmarks ("DeepSwee" as heard), Frontier Code 1.1, Terminal Bench 4.0, and Artificial Analysis's Intelligence Index. The host notes Terminal Bench 4.0 is "so far much like benchmaxable."
- **Data center capacity measured in gigawatts**, and hyperscaler CapEx cycles.
- **Antitrust basics**: mergers versus non-exclusive licensing deals, and FTC/DOJ review triggers.

Note on names: the transcript shows ASR noise. Product and person names below are rendered as heard, not corrected against outside knowledge.

## Main Points

### 1. Anthropic published a report on detecting and countering AI misuse

- Anthropic said it disrupted major **distillation attacks** from Alibaba, DeepSeek, and Xiaomi, each using networks of fraudulent accounts to extract reasoning traces from Anthropic models for use as training data.
- Anthropic also claimed it detected DeepSeek and Moonshot (Kimi K3) **routing their own users' requests to Claude** and serving back the responses. Per the report, over one 10-day period Moonshot relayed almost 300,000 customer requests, the vast majority routed to Opus. The host reads this as query collection for a distillation pipeline rather than model spoofing; Anthropic notes it exposed sensitive Chinese government and corporate user information on multiple occasions.
- A **biology case**: in May, a classifier blocked work on a grant application proposing gain-of-function research on Chikungunya — identifying enhancing mutations, engineering them into infectious clones, and selecting for virulence in vivo. Anthropic acknowledged possible vaccine-development applications but was concerned because the work was to be conducted at a military research institute. The sponsoring nation was not identified; prompts continued through gray-market resellers after the researchers were banned.
- Other blocked cases: Russian actors using Claude for espionage and propaganda; Chinese, Russian, and Yemeni actors seeking software for conventional weaponry; assorted cyber attacks and financial scams.
- Anthropic framed the selection deliberately: these "aren't typical misuse" but the "most notable and novel threat activity" identified to date, published as a disclosure responsibility. The report covered misuse of Haiku, Sonnet, and Opus, with only a single distillation case touching Fable and Mythos.
- All claims in this section are Anthropic's, as relayed by the host.

### 2. Slowdown signals are accumulating across the frontier labs

- In an all-hands meeting, **Sam Altman told staff he is open to pacing OpenAI's model development**, though likely only in coordination with other labs — and expressed doubt all rivals would agree. The host frames this as the first time Altman has indicated willingness to slow down.
- Context: many OpenAI staffers signed the **"Pacing the Frontier" open letter** in July; chief scientist Jacob Pachocki recently warned that recursive self-improvement strengthens the case for a slowdown and wrote that he hopes "voluntary slowdowns" become commonplace until shared safety bars exist. Altman, unlike Dario Amodei at Anthropic, had not signed the letter.
- On Tuesday, commenting on OpenAI solving a Millennium Prize problem, Altman wrote: "The world has extremely capable models now. I did not expect a result of this magnitude to happen so soon… For me, this is the strongest evidence yet of the urgency."
- Combined with AI safety researcher **Paul Christiano joining OpenAI's board**, the host suggests a coordinated industry slowdown is becoming more likely.

### 3. OpenAI hit a compute wall and paused its top-end subscription

- Shortly after the release of **GPT-6 Astra**, product leader Thibaut Sautiau described demand as "really unprecedented," warning new Pro subscriptions might have to pause. Altman reposted: "this would suck, but we will prioritize great service for customers."
- By Thursday the levers ran out: OpenAI **paused new subscriptions to the $200 Pro plan**, described as the heaviest strain on their systems and "the smallest step" preserving broad access. Other plans and the API remain available; existing accounts are unaffected.
- The host notes this was predicted when Anthropic had similar capacity trouble — the problem was always going to reach everyone.
- Reactions cited: Matt Schumer — "The era of subsidized tokens is ending. Prepare accordingly." Alex Barish predicts the $200 plan will not return, expecting a "right size fit" post describing a split between users who would have been better served by a $100 plan and a small cohort constantly maxing limits.

### 4. Microsoft plans to roughly triple data center capacity

- Per Bloomberg sources, Microsoft now targets **38 gigawatts of global capacity by 2032, up from ~12 GW today**.
- Only ~2 GW of the current fleet is dedicated to AI compute; the new plan aims to raise AI's share to a third of total capacity, and to add **CPUs to power agentic workflows**.
- Microsoft has been the most conservative hyperscaler — it scaled back plans in early 2025, canceling large-scale leases and contributing to a market pullback — but has since repeatedly said compute constraints limit growth and force it to turn away customers.
- The host's reading: AI infrastructure is nowhere near overbuilt, and build-out leaders expect at least five more years of elevated CapEx before demand is met.

### 5. NVIDIA reaffirms 70% growth, constrained only by supply

- At a Goldman Sachs conference, Jensen Huang said growth is limited only by the supply chain: "Even though our demand is much greater than 70%, our supply allows us to confidently deliver 70%." The host notes this is the first time in a year Huang has discussed forward estimates, suggesting added confidence.
- Huang argued investors misunderstand the product: "Most people think NVIDIA builds a chip… you need airplanes to ship what we build. One GPU now is not $399. It's $8.5 million… all connected with NVLink, 2 million parts… 250,000 kilowatts. That's a GPU, and we ship thousands of them."
- Orders for rack-scale systems are reportedly growing **27% month over month**.
- Core message: NVIDIA remains at the center of the build-out despite recurring competitive headlines.

### 6. DOJ is investigating NVIDIA's $20 billion Grok deal

- The deal, announced in December by chipmaking startup Grok, was framed as a **non-exclusive licensing agreement** giving NVIDIA access to Grok's technology; CEO John Ross and COO Sunny Madra also joined NVIDIA.
- Per the New York Times, DOJ has been investigating since shortly after announcement, probing whether the structure was designed to circumvent antitrust law.
- The deal is one of many "not acquisitions": Google with Character AI and Windsurf, Meta with Scale AI. Structured as non-exclusive licensing, they avoid automatic FTC review and cannot be blocked like traditional M&A.
- In February, senators asked the FTC and DOJ to investigate, writing that such deals "function as de facto mergers, allowing the companies to consolidate talent, information, and resources," while bypassing normal merger scrutiny.
- The host's caveat: it is only an investigation, and nothing may come of it — but some such probe was inevitable.

### 7. Meta's personal agent Muse: modest consumer traction, strong Wall Street reaction

- Sensor Tower data: **83,000 downloads on launch day** in the US iOS App Store. For comparison, Threads hit 4.3 million on launch day and the Meta AI app reached 108,000. Still enough for second place in the App Store.
- The stock jumped **6% on release day** and largely held the gain; J.P. Morgan upgraded Meta to a buy, citing ~4 billion users as a scale-distribution advantage and "meaningful upside" as Meta moves into frontier models and AI products beyond advertising.

### 8. OpenAI released GPT Live 1 in the API — full-duplex voice

- This is the live voice model released in July (the "grandma's video" demo), now available to developers. It can **talk and listen at the same time**, without turn-taking.
- Architecture, described textually:

  ```
  user speech ──▶ live voice model ──▶ speech out (continuous, interruptible)
                        │
                        ├──▶ back-end reasoning model  (task runs in background)
                        └──▶ tool calls (robot, display, …)  — multiple, simultaneous
  ```
  Tasks are handed off to a back-end reasoning model so work completes while the conversation continues.

- Demonstrated capabilities: detecting voice with a basketball being dribbled a few feet away; controlling a robot and a display mid-conversation.
- Pricing: **5 cents per minute** for the audio model, plus standard API pricing for the back-end model.
- Thibaut: "You can now build on top of the same voice system that we shipped to a billion users in ChatGPT… Going back to text-only experiences after this feels harder than I had expected." Alex Finn describes building a DIY always-on voice device from cheap Amazon dev hardware — "basically ChatGPT's voice everywhere you go."
- **Who / what for (the host's view):** a strict upgrade for existing voice experiences — customer support leaders, contact centers, small service businesses losing missed calls. Beyond that: B2B sales and inbound marketing (let prospects talk through needs and get a relevant explanation *before* the demo-scheduling step), language learning and tutoring, and realistic practice or simulation of job interactions. The host argues the shift from typing to talking is already underway and generational, held back mainly by historically poor native recognition in tools like Siri.

### 9. Cognition's Devin Voice — voice as a first-class coding interface

- Pitch: "Your favorite AI software engineer just got a landline. You say it, Devin ships it." Built on OpenAI's GPT Live for the voice layer and Cognition's new **Sui 2** model on the back end.
- The host frames the gain as quality of life over turn-based voice: the ability to **interrupt, ramble, and self-correct** makes the interaction natural.
- Nader Dabit (Cognition): "90% of my day-to-day work is now done with my voice." OpenAI's Kova: "Voice is the most magical way to interact with AI."
- **Who / what for:** Devin users specifically — shift behavior from typing to talking. For everyone else, the host recommends native ChatGPT voice, or a tool like WhisperFlow on the desktop, used *intentionally*, to gain speed and to work while walking. His framing: the industry is pushing there anyway, so "you might as well go surf this new opportunity."

### 10. Cognition's Sui 2 — the rising bar for "good enough"

- Cognition's latest in-house coding model, replacing Sui 1.7. It is a **post-trained version of Kimi K3, optimized for coding and nothing else**.
- The host situates it in a pattern: Cognition and Cursor were both early to recognize an inflection point where, given sufficient capability and a growing volume of AI-executed tasks, optimizing for **efficiency** rather than pure capability would start to matter.
- Cited results: **50% on Frontier Code 1.1** — slightly ahead of GPT-5.6 Sol, just behind Fable 5.1 — at a **64% cost reduction**. It is cheaper than Sui 1.7, which was built on the smaller Kimi K2.7. **Effort levels** let users "turn down the juice" for cheaper usage.
- Strategic context: as Cursor becomes further integrated into SpaceX AI — with consequences such as OpenAI cutting off access to its models inside Cursor — Cognition has signaled it intends to stay independent, having raised **$2 billion at a $48 billion valuation**. The host's speculation: developers who prize independence and unconstrained model choice may migrate toward Cognition products.
- **Who / what for:** anyone already building a complete model stack that aligns capability with need in order to hold costs down.

### 11. DeepSeek V4.1 Flash — frontier-adjacent coding at the bottom of the market

- **552 billion parameters**, described in the transcript as "designed for high latency work."
- Benchmarks as cited: **74.2 on DeepSwee**, in line with GPT-5.60 and Opus 5. On Terminal Bench 4.0 — which the host flags as benchmaxable — **31.2%**, versus 39.9% for Sol and 74% for Opus.
- Pricing at the bottom of the market: **$0.30 per million input tokens, $1.20 per million output tokens**.
- Artificial Analysis found Flash **outperforms DeepSeek's full-size Pro model** on the Intelligence Index at a quarter of the cost. On their new v4.3 index, the top score is 53 (Fable 5.1 and GPT-6 Astra); DeepSeek 4.1 scores 40 — roughly level with GPT-5.6 Luna and Gemini 3.8 Flash.
- **Who / what for:** teams building a holistic, tiered architecture — especially those with basic but highly recurring, compute-intensive tasks.

### 12. OpenAI's Small Business Plugin Collection

- Not technically complex: OpenAI bundled useful plugins into a pack for small businesses — Dropbox, HubSpot, Canva, Figma, Shopify, DocuSign, PayPal, QuickBooks, Stripe, Gusto, Slack, Wix, Mercury, and others.
- The point is accessibility: putting the relevant integrations in one place for small business owners already in ChatGPT.
- On why plugins are different this time, Abdul Wasi (responding to Greg Brockman): "Plugins v1 died because they were API wrappers behind a chat box. This time, the agent can run the whole workflow." His caveat: **distribution remains unsolved** — "SMB owners don't browse plugin directories." The host's counter is that collecting them addresses exactly that.
- **Who / what for:** small business owners and very small teams already using these apps; the native integrations may be a significant upgrade over their current workflow.

### 13. ChatGPT for Finance, updated for GPT-6 Astra

- A bundle of data connectors and skills for financial professionals, now living inside **ChatGPT Work** and refreshed for OpenAI's new lineup.
- Includes built-in access to premium data feeds — **Dilupa, PitchBook, LSEG News, Crunchbase** — so users need not configure MCP connections themselves. It inherits ChatGPT's enterprise security and governance controls for organization-level data access.
- Designed with **Morgan Stanley and Evercore**, for building financial models, developing research, and producing client materials. VP of Product Nick Turley described the goal as "teaching ChatGPT to research like an analyst and back up its conclusions like an analyst as well." It runs on GPT-6 Astra natively and will track new models.
- OpenAI's Ryan Brewer cites a custom charting experience, better citations, and an SEC filing viewer. Sundeep Srivastava: "It's not a general chatbot with a finance skin. It's aimed squarely at what junior investment bankers spend their weeks doing" — company research and equity analysis, LBO modeling and buyer screening, pitch books and client decks in the firm's own templates.
- **The host's own position on displacement:** this is a power tool for junior bankers, not a replacement. Senior bankers are unlikely to build their own models and decks even if agents can, because accountability and iteration remain. Supporting evidence he cites: UBS has begun requiring prospective junior bankers to demonstrate AI proficiency as a hiring requirement.

### 14. OpenAI's data agent for ChatGPT Work

- Built for proprietary organizational data, with connections to **Amazon Redshift, Datadog, Google BigQuery, ClickHouse, Databricks, MongoDB, and Snowflake**.
- OpenAI's example use: ingest sales data and generate insights on core metrics such as conversion and retention — realizing "talk to your data" and real analysis without additional tools.
- Souther Jones, chief product officer at Tableau: connecting Tableau with ChatGPT Work "brings trusted business semantics into a place employees already work," so answers are grounded in the same data model teams rely on, and insights can be published back to Tableau as new views.
- **The host's synthesis across all four OpenAI releases:** they converge on honing in on specific business user types, connecting the tools and context those users need, and thereby making it easier and more inviting to move more workflows into ChatGPT — i.e. **verticalization** that understands how very specific kinds of people work.
- The trend is not OpenAI-only: Grokbot announced native integrations with Salesforce, HubSpot, Gong, Clay, Granola, and other go-to-market tools, making it more powerful for sales teams.

### 15. Projects in Cursor — from chat sessions to a persistent coordinator

- Unlike projects in ChatGPT or Claude, this is not just a place to accumulate context. It also houses **scheduled tasks, long-running agents, and orchestration** — "projects aren't just a folder, they are an actual project architecture."
- Topology, described textually:

  ```
  ┌─ one coordinator thread, open for the life of the project ─┐
  │   plans · delegates · receives results · checks them       │
  └───────┬───────────────┬───────────────┬────────────────────┘
          ▼               ▼               ▼
      sub-agent       sub-agent       sub-agent      (write the code)
          ▲
     proactive triggers (e.g. "after a PR opens, run the standard workflow")
  ```
  The coordinator does not write code. Once a standard post-PR workflow is established, the project can carry it out automatically on the next trigger.

- Cursor's framing in the launch video: "It's graduated from turn-based chat. Instead of you micromanaging every agent, you're working with a much more autonomous colleague." Reported results: testers **merged six times as many PRs**, with **merge rates up 30%**.
- Prasenjit Sarkar's read: the important shift is "the move from chat per task to persistent coordinator," not the raw sub-agent count. Prior coding agents all worked the same way — open session, describe task, agent executes, session ends; Cursor projects inverts that. He grants the architecture isn't unique (Devin, OpenAI Codex, others) but argues the persistent thread and proactive trigger system are different.
- **Who / what for:** developers first, but the host argues the *pattern* deserves attention from non-developer knowledge workers too.

### 16. The context-window problem has quietly receded — mono-threads

- The host notes many earlier build projects required handing context between fresh instances of tools like Claude Code once a context window filled. "That has changed a lot in 2026."
- The same commenter's account of what changed: in Q4 2025 he led a push to teach engineers advanced context engineering for Claude Code; by March–April they switched to Codex in large numbers. With 5.4 and especially 5.5, it solved problems other tools could not — "but my favorite was how good it was at compaction. Instead of all the fancy sub-agent tricks and intentional compaction, you could just keep going and going." He reports one thread that built a whole sync protocol, server, and client across multiple repos and languages, and deployed them. "Mono threads are a common topic now, but I'm still surprised by how much you can do in one thread without any issues."
- The host confirms from his own use in both Claude and Codex: everything related to the AI Daily Brief website sits in one long-running thread that has done a great deal of work without hitting context issues.
- The closing generalization: sometimes a launch matters less for whether you will use that specific feature, and more for what it says about where things are headed.

## Key Concepts

- **Distillation attack** — Extracting a model's outputs or reasoning traces, often via fraudulent accounts, to use as training data for a competing model.
- **Request relaying** — A provider routing its own users' queries to a rival's model and serving back the responses; per Anthropic, used here to gather realistic user queries for a distillation pipeline.
- **Gain-of-function research** — Deliberately engineering enhancing mutations into a pathogen and selecting for increased virulence; the Chikungunya grant application Anthropic blocked.
- **Pacing the Frontier** — A July open letter, signed by many OpenAI staffers and by Dario Amodei but not Altman, advocating a slower pace of frontier AI development.
- **Recursive self-improvement** — AI systems improving themselves; cited by Jacob Pachocki as strengthening the case for a slowdown.
- **Voluntary slowdown** — Lab-initiated pacing of model development, ideally industry-coordinated, until shared safety bars exist.
- **Compute wall** — The point where demand exceeds serving capacity, forcing measures like OpenAI's pause on new $200 Pro subscriptions.
- **Subsidized tokens** — Inference priced below cost to drive adoption; Matt Schumer's claim is that this era is ending.
- **"Not acquisition" / de facto merger** — A non-exclusive licensing deal plus talent transfer that achieves consolidation without triggering automatic merger review.
- **GPT Live 1** — OpenAI's full-duplex live voice model, now in the API at 5¢/minute for audio plus back-end model pricing.
- **Full duplex** — Talking and listening simultaneously, with no turn-taking; enables interruption and self-correction mid-utterance.
- **Back-end reasoning handoff** — The voice model dispatching a task to a reasoning model that works in the background while the conversation continues.
- **Devin Voice** — Cognition's voice interface for its AI software engineer, built on GPT Live with Sui 2 on the back end.
- **Sui 2** — Cognition's in-house coding model, a coding-only post-train of Kimi K3; near-frontier coding performance at 64% lower cost than comparable models.
- **Effort levels** — A user-selectable dial trading reasoning depth for cost within a single model.
- **"Good enough" optimization** — Selecting models for adequate capability at low cost rather than maximum capability; the rising bar for "good enough" is the episode's second named trend.
- **DeepSeek V4.1 Flash** — A 552B-parameter model priced at $0.30/$1.20 per million input/output tokens, reportedly beating DeepSeek's own Pro model on the Intelligence Index at a quarter the cost.
- **Benchmaxable** — A benchmark susceptible to being optimized against directly, weakening it as a capability signal; the host's caveat on Terminal Bench 4.0.
- **Verticalization** — Building products around how a specific profession actually works — its tools, data, and deliverables — rather than shipping a general assistant.
- **ChatGPT Work** — The enterprise surface hosting ChatGPT for Finance and the data agent, with organization-level security and governance controls.
- **Cursor Projects** — A persistent project architecture holding context, scheduled tasks, long-running agents, and orchestration, rather than a per-task chat session.
- **Persistent coordinator** — A long-lived thread that plans, delegates to sub-agents, and checks results without writing code itself.
- **Proactive trigger** — An event (such as opening a PR) that causes a project to execute an established workflow without a new prompt.
- **Compaction** — Automatic summarization of a long agent thread's history to keep it working past nominal context limits.
- **Mono-thread** — Running an entire large project in a single agent thread, viable now that compaction has improved enough to displace sub-agent and manual-compaction tricks.

## Summary

The host's argument is that even while the AI risk conversation has moved into the mainstream — with Anthropic disclosing distillation, espionage, and bioweapon-adjacent misuse attempts, Altman signaling openness to a coordinated slowdown, and Paul Christiano joining OpenAI's board — a parallel stream of releases nobody considers dangerous keeps opening immediate practical opportunities. Walking through roughly nine of them, he draws out two structural shifts. First, voice is becoming a primary interface: full-duplex models like GPT Live handle interruption, noise, and simultaneous tool use well enough that products such as Devin Voice make talking, not typing, the default, and he urges listeners to deliberately move their own work toward voice now rather than later. Second, capability is no longer the only axis of competition: Sui 2 and DeepSeek V4.1 Flash show that near-frontier performance is available at a fraction of frontier cost, which rewards teams that build tiered model architectures aligning capability to need — a pressure sharpened by genuine scarcity, as OpenAI pauses Pro subscriptions, Microsoft triples planned capacity toward 38 GW, and NVIDIA sells 70% more than last year only because supply permits no more. Running underneath both is verticalization: OpenAI's finance, small-business, and data-agent releases, along with Grokbot's go-to-market integrations, compete on knowing exactly how a specific professional works and wiring up their tools and context, which he reads as augmenting roles like the junior banker rather than removing them. His closing point is the one he opened with — a release is worth watching not only for what you can build with it, but for what it reveals about where everyone is about to be.
