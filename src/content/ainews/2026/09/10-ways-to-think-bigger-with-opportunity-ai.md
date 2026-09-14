---
title: 10 Ways to Think Bigger with Opportunity AI
description: >-
  Source: The AI Daily Brief — weekend "long read / big think" episode. No
  YouTube URL was supplied with this transcript; the episode's companion
  interactive web experience is published at aidailybrief.ai, which the speaker
  references throughout.
pubDate: 2026-09-13T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/169406949'
draft: false
---
# 2026-09-13 — 10 Ways to Think Bigger with Opportunity AI

## Overview

**Source:** *The AI Daily Brief* — weekend "long read / big think" episode. No YouTube URL was supplied with this transcript; the episode's companion interactive web experience is published at **aidailybrief.ai**, which the speaker references throughout.

**Speaker:** The host of *The AI Daily Brief* (not named within the transcript; no affiliation stated on air).

**Central thesis:** Broad model capability has crossed a threshold where the value of a new frontier model is increasingly *not* in doing your existing work better, but in unlocking capabilities you have never considered. The speaker frames this through his recurring distinction between **efficiency AI** (doing existing work faster/cheaper/better) and **opportunity AI** (doing things that were previously out of reach). GPT-6 Astra is presented as the first model that visibly "dances inside this difference" — advanced users report it is simultaneously the smartest and the most erratic model they've used for coding, while generating genuine excitement for entirely new territory such as video editing and 3D.

**Why it matters:** The speaker's strategic claim is that efficiency use cases will become table stakes and reset baseline expectations of how work is done. Companies that treat AI *only* as an efficiency technology will be outpaced by those that also hunt for new opportunities — even opportunities orthogonal to their current business. The practical obstacle is a blank-page problem: people don't carry an inventory of things they *might* build, only a smaller inventory shaped by their job, tools, and peers. The episode exists to supply thought starters that break that frame.

## Prerequisites

- **Familiarity with current frontier models** — the episode assumes working knowledge of GPT-6 Astra, GPT-5.6 Sol, and Fable 5.1, and that model releases now differ qualitatively rather than just scaling uniformly.
- **Coding agents as a delivery mechanism** — Claude Code and Codex are treated as the default way you would actually *build* any of these ideas; the listener should understand that you describe an outcome and the agent constructs the artifact.
- **The efficiency vs. opportunity AI framing** — a recurring concept on the show, summarized but not re-derived at length.
- **Basic exposure to adjacent tooling** — Blender (3D), video clipping products such as Opus, and the general shape of a media production pipeline.
- **Context on the "multiplayer AI sprint"** — the speaker's related work on agents that sit at the centre of teams rather than being owned by individuals.

## Main Points

### 1. Astra is a bifurcated model: weaker on the familiar, stronger on the novel

- Practitioners publicly reported regressions. Francesco (on X) moved back to GPT-5.6 Sol and Fable 5.1, calling Astra "the smartest and dumbest model I've ever worked with" and citing "absurd shortcuts it takes to arrive at something technically working." Theo amplified this, referencing Astra's "spikes of stupidity."
- OpenCode's Dax reported a portion of the team reverting to Sol: Astra "can do some novel things, but it has some downsides," and their effective spend "looks doubled, so tough to justify."
- All of these complaints centre on **coding** — the established, high-volume use case.
- The enthusiasm, by contrast, clustered around **video editing, 3D design, and modeling** — work that is not part of most people's day-to-day.
- The speaker brackets whether this is a sound *business* strategy for OpenAI and treats it instead as evidence for the efficiency/opportunity split.

### 2. Efficiency AI and opportunity AI are complements, not rivals

- Efficiency AI is explicitly endorsed: "there is absolutely nothing wrong with efficiency AI. It is going to be the foundation for most of our use of AI."
- The argument for opportunity AI is strategic, not moral: efficiency gains commoditize into table stakes, so differentiation comes from the opportunity side.
- Historically the distinction was a *mindset*; with Astra it manifests as an actual capability profile in the model.
- Several of the episode's own thought starters end up being both at once — a point the speaker returns to twice.

### 3. Opportunity AI is usually stumbled into, not planned

- The speaker's own example: a custom-built site that chunks episodes into shareable pieces and pushes them into a social/video pipeline. This was not the result of waiting for a technology unlock — it came from "stumbling around and experimenting and looking at problems that I had."
- Telling someone to "go find new opportunities with AI" produces a blank page, because people lack an inventory of the possible.
- **Shortcut heuristic:** many "opportunities" aren't novel in absolute terms — they're things *other people with other jobs* have been able to do. Look at what people in adjacent roles do that you think is cool, and ask whether it now applies to you.
- The companion web app presents **12 thought starters**, each with a high-level concept, a specific application, and a "Make This Mine" personalizer that takes context about you and proposes fitted variants.

### 4. Thought Starter 1 — Marketing people can *play*

- Marketing content has moved visual → print → video; AI adds **interactivity** as a new axis. Early Astra experiments centred on building and rebuilding games.
- Games implicate the audience's **agency** rather than treating them as receivers: "Consider the difference between being told a place rewards curiosity and being given some small mystery that makes you curious about the place."
- Three modes were distinguished:
  - **Rules carry the argument** — an advisor who believes coordination cost grows with team size builds a game where adding people to a project also adds handoffs, so the player *encounters* the thesis.
  - **Play reveals why a problem matters** — a five-minute fictional launch where sales promises a date, product discovers a dependency, and support needs information nobody assembled; the prospect leaves with language for a problem they recognize.
  - **Play lets people express taste** — a "make this awkward apartment work" challenge with a room, competing needs, and limited space, placing products inside a problem the customer understands.
- Brands have done marketing games before; what changed is the **development cost**. This is now a solopreneur weekend project.
- Caveat stated plainly: most games fail, and nearly all failures are made by professional designers. Telling a coding agent what to build is not game design. The unlock is being able to *try*.

### 5. Thought Starter 2 — Video production pipelines

- The AI Daily Brief's own clips are not produced by a dedicated tool like Opus; they come from a **custom Claude Code pipeline** that ingests scripts and raw video and runs a set of tools to produce output. The speaker says he is "barely scratching the surface" of it.
- Prediction: advanced models may democratize video production the way coding agents democratized software.
- Framing questions: is video for internal explanation, external explanation, marketing — or education that doubles as marketing?
- The capture objection is dismissed: everyone has a phone or laptop that can record them talking.

**Homework, as given:**

```
1. Work with AI to write a 60-second educational marketing script
   for whatever you build or sell.
2. Record it on your iPhone. Simplest possible setup.
3. Hand the video to Codex or Claude Code. Ask it to design:
     - a visual motif for your videos
     - transition elements
     - layered graphics
4. Ask for a FULL PRODUCTION PIPELINE:
     drop source video in  ->  finished video out
5. Give at least one round of feedback. Push it farther.
6. Ask: does this lower the barrier enough that video is now
   a tool available to me?
```

- If no work use case comes to mind, the fallback exercise is to co-write a 90-second movie with AI and build a pipeline from there.

### 6. Thought Starter 3 — Product demos people can explore

- A product contains many potential explanations; different buyers arrive with different questions. Today a sales presentation must **choose one order**.
- Concrete failure modes: a buyer who cares about maintenance sits through features they already understand; a buyer who cares about configuration needs a relationship the standard sequence never shows.
- An exploratory demo organizes around **actions** — open this, isolate that component, check the arrangement, inspect the result — so curiosity becomes the navigation.
- Guiding question: what do customers need to inspect for themselves before your product makes sense, and could an interactive demo deliver that?

### 7. Thought Starter 4 — Proposals clients can shape

- Proposals currently point in one direction: the proposer hands over a plan and hopes it lands.
- Every proposal **already contains a model**, just an invisible one — assumptions about effort, parallelism, available resources, and how brief changes affect delivery. When a client asks "could we include another department," the author silently re-runs that model.
- The opportunity is to expose selected parts of that reasoning to the client: *"we want it sooner"* becomes *"we can finish sooner if the team attends more often"* or *"we need more capacity to run these in parallel."*
- The client can discover that their initial preference conflicts with something they care about more — without every alternative becoming a new request for the proposer to interpret.
- This is explicitly **both** efficiency and opportunity AI: a new interaction mode *and* a large reduction in negotiation latency. The speaker expects it to become *de rigueur*.

### 8. Thought Starter 5 — Simulators for business decisions

- AI's capacity to absorb information and emit many possibilities adds a real dimension to strategic decision-making.
- Many disagreements contain **several hidden disagreements**. "We need another hire" could mean the process is too slow, the work is unevenly distributed, or someone expects a demand surge.
- People argue about the conclusion while imagining different starting conditions: one pictures the average week, another the worst day, a third assumes the process improves next month.
- Building a simulator **forces specification** — what happens at each stage, what limits each stage, where unfinished work accumulates. Assumptions become inspectable.
- You can then ask whether the decision holds if demand rises more slowly, if training takes time, or if one stage handles harder cases.
- Connects to the **multiplayer AI sprint** concept: agents at the centre of teams rather than owned by individuals.
- Pattern named here: many of these ideas are **"what-if machines"** — the interactive proposal is one, the decision simulator is another scoped to a specific decision.

### 9. Thought Starter 6 — Operating in three dimensions *(skimmed on air)*

- 3D is identified as one of Astra's clearest distinguishing capabilities.
- Early enthusiasm came from pairing Astra with **Blender** — e.g. 3D walkthroughs of Zillow houses someone is considering buying.
- Strongest suggested direction: **learning experiences** where rotating and manipulating a 3D object materially changes comprehension. Secondary: marketing and 3D-generated video.
- The speaker flags this as potentially deserving an entire dedicated episode; the full version is on the website.

### 10. Thought Starter 7 — Customer stories as films

- Organizations usually already hold the raw material: a customer interview, a project review, recordings, screenshots, photographs. Fable 5.1 or Astra can assemble these into a mini-documentary.
- The argument is evidentiary, not decorative. A screenshot shows *what exists* but not *why anyone needed it*; an interview explains *why it mattered* but the viewer still needs to see *what changed*. Combined, both questions are answered.
- Worked example: a customer describes a failed handoff and the information that was missing; a recording of the new process then shows where that information now goes. The outcome becomes specific enough to understand.
- Film also creates room to show **judgment** — what alternatives were considered, which decision was difficult, what the team learned after the first attempt.
- Suggested approach: dump the raw assets of a customer journey into Claude Code with Fable 5.1 or Codex with Astra and ask it to **one-shot** the whole thing. Explicitly not the long-run method, but the fastest way to *see* the capability. "Don't take too much time in advance to get it perfect before you have a sense of the capability."

### 11. Thought Starter 8 — Practice and simulation environments for learning

- Core idea: create an experience, or a simulation of it, **before the real situation occurs** — practicing difficult customer situations or hard conversations with management.
- The hardest thing about learning experiences is creating space for learners to exercise judgment and get feedback on it.
- Simulation environments enable **immediate, mid-stream feedback**, so learners can iterate and course-correct rather than being assessed after the fact.
- The speaker expects an entire category of professional development products rooted in this pattern.

### 12. Thought Starter 9 — Physical products you can prototype

- Aimed at two audiences: people who genuinely design physical products, and people who want to experience Astra's 3D power without an obvious personal use case.
- Idea: treat **physical conditions as something you can design**. It need not be a commercial product — a teacher might build an object with removable pieces to make a difficult relationship tangible.
- Demonstrated live via the **"Make This Mine"** feature. Given the context *"I'm building a new type of podcast studio,"* it returned three ideas:
  - Turn your episode rundown into sliding blocks guests can touch — *"not really a fit for me, but certainly creative."*
  - Let the room's own measurements shape your acoustic panels — *"has more promise as something that might actually be valuable."*
  - Build your studio as a hand-sized kit clients rearrange — *"my fidgety kids might like that."*
- No claim of perfection is made; the panel is presented as a source of nuggets.

### 13. Thought Starters 10 and 11 — Skipped for time

- **10: Building browser features.** **11: A test crew for your website.** Both were omitted from the audio for time and are available in full on aidailybrief.ai.

### 14. Thought Starter 12 — Your expertise as a product

- Framed as the most broadly relevant item for knowledge workers who help clients with intellectual and knowledge-work challenges.
- Expert help normally manifests as a **conversation**, but several distinct kinds of work happen inside it: gathering context, recognizing patterns, noticing exceptions, ruling out attractive-but-inappropriate options, and deciding what the person is ready to do next. The visible advice is only the *end* of that process.
- The question: can any part of that be turned into a product people manipulate themselves?
- **The episode is its own example.** Rather than sitting with each listener individually, the speaker embedded much of that judgment in the interactive web app — not equivalent to undivided attention, but delivering "a pretty good chunk of the value" to many more people.
- Applies beyond client work: expertise can be productized for teammates and the wider organization.
- Again both categories at once — building a "digital advisor version of yourself" is opportunity AI, but in company contexts where time goes to repeating the same things to different people, the result is efficiency AI.

## Key Concepts

- **Efficiency AI** — AI applied to existing work to make it faster, cheaper, or better; the foundation of most AI value and the source of most early returns.
- **Opportunity AI** — AI that unlocks work you could not previously do at all; the source of strategic differentiation once efficiency gains commoditize.
- **Table stakes reset** — the expectation that efficiency use cases will become universal baseline capability, so they stop conferring advantage and merely redefine normal.
- **The blank page problem** — the difficulty of generating novel use cases, caused by carrying an inventory of possibilities bounded by your job, tools, experience, and peers.
- **Thought starter** — a paired high-level concept plus specific application, designed to seed opportunity thinking without requiring you to know your opportunity in advance.
- **"Make This Mine" personalizer** — the web app feature that takes context about your work and generates fitted variants of a generic thought starter.
- **What-if machine** — the recurring pattern underlying several thought starters: an artifact that exposes assumptions and lets someone explore consequences of changing them.
- **Interactive proposal** — a proposal exposing part of its own scope/resource/time model so the client can explore trade-offs directly.
- **Business decision simulator** — a model of a process that forces starting conditions to be specified, surfacing the hidden disagreements inside an apparent single disagreement.
- **Practice environment** — a simulated scenario for rehearsing judgment-heavy situations with immediate mid-stream feedback.
- **Expertise as a product** — decomposing expert judgment into something a person can work through unaided, scaling the expert.
- **GPT-6 Astra** — the frontier model anchoring the episode: erratic on coding, distinctive on video, 3D, and novel capability.
- **Fable 5.1 / GPT-5.6 Sol** — contemporary models several practitioners reverted to for reliable coding work.
- **Claude Code / Codex** — coding agents used as the build surface for all suggested projects.
- **Blender** — 3D software paired with Astra in early standout demos.
- **Multiplayer AI sprint** — the speaker's related programme on agents living at the centre of teams rather than being individually owned.

## Summary

The speaker argues that model progress has entered a phase where new frontier releases no longer improve uniformly: GPT-6 Astra is erratic enough at coding that experienced practitioners have reverted to GPT-5.6 Sol and Fable 5.1, yet it opens genuinely new ground in video, 3D, and interactive artifacts. This asymmetry makes concrete a distinction he has long argued as a mindset — efficiency AI, which improves existing work, versus opportunity AI, which creates work that was not previously possible. He is careful not to disparage efficiency AI, which he calls the foundation of most AI value; his claim is strategic, that efficiency gains will commoditize into table stakes and that the firms which also pursue orthogonal new opportunities will pull ahead. The obstacle is that people cannot inventory what they have never considered, and his own opportunity use cases were stumbled into rather than planned. The episode's remedy is a catalogue of twelve thought starters — playable marketing, custom video pipelines, explorable product demos, client-shapeable proposals, business decision simulators, 3D applications, customer-story documentaries, practice environments for professional development, prototypable physical objects, browser features, website test crews, and productized expertise — each paired with a personalizer and, where possible, concrete homework. He repeatedly notes that the two categories are not in conflict: several of these ideas are opportunity AI to build and efficiency AI to operate. The closing message is modest and procedural rather than triumphal: the point is not to predict your opportunity in advance but to stretch, experiment, and accept that not everything will hit.
