---
title: 'How Business AI Use is Changing '
description: >-
  This episode of The AI Daily Brief, a daily podcast and video series on AI
  news, looks at three new studies of enterprise AI behaviour that tell a
  similar story. Businesses are using price competition between token providers
  to get better deals an...
pubDate: 2026-11-17T00:00:00.000Z
type: episode
tags:
  - enterprise-adoption
  - ai-economics
  - infrastructure-and-chips
  - nvidia
  - anthropic
url: 'https://www.patreon.com/posts/175644548'
draft: false
---
## Overview

This episode of **The AI Daily Brief**, a daily podcast and video series on AI news, looks at three new studies of enterprise AI behaviour that tell a similar story. Businesses are using price competition between token providers to get better deals and become more efficient. As a result, their AI usage is growing much faster than their AI spending. The sources are Databricks' new AI Index, Arcana Research's first annual State of Enterprise AI study, and the Ramp AI Index for October and November. The host argues that this matters because enterprise buyers now have more leverage than many of them use, and because how far typical companies move toward the spending of the top 1% will decide whether the industry's capital spending turns into a return on investment.

Before the main topic, the episode covers several headlines: the Jensen Huang/NVIDIA board situation, new US export-control rules on remote chip access, a planned "national champions" programme, OpenAI's embedded safety evaluator agreements, and a major US banking outage.

**Source video:** No URL was provided with the transcript.

## Prerequisites

- **Tokens and token pricing:** LLM usage is metered in tokens, usually priced per million tokens. Input and output tokens are often priced differently.
- **Frontier vs. non-frontier models:** The difference between the most capable, highest-priced models and cheaper alternatives, including open-weight Chinese models.
- **Model routers and gateways:** Middleware that sends each request to a suitable model across several providers.
- **The enterprise AI vendor landscape:** Anthropic (Claude, Claude Code, Opus, Fable), OpenAI, GitHub Copilot, Databricks.
- **The data sources and their samples:** Ramp is a corporate card and spend platform whose customers lean toward tech companies. Global 2000 is the Forbes list of the world's largest public companies.
- **Background on US–China chip policy:** Export controls on advanced AI accelerators and the problem of chips being diverted through third countries.

## Main Points

### Headlines: NVIDIA board says Jensen Huang will not return

- Support for reinstating Huang grew after his resignation. A petition passed 180,000 signatures, including Elon Musk and Tim Sweeney. Shareholders Brad Gerstner and Gavin Baker wrote to the board, and President Trump said a return "certainly isn't a bad idea."
- On Monday a source told CNBC that the board is focused on an independent investigation by Wachtell Lipton and is not discussing a return. The investigation covers whether Huang's conduct compromised national security or company secrets.
- Scott Galloway put the odds of reinstatement at "almost zero," noting that board members may have to testify before Congress or in court.
- Sam Altman said the AI industry "will be fine" without Huang because revenue and demand are strong, and that NVIDIA's guarantees are still trusted. OpenAI's Ohio facility depended on a $100B NVIDIA guarantee.
- Analysts, including Needham's John Todoram (spelling as transcribed), expect more uncertainty in credit support for neoclouds. The Wall Street Journal reports that interim CEO Colette Kress is expected to scale back data-centre backstops. It also reports that Huang had already begun pulling back and demanding upfront payment for chips.

### Headlines: Export controls, interagency conflict and "national champions"

- Commerce issued a rule requiring data-centre operators in Singapore, Malaysia, Thailand, Indonesia and Brazil to obtain export licences for advanced AI chips. Existing data centres must get licences within 90 days. The aim is to stop Chinese labs from reaching chips remotely through third countries.
- The rule says it was "written by and at the direction of" Treasury and the National Security Council. Sources say Treasury Secretary Bessent pushed it through with Secretary of State Rubio's support. This exposed open conflict with Commerce Secretary Lutnick.
- Trump described the dispute as one official wanting to be friendly with China and the other wanting "a blow-up," and said he would not fire Lutnick.
- Critics warn that public disagreement between agencies invites workarounds. These include Chris McGuire of the Council on Foreign Relations and former Commerce official Christopher Padilla.
- The administration plans to name its first AI "national champions": NVIDIA, Amazon, Microsoft, OpenAI and Anthropic. These companies would get faster export licensing, government support for international business development and access to federal finance.

### Headlines: OpenAI's embedded safety evaluators

- OpenAI signed agreements with Apollo Research, METR, Translucent and Goodfire to give them "deep access" for alignment and safeguard evaluations. Every frontier lab made this commitment after the Hugging Face incident, and it later became part of the White House Accord on Superintelligence.
- Apollo will embed six evaluators for four months, with access to reasoning traces, RL rewards and intermediate checkpoints. However, OpenAI may withhold information on technical, security or IP grounds. Evaluators will only be able to talk to selected staff, will have no Slack access, and OpenAI can redact supporting evidence. Conclusions must still be published unchanged.
- Apollo said the pilot "doesn't yet meet our bar." Neel Nanda said it falls short of the "employee-like access" that was promised. Steven Adler criticised a "tattletale clause" that requires employee concerns to be routed through OpenAI.
- The host's view: Anthropic's version of the arrangement (with METR and SecureBio) was received better, but labs that pick their own auditors have different incentives from society. Real independence needs agreed standards and some external authority to enforce it. The host notes that this is one of the few safety areas where broad consensus is possible.

### Headlines: Banking outage

- JPMorgan Chase, Bank of America, Wells Fargo, Zelle, Capital One and U.S. Bank had problems with logins, ATMs and transfers. The cause was traced to JPMorgan Chase's back-end systems.
- JPMorgan blamed a software bug in on-premises hardware and said cybersecurity was not involved.
- Public scepticism is growing because this follows outages at Microsoft and the FAA, among others. Vivek Wadhwa asked whether China could be probing US critical infrastructure. The host continues to watch the narrative about AI's possible role.

### Main episode: Usage is growing much faster than spending

- On Ramp, token usage rose **36%** in a month while spending rose only **2%**.
- Across OpenAI and Anthropic, the average price per million tokens fell **21%** in October.
- The host's interpretation: companies are not necessarily moving to cheaper Chinese models. The existence of those models is pushing the major providers to cut prices, and the providers are also building more efficient models themselves.

### Enterprises are using several model providers

- On Databricks' Unity Gateway, a router that helps enterprises pick a suitable model and cut costs, **64%** of companies used a single provider in July. By early November **72%** used two or more.
- Databricks argues that the raw token price is the wrong number to watch. Enterprises will increasingly focus on **cost per successful task**.

### AI budgets in large enterprises are growing, but visibility is low

- Arcana found that AI is now an eight-figure budget line at Global 2000 companies. **91%** expect to spend more in 2026, most by 20–40%.
- Two-thirds of the leaders surveyed have **no visibility** into what they spend on model and API usage. This points to a gap between nimble leading companies, such as those in the Ramp sample, and typical Global 2000 firms that still use older methods. The host expects this to change quickly.

### Where the reports agree

- **It is a buyer's market.** A third of OpenAI customers in the Arcana survey are open to switching, often to Anthropic. **43%** of GitHub Copilot customers are open to switching, usually naming Claude Code.
- **Spending is highly concentrated.** On Ramp, the top 1% of firms spend about **625×** the median per employee per month: over $10,000 versus $16.32. On Databricks, the 99th-percentile user spends almost $700 a week versus a median of $2.49, a **281×** gap. The host notes that Ramp's sample is tech-heavy.
- **Coding is still the biggest use.** **72%** of Ramp AI spend comes from engineering teams. A third of Arcana respondents are piloting AI coding tools, the largest pilot category.
- **Anthropic leads in the enterprise.** About **45%** of US businesses on Ramp pay Anthropic, versus **40.6%** for OpenAI. **68.8%** of proprietary-model tokens on Unity Gateway go to Anthropic. **81%** of Arcana respondents named Anthropic as an exciting vendor.
- **Customer service is growing.** Customer-support teams' share of Ramp spend grew from **0.8%** in June to **13.3%** in November. **38%** of Arcana respondents already use AI for customer service.

### Where the reports disagree

- **Spending growth:** Arcana respondents expect strong growth in 2026, but Ramp's monthly token spend growth has been modest: 1.05% in August, 0.22% in September and 1.65% in October. If 1.65% held, it would compound to about 22% a year. That is a slowdown from earlier periods but still within Arcana's 20–40% range.
- **Frontier models:** The frontier-model share of Ramp spend rose from 67.7% to 69.5%. On Databricks, Fable's token share fell from 5.5% to 0.6%, while Opus 5.5 rose from 7.2% to 37.9% over six weeks. The host suggests this reflects Opus 5.5's dominance, with Fable 5.2 not yet finding its place, rather than a move away from frontier models in general.
- **Agents:** The host expects 2026 to be called "the year agents got real," but for average enterprises agents are still mostly aspirational. Autonomous agents rank fourth on Arcana's heat index of pilots and plans but last on its adoption index of what is actually deployed.

### Caveats and conclusions

- Each source has limits. Databricks only covers customers using its gateway, Ramp's sample is small and tech-forward, and Arcana's Global 2000 sample is small.
- Even so, the host finds the shared conclusions stronger than the differences. Competition is pushing prices down, enterprises are optimising for efficiency as well as capability, and switching models is becoming normal.
- The key market question is whether the top-1% spenders are outliers or an early picture of where typical companies are heading. The answer will determine the overall market size and whether capital spending produces a return.
- **Advice for enterprises:** Most have more negotiating leverage than they use. Providers are fighting to avoid becoming commodities, so good deals are available to companies that have built the infrastructure to switch models.

## Key Concepts

- **Token price deflation:** The falling cost per million tokens, driven by competition and more efficient models. Average OpenAI/Anthropic prices fell 21% in October.
- **Usage–spend divergence:** Token consumption growing much faster than spending (36% versus 2% on Ramp in one month).
- **Unity Gateway (Databricks):** A model router and gateway that sends enterprise workloads to suitable models across providers to save cost.
- **Multi-provider strategy:** Using two or more model vendors. This rose from 36% to 72% of Unity Gateway companies between July and November.
- **Cost per successful task:** A measure that judges AI cost by completed outcomes rather than the raw token price.
- **Ramp AI Index:** A monthly measure of business AI adoption and spending, based on transactions from Ramp's mostly tech-forward customers.
- **Databricks AI Index:** A new index of enterprise model usage based on traffic through Databricks.
- **Arcana State of Enterprise AI:** An annual survey of Global 2000 AI leaders covering budgets, pilots, adoption and vendor sentiment.
- **Spend concentration:** The gap between the heaviest AI spenders and the median: 625× on Ramp and 281× on Databricks.
- **Heat index vs. adoption index:** Arcana's two rankings, one for what companies are excited to pilot and one for what they have actually deployed.
- **Buyer's market:** Customers have leverage over vendors because switching is easy and competition is intense.
- **Embedded safety evaluators:** External auditors placed inside AI labs with privileged access to assess alignment and safeguards.
- **National champions programme:** A planned US Commerce designation giving selected AI companies faster export licensing, government support for international business development and access to federal finance.

## Summary

Three independent datasets (Ramp, Databricks and Arcana) show that business AI has entered a buyer's market. Competition, including pressure from cheaper models, is pushing token prices down, so companies are using far more AI without spending proportionally more. Enterprises are moving quickly to multi-provider setups and are judging AI by efficiency, ideally cost per successful task, as well as capability. Coding is still the main use, customer service is growing fast, Anthropic holds the enterprise lead, and agents are still more aspiration than deployment for typical firms. The datasets differ on how fast spending will grow and on frontier-model share, and each has sampling limits, but the host argues the shared conclusions are stronger. The big open question is whether the top 1% of spenders, at 281–625× the median, show where everyone is heading, because that will decide the market's size and whether AI capital spending pays off. The host's practical message to enterprises: you probably have more leverage than you use, and companies that have built the ability to switch models can get good deals.
