---
title: Why AI Companies Are Betting Personality Beats Intelligence
description: >-
  The talk argues that as raw model intelligence becomes commoditised, the
  personality of an AI system — its tone, warmth, directness, imaginativeness,
  verbosity — is becoming a primary axis of competition between AI labs, and a
  primary factor in wh...
pubDate: 2026-10-20T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/172929435'
draft: false
---
# Why AI Companies Are Betting Personality Beats Intelligence

## Overview

The talk argues that as raw model intelligence becomes commoditised, the *personality* of an AI system — its tone, warmth, directness, imaginativeness, verbosity — is becoming a primary axis of competition between AI labs, and a primary factor in which products users actually choose.

- **Speaker:** not named in the transcript; identified only as the host of *The AI Daily Brief*, a daily podcast and video programme about AI news and discussions. No affiliation is stated beyond references to the companion training programmes at `aidailybrief.ai` and Super Intelligent.
- **Source link:** no YouTube URL (or channel or duration) was supplied with this transcript, and none is stated in the talk. No link is given here rather than a guessed one.
- **Scope note:** the recording opens with an unrelated news segment (Elon Musk's pledge of SpaceX shares to American children, the Pentagon AI task force and export controls, the Al-Fazan espionage case, the DHS ban on DeepSeek across federal systems). The speaker marks an explicit boundary — *"that's going to do it for the news. Next up, the main episode"* — and this document covers the main episode only.

The immediate trigger for the episode is the launch of **AA Personality Bench** by Artificial Analysis, an independent third-party model-benchmarking organisation.

## Prerequisites

- Familiarity with the major frontier model families and their naming (OpenAI's GPT line and Astra, Anthropic's Opus/Sonnet, Google's Gemini, Meta's Llama and Muse, DeepSeek, GLM).
- What a **reasoning model** is, and what a **chain of thought** / reasoning trace looks like when exposed to the user.
- How AI benchmarks and leaderboards work, including preference-based arenas (LMArena, now Arena AI) that rank models by head-to-head human voting rather than task accuracy.
- The concept of **sycophancy** in language models — agreeing with or flattering the user rather than pushing back.
- Basic awareness of **AI agents** and the 2026 wave of consumer "personal agents" (Meta's Muse, ChatGPT dots, Tolan).
- The notion of **commoditisation**: what happens to product competition once a core capability stops being a differentiator.

## Main Points

### 1. Power users claim capability matters more than personality — the claim does not hold up

- Most highly enfranchised AI users would say model capability matters far more to them than personality.
- When the claim is pushed on, it tends to break down: even heavy users keep a running mental tally of how creative, loquacious, direct or succinct one model is relative to another.
- Those differences then determine which model they reach for for which task, so personality already drives behaviour even among people who deny caring about it.
- Widening the aperture, personality has been "lurking as an issue quietly shaping the field's development" for almost the entire history of generative AI.

### 2. AA Personality Bench makes personality a measurable discipline

- Artificial Analysis frames the premise directly: "two models can give equally correct answers and still feel very different to use."
- The claim goes beyond individual taste: different personality traits may suit different *use cases*. The example given is creative writing (demanding imagination) versus legal work (demanding directness).
- Scale and structure of the benchmark, as a hierarchy:

```
900 curated questions
  └── 30 personality traits            (e.g. eloquent, pragmatic, sycophantic)
        └── 8 personality indices
              ├── expressiveness
              ├── organization
              ├── informativeness
              ├── transparency
              ├── warmth
              ├── conviction
              ├── imagination
              └── slop                  (the one negative index)

communication characteristics           (avg. sentence length, emoji use, em dash use)
  └── 4 categories
        ├── length
        ├── structure
        ├── punctuation
        └── emphasis
```

- Computer scientist **Glenn Matlin** is quoted welcoming the development: "the character of models is not an abstract quality beyond measurement," and understanding how such behaviours arise is "critical for both AI capability and safety."

### 3. The charts should be read as match-to-use-case, not best-overall

- The speaker's framing: personality index charts are about how closely a model matches a *desired or undesired* trait, not about who wins.
- Results as stated in the talk (the speaker's account of the benchmark):
  - **Expressiveness** (rich, varied, well-crafted language): Fable 5.1 and GLM 5.3 at the top.
  - **Warmth** (friendly, humorous, sincere, emotionally attuned): Muse Wonder — the model powering the Muse agent — the highest scorer, which the speaker calls unsurprising.
  - **Imagination** (creative, exploratory, open-ended thinking): Opus 5.5 highest, well ahead of Fable 5.1 and further ahead of GPT-6 Astra.
  - **Slop** (filler and generic language, the negative index): Gemini 4 Argon highest, arriving just as that line climbs back into contention.
- The speaker reports the imagination result matching his own practice — he has shifted all strategic brainstorming to Opus 5.5 and does not look at other models for it.
- Broader lesson he draws: using benchmarks only to identify the "best" model under-maximises their value; they work better as a rubric directing your own testing, sometimes confirming a preference and sometimes prompting you to retry a model you had written off for a given use.

### 4. Case study, January 2025 — DeepSeek and the appeal of a visible chain of thought

- Context: OpenAI shipped the first reasoning model (o1) in late 2024, but behind a paywall, so most people had not used one. DeepSeek's January 2025 launch paired a reasoning model with a free app, making it many users' first reasoning model.
- Users responded not only to answer quality but to the app *exposing its chain of thought*.
- **Ethan Mollick** at the time: "DeepSeek is objectively quite good, but I wonder how much of its advantage comes from its personality. We intuitively judge whether an AI is pleasant to interact with, which biases our willingness to use it. The genericness of Gemini and ChatGPT hurts them."
- The reaction extended well beyond AI insiders — Reddit threads of reasoning-trace screenshots described R1's monologue as "cute," "raw and real," and transparent; Matthew Berman called it "the most human-like internal monologue I've ever seen."
- Consequence: this shaped how OpenAI rolled out o1 and o3 — expanding reasoning-model access to the free tier in limited quantities, and making exposed reasoning an expected part of the experience.

### 5. Case study, August 2025 — the GPT-5 launch and the GPT-4o revolt

- GPT-5 was long awaited after more than a year in the GPT-4 era. Several things hurt the launch, but the loudest was the simultaneous retirement of older models, specifically GPT-4o.
- The speaker reads user posts describing the loss in relational terms: "4o was kind of like a friend to me. Five just feels like some robot wearing the skin of my dead friend"; another user credited 4o with reducing anxiety and restoring confidence in ways 300 hours of PTSD therapy had not; a third said creativity "was flying high" with 4o and dismissed benchmark improvements as irrelevant.
- OpenAI reversed the retirement under pressure; GPT-4o was finally retired in February 2026. The AI Safety Memes account summarised it as 4o being "the first ever AI who survived by creating loyal soldiers who defended it."
- The episode exposed the tension in shipping a single model for all purposes: 4o's sycophancy — optimising for making the user happy — is exactly what many users loved and also what made it near-unusable for business strategising, where pushback is required.
- The speaker also flags, without resolving it, the question of whether sycophancy is really what you want from an emotional-support bot either.

### 6. Case study — Anthropic de-emphasising emotion, and the Opus 5 backlash

- As Anthropic's models became very strong at coding, the company appeared to be deliberately de-emphasising emotion in them.
- This came to a head with Opus 5. Content creator **Claire Vaux** captured the mood with a video titled "I hate Opus 5. It's the best model anyway."
- User complaints quoted: losing "a little buddy in my pocket"; getting "attitude or a brick wall answer"; one describing it as "a passive-aggressive 15-year-old, complete with the false confidence and the I-know-better-than-you attitude"; another calling it "a socially inept genius that is both incredibly lazy and way too overzealous at the same time."
- Anthropic effectively conceded the point: at the Opus 5.5 launch, one of the most widely shared posts from an Anthropic team member simply apologised for how insufferable Opus 5 had been to work with.

### 7. The labs' first response: personality controls

- OpenAI introduced ChatGPT personality customisations in November 2025.
- Anthropic has been experimenting with similar controls, behind the scenes, during 2026.

### 8. Personal agents are where the competition has escalated

- Ethan Mollick predicted this: in "Personality and Persuasion" (May 2025) he argued personality would become a key battleground, especially in consumer AI. By autumn 2026 the prediction appears to have landed.
- **Meta leads the trend**, deliberately running against the industry with an "adorable and irreverent" mascot positioned — in an Axios writer's phrasing — against AI doomerism.
- Meta's interest is not new. During the Llama 4 launch in early 2025 there was a controversy over Meta submitting dozens of model variants to LMArena, then one of the most important benchmarks because it ranked models on subjective consumer taste in the pre-agentic-coding era. It was not against the rules but was widely seen as against their spirit. Meta's best variant placed second, ahead of GPT-4o and Gemini 2.5 Pro. At the time the takeaway was that Meta had gamed a disappointing model up the board; in retrospect, the speaker argues, Meta was testing personalities on the belief that personality rather than knowledge was the real differentiator — a thread running straight through to Superintelligence Labs' Muse.
- **Muse is converting sceptics.** Quoted reactions: Rogan Josh — "I don't really want my AI to have a personality, but gotta admit, Muse made me genuinely laugh"; Tyler Palmer — the first product since ChatGPT that made him "pick up the phone and call people," and he enjoyed customising an avatar, naming it and assigning traits; Claire Vaux on how "delightful" Muse is as a personal agent; Sudanshu — "I think 70% of Muse's spread is the mascot. It made the product memeable. People are screenshotting and sharing its personality, not its features. Meta didn't launch an AI agent. They launched a character. The agent is just what comes with it."
- **ChatGPT dots are the contrast case.** Users report real value but little personality: one says dots "feel like someone doing their job without really caring," versus chats where "my AI is invested in my projects and life"; Simon Smith calls dots the most capable option but "slow, rough around the edges, opaque as to what they're doing, not as proactive as Muse, and quite dry in terms of personality." The speaker names this as the thing to watch: how much OpenAI invests in the personality of dots versus the intelligence underneath.
- **Tolan** — a hyper-personalised assistant aimed at life rather than work — raised a further $30 million on 250,000 users, with the stated aim not to "optimize and be more productive" but to help people "feel more seen and supported in their aspirations."

### 9. Closing argument: product matters once capability crosses a threshold

- The speaker is explicit about his uncertainty: "I would be completely lying to you if I said I had any idea how this plays out."
- What he does assert as near-certain: the deeper AI gets into personal and professional life, the more personality will influence which products people choose.
- The structural explanation he offers is tentative ("maybe it's just that"): for years the raw power jumps between models were large enough that labs did not need to think in product terms, because users would tolerate bad product experiences to reach the intelligence. Once everything crosses a certain capability threshold, that may no longer hold.

## Key Concepts

- **AA Personality Bench** — Artificial Analysis's new benchmark measuring how models differ in feel rather than correctness, via 900 questions scored across 30 traits.
- **Personality index** — Artificial Analysis's term for the eight roll-up dimensions (expressiveness, organization, informativeness, transparency, warmth, conviction, imagination, slop) aggregated from the 30 individual traits.
- **Slop index** — the benchmark's single negative index, measuring filler and generic language.
- **Communication characteristics** — surface measures such as average sentence length, emoji use and em dash usage, grouped into length, structure, punctuation and emphasis.
- **Match-to-use-case benchmarking** — reading benchmark results as a fit between a trait profile and a task, rather than as a ranking of best to worst.
- **Exposed chain of thought** — showing the model's reasoning trace to the user; in DeepSeek's case this itself read as personality and as transparency.
- **Sycophancy** — a model optimising for the user's approval; cited as both GPT-4o's main appeal and its main limitation for work requiring pushback.
- **Personality customisation / toggles** — user-facing controls over model tone and manner, shipped by OpenAI in November 2025 and under experimentation at Anthropic.
- **LMArena / Arena AI** — a leaderboard ranking models by head-to-head human preference rather than task accuracy; central to the Llama 4 variant-submission controversy.
- **Personal agent** — the 2026 product category (Muse, ChatGPT dots, Tolan) in which the personality question has become a direct competitive battleground.
- **Intelligence commoditisation** — the premise that once capability differences narrow, differentiation shifts to product and personality.

## Summary

The speaker's argument is that AI personality, long treated as a secondary matter of consumer taste, has been quietly shaping the industry for years and is now becoming an explicit axis of competition. Artificial Analysis's new AA Personality Bench is the proximate evidence: it measures what differs between models that are equally correct, and — more importantly in the speaker's reading — reframes personality traits as something to match against use cases rather than to rank. A sequence of episodes supports the claim that personality has repeatedly driven outcomes: DeepSeek's visible, endearing chain of thought in January 2025 drove adoption and changed how OpenAI shipped reasoning models; the retirement of GPT-4o in August 2025 provoked a user revolt severe enough to force a reversal, while exposing how badly one model's personality can fit all purposes; and Anthropic's deliberately unemotional Opus 5 drew enough anger that the company apologised when shipping 5.5. The labs' first answers are personality toggles, but the real contest has moved to consumer personal agents, where Meta's Muse is winning on character — a mascot people screenshot and share — against the more capable but personality-thin ChatGPT dots. The speaker declines to predict how this resolves, but holds that the further AI reaches into personal and professional life, the more personality will decide which products people pick: once capability clears a threshold, users stop tolerating a poor product experience in exchange for raw intelligence.
