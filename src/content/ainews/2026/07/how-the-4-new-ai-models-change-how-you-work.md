---
title: How the 4 New AI Models Change How You Work
description: >-
  Four major new AI models arrived this week, each pointing toward a different
  future of work—from natural voice assistants and ultra-fast coding agents to
  cheaper implementation models and powerful new daily workhorses. Here’s what
  GPT Live, Grok 4.5, Cognition SWE-1.7, and GPT-5.6 Sol reveal about how we’ll
  choose, combine, and work with AI models next.
pubDate: 2026-07-09T00:00:00.000Z
type: episode
tags:
  - ai-coding
  - training-and-rl
  - nlp-and-speech
  - openai
url: 'https://aidailybrief.ai/e/2026-07-09'
draft: false
---
## Overview

This episode of **The AI Daily Brief**, a daily podcast and video series on AI news, looks at four new AI models released in the same week and how each one could change the way people work. The host does not give their name in the transcript. The episode argues that the summer is not slowing AI down. Instead, a "cavalcade" of model releases has begun, starting with the return of Fable 5. The four models are:

1. **GPT Live** (OpenAI): a new real-time voice model for ChatGPT
2. **Grok 4.5** (SpaceX AI and Cursor): a cost-efficient model for coding and agents
3. **SWE 1.7** (Cognition): a fast, specialised coding model from an application-layer company
4. **GPT 5.6 Sol** (OpenAI): OpenAI's first answer to Fable 5

The host argues that these releases matter for more than benchmarks. They point to new ways of working: voice as a way to coordinate work, layered setups where several models work together, and speed changing how people use a model.

**Source link:** No URL was provided for this episode. The title is `2026-07-09-how-the-4-new-ai-models-change-how-you-work`.

## Prerequisites

- **Large language models (LLMs) and frontier models:** a general idea of what LLMs are and of the leading labs (OpenAI, Anthropic, Google, xAI/SpaceX AI).
- **Model families mentioned:** Fable 5 and Opus 4.8 (Anthropic), GPT 5.5 and 5.6 (OpenAI), the Grok models, Cursor's Composer, and Chinese open-weight models such as Kimi K2.x and GLM 5.2.
- **Agentic AI:** AI systems that run multi-step tasks, use tools and can hand work to sub-agents.
- **Orchestrator / sub-agent setups:** one model plans and hands off work while other models carry out parts of it.
- **Benchmarks:** a rough idea of what SWE-Bench Pro, Terminal Bench, GDPval and the Artificial Analysis index measure.
- **Basic training concepts:** pre-training, mid-training, post-training and reinforcement learning (RL).
- **Voice AI basics:** speech-to-text (STT), text-to-speech (TTS) and latency.

## Main Points

### 1. The summer "month of models"
- The host says AI has wiped out the old idea that work slows down in July and August.
- An earlier government intervention threw off the usual release schedule. The host now expects a rush of model releases with real effects on how people work.
- Fable 5 came out in June, but most people only got access in early July. This week added GPT Live, GPT 5.6 Sol, Grok 4.5 and Cognition SWE 1.7.

### 2. GPT Live: how OpenAI's voice systems developed
- GPT Live comes in two versions, **GPT Live 1** and **GPT Live Mini**.
- **First generation, a cascaded voice system:** three models chained together. Speech-to-text turned the user's speech into text, an LLM wrote a reply, and text-to-speech read it out. OpenAI says information could get lost between the models and responses were "slow and stilted."
- **Second generation, Advanced Voice Mode:** one model handled the audio, which cut latency. It still worked in turns, though. It waited for silence before replying, so a pause to think or some background noise could trigger an awkward interruption.
- **Third generation, GPT Live:** this version makes two architectural changes:
  - **Full duplex:** it listens and speaks at the same time. It processes input continuously while producing output, and makes decisions many times per second about whether to speak, keep listening, pause, interrupt or call a tool.
  - **Separating interaction from deeper work:** GPT Live handles the conversation. It can call a stronger model such as GPT 5.5, and from now on 5.6, for reasoning, agentic tasks or search, and keep talking while that work runs.

Described as a diagram:
```
User speech ⇄ [GPT Live: continuous interaction layer]
                     │ (delegates tasks without pausing conversation)
                     ▼
        [Background model: GPT 5.5/5.6 — reasoning, search, tools]
```

- This is similar to the "interaction model" design Thinking Machines Lab showed earlier. Developers such as Daniel Vella have built similar voice-first agents that hand tasks to other agents.
- The host describes this as the voice version of a common pattern: an orchestrator model starts sub-agents and combines their results into one answer.

### 3. GPT Live: use cases and how it was marketed
- **Translation:** because it does not wait for turns, it can translate phrase by phrase, much like a human simultaneous interpreter.
- **Language learning and teaching:** Simon Smith practised Spanish with it and got feedback on his pronunciation. He suggested that flashcards, quizzes and a sketchpad would make it "an exceptional teacher." ChatGPT can already show visual cards for weather, stocks and sports, which suggests flashcards would be a small step.
- **The "Siri use cases":** the launch ad shows confident grandmothers in control of the conversation, interrupting it freely. The host reads the ad as a stress test of the classic personal-assistant failures that frustrate users.
- Packy McCormick (Not Boring) called the marketing an effective "OpenAI just be normal" strategy.
- Sam Altman said he has always preferred typing to talking to an AI and now expects that to change.

### 4. Voice at work: input and output
- The host often recommends talking instead of typing, using dictation tools such as Wispr Flow. People talk faster than they type and give more context when they ramble, and AI "lives or dies" on the context it gets.
- That advice is about voice as *input* only. The host often finds spoken replies slow, because reading takes in information faster than listening.
- Early testers who were won over include:
  - **Daria Anutmaz:** rarely used voice before, now uses it often, and praised the translation in Turkish dialects.
  - **Riley Brown:** surprised by how realistic it is and how fast it searches. He thinks email, scheduling and business data will soon be handled by voice, and that the only piece missing for "Jarvis" is a generative UI layer.
  - **Simon Smith and Ethan Mollick:** both link it with **Claude Tag** (Claude inside Slack with shared context across channels). They see a shift towards AI as a colleague rather than a tool.
  - **Max Weinbach:** imagines GPT Live inside Codex, managing threads and project work by voice.
  - **Prinz:** in 2026 AI is a "genie in a bottle" that needs the right wish. In 2027 the genie lives alongside you and infers what you want, and the key skill becomes "real-time genie steering."

### 5. GPT Live: limits and interaction tiers
- **Gail Wiener:** the voice is beautiful, but "the voice isn't the product. The thinking is." It is good for quick answers and weak for brainstorming or real work.
- **Husk's video:** the model insisted that "seventeen" has two E's. It has four. OpenAI staff took the joke well.
- The host's point is that **GPT Realtime 2** (the developer API), **GPT Live 1** (the ChatGPT voice experience) and the **GPT-5-class reasoning models** are *interaction tiers*, not just model tiers.
- Voice models are tuned for different goals: listening, timing interruptions, sounding natural, avoiding silence and keeping latency low. Deep reasoning is a separate goal. For long strategic debate, the frontier reasoning model is still the benchmark.
- **Site Bringer:** voice "collapses the distance" between people and AI, moving use from tools towards relationships.
- The host's conclusion: this is not only a consumer change. As more work becomes delegation and coordination, voice may become an important way to coordinate.

### 6. Grok 4.5: near-frontier performance at a much lower cost
- Before the Cursor acquisition, some observers thought Elon Musk was moving from the model layer to the compute layer, since Anthropic, Google and others had access to Colossus and Colossus 2. SpaceX AI's IPO brought in capital that gave it leverage, and that capital funded the Cursor deal.
- Grok 4.5 is the first model from the SpaceX AI–Cursor partnership. It is billed as their first model trained specifically for coding and agents, built for large codebases, multi-repo work, long-running tasks, and hundreds of skills and tools.
- Cursor confirmed that **Composer** (its smaller model built on Kimi) will continue, with new models of that size still planned.
- **Benchmarks and cost** (Artificial Analysis):
  - It ranks 4th overall behind Fable 5, Opus 4.8 and GPT 5.5, and 4th on GDPval.
  - It costs **$0.31 per task**, against $1.80 for Opus 4.8 and $2.75 for Fable 5. That is about 1/3 the cost of GPT 5.5, 1/5 of Opus 4.8 and 1/9 of Fable 5.
  - The host sums it up as "near Opus performance for Haiku-level costs."
  - Grok Build with Grok 4.5 ranked 3rd on the coding agent index. That is ahead of Opus 4.8 with Claude Code, and behind GPT 5.5 with Codex and Fable 5 with Claude Code.
  - It is state of the art on **Automation Bench**, which tests real-world SaaS workflows in Excel, Gmail and Slack. It scored 51.4% at $0.34 per task, against Fable 5's 48.6% at $1.35. It also used less than half of Opus 4.8's tokens and fewer turns.
- **Theo's verdict:** pleasant to work with, fast and cheap. It is not as thorough as Fable or GPT 5.6, but it is "a weirdly good default code model" that beats GLM 5.2.
- Musk himself said "Fable is definitely better than Grok 4.5, but most tasks don't require Fable-level capability."
- **Its role in layered setups:** early users like it as an *implementation* agent under a Fable or GPT 5.6 orchestrator.
- **Market effect (Stonk Daddy):** it gives Chinese open-source-level price and performance without the data-sovereignty, compliance or geopolitical concerns. Cursor is already in enterprises, which works as a "Trojan horse."

### 7. Cognition SWE 1.7: application-layer models and speed
- It is built on **Kimi K2.7**, similar to Cursor's Composer. It is slightly better than GLM 5.2 and Composer 2.5, close to frontier models, and costs about 1/2 to 1/3 as much.
- **Research note (Silas Alberti):** industry talk had moved from RL to pre-training and mid-training, on the view that RL has a ceiling. Kimi K2.7 had already been heavily post-trained and suffered fast entropy collapse. After tuning the algorithm and data, it "suddenly started working," and the ceiling does not seem to have been reached yet.
- **Jeff Wang** cited breakthroughs in multi-region training, self-compaction and efficiency.
- **The broader pattern (Ben Dickson):** application-layer companies use their user-experience data to fine-tune specialised models that match closed frontier models at higher speed and lower cost. "Closed frontier AI models are good for exploration. Open LLMs are the engine for scale and production."
- **Speed changes how people work:** Sean Wang (swyx) described an awkward middle zone for AI coding, where tasks are too slow to do in real time but too short to walk away from. SWE 1.7 Lightning is so fast that it changes this zone. Nader Dabit: "It's technically async, but fast enough that you just watch."

### 8. GPT 5.6 Sol: where it is strong and how it compares to Fable 5
- **Claire Vo's list of strengths:** browser use, human-like writing and communication, shipping usable products, video editing, front-end design (with a fondness for forest green) and productive loops.
- **Dan Shipper (Every):** a much better writer than Fable. It one-shots marketing emails, while Fable is too verbose. His analogy: "GPT 5.6 is like a Porsche. Fable is like a warp drive." Use Fable to cross the galaxy and Sol to get around town. Losing access during the US government's delay felt like "the Stone Age."
- **Prinz (lawyer):** it can replace an associate for legal research when the sources are public, helped by strong needle-in-a-haystack search.
- **Every's practical findings:**
  1. **Speed changes the model.** It is the fastest model they trust as a daily driver. Cheap revisions make it easy to throw away weak drafts.
  2. **It finds the context it needs.** Give it an outcome and project access, and it reads files, follows instructions and asks useful questions. Stale rules written for older models can make it worse.
  3. **It works best when you plan to steer.** Supply sources, examples, style guidance and a clear outcome, then review and redirect.
  - Their division of labour: Fable for the loosest and longest tasks, Opus for clarity, Sol "for the work that fills the day."
- **Peter Gustev (Arena AI):** Fable is a "wise owl," the smarter model, insightful even at low reasoning. Sol is a "Rottweiler," extremely diligent: give it eight tasks and all eight get done. On pure intelligence Sol is not better, but it is "an insanely capable workhorse." Use both.
- **Dean Ball:** he cannot remember the leading models ever being so far ahead and so different from each other.
- **Ethan Mollick:** Sol and Fable have opened a big gap. For work where intelligence matters, they are the only two choices.

### 9. What comes next: GPT-6 and Fable 5.1
- **Leo (@synthwave)** reports that GPT-6 is about a month away, possibly late July. It is said to use a new, much larger pre-train than the roughly 4-trillion-parameter "Spud" base behind 5.5 and 5.6. Fable 5.1 is reported to be in late-stage development at Anthropic, with release expected in weeks.
- **Andrew Curran** independently backs this up. He calls GPT-6 OpenAI's "true answer to Mythos," says the government will probably hold it back at first, and reports that Elon Musk has a 10-trillion-parameter Grok in training. He says both labs see "nothing above us but air. No ceiling."
- The host closes by saying more releases are coming.

## Key Concepts

- **GPT Live (GPT Live 1 / GPT Live Mini):** OpenAI's new ChatGPT voice model, built for continuous, natural, interruptible conversation.
- **Cascaded voice system:** a voice pipeline made of separate speech-to-text, LLM and text-to-speech models chained together.
- **Turn-based voice model:** one audio model that waits for the user to stop speaking, judged by silence, before it replies.
- **Full duplex architecture:** a design where the model listens and speaks at the same time and makes interaction decisions many times per second.
- **Interaction model / background model split:** a setup where a light conversational model hands reasoning, search or tool use to a stronger model running in the background.
- **Orchestrator / sub-agent pattern:** one model coordinates others that carry out specific tasks, then combines the results.
- **Interaction tiers:** the idea that models such as GPT Realtime 2, GPT Live 1 and GPT-5-class reasoners serve different ways of interacting, not just different capability levels.
- **Claude Tag:** a version of Claude that sits in Slack with shared context across users and channels.
- **Real-time genie steering:** Prinz's phrase for the future key skill of guiding an AI that infers and acts on your intent as you go.
- **Grok 4.5:** the coding- and agent-focused model from SpaceX AI and Cursor, notable for near-frontier performance at very low cost per task.
- **Composer:** Cursor's smaller, cheaper coding model, built on a Kimi base and post-trained on Cursor's own data.
- **Automation Bench:** Artificial Analysis's proprietary benchmark for completing real-world SaaS workflows with tools in simulated apps.
- **Cost per task:** an efficiency metric for what it costs a model to complete one benchmark task. It is increasingly used alongside raw intelligence scores.
- **Cognition SWE 1.7 (and Lightning):** Cognition's specialised coding model built on Kimi K2.7, notable for speed and low cost.
- **Entropy collapse:** an RL training failure where the model's output diversity shrinks too fast and further improvement stalls.
- **Application-layer models:** specialised models fine-tuned by product companies using their own user data, aimed at frontier-level performance on narrow tasks at lower cost.
- **The latency "middle zone":** tasks too slow for real-time interaction but too short to walk away from. Very fast models are reshaping this zone.
- **GPT 5.6 Sol:** OpenAI's new frontier model, praised for diligence, speed, writing and getting tasks done.
- **Spud:** the reported roughly 4-trillion-parameter pre-trained base behind GPT 5.5 and 5.6.
- **Mythos:** referenced as the release that "changed everything" and pushed labs towards much larger pre-trains.

## Summary

The episode argues that this week's four releases each point to a change in how people will work with AI, not just to higher benchmark scores. GPT Live's full-duplex design, which separates conversation from reasoning, makes voice feel natural. The host sees voice becoming a key way to coordinate work as more of it is delegated, even though voice models trade depth of reasoning for responsiveness. Grok 4.5 shows a near-frontier model that knows its place: almost Opus-level results at a fraction of the cost, suited to implementation work under a stronger orchestrator, and a Western alternative to Chinese open-weight models. Cognition's SWE 1.7 shows application-layer companies turning user data into fast, cheap, specialised models, and that raw speed can change how people interact with a model. GPT 5.6 Sol and Fable 5 together form a two-model frontier: Fable is the wiser, deeper thinker and Sol the diligent, fast workhorse, and users are advised to combine them. With GPT-6, Fable 5.1 and larger pre-trains reportedly on the way, the host's message is that the pace of change is speeding up. The skill that matters most is learning which model, and which way of interacting, fits each piece of work.
