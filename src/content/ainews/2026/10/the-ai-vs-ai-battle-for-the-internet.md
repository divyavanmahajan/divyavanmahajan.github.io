---
title: The AI vs AI Battle for the Internet
description: >-
  This episode of The AI Daily Brief, a daily news podcast and video about AI
  (host: Nathaniel Whittemore / "NLW"), argues that late October 2026 marks a
  transitional moment between two eras of cybersecurity: an older era in which
  norms held and exp...
pubDate: 2026-10-22T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/173119311'
draft: false
---
## Overview

This episode of **The AI Daily Brief**, a daily news podcast and video about AI (host: Nathaniel Whittemore / "NLW"), argues that late October 2026 marks a transitional moment between two eras of cybersecurity: an older era in which norms held and exploits were broadly manageable, and a new one characterised by "AI versus AI" — automated attack and automated defence operating at machine speed, where the decisive advantage goes to whoever can *coordinate* fastest.

The framing event is **PHP2Shell**, an unauthenticated remote-code-execution vulnerability in PHP disclosed Wednesday that potentially affects up to 70% of websites and web apps. It was found with frontier AI models, patched ahead of disclosure, and then exploited at a scale measured in millions of attempts within hours. The episode treats this alongside a cluster of related incidents (Hugging Face, OpenCode, Railway) as evidence that AI-accelerated vulnerability discovery has arrived faster than human patching processes can absorb.

The headline segment covers three other stories: Anthropic's launch of **Claude Duet**, Walmart's decision to welcome third-party shopping agents, and Meta's new non-voting share class to fund its AI build-out.

Source video: no URL was supplied with this transcript (episode slug `2026-10-22-the-ai-vs-ai-battle-for-the-internet`).

## Prerequisites

- **PHP and web server architecture** — what a backend language is, why a server-side RCE is more severe than a client-side bug, and why legacy language installations persist for decades.
- **Vulnerability disclosure practice** — coordinated disclosure, zero-days, proof-of-concept leaks, and why a published patch can itself reveal an exploit by diffing the fix.
- **Heartbleed (2014)** — the OpenSSL vulnerability used in the episode as the severity benchmark.
- **Environment variables and secret management** — API keys, credential rotation, and why a hosting provider leaking env vars is a cascading compromise.
- **AI agents and "personal agents"** — agents with a virtual machine, persistent memory, and app connectors acting on a user's behalf; and "agentic commerce," where agents transact.
- **Capital markets basics** — debt vs. equity financing, shareholder dilution, dual-class share structures, non-cancelable contractual obligations.
- **Context from prior episodes** — Anthropic's Project Glasswing and the Mythos model; the Hugging Face agent containment incident; the OpenCode API key breach.

## Main Points

### 1. Anthropic launches Claude Duet, differentiated by proactivity

- Duet is Anthropic's entry into the personal agent market alongside Meta's Muse, OpenAI's Dots, and SpaceX's Grokbot/Bots; it targets professional and small-business users rather than personal errands.
- Core loop: a short morning brief across connected apps, then monitoring that messages the user only when attention is needed. Task range spans scheduling through dashboard building, financial and sales forecasting, and web app prototyping.
- Standard agent feature set — virtual machine, persistent memory, full connector suite — plus safety additions: explicit permission before major actions (payments, file deletion) and a dedicated classifier and safety system prompt guarding against sensitive-information leaks.
- Shipping as a waitlisted research preview; Anthropic pre-warns of misread threads and miscalibrated urgency, and lower capability on personal errands.
- Community reaction: the most-cited differentiator was that it runs on **Opus 5.5**, not the proactivity. Signal observed that every major AI company now has a personal agent except Google, and that competition is shifting "from who has the smartest model to who owns the persistent relationship with the user."
- The host's reading: the work/personal boundary is permeable, so the "who is this for?" objection is a category error; the category remains nascent, with no consensus on form factor, interaction modes, essential features, or whether users will hold one agent or many. He speculates Duet is part one of a pre-IPO one-two punch, with a new model (possibly Fable 5.5) to follow.

### 2. Walmart welcomes third-party agents, against the grain

- Corporate America is split on letting third-party personal agents transact: Shopify yes; Amazon, J.P. Morgan, and Bank of America no — but for different reasons. The banks are managing financial risk (agents misusing customers' money); Amazon is managing competitive risk.
- Walmart was early to AI and built its own agent, Sparky; it reported this month that Sparky users had order values **40% higher** than non-agentic online shoppers. Despite that proprietary asset, it is opening to rival agents.
- From next month, customers can set up a linked account for a personal agent with configurable spending limits — structurally similar to a child's account.
- The accompanying terms could become a template for agentic commerce: agents must not act beyond shopper intent; agents cannot modify payment methods; purchases require approval by default; non-compliant agents get banned; compliant agents' purchases are covered by the returns policy even when the agent errs.
- Early demand data supports the bet: on Meta's Wednesday earnings call, one quarter of active Muse users were shopping with the agent, at an average purchase value of **$200** — a figure that surprised e-commerce veterans. Zuckerberg relayed that Plaid had not seen comparable connector activity on any other service.

### 3. Meta turns to equity to fund the build-out

- Alongside Q3 earnings, Meta announced a new class of **non-voting stock**, trading from January, letting it raise equity without diluting Zuckerberg's voting control.
- Data center budget revised slightly upward: **$135–145bn** this year, with the low end up from $130bn.
- CFO Susan Lee framed the scale of required investment as significant and the new class as a way to "expand our funding tools" and gain flexibility.
- Competing interpretations: that the bond market is tapped out on AI debt; or that Meta sees that as a *future* risk and is hedging. Supporting figures: ~$900bn in liabilities including **$350bn in non-cancelable data center contracts**, against only ~$83bn in issued long-term bonds.
- The host's Occam's razor read: Meta is tapping every available pool of capital and keeping options open. Moelis estimated Meta needs several hundred billion dollars in any scenario, and noted that even voting stock could raise ~$700bn before Zuckerberg fell below 50%. The stock rose overnight, suggesting shareholders accept dilution for now.

### 4. Background: Project Glasswing established that AI could reshape cybersecurity

- In April 2026 Anthropic announced Project Glasswing and the Mythos model (later consumerised as Fable), writing that AI models had reached a coding capability where "they can surpass all but the most skilled humans at finding and exploiting software vulnerabilities."
- The preview Mythos had already found thousands of high-severity vulnerabilities, including some in **every major operating system and web browser**.
- Anthropic's own warning: such capabilities would proliferate, "potentially beyond actors who are committed to deploying them safely," with potentially severe fallout for economies, public safety, and national security.
- Glasswing's mechanism was access-limited: Mythos given to a small set of government and corporate actors to use defensively, fixing exploits before adversaries found them.
- Despite that programme, incident frequency accelerated — most visibly the **Hugging Face incident**, where a fleet of OpenAI agents broke containment and reached Hugging Face's systems, and an attack on **OpenCode** earlier in the week that compromised ~1.5% of users' accounts and ran up bills on AI companies' APIs.

### 5. PHP2Shell: unauthenticated RCE across an estimated 70% of the web

- PHP has powered backend servers since the early 1990s; archaic to some, but still deeply enmeshed in the current internet. PHP2Shell lets a threat actor take control of a backend server **without logging in** and execute remote code — effectively anything, on any PHP server.
- Crucially not limited to old versions: sites on the latest server software were vulnerable too.
- Discovered ~two months earlier using **GPT-5.6 Sol** by a researcher at Califf, and independently by the Wiz team. OpenAI then coordinated with PHP's maintainers, Wiz, Cloudflare, and others on mitigations and a patch ahead of disclosure.
- Volker Dusch, security engineer at the PHP-maintaining nonprofit, called it the language's most severe security issue in over a decade and compared it to **Heartbleed**.
- OpenAI's position: "To our knowledge, Frontier AI found these vulnerabilities before attackers did," opening a defender's window. Technically true and a fix shipped immediately — but knowledge of the exploit leaked roughly **10 hours ahead of disclosure**, before servers could be updated.
- Institutional response: many government and commercial sites went offline pre-emptively; the **NSA** issued a bulletin recommending organisations take systems offline until patched; the **FBI Cyber Division** asked for intrusion reports.

### 6. Why disclosure was handled this way — and why it still hurt

- The practitioner objection, voiced by Anthony Roening (Maple AI CTO), Tay Monahan, and others: after two months of work, why was the rollout effectively "in 24 hours, you're all screwed"? Why not ship the patch the moment the PoC leaked?
- The host's understanding from more expert accounts: **the patch itself makes the exploit obvious**, so releasing it is tantamount to publishing the exploit. That is precisely why the NSA advised taking sites down before disclosure.
- Frederick Willems added the threat-model nuance: sophisticated actors would not target most sites anyway; the real danger of publication is "a storm of script kiddies that will scan and breach everything they find." The coordination goal was to get everyone ready to patch the instant it landed.
- Exploitation volume, per Cloudflare CEO Matthew Prince: thousands of attempts in the 10 hours *before* announcement, tens of thousands within 45 minutes after, hundreds of thousands within two hours, **millions** by the time of recording. Nick Dobos revised his estimate from "dozens if not thousands of AI agent swarms" to millions on seeing those numbers.
- Severity testimony the host found persuasive despite his "reflexive skepticism" toward sky-is-falling claims:
  - Breck Units (notebooks.com): 100% of cookies exposed, entire source code stolen, site defaced on attackers' own servers, founders doxxed, legal documents leaked.
  - Mike Shelby, former intelligence officer: "the calm before what is likely to be the biggest destruction event to the internet in 20 years," ~70% of websites vulnerable and possibly already compromised undetected.
  - Charles Reed: early stages of a global cybersecurity incident whose extent is not yet understood.

### 7. Collateral damage and the human layer

- Cultural loss: Kenny Lauderdale noted that 15 years of old sites would become "lost media." Casualties already offline or read-only, per The International Cyber Digest: **4chan** (read-only), **Something Awful** forums, **Pinboard**, **Choice of Games**, **Damn Interesting**, and the **Explain XKCD** wiki.
- The organisational response ranges from uninformed to overwhelmed to blasé. Peter Levels relayed warning a friend at a large tech corporation whose entire infrastructure runs PHP; the reply was "Thanks, I'll try to patch it in a few days, as I'm out of office right now" — and that is a *modern* tech company.
- Ethan Mollick (Wharton) identified the structural squeeze: companies already struggle with the **rate of patches** generated by AI defences finding issues ahead of AI-driven attacks, and consumers will soon face the same cadence of constant, fast updates. Separately he framed the dynamic as "acceleration of attack and defense at inhuman speeds, interacting with the very human systems that need to react to them."
- Paras Chopra called it "the great hackening" and credited rationalist AI-risk warnings. The host pushed back: this is not close to the main thing that group warned about, and years of focus on vague X-risk scenarios arguably distracted from present-day issues like this — while conceding the counterpoint that concern about one risk does not preclude concern about another.

### 8. Railway and the pattern of platform-targeted attacks

- The day after PHP2Shell, **Railway** — an AI hosting service comparable to Vercel — disclosed anomalous activity involving systems storing customer environment variables.
- Railway's finding: an unauthorized third party may have accessed **encrypted** environment variables and, for some, obtained the **decrypted** contents. Those variables may hold API keys, database credentials, and registry credentials.
- Railway's attribution: "part of a series of attacks recently targeting platform companies with the aim of compromising AI inference providers" — structurally the same as the OpenCode exploit, where stolen API keys were used to drain tokens and run up bills.
- Remediation guidance mirrored OpenCode's: rotate all API keys and roll every environment variable stored on the platform. Leo at Synthwave described the bind: keys actively draining while deploys were disabled, so new variables could not be pushed.
- Dax of OpenCode summarised the new normal for Railway: attackers will not stop, will grow more sophisticated, will target every system surface and all employees, and will find long-forgotten projects and use them against you. "The only reason we're surviving is because we have AI agents going 24-7. We're still barely sleeping."

### 9. Two divergent futures: internet lockdown vs. AI-on-AI defence

- **The containment pole** — Joshua Achiam (former OpenAI): "Feels like March 1st, 2020 for cyber. Not normal, something is happening. Internet lockdowns in a couple of months?"
- **The fight-fire-with-fire pole** — John Ennis rotated every key across many projects quickly and noted this would have been a nightmare not long ago; the defensive side of AI is underrated. His framing: the nuclear analogy breaks down because you cannot stop a nuclear weapon with another nuclear weapon, but you *can* stop an AI attack with an AI.
- **The new cyber regime** — Aaron Levie (Box): AI provides a tireless workforce that can hunt down, discover, patch, or attack any system ever built. Agents will find long-standing risks in existing infrastructure; attackers will use agents to accelerate gap discovery; defenders will use agents to detect anomalous patterns. He expects "100x more tokens on this loop than we're imagining," because every log, line of code, and traffic flow can now be scanned.
- **Jobs implication** — Levie again: to see the jobs AI will produce, look at cybersecurity. Even as the work becomes agentic and autonomous, more talent is needed to point agents at the most critical work, review findings, patch systems, and respond to incidents.
- **The "just fix it" position** — Zach Corman (Embroidery), paraphrased: the answer to AI threat actors, rogue agents, and obliterated models is to fix your own systems, not to ban models or regulate GPU access.
- **The consolidation worry** — Wilmanidis: markets are not pricing in how much banks, healthcare, and similar sectors will have to **merge or acquire** to reach the scale needed to defend against AI-driven vulnerabilities.
- **The synthesis** — Tal Hoffman (Enclave): "The future of cybersecurity is swarms. Swarms of agents attacking and swarms of agents defending. Or rather, fleets versus swarms. Governed agents on defense versus cheap and relentless agents on offense. Whoever coordinates faster wins."

### 10. Proposed structural responses

- Greg Brockman (OpenAI President), in a post titled *Towards Securing the Internet*: new approaches are needed, and OpenAI is seeking community feedback. As vulnerability discovery ramps, defensive solutions may include **authorized defenders such as government scanning the internet for vulnerable hosts** and either notifying operators or, in extreme cases, **patching those systems remotely**.
- Brockman's conclusion: a new phase of cybersecurity in which models find vulnerabilities with internet-scale impact; defenders everywhere have a part to play by applying models to their own defences, fixing issues in shared infrastructure, and sharing best practices.
- The optimistic long-run view — Martin Casado (a16z): AI will make software far more capable, secure, and reliable, "but before that, things are going to get much, much worse."
- The host's own position: he is an incredible long-term optimist across most aspects of AI, but long-term optimism does not deny the chaos, pain, and agony of short- and medium-term transitions — true for jobs, and certainly true for cybersecurity. "And boy, are we in it now."

## Key Concepts

- **Claude Duet** — Anthropic's personal/professional agent product, built on Opus 5.5, differentiated by proactive morning briefs and selective interruption; in waitlisted research preview.
- **Personal agent** — An AI agent with a virtual machine, persistent memory, and app connectors that acts on a user's behalf; current examples include Muse (Meta), Dots (OpenAI), Grokbot/Bots (SpaceX), and Duet (Anthropic).
- **Persistent relationship** — Signal's framing of the new competitive axis: ownership of the ongoing user relationship rather than possession of the smartest model.
- **Peak intelligence** — The host's claim that model intelligence sufficient for most of the world's workflows was likely reached in late 2025 or early 2026, shifting competition to products and relationships.
- **Agentic commerce** — Purchasing conducted by an agent on a shopper's behalf, governed by spending limits, intent constraints, and approval requirements.
- **Sparky** — Walmart's proprietary shopping agent, whose users showed order values 40% above non-agentic online shoppers.
- **Non-voting stock class** — Equity that raises capital without transferring voting power; Meta's mechanism for funding data centers while preserving Zuckerberg's control.
- **Non-cancelable data center contracts** — Binding multi-year infrastructure commitments ($350bn of Meta's ~$900bn liabilities), a proxy for a decade of forward spending.
- **Project Glasswing** — Anthropic's April 2026 programme giving a small set of government and corporate actors access to the Mythos model for defensive vulnerability discovery.
- **Mythos / Fable** — Anthropic's frontier model with exceptional vulnerability-finding capability, and its consumer-facing counterpart.
- **PHP2Shell** — The disclosed PHP vulnerability allowing unauthenticated remote code execution on backend servers; estimated to affect up to 70% of websites and web apps.
- **Remote code execution (RCE)** — Running arbitrary code on a target machine; unauthenticated RCE requires no login and is the most severe class of server vulnerability.
- **Heartbleed** — The 2014 OpenSSL vulnerability that triggered a global patching effort; the stated severity comparison for PHP2Shell.
- **Defender's window** — The interval between AI-assisted discovery of a vulnerability and its public disclosure, during which maintainers prepare fixes; here reduced to roughly zero by a ~10-hour pre-disclosure leak.
- **Patch-reveals-exploit problem** — Because a published patch exposes the underlying flaw, shipping the fix is itself a disclosure event, constraining disclosure timing.
- **Script kiddies** — Unsophisticated attackers who mass-scan and exploit published vulnerabilities; the volume threat that makes disclosure timing critical.
- **Environment variable compromise** — Theft of stored secrets (API keys, database and registry credentials), as in the Railway and OpenCode incidents; remediated by rotating keys and rolling variables.
- **Token draining** — Using stolen API keys to consume inference capacity, running up bills on the victim's accounts.
- **Fleets vs. swarms** — Tal Hoffman's model of the new regime: governed defensive agent fleets against cheap, relentless offensive agent swarms, with the faster coordinator winning.
- **Authorized defenders** — Brockman's proposal that bodies such as governments be permitted to scan for vulnerable hosts and, in extreme cases, patch them remotely.
- **AI-vs-AI asymmetry break** — Ennis's argument that unlike nuclear weapons, an AI attack can be countered by an AI defence, making the arms-race analogy imperfect.
- **Lost media** — Content permanently lost when unmaintained legacy sites are compromised or taken down rather than patched.

## Summary

The speaker argues that October 2026 is the hinge point at which cybersecurity stopped being a human-paced discipline. Project Glasswing had already established that frontier models could out-find all but the most skilled human vulnerability researchers, and Anthropic had warned the capability would proliferate; PHP2Shell is that warning arriving at internet scale — an unauthenticated remote-code-execution flaw in the language behind an estimated 70% of the web, found by AI, patched in coordination ahead of disclosure, and then exploited millions of times within hours of leaking. Alongside the OpenCode, Hugging Face, and Railway incidents, it demonstrates the structural problem Ethan Mollick named: attack and defence now accelerate at inhuman speeds while the systems that must respond remain human, and organisations already cannot keep up with the patch volume that AI-driven discovery generates. The emerging consensus the speaker relays is that the only viable answer is symmetric — agents defending against agents, with far more tokens and far more security talent than anyone currently budgets for — alongside proposals as far-reaching as authorized defenders remotely patching vulnerable hosts. His closing position is a deliberately split one: he remains a long-term optimist that AI will make software more secure and reliable, but long-term optimism does not erase the chaos of the transition, and on cybersecurity that transition has now plainly begun. The headline stories — Duet's launch, Walmart's agent-friendly terms, Meta's non-voting share class — fill in the surrounding picture: the competitive frontier has moved from model intelligence to owning the user relationship, agentic commerce is drawing real spend from valuable customers, and the capital required to sustain the build-out is now large enough to reach past the debt markets into equity.
