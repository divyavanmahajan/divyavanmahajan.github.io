---
title: Why Muse Wonder Is Dividing AI Users
description: >-
  Source video: 2026-10-13-why-muse-wonder-is-dividing-ai-users — The AI Daily
  Brief (no YouTube URL supplied with this transcript; link unavailable).
pubDate: 2026-10-13T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/172280143'
draft: false
---
## Overview

**Source video:** 2026-10-13-why-muse-wonder-is-dividing-ai-users — *The AI Daily Brief* (no YouTube URL supplied with this transcript; link unavailable).

The episode argues that Meta has re-entered the frontier AI race with its new **Muse Wonder** model family, and that the community's sharply split reaction to it reveals more about how models are evaluated than about Meta's actual capability. The host (host of *The AI Daily Brief*, an unnamed daily AI news podcast) covers the launch of Wonder and Wonderful, benchmark results, conflicting hands-on reports, where the models fit in Meta's consumer-agent strategy, and how Mark Zuckerberg's refusal to "pace the frontier" separates Meta philosophically from OpenAI and Anthropic.

Quoted throughout are Meta Chief AI Officer **Alexander Wang**, **Mark Zuckerberg**, and a range of developers, researchers and investors reacting on X.

## Prerequisites

- Familiarity with the current frontier model landscape: OpenAI (GPT-6 Astra, GPT-6.1 Sol), Anthropic (Opus 5.5, Sonnet 5.5, Fable 5.1), Google (Gemini 4 Argon), xAI (Grok 47), Meta (Muse Spark, Muse Wonder).
- Understanding of **agentic AI** — models that execute multi-step tasks on a user's behalf rather than only answering prompts.
- Knowledge of common evaluation suites referenced: DeepSuite 1.1, Terminal Bench 4.0, OSWorld (computer use), GDPVal, Harvey Lab (legal), Vals finance agent, AutomationBench, Artificial Analysis Intelligence Index.
- Awareness of the **"pacing the frontier"** debate — the open letter and surrounding discussion about whether labs should voluntarily slow frontier releases.
- Basic grasp of inference economics: tokens per second, tokens per dollar, cost per task, and usage-limit-based subscription plans.

## Main Points

### 1. Speed is becoming a competitive axis of its own

- Anthropic added an "S mode" to Fountainhead, serving Opus 5.5 at a verified **285 tokens/second**; OpenAI's fast mode for GPT-6.1 Sol has a documented theoretical maximum of ~280 tokens/second but no published speed test.
- OpenAI charges a **50% premium** for its fast mode; Anthropic serves **50% more tokens per dollar**, though its fast mode is excluded from regular subscriptions — something some users discovered unexpectedly.
- The host's view: these modes are currently a novelty with niche applications, but large latency shifts will eventually change how people interact with models in ways not yet predictable.

### 2. New Anthropic models are already in testing

- Users report queries silently routed away from Opus 5.5 to an unreleased model with notably better results, including code-based animations; Fable prompts were also being rerouted, suggesting a possible double release.
- Commentator **Chubby** links timing to Anthropic's approaching IPO — releasing a few weeks ahead so the market prices it into the valuation — and expects **Fable 5.5** to be a bigger leap than anticipated.
- Google's **Patrick Tolmie** reported an NYC AI dinner consensus: Fable 5.5 will be "stunning," but OpenAI will beat it in December with **Bell**.
- Open question: whether labs continue restricting their most advanced internal models and ship mid-size releases, or whether a new round of large frontier releases resumes acceleration.

### 3. OpenAI may revive Sora through a licensing partnership

- Sora briefly topped the App Store in late 2025, displacing ChatGPT, but was mothballed in April when compute was redirected to enterprise use cases like coding — the flagship example of OpenAI ending "side quests."
- *The Information* reports OpenAI is in talks to **license the Sora model** to an unnamed stealth startup founded by **Bill Peebles** (who led Sora at OpenAI), with co-founders including former Disney chairman **Jeffrey Katzenberg** and former Dropbox CFO **Sujay Jaiswal**.
- It is unclear whether the startup would receive full model weights, but it would get enough access to heavily customise the model.

### 4. Amazon's Decart talks signal a bet on inference economics, not models

- Amazon is negotiating to acquire **Decart AI** at a **$7B valuation** — potentially its largest AI-era acquisition. Amazon reportedly explored a $6B deal last month and walked away after due diligence; Decart last raised in May at $4B, implying a ~75% premium.
- Decart, founded 2023, builds **world models for live video** (live character transformation for streams, generative gaming) but has seen limited traction.
- The real asset is the **Decart Optimization System (DOS)**, developed with early access to Amazon's Trainium 3 chips: claimed **8× faster inference at 1/8 the cost**, and hardware-agnostic, so models tuned for NVIDIA GPUs or Google TPUs could run efficiently on Amazon silicon.
- Caveat noted: DOS has so far only been applied to Decart's world models, so general LLM applicability is unproven. Amazon has released no new model series since last December and laid off most of its AI researchers.

### 5. NVIDIA is assembling a Western open-model stack

- NVIDIA is reportedly in talks to acquire **Reflection AI**, whose first model **Beam** launched last week — behind the best Chinese open-weight models on benchmarks but clearly ahead of other US open models including NVIDIA's own Nemotron.
- NVIDIA already holds an **$800M stake**; Reflection was valued at **$25B in March**, so a deal would exceed the **$20B** NVIDIA paid for Grok in December and become its largest acquisition ever.
- **Yuchen Jin**: NVIDIA bought Hugging Face, acquihired Poolside and Essential AI, and is now eyeing Reflection — "Jensen is assembling these NeoLabs to train the US-best open source models."
- Competing interpretations: **Zephyr** reads it as NVIDIA going head-on with frontier labs out of frustration at labs building their own ASICs; **@TetrinisJuCon** counters that NVIDIA invested in OpenAI's current round and that becoming a lab would only accelerate customers' move away from NVIDIA — more likely it is about fixing Nemotron's performance.

### 6. Microsoft's MAIA-300 pushes custom silicon up the stack

- Satya Nadella announced **MAIA-300** as Microsoft's biggest custom-silicon bet to date, claiming **40% more tokens per watt** than leading GPU-based hardware.
- Microsoft plans to scale the MAIA family to **multi-gigawatt deployments** starting next year, making it the primary inference system for Microsoft's own products and services. MAIA-200 is already deployed at smaller scale.
- **Chamath Palihapitiya**'s framing: silicon companies move up the stack as application companies move down; everyone will eventually offer models, silicon, cloud and applications. The open question is what durable constraint supports long-term margins — distribution, a data moat, or a physical constraint like power.

### 7. Meta's return: Muse Wonder and Wonderful

- Less than a year ago most observers had written Meta out of the race; 2025 coverage focused on Zuckerberg's spending to recruit researchers and the internal strife that followed.
- The **Muse Spark** models were "not state-of-the-art, certainly not embarrassing," and good enough to power Meta's consumer app.
- Announced Monday, **Muse Wonder** is the slimmed-down, speed-optimised variant; **Muse Wonderful** is the full version available via API. Alexander Wang framed the family as competing with "the big boys."

### 8. Benchmarks place Meta at the frontier

- **Wonderful**: 79% on DeepSuite 1.1 — nearly 5 points ahead of GPT-6 Astra and ~5.5 ahead of Opus; on Terminal Bench 4.0 it trails those rivals by only 2 points.
- Agentic results are stronger: it topped Meta's internal **Personal Superintelligence Index** by ~4 points over Astra and Opus, and was state-of-the-art on **Harvey Lab** (legal), **Vals finance agent**, and **AutomationBench**. On **OSWorld** (computer use) Wonder sits a few points behind rivals.
- **Artificial Analysis** scored Wonderful **56** and Wonder **52** on its Intelligence Index — Wonderful tied for second with Sonnet 5.5, two points behind Opus 5.5, ahead of Fable 5.1 and GPT-6 Astra; Wonder placed seventh, tied with GPT-6.1 Sol and the unreleased Gemini 4 Argon. Second place on GDPVal AA, third on AA Briefcase.
- Artificial Analysis called this a **"material gain"** over Muse Spark 1.3, achieved just **six weeks** after that release, concentrated in agentic professional work and coding.
- Cost is a drawback: **$4.52 per task**, nearly **3× Muse Spark 1.3**, about $1 more than GPT-6 Astra or Grok 47, and about $1.50 cheaper than Opus 5.

### 9. The hands-on reaction split the community

Positive:
- Shopify's **Toby Lütke**: "This model is very, very good. I was struggling to find anything to throw at it that it couldn't do, even when other top models failed."
- **Theo** placed Muse Wonderful in S-tier alongside Opus 5.5, citing a bug-fix comparison where Wonderful found an existing PR from someone else and recommended merging it instead of writing new code.
- Conductor's **Charlie Holtz**: found a real security vulnerability in one shot that other agents missed; strong at design and visualisation; "really likes sub-agents."
- **BoneGPT** (early access): neck-and-neck or better than Astra, Fable and Opus on every technical benchmark run; described it as warm, soulful, with "big model smell," and predicted Meta wins consumer agents in a landslide.
- **Clairvaux**, testing by category: bad at front-end design, bad at non-email writing, weak on SVG/video/creative design — but "rolls with the big boys" on coding and placed **first of eight frontier models** on agentic tasks.

Negative:
- **Max Blade** gave Wonder and Opus 5.5 the same "AAA lawnmower simulator" prompt and concluded Muse is nowhere near frontier on 3D tasks or printable CAD. The run also burned his $50 plan plus $4.11 in API-equivalent tokens, forcing an upgrade to the $200 plan.
- Researcher **Mehu Mohan**: "Nowhere near Opus 5.5 performance, I'd argue not even GPT-6.1 Sol," calling the benchmark parity "weird" on real programming tasks.
- Every's **Dan Shipper**: on a senior-engineer benchmark (rewriting a vibe-coded database from scratch), Muse Wonder scored **52%** versus **71%** for GPT-6.1 Sol.
- **Riley Brown**: five hours of use, then back to Codex and Claude Code.

### 10. The 3D-demo problem and the Wonder/Wonderful naming confusion

- **Theo** argued critics were discounting Wonder because it wasn't RL'd on 3D the way Astra and Opus were, and that 3D game demos don't represent real code work.
- The host agreed strenuously, adding that it is "net negative to the entire industry" that frontier labs feel compelled to optimise for 3D renderings because those are what get judged on social media.
- **Alexander Wang** conceded: "The whole team feels dumb now, but it's true. We did not explicitly train our model on 3D demo games. In retrospect, we probably should have done a bit of that… please try Muse Wonder on your actual coding work."
- **Adam Holter** identified a branding problem: Wonderful looks strong while Wonder underperforms, and the shared name means bad Wonder results contaminate perception of Wonderful — the two should have launched separately. Wang replied publicly and DM'd him for detail.
- A third complaint: rate limits. **Arafat Shouvo** burned the weekly limit before getting work done; **Matt Silve** used 13% of a 5-hour allowance in under 10 minutes on the $50 plan. Wang suggested a usage-miscounting bug may have been involved.

### 11. Where Wonder fits Meta's consumer-agent strategy

- The host had previously observed Muse was the first AI product whose users largely didn't care which model powered it — but users began hitting capability ceilings. **Sergito**: Muse felt less smart than Instinct, hallucinating on a multi-step task and compounding the error while trying to fix it.
- **Brycent** reported running Instinct, Muse, Grokbot and Dots simultaneously, each for specific use cases, concluding there is no single optimal personal assistant.
- The host's counter-argument: context-switching costs are far higher for personal assistants than for models or coding agents. LLMs can add value knowing nothing about you; **personal assistants get more useful in proportion to what they know about you and which of your systems they can access** — and few people will grant that access to half a dozen agents.
- Concrete failure reports motivated the release: investor **Satya Malik** found Muse good at immediate tasks (booking flights and hotels) but "terrible for long-term tasks," citing repeated false alarms from getting the day wrong. **Sam Lesson** abandoned a hotel booking after Hilton's site put his agent in a doom loop.
- Per **Chubby**, Meta built Wonder specifically for agents acting on a user's behalf, with two key features: **active memory** (tracking what matters to you across conversations) and **active focus** (persisting when tasks get hard, trying alternative approaches, recovering from errors).

### 12. "Personal and professional" — a coordinated message

- Zuckerberg called it state-of-the-art for *personal and professional* agentic work; Wang's post read "State of the Art @ Personal Agents & Professional Agents"; the AI@Meta account mentioned both — indicating deliberate coordinated messaging.
- Two readings offered: either Meta is genuinely pursuing professional use cases, or it recognises that **professional tasks are implicit in any personal agent** — the personal/professional line makes sense to companies but not to how consumers think about themselves.
- The likelihood is not that Meta wants to win enterprise deals against Claude Code, but that a single chosen personal agent will inevitably have to handle work tasks.
- One professional segment is already core to Meta: **small business owners** already using Facebook and Instagram features. **Cetrine Research**: "Meta has a real shot at capturing agents for small business. It's a really good balance of capability and execution."

### 13. Rate of change over absolute capability

- **Pulsius Bencero**: "Muse launched 34 days ago. Now they've joined the frontier."
- **Ethan Mollick** called it a good model on limited testing, but found the *progress* more impressive than the endpoint.
- **Yuchen Jin**: admitted prior scepticism about Meta's billions in talent spending, but said the Muse app and models prove that hiring top talent, assembling a strong team, and giving them an ambitious goal with enough resources works.
- Markets agreed: Meta stock rose **4%** on the news.

### 14. Zuckerberg's dissent from "pacing the frontier"

- Zuckerberg did not sign the pacing-the-frontier letter and countersignalled weeks later with his essay **"The Future is for Everyone,"** arguing open and widespread access must be the core tenet of the AI era even at the cost of extra risk — and that the **concentration of power** from keeping unreleased models internal could be more disastrous than releasing powerful models.
- The host notes Wonder does not itself push the frontier and appears to have strong cyber guardrails, so it is not dangerous relative to what already exists.
- In a *Financial Times* interview Zuckerberg said Meta has reached the frontier and is "already working on that next step up," and that development will "probably feel like it'll go quite a bit faster from here."
- He declined to state a **P(doom)**, saying he is "much closer to the belief that AI is a technology that can be engineered with normal guardrails and built responsibly than the anthropomorphic vision of AI… that it's just going to go do its own thing."
- The host frames this as the fundamental dividing line: OpenAI and Anthropic behave as though they are building machine gods that inspire awe; **Meta is trying to build what it views as a normal technology.**

### 15. The frontier count

- 2026 opened with three frontier labs: OpenAI, Anthropic, Google.
- As coding agents dominated short-term importance, the effective count fell to two.
- Now — especially if Gemini 4 Argon delivers — there are roughly **five** frontier labs competing in the US.
- The caveat: with much more powerful models reportedly close behind closed doors, the frontier could collapse back to a duopoly soon.

## Key Concepts

- **Muse Wonder / Muse Wonderful** — Meta's new larger-class model family; Wonder is the speed-optimised slim variant, Wonderful the full API version.
- **Muse Spark** — Meta's prior model series (latest: 1.3), competent but not frontier, powering Meta's consumer app.
- **Active memory** — Wonder feature that tracks what matters to a user across conversations.
- **Active focus** — Wonder feature that keeps an agent going through difficulty, trying alternative approaches and recovering from errors.
- **Pacing the frontier** — the proposition, formalised in an open letter Zuckerberg declined to sign, that labs should deliberately slow frontier model releases.
- **P(doom)** — an individual's estimated probability that AI causes human extinction; Zuckerberg declined to give a figure.
- **Fast / ultra-fast mode** — premium high-throughput serving tiers (Anthropic's S mode on Fountainhead, OpenAI's fast mode) measured in tokens per second.
- **Decart Optimization System (DOS)** — Decart's hardware-agnostic inference stack, claimed to deliver 8× speed at 1/8 cost.
- **MAIA-300** — Microsoft's third-generation custom inference silicon, claimed at 40% more tokens per watt than leading GPUs.
- **Beam** — Reflection AI's first open-weight model, the strongest US open model though behind Chinese leaders on benchmarks.
- **NeoLabs** — Yuchen Jin's term for the open-model labs NVIDIA is assembling (Hugging Face, Poolside, Essential AI, possibly Reflection).
- **Personal Superintelligence Index** — Meta's internal agentic benchmark, topped by Wonderful.
- **Artificial Analysis Intelligence Index** — third-party composite model-capability score (Wonderful 56, Wonder 52).
- **"Big model smell"** — informal term for the qualitative richness associated with large models, used by BoneGPT to praise Wonder.
- **Side quests** — OpenAI's internal label for non-core projects, e.g. Sora before its April shutdown.

## Summary

Meta has re-entered the frontier AI race in earnest with Muse Wonder and Muse Wonderful, and the benchmarks support the claim: Wonderful ranks at or near the top on agentic, legal, finance and automation evaluations and sits two points behind Opus 5.5 on Artificial Analysis's index, a material gain delivered only six weeks after Muse Spark 1.3. Yet hands-on reactions divided sharply — enthusiastic reports of one-shot security-bug discovery and S-tier coding judgment alongside damning results on 3D rendering, front-end design, and senior-engineer coding benchmarks, compounded by high per-task cost, aggressive usage-limit consumption, and the confusion of shipping a weak slim model under nearly the same name as the strong full one. The host's reading is that much of the criticism reflects a distorted evaluation culture that rewards 3D demos because they perform well on social media, and that the more meaningful story is Meta's rate of change plus its clearly agent-directed design choices — active memory and active focus — aimed at the personal-assistant use case where switching costs are high and a single trusted agent is likely to win. Underlying all of it is a philosophical split: where OpenAI and Anthropic act as if they are building machine gods warranting a slowed frontier, Zuckerberg treats AI as a normal technology to be engineered with ordinary guardrails and distributed widely, and says Meta is already working on the next step up and expects development to accelerate from here.
