---
title: Companies Are Spending 5x More on AI Now
description: >-
  The talk is an episode of The AI Daily Brief, a daily podcast and video on AI
  news and discussion, hosted by Nathaniel Whittemore (NLW). Source video URL:
  not provided in the supplied video details — the episode is identified only as
  `2026-11-06-c...
pubDate: 2026-11-06T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/174584112'
draft: false
---
## Overview

The talk is an episode of **The AI Daily Brief**, a daily podcast and video on AI news and discussion, hosted by Nathaniel Whittemore (NLW). Source video URL: not provided in the supplied video details — the episode is identified only as `2026-11-06-companies-are-spending-5x-more-on-ai-now`.

The central thesis is that despite mainstream-media coverage suggesting enterprise AI adoption is stalling — stories about companies capping employee AI spend, such as Apple reportedly cutting engineers' daily limits — business AI spending is not only continuing but *accelerating*, with the growth rate rising even off a much larger base. The speaker argues the explanation is agents: 2026 marked the shift from AI priced and consumed per seat to AI consumed per token, which decouples spending from headcount and ties it to work performed. The analysis is built on **Menlo Ventures' fourth annual State of Enterprise AI report**, from which the host extracts ten notable statistics. The episode also carries a headlines segment on a severe single-day AI-stock drawdown, the Anthropic IPO outlook, and METR's first independent safety report on Anthropic.

This matters because it reframes how organisations should budget for AI, which vendors are winning enterprise share, and whether AI spending cannibalises or expands existing software budgets.

## Prerequisites

- **Agentic AI and agentic coding** — AI systems that execute multi-step tasks autonomously over long horizons, rather than responding turn-by-turn.
- **Per-seat vs. per-token pricing** — the SaaS licensing model (cost scales with users) versus consumption-based LLM pricing (cost scales with tokens processed).
- **Frontier vs. mid-tier/small/open-weight models** — model tiers and their relative price per million input/output tokens.
- **Enterprise API spend and market-share framing** — how model-provider revenue is measured across API consumption.
- **Basic market mechanics** — market capitalisation, price-to-earnings multiples, hedge-fund leverage, forced selling/deleveraging, IPO roadshows, prediction markets, secondary-market valuations.
- **AI safety vocabulary** — RSI (recursive self-improvement), ASI (artificial superintelligence), independent model evaluation, sandboxing.
- **Named entities assumed familiar** — Anthropic (Claude, Claude Code, Opus/Sonnet lines), OpenAI (GPT series, Codex), Google (Gemini), Meta (Muse), Menlo Ventures, METR, incumbent SaaS vendors such as ServiceNow and Salesforce.

## Main Points

### Market context: the worst AI-stock drawdown since 2020

- The MAG7 lost roughly a combined $1 trillion in market cap in one session; NVIDIA fell 9.3%, Microsoft 3.6%. Supply-chain names fell harder — Micron −17.5%, SanDisk −22.3%. The S&P 500 dropped 4.4% and the NASDAQ 6.4%, the largest single-day fall for the major indices since March 2020.
- Nothing fundamental changed between Wednesday and Thursday, so the speaker attributes the move to market structure rather than narrative. Fundstrat's Tom Lee cited hedge-fund liquidations; reports pointed to Walleye returning capital, rumours of Lone Pine collapsing, and Millennium pulling $1.5 billion of leveraged capital from two outside managers.
- The breadth was the tell: unrelated names such as Walmart and ExxonMobil fell alongside tech. Nicholas Mugali (TMT Research) described it as forced selling, in which "the best businesses are falling hardest because they're the easiest things to sell when a fund needs cash."
- Valuation views split. Some argued semis were cheap, with NVIDIA at a 13x multiple; investor Jeff Park countered that "boom and bust semiconductor stocks always look cheap as they head into a bust."
- The speaker's read: Wednesday's semiconductor drawdown likely triggered industry-wide deleveraging. This could mark the end of the AI bull market or be a temporary blip comparable to the prior year's tariff shock.

### The Anthropic IPO outlook

- Anthropic had reportedly targeted an IPO before Thanksgiving, which would require the roadshow to begin the following week.
- Prediction-market odds of pricing before Thanksgiving fell from ~85% to 60% on Thursday; odds of getting out by year-end fell from 95% to 66% over the week.
- Thinly traded secondary markets still price the company near $1.6 trillion, but per the *Wall Street Journal*, three major investors planning to participate say the valuation must come down — one arguing for closer to $1 trillion. The alternative is trimming the reported $100 billion raise target. In August, leaked targets were $2 trillion.
- Fundamentals continued improving regardless: the same WSJ piece reported an $80 billion run rate for October, up from $65 billion at end of July.

### METR's independent safety report on Anthropic

- Anthropic had onboarded METR as its first independent evaluator with employee-level access, intended to improve public visibility into safety practices after so-called rogue-agent incidents.
- Key finding: the pace of improvement in Anthropic's models has roughly doubled over the past year, which METR attributes to AI being used in research. METR wrote that "R&D is accelerated primarily via AI assistance rather than fully autonomous contributions, but there are some signs that fully autonomous contributions will play a larger role soon," and warned that AI significantly accelerating AI development "could lead to a sudden emergence of extreme and risky capabilities."
- METR received more internal access than expected, including analysis of three unreleased models trained since July; the most recent, completed in September or October, continued the accelerating trend.
- Reactions diverged. Ryan Greenblatt (METR) called it "a big update towards ASI within one to two years"; Nathan Calvin (Encode AI) called it "extremely unnerving"; NY Assemblyman Alex Bores argued Congress should ban RSI this year. Nathan Lambert was methodologically sceptical, noting that "a lack of good enough benchmarks is a bottleneck" for the intelligence-explosion form of RSI.
- The speaker's critique: the report is non-responsive to the cybersecurity and sandboxing concerns that partly motivated external auditing, mentioning cybersecurity only in terms of rising model capability. Anthropic co-founder and responsible-scaling officer Sam McCandlish acknowledged criticism that key supporting evidence was redacted and said a supplemental Anthropic analysis would follow. The episode concludes that METR alone does not constitute a complete independent auditor suite.

### Product and feature updates

- **Anthropic** relaunched Claude for personal finance with read-only bank connectivity via Plaid. Claude will not give investment advice, focusing on budgeting and spending analysis. Anthropic framed it as a first step, saying bigger money decisions are best served by "Claude working alongside the licensed professionals and regulated firms they trust."
- **Meta** gave Muse, its personal agent, voice and video chat with fully animated avatars and selectable voices, built on Meta's live voice models and real-time avatar technology. Avatars use subtle expressions and gestures matched to conversational tone, but have no visual input and so cannot read nonverbal cues. Live on mobile, web, and Mac; it will power the forthcoming Muse charm device and works with the Muse Gadget SDK. Meta AI CEO Alexandr Wang demoed his agent "Euler."
- **OpenAI** shipped Images 2.6, adding animated GIF generation with speed editing and per-frame modification, plus reference-image input. It is 50% faster, generating an image in as little as six seconds. Users now create 4 billion images per week, up from 3 billion a couple of months earlier.

### The data source and its caveats

- Menlo Ventures has run its State of Enterprise AI report for four years. The 2026 data comes from a Morning Consult survey of roughly 400 U.S. enterprise decision-makers conducted in mid-September — recent data.
- Those respondents are collectively responsible for about $4 billion in AI spend, making it a meaningfully sized sample.
- Menlo is not an unbiased observer: it is heavily invested in the AI field, including in Anthropic and many other companies. The speaker's judgement is that the data nevertheless directionally confirms prevailing sentiment while adding colour and detail.

### Spending growth re-accelerated in 2026

- Menlo's enterprise AI spending estimates: $1.7 billion (2023) → $8.5 billion (2024) → $33 billion (2025) → almost $177 billion (2026).
- Implied growth rates: 5x from 2023→2024, declining to 3.9x from 2024→2025 — the expected pattern as a market matures and the base grows. In 2026 the growth rate rose again, exceeding even the 2023→2024 multiple.
- The speaker's explanation is agents: beginning with Opus 4.5 in November of the prior year, "AI spend stopped being about seats and started being about tokens," which transformed expectations of total market size.

### Depth of adoption grew far faster than breadth

- The share of enterprises using AI rose from 55% to 65% between 2025 and 2026 — meaning 35% of enterprises still report not using AI, which the speaker cites as evidence of business-world inertia.
- Average AI spend per AI-using enterprise rose about 4.7x, indexing 2025 at 1x.
- The mechanism: agents work independently, run in parallel, and keep working after people step away, so "spending then scales with work, not with headcount."

### Concentration of spend — bearish or bullish?

- The bearish reading: when revenue is concentrated among a small number of customers, any one of them cutting or changing spend has outsized effects, with knock-on damage to the wider market.
- The bullish reading: concentration is not a natural ceiling but a leading indicator — the heaviest spenders today show where the rest of the market eventually goes.
- Menlo reads the 5x growth in average spend per enterprise as a signal of future demand, believing the long tail is barely getting started.

### Actual spend overshot budgets by ~2.5x

- Enterprises spent roughly 2.5 times what they had budgeted for 2026.
- Companies had planned about 1.9x growth — a $10 million 2025 spend budgeted as roughly $19 million in 2026 — calculated on assumptions of broader per-seat adoption. Actual growth was 4.7x.
- The speaker frames this as not out-of-control spending but organisations "flexing and understanding what they can actually do with all this raw intelligence power."
- The whiplash between "token maxing" and token restrictions is symptomatic of planning for a per-seat paradigm and getting a per-token one, which requires a different strategy.
- AI budgeting is starting to resemble cloud-compute budgeting, but even that analogy breaks down; it is a genuinely new category that must be considered on its own terms.

### Buyers moved toward *more* expensive models

- A year earlier, the most popular models were Claude Sonnet 4.5 ($3 per million input / $15 per million output tokens) and GPT-5 ($1.25 / $10).
- Today's leaders are the successors: Claude Opus 5.5 ($4 / $20) and GPT-6 Astro ($10 / $60).
- Frontier models' share of spend rose from 35% to 63%, while mid-tier, small, and older model categories all declined as a share of total spend — despite labs cutting small-model prices by 80%+.
- The speaker argues the cost-efficiency narrative and the capability-over-cost finding are not mutually exclusive: starting with Opus 4.5, a genuinely differentiated capability set came online, and the year was spent racing to implement agentic use cases priced into frontier models. Opus 5.5 looks like another such jump, uncovering use cases that do not translate easily to other models.
- Expectation: as adoption matures and the stack matures, smaller and more efficient models will form part of a more complex stack. The broader lesson is that insider AI narratives are running ahead of the average business's lived reality.

### Vendor market share: a two-horse race

- **Anthropic's** share of business API spend: ~12% (2023) → 24% (2024) → 40% (2025) → 55% (2026) — now past the halfway mark. Opus models since Opus 4.5 have been close to the default for long-horizon agentic coding.
- **OpenAI**: 50% (2023) → 34% (2024) → 27% (2025) — the first year Anthropic overtook them — recovering to 31% in 2026. Menlo attributes this to a strong second half: the GPT-5.6 series (Sol, Terra, Luna) in July, GPT-6 in September, and sustained enterprise/business emphasis through 2026.
- **Google** fell from 21% to 9%, which the speaker attributes to capability position: Gemini 3 Pro was at the frontier in November before Opus 4.5 and the agentic-coding shift, the last point at which Google was plausibly in a three-way race for the top. Gemini 4 Carbon's early indications look good but need more battle testing.
- Near-frontier models — Grok 4.7, Kimi K3, DeepSeek V4, GLM 5.3 — together account for under 5% of API spend.

### Open source: small share of spend, large share of tokens

- Open source accounts for about 4% of spending but roughly 19% of tokens.
- As a share of spend it actually fell, from 6% in 2025 to 4% in 2026; as a share of tokens it rose from 11% to 19%.
- The speaker argues token share is the more significant medium-to-long-term metric and that rising open-source token share is directionally where things head, a trend not yet at its peak.
- This maps onto a standing Wall Street debate: many argue open models will represent the vast majority of tokens used but a relatively small share of total spend, which stays concentrated in elite use cases served by state-of-the-art closed models.
- Within open-source spending, MI was dominant at 61%.

### Coding agents: the standout revenue story

- Lab coding agents — Codex and Claude Code — grew revenue from $1 billion at the end of 2025 to $24 billion at the end of 2026, roughly 24x in a single year.
- This did not come at the expense of other coding platforms: Cursor, Cognition, Factory, Lovable and peers grew nearly 3x, from $2.6 billion to $7.8 billion. The lab apps were simply far larger.

### Category growth rates across applications

- Agentic coding apps grew 7.7x — second only to financial services at 8x.
- Scale differs sharply: Menlo estimates financial services apps at roughly $800 million in spend versus about $34 billion for coding apps, so the financial-services growth rate is notable mainly as a trend.
- Other categories: customer success 4.3x, sales 3.6x, legal 2.8x, and marketing lowest at 1.8x.
- The speaker's partial reading: applications in verifiable domains, where agentic coding capability could be brought to bear even outside app-building, benefited most from 2026's developments.

### AI-native vendors vs. incumbents, by function

- AI-native companies dominate where the capability is net new: coding 96% of spend, finance and operations 95%, design 81%. Sales is nearly even at 54% AI-native to 46% incumbent.
- Incumbents hold more than 50% share in marketing, customer success, HR, data science, and IT. IT is the extreme case: only 9% of AI app spend goes to AI-natives versus 91% to incumbents.
- The explanation offered: enterprise spend flows toward solutions already embedded and already connected to — or themselves constituting — systems of record, rather than ripping them out. IT vendors and partners have often been in place for years or decades.
- Agentic coding is the mirror image: a net new capability with no incumbent already plugged into all the systems, leaving room for new entrants.

### Does AI eat SaaS?

- A major story of 2026 was the "SaaSpocalypse" — SaaS stocks were decimated early in the year as agentic coding came online and investors assumed the ability to spin up bespoke apps would undermine SaaS tools.
- Menlo found only diminished growth, not collapse: SaaS application market growth went from 13% in 2025 to 11% in 2026.
- Of AI spending Menlo could attribute, 21% came from existing software budgets versus 55% from net new budgets — majority net new, which is positive for SaaS investors and vendors.
- The speaker cautions that the next threat to SaaS has barely begun: agents using software, and headless software. Comments from Salesforce are cited as an indicator of how significant that disruption could be.

## Key Concepts

- **Agents (agentic AI)** — AI systems that work independently, run in parallel, and continue working unattended, so cost scales with work performed rather than with headcount.
- **Per-seat vs. per-token paradigm** — the shift from licensing AI by user to paying for it by tokens consumed, which is the episode's core explanation for budget overruns and spending re-acceleration.
- **Token maxing vs. token restrictions** — the opposing enterprise responses to consumption pricing: maximising model usage, or capping per-employee spend as Apple reportedly did.
- **Agentic coding** — using AI agents for long-horizon software development tasks; the dominant enterprise use case of 2026 and the category where AI-native vendors hold 96% of spend.
- **Lab coding agents** — coding tools shipped by frontier labs themselves (Claude Code, Codex), as distinct from third-party platforms like Cursor or Lovable.
- **Frontier models** — the newest, most capable, most expensive model tier (e.g. Claude Opus 5.5, GPT-6 Astro), which grew from 35% to 63% of spend.
- **Near-frontier models** — strong but non-leading models (Grok 4.7, Kimi K3, DeepSeek V4, GLM 5.3) collectively under 5% of API spend.
- **Share of spend vs. share of tokens** — two different lenses on model adoption; open source is 4% of the former and 19% of the latter.
- **AI-native vs. incumbent vendors** — companies built around AI (Anthropic, OpenAI) versus established vendors adding AI to existing products (ServiceNow).
- **Systems of record** — the embedded platforms holding an enterprise's authoritative data, whose incumbency advantage explains why incumbents retain IT, HR, and marketing AI spend.
- **Net new budget vs. existing software budget** — whether AI spending is additive or cannibalises software budgets; Menlo found 55% net new against 21% from existing software budgets.
- **SaaSpocalypse** — the early-2026 selloff in SaaS stocks on the thesis that agentic coding would let companies replace purchased software with their own.
- **Headless software** — software consumed by agents through APIs rather than by humans through a UI; named as the next potential disruption to SaaS.
- **Forced selling / deleveraging** — liquidation-driven, indiscriminate selling across sectors; the speaker's structural explanation for the drawdown's breadth.
- **RSI (recursive self-improvement)** — AI systems accelerating their own development; the central risk framing in METR's report.
- **ASI (artificial superintelligence)** — AI exceeding human capability broadly; invoked by a METR researcher as a one-to-two-year update.
- **Independent evaluator with employee-level access** — METR's arrangement with Anthropic, intended to give the public visibility into internal safety practices.
- **Menlo State of Enterprise AI report** — Menlo Ventures' annual survey of enterprise AI adoption, this edition covering ~400 U.S. decision-makers responsible for ~$4 billion in AI spend.
- **AI Champions Bootcamp** — the show's three-week premium training program with six live sessions led by Nufar Gaspar, starting November 16th, aimed at helping people bring agent use to their teams (information at besuper.ai).

## Summary

Drawing on Menlo Ventures' fourth annual State of Enterprise AI report, the speaker argues that the dominant media narrative of stalling enterprise AI adoption is wrong: spending grew from $33 billion in 2025 to nearly $177 billion in 2026, and the *rate* of growth re-accelerated past even the 2023–2024 pace despite a far larger base. The cause is agents and the accompanying shift from per-seat to per-token economics, which unbinds AI cost from headcount and ties it to work performed. The evidence runs through every finding: adoption breadth rose only modestly (55% to 65% of enterprises) while average spend per enterprise rose 4.7x, overshooting budgets by about 2.5x; buyers moved toward *more* expensive frontier models rather than cheaper ones, lifting frontier share of spend from 35% to 63%; Anthropic took 55% of enterprise API spend on the strength of agentic coding while Google fell to 9%; and lab coding agents grew revenue 24x to $24 billion. Reassuringly for software vendors, 55% of attributable AI spend came from net new budgets rather than cannibalised software budgets — though the speaker flags agents using headless software as the next unresolved threat. His closing caution is epistemic as much as economic: insider AI narratives about cost efficiency, open source, and SaaS disruption are running ahead of what most businesses actually experience day to day, and the gap between the two is itself worth tracking.
