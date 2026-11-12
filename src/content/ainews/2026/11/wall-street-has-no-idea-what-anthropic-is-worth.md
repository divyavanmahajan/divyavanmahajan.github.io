---
title: Wall Street Has No Idea What Anthropic Is Worth
description: >-
  Source: The AI Daily Brief — episode "Wall Street Has No Idea What Anthropic
  Is Worth" (2026-11-11), hosted by NLW. Video link: no source URL was supplied
  with this transcript; the show is published as The AI Daily Brief (see also
  the host's compa...
pubDate: 2026-11-11T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/175065762'
draft: false
---
## Overview

**Source:** *The AI Daily Brief* — episode "Wall Street Has No Idea What Anthropic Is Worth" (2026-11-11), hosted by NLW.
**Video link:** no source URL was supplied with this transcript; the show is published as *The AI Daily Brief* (see also the host's companion long-form show, *How We Got Here with NLW*, howwegothere.com).

The central thesis is that despite an unprecedented volume of data points ahead of Anthropic's IPO — a filed price range, implied valuations, revenue run-rate disclosures, compute commitments, bull and bear notes — the market has no settled view of what the company is worth. The host argues that the widely reported "declining valuation" narrative is an artifact of press sourcing rather than a retreat by Anthropic, and that investor behaviour in the days around the roadshow (valuation estimates falling from $2T to ~$1.1–1.4T, then immediately being revised back up toward $1.5T on strong demand) is evidence of genuine price discovery, not consensus. The episode matters because Anthropic's pricing is being treated as a referendum on the entire AI trade.

The headlines segment covers three other stories: Google's release of Gemini 4 Carbon, the escalating NVIDIA/Megaspeed export-control scandal, and OpenAI's Q3 revenue and product news.

## Prerequisites

- **IPO mechanics:** price range vs. implied valuation, roadshow, quiet period, underwriters, greenshoe (over-allotment) option, cornerstone/strategic investors.
- **Valuation multiples:** revenue multiples (e.g. "40x trailing twelve-month revenue") and how comparables are used.
- **Financial statement basics:** run-rate revenue, operating loss, operating margin, quarter-over-quarter growth.
- **AI industry structure:** frontier labs, neoclouds (third-party GPU cloud providers such as Lambda), take-or-pay compute commitments, token pricing and commoditisation by open-source models.
- **Corporate governance:** fiduciary duty, succession planning, key-man risk, board independence.
- **US export control:** the Commerce Department entity list, chip smuggling, remote-access loopholes.
- **Model evaluation vocabulary:** Artificial Analysis Index rankings, bug-hunt benchmarks, render tests, formal verification, multimodal generation.
- Familiarity with the current model landscape referenced throughout: Fable 5.2, Opus 5.5, Gemini 4 Argon/Carbon, GPT-5.6, GPT-6 Astra.

## Main Points

### Gemini 4 Carbon ships, and Google is back in the frontier race

- Carbon is the second iteration of Google's latest large model, previewed in late October when it topped the Artificial Analysis Index; public release was held for the government's voluntary safety testing process. Fable 5.2 has since taken the top spot.
- Independent testing matched Google's own benchmarks. Pavel Hurin's bug-hunt test: Carbon found 57 of 105 bugs, second only to Fable 5.2 at 58 — but completed the run for **$31 vs. almost $140** for Fable 5. A render test produced comparable output to Fable 5.2 at roughly a third of the cost.
- Coding is the standout upgrade, historically Google's weakest area. DeepMind VP Pushmeet Kohli demonstrated formal verification of Signal's security properties, requiring analysis of the underlying machine code — work he said could take teams "decades of combined effort," completed in a month.
- Ethan Mollick: it "improves on Argon," is "useful to have an AI that thinks differently than Claude and GPT," and most significantly shows "Google is back in the race — frontier models, rapid releases, and rapid improvement."
- Practical read: a meaningful upgrade for organisations locked into the Google ecosystem, competitive in the ultra-large model class at materially lower cost.

### The NVIDIA espionage scandal and the "mother of all key-man risks"

- President Trump defended Jensen Huang publicly ("a very honorable man"), acknowledged prior knowledge of the affair, and was vague on timing; *New York Times* reporting says he was fully briefed in April and did nothing.
- Scale of the alleged diversion: up to **$7.5 billion** of NVIDIA chips may have been funnelled to Chinese companies through Megaspeed, the neocloud that employed alleged spy Alice Huang. *The Information* describes a vast smuggling network behind it.
- Governance interference alleged: a Commerce Department investigation into Megaspeed was halted after contact from NVIDIA General Counsel Tim Teeter, who said a department superior had approved the contact; agents were concerned this was "violating government procedure and potentially tainting the case." Commerce is drafting new controls (including closing the remote-access loophole) while delaying Megaspeed's entity-list designation.
- House Foreign Affairs Committee Chair Brian Mast is prepared to subpoena Huang if he declines a closed-door meeting.
- Succession is the core structural problem: a famously flat org with ~60 direct reports to Huang, no succession plan, and a board treated as "a governance formality." Arm CEO Rene Haas (ex-NVIDIA) said in 2024 that Huang resisted succession planning because he felt it would create divisive competition among executives. The board is investigating with outside counsel; the *Wall Street Journal* suggests a "reined-in Jensen" is the best available option — keep him while reassuring shareholders, government, and the public that national security is taken seriously.
- Market stakes: NVIDIA stock down 11% since the story broke in an otherwise positive market, with ~7% weighting in the S&P 500 and ~8% in the Nasdaq — near-universal US investor exposure, compounded by the company's role in the national AI race.
- Side note: Booz Allen has switched to open source, adopting NVIDIA's Nemotron.

### OpenAI's Q3 reframes the growth narrative

- Q3 revenue came in above **$10 billion** (per Bloomberg sources), a record and a **50% increase over Q2** — up sharply from Q2's 17% QoQ growth, which had looked weak against Anthropic's 144%.
- Operating losses also grew, to between **$10.1 and $10.9 billion**; operating margin improved from -150% to -109%, still far from profitability.
- Drivers: API demand for GPT-5.6 Sol and GPT-6 Astra, plus quietly successful image models. Advertising contributed roughly **$1 billion annualised**.
- Acquisition: AI travel agent Odessia, founded under a year ago by Francis Davidson (previously founder of Sonder, which went public in 2022 and filed for bankruptcy in 2025 after a Marriott partnership collapsed). Odessia booked $60M in travel last summer across tens of thousands of users. The service shut down on acquisition; OpenAI has not stated its travel plans. Davidson describes an AI-first lean operating playbook including dictating ~1.2 million words a month (~11 books).
- New Business Hub: company registration, an advertising-metrics dashboard comparable to Google Analytics, and **business agents** — brand-configured agents consumers can talk to after clicking an ad, with instructions and context supplied by the business. The host reads this as ChatGPT moving toward being a commerce platform and competing more directly with Meta.

### The IPO is happening, and the roadshow message has finally cohered

- The midterm "blue wave" and its data-center opponents did not deter the listing; the IPO is expected to price before Thanksgiving, with the company aiming to go public next week.
- Dario Amodei's roadshow pitch: "an age of miracles where humanity is able to solve problems that have eluded us for millennia," coupled with careful risk mitigation and a viable business — "and I invite you to join us."
- The host's point is about **balance, not novelty**: none of the individual claims are new, but the ordering — miracles as the point, risks as what must be overcome to get there — represents a shift in emphasis from Anthropic's past communications.
- On defence, asked by Emily Chang of Bloomberg whether he was comfortable with Claude helping the military kill more people more quickly, Amodei reinterpreted the question as being about national strength ("Of course I do. I'm a patriot") and argued the decision is not the technology provider's to make beyond "some very high level boundaries" — the crispest version of that position he has articulated.

### The price: a range, not a retreat

- Terms: **$70–$78 per share**, implying a valuation of **$1.25–$1.4 trillion**; a raise of **$57–$64 billion**.
- Plus **$26 billion** from industry partners — NVIDIA, Microsoft, Google, Broadcom — with NVIDIA and Google largest at up to $10 billion apiece. With the greenshoe, roughly **$100 billion** of stock will float in total.
- The declining-estimate sequence: $2 trillion floated in September press, then $1.6T, then $1.5T, then last week's reporting that it might need to price at $1.1T to clear.
- **The host's central correction:** these were never Anthropic targets. A journalist obtained one investor source — of unknown proximity, possibly not even an Anthropic investor — the $2T figure was splashy enough to stick, and Anthropic's quiet period left the narrative unchallenged. Framing this as Anthropic "reining in its ambitions" misdescribes what happened.
- There is still real signal in how expectations moved. DarcyAGI on X: "October really changed the mood around AI valuations" — and possibly a healthier starting point. Within a day of the $1.25–1.4T range becoming public, the *Financial Times* reported underwriters planned to raise the price toward a **$1.5 trillion** top end on "strong indications of demand." The FT also noted Anthropic cares more about raising cash than valuation, given its compute commitments.
- Conclusion: investors do not have a clear idea of what to expect, of what is reasonable, or of what others think is reasonable — "we are kind of just flailing around until the thing actually happens."

### Bull and bear cases

- **Bear / emerging consensus** (per John Ma of Artemis, characterising the prevailing view): Anthropic is overvalued at $1.5T, revenue is flattening, tokens are being commoditised by open source, and token prices are falling faster than demand. Some bears expect an IPO underperformance to trigger another leg down in the whole AI trade.
- **Contrarian case** (also via Ma): run-rate revenue rose **$10 billion in October alone**, reaching **$81 billion** by month end — growth still driven primarily by the coding-agent use case, reflecting Opus 5.5 but not yet Fable 5.2. Finance, legal, and life sciences are very early; agents are early; most businesses still think of AI as "ChatGPT in the cloud app." And retail investors are starved of direct frontier-lab exposure and "will ape in regardless of the valuation," potentially driving a $3 trillion market cap.
- **Multiples view** (Sonali Basak, iCapital chief investment strategist): at $1.4T, Anthropic trades at roughly **40x trailing twelve-month revenue**. Palantir is at roughly 55x — placing Anthropic's multiple nearer CrowdStrike and Cloudflare than Palantir.

### Compute commitments and who actually holds the risk

- Updated IPO paperwork discloses **$10 billion in new commitments** with Microsoft and Google, spread over the next seven years.
- A **$35 billion deal with neocloud Lambda** could be cancelled for non-performance; Lambda has defaulted by missing a deadline. Anthropic states it is within its rights to cancel but does not currently intend to.
- When the original filing revealed hundreds of billions in largely non-cancellable compute commitments, analysts asked what happens if AI demand falters.
- The Lambda situation inverts that question: **which is more likely to happen first** — AI demand falling far enough that Anthropic cannot meet its commitments, or the neoclouds failing to finance or build finished data centers on time? Observers sympathetic to the demand-risk question increasingly think more risk sits with the neoclouds, who could drag the industry down even if the labs are fine. This narrative will outlast the IPO.

### Claude's productivity suite and the contest over where work happens

- Launched alongside the IPO updates: **Claude Sheets** (an Excel competitor with a much greater focus on human–agent collaborative work), **Claude Whiteboards** (team planning for projects and ideas), and **Claude Data** (the evolution of the former "dashboards" feature — live data feeds pulled from CRMs and database platforms, competing with Power BI, plus model-generated visual data stories and narrated short videos).
- Anthropic framed it not as a declaration of war but as where the world is going, citing internal use: a legal team that built a Slack-based review tool automatically applying red lines from its own playbook, cutting marketing reviews from 3 days to 24 hours; a finance team that turned a long executive update document into an interactive page maintained collaboratively with Claude. Neither team writes code — they are domain experts turning knowledge into tools.
- Host's framing: "when Claude becomes the shared work surface, you kind of just need this sort of infrastructure around it." The contest over where work happens started when ChatGPT launched in November 2022, and work is increasingly happening inside the LLM harness app.
- Matthew Berman: "I keep trying to warn you, if you build software the labs will compete with you." Microsoft's stock fell **2.2%** on the news.
- Counterpoint (Gabrielle): "Excel will be fine." No enterprise ditches Excel for this; Claude Sheets even exports to Excel. Microsoft is on every side — buying into the IPO, owed $45 billion in Anthropic cloud spend, and reselling the model through Copilot: "investor, landlord, reseller, and now the competition." They want Anthropic to do well.
- The host reads the dip itself as further evidence of the thesis: the market is still working out what this means, and may be recognising it isn't sure.

## Key Concepts

- **Gemini 4 Carbon** — Google's second-iteration frontier model, notable for coding capability and roughly 3x cost efficiency versus Fable 5.2 at near-comparable quality.
- **Artificial Analysis Index** — third-party model leaderboard used as the reference ranking throughout.
- **Formal verification** — proving a system's security properties mathematically; normally considered impractical at scale due to complexity, demonstrated by Carbon on Signal's machine code.
- **Megaspeed** — the neocloud at the center of the NVIDIA scandal, alleged conduit for up to $7.5B in diverted chips and employer of alleged spy Alice Huang.
- **Entity list** — the Commerce Department designation that would block all exports to a company; Megaspeed's listing is being delayed.
- **Remote-access loophole** — using offshore remote access to NVIDIA hardware to circumvent physical export controls; new rules reportedly target it.
- **Key-man risk** — dependence on a single individual; here amplified by NVIDIA's flat structure, ~60 direct reports, and absent succession plan.
- **Business agents (OpenAI)** — brand-configured conversational agents consumers reach after clicking an ad, instructed and contextualised by the business.
- **Greenshoe (over-allotment) option** — underwriter right to buy extra shares to meet excess demand, part of Anthropic's ~$100B total float.
- **Quiet period** — the pre-IPO window in which a company cannot publicly comment, which the host identifies as the reason the $2T narrative went unchallenged.
- **Run-rate revenue** — annualised current revenue; Anthropic's rose $10B in October to $81B.
- **Trailing-twelve-month revenue multiple** — valuation ÷ last year's revenue; ~40x at $1.4T, compared against Palantir (~55x), CrowdStrike, and Cloudflare.
- **Neocloud** — third-party GPU cloud provider (Lambda, Megaspeed); the host identifies delivery and financing failure here as a risk distinct from demand risk.
- **Non-cancellable compute commitment** — contractual obligation to pay for future compute regardless of demand.
- **Shared work surface** — the idea that the LLM harness app becomes where work happens, making productivity infrastructure (sheets, whiteboards, dashboards) a natural extension.

## Summary

Anthropic will go public next week at $70–78 per share, implying a $1.25–1.4 trillion valuation and a $57–64 billion raise, and the host's argument is that the mountain of available data has produced no consensus about whether that is cheap or expensive. The widely repeated story of a valuation marching down from $2 trillion is, he contends, not a record of Anthropic lowering its ambitions but of a single anonymous investor quote hardening into narrative during a quiet period — a reading reinforced by the fact that underwriters began revising the range upward toward $1.5 trillion within a day of publication, citing strong demand. Real signal does exist in the shift of mood since October, and both cases are coherent: bears see flattening revenue, commoditised tokens, and falling prices; bulls see a $10 billion run-rate increase in a single month to $81 billion, driven almost entirely by coding agents with finance, legal, and life sciences still untouched, plus retail investors hungry for frontier-lab exposure. The compute question has likewise inverted, with Lambda's default suggesting the neoclouds may be the fragile party rather than the labs. The simultaneous launch of Claude Sheets, Whiteboards, and Data — which knocked 2.2% off Microsoft despite Microsoft being Anthropic's investor, landlord, reseller, and now competitor — is offered as the final illustration: even the market's reflexes are guesses. The IPO is coming regardless, and the price will be the first real answer.
