---
title: How I'm Actually Using AI Right Now (Including Claude Duet)
description: >-
  Claude Duet's release prompts a full audit of the host's working AI stack, on
  the argument that a personal agent can't be judged in isolation — its value
  depends on the setup around it. The open question: should a personal agent be
  a chief of staff that organises what you already do, or a proactive proxy that
  finds ways to help unasked?
pubDate: 2026-10-25T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/173349697'
draft: false
---
## Overview

**Source:** 2026-10-25 — "How I'm Actually Using AI Right Now (Including Claude Duet)," *The AI Daily Brief*. Source link not provided in the episode metadata supplied with this transcript.

The speaker is the host of *The AI Daily Brief*, a daily podcast and video about news and discussions in AI; he also runs Super Intelligent, an AI education/enablement business. He is not named in the transcript.

The episode's occasion is the release of **Claude Duet**, the newest entrant in the personal-agent category. The speaker's thesis is that you cannot evaluate a personal agent in isolation — its value depends entirely on the shape of your existing AI stack — so the episode becomes a full audit of his working setup before it reaches a verdict. His central open question: are personal agents meant to be a **chief of staff** that organizes everything you do, or a **proactive proxy of you** that goes out and finds ways to be helpful without being asked? He argues the form factor should still be treated as experimental, despite real early traction (notably Muse, and the OpenClaw surge earlier in the year).

This matters because it separates two things usually conflated in personal-agent marketing: coordination of work you already do with AI, versus net-new proactive work you currently do by hand.

## Prerequisites

- **Model vs. harness.** The distinction between a model (Opus 5.5, Fable 5.1, Astra) and the environment it runs in (Claude Code, Codex, a chat app). The speaker routinely mixes them — e.g. Astra inside Codex.
- **Context windows and compaction.** Why long sessions used to degrade, and how backend context compression changed that constraint.
- **CLI coding agents.** Familiarity with Claude Code / Codex as both applications and command-line tools, including effort/reasoning settings.
- **Sycophancy and pushback.** The tendency of aligned chat models to validate rather than challenge user ideas, and why that is a functional defect for strategy work.
- **Scheduled and event-driven agents.** Cron jobs and "heartbeat" intervals as mechanisms for making an agent act without a prompt.
- **Connector-based tool access.** Agents reading and acting through Gmail, Slack, and Drive integrations.
- **Claude artifacts.** Interactive, editable objects generated inside a Claude conversation.

## Main Points

### 1. Personal agents are still an experimental form factor

- There is evidence of real uptake — Muse especially, and the OpenClaw explosion earlier in the year — which suggests "there is some here here."
- The unresolved design question is whether the agent is a chief of staff organizing all of one's work, or a specific, proactive proxy-employee that finds useful work unprompted.
- Understanding his verdict on Duet requires first understanding his existing use cases, because the agent's value is measured against what it displaces or adds.

### 2. Strategic externalization — the largest use case by time

- Across both businesses, his core job is deciding what to do or create next: content strategy for the AI Daily Brief, business strategy and learning-gap analysis for Super Intelligent.
- He thinks out loud rather than silently; he keeps extensive "walk notes" in Notion from walking, driving, or sitting and thinking.
- Roughly **60% of all threads, conversations, and sessions** he has ever had with AI fall in this strategy domain — tops by time spent, though not by tokens consumed (building wins there).
- This is where model differences matter most, and the hardest criterion is **approach to pushback and sycophancy**. A model that calls every idea gold is barely better than paper; he wants critical engagement grounded in something, not pushback as a trained reflex. The model must be dynamic, creative, adaptable, and confident at once.
- **Opus 5.5** is his favorite model in a long time for this. Previously Fable 5.1 ("okay"), and before that OpenAI models — though for most of this year he found GPT models "flat" and not dynamic for this work.

### 3. Research — cross-model verification

- Research is a large share of his work: the daily show, the new *How We Got Here* project, and research for his wife's true-crime podcast *Love Murder*, which he produces.
- Because the output is spoken publicly, requirements are strict: strong sourcing, no hallucination, and the ability to weigh different source types appropriately.
- He uses **Astra and Opus about equally**, and often has them check each other — Astra reviews Opus's output and Opus reviews Astra's — as an added confidence layer before anything becomes content.

### 4. Copywriting — chosen for accumulated context, not raw capability

- He uses no AI to write the podcasts themselves; they are unscripted. Production is: an evening survey of the day's AI news and discourse (1–2 hours deep if he hasn't tracked it live); his researcher Scott in Australia does the same during his morning, giving effectively 24-hour coverage; at ~8–9 p.m. Eastern they lock the next day's rundown; Scott prepares an overnight dossier of key sources and social commentary; in the morning the host lays out screens in sequence and records.
- He notes the irony of "AI talking about AI" comments — there is shockingly little AI in the production process itself.
- Post-production copywriting is daily AI work: episode descriptions, social posts, and titles. He always arrives with his own title and lets the AI try to talk him out of it; **about 50%** of the time he keeps his original.
- He uses **Astra** here, explicitly for memory and track record — years of signal about what he does and doesn't like. Even if Opus or Fable were equally good or better, re-tuning isn't worth the time. He also notes the common view that OpenAI models are more concise, which suits copywriting.

### 5. Image generation

- Images appear daily: in-show visuals he talks over, plus every episode's cover image.
- Default is the **GPT image models** — not from conviction that they're best, but by workflow convenience: covers are produced in the same thread right after the headline is locked.
- He maintains **Ideogram** and **Midjourney** subscriptions for distinct strengths: Ideogram generates four images at a time with variation toggles, which makes it better for iteration; Midjourney has idiosyncratic taste and artistry, valuable when you don't know what you want and just want something visually arresting.

### 6. Data analysis

- Extends beyond content work — he cites the shared experience of extension filers dumping financial data in to have expenses organized and extracted.
- For nearly all data analysis he uses **Astra inside Codex**, citing best results and a concision of thought well suited to the task.

### 7. Building — Claude Code as the orchestration layer

- He has cycled through many stacks this year: OpenClaw, Codex and Claude Code (both app and CLI), third-party tools like Cursor.
- Settled default: **Claude Code with Opus 5.5**, effort set to high or extra.
- He also builds in Codex with Astra specifically for native GPT image access — visual companion experiences get built there. He gives Claude Code GPT image access via API, but finds the in-Codex image models behave differently from the same models via API.
- Organizing, narrative architecture, and orchestration of building all happen in Claude Code.

### 8. Fable and "completion energy"

- The entire AI Daily Brief site was built and is maintained by Claude.
- His account of Fable's significance: starting to build things had been easy for a while, but projects hung at 80–90% done. Activation energy was low; completion energy stayed high. **Fable brought completion energy down to match activation energy.**
- The site needed to replace a fun-but-nonfunctional 1990s-retro design, with a specific mandate: the show is information-dense (part of its value, but also a high barrier to entry), and listeners wanted an easier way to share specific parts of an episode with peers and colleagues.
- So the site had to be a **production pipeline**, not a website — taking raw episode content or transcript and converting it into a different type of web content.
- He designed and built it with Fable, completing the full first draft **in the first afternoon he had access** — fortunate, since Fable was taken offline the next day over the export-control dispute with the White House.
- Using Fable and Claude Design, the aesthetic uses **no image generation** — text and color-based brand elements instead. Limited, but visually consistent, clear, and readable.

### 9. The extraction, social, and video pipelines

Pipeline 1 — **episode → shareable web assets → social** (built with Fable, pre-Opus 5.5):

```
episode transcript
  → extract relevant information
  → organize into shareable cards
  → publish to web
  → [secondary pass] generate tweet set + LinkedIn post
  → schedule via Typefully (third-party)
```

- He explored wiring the social APIs directly, but Typefully had already done that work and plugging in was far easier.
- He is candid that he has never given social the time it deserves — real success there means sitting and engaging with people — but he wanted some content flowing.

Pipeline 2 — **episode → video clip** (built with Claude Code):

```
episode transcript
  → Claude judges the best, most compelling, most self-contained 60–90 seconds
  → extract that clip
  → build surrounding visual assets (matching the website aesthetic)
  → package for download → manual upload (e.g. Spotify)
```

- His claim: recent Claude models, especially **Opus 5.5**, have become "enormously good" at video editing — enough that he recommends experimenting even if you don't think you need video.

### 10. *How We Got Here* — the pipelines applied to a new show

- Premise: today's biggest stories and phenomena result from specific past social, cultural, technological, and economic decisions; to remake them you must understand how we got here.
- It grew from repeatedly hitting the daily show's depth ceiling. Format: **45–60 minutes, weekly**. First three episodes: how America fell out of love with the tech industry; how stuff got cheap while the important things in life got more expensive; prediction markets and how we started betting on everything. First episode stated as **Monday, October 26th**.
- Workflow: iterate on strategic, distribution, and content ideas in Claude → build rich research dossiers with both Claude and Astra → a round of feedback → have Claude lay out key beats against his intended argument → source and lay out visuals → record by talking over them.
- Then a step beyond the AIDB process: after recording, he pulls his raw transcript and hands it plus the original research to **Opus 5.5** for a first draft of a **companion essay** — same argument as the show, but visually richer, built for readers, with easy access to links and sources.
- Scale: an hour of material yields a **5,000–6,000 word essay**. He drops it into Codex with Astra and uses GPT image to build the whole aesthetic. He then does an "exhaustive, exhausting" edit — based on the first three, he **rewrites about half**.
- Video: a human editing team does the first pass using years of AIDB process, then AI is integrated to add animations and feed the clip pipeline directly.

### 11. What's absent — and his two prior proactivity experiments

- Conspicuously missing from his stack: inbox monitoring, automated email responses, Slack monitoring, general proactive updates. He hadn't organized that work because "the juice wasn't worth the squeeze."
- He did experiment with OpenClaw: individual claws managing specific pieces of his work via **heartbeats and cron jobs**, plus a **chief-of-staff agent** coordinating across them, plus a **persistent research agent** monitoring AI adoption studies and surveys.
- Both lapsed. The research agent became unnecessary when that project changed. The chief of staff "just wasn't adding enough value to deal with the maintenance and upkeep."
- He allows this may be about him specifically: he is aggressive about limiting his calendar — **90% of his calls are unscheduled** and it is very hard to get him to book one — and his email method is to star important items on arrival and clear the inbox every couple of days.
- The conclusion is about cost, not capability: in the versions available, proactive agents didn't add enough value to justify setup cost. He names Hermes as an excellent product that simply doesn't fit how or on what he works.

### 12. The framing question for the new generation

The test he sets: will these agents lower setup and maintenance cost enough to make their proactivity worth it? He positions himself firmly on the **professional** rather than personal side. He has openly disparaged the standard pitches — flight booking, agentic shopping, restaurant reservations — not as useless in general, but useless for him. His flight example: he books within one airline's ecosystem where he has miles (or the one alternate carrier covering other routes), so explaining variables and contingencies to an agent costs as much time as using the airline's own interface.

That leaves two candidate sources of value:

- **Net-new work:** watching email, notifying him of things needing action, drafting responses for approval — none of which he currently has agents doing.
- **Better coordination:** a chief-of-staff role, but closer to the monothread paradigm.

### 13. The monothread paradigm

- Instead of many chats across many projects, each holding only its own context, you keep **one thread holding all your context**, which surfaces what it needs when it needs it, shifts between tasks, and spins up subagents as required.
- Trade-off: chats and projects are useful for organizing your own brain, like folders on a computer. The monothread's benefit is removing that organizational cognitive load — you can work stream-of-consciousness.
- It only became viable through **backend compaction and context-window management**. Previously, context filled up and you had to start a new chat; a chunk of the early 2026 education programs covered best practices for handoff documents. The labs have since gotten much better at compressing and carrying context forward.
- It fits his "brain zone" style better than structured hierarchy, and he has already been pushing Claude Code and Codex toward a single dominant thread.

### 14. Ecosystem survey

- **Instinct and Town** (third-party): people rave about them, but they were low priority — a mismatch between their strengths and his needs, plus an unwillingness to migrate all professional context out of ChatGPT and Claude.
- **Muse:** less interesting to him because of its personal-life bias, though he notes that is clearly not where Mark Zuckerberg and Alex Wang's ambitions end.
- **Grokbot:** he holds all the Ultra subscriptions and values its X integration for content production, but prefers not to leave the OpenAI and Anthropic ecosystems — maintaining two is already enough. His strategy is to stay engaged just enough that if a compelling reason to switch appeared, he wouldn't start from zero.
- **Google:** he doesn't think it currently makes sense to invest heavily; being behind here is "one less load" to carry. He is optimistic that changes as they get back on the horse.
- **Microsoft:** he tracks it closely professionally, since the podcast and Super Intelligent audiences are largely enterprise, but as a solo operator he biases toward nimble, non-enterprise-focused tools. He explicitly makes **no value judgment** about Microsoft's toolset — it simply isn't an ecosystem he plays in.

### 15. Dots — early assessment

- His use of his dot mirrors his broader ChatGPT use: it is a new version of monothread organization for important professional work done in ChatGPT. Research and podcast-statistics data analysis now run through **Quasar** — his dot, named for the Nulian lawyer in *Dungeon Crawler Carl*.
- Fast, simple things — queries he'd previously have Googled, and daily episode copywriting — still happen outside Quasar, where they always did.
- Even for the professional work, he isn't sure the past-performance data analysis wouldn't have been better in Codex. For strategy work he feels no added pull toward his dot.
- His sharpest criticism: the **Dots personality is so flat it "almost stonewalls" strategic engagement**. Dumping context on Quasar feels like pulling teeth.
- Telling example: after a full day of walking and hiking while strategizing with Claude on Opus 5.5 — roughly six hours of talking — he shared the entire conversation with Quasar so it would have current information. Instead of picking up any thread, its response was essentially *"great, this information has been saved for the future."*
- He found his dot not particularly proactive, and it took very little time before he stopped seeing a reason to engage with it.
- Net early verdict (explicitly provisional, and not a pessimistic read of the future): as a feature it adds little to ChatGPT as a place to do things reactively; it is **very weak on proactive work**; but it may be valuable as a **master holder of context** — somewhere to dump everything relevant once, sync it, and avoid repeating context across chats.

### 16. Duet — early assessment

- Of the major personal agents, Duet is **least concerned with personality and character** — no cute fuzzy logo like Muse, no naming ritual. He reads this as Anthropic's broader work focus, which seems like a good fit for him.
- Onboarding immediately asked him to connect Slack, Gmail, and Drive, then offered a stack of proactive project options before he had done anything else.
- **Over-eager proactivity:** Duet is so biased toward being proactive that it may overestimate the value of work simply because it *can* act on it. Example: from his inbox it proposed managing podcast sponsor inventory, flagging that he had offered the same date to two sponsors. It didn't know he has multiple slots per day, so there was no conflict. It "had a spasm," reminding him about four times until he explained the entire workstream didn't matter to him.
- **Genuinely valuable proactivity:** several times an email arrived of exactly the type he'd star and return to days later, and Duet proposed a response he could edit or authorize for sending directly from chat. A couple of times he let it send; on the most substantive and creative proposal he held off, but it got him **about 90% of the way there** without his having to go back and think about it. This is what makes him more optimistic.
- **Interface:** pushed as an iOS app, but he likes the web interface. Alongside the main everything-stream you can create separate **channels**, preserving some hierarchical organization if you want it. It uses Claude's **artifact** infrastructure, so it can create interactive, editable things without a separate interface. It auto-organizes work into tasks grouped as **active, up next, scheduled, or resolved**, modifiable from the main chat or by adding a task directly.
- **Limits:** only a few days in, but already much more optimistic. He does not think you'll want to do everything in Claude via Duet — a UI and brand visual design task was much worse inside Duet than in Claude's native design experience (which he believes folds into Artifacts later this year but currently has its own UX).

### 17. Closing frame: feature convergence

- He deliberately offers no ranking and no definitive claims about how others should use these tools.
- His argument on ecosystem lock-in: you largely don't need to worry which one you invest in, because **the moment a feature works in one, it becomes part of all of them within weeks, if not days.** If Dots' weak proactivity is a widely shared complaint, OpenAI will tweak it; if people prefer Duet's UI elements, other labs will copy them.
- Where personal agents ultimately fit remains open. For him so far it is **not** a big shift toward being the main way he interacts with AI, but "an easy-to-set-up little baby version of myself that does a bunch of stuff that I don't want to do." Valuable — but whether it's *future-of-the-industry* valuable remains to be seen.

## Key Concepts

- **Claude Duet** — Anthropic's newly released personal agent, work-focused, connector-driven, and strongly biased toward proactive suggestions.
- **Dots** — OpenAI's personal agent layer within ChatGPT; the speaker's instance is named Quasar.
- **Muse** — A personal agent with notable early traction and a bias toward personal rather than professional use cases.
- **OpenClaw** — The agent framework that "exploded" earlier in the year, used by the speaker for heartbeat/cron-driven proactive agents.
- **Grokbot** — A personal agent valued by the speaker chiefly for its integration with X.
- **Hermes** — A proactive agent product the speaker rates highly but which doesn't fit his way of working.
- **Instinct / Town** — Third-party personal-agent tools, deprioritized because they'd require migrating his professional context.
- **Opus 5.5** — His current default model for strategy and for building in Claude Code; also credited with a major jump in video-editing capability.
- **Fable 5.1 / Fable** — Earlier strategy model, and the model that lowered "completion energy" enough to finish projects; taken offline during the export-control dispute with the White House.
- **Astra** — The OpenAI-side model he uses for copywriting, research cross-checking, and data analysis inside Codex.
- **Claude Code** — The CLI/app harness where he does organizing, narrative architecture, and orchestration of building.
- **Codex** — The OpenAI coding harness, used especially for native GPT image model access.
- **Monothread paradigm** — Keeping one context-carrying thread instead of many chats and projects, enabled by backend compaction.
- **Compaction / context management** — Backend compression of conversation context so a single thread can continue indefinitely.
- **Activation energy vs. completion energy** — His framing for why projects stall: starting became easy long before finishing did.
- **Sycophancy vs. pushback** — His primary model-selection criterion for strategy work: grounded critical engagement rather than reflexive agreement or reflexive contrarianism.
- **Chief-of-staff agent** — A coordinating agent sitting above task-specific agents; abandoned for maintenance cost.
- **Heartbeats and cron jobs** — Interval-based triggers that let an agent act without being prompted.
- **Walk notes** — His Notion archive of thinking captured while walking, driving, or sitting.
- **Companion essay** — A 5,000–6,000 word reading-format version of a *How We Got Here* episode, first-drafted by Opus 5.5 from his transcript plus research, then half rewritten by hand.
- **Typefully** — Third-party scheduling service the social pipeline publishes through, avoiding direct API work.
- **Ideogram** — Image tool generating four variants at a time with variation toggles; favored for iteration.
- **Midjourney** — Image tool with idiosyncratic artistry; favored when giving the model latitude.
- **Claude artifacts** — Interactive, editable generated objects that Duet reuses so work can be done in-chat.
- **Channels (Duet)** — Optional separate streams within Duet for users who still want hierarchical organization.
- **How We Got Here** — His new weekly 45–60 minute show on the historical causes of present-day phenomena.

## Summary

The speaker argues that a personal agent cannot be judged on its own terms — only against the stack it's meant to join — so he audits his own: roughly 60% of his AI time goes to strategic externalization (now Opus 5.5, selected above all for grounded pushback over sycophancy), with research split between Astra and Opus cross-reviewing each other, copywriting in Astra for its accumulated memory of his preferences rather than raw quality, image generation defaulting to GPT models with Ideogram and Midjourney held for iteration and latitude, data analysis in Astra inside Codex, and all building orchestrated in Claude Code — including the transcript-to-web-cards, cards-to-social, and transcript-to-video-clip pipelines that now carry his new show. What is absent from that stack is proactivity: his earlier OpenClaw experiments with cron-driven agents and a chief-of-staff coordinator lapsed because maintenance cost exceeded value, not because the idea was wrong. The new generation's real test, then, is whether it lowers that cost enough. His provisional early verdict — only days in, and explicitly subject to change — is that Dots adds little reactively and is very weak proactively, though it may serve as a master holder of context, while Duet is sometimes over-eager about work that doesn't matter yet genuinely valuable where it drafts responses to the emails he'd otherwise defer, getting him 90% of the way there unprompted. He declines to rank the tools, noting that any feature working in one will appear in all of them within weeks. For now, these agents are less the main way he interacts with AI and more "an easy-to-set-up little baby version of myself that does a bunch of stuff that I don't want to do" — clearly valuable, but whether that is future-of-the-industry valuable remains an open question.
