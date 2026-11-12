---
title: AI Lurches Toward Recursive Self-Improvement
description: >-
  Speaker: NLW, host of The AI Daily Brief (also host of the How We Got Here
  podcast). Source: URL not supplied with this transcript.
pubDate: 2026-11-03T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/174302393'
draft: false
---
## Overview

**Speaker:** NLW, host of *The AI Daily Brief* (also host of the *How We Got Here* podcast).
**Source:** URL not supplied with this transcript.

The episode's through line is **recursive self-improvement (RSI)** — AI systems improving AI systems — and what it implies for model capability, cost, and the economics of the AI industry. The speaker frames three otherwise-separate stories as facets of one question: how the continued acceleration of AI capability meets the reality of AI adoption and monetisation. Elon Musk's admission that serving Grokbot is unsustainably expensive reopens the "end of the subsidy era" debate; new benchmarks attempt to measure what personal agents are actually worth; and an MIT paper showing a frontier model directly editing a smaller model's weights gives RSI a concrete demonstrated mechanism.

The speaker's own position is two-sided. He treats RSI as a genuine and important technical trend, but pushes back on the unstated assumption embedded in most investor discussion — that better models translate linearly into greater adoption and revenue. His closing argument is that the field is stuck on *whether RSI has arrived* rather than *what it will mean when it does*.

## Prerequisites

- **Recursive self-improvement (RSI)** and its relationship to AGI discourse.
- How LLMs are trained: gradient descent, fine-tuning, distillation, and reinforcement learning — in particular **PPO (proximal policy optimization)**, described in the talk as a standard RL algorithm at the major labs.
- What model **weights** and **parameters** are, and roughly how parameter counts scale from small open models (sub-1B) to frontier models (>1T).
- **Mechanistic interpretability** — the research tradition of attributing functions to individual neurons or weights.
- AI business-model fundamentals: API token pricing vs. flat-rate subscription plans, free-tier cost structures, inference cost, and venture subsidy of unit economics.
- The "AI bubble" debate of late 2025 / 2026 and the bull/bear framing around it.
- **Personal agents** as a product category (Grokbot, Meta's Muse, Dots, Duet, Nous Research's Hermes).
- Anthropic's **Responsible Scaling Policy / ASL** framework and the idea of capability danger thresholds.

## Main Points

### 1. Musk's Grokbot cost admission reopens the subsidy debate

- Over the weekend Musk posted that "the cost of serving Grokbot was unsustainably high relative to revenue," responding to users who had suddenly begun hitting usage limits.
- The speaker notes an apparent contradiction in Musk's recent messaging: days earlier he had said "saving money for the distant future is pointless with the advent of super intelligent abundance," and weeks earlier had called Grokbot's growth unprecedented and value-positive because it has no free tier. Commentators (Bruno Lemos, Benjamin DeCracker) flagged the reversal.
- User anger centred less on cost than on the silent change in what was delivered — captured in a widely-shared analogy about being sold a 12-inch pizza and one day opening the box to find a 6-inch, then being told it was the wrong subscription choice.
- Competitors treated it as an opening: commentary suggested users would return to Dots and Duet, and Nous Research published migration instructions for moving from Grokbot to Hermes.
- (Note: the transcript twice attributes Grokbot to "SpaceX AI"; the referent is as-transcribed.)

### 2. The deeper question: is the personal-agent category structurally unprofitable?

- Dax of OpenCode argued this is "another major reason why we weren't super excited about this shape of product" — people won't pay for personal agents, so the category has to be a top-of-funnel product leading to something else, and what that something else is remains unclear.
- The speaker places this in a longer lineage: the same argument was made in the autumn 2025 bubble debates about ChatGPT's free tier being a hindrance rather than an asset, and he had himself done an "AI subsidy era" episode in late April.
- Market bears generalised aggressively — predictions that Musk would abandon the race, that "VC money runs out → prices rise → users drop off → valuations plummet," and that the subsidy era is simply ending.
- Hedgie Markets cited an analysis (attributed by the speaker to SemiAnalysis) that a full month of a $200 ChatGPT Pro plan would cost roughly **$14,000 at standard API prices**.
- The bear thesis in its sharpest form: once companies charge the natural, unsubsidised price — token cost plus margin — users will not value intelligence enough at that price to sustain current spending, so all current valuations are mispriced.

### 3. The speaker's rebuttal: repricing changes less than it appears

- He states explicitly that he is not an AI bear but welcomes the bears: he argues bubble risk falls in proportion to how loudly and resonantly bearish analysis is heard, while cautioning against perma-bears who repeatedly move the goalposts.
- His prediction is that plan users split into two groups: those for whom more efficient, cheaper models are good enough and who stay on $20–$30 plans unaffected; and those extracting enough value that they will pay for the intelligence they consume as a cost of doing business.
- From personal experience he describes running APIs alongside premium plans at a premium cost that is still far below comparable human labour — and argues the comparison is not one-to-one, since the human alternative would have cost too much in both money and time-to-recruit. That makes it **net new spending**, not substitution.
- He identifies an internal tension between two bear arguments held side by side: that users will churn when made to pay API rates, *and* that revenue is already dangerously concentrated among a small number of power users. He judges the more interesting middle position to be Chamath Palihapitiya's — that too many of those power users are themselves VC-subsidised.
- He flags that Musk has a pattern of fanning market panic (commenting "yikes" on CoreWeave's bond selloff; saying debt markets have shut off access to capital for companies without AI-independent revenue), and notes speculation that this is strategic positioning for cheap acquisitions — while concluding that this is unknowable.

### 4. The counterweight: Meta's Muse and the SMB distribution thesis

- Olivia Moore (a16z) argues the underrated story in consumer agents is not consumer at all but **Muse for small businesses**.
- The asserted distribution advantage: ~3.64 billion daily active users across Meta apps at very low acquisition cost, and more than **500 million SMBs** already using Meta for marketing.
- Giving agent discoverability to that SMB base could particularly benefit local businesses able to hyper-target users with urgent purchase needs.
- Meta has stated (Q3 earnings call and prior blog posts) plans for an ecosystem of SMB connectors in Muse — Meta account analytics plus QuickBooks, Canva, Stripe and others — which Moore frames as Muse becoming "almost a nervous system for SMBs."

### 5. Two new benchmarks try to price the value of agents

- **GDPX** (SemiAnalysis) measures economically valuable tasks such as chip design, finance, and biology. Results cited:

  | Model | Score | Cost per task |
  |---|---|---|
  | Opus 5.5 | 12% | $51 |
  | Gemini 4 Carbon | 10.9% | $16 |

- Commentary (Chubby on X) emphasised the efficiency reading: Gemini 4 performs only 1.1 points worse at roughly 4× lower cost, so on cost-performance it "wins by a lot."
- The speaker connects this to a live lab priority: using more efficient models to drive down personal-agent cost, mirroring the trajectory of coding agents through the year — and notes new training techniques may yield stronger small models that make personal agents far more cost-effective.
- **LifeVal** (OpenAI) measures everyday-life usefulness: finding childcare, accessing government services, budgeting, school prep, modifying recipes, ordering groceries, workout plans. Scores rose from **49.3% (GPT-5.2) to 80.6% (GPT-6 Astra)**.
- The speaker's structural point: OpenAI is now hill-climbing against everyday tasks with free users in mind, and as with coding, once a capability is measured and becomes an RL target it improves sharply and becomes cheaper. Others read the publication as pre-announcement positioning for a general-release personal agent.

### 6. The MIT result: a frontier model editing another model's weights

- MIT researchers, led by PhD student Rukia Takahi (as transcribed), found **GPT-6 Astra** able to read and directly adjust the weights of a small model to improve its performance.
- Setup and result: target model **Qwen3.5-0.8B**, objective improved reasoning. Astra changed only **0.016% of weights** and improved math-benchmark scores **6×** and instruction following **3×**.
- Method, per Takahi: they simply asked Astra to make the model better at math. Astra observed it getting stuck in reasoning loops — a known failure the model card itself warns about — and with a budget of **50 forward passes** on practice problems, located the cause and edited it out. **No gradients and no training were used.** Fixing the loops lifted capabilities beyond math.
- From the abstract: frontier LLMs are "surprisingly good at natively reading and writing neural network weights, well past what we'd expect from humans or conventional algorithms," with implications for both optimization and interpretability. Additional claim: with no environment feedback, Astra wrote small game-playing networks from scratch that outplay networks trained with **PPO for 100 million steps**.
- Described textually, the pipeline is: *frontier model → inspect target weight tensors → diagnose behavioural failure → emit a targeted weight edit → evaluate on practice problems* — substituting inspection-and-editing for the usual gradient-descent loop.

### 7. Replication and the overhype dispute

- Ethan Mollick's reaction was to wait for replication. Alex Krenzel, a senior Google researcher, replicated the results shortly afterwards and called it "a new step change emerging capability that's appeared in just the latest set of models."
- Krenzel's caveat on scale: the edited models are very small — the breakout model in his experiment had **20,486 parameters**, against frontier models at more than a trillion.
- His framing: this resembles the 2010s interpretability tradition of identifying single-function neurons ("this is the dog neuron"), but scaled beyond human capability — done by hand for small models, then with tooling for slightly bigger ones, and now by reasoning models for much larger though still relatively small networks.
- Krenzel's proposed next step is testing **self-improvement at runtime**, which he does not expect to be feasible for current models but thinks could work within a few generations.
- The dispute split both ways. Chandan Singh (Voyage AI) argued the paper is *under*sold, reporting similar experiments in which Claude models wrote entire functioning neural-net weights from scratch; Nick Dobos argued the buried lead is from-scratch weight generation rather than the bug fix, and asked whether training large models is still needed at all. Wei Ye Zhu (Microsoft Research) called the headline overhyped: the 6× gain came from fixing a loop bug, not from improving general math capability — i.e. closer to a bug fix than a new training technique.
- For others (e.g. Tenebris) the result establishes a concrete, demonstrated mechanism for RSI, with the argument that interpretability is inherently dual use: models good at optimization in general are good at optimizing themselves.

### 8. Institutional response: Anthropic's policy update and the research-contribution chart

- An update to Anthropic's ASL documentation on Monday morning added language saying internal estimates indicate they **may imminently meet the RSI danger threshold** — defined as dramatically accelerated AI-attributable progress, specifically as much progress in one year as two years of the 2018–2024 baseline (reported by Andrew Curran).
- Anthropic added that they are considering updates to their Responsible Scaling Policy because they "do not anticipate being able to safely use Claude to fully autonomously design and build successive generations of frontier models without meaningful human supervision or understanding" — the changes aimed at keeping humans in control of frontier model development.
- Financial coverage picked this up ahead of Anthropic's approaching IPO: the *Wall Street Journal* ran an Anthropic chart showing AI now leading **26% of research**, headlined as "the world's most important chart" — AI starting to build better AI. The chart was first published in September on August numbers and was boosted over the weekend by former AI czar David Sacks.
- The headline appeared to reference Anthropic co-founder Jack Clark's claim that RSI "might be the most important technical trend in the world."

### 9. The speaker's closing argument: capability is not the adoption bottleneck

- He highlights an assumption so embedded in the discussion that no one states it — that the key to greater adoption is improved models. The supporting evidence is historical: genuine step changes have unlocked new capabilities that drove far more adoption, most notably the Opus 4.5 jump that opened the agentic coding era.
- Absent an entirely new capability coming online, he does not think the evidence supports model capability alone as the driver of adoption. Whether the business models work is, in his view, a question of **how much intelligence enterprises consume** — currently a vanishingly small share of what they could.
- The reason is not insufficient capability but that "inertia is real, corporate systems are lumbering, and adoption is hard." He notes this supports either case: the bear reading is that with all this power we are not using it; the bull reading is that we are not using it *yet*.
- His final point is about the shape of the discourse: the conversation remains stuck on "is RSI here yet or isn't it" rather than what it means when it arrives. The only group currently offering any vision of a post-RSI world is the AI safety community that fears it and thinks it should be illegal — and whatever one's agreement, they are at least articulating it.
- He draws the parallel to AGI: as with that term, the three-letter acronym risks absorbing more attention in definitional argument and proximity estimates than in understanding its consequences.

## Key Concepts

- **RSI (recursive self-improvement)** — AI systems improving AI systems, producing compounding acceleration in capability; the episode's organising theme.
- **Weight editing** — directly reading and modifying a trained network's parameters to change its behaviour, without gradients or further training.
- **PPO (proximal policy optimization)** — a standard reinforcement learning algorithm in use at the major labs, used as the baseline the MIT-paper networks outperformed.
- **Distillation** — transferring capability from a large model to a smaller one; the comparison point commentators used for weight editing ("even cooler than distillation").
- **Interpretability** — research into what internal components of a network do; framed in the talk as dual use, since optimizing understanding enables self-optimization.
- **Reasoning loops** — a failure mode in which a model cycles without converging; the specific defect Astra diagnosed and edited out of Qwen3.5-0.8B.
- **GDPX** — SemiAnalysis benchmark scoring models on economically valuable tasks (chip design, finance, biology) with per-task cost reported alongside accuracy.
- **LifeVal** — OpenAI benchmark measuring agent usefulness on practical everyday tasks such as childcare search, budgeting, and grocery ordering.
- **Personal agents** — the consumer product category covering Grokbot, Muse, Dots, Duet, and Hermes, whose unit economics the episode interrogates.
- **The subsidy era** — the period in which AI plans were priced below cost, with investors covering the gap in order to win users.
- **Natural / API price** — what tokens actually cost plus margin, i.e. pricing unsubsidised by venture or private-equity capital.
- **RSI danger threshold** — Anthropic's ASL criterion: AI-attributable progress equal to roughly two years of the 2018–2024 baseline achieved in one year.
- **Responsible Scaling Policy (RSP)** — Anthropic's framework of capability thresholds and corresponding safeguards, under review in light of RSI.
- **Muse for SMBs** — the thesis that Meta's agent's real leverage is its 500M+ small-business marketing base plus a connector ecosystem, not consumer use.

## Summary

The speaker argues that three apparently unrelated stories — Musk's admission that serving Grokbot costs more than it earns, two new benchmarks attempting to price agent value, and an MIT paper in which a frontier model improved a small model by directly editing 0.016% of its weights — all converge on recursive self-improvement and what comes after it. On economics, he grants the bears a real point about the end of below-cost pricing but expects repricing to matter less than claimed: users will either settle for cheaper, more efficient models or pay for intelligence as a straightforward cost of doing business, with much of today's revenue already coming from power users on the API. On capability, he treats the MIT result as significant and already replicated, while flagging the live dispute over whether it represents a new training paradigm or a narrow bug fix at toy scale. His central caution is against the assumption that better models mechanically produce more adoption and revenue: enterprises consume a tiny fraction of available intelligence not because models are too weak but because institutional inertia is real, which supports a bear and a bull reading equally. He closes by warning that RSI is becoming the new AGI — an acronym absorbing more energy in definition and proximity estimates than in serious work on what its arrival would actually mean, with AI safety advocates currently the only group willing to describe that world at all.
