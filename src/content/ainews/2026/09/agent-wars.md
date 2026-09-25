---
title: Agent Wars!
description: >-
  Source: The AI Daily Brief — episode "Agent Wars" (2026-09-22). Host:
  Nathaniel Whittemore (the podcast's regular host; not self-identified by name
  in this transcript). No YouTube URL was supplied with this transcript, so no
  link can be provided.
pubDate: 2026-09-22T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/170282278'
draft: false
---
## Overview

**Source:** *The AI Daily Brief* — episode "Agent Wars" (2026-09-22). Host: Nathaniel Whittemore (the podcast's regular host; not self-identified by name in this transcript). No YouTube URL was supplied with this transcript, so no link can be provided.

The central thesis is that the "AI agent wars" have begun. Meta's **Muse** personal agent has become the first consumer AI agent to achieve genuine mainstream traction — overtaking ChatGPT as the number one free app in the US. That success immediately provoked a defensive response: over the weekend, **Amazon cut off Muse's ability to shop on Amazon properties**, while **Shopify** moved in the opposite direction and announced official Muse support. The episode argues this marks the opening of a new competitive dimension in AI — a fight between horizontal personal agents that aggregate the internet on a user's behalf and the platforms that built their businesses on owning the customer relationship and monetising attention through ads.

A headlines segment preceding the main story covers two adjacent developments: the mixed reception of **Grok 4.7**, and US Treasury Secretary Scott Bessent's rejection of AI liability shields for frontier labs.

## Prerequisites

- **Personal / consumer AI agents** — assistants granted access to email, calendar, payment methods and third-party services to act on a user's behalf.
- **Ben Thompson's Aggregation Theory** — the idea that platforms which own the customer relationship commoditise their suppliers; the episode's central analytical frame.
- **Platform economics of retail vs. advertising** — retail margins in the low single digits versus ~70% advertising margins, which explains Amazon's incentives.
- **LLM benchmarking practice** — coding and agentic benchmarks (CursorBench, DeepSui, AA Briefcase, intelligence/coding-agent indices) and their known divergence from real-world use.
- **AI liability and safety policy debate** — liability shields, third-party model evaluation, systemic vs. firm-level risk.
- **Agentic commerce infrastructure** — virtual credit cards for agents (Visa, Mastercard), agentic checkout (Shopify's ShopPay), and terms-of-service enforcement against automated shoppers.

## Main Points

### 1. Grok 4.7 benchmarks well but disappoints in practice

- SpaceX AI launched Grok 4.7 as an improvement over 4.6 at the same price and speed. On benchmarks it gained ~6 points on CursorBench 4.0 (overtaking GPT-5.6 Sol, still 5 behind Fable 5.1) and ~6 on DeepSui (overtaking Fable 5.1, just short of GPT-5.6 Sol). On AA Briefcase, which measures multi-hour white-collar work, it scored **1,657 ELO**, ahead of GPT-5.6 Sol and close behind Fable 5.1.
- Artificial Analysis ranked it **7th** on its intelligence index (behind Astra, two Fable iterations, Opus, MewSpark 1.3 and GPT-5.6 Sol) and **4th** on the coding agent index. Elon Musk declared SpaceX AI the third-place lab for agentic coding behind OpenAI and Anthropic, citing speed and cost.
- Public testing contradicted the marketing. Bavi's rocket-takeoff animation test produced a wobbling, bizarre render versus Kimi K3; Scott's jello-mold render passed but took 40 minutes against Astra's 5; Theo called its output on his "fish slop game" the worst he'd seen this year.
- Theo's cost critique: Grok 4.7 was claimed to be more token-efficient but came out **30–80% less** efficient, scored worse than 4.6 on various benchmarks, was slower, and real-world costs landed at **more than 2× Grok 4.6** — above Astra in practice.
- Counter-argument from developer Kun Chen: public benchmarks and 3D-render tests are both poor proxies ("the same benchmarks told us Opus 5 was better than Fable"); a full day of real use showed visible improvements. The host's position is that the middle ground between frontier and ultra-cheap is structurally hard to occupy, and that judgment should wait for performance in Grok's native Grokbot environment.

### 2. Treasury Secretary Bessent rejects liability shields for AI labs

- On CNBC, Bessent attributed the "hugging face incident" to OpenAI management, not to rogue agents: "It is humans who are responsible, not the AI."
- He framed the labs' position as internally inconsistent — an employee claiming a 10% chance of an extinction-level event while the companies simultaneously seek liability protection: *"That's good business for them, bad business for the American people."* He added that labs "can slow down anytime they want to."
- This is consequential because Bessent is effectively leading the administration's AI policy and had previously been receptive to AI risk arguments around the Mythos release.
- Supporters (Bill Gurley, Chip Roy, "Lex on X") argued liability would harden products and end fear-marketing. Critics (Armand Domolowski, Encode AI's Nathan Calvin) argued that catastrophic risks render companies judgment-proof — a firm bankrupted by a disaster cannot compensate for it — making this an archetypal case for government intervention against market failure.

### 3. Labs nearly agreed to mutual safety testing

- The Information reported that OpenAI and Anthropic negotiated a bilateral arrangement to safety-test each other's models, reaching formal contracting with lawyers before being abandoned for unknown reasons.
- Elon Musk proposed a similar scheme at the All In Summit, arguing distillation concerns are answerable because it would be visible in testing logs, and that no lab could ship a model a rival had red-flagged: "the liability in that case would be enormous."
- Microsoft's Suleiman Vassal called it "the smartest safety idea in months — no more grading your own homework," and urged making it mandatory with XAI and Google included.

### 4. Muse is the first personal agent to break out of the tech bubble

- Prior agents — Manus, OpenClaw, Hermes, and more recently Town and Instinct — were either difficult work tools or early-adopter toys. Muse reached #2 on Apple's free app chart at launch and then took the **#1 spot from ChatGPT**, which has spent very little of its four-year life outside that position.
- The privacy skepticism of the tech press proved unfounded. Satrini Research cited Joe Weisenthal's 2024 claim that "nobody cares about privacy" as vindicated by users handing email, messages, credit cards, location, screen access and logins to both Instinct and Muse.
- Bloomberg attributed a rally in AMD and Intel stock to Muse's early success — a narrative-driven read on demand for agent-serving compute.
- Microsoft's Nicholas Bustamante described one day of use: socks bought, Whole Foods groceries ordered, cleaning service booked, dinner sourced, and **$200 saved** by cancelling unused subscriptions. He noted Meta's last disclosed North American Facebook ARPU of ~**$227/year** and argued the bigger prize is becoming "the aggregation layer between me and the entire internet" — taking a cut of facilitated commerce or of money saved.
- Bustamante's structural observation: the agent chose the burger place he knew nothing about and he accepted without thought. **"Everything becomes B2A"** — businesses will sell to agents, not humans. Box's Aaron Levie added that task complexity will escalate over time, driving more spend through agents than users were making before.

### 5. Amazon blocks Muse — and the ad business explains why

- Effective immediately, Muse agents cannot shop Amazon on a user's behalf. The site pop-up read: "Continued access by an unauthorized AI agent violates Amazon's conditions of use to which our customers have agreed." Amazon's official framing is that third-party purchasing applications "should operate openly and respect service provider decisions about whether or not to participate."
- The move runs against consensus. Mastercard joined Visa in supporting virtual credit cards for agents, with CPO Joran Lambert saying "it's not about if, it's about when and how quickly."
- Amazon has form here: it runs its own site-tied shopping agent and in November sued Perplexity for circumventing agent blockers, arguing both terms-of-service violation and the real serving costs of agents that ping a site far more often than humans.
- Joseph Carlson supplied the likely real motive: **Amazon made $76 billion in advertising over the last 12 months, and agents don't look at ads.**
- Tom Goodwin pushed this further — Amazon's customer is the supplier, not the consumer: retail margins of 0–3% against ad margins of 70%, and a site deliberately built to "monetize your confusion." On that reading, Amazon cannot want agents.

### 6. The strategic shape of the agent wars

- **Aggregators are being aggregated.** Bustamante applied Aggregation Theory directly: customers want one agent that knows them; aggregated platforms want to own the relationship rather than become interchangeable suppliers. If Instacart embraces agents while Amazon blocks them, demand routes to Instacart and Amazon eventually faces the dilemma.
- **A vertical agent loses to a horizontal one.** Amazon will push its own assistant, but a site-bound agent competes poorly against one that already holds a user's email, calendar, preferences, memories and life context.
- **Balkanization is the near-term outcome.** MTS's Theo Jaffe expects different agents to be permitted on some sites and banned on others. Palo Alto Networks' Nikesh Arora expects Apple, Google and possibly TikTok versions of Muse plus a commerce agent from Amazon, with every marketplace forced to decide whether to open APIs. His segmentation: smaller players have no choice; network-mode holders (restaurants, groceries, drivers) can resist for a while but convenience wins; copyright-protected content modes can hold out with little economic change; **commoditised backends — insurance, tickets, hotels, services — should worry**.
- **The likely resolution is business development, not war.** A16Z's Angela Strange framed the choice as block / strike BD deals / something else. Signal predicted revenue-sharing: Meta paying Amazon for agent access, possibly per-user or per-agent fees — which would become the first real business model for agent-platform interaction, and, if generalised, a moat favouring only companies large enough to afford access at scale.
- **Shopify took the opposite side immediately.** On Monday it announced a Meta partnership giving Muse direct backend access (better search, optimised traffic) and ShopPay agentic checkout support across all Shopify stores, mirroring its OpenAI deal. Alexander Wang and Mark Zuckerberg both promoted it publicly, with Zuckerberg promising "more partnerships like this coming soon." Paggio Labs' Matt Slotnick cautioned against over-reading Amazon's first-week posture: Amazon is not anti-agent, has more at stake, and has weight to throw around.
- The host argues Shopify's significance is systematically underestimated, citing a 2026 prediction that Shopify would become one of the most important platforms for general AI adoption via its small-business user base.

### 7. Does agentic shopping actually matter?

- The host is openly skeptical that food ordering and flight booking — the perennial demo use cases — move the needle. Those tasks aren't hard, and specifying nuanced flight constraints to an agent can cost as much effort as booking directly. Browsing and discovery are part of the value for many shoppers.
- Ron Johnson (Apple's retail guru): AI "will improve the online shopping experience, but I don't know that it's going to change which way we shop."
- Dave Gerard: 99% of his online purchases go through Amazon, Shopify, Instacart and DoorDash, and an agent makes none of them simpler or cheaper; he expects device-tied agents from Apple and Google to win by easing "hundreds of small moments."
- AppLovin CEO Adam Farogi drew the line between routine replenishment (a supplement subscription optimised monthly) and discovery: the typical shopper "wants to window shop… the dopamine hit from going through it is what they enjoy," and wouldn't care about a 20% saving on a $50 transaction.
- The host's caveat: shopping is not a monolith, confidence in this skepticism is low, and epistemic humility is warranted. Whatever the actual conversion driver — email triage, unsubscribing, or purchasing — Muse's success is unignorable for the other labs.

### 8. OpenAI's response

- The Information reports OpenAI is building a personal agent to compete with Grokbot, and has discussed a Muse competitor. Leaker Tibor Blaho surfaced platform code for an agent called **Aeon**; Andrew Curran expects a possible launch on Thursday at OpenAI's Dev Day.
- The irony noted: **Codex can already do everything** a personal agent user would want — email triage, calendar handling, shopping — but many OpenAI users are unaware of these features.
- The lesson drawn: for some AI use cases, being state of the art is all that matters. For agent management, the requirement is a comprehensible user experience that "leaves them with something more than a blank page."

## Key Concepts

- **Muse** — Meta's consumer personal agent; the first to reach #1 on the US free app chart, displacing ChatGPT.
- **Grokbot** — SpaceX AI's personal agent interface, oriented toward work rather than consumer tasks.
- **Grok 4.7** — SpaceX AI's model release; strong benchmarks, poorly received in early real-world testing.
- **AA Briefcase** — a benchmark measuring multi-hour white-collar agentic work, scored in ELO.
- **CursorBench 4.0 / DeepSui** — coding benchmarks used to position Grok 4.7 against GPT-5.6 Sol and Fable 5.1.
- **Aeon** — OpenAI's rumoured personal agent, leaked via platform code ahead of Dev Day.
- **ShopPay agentic checkout** — Shopify's checkout flow opened to agents, now supporting Muse across all Shopify stores.
- **Aggregation Theory** — Ben Thompson's framework in which platforms owning the customer relationship commoditise their suppliers; here applied to agents aggregating the aggregators.
- **B2A (business-to-agent)** — the emerging pattern in which businesses sell to users' agents rather than to users directly.
- **Liability shield** — legal protection from damages that frontier labs were reported to be seeking and that Bessent rejected.
- **Judgment-proof** — a firm whose potential liability so exceeds its assets that liability exposure cannot deter the harm.
- **Bilateral safety testing** — the abandoned OpenAI–Anthropic arrangement for each lab to stress-test the other's models.
- **Virtual credit cards for agents** — Visa and Mastercard payment instruments issued for agent-initiated transactions.
- **Dumb pipes** — platforms reduced to undifferentiated backends behind someone else's agent interface.

## Summary

The episode's argument is that Meta's Muse has crossed a threshold no previous AI agent managed — real, growing consumer adoption outside tech circles — and that this immediately triggered a structural conflict rather than simple product competition. Amazon's decision to block Muse is best explained not by security but by the $76 billion advertising business that agents bypass and the 70% ad margins that dwarf its retail margins; Shopify's simultaneous embrace of Muse shows the opposite calculus for a platform with less to protect. The result is a coming period of balkanization, blocked access, and business-development deals in which platforms decide whether to open APIs to consumer agents or defend the customer relationship, with the likely settlement being paid access arrangements that only the largest agent builders can afford. Running underneath is genuine uncertainty about whether agentic shopping is the use case that drives adoption at all — the host is skeptical but explicitly low-confidence, noting that many shoppers value browsing and the transaction itself. What is not uncertain is that Muse's success has forced every other lab to respond, with OpenAI already building a competitor despite Codex technically possessing the capabilities already — a reminder that in the agent era, user experience, not raw capability, determines who wins.
