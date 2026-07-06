---
title: The AI Chart Everyone Is Getting Wrong
description: >-
  The talk is an episode of the AI Daily Brief, a daily podcast and video
  covering significant AI news and analysis. The host (unnamed in the
  transcript) argues that a widely circulated chart — the Silicon Data LLM Token
  Expenditure Index, shared by...
pubDate: 2026-06-12T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.youtube.com/watch?v=05VE_9rI954'
draft: false
---
## Overview

The talk is an episode of the **AI Daily Brief**, a daily podcast and video covering significant AI news and analysis. The host (unnamed in the transcript) argues that a widely circulated chart — the Silicon Data LLM Token Expenditure Index, shared by Citadel Securities — is being fundamentally misread by social media commentators and financial analysts. The central thesis is that the chart measures the **weighted average price paid per million tokens** (drawn exclusively from third-party token routers), not total token demand, volume, or expenditure, and that the bearish "AI bubble" narratives built on it are therefore unfounded. The episode also covers the SpaceX IPO, Jeff Bezos's AI startup Prometheus, Meta's forced separation from Manus, Google's chip supply chain diversification, and Goldman Sachs's bullish CapEx forecast.

Source video: *(URL not provided — title: 2026-06-12-the-ai-chart-everyone-is-getting-wrong)*

---

## Prerequisites

- Basic familiarity with large language model (LLM) APIs and token-based pricing models
- Understanding of how financial indices and weighted averages work
- General awareness of the AI infrastructure investment landscape (hyperscaler CapEx, data centers)
- Familiarity with concepts like agentic AI, inference costs, and API token economics
- Some background in financial markets terminology (IPOs, hedge funds, CapEx forecasts)

---

## Main Points

### 1. The SpaceX IPO and Its AI Market Implications

- SpaceX conducted what the host describes as the largest IPO in history, priced at $135/share, implying a ~$1.8 trillion valuation — placing it as the seventh-largest company in the world.
- Retail investors submitted over $100 billion in orders for a $75 billion offering; the retail allocation was approximately 7x oversubscribed.
- Critics note a $5 billion loss on $18.7 billion in 2025 revenue, contrasted against Meta ($200B) and Tesla ($95B), raising questions about valuation justification.
- Goldman Sachs simultaneously ran the IPO and published bullish research forecasting $474 billion in SpaceX revenue by 2030, drawing criticism for conflicts of interest.
- The host argues SpaceX should be read as a **neocloud/infrastructure play** rather than an AI model company, and that its performance is unlikely to serve as a meaningful proxy for Anthropic or OpenAI IPO valuations.

### 2. Jeff Bezos's AI Startup Prometheus

- Prometheus raised $12 billion at a $41 billion valuation, with participation from J.P. Morgan, Goldman Sachs, BlackRock, and Bezos himself.
- The company's stated goal is to build an "artificial general engineer" — AI that can design and manufacture physical goods, including complex equipment like jet engines.
- Bezos dismissed AI jobs apocalypse concerns, predicting AI will create a labor shortage by generating 10x more opportunities even as it reduces labor requirements per task.
- Prometheus is also reportedly considering a ~$100 billion private equity fund to acquire legacy industrial companies — a strategy motivated by the fact that **physical manufacturing data cannot be scraped from the internet** and must be acquired by owning the factories that generate it.

### 3. Meta's Forced Operational Split from Manus

- Meta acquired Manus for $2 billion; Chinese authorities opened an investigation and barred founders from leaving the country after Manus attempted to circumvent export controls via a Singapore relocation.
- Beijing ordered the deal unwound; Meta has now firewalled all operations between the two entities.
- Manus is attempting to raise $1 billion for a management buyback, but faces an uncertain future given reduced market attention relative to open-source agentic alternatives (OpenClaw, Hermes, ClaudeCode, Codex).
- The crackdown has had a **chilling effect on the "red-chip" corporate structure** (Chinese startups incorporating offshore before seeking foreign capital); multiple prominent Chinese AI firms are now restructuring back to domestic incorporation.

### 4. Google's Chip Supply Chain Diversification

- TSMC's years-long backlogs are forcing Google to evaluate Samsung's 2nm process for memory input-output die components in its next-generation TPUs (codenamed Icefish).
- Google has also placed orders with Intel for advanced packaging services for its 2028 production run.
- A complex supply chain is emerging: TSMC handles the most advanced processor fabrication; Samsung and Intel handle less sensitive components.
- This is characterized as a **capacity constraint issue**, not dissatisfaction with TSMC quality.

### 5. Goldman Sachs's Bullish AI CapEx Forecast

- Goldman strategists (led by Ryan Hammond) argue that the Wall Street consensus forecast of ~$920 billion in AI data center CapEx for 2027 is too conservative.
- Goldman's baseline is $1.1 trillion; their bullish scenario is $1.4 trillion for 2027.
- Key assumption: token consumption will increase **24x through 2030**, driven by widespread agent deployment.
- The host aligns with Goldman's view, framing it as consistent with the broader analysis in the episode.

### 6. What the Silicon Data Token Expenditure Index Actually Measures (Core Argument)

- The chart circulated on social media and attributed to Citadel Securities shows a declining line labeled the "LLM Token Expenditure Index," which commentators interpreted as falling token demand, volume, or total expenditure.
- Silicon Data themselves clarified the index is a **usage-weighted average token price index** — i.e., what the market is currently paying per million tokens on average, irrespective of model.
- The declining line means: the average price paid per million tokens in mid-June declined from a peak in early June back to approximately early-May levels. It says nothing about total demand, total volume, or total spending.
- Critically, the index is drawn **exclusively from third-party token routers** — intermediaries whose explicit purpose is to route queries to cheaper models. It contains no data on direct API relationships with OpenAI or Anthropic, which represent the vast majority of token expenditure.
- The host argues this sampling bias means the index **greatly exaggerates** any market-wide shift away from frontier models toward lower-cost alternatives.

### 7. What the Chart Is Actually Signaling (The Token Scarcity Narrative)

- The host agrees there is a real underlying signal: advanced enterprise users are beginning to optimize their **token basket**, mixing expensive frontier models for complex tasks and cheaper models for simpler ones.
- Citadel's actual argument (as opposed to social media interpretations) is more measured: frontier inference-intensive AI will remain in demand but will become **concentrated among firms with large balance sheets, research depth, and domains where it generates outsized returns**.
- The host frames this not as a bubble bursting but as **market rationalization**: scarce, expensive tokens being efficiently allocated to users who can extract the most value from them.
- Companies setting token caps (Walmart, Uber) represent the most advanced AI users — the vast majority of companies are far behind them.

### 8. The Scale of Remaining Demand Growth

- Data from Ramp (which tracks customer AI spending) shows:
  - Top 1% of firms ("fully AI-native"): ~$7,500/employee/month in AI spend
  - Top 10% of firms: ~$610/employee/month
  - Median firm: **$11.38/employee/month**
- Uber's token cap is set at $1,500/employee/month — meaning the median firm would have to grow AI spend by over 130x just to reach Uber's cap level.
- The host argues that total growth in token consumption from the median market will **massively outweigh** any efficiency-driven shift away from frontier pricing.
- On the potential for OpenAI price cuts: analyst Max Weinbach estimates frontier API token margins at roughly **70%**, suggesting significant room to cut prices while remaining profitable.

---

## Key Concepts

- **LLM Token Expenditure Index (Silicon Data):** A usage-weighted average price index measuring what the market pays per million tokens across third-party token routers — not a measure of total token demand, volume, or expenditure.
- **Token routers:** Third-party intermediaries that route AI API calls across multiple models and providers to optimize for cost and capability; the exclusive data source for the Silicon Data index.
- **Token scarcity era:** The host's framing for the current period in which demand for AI tokens (especially frontier tokens) is outpacing supply, driving cost-management behavior among advanced enterprise users.
- **Token efficiency:** The practice of mixing frontier and lower-cost models across different use cases to manage total AI spend — described as increasingly essential for any agentic deployment.
- **Agentic AI:** AI systems that autonomously execute multi-step tasks, dramatically increasing token consumption relative to single-turn assisted interactions.
- **Red-chip corporate structure:** A common structure used by Chinese startups to incorporate offshore (often Singapore) before seeking foreign capital; now subject to crackdown by Beijing.
- **Neocloud:** A company repositioned as a cloud infrastructure provider; used here to describe SpaceX's pivot toward data center services.
- **Artificial general engineer:** Prometheus's term for an AI system capable of designing and manufacturing any physical product.
- **Hyperscaler CapEx:** Capital expenditure by large cloud providers (Google, Microsoft, Amazon, Meta) on AI infrastructure including data centers and custom chips.
- **Token basket:** The mix of frontier and lower-cost LLM models a company uses across different workloads to manage cost and performance trade-offs.

---

## Summary

The host uses a close reading of the Silicon Data LLM Token Expenditure Index — widely mischaracterized on social media as evidence of collapsing AI demand — to argue that the bearish "token panic" narrative is built on a fundamental misreading of what the chart measures. The index tracks only the weighted average price paid per million tokens on third-party token routers, a subset of the market specifically oriented toward cheaper alternatives, and says nothing about total token demand, volume, or expenditure. The actual signal in the data — that sophisticated enterprise users are beginning to optimize their mix of frontier versus commodity tokens — is consistent with a broader market rationalization story, not a bubble collapse. Supported by Ramp spending data showing the median business spends just $11.38 per employee per month on AI, the host concludes that total growth in token consumption from the still-nascent majority of the market will dwarf any efficiency-driven reduction in frontier token spend, aligning with Goldman Sachs's projection of up to $1.4 trillion in AI infrastructure CapEx by 2027.
