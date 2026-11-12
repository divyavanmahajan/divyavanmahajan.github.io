---
title: The AI Rankings Just Got Reshuffled
description: >-
  The episode covers a major revision to Artificial Analysis's Intelligence
  Index — the composite benchmark most widely used to rank frontier AI models —
  and the new model that immediately took the top of it, Google's Gemini 4
  Carbon. The central th...
pubDate: 2026-10-29T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/173785026'
draft: false
---
## Overview

The episode covers a major revision to Artificial Analysis's Intelligence Index — the composite benchmark most widely used to rank frontier AI models — and the new model that immediately took the top of it, Google's Gemini 4 Carbon. The central thesis is that benchmarks are inherently limited but necessary: without them, model comparison reduces to vibes, yet no single benchmark score should be treated as gospel. The speaker argues that the ongoing work to improve benchmarks, and even the disagreements that follow each revision, are valuable to how the field understands model capability.

The episode is *The AI Daily Brief*, described in the transcript as "a daily podcast and video about the most important news and discussions in AI." The host is not named in the transcript, and no affiliation is stated. The episode opens with a Headlines Edition segment (Gemini 4 Carbon, Google/Microsoft earnings, NVIDIA antitrust) before moving to the main episode on the index.

**Source link:** No source URL was supplied with this transcript. The video-details block is empty, and this is a Patreon-distributed podcast rather than a YouTube video, so no YouTube link can be cited. Episode identifier: `2026-10-29-the-ai-rankings-just-got-reshuffled`.

## Prerequisites

- **LLM evaluation basics** — what a benchmark is, what a composite index does, and how weightings across sub-benchmarks determine a headline score.
- **Benchmark saturation and benchmark maxing** — why benchmarks degrade over time, and how training on evaluation data inflates scores.
- **Pre-training vs. reinforcement learning (RL) post-training** — why a lab with a fresh base model can ship improved variants quickly without a new pre-training run.
- **Agentic AI and computer use** — models operating tools, terminals, and GUIs rather than only generating text.
- **Long-context reasoning, context rot, and compaction** — the problems large codebases posed, and the memory/compaction techniques that eased them.
- **Open-weights vs. proprietary models** — and the ongoing US/China capability comparison.
- **Hyperscaler financial vocabulary** — cloud revenue, CapEx guidance, acquihire deals, antitrust review triggers.

## Main Points

### Google released Gemini 4 Carbon two weeks after Argon

- Carbon arrived roughly two weeks after Gemini 4 Argon — one of the shortest gaps seen between versions of ultra-large models. The speaker attributes the pace to Google already having a new base model, allowing fast RL iteration instead of a lengthy pre-training run.
- CEO Sundar Pichai said on the Wednesday earnings call: "This rapid progress underscores our incredible model momentum. We are at the point where AI is helping us increase our training and launch velocity. I would expect the next 12 months to see continued acceleration because of RSI."
- Benchmark gains over Argon: coding +8 on Terminal Bench 4.0 and +6 on Frontier Suite; cybersecurity +12 on Exploit Gym and +3 on CWE Bench; computer use +7 on OS World and +8 on Agent's Last Exam.
- Carbon leads six of those eight key benchmarks, ahead of Astra and Opus 5.5. It took first place on the new Artificial Analysis Index V5 with 59 points — a 9-point jump on the new scale — and placed second on the AA Coding Index, tied with Sonnet 5.5 and three points behind Opus 5.5.
- Cost is essentially unchanged from Argon at $7.76 per task: 23% cheaper than Opus 5.5, 20% more expensive than Astra.

### Carbon's reception is provisional because almost no one has used it

- Google unveiled the model before general release, citing the administration's pre-release model testing guidelines and a "deliberate approach to the rollout." Initial access goes to a subset of cyber defenders and trusted partners in Google's cyber defense program; Google said it is "continuing to gather feedback and iterate on guardrails" before releasing to developers, businesses, and consumers.
- Arena had testing access and published render and game-design tests that were criticised for not matching Opus 5.5's visual output. The speaker notes he is "not particularly convinced that 3D design is the right yardstick for LLMs," while conceding Carbon trails on that use case.
- Arena's Peter Gosted posted that Carbon "feels a lot better than Argon. This is a real deal from Google this time."
- A DeepMind researcher and others hinted at a further unreleased Gemini model beyond Carbon. Several mangled social-media handles in the transcript are omitted here rather than reconstructed.
- Context for the swing in sentiment: when Argon launched two weeks earlier, some felt Google had missed its window, since Opus 5.5 and GPT-6.1 Sol had pushed the frontier past it, leaving Google in a second tier alongside Meta. The speaker's position is to "suspend judgment until we get our hands on the actual model."

### Google and Microsoft earnings: cloud strength, and a CapEx plateau

- Microsoft's Azure grew 48% year over year to $33 billion — the first time Azure has been broken out as a separate line item. Total revenue grew 19% to $92.3 billion, both figures slight beats. OpenAI contributed $10 billion to Azure revenue, roughly a third of the division. The stock rose as much as 4.8% to an after-hours all-time high.
- Google Cloud doubled year-over-year revenue to $30.7 billion, nearly closing the gap with Microsoft and well above high expectations.
- "The problem is everything else" (David Wagner, Aptis Capital Advisors): search revenue growth fell to 12% from 17% and 19% in the two prior quarters; YouTube growth slowed a third consecutive quarter to 9.2%; executives dodged a question on TPU profit margins. Overall growth was 25%, roughly in line. Google also missed on bottom-line earnings due to a markdown on its SpaceX stake. The stock fell as much as 10% after hours.
- Pichai acknowledged search cannibalisation: "the strong growth in AI mode queries had an impact because of the lower monetization we're seeing in AI mode." Dan Ives countered that "this is the cloud print we have been waiting for... it matters more than a lighter search number."
- **The CapEx argument:** both companies held CapEx forecasts steady for this year and next, but actual quarterly spend came in under expectations; Oracle and Meta are similarly positioned. Google is guiding a 50% CapEx increase next year to $300 billion while undershooting this year. The speaker argues this does not match the AI-bear thesis that a CapEx slowdown would prick the bubble — that theory assumed demand would falter and force hyperscalers to slow. Instead, hyperscalers appear to want to keep accelerating but are hitting physical constraints: components, power, labour, and community support. Google said it will discuss CapEx in more depth next quarter.

### The DOJ investigation into NVIDIA is broader than assumed

- Reuters reports the DOJ has queried NVIDIA's $13 billion September acquisition of Hugging Face, asking specifically whether owning it would let NVIDIA control a key distribution point for AI models. NVIDIA maintains Hugging Face would remain free to partner across model developers, chipmakers, and cloud providers; the deal is expected to close in the first half of 2027 pending approval.
- This turns out to be part of a multi-year antitrust investigation. In September the *New York Times* reported a DOJ inquiry into NVIDIA's licensing and talent deal with chip startup Grok — structured as an acquihire, a practice dating back to Google's 2024 Character AI deal, which avoids triggering automatic antitrust review and can close faster.
- The assumption had been that the DOJ was using NVIDIA to crack down on acquihires generally. Sources now say the investigation predates the Grok deal and also covers the traditional acquisitions of data-centre optimisation companies SkedgeMD and RunAI, plus NVIDIA's venture investments, sales practices, and whether it has pressured customers.
- No charges have been filed and the investigation could end with no action; the speaker states there is no implication of improper conduct, only that the scope is wider than expected.

### Benchmarks are limited but necessary

- The speaker addresses the apparent contradiction in his own coverage — urging limited attention to benchmarks while reciting them at every model release. His position: without benchmarks there is no tool beyond "strictly vibes," but no single benchmark score, or even the aggregate, should be taken as gospel.
- Done well, benchmarks are "a useful guide to helping us understand where different models fit into our overall stack."
- The Artificial Analysis Intelligence Index distils roughly a dozen key benchmarks into one score. Relying so heavily on a single number is a relatively new phenomenon.

### How evaluation evolved into the index

- Pre-agentic-coding era: LLMs were "glorified Google or writing assistants," vibes reigned, and Chatbot Arena ranking was the pinnacle test because it reflected what users wanted.
- As research and coding became primary use cases, more objective benchmarks emerged. These evolved first by adding harder questions as benchmarks saturated — when all models crowd the top score, creators add harder items to restore granularity, until that version saturates too.
- When agentic computer use became fundamental, evaluations were rethought more completely. Artificial Analysis evolved alongside, swapping benchmarks and rebalancing weightings as different capabilities gained importance.
- The process has not been smooth: the index has at times looked saturated and stopped discriminating well, and benchmark maxing has let developers rank above what real-world testing supports — "a fairly consistent story when it comes to Chinese open-weight models."
- **The V4.2 precedent (early September):** Artificial Analysis pulled forward planned V5 changes after GPT-6 Astra shipped with a heavy computer-use focus. V4.1 weighted agentic benchmarks lightly, giving Astra a score that "didn't really comport with people's lived experience." Post-update, Astra still ranked slightly behind Fable 5.1, but the index better reflected actual usage. The speaker frames this as the index's recurring story: "a constant cat-and-mouse game of updating the mix of benchmarks to match the rapidly evolving real-world use cases for AI."

### What V5 changed

- **Private datasets:** for the first time, a majority of the index's benchmarks are built on private data, making benchmark maxing harder because developers theoretically cannot train to the test. Benchmark maxing is defined in the episode as including evaluation tests and their answers in training data, so the benchmark "ceases to measure what the model can do, and instead reflects simply a memory of the correct answers."
- **Added:** Frontier Code 2.0 (Cognition's new private benchmark of real-world coding tasks, scored on whether a repository maintainer would merge the code) and Terminal Bench Science (agentic scientific research).
- **Upgraded for saturation:** Humanity's Last Exam becomes HLE Diamond; similar updates to AA Omniscience (knowledge and hallucination) and CritPT (physics).
- **Removed:** GDP Val AA, replaced for white-collar work by AA Briefcase, Automation Bench AA, and GDP.pdf for more granular measurement; also removed are SciCo (scientific research) and AA-LCR (long-context reasoning).
- **Weighting:** the index is equally weighted — 25% each — across four categories. The transcript renders these as "knowledge work, coding, science in general, which encompasses both general knowledge as well as hallucination rate"; the fourth label is garbled in the source and is not reconstructed here.
- **What the changes imply:** when V4 shipped in January, long-context reasoning was critical for large codebases, since many coding models had limited context windows and "fatal issues with context rot." Compaction and memory improvements since then let that performance be taken for granted. The coding benchmarks now measure only agentic performance, and the science benchmarks test real-world agentic research rather than pre-existing scientific knowledge. The speaker reads the 25% science weighting as "a forward-looking bet" on how Anthropic and OpenAI have been trading science and math headlines.

### The reshuffled rankings

- Opus 5.5 led V5 at 58 until Gemini 4 Carbon arrived Wednesday at 59.
- GPT-6 Astra: second at 57, up from sixth — a large jump attributable to the added weight on computer use and scientific tasks.
- GPT-5.1 Sol: third, up from ninth. Sonnet 5.5: fourth, down from second. GPT-6.1 Terra: fifth, up from tenth, which the speaker reads as the model being somewhat better than assumed.
- Gemini 4 Argon gained a rank to tie Meta Wonder in sixth — a notable drop for Wonder from third, though many felt that earlier ranking didn't match real-world experience. Fable 5.1 slid from fifth to eighth. Kimi K 3.1 Pro fell from fourth to ninth, one of the most notable drops.

### The open-weights gap widened sharply

- Artificial Analysis: "The open weights gap widens from 3 points to 12." Kimi K 3.1 Pro is the top open-weights model at 46; among models with released weights, DeepSeek V4.1 Flash and GLM 5.3 lead at 32 — 26 points behind the overall index leader, and below Claude Haiku 5.5 at 36.
- A second cliff appears beyond the leading labs: Anthropic, OpenAI, Google, and Meta all have models at 50 or above; Fable 5.1 and Kimi K 3.1 Pro sit just outside; then a 10-point gap to Claude Haiku 5.5, which leads the rest. The speaker's reading: adding agentic tasks created "a clear separation between frontier models and the rest."
- **Counterpoint (Kyle Chan, Brookings Institute):** private benchmarks existed before V5; their share rose from 45% to 60%. The headline 3-to-12-point gap matters less than the specifics. Kimi's major weakness is science — 34% on Terminal Bench Science versus 63% for GPT-6 Astra — but it remains "extremely strong at coding agents," leading all models on Terminal Bench 4.0 at 67%. On gaming: "Not necessarily. Some of Kimi's biggest deficits are on non-private benchmarks, while it actually beats Claude on the private Automation Bench AA evaluation." His conclusion: Chinese models can match or beat US frontier models on certain agentic tasks, but a significant gap remains in advanced scientific reasoning and research workflows.

### Cost varies widely across the frontier

- Artificial Analysis notes the top 10 mixes large models, token-intensive models, and smaller efficient ones, so cost per task spreads widely.
- Extremes: GPT-6.1 Terra cheapest at $0.96 per task; Fable 5.1 most expensive at $13.04.
- Comparing like sizes: Opus and Sonnet around $10 per task; GPT-6 Astra $6.24; GPT-6.1 $1.27. Muse, Wonder, Grok 4.7, and Gemini 4 Carbon all sit slightly above Astra in the high-$7 range.

### Reception, and the critiques worth taking seriously

- Dean Ball (OpenAI head of strategic futures): "This is the first time an artificial analysis ranking has even roughly approximated my own subjective ranking of models."
- Hasib Qureshi: the re-ranking "seems to match the vibes a lot better and clear out a lot of benchmaxing. Shows a deeper gap between Anthropic, OpenAI, and everyone else. Also shows a bigger gap between closed and open weights."
- Ethan Mollick said it matches the general vibe "that we haven't seen a fable class open model." Creator Theo: "Terrible day to be an open weights models are just as good as Opus 5.5 guy."
- **The weighting debate:** the speaker expects the biggest argument to be over what the weightings should be. OpenAI and Anthropic clearly emphasise scientific discovery, but relative to the average individual use case, does science matter as much as agentic coding? That could argue for different weightings — or for ignoring the headline number and reading the individual benchmarks for the use-case categories you actually care about.
- **The max-settings critique**, which the speaker calls worthy of consideration: leaderboards run models at max settings. One commenter: "No one runs max in real life. Where's the medium slash high slash extra high leaderboard?" Artificial Analysis does factor effort setting into its cost analysis, but the speaker suggests users would be better served by being able to organise the index by effort level as well as by model.

### The new Progress Index

- Alongside V5, Artificial Analysis introduced a Progress Index placing every model released since November 2022 on a capability scale, to show how each lab's leading model improves over time.
- It is designed as a long-term view of model progression rather than a current-batch comparison, but gave people a large dataset to analyse.
- One analyst used it to examine how the shift to reasoning models affected the major labs, concluding either that "OpenAI really does have the best reinforcement learning, or their models just suck without reasoning." Charting the same data differently, they estimated the US–China gap at 3.3 months and closing.

## Key Concepts

- **Artificial Analysis Intelligence Index** — A composite score distilling roughly a dozen key benchmarks into a single number used to rank frontier AI models.
- **Intelligence Index V5** — The latest overhaul: a majority-private benchmark set, new agentic coding and science tests, and four equally weighted (25%) categories.
- **AA Progress Index** — A companion index placing every model since November 2022 on a capability scale to track long-term progression per lab.
- **AA Coding Index** — Artificial Analysis's coding-specific leaderboard, separate from the overall intelligence score.
- **Benchmark saturation** — When all models cluster at a benchmark's ceiling, so it no longer discriminates between them; addressed by adding harder questions.
- **Benchmark maxing** — Including evaluation tests and answers in training data, inflating scores so the benchmark measures memorisation rather than capability.
- **Private benchmark datasets** — Held-back evaluation data that developers cannot train against; now the majority of the V5 index.
- **Frontier Code 2.0** — Cognition's private benchmark of real-world coding tasks, scored on whether a repository maintainer would merge the submitted code.
- **Terminal Bench Science** — A new agentic benchmark for real-world scientific research work.
- **Terminal Bench 4.0** — An agentic coding benchmark; Kimi K 3.1 Pro leads all models on it at 67%.
- **HLE Diamond** — A harder revision of Humanity's Last Exam, originally pitched as a near-impossible knowledge search task.
- **AA Omniscience** — Artificial Analysis's benchmark measuring knowledge and hallucination rate.
- **CritPT** — A physics benchmark, updated in V5 for saturation.
- **AA Briefcase / Automation Bench AA / GDP.pdf** — The three benchmarks now measuring white-collar agentic work, replacing GDP Val AA.
- **AA-LCR** — A long-context reasoning benchmark, removed from V5 as compaction and memory improvements made that capability a given.
- **Context rot** — Degradation of model performance as context windows fill, a formerly fatal issue for coding on large codebases.
- **Compaction** — Techniques for condensing context that reduced reliance on raw long-context performance.
- **Chatbot Arena** — The user-preference leaderboard that was the pinnacle model test before objective coding and research benchmarks took over.
- **Cost per task** — Artificial Analysis's normalised price metric, spanning $0.96 (GPT-6.1 Terra) to $13.04 (Fable 5.1) across the top 10.
- **Effort setting** — A model's reasoning-intensity level (medium/high/max); leaderboards run at max, which critics say doesn't reflect real usage.
- **Open-weights gap** — The score difference between the best open-weights model and the leader, widened from 3 to 12 points under V5.
- **Acquihire** — A licensing-plus-talent deal structured to avoid being a technical acquisition, so it doesn't trigger automatic antitrust review.
- **RSI** — Referenced by Pichai as the driver of expected acceleration in training and launch velocity over the next 12 months.

## Summary

The episode argues that benchmarks are simultaneously indispensable and untrustworthy as a single number, and that Artificial Analysis's V5 Intelligence Index is the clearest illustration of both facts. V5 shifts the majority of its benchmarks to private datasets to blunt benchmark maxing, drops long-context reasoning as a now-solved problem, replaces static scientific knowledge tests with agentic research ones, measures coding only agentically, and weights knowledge work, coding, and science equally at 25% each. The result reshuffled the leaderboard substantially — GPT-6 Astra rose from sixth to second, Kimi K 3.1 Pro fell from fourth to ninth, and the open-weights gap widened from 3 points to 12 — and most commentators, including people at OpenAI, said the new ranking matches their subjective experience better than any previous version. Google's Gemini 4 Carbon then took first place at 59, two weeks after the underwhelming Argon, putting Google credibly back at the frontier, though the speaker withholds judgment until the model is generally available. His closing message is that the limitations of benchmarks are not a reason to dismiss them: the effort going into improving them, and even the unresolved debates about weighting, effort settings, and what the headline number obscures, are themselves valuable to understanding how models compare. The practical implication he offers is to read the individual benchmarks for the use cases you care about rather than the composite score alone.

---

Two items the task asked for that the transcript does not supply: the **source URL** (the video-details block was empty; this is a Patreon podcast, and I did not generate a substitute link) and the **speaker's name and affiliation** (the transcript identifies only the show). I also left several garbled social-media handles unattributed rather than reconstructing them, and flagged the one garbled V5 category label above.
