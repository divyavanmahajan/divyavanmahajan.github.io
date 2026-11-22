---
title: 'AI Inequality '
description: >-
  This episode of The AI Daily Brief is hosted by NLW. It argues that a new kind
  of AI inequality may be coming. The concern is not about who keeps or loses
  their job. It is about access: the quality of AI that people, companies and
  countries can ge...
pubDate: 2026-05-17T00:00:00.000Z
type: episode
tags:
  - infrastructure-and-chips
  - policy-and-regulation
  - open-weight-models
  - anthropic
url: 'https://www.youtube.com/watch?v=W8HH1XBBlAg'
draft: false
---
## Overview

This episode of *The AI Daily Brief* is hosted by NLW. It argues that a new kind of AI inequality may be coming. The concern is not about who keeps or loses their job. It is about access: the quality of AI that people, companies and countries can get may soon become far more unequal than it is today. The host frames the topic with two recent developments:

- **Business model pressure.** Demand for tokens now outstrips supply. This week Claude Code changed how it bills, which in effect ended the subsidy for people who build outside Anthropic's own harnesses.
- **Mythos.** Anthropic's cybersecurity-focused model has changed how the U.S. Government thinks about frontier models.

Most of the episode is a reading of the essay *"Cut Off"* by Anton Leicht (transcribed as "Anton Licht"), who writes about the political economy of AI on his blog *Threading the Needle*. The subheader reads: *"Soon, access to frontier AI will be scarce and selective."* The host then adds his own commentary on the economics and the policy.

**Source:** No video URL was provided with this transcript.

## Prerequisites

- **Tokens and inference costs.** How usage of large language models is metered, and why serving a model takes ongoing compute.
- **Assisted vs. agentic AI.** The move from chat-style help to autonomous agents that can each use billions of tokens.
- **Frontier models vs. fast followers.** Leading labs (Anthropic, OpenAI) versus developers six to nine months behind them (e.g., DeepSeek).
- **Model distillation.** Training a cheaper model on the outputs of a stronger one.
- **Zero-day vulnerabilities.** Software flaws that are not yet publicly known or patched.
- **KYC (Know Your Customer).** Identity and vetting rules applied before giving a customer access.
- **Basic U.S. AI policy context.** Export controls, U.S.–China competition, and proposals such as the GAIN Act.
- **Basic supply-and-demand economics.**

## Main Points

### 1. Framing: a world of AI "haves and have-nots"
- The episode looks at inequality defined by *access to AI models*, not by job outcomes.
- With agentic AI, one person can consume billions of tokens. Demand is outrunning supply.
- Claude Code's billing change is offered as evidence that today's pricing and access structures are already breaking down.

### 2. The challenged assumption: tokens will be abundant
- Leicht describes a common belief in AI policy circles: market pressure and capital flows will make tokens abundant, and success will go to whoever uses them best.
- This belief is strongest far from San Francisco, especially among "middle powers" whose plans rely on "good enough" models.
- The belief requires that capabilities be widely available, for example that defenders get models before attackers and that firms compete on equal access.
- Recent events contradict it:
  - Anthropic released Mythos only to a select list of mostly U.S.-based corporations.
  - OpenAI's GPT-5.5 Cyber, through its "Daybreak" initiative, also had a limited release.
  - The U.S. Government is reportedly planning to step in, though it is unclear how.

### 3. Trend one: security and distillation
- **Misuse risk.** Capable models may be used for cyberattacks or bioweapons design. This leads to staged rollouts: defenders first, then vetted customers, and the general public only once the model is no longer state of the art.
- **Government formalisation.** The U.S. may turn voluntary staged release into a rule. It may distrust developers, or the NSA may want to learn which zero-days a model can find so it can use them first.
- **Model theft and espionage.** Model weights in unsecured data centers are a vulnerability, and many non-U.S. countries have not addressed data center security.
- **Distillation.** Fast followers reportedly depend on largely unrestricted API access. Labs cannot recover R&D costs if their models are distilled within about six months. Leicht expects crackdowns, from developers if not from government: heavier KYC, more restrictive default access, and access conditions shaped by geopolitics.

### 4. Trend two: compute crunches
- Frontier AI is not like software licensing. Each extra user has a high marginal compute cost.
- Labs repeatedly hit compute crunches. Anthropic is reportedly seeking ad hoc deals with underused data centers, including one at rival xAI.
- Efficiency curves make *last year's* capability cheaper. They do not make the *next* frontier model cheaper, and frontier costs have risen month over month.
- If competition requires the *best* AI rather than "good enough" AI, efficiency gains do not solve the access problem.
- Buyers lose bargaining power. Expanding to new markets brings compliance, product and security costs.
- Competition for tokens may follow:
  - The U.S. could make American firms "buyers of first resort" for American tokens, echoing the GAIN Act idea of a right of first refusal on chips.
  - Alternatively, pure price competition would favour those who can turn tokens into revenue most effectively. Leicht does not expect that to be governments or European businesses.

### 5. Trend three: U.S. Government involvement
- Access controls that start for genuine security reasons may later serve other political or strategic goals.
- The NSA's mission is not equitable global diffusion. Its instinct is to limit adversaries, even at a cost to productivity or alliances.
- The Trump administration tends to bundle leverage across issues, for example linking trade, intelligence and food safety. Pre-deployment authority over frontier models could become one more bargaining chip.
- Even with security and economics handled well, access stays contingent on how closely a country's interests align with U.S. strategy.

### 6. The projected "next equilibrium"
Leicht describes a possible release pipeline:
1. A new model goes first to the U.S. national security apparatus, which may hold it back or use it first.
2. It returns to the developers with the expectation of release to trusted defenders and U.S. firms, plus perhaps a few international partners.
3. Access then widens to firms that clear high KYC and security bars.
4. Everyone else (consumers, startups, foreign governments) gets the model only through limited product layers such as chatbots, coding agents and a few well-connected vendors, and often without enough tokens to use it well.

Unrestricted access to a generation would arrive only once the next generation has entered the same pipeline. Leicht calls this the end of the "Andy Warhol era" of AI access, in which rich and poor used the same AI.

### 7. Consequences of unequal distribution
- **Economic.** Leicht agrees with accelerationist critics that restricting startups and ambitious deployers harms innovation and growth, because iterative deployment is how society learns to use AI. He blames market dynamics and security realities, not Anthropic.
- **Geopolitical.** Countries would split into frontier haves and have-nots. The haves could be wealthier and safer, with better public services and security agencies working at the state of the art.
- **Historical parallel.** Unevenly shared industrial revolutions have caused mass migration, reopened dormant conflicts and destabilised democracies.

### 8. Proposed solutions, framed as areas of convergence
Leicht argues these policies should appeal to both accelerationists and safety advocates:
1. **Make the world safer.** Harden cyber and bio defences, for example by screening protein manufacturing, so security-driven restrictions are less needed. Deploy technical fixes for distillation through usage policies and monitoring before heavier measures arrive. Importing countries should improve data center security.
2. **Build many data centers.** Every GPU brought online this year makes fairer diffusion in three years more likely. Opponents of rapid build-out should reconsider.
3. **Trade compute for access.** U.S. allies offer hyperscalers favourable terms, such as subsidised energy, in return for contractual guarantees of frontier access. If a lab reneges, its capital investment is stranded. If the U.S. Government imposes restrictions, it faces a domestic tech lobby protecting its foreign revenue.
4. **Contingency capacity for middle powers.** Countries should keep leverage, and some ability to build frontier systems, for the case where the other measures fail.

Leicht's conclusion: the problem is not new and needs no clever new solutions. It needs serious execution: build infrastructure and build a world resilient enough to handle advanced AI. "The mythos moment" should be the wake-up call.

### 9. Host commentary: inequality is already visible
- The host argues that with Mythos available to some and not others, the gap may already exist.
- Microsoft's Global AI Diffusion Report: over the last six months, 27.5% of the population in the Global North used AI versus 15.4% in the Global South. Usage in the North also grew more than twice as fast.
- Part of this gap comes from wider access problems such as electricity and internet connectivity.

### 10. Host commentary: the economic reality
- Even if governments committed to equal access, AI companies cannot currently supply as many tokens as the market wants at anything like current prices.
- The result is higher prices and a restructured access model.
- Developer anger at the Claude pricing change was not about higher costs alone. Many existing ways of building became economically unviable.
- In the host's words, "these chickens are not just coming home to roost. They are firmly in the coop."

### 11. Host commentary: the policy irony
- Bernie Sanders, in December, called for a moratorium on data center construction so that AI's benefits go to "all of us, not just the 1%."
- The host acknowledges a coherent version of this position: if AI will take all the jobs, slowing it down is politically rational.
- But if the technology is inevitable and the goal is fair benefit, a moratorium works against that goal. The causal chain is:
  - fewer data centers → scarcer compute → rationed, pricier access
  - wealthy users and large companies keep access
  - students, independent builders and small businesses are pushed to weaker tiers
- The host allows that the moratorium might be a negotiating tactic to secure community benefits from data center projects.

### 12. Closing
- In the short term there is not enough compute to give everyone all the AI they want. The longer-term outcome is still open. Quoting *Lawrence of Arabia*: "nothing is written."
- The host calls this "quietly going to be one of the most significant political moments of our lives."

## Key Concepts

- **AI inequality (access-based).** Gaps between people, firms or countries in the quality and quantity of AI models they can use.
- **Frontier AI.** The most capable state-of-the-art models available at a given time.
- **Mythos.** Anthropic's advanced cybersecurity model, released only to a select group of mainly U.S. partners.
- **GPT-5.5 Cyber / Daybreak.** OpenAI's reportedly comparable cyber model and the initiative under which it had a limited release.
- **Agentic AI.** AI systems that act autonomously for users, consuming far more tokens than assistive chat use.
- **Token supply/demand gap.** Demand for inference exceeding the compute available to serve it.
- **Compute crunch.** A shortage of computing capacity that forces labs to ration, cut offerings or seek extra data center deals.
- **Distillation.** Training a model on another model's outputs, which lets fast followers replicate frontier capabilities cheaply.
- **Fast followers.** Model developers roughly six to nine months behind the frontier, e.g., DeepSeek.
- **KYC (Know Your Customer).** Customer vetting requirements that can be used to restrict who gets model access.
- **Efficiency curves.** Falling cost of a *fixed* level of capability over time, which does not make each new frontier model cheaper.
- **GAIN Act.** A proposal that would give Americans a right of first refusal on American chips; Leicht suggests the same logic could extend to tokens.
- **"Buyers of first resort."** Leicht's hypothetical in which U.S. firms get priority access to U.S.-produced AI tokens.
- **Middle powers.** Non-superpower nations trying to navigate the AI transition, often relying on "good enough" models.
- **Compute-for-access deals.** Allies offering hyperscalers favourable data center terms in exchange for guaranteed frontier access.
- **"Andy Warhol era" of AI access.** Leicht's term for the current period, in which rich and poor alike use the same frontier AI.
- **Global AI Diffusion Report.** Microsoft's report on global AI adoption, showing a widening North–South usage gap.
- **Data center moratorium.** A proposal by Bernie Sanders, which the host associates with AOC, to pause data center construction.

## Summary

The episode argues that the current period of roughly equal access to state-of-the-art AI may be ending. Through Anton Leicht's essay "Cut Off," it identifies three reinforcing forces:

- **Security concerns:** misuse risk, model theft and distillation.
- **Compute constraints:** frontier models stay expensive to serve, and demand from agentic AI is rising sharply.
- **Government involvement:** control over model release may grow and could be used for wider strategic leverage.

Together these could produce a tiered system. New frontier models would go first to national security agencies and trusted U.S. firms, while consumers, startups and most foreign governments got only limited, product-mediated access. Leicht warns that this would hurt innovation and could open destabilising geopolitical gaps. His proposed remedies:

- Harden the world against AI-enabled threats.
- Fix distillation with technical measures.
- Build data centers at scale.
- Have allies trade compute investment for guaranteed access.
- Keep contingency capabilities for middle powers.

The host adds that the inequality is already showing in adoption data and in recent price changes. He argues that data center moratoriums, though presented as promoting fairness, would worsen access inequality by making compute scarcer. His central message is that the outcome is not yet decided, and that how society resolves the compute shortage will be one of the defining political questions of the era.
