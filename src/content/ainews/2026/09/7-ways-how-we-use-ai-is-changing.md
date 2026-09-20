---
title: 7 Ways How We Use AI Is Changing
description: >-
  Source video: `2026-09-20-7-ways-how-we-use-ai-is-changing` — The AI Daily
  Brief (URL not provided in the source material).
pubDate: 2026-09-20T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/170055716'
draft: false
---
## Overview

**Source video:** `2026-09-20-7-ways-how-we-use-ai-is-changing` — *The AI Daily Brief* (URL not provided in the source material).

The speaker — the host of *The AI Daily Brief*, a daily podcast and video program covering AI news and discussion — argues that the way people interact with AI has never been static, and that a cluster of recent product announcements marks a set of shifts that are more fundamental and more durable than the buzzword churn they superficially resemble.

The framing device is a progression of roles the speaker says users have moved through: prompt engineers → context engineers → harness engineers → loop engineers. Rather than treating that sequence as marketing noise, the speaker's thesis is that these labels track a genuine collective process of working out how to use a new technology that is changing both how existing work gets done and what work is possible at all. The episode enumerates seven interaction-pattern shifts the speaker believes are likely to stick, on the grounds that a listener trying to spend attention efficiently should prioritise the changes that will persist.

## Prerequisites

- **Chatbot AI basics** — familiarity with ChatGPT-style conversational AI and how prompting works.
- **Context windows and compaction** — the idea that a model has a bounded working memory, that filling it degrades output quality, and that "compaction" summarises earlier turns to keep a session usable.
- **Agents and sub-agents** — an AI system that takes actions autonomously, and the pattern of one agent spawning others to handle sub-tasks.
- **Coding agents / harnesses** — tools such as Claude Code, Codex, Cursor, and Devin that wrap a model in a working environment.
- **Model tiers and usage caps** — awareness that frontier models cost materially more than near-frontier ones, and that subscription plans meter usage.
- **Prior episodes referenced** — the speaker assumes listeners have encountered his earlier coverage of loop engineering and shared agents.

## Main Points

### 1. Product design is pushing toward simplification and integration

- Early AI defied the usual Silicon Valley assumption that users require a simple experience: many non-technical knowledge workers embraced complexity instead of resisting it. The speaker's example is 9,000 people, most of them non-engineers, signing up for a free "Claw Camp" program that required them to work hard to build their own agents.
- Despite that, demand for simplicity remains large. Meta's new **Muse** product was praised specifically for it — by Claire Vaux (How IAI) for what it does and doesn't obfuscate from the user, by Node.js creator Ryan Dahl, and by technologist Tom Goodwin ("Don't tell me how you work, just show me how to do things").
- David Herman reported showing Muse to his nearly-70-year-old father, who understood immediately that he could generate a contract, edit it, and email it to a customer entirely through texts — adding that fewer than 1% of the population grasps what models like Claude and OpenAI's actually are.
- Meta Chief AI Officer Alexander Wang framed the simplicity as deliberate: the team's focus was on making something that "just worked," with heavy investment in small details.
- The trend is not Meta-specific. Anthropic merged **Claude Cowork and Chat** into one experience, and, per Claude Code creator Kat Wu, folded Claude Design in so core Claude can produce slides, designs, and docs without switching modes. Anthropic Labs lead and former Instagram co-founder Mike Krieger cited user feedback: the most common complaint was people not knowing which product to start with, and that friction blocking them from getting the best out of the models.
- The speaker notes his personal dissent — he prefers finer control — but concedes he is out of step with the average user. Christian Selig asked for the same consolidation in Codex, calling two modes "like having two parents fighting." Sean U. Matthews summarised the demand: users want one unified interface, with the platform coordinating and delegating agents, routing models to tasks, and handling local vs. cloud vs. VM execution — "You simply want to ask and receive."

### 2. Monothreads replace thread-hopping

- A **monothread** is a single, long, continuously running conversation that inherits context from past work, rather than starting a fresh context window and re-explaining each new need.
- This was previously infeasible: a filled context window produced errors, lost instructions, and odd behaviour. Much of the speaker's own teaching in late 2025 / early 2026 was about writing good handoff documents to carry context between threads.
- Codex's work on **compaction** broke the assumption. Nick Bauman of the Codex team wrote in April that agent design had been built on the premise that breaching and compacting context yields progressively worse results, and that dropping that premise opens exciting product directions. He was responding to developer Anthony Kroger, who said he never worries about context windows in Codex — "It can compact like three times and the model still remembers the details somehow."
- In a follow-up piece, *My Codex Threads Are Alive*, Bauman described his most useful thread as one running for three weeks, checking Slack, Gmail, and PRs hourly and converting noise into actionable signal. His usage shifted from many short-lived chats to a smaller number of threads kept alive around recurring work streams: "I have become mono-thread pilled." His conclusion: with good compaction, **a thread's value increases over time**.
- The speaker reports the same drift in his own work — the AI Daily Brief website runs from a single Claude Code thread, the social video-clip pipeline from another, and even inside Claude projects he now resumes the previous ad-copy conversation rather than starting fresh.
- This is now the official product behaviour. Claude announced on Thursday that **Projects run from one conversation**, starting in Claude Code: you describe what needs doing and Claude directs parallel threads that continue after you close your laptop. Cursor shipped the same logic a week earlier — "rather than creating a chat for every task, you work with a coordinator agent in a single persistent thread."
- Claude Code creator Boris Cherney on the effect: "I stopped managing sessions. I just send thoughts as they come, Claude splits them into threads, and the project remembers how I work."

### 3. Chatbots are becoming agent fleet managers

- In every example above, what changed is *where* you talk to a coordinator AI — but that coordinator is still spinning up many sub-agents to do the actual work.
- The speaker's observation: many assumed the chatbot interface was a transitional convenience that would eventually be replaced. Instead, model and harness companies **quietly changed what a chatbot is** without pulling the familiar interface out from under users. The experience feels the same — simpler, even, being one thread — but the underlying behaviour is very different from a year ago.
- Ethan Mollick on Claude Projects: you talk to a main orchestrator agent and it spins up specialists, effectively creating an organisation to solve your problem, mixing expensive and cheap agents according to your preferences.
- A downstream implication: conventional software may degrade into **context databases** for the coordinator agent. Signal wrote that all iMessages and email now run through a single agent interface, that every email client and subscription app has been deleted, and that Gmail is "basically just a database to me now" — the ambition being to never manually write an email, build slides, organise a calendar, or manage files again, only to express intent and have systems of record update correctly. Signal predicts apps will become databases at best, obsolete at worst, with the agent as the default interface to personal and professional life.
- The speaker hedges the strongest version of that prediction but holds the weaker one: whether or not apps disappear, the chatbot you talk to is doing something categorically different than it used to.

### 4. Voice is becoming the default input

- Every free learning program the speaker released this year opens by urging users to adopt native ChatGPT voice control or a tool like WhisperFlow, for both efficiency and the expanded context voice makes practical to supply.
- Voice is now table stakes for agent products. Grokbot shipped native voice integration this week. SpaceX AI's Danny Graziosi described using voice mode to "rapid fire tasks to your Chief of Staff while it orchestrates your bot team." Parker Conrad, on the same team, said Grokbot's interaction model already leapt forward and voice pushes it further.
- Gaurav Bison supplies the qualifier: voice on agent products "always felt like a gimmick until the agent could actually go do things. Voice plus real work is the combo." Capability, not the modality alone, is what makes it land.
- Already-voice-oriented products are doubling down: OpenAI released a Codex ad showing two of its developers talking to a Codex voice agent powered by the new **GPT-Live 1** model while working out; Google shipped **Gemini 3.8 Live** and **3.8 Live Extended Thinking**, citing intelligence and parallel-reasoning upgrades for collaborating and executing complex tasks by voice; and **Devin Voice** landed last week, letting developers code by talking via the GPT Live model.
- Allie K. Miller's summary, quoted approvingly: "Voice is the interface of the present and future."

### 5. From prompting to goal-setting and loop engineering

- The core shift: **instead of prompting AIs, we increasingly set goals for them.** This inherently grants the AI more latitude and agency over how the work gets done, and licenses it to work in recurring loops until done.
- It began with primitives such as `/goal` in Claude Code and Codex — a formalisation that let users specify a goal rather than drop a prompt.
- It expanded into **loop engineering**, a topic the speaker covered through the summer, including a webinar about a month prior. OpenClaw creator Peter Steinberger gave the idea a major lift: "you shouldn't be prompting coding agents anymore, you should be designing loops that prompt your agents."
- Structurally, a loop = **goal + quantifiable success criteria the agent can measure itself against**, so it can run continuously until the criteria are met.

  ```text
  Prompt-era:   user → prompt → single response → user evaluates → new prompt
  Loop-era:     user → goal + measurable success criteria
                         ↓
                   agent acts → self-measures against criteria
                         ↑___________ repeat until met ___________|
  ```

- The speaker acknowledges "loop engineering" has every hallmark of an early-adopter buzzword that reasonably earns eye rolls elsewhere, but defends it as a genuinely critical mindset shift — which is why the show spends time on it.

### 6. Multi-model stacks at the individual level

- The speaker flags that he has not settled on the right term for this — he calls it "multi-modality," noting his Patreon members like to point out the ambiguity — but means using **multiple different models in a personal stack**, at the individual level rather than just the organisational one.
- Advanced users always treated model selection as a lever: not being constrained to one model because it's the subscription you pay for, but picking the model that best fits the task.
- What changed is that it is no longer alpha, it's a **cost and efficiency requirement**. The drivers: the complexity, difficulty, depth, and duration of the work; the cost of the most advanced models; and shifts in how much those models are subsidised within standard plans.
- It is also newly *viable*, because cheaper models just outside the state of the art can now do what was state of the art only months ago. The **Fable 5.1** launch saw people across X and other AI communities sharing hacks for getting the most out of the model without breaking the bank — behaviour the speaker sees moving from one-off hacks toward disciplined usage systems.
- This dovetails with the fleet-manager pattern. A noted failure mode: Fable 5.1's default is to use the most advanced model not just as coordinator but for every sub-agent. Users give it a standard task and return to find a large share of their usage cap consumed, because the five or ten research sub-agents it spawned all ran on the top-tier model when the task didn't require it.
- **Tension flagged:** this trend runs against trend #1. As labs simplify the average experience, they will obscure or remove the fine-grained controls that determine which task gets which model. The labs will presumably build automation underneath to infer that (e.g. research sub-agents don't need state-of-the-art), but the speaker is not confident they'll always get it right — so users will still need personal agency here.

### 7. Shared / multiplayer agents

- The speaker's framing: **2026 will be remembered as the year agents became real**, but for the first two-thirds of the year agent behaviour was siloed to individuals — people building their own OpenClaw teams, changing their own work without changing their team's.
- That is shifting. This summer Claude introduced **Claude Tag**, replacing the older Claude-in-Slack model — where each person invoked their own instance — with a team-based system where each channel has its own agent working across the channel's context rather than any one individual's.
- **Mio XYZ** launched this week as "the first AI employee your whole team shares," reporting that in beta since July it saved teams thousands of hours and completed tens of thousands of tasks: "You don't need another agent, you need a shared one with your team."
- What "multiplayer AI" actually means is unsettled. Ethan Mollick called it "one of the biggest non-technical problems in using AI right now," with approaches still primitive and mostly amounting to AI as a person in your group chat — which he calls limiting.
- Arya Bhaktani raised the **principal problem**: there is no consistent mental model for who the principal is in a multiplayer agentic system. Is it the user, with the agent as a proxy inheriting their context, access, and authority? Or the agent itself, with its own identity, relationships, memory, and access? Bhaktani frames it as "the difference between agent civilizations versus human civilizations at agent speed," and concludes the answer is realistically both, for different systems and use cases.
- Atlan's Rishi Bhatnagar predicts multiplayer AI "will be one of the biggest design problems of 2027," noting the phrase means something different to everyone, and lays out three lenses, each compelling in isolation:
  - **Memory lens** — five agents on one project produce five versions of what happened, none talking to each other; replacing five private copies with one shared memory "is the whole game."
  - **Context lens** — nearly everyone has built a personal context layer that works for them, but stretching it across a team falls apart. Personal context feels solved; org-wide is wide open.
  - **Organisational lens** — the hardest part may not be technical at all: getting a whole team onto one shared way of working is org design, not engineering. "Nobody wants that to be true."
- Josh Rosen's summary of the state of play: "we've decided AI is going multiplayer before we've agreed on the architectural patterns for multiplayer AI."
- The speaker then describes his free self-directed **Multiplayer AI Sprint for Teams**, explicitly not premised on any of these questions being answered. Four sprints, nominally weekly but divisible however a team prefers:
  1. **Inventory** what your team actually runs today for AI — and if you're early, bring in a champion or expert from elsewhere in the organisation to convey best practice in your specific org context.
  2. **Context** — write down what your AI knows about you and what it should know.
  3. **Overlap** — find where work streams and context intersect; those are your candidate shared agents.
  4. **Build** — actually construct them. Sprints 3 and 4 can be repeated to experiment with multiple agents.
- His closing advice on timing: a great deal of product experimentation and product thinking is arriving in this space shortly, so kicking the can down the road to let norms settle is understandable — but teams that want to dive in can capture some alpha by getting out ahead of it.

## Key Concepts

- **Prompt / context / harness / loop engineering** — the speaker's four-stage progression of dominant AI-usage skill sets, from crafting prompts, to supplying context, to configuring the agent's working environment, to designing self-running loops.
- **Monothread** — a single long-lived conversation thread that inherits prior context and is reused for a recurring work stream, instead of starting fresh threads per task.
- **Compaction** — the technique of summarising earlier conversation turns so a thread stays useful past its nominal context window; the enabling advance behind monothreads.
- **Handoff document** — the pre-compaction workaround: a written artefact carrying context from one exhausted thread into a new one.
- **Agent fleet manager** — a chatbot whose real job is orchestrating sub-agents rather than answering directly; you talk to one coordinator, it spawns specialists.
- **Coordinator agent** — the orchestrating agent you interface with in a persistent thread (Cursor's and Claude Projects' term for the pattern).
- **App-as-database** — the idea (Signal's) that conventional software degrades into a system of record that your agent reads and writes, with the agent as the actual interface.
- **Loop** — a goal paired with quantifiable success criteria, letting an agent run repeatedly and self-assess until the criteria are met.
- **`/goal`** — the primitive in Claude Code and Codex that formalised specifying a goal rather than issuing a prompt.
- **Multi-model / personal model stack** — deliberately routing different tasks to different models by capability and cost, now a cost requirement rather than an enthusiast optimisation.
- **Multiplayer AI / shared agents** — AI that operates at the intersection of a team, with shared context and memory, rather than being siloed per individual.
- **The principal problem** — the unresolved question of whether the principal in a multiplayer agentic system is the user (agent as proxy) or the agent itself (with its own identity and access).
- **Claude Tag** — Anthropic's team-based Slack integration where each channel has its own agent scoped to the channel's context.
- **Muse** — Meta's AI product, cited throughout as the exemplar of the simplification trend.
- **GPT-Live 1 / Gemini 3.8 Live** — OpenAI's and Google's voice-capable models powering the voice-agent examples.
- **Multiplayer AI Sprint for Teams** — the speaker's free four-sprint program: inventory → context → overlap → build.

## Summary

The speaker's argument is that the sequence of labels attached to AI usage — prompt engineering, context engineering, harness engineering, loop engineering — is not empty buzz but a visible trace of a collective, ongoing effort to work out how to use a genuinely new technology, and that a recent cluster of announcements marks seven shifts substantive enough to be worth a busy person's attention. Interfaces are being deliberately simplified and unified, with Meta's Muse and Anthropic's merger of Claude Cowork and Chat as the clearest cases. Improvements in context compaction have made long-lived monothreads viable, inverting the old assumption that threads degrade and making a thread's value grow over time. Behind those single threads, chatbots have quietly become agent fleet managers — the familiar interface preserved while what sits behind it changed completely — and voice is becoming the default way to address them, now that agents can act rather than merely answer. Users are correspondingly moving from writing prompts to setting goals with measurable success criteria that agents loop against, while simultaneously needing to manage which models handle which tasks, a discipline the speaker warns may be obscured by the very simplification trend he opens with. Finally, agents are starting to move out of individual silos into shared, team-level deployments — an area where, as he freely concedes and his quoted sources underline, the architectural, memory, context, and organisational-design questions remain genuinely unanswered, which is precisely why he thinks teams willing to start building now have something to gain.
