---
title: Why the AI Kids Hate Astra 6.2
description: >-
  This episode of The AI Daily Brief (a daily AI news podcast and video) covers
  the poor early reception of OpenAI's two new models, GPT-6.2 Astra and GPT-6.2
  Sol. The host's main question is whether the models really underperform, or
  whether OpenAI...
pubDate: 2026-11-18T00:00:00.000Z
type: episode
tags:
  - ai-economics
  - models-and-benchmarks
  - openai
url: 'https://www.patreon.com/posts/175737575'
draft: false
---
## Overview

This episode of **The AI Daily Brief** (a daily AI news podcast and video) covers the poor early reception of OpenAI's two new models, **GPT-6.2 Astra** and **GPT-6.2 Sol**. The host's main question is whether the models really underperform, or whether OpenAI is now building for different uses than the early-adopter community, which mostly cares about coding. Before the main story, a headlines segment covers a run of major IT outages, including one at the NSA, and the leadership situation at Nvidia after Jensen Huang's resignation.

The host is not named in the transcript.

**Source video:** No URL was provided with this transcript.

## Prerequisites

- **Frontier model landscape (late 2026):** the main model families discussed are OpenAI (GPT-6 / 6.1 / 6.2: Astra, Sol, Terra), Anthropic (Opus 5.5, Fable 5 / 5.2), Google (Gemini 4), Meta and Kimi.
- **Benchmarks and indices:** what aggregate leaderboards such as the Artificial Analysis Intelligence Index measure, and what a cost-per-task metric means.
- **Pareto frontier:** the trade-off curve between model capability and price.
- **Model vs. harness:** the difference between the model itself and the agent tooling ("harness") that runs it, for example a coding agent's scaffolding.
- **Context from earlier episodes:** Anthropic's coming IPO, Jensen Huang's resignation from Nvidia, and the growing concern about cyber attacks enabled by advanced AI ("Mythos/Fable-level" models).

## Main Points

### Headlines 1: The wave of IT outages is likely modernization, not cyber attack

- In about a week there were outages at Microsoft Outlook, the FAA, large US banks such as JPMorgan, Apple, United Airlines, and the NSA's internal classified network (NSANet). The NSA campus went to essential personnel only.
- The NSA said the cause was "temporary degradation during scheduled routine maintenance." Sources said there is no evidence of a cyber attack.
- Martin Casado (a16z) compared it to Y2K, when most disruption came from the upgrades themselves. Sean Cairncross (ONCD) said the disruptions come from "updating and modernizing legacy systems," and that more are likely.
- Mackenzie Arnold's view, which the host shares: the outages may still be *downstream of AI*. Fear of AI-enabled cyber attacks is driving a surge of upgrades to very old systems. AI also makes those upgrades affordable for the first time. Everyone is doing this at once, so the specialists who could fix problems are overstretched. More updates means more failures.
- The host does not rule out future AI-enabled attacks. He sees the outages as what one would expect while organizations harden their systems against that possibility.

### Headlines 2: Nvidia leadership and earnings

- Jensen Huang posted his first public statement since resigning. He admitted "serious mistakes in my personal life," committed to cooperate with the board's independent investigation, and said he would return as CEO if the board asked. Nvidia stock rose about 2% within five minutes.
- New board chair Harvey Jones opened the earnings call by saying the board unanimously accepted the resignation and does not intend to reinstate Huang. Interim CEO Colette Kress said the same thing earlier on CNBC.
- Semafor later reported that a faction of the board wants Huang back. It said three members strongly oppose his return and the position of the other seven is unclear.
- Earnings: revenue beat estimates with 103% annualized growth. Q4 guidance was raised to $130B, and growth expectations to 2028 were raised from 70% to 75%. The stock rose 4.5% after hours.
- Nvidia will stop shipping all AI chips to China, including licensed Hopper products such as the H200. The report does not yet cover the cost of closing smuggling routes, and the SEC filing is still to come.

### Main story: The worst first impressions for a model release

- OpenAI released GPT-6.2 Astra and GPT-6.2 Sol just before Anthropic's IPO. The host calls it possibly "the most hated model release I've ever seen."
- Matt Shumer said the models were "essentially unusable" and that he would not write a full review.
- OpenAI's own framing: "super efficient and built to perform where it counts, the real world." The announcement led with Agents' Last Exam and Terminal-Bench / science benchmarks instead of coding benchmarks. Even the coding section mainly sold cost.

### Benchmark picture (Artificial Analysis)

- **Intelligence Index:** GPT-6.2 Sol rose from 55 to 57. That ties GPT-6 Astra but is still behind Opus 5.5, Gemini 4 Argon and Fable. GPT-6.2 Astra rose 5 points to 62, which puts it second, behind Fable 5.2.
- **Pareto position:** OpenAI now covers most of the price-performance frontier. It is very competitive in the mid-range. Anthropic offers somewhat more intelligence at premium prices, and Meta leads the cheapest tier.
- **Cost per task:**
  - GPT-6.2 Astra: $4.00, compared with $6.24 for GPT-6 Astra. That is about 35% cheaper, from better token efficiency plus lower per-token prices.
  - GPT-6.2 Sol: about $1.01, compared with $1.27 for the previous Sol. That is about 20% cheaper.
  - Fable 5.2 on high settings costs more than twice as much as GPT-6.2 Astra on max settings.
  - GPT-6.2 Sol on max costs less than a third of Opus 5.5 on high.
- **Red flag:** both models regressed on the AA Coding Agent Index. Astra kept its score and rank. Sol dropped 3 points, behind Kimi 3.1 and GPT-6.1 Terra. The drop was driven by a regression on "SWE-Atlas" (the name is as transcribed), where Sol more often leaves key facts out of its answers.
- The host's open question: were the bad reviews about a bad model, or about a model that is worse at the one thing early testers care about, which is coding?

### Negative reactions

- **Dan Shipper (Every):** the 30-person team tested it on coding, writing, design and knowledge work. "No one on our team loved Astra 6.2."
  - *Writing:* worse than Astra 6. It is so concise that the text is hard to understand, and it gives short answers when long ones are needed.
  - *Coding:* about the same as Astra 6, but it often stops too early on end-to-end builds.
  - *Design:* good default instincts, but it struggles to move away from them and ends up with a "house style."
- **Theo ("Why I hate GPT-6.2 Astra"):** "it speaks in tongues that only 6.2 understands," it "runs in loops and goes nowhere," and it is "clearly super smart" but "insufferable to work with on real projects."
- **Ethan Mollick:** "very uneven and weird." He says it is the first OpenAI frontier release since GPT-4.5 that is not a clear step forward.

### Positive and dissenting reactions

- **Ash:** very strong on computer-use workflows, and their main partner for agentic video editing.
- **Claire Vo:** built an interactive storybook. She says Astra beats Opus and Fable on image generation and animation code.
- **Josh Purtell:** on an auto-research benchmark he considers high-signal, Sol and Astra were "absolute monsters."
- **Alex Finn:** complex tasks used about 2% of his usage allowance. On his personal benchmark it finished in a third of the time, at a third of the price, with a quarter of the tokens. He argues critics ignore efficiency and price.
- **Zeewen:** "If quality is all you care about… it flopped," but on price-to-output it is a win. He argues AI should prioritize efficiency, because steadily rising prices are not sustainable.
- **Hayter:** efficiency is OpenAI's real edge, and the company is doubling down on it.

### Interpretation: different interaction patterns and the harness

- The host restates an existing distinction. Anthropic models, especially Fable-class, suit "hand off the whole assignment and walk away." OpenAI models are tuned for close back-and-forth collaboration. GPT-6.2 may push further in that direction, and it looks worse next to Opus 5.5, which is strong on both.
- **Harness problems:** Claire Vo says the bad reviews come from the *model plus harness* combination. Pietro Schirano says most of his problems came from the harness, and once he removed it he was "flying."
- **Timing:** Tibo (OpenAI) said early testers got access weeks ago, but OpenAI made many changes in the last 3–4 days before launch, and the review videos were recorded before that. TokenGremlin called this "an insane act of self-sabotage."
- Theo retested and found it better, but "still directionally very bad."
- The host's conclusion: this is not a slam dunk or an era-defining release. It is an incremental release with specific design choices that either (a) do not work in general, or (b) make it less useful for some people's use cases. Listeners should test it themselves.

### Strategy relative to Anthropic's IPO

- The host rejects the idea that OpenAI was trying to sabotage Anthropic. It could not have expected to steal the spotlight, especially after Fable 5.
- He thinks the release was more likely defensive: better to have a new model out while everyone is talking about models again than to look as if it had gone quiet.
- Another possibility: OpenAI is starting to draw a clear contrast with Anthropic for the period after the IPO.

### The launch video controversy

- The roughly 2-minute ad shows office workers who forgot what their boss asked for, then use Astra to finish the task in under a minute.
- Critics:
  - Mo: "a great mockery of humanity."
  - Brian Levin (Notion): "a profoundly sad vision of the future."
  - Zack Trader: "We help your incompetent people fake it."
  - swyx (Latent Space / AI Engineer Summit): the fact that no decision-maker vetoed the ad is his main critique of the launch.
- The host's two counterpoints:
  1. **It may just be a joke.** The *Office Space*-style setting (1990s hardware, a Lumbergh-type boss) suggests it was meant to make people laugh for 90 seconds, not to be a statement about work.
  2. **It may signal a strategy.** OpenAI may be turning down the focus on coding, turning up other professional tasks, and pushing cost efficiency for enterprises. The message would be: for workers, it handles tedious busywork faster; for bosses, it delivers the cost savings that token-cap discussions are driving. This would give OpenAI its own place in the enterprise market instead of competing head-to-head with Anthropic on coding.

## Key Concepts

- **GPT-6.2 Astra / GPT-6.2 Sol:** OpenAI's new model pair, sold on real-world efficiency. Astra is the higher-capability tier and Sol the cheaper tier.
- **Artificial Analysis (AA) Intelligence Index:** an aggregate leaderboard that scores general model capability across benchmarks.
- **AA Coding Agent Index:** AA's measure of how well models perform as coding agents. Both new models regressed on it.
- **Cost per task:** the total cost for a model to complete a benchmark run per task. It combines per-token price and token efficiency.
- **Pareto frontier:** the set of models where no other model is both cheaper and more capable.
- **Harness:** the agent scaffolding and tooling around a model. It can strongly affect how good the model feels in practice.
- **Token efficiency:** how many tokens a model needs to finish a task. It is a key driver of real-world cost.
- **Legacy-system modernization outages:** service disruptions caused by large-scale upgrades of decades-old infrastructure, compared here to Y2K.
- **Mythos/Fable-level models:** shorthand for the capability threshold at which AI-enabled cyber attacks became a credible threat, which is pushing organizations to harden their systems.
- **NSANet:** the NSA's secure internal network for classified communication.

## Summary

The host argues that the very negative early reaction to GPT-6.2 Astra and Sol reflects a gap between OpenAI's strategy and what early adopters value, more than a plain failure of the models. The models make modest gains on general intelligence benchmarks, are much cheaper per task, and give OpenAI a strong position across the mid-range price-performance frontier. However, they regressed on coding-agent benchmarks, and influential testers found them terse, quick to stop, and frustrating in real coding and writing work. Other users praised their efficiency, their computer-use skills and their creative output. Problems with the harness, and changes made after testers had finished their reviews, may have made first impressions worse. The host sees the release as incremental, not era-defining, and possibly a sign that OpenAI is staking out an enterprise position around cost efficiency and everyday professional tasks instead of competing with Anthropic on coding. His main lesson is that perception depends on the use case, so each user should test new models on their own workflows.
