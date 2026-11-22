---
title: Fable 5 Raises the Bar for AI Ambition
description: >-
  This episode of The AI Daily Brief, a daily AI news podcast, covers
  Anthropic's launch of Claude Fable 5 on Tuesday, June 9. Fable 5 is the first
  publicly available model in Anthropic's "Mythos class." The host is not named
  in the transcript. He c...
pubDate: 2026-06-10T00:00:00.000Z
type: episode
tags:
  - models-and-benchmarks
  - ai-coding
  - anthropic
url: 'https://www.youtube.com/watch?v=it7VUqfVorw'
draft: false
---
## Overview

This episode of **The AI Daily Brief**, a daily AI news podcast, covers Anthropic's launch of **Claude Fable 5** on Tuesday, June 9. Fable 5 is the first publicly available model in Anthropic's "Mythos class." The host is not named in the transcript. He calls Fable 5 "fairly undisputedly the best AI model we have ever been able to use."

His main argument is that the old habits no longer get the best out of a model at this level. Running your usual prompts on the new model is not enough. Users now need to:
- decide which tasks need which class of model, and
- raise their ambition for what they hand to an AI agent.

The episode covers the launch, the benchmarks, the controversies, the first user reactions and the host's own tests.

**Source:** No video URL was provided for this episode.

## Prerequisites

- **Anthropic's model line-up:** the Haiku, Sonnet and Opus tiers, and recent versions such as Opus 4.8.
- **Project Glasswing and Claude Mythos Preview:** Anthropic's restricted early-access program for Mythos-class models.
- **Competing frontier models:** OpenAI's GPT-5.5 and Cursor's Composer 2.5.
- **AI benchmarks:** what benchmarks such as SWE-bench, Terminal-Bench and GDPval measure, and why people worry about "benchmark saturation."
- **Agentic coding:** AI agents that work on their own for long periods on multi-step software tasks.
- **API token pricing and usage-based billing:** how prices per input and output token work.
- **Model distillation:** training a cheaper model on the outputs of a stronger one.
- **Classifiers and safeguards:** automated filters that detect and redirect sensitive requests.

## Main Points

### 1. The launch: Fable 5 and Mythos 5
- People had expected a Mythos-class release for months. Some companies already had access through Project Glasswing. When Opus 4.8 came out a few weeks earlier, Anthropic said it was working toward a Mythos-class model it could release safely.
- What surprised people was how short the gap was between Opus 4.8 and Fable 5.
- On June 9, the public got **Claude Fable 5**. A small group of organizations got **Claude Mythos 5**.
- Mythos 5 is essentially the same model without Fable's safeguards. Only Glasswing partners can use it at first, and Anthropic says it is deploying it "in collaboration with the US government." Anthropic plans a broader trusted-access program later.
- The naming shows how seriously Anthropic is treating the release:
  - "Fable" is a new tier above Opus, so the line-up is now Haiku, Sonnet, Opus and Fable.
  - It is the first full new version number since GPT-5 in August of the previous year. The big launches around the turn of 2026 were numbered 4.5 and 4.6.

### 2. Benchmarks: a jump large enough to matter
- The host usually thinks benchmarks are too saturated to tell you much. He makes an exception here because the gaps are so large. In the comparisons below, Mythos 5 and Fable 5 share the same scores:

| Benchmark | GPT-5.5 | Opus 4.8 | Mythos 5 / Fable 5 |
|---|---|---|---|
| ExploitBench (cybersecurity) | 34% | — | 78% |
| Legal Agent benchmark | 2.1% | — | 13.3% |
| GDPval (economically valuable knowledge work) | 1769 | 1890 | 1932 |
| SWE-bench Pro | 58.6% | 69.2% | 80.3% |
| Terminal-Bench | 83.4% (slightly ahead of Opus) | — | 88% |
| FrontierCode | 5.7% | 13.4% | 29.3% |

- Fable 5 scored 66% on HealthBench. The GPT-5.5 comparison figure was not audible in the transcript.
- **Artificial Analysis** ranked Fable 5 first on its blended index, ahead of Opus 4.8 and GPT-5.5. The lead was about five points, and some people noted that its agentic benchmarks are becoming saturated.
- Benchmarks run by other organizations:
  - **Every's Senior Engineer benchmark**, which tests rewriting a real production codebase: GPT-5.5 scored 62, Opus 4.8 scored 63 and Fable 5 scored 91 out of 100.
  - **CursorBench:** Fable 5 scored 72.9%, eight points above the previous best, but it cost more.
- **FrontierCode** is a new benchmark from Cognition, built with open-source developers.
  - It has three task sets: extended, main and diamond. Diamond is a small set of extremely hard tasks.
  - It grades code with unit tests and also checks scope, discipline, style and whether the code follows the codebase's standards. The goal is to tell whether the code could actually be merged.
  - Swyx (Shawn Wang) cited METR's finding that more than half of SWE-bench results are "unmergeable slop." FrontierCode is meant to fix that problem.

### 3. Pricing and access
- API prices are **$10 per million input tokens and $50 per million output tokens**.
  - That is double Opus. Some people had expected it to be higher.
  - It is less than half the cost of using Mythos Preview through Glasswing.
- Pro-tier and higher subscribers got Fable 5 straight away. However, Anthropic says it will **remove Fable from subscription plans on June 23**. After that, access will be pay-per-use.
- The host reads this as more evidence that AI is moving firmly to usage-based pricing, which he calls the "token scarcity era."

### 4. Controversy: safeguards that send requests to Opus 4.8
- When Fable's classifiers detect a request about cybersecurity, biology, chemistry or distillation, Opus 4.8 answers instead, and the user is told. Anthropic's reasoning:
  - a fallback to Opus is better than a refusal, and
  - early data shows 95% of Fable sessions never trigger a fallback.
- Users reported fallbacks on basic biology questions, for example about mitochondria, how DNA makes RNA, and the word "cancer." Critics included Banteg, Chubby, Derya Unutmaz and Fernando.
- Sporadica argued that a classifier that cannot tell a cell from a biohazard means the product was not ready.
- The host calls much of this criticism disingenuous. He thinks some people deliberately went looking for the fallback so they could complain. He says the frustration of working biologists is real.

### 5. Controversy: limits on frontier AI research
- Page 13 of the 319-page system card says Anthropic has added interventions that "limit Claude's effectiveness for requests targeting frontier LLM development." Examples include pre-training pipelines, distributed training infrastructure and ML accelerator design.
- The host sees this as a response to Chinese labs distilling Anthropic's models. He says it also catches legitimate researchers.
- Critics:
  - **Elie Bakouch (Prime Intellect)** objected that the model degrades on purpose and that the user cannot see it happening.
  - **Nathan Lambert** said "pulling up the ladder" was inevitable, but doing it without telling the user is "misaligned."
  - **Dean Ball** called it "shockingly hostile."
  - **SemiAnalysis** said it had already seen effects.
  - **Will Brown (Prime Intellect)** said it is the first public model he is explicitly not allowed to use for his work on open-model research.
- Tenebris disagreed with the critics and argued that labs will naturally keep the value of their most powerful models for themselves.
- **Adam (OpenAI)** joked that "OpenAI ends up being the OpenAI lab."

### 6. Controversy: data retention
- For Mythos-class models, Anthropic keeps prompts and outputs for **30 days** for trust and safety review, on every platform.
- Rohit asked how any enterprise could use the model under that policy.
- Mike Taylor warned that the memory feature, which is on by default, can pull earlier sensitive chats into the retained data, which could breach NDAs.
- The host expects the rule to be temporary because it creates serious problems for enterprises.

### 7. Controversy: how token-hungry it is in practice
- Some users ran through their limits quickly. Theo said he would be out of usage in about an hour, and Chubby hit the limits of a Max plan.
- Others found usage reasonable:
  - **Tyler Willis** said it is not very different from recent Opus models.
  - **Alex Volkov** reported that a 1.5-hour project used 4.2 million tokens, which he did not consider excessive.
  - **Fabio Jonathan** argued that Fable costs less than Opus in practice because it gets things right on the first try more often.
  - One commenter summed it up: "Actually solving the problem is token efficient."

### 8. Early user reports: big, ambitious tasks
- **Allie K. Miller** called it "an actual leap":
  - it handled long goal-driven tasks, including models that can run for 100+ hours,
  - it solved and checked an MBA-level word problem that every earlier model had failed, and
  - it was the first Anthropic model she could leave running through a long lunch without having to steer it.
- **Riley Brown:**
  - recreated the quality of a McKinsey report,
  - one-shotted a mobile app like Replit, using Daytona for sandboxing and Convex for the backend, and
  - built a Lovable clone that builds Swift apps, in about four prompts. Some people objected that a company is more than its interface.
- **Games and 3D:**
  - Prisnit built a driving game.
  - Matt Shumer built 3D worlds in Three.js and made them faster on request without losing quality.
  - Jake Fitzgerald got a humanoid-robot design after 2 hours and 1.4 million tokens.
  - Lasan got a melody and a piano visualizer.
  - Victor (Hugging Face) ran his Boeing 747 Three.js benchmark.
- **Dan Shipper (Every)** built each of these from a single prompt:
  - a cleaned-up lecture player with a synced transcript,
  - a Library of Babel game, and
  - an analysis of survey and web-analytics data that proposed a new, falsifiable experiment.
- **Enterprise examples:**
  - **Stripe** said Fable 5 did a migration across a 50-million-line Ruby codebase in one day, work that would have taken a team more than two months.
  - **Mahmood (The Small Square)** praised its design restraint.
  - **Todd Saunders** built the features a customer described while the customer call was still going.

### 9. A changed paradigm: the frontier shows up in hard tasks
- The host used a bell-curve meme to describe the reactions:
  - on simple tasks, the model feels similar to earlier ones;
  - on very complex tasks, it is clearly better;
  - in the middle, people are uncertain.
- **Citrini Research** said ordinary users can no longer tell whether new models are better.
- The host partly disagrees. For everyday strategy discussions, he found Fable 5 handles disagreement better:
  - it pushed back precisely,
  - when he corrected its wrong assumptions, it updated its position without dropping it entirely, and
  - it did not simply flip to agree with him, unlike earlier models that are easy to steer.

### 10. The host's own tests
- **Superintelligent** is his AI-readiness audit platform, which uses voice agents to interview employees. Fable 5 rebuilt the whole system to use voice input through OpenAI's Whisper instead of full voice agents. It took a few hours with no input from him, and the result was close to production-ready. He says the company's value was always in the information it collects, not in its software.
- **Agent Transformation Intensive** is a new enterprise program that grew out of his Enterprise Claw executive program. Fable 5 rebuilt both the marketing site and the platform the program runs on in one shot.
- **AI Daily Brief sharing site** turns episodes into short clips people can share. Fable 5 reviewed his earlier Opus 4.8 spec and said it was only an idea, not production-ready. It turned the mock-ups into a production pipeline, which has now gone to Claude Code to build. He says this best captures his experience: a lot less managing the agent, so he can be more ambitious.

### 11. From tasks to responsibilities
- **Alex Albert (Anthropic)** puts Fable 5 alongside Opus 3, Sonnet 3.5 and Opus 4.5 as a step change. He says it feels "like something I collaborate with."
- **Felix Rieseberg** leads Claude Code and Cowork on desktop. He describes a "third era" in how people work with AI:
  1. **Questions:** AI as a smarter search engine or code autocomplete.
  2. **Tasks:** a human starts and ends each piece of work.
  3. **Responsibilities, or loops:** for example, Claude watches every incoming crash report with the goal of keeping the apps from crashing.
- He predicts that AI apps in 2027 will look very different from today's.

### 12. Two implications for users
- **Classifying use cases.** People will need to become their own token-efficiency managers and match each task to the right class of model. Running the top model at maximum effort for a grilled-cheese recipe will no longer make sense.
- **Raising ambition, or "task imagination."** The host borrows the term from Nate B. Jones. Most people have never given an AI anything that takes an hour, let alone days. Getting value from a model that can run for 9 hours to days requires imagining larger tasks and clearly stating the goal, the quality bar and the method. The host says AI training today mostly teaches better versions of existing work, which is not enough.
- **Competitive context:**
  - Robert Corson said OpenAI now needs GPT-6, not GPT-5.6.
  - Thibault from OpenAI's Codex team replied, "Feeling pretty good about things." The host takes this as a hint that more launches could follow soon.

## Key Concepts

- **Claude Fable 5:** Anthropic's first publicly available Mythos-class model, in a new tier above Opus, with safety classifiers and fallback to Opus 4.8.
- **Claude Mythos 5:** essentially the same model as Fable 5 without its safeguards, available only to Project Glasswing partners.
- **Project Glasswing:** Anthropic's restricted access program for Mythos-class models, run with selected partners and the US government.
- **Classifier fallback:** automatic routing of requests about cybersecurity, biology, chemistry or distillation from Fable 5 to Opus 4.8, with the user notified.
- **Frontier LLM development restriction:** a safeguard that deliberately limits how much Fable helps with pre-training pipelines, distributed training or ML accelerator design.
- **FrontierCode:** Cognition's agentic coding benchmark, which grades whether code is good enough to merge, not just whether it passes tests.
- **Every Senior Engineer benchmark:** a test of how well coding agents can rewrite a real production codebase the way a senior engineer would.
- **CursorBench:** Cursor's benchmark that compares coding performance against cost.
- **Benchmark saturation:** when top models all score near the ceiling, so a benchmark can no longer tell them apart.
- **Token scarcity era / usage-based pricing:** the host's term for a period when compute costs push AI access toward pay-per-use instead of flat subscriptions.
- **30-day data retention:** Anthropic's requirement to keep prompts and outputs from Mythos-class models for safety review, which raises enterprise confidentiality concerns.
- **Use case classification:** matching each task to the cheapest class of model that can handle it.
- **Task imagination:** Nate B. Jones's term for the skill of coming up with and specifying large, long-running tasks that are worth giving to very capable agents.
- **Tasks vs. responsibilities (loops):** Felix Rieseberg's distinction between handing AI single problems and giving it ongoing goals that it monitors and pursues on its own.

## Summary

Claude Fable 5 is a real step-change. Its lead on agentic coding and economically valuable work is large enough to stand out despite benchmark saturation, and early users report building whole apps, migrating huge codebases and rebuilding production systems with little supervision. The launch also brings real tensions: strict biology and chemistry fallbacks, hidden degradation on frontier AI research tasks, 30-day data retention that worries enterprises, and higher, increasingly usage-based pricing. The host's main message is that a model like this only shows its advantage on hard, ambitious work. Users will need to learn which tasks justify the most powerful model, and to develop "task imagination": the habit of giving AI larger, longer-running responsibilities instead of better versions of the work they already do.
