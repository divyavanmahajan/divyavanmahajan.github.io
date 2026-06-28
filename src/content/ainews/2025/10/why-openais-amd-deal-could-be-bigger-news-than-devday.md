---
title: 'Why OpenAI''s AMD Deal Could Be Bigger News than DevDay   '
description: >-
  This episode of the AI Daily Brief (dated October 7, 2025) covers several
  intersecting AI industry stories, with the central focus on OpenAI's landmark
  chip partnership with AMD and its potential strategic significance relative to
  the product anno...
pubDate: 2025-10-07T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# Study Document: Why OpenAI's AMD Deal Could Be Bigger News Than Dev Day

## Overview

This episode of the **AI Daily Brief** (dated October 7, 2025) covers several intersecting AI industry stories, with the central focus on OpenAI's landmark chip partnership with AMD and its potential strategic significance relative to the product announcements made at OpenAI's Dev Day event. The host (unnamed in transcript) also covers a KPMG CEO survey on AI ROI expectations, a Deloitte AI-assisted report scandal, ElevenLabs' new Agent Workflows tool, and a detailed post-mortem of OpenAI Dev Day reactions. No external speaker affiliations are provided.

**Source video:** URL not available (see video title: *2025-10-07-why-openais-amd-deal-could-be-bigger-news-than-devday*)

---

## Prerequisites

- Basic understanding of the AI chip supply chain (NVIDIA, AMD, GPU compute)
- Familiarity with OpenAI's product ecosystem (ChatGPT, Codex, Sora, GPT-5)
- General knowledge of enterprise AI deployment concepts (inference, agents, APIs)
- Awareness of the broader AI investment and CapEx boom narrative
- Understanding of stock options and equity deal structures
- Familiarity with agentic AI concepts (multi-agent systems, workflow builders)

---

## Main Points

### 1. KPMG CEO Survey: Accelerating AI ROI Expectations

- Survey of ~1,350 CEOs (all with revenues >$500M, one-third >$10B), conducted August 5–September 10, 2025 (11th annual edition).
- **69%** of CEOs plan to spend 10–20% of their budget on AI in the next 12 months; only 17% plan to spend less than 10%.
- The most striking shift: in last year's survey, only **20%** expected ROI on AI investments within 1–3 years; that figure has jumped to **67%** in 2025, with **19%** now expecting ROI within 6–12 months — a dramatic pull-forward in time-to-value expectations.
- Workforce implications are "all of the above": 41% plan reductions in some areas, but majorities also plan retraining, role redesign, and new AI-focused hiring.
- Overall global economic confidence is at its lowest in five years, but AI sentiment is rising — encapsulated as: *"things are rough, but man, are we bullish AI."*

---

### 2. Deloitte AI Report Scandal and the Anthropic Partnership

- Australia's Department of Employment and Workforce Relations commissioned a $290,000 report from Deloitte (December 2024); the report contained multiple errors, including **citations of non-existent academic studies**, apparently caused by unchecked AI assistance (GPT-4o was used rather than available reasoning models).
- Deloitte issued a partial refund; a corrected version was published. The Australian government confirmed the substance and recommendations were unchanged, but the episode generated significant negative publicity.
- On the same day, **Deloitte and Anthropic announced a sweeping enterprise partnership**: Claude to be deployed across Deloitte's **470,000+ global personnel** — Anthropic's largest enterprise deployment to date.
- The partnership includes: a certification program to train **15,000** personnel, compliance features for regulated industries (finance, healthcare, public services), and custom Claude personas for different employee groups.
- The host frames the errant report as a human judgment failure by a small team, and argues it actually validates the need for the new training partnership.

---

### 3. ElevenLabs Agent Workflows: Production-Grade Voice AI

- ElevenLabs shipped **Agent Workflows**, a visual interface tool for designing complex multi-agent voice systems, comparable in concept to N8N, Zapier, Lindy, or OpenAI's agent builder.
- Rather than a single monolithic prompt/agent, users define **sub-agents** with distinct models, tools, and knowledge bases; rules govern when conversations are handed between sub-agents.
- Each sub-agent can be individually optimized for cost, accuracy, or latency.
- **Example workflow**: lightweight model collects customer details → powerful model diagnoses the issue → tool-use-optimized model interacts with logistics backend → human escalation rules defined throughout.
- Key problem this solves (per AI practitioner commentary): massive single prompts (~5,000 tokens) break when modified; no auditability or visibility; security/access control is brittle. Agent Workflows addresses all three.
- Positioned as moving voice AI from proof-of-concept to **production-grade enterprise deployment**.

---

### 4. OpenAI–AMD Deal: Strategic Significance and Market Reaction

- OpenAI announced a deal to deploy **6 gigawatts of AMD AI chips** over multiple years — the largest deal AMD has ever signed, per CEO Lisa Su.
- **Unconventional deal structure**: OpenAI acquired the option to purchase **160 million AMD shares at $0.01 per share** (~10% of the company). AMD shares have not traded below $50 in five years, representing a ~99.9% discount.
- Options are tied to OpenAI's purchase/deployment of AMD chips and AMD's stock price appreciation — designed so OpenAI is incentivized for AMD's success.
- Sam Altman's rationale: *"It's hard to overstate how difficult it's become to get enough compute."* The strategy is to secure chips from any available source.
- Despite OpenAI's existing deal with NVIDIA, Altman framed the moment as collaborative: *"We're in a phase of the build-out where the entire industry's got to come together and everybody's going to do super well."*
- **Market reaction**: AMD stock rose **24%** following the announcement, approaching its all-time high.
- **Bubble debate rekindled**: Critics (e.g., Matt Levine's satirical breakdown, Paul Tudor Jones comparing conditions to the 1999 tech bubble) questioned the deal's economics; defenders noted the CapEx boom is not debt-funded, and private credit markets have substantial capital to deploy.
- Companies mentioned at Dev Day also saw stock pops: HubSpot +10%, Figma +15%, HumbleBookings.com +2%, Coursera +4%.

---

### 5. OpenAI Dev Day Recap: Apps Feature

- **ChatGPT Apps**: Users can now access third-party integrations (Canva, Bookings.com, Coursera, Expedia, etc.) directly within the ChatGPT interface via an Apps SDK.
- Community reception was more bullish than anticipated; key analogies circulating:
  - **"ChatGPT is the next browser"** (Hemant Pahaptra)
  - **App Store moment** (Anish Acharya, referencing Steve Jobs' 2008 announcement) — with 800 million active users as the distribution channel
  - **WeChat / "everything app"** comparisons — notably, commentators observed ChatGPT now resembles an everything app more than X/Twitter despite Elon Musk's stated ambitions
- Key strategic tension for third-party companies: maintain a standalone app and control the user experience, or access 800 million ChatGPT users by building within OpenAI's ecosystem.
- Nick Turley (Head of ChatGPT) stated the six-month vision: ChatGPT evolving *"from an app that is really, really useful into something that feels a bit more like an operating system."*
- Aaron Levy (Box) noted the industry is still in early stages of agentic UI design: *"This is like going from DOS to the early stages of Windows or Mac."*

---

### 6. OpenAI Dev Day Recap: Agent Builder (AgentKit)

- **AgentKit**: A visual, drag-and-drop tool for building agent workflows, shipped end-to-end in under six weeks (with Codex writing ~80% of the PRs).
- Initial excitement was tempered by **UI criticisms**: the control panel was described as confusing and reminiscent of older no-code platforms.
- Debate broke into two camps:
  - **Critics** (e.g., Forquan Redan, Amjad Masad/Replit): Visual builders represent old paradigms; the future should be conversational/natural language agent construction with visualization reserved for debugging, not building.
  - **Defenders** (e.g., Gergely Orosz): Shipping fast and iterating beats building perfectly in isolation — speed and velocity are the only things that matter in the current competitive environment.
- Host interpretation: the current UI is likely **developer-targeted** (fine-grained control), not consumer-facing — which makes the design choices more defensible.

---

### 7. OpenAI Dev Day Recap: Codex and Cost Frontier

- **Codex usage statistics at OpenAI**:
  - 92% of technical staff use Codex daily
  - Engineers using Codex submit 70% more PRs per week than those who don't
  - 100% of PRs are now reviewed by Codex
- Codex wrote ~80% of the PRs for the agent builder feature, built in under six weeks.
- **Codex SDK**: Enables apps to update themselves in real time based on user feedback — described as *"software that builds more software."*
- **Codex + Slack integration**: Allows users to tag Codex as a teammate within Slack to go off and take action — framed as a step toward AI as a true team member.
- **GPT Real-Time Mini**: 70% cheaper than the full real-time model, and in internal qualitative testing scored *higher* for voice quality — significant for making voice workflows economically viable at scale.
- The cost-performance frontier continuing to shift was flagged as strategically significant, especially for large enterprise workloads.

---

### 8. Johnny Ive / OpenAI Devices Update

- Sam Altman brought Jony Ive on stage at Dev Day for a fireside chat on the forthcoming OpenAI hardware devices.
- Ive's thesis: current technology relationships are deeply dysfunctional and the device family aims to fundamentally change this, not merely improve it.
- Earlier reports (Financial Times) indicated technical problems with personality, inference, and always-on implementation — suggesting possible delays.
- Ive implied no firm product roadmap exists yet: the team has developed **15–20 compelling product ideas** and the challenge is focus and prioritization.
- No specific product details, timelines, or form factors were revealed.

---

## Key Concepts

- **6 Gigawatt AMD Deal**: OpenAI's multi-year commitment to deploy AMD AI chips at unprecedented scale, structured with equity options rather than purely cash payment.
- **Agent Workflows (ElevenLabs)**: A visual multi-agent orchestration tool for voice AI that allows sub-agents with distinct models and tools to hand off conversations based on defined rules.
- **AgentKit / Agent Builder (OpenAI)**: OpenAI's visual drag-and-drop tool for constructing agentic AI workflows, released at Dev Day.
- **ChatGPT Apps**: An SDK-based integration layer allowing third-party services to embed within ChatGPT, analogized to a browser or app store.
- **Codex SDK**: OpenAI's coding AI tool, now available via SDK, enabling applications to self-update based on user input — "software that builds more software."
- **GPT Real-Time Mini**: A 70% cheaper version of OpenAI's real-time voice model, with comparable or superior voice quality in internal testing.
- **CapEx Boom**: The current wave of massive capital expenditure by AI companies and hyperscalers on compute infrastructure; notably, currently not debt-funded.
- **Cost-Performance Frontier**: The boundary defining what AI capability is achievable at a given cost; continuously shifting as cheaper, high-quality models emerge.
- **Everything App**: A single platform aggregating many services (analogous to WeChat); ChatGPT is increasingly being characterized as filling this role in Western markets.
- **Time-to-Value (ROI)**: The duration businesses expect to wait before seeing returns on AI investments; compressing sharply per the KPMG 2025 survey.
- **Hallucinated Citations**: Fabricated references to non-existent academic sources generated by AI, as occurred in Deloitte's Australian government report.

---

## Summary

The episode's central argument is that OpenAI's AMD chip deal — structured as a massive multi-year compute commitment with a deeply unconventional equity option arrangement — may be more strategically consequential than the product announcements at Dev Day, because it reflects the fundamental bottleneck of the current AI era: access to compute at scale. Dev Day's announcements, particularly the ChatGPT Apps feature and the Codex-powered agent builder, were broadly well-received, with the apps layer generating particular excitement as a potential platform-level shift analogous to the launch of the App Store, and Codex's internal usage statistics pointing to a genuine inflection in AI-assisted software development velocity. Surrounding these flagship stories, the KPMG survey shows CEO AI optimism has dramatically accelerated in time-to-value expectations, ElevenLabs' Agent Workflows signals a maturation of voice AI toward production-grade deployability, and the Deloitte AI report scandal — occurring on the same day as Deloitte's landmark Anthropic partnership — illustrates both the risks of inadequate human oversight of AI outputs and the scale of enterprise AI adoption now underway. Across all stories, the episode reflects an industry simultaneously grappling with the practical challenges of responsible AI deployment and the extraordinary momentum — in capital, compute, product velocity, and market enthusiasm — that defines the current moment.
