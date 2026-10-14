---
title: 'The Best Way to Test New AI Models '
description: >-
  This episode is a recording of a webinar on building a personal AI benchmark —
  a repeatable, self-designed test suite for deciding whether a newly released
  model, harness, or agentic tool actually belongs in your own working stack. It
  is presented...
pubDate: 2026-10-07T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/171722050'
draft: false
---
No source URL or channel was supplied with this episode, and the repo's `patreon_posts.json` is outside this session's writable scope, so the source link is left unresolved rather than guessed.

---

## Overview

This episode is a recording of a webinar on building a **personal AI benchmark** — a repeatable, self-designed test suite for deciding whether a newly released model, harness, or agentic tool actually belongs in your own working stack. It is presented by **Nufar Gaspar**, who designed the five-step process and wrote the accompanying script, together with **NLW (Nathaniel Whittemore)**, host of *The AI Daily Brief*, who frames the problem and moderates. (Nufar Gaspar's affiliation is not stated in the talk.) A third participant, Dan, relays audience questions.

The central thesis: published benchmarks cannot tell you whether a model matters *to you*. Frontier releases now arrive roughly every 11 days, most public benchmarks have leaked into training data, and at current capability levels the deciding factor is less "strictly better" than how a model *feels* and how it fits the rest of your stack. The only reliable substitute is a small, personal, blind-scored benchmark built from tasks you actually do.

- **Source video:** not provided (no URL or channel supplied with this transcript).
- **Title:** *The Best Way to Test New AI Models* (2026-10-07)

## Prerequisites

- **Benchmark contamination** — the idea that widely published eval sets end up inside training corpora, degrading their signal over time.
- **The current model landscape** — awareness that closed frontier models, cheaper/faster tiers of the same families, and open-weight models are released in overlapping waves.
- **API keys and model routers** — what an API key is, and what an aggregator such as OpenRouter does (one key, many models, per-call cost reporting).
- **LLM-as-a-judge** — using a model to score other models' outputs against a rubric, and why that introduces its own error.
- **Writing measurable rubrics** — the difference between "write a good blog post" and a specification with audience, length, required sections, and explicit exclusions.
- **Reasoning/effort settings** — that models expose configurable thinking budgets, and that these are not equivalent across vendors.
- **Non-determinism** — that the same prompt, model, and settings produce different outputs on different runs.

## Main Points

### Why published benchmarks are insufficient

- A frontier model now ships roughly every **11 days on average**; each arrives with an announcement and a table of scores.
- NLW's caution is not that labs lie, but that most benchmarks are **already in the training data** — and the longer a benchmark has existed, the less it reveals. New benchmark creation is more active than six months ago, but limits remain.
- Even if the scores were perfect, decisions now hinge on *fit*: a model that is state-of-the-art on a chart can be worse at your specific version of a task. Writing is the clearest case, being largely subjective.
- There is no shortcut other than using the model yourself on your own work.

### The release-hype curve

- Pattern per release: announcement → score table → about a week of hot takes from early-access users and influencers.
- Early demos skew toward **toy apps, 3D games, and visually shareable artifacts** — results that perform well on social media. Nufar notes the claim that some models may be optimized for exactly that kind of showcase.
- Roughly **seven days in**, reports from real work begin to displace the demos — e.g. "it quietly dropped a condition in my contract review," which matters far more to a lawyer than a recreated 1990s video game.
- Conclusion: listen to early reactions in case something is a genuine step change, but withhold judgment and test it yourself.

### The five-step process

The process applies to models, and equally to a new **harness, agentic tool, or feature**:

1. **Select the tasks** that go into a repeatable benchmark.
2. **Select the candidates** to evaluate, including your current setup as a baseline.
3. **Run the benchmark** — manually, via the shared script, or on a dedicated platform.
4. **Score blind**, with model identities hidden.
5. **Decide** — switch, split, or stay.

### Step 1: Task selection (the most consequential step)

- Cover what you actually do, weighted the way your real usage is weighted between work and personal use.
- Tasks must be ones whose results you would **genuinely act on**; if you don't trust the tasks as representative, the benchmark is not good enough.
- Make the set diverse, and favour work you do **regularly** — that is where uplift compounds. Consider what is at stake: a task where you can spot "clearly wrong" quickly is often more useful than one with subtle definitions of "good."
- Distinguish **clean-slate tasks** from ones that must start from existing material (polishing an email or a deck).
- Include at least one **wish-list task** — something you tried, were unhappy with, and therefore abandoned. This is the task most likely to flag a genuine unlock.
- Recommended count: **four to six**.

Nufar's six: a LinkedIn post from raw notes; a pricing-pushback / sensitive stakeholder email; research into a vendor's current AI tool features (requires web search); a course-participant hub website; a one-shot exercise for a new audience; and — the wish-list item — an intricate weekly plan that no model has yet produced correctly in one shot.

### Two standard objections

- **"The frontier is already good enough — why chase it?"** Response: largely correct, and most people could extract far more value without changing anything. But a release occasionally **unlocks a wish-list use case**, which alone justifies periodic re-testing. Weekly re-testing creates confusion; run it at whatever cadence your bandwidth allows.
- **"My company restricts me to one tool or model."** Response: there is still a choice — between tiers, or between fast and thinking configurations. Benchmarking even that narrow set matters, and a benchmark run on **mock data** can be used to make the internal case for another license.

### Step 2: Candidate selection

- Either a single new release against your current roster, or — as in recent weeks — a group of simultaneous releases; or simply a periodic refresh of a long-unchanged setup.
- Recommended: **up to four candidates, one of which is your existing baseline.**
- Nufar actually ran **seven** and reports it was far too tedious to score across six tasks: Opus 5 (the nominal baseline), Claude Opus 5.5, Grok 4.7, GPT‑6.1 "Sol", Fable 5.1, GPT‑6 Astra, and Kimi as the open-weight entry. Gemini 4 Argon had only been announced, so it was excluded and reserved as the judge family.

### Step 3: Running the benchmark, and blinding

Three execution routes are offered: fully **manual**; the **shared script**; or dedicated evaluation **platforms** (LangSmith, Braintrust, Langfuse and others) — suited to teams doing this at company scale, not the focus of the session.

- Run every request in a **fresh chat**, so accumulated context doesn't distort results.
- Keep everything **frozen**: identical prompt, identical configuration, compared equivalently.
- Four ways to blind the outputs: have a friend anonymize them; randomize with a spreadsheet; have an AI tool shuffle and relabel; or use the provided script, which does it automatically.
- The script requires an **API key** — OpenRouter for many models under one key, per-vendor keys, or a single vendor's key if you are only comparing tiers.
- **Data caution:** do not route company data through OpenRouter. Use mock data or mock use cases. The script's UI is hosted locally, so nothing is shared unintentionally.
- Include at least one **visual** task if you do visual work — visual output is far faster to score — and store the artifacts (HTML and similar) in a dedicated folder so each can be opened full-screen.
- For high-stakes decisions, run each request **several times per model**, since identical inputs yield varying outputs. Nufar saw this the same day: a website generation she loved on the first run came out noticeably worse on the second.

### Step 4: Judging

- **You are the primary judge.** NLW's point about an unexplainable "X factor" holds: you often prefer one output without having the vocabulary to say why.
- Scoring an output in isolation on a 1–5 scale is hard; **side-by-side comparison** — most-liked, least-liked, then scores — is much easier. The script asks for both a 1–5 score and a one-line observation.
- An **AI judge** can be run in addition, against a rubric you define per task ("what is a good LinkedIn post"), then compared with your own scores for agreement.
- Two cautions: **evaluate the judge itself** — if it doesn't correlate with your taste, discard it; and prefer a judge from a **different model family**, because of "AI nepotism," the tendency to favour one's own family.

### Step 5: The decision — switch, split, or stay

- **Switch** — convincingly better and worth adopting. **Split** — route between options with more nuance. **Stay** — the gain doesn't justify changing how you work.
- Winning a benchmark run does not automatically mean switching. Counterweights: company permission, terms and conditions, whether your plan offers enough usage of the new tool, cost, latency, specific features you like, and the real expense of **habit formation**.
- If the delta is not large, staying has genuine merit.

### Walkthrough and the automated runner

- **Discovery prompt** (provided in the materials): an interview-style prompt, best run in a tool with deep memory and context about you. It asked about eight questions, then produced six recommended use cases — and for each, the **actual benchmark prompt plus a scoring guide for the judge**, saved as one file per task. It also reported coverage and flagged gaps; Nufar deliberately excluded personal use.
- **Refine the generated tasks.** If a prompt or rubric looks generic or shallow, rewrite it. An untrusted task set is not a benchmark.
- **The script** reads the saved tasks, calls OpenRouter for each candidate, anonymizes the responses (labelled A–G), and serves a **local web UI**: per task, the rubric at the top, all candidate outputs side by side, and a score-plus-comment box for each.

Described layout of the runner UI:

```
Task: "LinkedIn post generator"
Rubric reminder: what a good answer looks like …
┌──────────┬──────────┬──────────┬─── … ───┐
│ Model A  │ Model B  │ Model C  │   …     │   ← anonymized outputs, side by side
│ output   │ output   │ output   │         │
├──────────┼──────────┼──────────┼─── … ───┤
│ score 1-5│ score 1-5│ score 1-5│         │   ← plus one-line comment each
└──────────┴──────────┴──────────┴─── … ───┘
Visual tasks (HTML) open in a full window from a dedicated folder.
→ "Reveal my scores only"  /  "Reveal with the AI judge"
```

- On the LinkedIn task Nufar scored one candidate **2/5**: readable and clear, but too light and containing the "it's not A, it's B" construction she dislikes in AI writing. Others scored 3 and 4; **none scored 5** — none was postable as-is.
- The website task produced seven complete sites — copy, navigation and all — which she walked through, inviting the audience to guess which model made which.

### Results and the reveal

Per-task winners, after revealing names:

- **LinkedIn post:** Kimi, Fable, Opus — a surprise; she had expected GPT to lead.
- **Pricing pushback:** the **GPT** models, clearly best at negotiation from her perspective.
- **One-shot exercise:** GPT and Grok.
- **Week planning** (the wish-list task): **Grok**.
- **Course participant hub website:** **Claude Opus 5.5**.

(The reveal covers five tasks; the vendor-features research task is not walked through.)

Aggregate findings:

- **Fable ranked first on the judge's average — but at by far the highest total cost**, itself a reason not to adopt it. Fable 5.1 was the most expensive across the board.
- On **Nufar's own** average, Fable and GPT‑Sol were **equivalent**, with GPT‑Sol an order of magnitude cheaper.
- **Grok** had a very long average time despite manageable cost. **Kimi** won on **both cost and duration** and remained competitive on quality.
- **Human and judge agreed on only one task** (pricing pushback) — the basis for taking AI-as-judge with a pinch of salt.
- A structural limitation: the judge, reached over the API, **saw only code and text**, so it evaluated the website task as source rather than as a rendered page. Judging visual work through a plain API is the wrong instrument.
- Her conclusion: she won't let the judge drive decisions; she could tune its instructions, but prefers her own scoring. The roster was "not what I expected." She is biased toward Claude and Cursor with Grok day-to-day, and is now seriously considering more GPT — possibly GPT as the primary tool.
- The benchmark is a **one-time build with repeat value**: once good, re-run it on every significant shift.

### Q&A

- **Cadence and evolving criteria (NLW):** after seeing OpenAI's ultra-fast mode demo, and then waiting up to 20 minutes for a website generation, Nufar found she now weights **speed** far more heavily than before. The subject matter of a benchmark changes little, but what counts as "good" and what changes your mind shift frequently as the bar rises — which is exactly what the wish-list task is for.
- **Effort settings:** ideally hold them equal, though effort tiers are not equivalent across models. The lazy option is OpenRouter's defaults; the diligent option is running models at several effort settings, since effort preference is itself part of your model-configuration roster.
- **Task categories (content / operations / strategy):** tasks that depend heavily on your harness, context and connectors must be run **inside the real setup** (with careful self-honest anonymization), not through a third-party API key that sees only part of the picture. Otherwise build a proxy task that doesn't need the full apparatus. Operations tasks are the most setup-dependent and the riskiest to judge without it.
- **Open-weight models:** depends on your final criteria — security or company policy may rule them in or out, and cost pressure favours them. Task type matters most: for **table-stakes work** like email drafting and basic research, any decent model (Kimi, Mistral, GLM and above) shows no noticeable difference and open weights are as good as it gets. Gaps to commercial models still appear on more sophisticated work. For most knowledge work, open weights are good enough today — especially inside a good harness.
- **Writing the instructions:** use the provided discovery prompt, in a smart model that knows you. Rubrics must be **measurable**, because agentic tools need goals. "Create a good blog post" is unmeasurable; "engaging for executives as well as ICs" is better; specifying exclusions, a word limit, and required sections is better still.
- **Cost of switching:** generous subscriptions ($200/month tiers) **subsidize or hide** real token cost, so raw cost-per-task is not the whole picture — it matters far less if your plan already covers your usage. That generosity may not last. But if you hit rate limits often even on a generous plan, cost does matter to you and you should optimize for it.
- **NLW's closing note:** this process requires more personal tailoring than a typical how-to. Reject the parts you don't find useful, try something else, and share results back. His own approach is "super feel-based" — he runs the same thing through many models constantly — and will differ from others'.

## Key Concepts

- **Personal AI benchmark** — a small, self-authored, repeatable test suite of your own real tasks, used to decide whether a new model or tool belongs in your stack.
- **Benchmark contamination** — the leakage of public eval sets into training data, which erodes their diagnostic value over time.
- **Model roster** — the set of models (and configurations) you deliberately use, often differentiated per task rather than reduced to a single winner.
- **Model stack / harness** — the surrounding tooling, context and connectors a model runs inside; performance is often a property of the combination, not the model alone.
- **Wish-list task** — a task you abandoned because AI did it badly, kept in the benchmark specifically to detect newly unlocked capability.
- **Blind taste test** — scoring anonymized, side-by-side outputs to neutralize brand bias toward favourite tools.
- **LLM-as-a-judge** — a model scoring other models' outputs against a predefined rubric, used alongside (never instead of) your own scoring.
- **AI nepotism** — the observed tendency of a judge model to favour outputs from its own model family, motivating a judge from an unrelated family.
- **Scoring guide / rubric** — the per-task definition of a good answer, appended to the task file and given to the judge; must be measurable to be useful.
- **Switch / split / stay** — the three permitted outcomes of a benchmark run.
- **OpenRouter** — a model aggregator giving access to many models through one API key, with per-call cost reporting; not for confidential company data.
- **Evaluation platforms** — LangSmith, Braintrust, Langfuse and similar, for teams needing systematic, ongoing evaluation and monitoring.
- **Effort setting** — a model's configurable reasoning budget; not equivalent across vendors, so a confound in cross-model comparison.
- **Table-stakes tasks** — work (email drafting, basic research) where capable models are indistinguishable, so open-weight options suffice.

## Summary

With frontier models arriving every week or two, each accompanied by benchmark tables that have largely leaked into training data and a week of demo-driven hype, published scores can no longer tell an individual operator whether a release matters to them. Nufar Gaspar's argument is that the replacement is a small amount of deliberate personal work: pick four to six tasks you actually do regularly and would act on, including one you gave up on; pit a handful of candidates — your current setup among them — against them; run each in a fresh chat with identical prompts; score the outputs blind and side by side, with an AI judge from a different model family as a secondary and fallible signal; and then decide to switch, split, or stay, weighing cost, latency, policy constraints and the real expense of changing habits. Her own run demonstrates the payoff and the caveats at once: the winners were distributed across tasks rather than concentrated in one model, several results contradicted her expectations, the top-scoring model was disqualified on cost, her judge agreed with her on only one of five tasks, and it could not meaningfully evaluate visual work at all. The benchmark is a one-time build with lasting value — and the exercise is worth doing at least once simply for how reliably it surprises you.
