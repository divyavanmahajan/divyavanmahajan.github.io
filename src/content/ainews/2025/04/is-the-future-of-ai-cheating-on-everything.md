---
title: Is the Future of AI "Cheating on Everything?"
description: >-
  This episode of the AI Daily Brief (dated April 23, 2025) covers two segments:
  a headlines section addressing several AI industry news stories, and a main
  discussion examining the launch of Cluely, a startup that has generated
  significant controve...
pubDate: 2025-04-23T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# Is the Future of AI Cheating on Everything?

## Overview
This episode of the **AI Daily Brief** (dated April 23, 2025) covers two segments: a headlines section addressing several AI industry news stories, and a main discussion examining the launch of **Cluely**, a startup that has generated significant controversy by marketing an AI tool explicitly framed around "cheating." The host explores the spectrum of reactions to Cluely and uses the controversy as a lens for broader questions about AI augmentation, societal norms, and where the line between tool-use and deception lies. The speaker is the host of the AI Daily Brief podcast; no full name is provided in the transcript.

*Source video URL: not available*

---

## Prerequisites
- Basic familiarity with large language models (LLMs) and AI assistants
- Understanding of the startup funding ecosystem (seed rounds, investor roles)
- Awareness of ongoing debates around AI in education and hiring
- General knowledge of U.S. and EU tech antitrust history (Microsoft, Google cases)
- Familiarity with concepts like API rate limiting, cloud infrastructure, and prompt caching

---

## Main Points

### Amazon's Bedrock Is Struggling to Retain AI Startup Customers
- Amazon invested ~$8 billion in a partnership with Anthropic to serve its models via AWS Bedrock, but customers report arbitrary API rate limits and missing features.
- During one April incident, Bedrock was limited to 5 requests per minute while Anthropic's native API handled 50 requests per minute.
- A feature Anthropic launched in December (prompt caching) was not implemented in Bedrock until April—a multi-month lag.
- Fast-scaling AI coding companies (e.g., Lovable) are reportedly reverting to Anthropic's direct API; Lovable's CEO confirmed use of the direct API citing access to latest features.
- Senior Amazon executives internally described the situation as "a disaster"; a consulting firm warned AWS risks losing startup credibility. Amazon disputed the characterization.
- Amazon's proposed alternative, Provisioned Throughput (per-hour billing), is poorly suited to startups that cannot forecast usage and prefer per-token pricing.

### Google Faces Antitrust Scrutiny Over Gemini Pre-Installs
- DOJ prosecutors revealed Google paid Samsung an "enormous sum" to pre-install the Gemini app on devices, with fixed monthly payments per device plus a share of ad revenue.
- Prosecutors called this the "Monopolist's playbook," drawing parallels to past antitrust cases (Microsoft/IE in the late 1990s; Google's €4.9 billion EU fine over Chrome/Android pre-installs).
- Perplexity CEO Arvind Srinivas was asked to testify in the DOJ remedy phase and argued against breaking up Google—specifically that Chrome should stay with Google—while also arguing Android should be more open to consumer choice.
- The episode illustrates how pre-AI antitrust suits are now directly shaping the AI competitive landscape.

### ChatGPT Search Is Growing Rapidly in Europe
- OpenAI disclosed EU monthly active users for ChatGPT Search grew from 11.2 million (October 2024) to 41.3 million (March 2025)—nearly 4× growth in ~5 months.
- Disclosure is mandated by the EU Digital Services Act; no comparable data exists for other regions.
- For context, Google Search has an estimated 332 million monthly active EU users (2023); ChatGPT Search would represent roughly 8% market share by that measure.
- Bing and Yandex each hold less than 4.5% market share, suggesting ChatGPT Search is already competitive with the second tier.
- Commentator Simon Wilson noted LLMs have crossed a reliability threshold for low-stakes research, observing a "nosedive" in personal Google Search usage.

### What Is Cluely and Why Is It Controversial?
- Cluely is a startup founded by Roy Lee (age 21) that raised $5.3 million and markets an AI tool described as "invisible AI to cheat on everything."
- The product runs on desktop, is undetectable during screen sharing, listens to audio, reads the screen, and feeds the user real-time answers—targeting exams, sales calls, and job interviews.
- Roy Lee's origin story: he built an AI tool to ace LeetCode-style coding interviews, received offers from Meta, TikTok, Amazon, and Capital One, published a recording of the Amazon interview, and was subsequently suspended from Columbia University for a year.
- Cluely's launch included a deliberately provocative viral ad depicting a man using AR-style AI assistance to lie to a date about his age and interests, plus a manifesto titled "We Want to Cheat on Everything."
- The video reached nearly 10 million views; the viral strategy was explicit and intentional—Lee has publicly argued organic virality is the only viable go-to-market for early-stage startups without capital.

### The Arguments Against Cluely
- Critics argue the tool glamorizes laziness, intellectual dishonesty, and a nihilistic approach to human achievement.
- One Twitter critic (Chris, Sub-Z Robotics) described it as "Silicon Valley rot"—the doctrine that effort, integrity, and expertise are obsolete, replaced by whoever best exploits the newest tool.
- Critics distinguish between tools that render *skills unnecessary* (calculator, spellcheck) and tools that enable users to *misrepresent themselves* to other people.
- The dating ad was particularly condemned for treating intimate human relationships as games to be gamed rather than connections to be formed.
- The manifesto line "the future won't reward effort, it'll reward leverage" was read by critics as an abdication of human growth and responsibility.

### The Arguments in Defense of Cluely
- Proponents frame the tool as "intelligence amplification"—a continuation of a long historical arc from calculators to Google to LLMs.
- The "cheating is just an exploit" argument: systems that can be cheated reveal where those systems were already broken; cheating is adversarial R&D and a feedback loop for society.
- The comparison to LeetCode specifically: candidates using AI to pass coding tests are arguably demonstrating how they will actually work on the job, where AI assistance is standard.
- Writer Jon Stokes argued the demo is dumb but the underlying promise is real—AR/audio AI assistance has obvious high-value applications in home repair, factory floor troubleshooting, restaurant staff onboarding, and employee training.
- The host notes that sales call assistance—where a rep has better real-time information about a customer—is unlikely to generate widespread moral objection even if customers knew it was happening.

### The Spectrum of Appropriate Use and Society's Self-Correction
- The host proposes a spectrum: at one end, sales and professional contexts where AI assistance is broadly acceptable; at the other, intimate human relationships where misrepresentation is widely condemned.
- The "messy middle" includes technical job interviews—genuinely ambiguous because firms want to assess capability, but AI-assisted work is increasingly how that capability is exercised on the job.
- The host expresses uncertainty about whether the intrinsic value of *learning skills the hard way* will persist, but suggests society and markets will self-correct.
- Investor Gokul Rajaram (board member, Pinterest and DoorDash) publicly predicted the rise of physical "clean room interview centers"—proctored, AI-free testing facilities analogous to SAT centers—as a startup opportunity created by the Cluely-style cheating trend.
- The host concludes that more tools like Cluely are inevitable, that public debate about norms is part of how society figures this out, and expresses cautious optimism.

---

## Key Concepts

- **AWS Bedrock**: Amazon's cloud infrastructure service for hosting and accessing third-party AI models, including Anthropic's Claude.
- **Prompt caching**: A feature allowing repeated identical prompts to return stored responses without re-processing by the model, reducing latency and cost.
- **Provisioned Throughput**: An AWS billing model charging per hour of inference capacity rather than per token; useful for predictable workloads but poorly suited to startups with variable demand.
- **Rate limiting**: A restriction on the number of API requests a service will process per unit of time, used to manage capacity or ensure fair access.
- **EU Digital Services Act (DSA)**: EU regulation requiring large online platforms to disclose user metrics and moderate content; the basis for OpenAI's EU usage disclosures.
- **LeetCode**: A platform hosting algorithmic coding challenges widely used by tech companies in technical interviews.
- **Intelligence amplification (IA)**: The augmentation of human cognitive capability through seamless technology integration, distinguished from artificial intelligence replacing humans entirely.
- **Organic virality**: A go-to-market strategy relying on unpaid, word-of-mouth or socially shared content to achieve top-of-funnel awareness, as opposed to paid advertising.
- **Clean room interview centers**: A predicted category of physical, proctored facilities where candidates complete technical assessments without AI tools—analogous to standardized test centers.
- **Rorschach test (used figuratively)**: A reference to the inkblot psychological test, used here to describe how Cluely provokes sharply divergent reactions that reveal the viewer's own values and assumptions.

---

## Summary

The episode uses the emergence of Cluely—a $5.3 million-funded startup openly marketing AI-powered "cheating" for interviews, sales calls, and even personal relationships—as a Rorschach test for competing visions of AI's role in human life. After covering headlines about Amazon's troubled Bedrock infrastructure, Google's antitrust exposure over Gemini pre-installs, and ChatGPT Search's explosive EU growth, the host examines the intense polarized reaction to Cluely's viral launch: critics see it as a nihilistic abdication of human effort and integrity, while defenders frame it as the next step in intelligence amplification, consistent with calculators, spellcheck, and search engines before it. The host argues that the real complexity lies not at the extremes—AI assistance on a sales call is broadly acceptable; using it to deceive a romantic partner is broadly condemned—but in the contested middle, such as AI-assisted coding interviews, where the boundary between legitimate tool use and misrepresentation of capability is genuinely unclear. The host concludes that real-time AI augmentation is inevitable, that society and markets will self-correct (as evidenced by investor interest in AI-free proctored interview centers), and that continued public debate about norms is itself a necessary part of how humanity navigates this transition.
