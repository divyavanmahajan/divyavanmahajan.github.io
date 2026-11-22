---
title: Why You Should Try Gemini Neon (Even if You Love Fable)
description: >-
  This episode of The AI Daily Brief, a daily podcast and video about AI news,
  was released on 20 November 2026, the day after Anthropic's IPO. The host is
  not named in the transcript. The episode has two parts:
pubDate: 2026-11-20T00:00:00.000Z
type: episode
tags:
  - ai-economics
  - ai-safety
  - models-and-benchmarks
  - anthropic
  - google
url: 'https://www.patreon.com/posts/175910169'
draft: false
---
## Overview

This episode of **The AI Daily Brief**, a daily podcast and video about AI news, was released on 20 November 2026, the day after Anthropic's IPO. The host is not named in the transcript. The episode has two parts:

1. **Headlines:** Anthropic's first day as a public company, a short-seller report on AMD, Chinese reactions to new US export controls, and a change of White House cybersecurity director.
2. **Main episode:** Google's new **Gemini 4 Neon** model. The host argues that Neon is worth using even for people who are happy with OpenAI or Anthropic models. The reason is not that it is clearly better. Its answers and reasoning are *different* from theirs, and that difference is useful in its own right.

The episode ends with a short story about Apple building its own personal computer-use agent.

**Source video:** No URL was provided with the transcript.

## Prerequisites

- How frontier AI models are released, and the current model families named in the episode: Anthropic (Opus 5.5, Fable 5.2), OpenAI (GPT-6.2 Sol, GPT-6.2 Astra) and Google (Gemini 4 Argon, Carbon, Hydrogen, Neon).
- What AI benchmarks are and how they are used to compare models (e.g. Terminal Bench, Cursor Bench, Artificial Analysis Intelligence Index).
- What agentic coding is, and what a "harness" is: the tool environment a model runs in, such as Claude Code, Codex or Google Antigravity.
- What sycophancy means in language models.
- Basic IPO and equity-market terms: IPO price, first-day pop, market cap, lockup periods.
- Background on US export controls on AI chips to China.

## Main Points

### 1. Anthropic's IPO: a solid but not explosive debut
- The stock closed its first day on NASDAQ at $97.17, up 17% from the $83 IPO price. This gave a market cap of about $1.8 trillion, making Anthropic the seventh-largest company in the world.
- It raised $107 billion, the largest IPO in history. The first trade was the day's high (just above $110, an implied $2 trillion valuation). The stock then fell to about $93 and traded between $94 and $100 for the rest of the day, while the NASDAQ 100 fell more than 2%.
- CEO Dario Amodei's speech at the bell focused on medical breakthroughs ("compress a century of scientific and medical progress into a decade") and safety. He promised to pace training and deployment "as long as is necessary" and described a "race to the top."
- Sceptical views:
  - Bloomberg's Anna Wong suggested the IPO could mark the end of the AI trade.
  - Vanda Research found heavy retail trading volume ($700–800M) but under $60M of net buying.
  - Critics raised concerns about the co-founders' "golden share" and how well the Long-Term Benefit Trust can actually check it.
- Counterpoints: Sequoia, Iconic, Lightspeed and Altimeter all bought *more* stock at the IPO, which is unusual. The host also argues the market backdrop makes direct comparisons with the SpaceX IPO hard.

### 2. Chipmakers and the China problem
- AMD stock fell 7% after a Hunterbrook Media short-seller report. The report claimed that blacklisted Chinese server maker IEIT Systems kept receiving AMD firmware, and that up to 20% of AMD's revenue comes from China and Hong Kong. AMD denied it.
- Counterpoint from the account "AI Thesis": having the firmware does not prove AMD dealt with IEIT. Also, most of AMD's China revenue may come from products not covered by export controls.
- The Commerce Department closed the "remote access loophole," which had let Chinese labs use chips housed in data centres in other countries.
  - Tencent and Alibaba warned of delays.
  - Moonshot cancelled a $150M deal for Blackwell Ultra B300 access in Indonesia.
  - TSMC and Samsung suspended some deliveries to Chinese customers.
- Tencent's results came in under expectations. Alibaba beat expectations but forecast slower cloud growth (30–45%) because of the controls.

### 3. White House cybersecurity leadership change
- Sean Cairncross is out as White House cybersecurity director. He is replaced by Kirsten Davies, the Pentagon CIO and former Unilever CISO. Sources disagree on whether he left amicably or was fired by new chief of staff Stephen Miller.
- Possible readings:
  - A win for the more hawkish AI-policy faction led by Treasury Secretary Bessent. Cairncross had helped shape the June executive order on voluntary frontier-model testing.
  - A response to a recent series of cyber incidents.
- Recent incidents: a breach at a JPMorgan Chase vendor, and a European Commission hack that used **Artex**, an open-source agentic hacking tool the FBI has warned about.

### 4. Gemini 4 Neon: what it is
- Released the day before the IPO, Neon is Google's fourth model in two months, after Argon, Carbon and Hydrogen. At first it was largely overlooked or met with scepticism.
- Early sceptics changed their minds after trying it:
  - Factory ambassador Chidi first questioned the point of a model that was only 25% cheaper, then wrote "never have I been so happy to be so wrong."
  - Others called it the most human-sounding, least "slop" writing model available.
- Google describes it as delivering frontier-level intelligence with fast end-to-end task completion across software engineering, knowledge work and science workflows.
- DeepMind researcher Tianfu Fu said, in a post later deleted, that Neon is "one of our small models." It is positioned in the same tier as Opus and Sol, though its performance approaches Fable and Astra.

### 5. Benchmark performance
- **Against its own tier** (Opus 5.5, GPT-6.2 Sol), Neon leads in every category except coding, where it roughly ties Opus:
  - About 1 point behind on Terminal Bench and Frontier Code.
  - More than 7 points ahead on Cursor Bench.
  - 14 points ahead of Opus on Automation Bench.
  - About 3 points ahead of Sol on Agent's Last Exam.
- **Artificial Analysis Intelligence Index:** Neon scores 61.
  - +1 over Gemini 4 Carbon, −1 behind GPT-6.2 Astra, −4 behind Fable 5.2.
  - +2 over Opus, +4 over Sol.
- **Coding Agent Index:** Neon is now #1.
  - +1 over Fable 5.2 and Opus 5.5.
  - +6 over Astra, +9 over Sol.
  - This is notable because coding has historically been Google's weak spot.
- **Efficiency:**
  - Uses 15% more tokens per task than Carbon.
  - 40% faster than Carbon, but still less than half the speed of OpenAI models.
  - Costs $6.44 per task, mid-range.
- **Real-world tests:** Pavel Hurin's bug-hunt bench uses two real repositories with 105 planted bugs. Neon at extra-high effort found 63 of them, ranking above GPT-6.2 Astra and Fable 5.2.

### 6. The real value: difference, not superiority
- Alex Finn's view: Claude and OpenAI models "feel like they were trained on the same data." Gemini models give "a completely novel, different way of thinking," so people should at least use Gemini for a second opinion.
- Finn's caveats:
  - Google's harnesses (including Antigravity) still lag well behind Anthropic's and OpenAI's.
  - Gemini can be too technical when explaining agentic coding work.
- The host's own example came from planning a "How We Got Here" episode on why oil still runs the world:
  - Outlines made with OpenAI and Anthropic models stayed stuck in "glorified Wikipedia page" mode.
  - Neon reworked parts of the argument in a way that led to a better narrative outline.
- The host does *not* claim Neon is better. In this case, "it's not the betterness, but the difference itself that is the value."

### 7. Main weakness: Neon is a pushover
- Earlier model generations were too sycophantic to give real feedback when brainstorming. Labs reduced this over time.
- Neon is not exactly sycophantic, but it is "maybe the biggest pushover I've seen in a model for two years":
  - It gives up its position at the slightest pushback.
  - If the user then says it went too far, it swings straight back to its original view.
- In practice, Neon's fresh perspective is most useful in its *first* answer. Further back-and-forth makes it wishy-washy.
- The host's next step is to compare building with Neon against Claude Code and Codex. Overall, this is their most positive experience with a Google model since mid-to-late 2025.

### 8. Apple's personal agent
- Bloomberg's Mark Gurman reports Apple job listings for a "proactive agentic AI assistant." It would write code, browse the web, control apps and navigate devices on the user's behalf.
- Reported drivers:
  - Agents are flooding the App Store.
  - Meta's Muse has overtaken ChatGPT in the free app rankings.
  - New CEO John Ternus is pushing Craig Federighi to move faster on AI.
- Results could appear as early as next year.
- The downside: in macOS 27.3, enabling ChatGPT's third-party computer-use support now takes 14 steps, up from 4. Apple cites security; some users see it as anti-competitive.

## Key Concepts

- **Gemini 4 Neon:** Google's newest model, described internally as a smaller model, that leads its tier on most benchmarks and is strong at coding and agentic tasks.
- **Model tiers:** Frontier labs offer a top tier (Fable, Astra) and a slightly smaller tier (Opus, Sol, Neon) that trades some capability for cost and speed.
- **Artificial Analysis Intelligence Index / Coding Agent Index:** Independent composite benchmarks used to rank models on general intelligence and agentic coding.
- **Bug Hunt Bench:** Pavel Hurin's test asking models to find 105 planted bugs across two real code repositories.
- **Harness:** The tooling environment a model runs in for agentic work (e.g. Claude Code, Codex, Google Antigravity); it strongly affects real-world usefulness.
- **Google Antigravity:** Google's native agentic coding harness, considered behind its competitors.
- **Sycophancy:** A model's tendency to agree with the user instead of giving honest feedback.
- **Pushover behaviour:** A related failure where a model drops its position under minimal pushback and flips back again when challenged.
- **Remote access loophole:** The now-closed route that let Chinese AI labs legally use advanced US chips in third-country data centres.
- **Golden share / Long-Term Benefit Trust:** Anthropic's governance structure that gives the co-founders voting control, with the trust as a nominal check on them.
- **Artex:** An open-source agentic hacking tool linked to recent attacks on critical systems.
- **Computer-use agent:** An AI agent that operates a computer like a person: browsing, using apps, running commands and writing code.

## Summary

Anthropic's record IPO dominated the news, but the host chose to focus on Google's Gemini 4 Neon, which turned around initial scepticism. Neon is a smaller-tier model that leads Opus 5.5 and GPT-6.2 Sol on most benchmarks and tops the Coding Agent Index, historically Google's weakness. The host's main argument is not that Neon is better than OpenAI or Anthropic models. It is that Neon thinks *differently*, and that difference has practical value: as a second opinion, and as a way out of the convergent, "same-answer" thinking of the other labs' models. The host also warns that Neon gives up its positions far too easily, so its first answer is usually its most useful one. They conclude that Google being back among the leading models, and Apple entering the agent race, are good news for consumers, and they encourage listeners to try the new Gemini models.
