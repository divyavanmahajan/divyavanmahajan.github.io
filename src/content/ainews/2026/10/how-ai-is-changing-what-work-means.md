---
title: How AI Is Changing What Work Means
description: >-
  The talk is an episode of The AI Daily Brief, a daily podcast and video on AI
  news and discussion. The speaker is the show's host; the transcript does not
  state his name or affiliation beyond the show itself, so no attribution is
  given here.
pubDate: 2026-10-21T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/173024315'
draft: false
---
# How AI Is Changing What Work Means

*Study document — AI Daily Brief, episode dated 2026-10-21*

## Overview

The talk is an episode of **The AI Daily Brief**, a daily podcast and video on AI news and discussion. The speaker is the show's host; **the transcript does not state his name or affiliation beyond the show itself**, so no attribution is given here.

**Source URL:** not provided with this transcript. The host directs listeners to the per-episode "companion page" and newsletter at **https://aidailybrief.ai** as the canonical source for links, key numbers, topics and quotes. (An ad-free version is at `patreon.com/aidailybrief` and on Apple Podcasts.) No YouTube URL appears anywhere in the material, so none is given here.

**Central thesis.** Everyone already accepts that AI changes *how* work gets done — speed, efficiency, task volume. The host argues this is "just the tip of the iceberg": the deeper change is to **what we work on**. His evidence is a case study in which **Citrini Research**, a thematic-equity and global-macro research firm, temporarily turned itself into a bio-research outfit and worked with Anthropic to design protein binders against scorpion neurotoxins. The point is not the biology. The point is that a financial research firm found it economically viable to run original, wet-lab-validated science purely as an input to its *core* business — investment theses — something previously out of reach. The host calls this "orthogonal work" and treats it as a preview of a general pattern.

Why it matters: it moves the AI-and-work conversation away from task automation and toward the expansion of what a firm or individual is capable of attempting at all, and it supplies concrete evidence about where AI speedups do and do not translate into real-world outcomes.

## Prerequisites

- **Personal AI agents** — persistent, context-connected assistants acting on a user's behalf (email triage, drafting, notification), as distinct from a chat interface used ad hoc.
- **Consumer app retention metrics** — day-7 / day-14 retention, DAU, and how they're read as product-market-fit signals.
- **Pre-IPO financial disclosure** — what a prospectus contains; the difference between *audited booked revenue*, an *annualized run rate*, and an *unaudited "whisper" number*.
- **Non-cash accounting charges** — how stock grants, convertible notes and warrants generate large on-paper losses that are not operating cash losses.
- **Compute commitments** — headline multi-year compute spend versus the subset that is firm and uncancellable; "NeoClouds" as third-party capacity providers.
- **Drug discovery basics** — the dry lab / wet lab split; protein binders; *binding* a toxin versus *neutralizing* it; the preclinical-to-release timeline.
- **Agentic fan-out** — running many sub-agents in parallel on one task to generate and filter a large candidate set.
- Loose familiarity with the current product landscape: Meta's **Muse**, **Gemini** in Android Auto, **Grok** in Tesla vehicles, Anthropic's **Claude**, OpenAI's **GPT-6 Astra** and **GPT Rosalind**.

> ASR note: the transcript renders several names phonetically. Normalized here: "Clod"/"Claw"/"Cloud for Science" → Claude / Claude for Science; "Chachibit" → ChatGPT; "Cetrini"/"Zatrini"/"Cittrini" → Citrini; "Dickiest" → stickiest. Person and firm names not verifiable from the text are left as the transcript has them, or attributed by role.

## Main Points

### Part 1 — News roundup (separate segments, not evidence for the work thesis)

The first half is the show's daily news block. These items are independent of the central argument and are preserved here to keep the talk's structure.

#### Meta's Muse hits 1 million US downloads in 40 days

- Muse is one of roughly a dozen apps ever to reach that milestone in a comparable window. The other 11 are almost exclusively mobile games (Pokémon Go, Fortnite, PUBG); only two non-gaming apps have grown this fast — Disney+ and Meta's own Threads.
- None of ChatGPT, Claude or Gemini grew that quickly *as mobile apps*: each launched as a web app first and so missed its explosive-growth phase on mobile.
- Sensor Tower: Meta allocated **39% of total October US ad spend** to Muse, up from 23% in September, making Muse the **21st largest brand by impressions** in the US for the month.
- Retention **30% at 7 days, 23% at 14 days**, versus ChatGPT at roughly **25%** at both marks and an iOS average near **5% at 30 days**. Critics calling the retention weak are benchmarking against Instagram, Facebook and the Google app — among the stickiest consumer apps ever built.
- DAU reached **2.5 million** last week, up **15% week over week**. The host's read: the ad spend is enormous, but Meta appears to have a hit; the next question is not short-term retention but where the app settles into people's lives.

#### The "weird third space" personal agents occupy

- Quoting *Signal* on X: consumer products retain either by **desire** (pure dopamine — Instagram, TikTok, games; these barely need notifications, since the reward is always waiting) or by **dependency** (email, calendars, credit cards, banking — things people must do rather than want to do).
- Personal AI agents are neither: not emotionally rewarding enough to be entertainment, not reliable or indispensable enough to be infrastructure. Too much failure and friction remains.
- Consequence: outside purely research-driven tasks, **one failure is often enough for a user not to come back** for the utility value.
- The host's framing: early signals are positive, but behavior around personal agents is still very poorly understood.

#### Muse's share-link exposure

- Muse's share feature for searches, conversations and images produced URLs whose secrecy rested entirely on being hard to guess.
- A design decision in how Meta's engineers constructed those URLs made them **enumerable**. Researchers at a security firm (transcript: "Clairoc"), via Ars Technica, enumerated **6,800** share links; after opening a few hundred they found material clearly not intended to be public — a small business owner's loan application, a real estate investor's internal performance report, a national marketing company's internal revenue review.
- Meta has temporarily removed the feature and says it is hardening it.

#### Agents move into the car

- A basic Gemini assistant has been in Android Auto for nearly a year — voice control for maps and stereo, texting while driving, web lookup. It was **not connected to personal context**, and user feedback was that it often failed at basic tasks.
- The new version reaches into the rest of a user's Google services: asking whether you'll miss your flight (reading the inbox for details while checking Maps traffic), or getting directions from a photo alone — routed to the coffee place a friend took you to, from a picture of you in the booth.
- The host is **undecided** on how much this matters: it could become so ordinary we forget it was ever absent, or users may decide the setup and integration aren't worth the hassle when the phone is already on the console.
- Direction of travel is set regardless — Tesla has integrated Grok into its vehicles, and the expectation is everyone follows.

#### The leaked Anthropic prospectus

- The Wall Street Journal obtained a draft of Anthropic's updated prospectus with **audited H1 financials**. Coverage focused on two numbers: an **$80B net loss** for the half and up to **$750B of compute spending** over coming years.
- The $80B is much larger than the $42B loss reported for 2025 in the prior edition; both stem from the same treatment of stock grants. Roughly **$72B is an on-paper accounting change**, leaving **$8.7B as the actual H1 operating loss**.
- Financial podcaster Jack Farley: this "would be worrisome if the $80 billion accounting loss… were economically real in any way. Wait, good news, it isn't." When a company issues convertible notes and warrants and its market cap 1000x's, the on-paper loss from being short calls is massive but not fundamental.
- On compute: of the $750B, **firm uncancellable commitments are around $450B**, due over **7–10 years** — a very high level of spend, but far more tenable spread across a decade. There may also be **double ordering**, with soft commitments to NeoClouds placed in hope the facilities actually get built. The Journal's line: "Anthropic needs more computing power than the market can provide."
- Revenue: **$16.3B booked for H1**, against a claimed **$65B run rate** as of July. Both can be true, but booked revenue lands lower than expected. At last week's Investor Day Anthropic said it added **$16.8B in Q3** — **45% quarter-over-quarter growth** — but that unaudited figure won't appear in the prospectus.
- The rest is risk disclosure already in the press: alignment, data center backlash, customer concentration. The host's read: these leaks mostly **confirm pre-existing biases**. Like a SpaceX IPO, the offering will be decided by beliefs about the next decade, not the last few quarters.
- Market skittishness still matters: Reuters reported some investors pushing back on a rumored **$2T valuation**, preferring **$1.5T** — though both figures come from investors, with nothing attributed to Anthropic or its bankers.

#### OpenAI races to close ahead of the IPO

- The round surfaced late last month: **$30B sought at a $1.4T valuation**. Sources now tell Reuters OpenAI wants to close **within weeks**, to get ahead of the Anthropic IPO and whatever conditions it brings to market.
- OpenAI is also keen to capitalize on growth following **GPT-6 Astra**. Reuters frames the acceleration as showing how closely the two labs compete for capital, amid concern over rising interest rates, tech-stock volatility and scrutiny of AI valuations.

### Part 2 — The main segment: what scorpion antivenom tells us about AI at work

#### The framing claim, and why the host resists it

- AI news aggregator Andrew Curran argued that drug discovery, disease cures and biomedical advances — alongside direct dividends or shares — are "the only viable ways to turn public sentiment around."
- This idea circulates widely: to stop people disliking AI, deliver the promised cures.
- The host agrees the question matters but argues the new bio-and-AI activity raises **a much larger set of questions** than public opinion alone.

#### OpenAI acquires Orchestra Bio — tooling, not a biotech pivot

- OpenAI announced the acquisition of four-year-old AI biotech startup **Orchestra Bio**; terms undisclosed, last raise $20M in venture funding.
- Orchestra builds agents for drug discovery **workflows** rather than new candidate compounds — monitoring compound manufacturing, tracking trials as they progress.
- The team will work on **GPT Rosalind**, OpenAI's life-sciences model variant, first released in April as a research preview and now a full commercial product, alongside **Rosalind Workbench**, a suite of agents connecting the model to scientific instruments and data analysis.
- OpenAI's stated vision: AI helping scientists across the full process — exploring ideas, designing experiments, interpreting results, coordinating the work needed to advance treatments. Partnerships cited: **Novo Nordisk** (translating scale and scientific expertise into faster R&D and commercial execution "while maintaining strong governance") and **Moderna** (translating complex-data insights into experimental workflows).
- The host is explicit: this is OpenAI **better supporting the existing pharma industry's** use of AI, not building its own biotech firm.
- Reactions: "Ran Longevity" on X hopes the big labs keep focusing on drug development — "that is where we can really change the world." Another account reads it as a trend beginning. A dissenting view: "the only path to profitability for the Frontier Labs is becoming a biotech company eventually."

#### Anthropic's wet lab — the contrasting model

- Reuters reported last month that Anthropic had quietly set up **its own biology lab**. Unlike OpenAI, this is Anthropic doing physical biology work itself.
- Anthropic's head of life sciences (transcript: Eric Coderre-Abrams) confirmed it: "We believe that to do biology, the final test is still and will be for a while in real lab work. We absolutely are doing that today" — describing the approach as typical of most biotech companies, some in-house and some with external partners.
- The news broke as the X-risk discussion was surging again, prompting questions about the timing; further reporting showed a **relatively limited remit with specific restrictions** on the types of research permitted.
- It also landed alongside unverified reports that leaders inside Anthropic believe they may eventually be **the only company left**. The combination drew attention because it represents a fundamentally different model: not just providing the intelligence, but **using that intelligence to do things**.

#### The Citrini experiment

- **Who:** Citrini Research — `citrini-research.com` links to a Substack offering "insights on thematic equity investing in global macro trading."
- **Why they started:** searching for opportunities outside AI infrastructure, where they feared crowding. Life sciences and healthcare looked asymmetric: "the sector had endured the reversal of the pandemic boom in a difficult funding environment… over the past half decade it has been a graveyard for returns," and the cycle had seemingly turned while the stocks hadn't moved. Their summary: "A neglected sector with a chance for AI upside… a secular story at cyclical lows." A secondary motive, offered tongue-in-cheek: their previous big AI post was about AI doing *too* well and destroying the economy, so an optimistic story appealed.
- **The problem:** "None of us could claim to know anything about AI as it related to biology." Their normal method — deep research plus dozens of expert calls — breaks down here, because surveying a dozen biologists yields "AI has not created a single important drug and it won't in the future either," "AI will cure all diseases in the next five years," and everything in between, "depending on each individual's degree of AI-pilledness." Hence: "We weren't going to get a clear answer by simply asking. We needed to try it for ourselves."
- **What they did:** used the model to design proteins, contracted a lab to synthesize them and run experimental validation, then used the model again to interpret the results. They began from a **35-page prompt** Anthropic had already tested in a previous study and modified it to taste.
- **Guardrails:** almost immediately after downloading Claude for Science, the group of stock analysts ran headfirst into the biological guardrails. Rather than pursue an extensive application process, they simply asked Anthropic whether they could work from the company's offices. Anthropic was interested right away — this is exactly the class of neglected disease it believes AI is well positioned to address.
- **Cost:** the entire effort came in **under a couple hundred thousand dollars** — not cheap, but not prohibitive for an under-attended problem.

Candidate funnel and timeline, described textually:

```
Design funnel (dry lab, Claude):
  300 sub-agents
      ↓
  318,000 total candidate proteins generated
      ↓
  211 promising options selected for further testing
      ↓
  17 confirmed binders across 4 different scorpion toxins
      (independently tested in a separate lab)
      ↓
  0 shown to stop the neurotoxin working  ← the step that matters, not yet done

Timeline contrast (the two charts Will DePoe put side by side):
  dry-lab design of a multi-binding antivenom ....  64 hours
  wet-lab results ................................  39 days
  release ........................................  4–7 years
```

#### Why scorpion stings, specifically

- Scorpions sting about **1.2 million people per year**, causing roughly **3,200 deaths**, most of them children in parts of the world with extremely limited access to quality medical infrastructure.
- Anthropic's framing of the problem: new treatments are expensive to make and **unlikely to earn back the cost of developing them** — a market-incentive failure.
- The potential **step change in the cost of developing treatments** is where AI could change that calculation.

#### Reception: the limits are the finding

- Skeptic "Wizplum" on X: "So you achieved something demonstrated in the literature 15+ years ago, proteins that bind scorpion toxins, but didn't demonstrate the thing that actually matters, neutralizing the venom. Maybe make that the headline instead of burying it in 10,000 words of Claude prose." Citrini's reply: everyone involved expected a handful of haters no matter what; they weren't going to wait another three months to publish, but still want to pursue neutralization testing.
- Google DeepMind's director of AGI economics, Alex Imas, credited Citrini with an "incredible talent for getting the public to pay attention to overlooked but important issues" — last winter's essay on AI-driven productivity and immiseration, now the promise of AI for science — and summarized the result as "huge speedups in hypothesis generation and computation but also illustrates the bottlenecks, verification and testing. We need to be clear-eyed about both in order to know where to invest."
- Citrini's own major conclusion concerns **physical-world inertia**: "Our virtual biologists may have compressed a year's worth of work into a couple days. But biology works at the speed of life. DNA had to be synthesized, proteins produced and purified, toxins obtained in usable form, and appropriate controls established. Our digital invention was now set to create work for human scientists."

### Part 3 — The host's three questions

#### Question 1: Will AI labs internalize scientific results rather than build technology for others?

- The question picked up steam with the (unverified) reports that Anthropic leadership expects to be the only private company left — implying it eventually does everything its customers currently do — and again a month later with the wet lab.
- But the Citrini work shows how many parts this process has. Adding a wet lab to carry AI-initiated experiments a little further **does not change the fact that an immense number of other steps, people and institutions** stand between a result and something real in the world.
- The host's position: AI customers finding themselves in competition with the AI labs is **"absolutely inevitable"** — but thinking it happens **all at once, or across entire industries, probably doesn't reflect reality**.

#### Question 2: If AI cures cancer, does public opinion change?

- He argues no. First, Anthropic's current experiments are less about holy grails like curing cancer and more about **medical projects that previously fell through the cracks of market incentives** and no longer have to. Anthropic may be right that there is more leverage there than in flashy work — but "Anthropic cures scorpion stings" (which this isn't even close to; it is a very first step) lands very differently than "Anthropic cures cancer."
- Second, even where AI is integral to curing major diseases, it is unlikely to happen by discovering one miracle compound that fixes everything in a single stroke. Far more likely: **AI-accelerated discoveries just become the norm**, everyone gets used to them, and they bear little on whether people like AI.
- He cites Will Minitas: if the AI industry thinks curing cancer is enough to turn sentiment around, "they should look at opinion polling on Big Pharma."
- His conclusion is explicitly **not** that labs should stop. The opposite: precisely because little they do can meaningfully shift public opinion in the short term, they should focus on **whatever areas they believe have the biggest impact, regardless of the headline it generates**. He does not believe there is any magic bullet for AI's perception problem, which he expects to persist for some time.

#### Question 3: "Orthogonal work" — AI changes what we work on

- The subtlest and, to him, most interesting question. Citrini began by doing exactly what it normally does: looking for under-recognized opportunities from an investment-thesis perspective. Its usual process — examining sectors against returns, public perception and current market values — led it to conclude life sciences were undervalued given how AI could change the field.
- The obstacle was epistemic: they didn't think expert interviews could produce a robust enough picture of AI's real potential in life sciences. **In that context it became economically viable to just experiment for themselves.**
- Citrini was clear at the end that they are not about to become a biolab; they are and remain a financial research firm. The host expects **a lot more of this type of orthogonal work** — people and firms doing things they couldn't do before, which actually change how well they do their core workstream.
- He frames this as another version of the **efficiency vs. opportunity AI divide** he returns to repeatedly: using AI to do existing work faster, versus using it to reach work previously out of range.
- He recommends reading Citrini's full research report.

## Key Concepts

- **Orthogonal work** — work outside a firm's core competence that AI makes economically viable, undertaken because it improves the firm's actual core output (Citrini running wet-lab biology to sharpen an investment thesis).
- **Efficiency vs. opportunity divide** — the host's recurring frame: AI used to speed up existing tasks versus AI used to attempt what was previously out of reach.
- **Desire-driven retention** — retention from pure reward/dopamine (Instagram, TikTok, games); needs no notifications because the reward is always waiting.
- **Dependency-driven retention** — retention from necessity (email, calendars, credit cards, banking); not desired, but required.
- **The "weird third space"** — where personal AI agents currently sit: not rewarding enough to be entertainment, not reliable enough to be infrastructure.
- **"A secular story at cyclical lows"** — Citrini's favourite setup: a structurally improving sector whose prices still reflect the downturn.
- **Dry lab** — computational design and analysis; here, Claude generating and screening protein candidates in 64 hours.
- **Wet lab** — physical experimental work (synthesis, purification, controls) that proceeds "at the speed of life"; 39 days for results here.
- **Protein binder** — a protein designed to attach to a target molecule; binding a toxin is necessary but not sufficient, since **neutralization** is the outcome that matters.
- **Sub-agent fan-out** — parallelizing one task across many agents; 300 sub-agents produced 318,000 candidates here.
- **GPT Rosalind** — OpenAI's life-sciences model variant, a research preview in April, now a commercial product.
- **Rosalind Workbench** — OpenAI's agent suite connecting Rosalind to scientific instruments and data analysis.
- **Orchestra Bio** — AI biotech startup acquired by OpenAI; builds agents for lab workflow tasks (manufacturing monitoring, trial tracking) rather than candidate discovery.
- **Anthropic wet lab** — Anthropic's own physical biology facility, with a limited remit and specific research restrictions; contrasts with OpenAI's tool-provider posture.
- **NeoClouds** — third-party compute providers holding some of Anthropic's softer commitments, contingent on facilities actually being completed.
- **Share-link enumeration** — the Muse vulnerability class: shareable URLs whose only protection is unguessability, defeated when their construction makes them systematically discoverable.
- **Run rate vs. booked revenue** — an annualized projection ($65B claimed) versus audited recognized revenue ($16.3B for H1); both can be true at once.

## Summary

The host's argument is that the familiar story about AI and work — faster emails, agents triaging the inbox — is the shallow part of the change, and the deeper shift is in *what people choose to work on at all*. His case study is Citrini Research, a financial research firm that, unable to get a straight answer from biologists about AI's real potential in life sciences, used Claude to generate 318,000 candidate proteins via 300 sub-agents, narrowed them to 211, and had an outside lab confirm 17 binders against four scorpion toxins — for under a couple hundred thousand dollars, with no intention of becoming a biotech company. The result is deliberately unfinished: nothing has yet been shown to neutralize the venom, and the timeline he dwells on (64 hours to design, 39 days for wet-lab results, four to seven years to release) is as much the finding as the binders are, because compressing the computational step leaves the physical and institutional bottlenecks fully intact. From this he draws three conclusions. Labs competing with their own customers is inevitable, but will not arrive all at once or across whole industries, because too many steps, people and institutions sit between an AI-initiated result and a real-world treatment. Cures will not repair AI's public image — he points at Big Pharma's polling and expects AI-accelerated discovery to simply become unremarkable — which is precisely why labs should pursue whatever has the greatest real impact rather than chase headlines, and in Anthropic's case that means neglected diseases market incentives had abandoned rather than holy grails. And most interestingly to him, firms will increasingly take on "orthogonal work" — things they could never previously attempt — not as a pivot, but because it makes them better at the work they already do.

---

Two notes on fidelity: the transcript never names the host, and no video URL was supplied, so I pointed at `aidailybrief.ai` rather than invent either. The opener's loose "a million people a year and actually kills 3000" is superseded later in the same episode by the precise 1.2M / 3,200 figures, which is what I used.
