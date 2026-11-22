---
title: 9 AI Techniques You Probably Haven't Tried
description: >-
  Even experienced AI users can fall behind as new features and working methods
  arrive. NLW breaks down nine techniques worth trying now—from live voice mode,
  workflow teaching, custom skills, and Claude’s /design command to team agents,
  GrokBot, local models, and deceptively useful two-word prompts. In the
  headlines: an AI-assisted personalized cancer vaccine clears a Phase III
  trial; OpenAI introduces private safety processing; and Replit launches Free
  Mode with GPT-5.6 Luna.
pubDate: 2026-08-20T00:00:00.000Z
type: episode
tags:
  - ai-coding
  - context-engineering
  - anthropic
url: 'https://aidailybrief.ai/e/2026-08-20'
draft: false
---
## Overview

This episode of **The AI Daily Brief** (host not named in the transcript) is a practical roundup of nine AI techniques and features that some users report strong results from, but that many listeners may not have tried yet. The host argues that AI tools change so fast that even power users settle into habits and fall behind on new ways of working. The episode gathers what practitioners are sharing publicly, mostly on X and LinkedIn, rather than reporting only the host's own experience. It opens with a headlines segment covering an AI-assisted cancer vaccine trial, OpenAI's new enterprise privacy technique, the OpenAI–Replit partnership, reported SpaceX–Cognition deal talks, and the White House AI safety testing framework.

**Source video:** No URL was provided with this transcript. The episode is listed as *2026-08-20 — 9 AI Techniques You Probably Haven't Tried* (The AI Daily Brief; ad-free version at patreon.com/aidailybrief).

## Prerequisites

- Familiarity with chat assistants (ChatGPT, Claude, Grok) and coding agents (Claude Code, Codex).
- A basic idea of **agents**: AI systems that carry out multi-step tasks using tools.
- Understanding of **agent skills**: reusable instruction packages that agents load for specific tasks.
- Awareness of **computer use**: AI that watches or controls a desktop environment.
- For the local AI section: a general sense of running open-weight models on personal hardware.
- For the headlines: the difference between large language models (LLMs) and other kinds of machine learning, and what zero data retention (ZDR) means in enterprise contracts.

## Main Points

### Headlines: Moderna/Merck personalized cancer vaccine
- On a Wednesday, Moderna and Merck announced a successful Phase III trial of a personalized mRNA cancer vaccine, the first late-stage trial of this approach to show promise. It extended remission in more than 1,100 patients with advanced melanoma.
- The method sequences each patient's tumor, compares it with healthy DNA, and uses AI to pick out the mutations most likely to trigger an immune response. A personalized mRNA vaccine is then made from that analysis.
- The news was linked to Dario Amodei's earlier remark that "the thing that will work is actually curing cancer," not marketing. Critics replied that this is classic machine learning, closer to AlphaFold than to an LLM.
- The host's position: don't overlook the human scientists involved, but don't dismiss it as hype either. The wider AI era of compute, research, and talent investment helps work like this. Moderna stock reportedly rose 70%, and then 125%, within hours.

### Headlines: OpenAI's "private safety processing"
- This is a new technique for eligible API customers with zero data retention agreements. It lets OpenAI offer frontier models without keeping prompts or outputs, or exposing them to staff.
- Long-running agents make safety monitoring harder, because older systems only evaluate single interactions. Anthropic's approach was to disable ZDR for Fable, and the host says this has hurt Fable's adoption in enterprises.
- OpenAI's system runs automated, encrypted scanning across an entire session, including customer-controlled storage. If something is flagged, staff see only a summary with a category and severity rating, with no customer data. False positives therefore no longer expose data.
- Alia Howze (OpenAI head of product policy) and staff member Adam GPT both stressed how much enterprises care about this. The host agrees, based on their own conversations with enterprises.

### Headlines: OpenAI × Replit "free mode"
- Replit's free mode lets users on the $20/month plan work without spending usage credits. All queries are routed through GPT 5.6 Luna, which Replit says allows about 30× more output.
- The host reads this as OpenAI competing on two fronts. One is the capability frontier (5.6 Sol and the upcoming Astra model). The other is the efficiency frontier, against Chinese open-weight models.
- The host expects more competition on efficiency as users learn which tasks need how much model power.

### Headlines: SpaceX and Cognition
- Bloomberg reported that SpaceX approached Cognition about a deal, possibly including use of SpaceX compute. It described Cognition as a possible addition to Cursor, not a replacement.
- Cognition CEO Scott Wu denied it. Bloomberg's Rebecca Torrens stood by the report. Elon Musk said they had only discussed making Grok work well for Cognition.
- The host suggests nobody has to be lying, because "approaching someone" about a deal is often informal and vague.

### Headlines: White House AI safety testing framework
- The framework was unveiled in a closed meeting for technical staff from OpenAI, Anthropic, and Google. Attendees got paper copies and could only take notes.
- No written version has been distributed since, and no details of a planned public event have been shared.
- Juan Ladano of the Cato Institute criticized the approach as a "black box" that undermines the rule of law and public trust. The host agrees.

### Meta-tip: learn from people experimenting in public
- The episode collects what others are sharing, not only the host's own techniques.
- Following the AI conversation on X and LinkedIn is presented as a valuable source of practical learning, whatever the flaws of those platforms.

### Technique 1: Live voice mode
- New live voice modes, especially in ChatGPT for work and Codex, are described as a "complete game changer." Dan Shipper reported that almost everyone at Every was "freaking out" about it.
- Allie K. Miller's examples are ambient and conversational, such as: "Take a look at this paragraph… I'm going to edit this while you find that doc," or "I'm gonna go fill up my water. Holler if you need me."
- Her key point is that ambient interaction differs greatly from click-to-speak. She calls it an "ambient workforce" or a "voice-controlled operating system" that she uses on walks and at weekends. She has published a full setup guide on X.
- The host's advice: commit to a set period of working this way, even if it feels strange at first, because descriptions alone won't convey the difference.

### Technique 2: Teaching AI your workflows by letting it watch
- Advances in computer use let AI learn tasks by observing them, instead of relying on hard-to-write explanations.
- **ChatGPT computer history** is the ambient approach: it keeps a timeline of what you do and how you work, which can become repeatable processes.
- **GrokBot's teach button** is the deliberate approach: you press a button and it watches a specific task for as long as you say.
- The takeaway: tasks once thought too hard to explain may now be possible to delegate.

### Technique 3: Build a skill to improve AI writing
- This covers high-volume writing people already outsource, such as emails, memos, summaries, and website copy. It does not address writing as a way of thinking.
- Common AI tropes include dramatic one- or two-word sentences, "It's not this, it's that," forced "honest caveats," and self-congratulation ("And that matters. That's the part everyone misses").
- Suggested method: save a post listing these tells (such as Ruben Haseed's on X) as a PDF and ask Claude to turn it into a skill. Others turn style guides such as ASD-STE-100 (Simplified Technical English for aircraft manuals) into skills.
- In short, put everything you don't want the AI to do in one place, so it applies every time.

### Technique 4: Claude Code's `/design` command
- Typing `/design` in Claude Code opens an artboard where you can leave notes, highlight areas, and preview different styles.
- **Big picture:** it can generate several templates side by side for high-level feedback when the desired result is unclear.
- **Fine detail:** you can edit specific parts of a design instead of re-prompting the whole thing.
- New slash commands appear often in Claude and ChatGPT, so they are worth watching.

### Technique 5: Using curated agent skills
- Managing skills is described as a new discipline: knowing where to insert skills, which ones to use, and when to let the agent work on its own.
- Matt Pocock's library at **aihero.dev/skills** groups skills by when you'd use them (getting started, main flow, shaping, upkeep) and gives a copyable install command for each.
- Example: **"Grill with Docs"** interviews you about a plan or design until you and the agent "share one understanding of it." It also writes the vocabulary and key decisions into the repo, so the interview leaves something behind.
- Skill practice is framed as an ongoing discipline, not something you either can or can't do. The advice is to build on what experienced practitioners have already worked out.

### Technique 6: Multiplayer AI / team agents
- Most agent use so far has been single-player: personal chiefs of staff, research agents, and so on, working for one person. One example given is running OpenClaw on a Mac Mini.
- Real work is collaborative, with handoffs and shared context. The host expects agents that live where teams work together to be one of the biggest trends this fall.
- **Claude Tag** (launched end of June): Claude joins a Slack channel as a team member with that channel's full context. Each channel's instance can have its own permissions, tool access, and context access. It is a shared resource, not tied to one person's computer.
- **10x's "Citizen SDLC"** (blog at tenex.co) is a six-stage lifecycle for taking what non-technical employees build with AI from a personal prototype to a production tool the whole company can use.

### Technique 7: GrokBot
- It is currently single-player, but GrokBots can already interact with each other. That allows patterns like talking only to a chief-of-staff bot that manages the others. The host expects shared team use to come next.
- Users praise its own virtual computer, which gets around access problems that held back earlier agents.
- Shared use cases include application reviews, sales deck updates from notes, Salesforce reports, and daily briefings. The common thread is regular, predictable work with lots of information.
- Lenny Rachitsky suggested connecting the MCP of his 500+ podcast transcripts to make GrokBot a product, growth, and career advisor. As an open alternative, Nous Research's Hermes Desktop now has a similar, more customizable bot mode.

### Technique 8: Local AI
- Full setup is out of scope here. The host points to an earlier June episode with Nufar Gaspar on why local AI matters and how to use it.
- The reason to revisit it: **Qwen 3.8 27B** runs on common hardware and scores 52 on the Artificial Analysis Intelligence Index, which would have been state of the art a few months earlier.
- It is offered as a good entry point for anyone who has been meaning to try local models.

### Technique 9: Two-word prompts
- Allie K. Miller shared 18 two-word prompts. Many sound like talking to a teammate, which the host links to her voice-mode habits.
- **"Now what?"**: after finishing a project, when you still have energy and want the AI to suggest more. The host compares it to Jed Bartlet's "What's next?" in *The West Wing*.
- **"Please fix"**: usually sent with a screenshot showing the problem.
- **"Simulate it"**: asks the AI to run scenarios, plan for edge cases, and visualize outcomes in a planning interface.
- **"Remember this"**: after a mistake or a key context error, it makes the AI save the lesson to memory, since it doesn't always do so on its own.

## Key Concepts

- **Live / ambient voice mode:** a continuous voice interface where the user talks to the AI as to a present colleague, instead of click-to-speak dictation.
- **ChatGPT computer history:** a ChatGPT feature that records a timeline of the user's computer activity so workflows can become repeatable AI processes.
- **GrokBot:** xAI's agent product with its own virtual computer, a teach-by-watching button, and bots that can talk to each other.
- **Agent skill:** a packaged, reusable set of instructions an agent loads to do a specific kind of task consistently.
- **ASD-STE-100:** the Simplified Technical English standard for aircraft maintenance documentation, used here as a style guide for AI writing.
- **`/design` (Claude Code):** a slash command that opens an artboard for visual, annotation-based design work.
- **Grill with Docs:** a Matt Pocock skill that interviews the user about a plan until both sides agree, and records vocabulary and decisions in the repo.
- **Multiplayer AI / team agents:** agents shared across a team, with shared context and permissions, instead of serving one person.
- **Claude Tag:** a Slack integration where a channel-specific Claude instance joins as a team member with that channel's context and permissions.
- **Citizen SDLC:** 10x's six-stage lifecycle for turning employee-built AI prototypes into company-wide production tools.
- **Hermes Desktop bot mode:** Nous Research's open, customizable alternative to GrokBot.
- **Qwen 3.8 27B:** an open-weight model that runs on common local hardware and scores 52 on the Artificial Analysis Intelligence Index.
- **Two-word prompts:** very short, teammate-style commands ("Now what?", "Please fix", "Simulate it", "Remember this") that prompt useful AI behavior.
- **Private safety processing:** OpenAI's automated, encrypted, session-wide safety scanning for ZDR customers, where staff see only data-free summaries of flagged activity.
- **Efficiency frontier vs. capability frontier:** competing on cost-effective "good enough" models versus competing on the most capable models.

## Summary

The host's message is that AI's constant change is both its appeal and its main difficulty: even engaged users fall into comfortable habits and miss new ways of working. To counter that, the episode collects nine techniques that practitioners are reporting in public: ambient voice mode, teaching AI workflows by letting it watch, a skill to remove AI writing tropes, Claude Code's `/design` artboard, curated agent skills, team-shared "multiplayer" agents, GrokBot, capable local models such as Qwen 3.8 27B, and Allie K. Miller's two-word prompts. Some are big changes to how people work and others are small tweaks. The host encourages listeners to try one or more on their next experimental day, to commit long enough to judge whether it helps, and to keep learning from people sharing their experiments online.
