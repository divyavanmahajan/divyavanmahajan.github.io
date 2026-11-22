---
title: 'So Far, AI Can Only Automate 2.5% of Jobs'
description: >-
  This episode of The AI Daily Brief, hosted by Nathaniel Whittemore, looks at
  the Remote Labor Index (RLI). RLI is a new benchmark from the Center for AI
  Safety, announced by its director Dan Hendrycks. It measures how much real,
  paid remote freela...
pubDate: 2025-11-01T00:00:00.000Z
type: episode
tags:
  - models-and-benchmarks
  - jobs-and-work
  - agents
  - amazon
url: 'https://www.patreon.com/posts/142552492'
draft: false
---
## Overview

This episode of **The AI Daily Brief**, hosted by Nathaniel Whittemore, looks at the **Remote Labor Index (RLI)**. RLI is a new benchmark from the Center for AI Safety, announced by its director Dan Hendrycks. It measures how much real, paid remote freelance work current AI agents can fully automate. The headline result is low: the best agent automated only **2.5%** of projects. (The episode title says "25%", but the figure discussed in the episode is 2.5%.) The host argues this matters because the public story about AI-driven layoffs depends on whether AI can actually do whole jobs. Academic benchmarks have not answered that question well.

Before the main topic, the headlines cover Amazon's Q3 earnings and its explanation of recent layoffs, Meta's record $30B bond sale, YouTube's voluntary buyouts, NVIDIA's planned investment in Poolside, and Canva's new AI tools.

- **Source:** No video URL was provided. The audio comes from the AI Daily Brief Patreon feed.

## Prerequisites

- How AI model benchmarks and evaluations work, and why people criticise them as too academic.
- The METR time-horizon measure: how long a task a model can complete at a 50% or 80% success rate.
- OpenAI's **GDPval**, an earlier benchmark built on economically valuable real-world tasks.
- The difference between **task automation** and **full job or project automation**.
- Basic terms from tech-company finance: CapEx, free cash flow, revenue run rate, corporate bond issuance.
- How freelance platforms such as Upwork work.

## Main Points

### Headlines: Amazon beats expectations and recasts its layoffs
- AWS revenue was $33B, up 20% year over year. This is its fastest growth since 2022, and analysts had expected 18%. E-commerce revenue was $180B, up 13%.
- Amazon raised its CapEx forecast for the year to $125B, against an analyst forecast of $119B. That is up 55% year over year, and Amazon expects it to rise again next year. Andy Jassy said Amazon added more than 3.8 GW of capacity in the past 12 months.
- Jassy pushed back on rivals' faster percentage growth. He said 20% growth on a $132B annualised run rate is not comparable to faster growth on a much smaller base. The stock rose about 13% after hours.
- Jassy said the 14,000 white-collar layoffs were "not really financially driven" and "not even really AI driven, not right now". He described them as a cultural correction: removing management layers built up during rapid headcount growth. The host reads this mainly as a reversal of pandemic-era overhiring.
- The host disagrees with analysts who worry about Amazon's falling free cash flow. He argues that investing profits in AI capacity may be a better use of capital than share buybacks.

### Headlines: Meta's record bond sale
- Meta raised $30B in corporate bonds to fund data centres. It was the largest high-grade corporate debt issuance of the year.
- Orders reached about $125B, which Bloomberg data shows is the largest demand ever for a corporate bond sale. Maturities run from 5 to 40 years, and the longer-dated bonds pay about 1.4 percentage points over Treasuries.
- The host contrasts this with the stock market's negative reaction to Meta's CapEx plans, and says the bond market takes a longer view. He suggests watching for weakening demand for AI-related corporate debt as a possible sign of a bubble.

### Headlines: YouTube restructures around AI
- An internal memo from CEO Neal Mohan, reported by Alex Heath, describes AI as "the next frontier for YouTube". It announces the first change to YouTube's core leadership structure in a decade.
- There are no layoffs. Instead, US staff are offered a voluntary exit programme with severance.
- The host separates two kinds of "AI layoffs":
  - direct replacement, where AI can now do the job;
  - restructuring ahead of time for a future hybrid workforce of agents and humans, where fewer people are needed for current activities.
- He expects many more restructurings of the second kind over the coming year.

### Headlines: NVIDIA–Poolside and Canva
- NVIDIA plans to invest $1B in Poolside, which builds foundation models for coding. Poolside was founded in 2023 by former GitHub CTO Jason Warner.
  - Poolside is reportedly raising $2B at a $12B valuation, four times its previous valuation. NVIDIA invested $500M in October 2024.
  - Some of the money will buy NVIDIA GB300 chips. Poolside also has a CoreWeave deal for a 2 GW data centre in West Texas.
- Canva launched generative AI tools for posters, short videos and presentations driven by natural-language prompts. It is repositioning itself as an "AI-powered creative operating system".
  - Co-founder Cameron Adams described semi-automated brand advertising: Canva scans a company's website, works out its audience and assets, creates the ad, and deploys it.
  - The host sees this as part of a wider "productization era" of AI.

### The problem with current benchmarks
- Benchmarks released with new models are highly academic and not connected to real-world work.
- Even the METR scale measures success at 50% or 80%. The host says those rates would not be acceptable in real work.
- With the AI-layoff story growing, it matters more to know whether AI can actually do people's work.
- OpenAI's GDPval (September) was an earlier step towards real-world measurement:
  - 44 occupations from the top 9 industries that contribute to US GDP;
  - 1,320 specialised tasks, defined with experienced professionals;
  - up to five rounds of expert review.

### How the Remote Labor Index is built
- **Goal:** a standardised, empirical measure of how well AI can automate practical remote, computer-based work.
- **Source of tasks:** real projects from freelance platforms, mainly Upwork, that clients defined, commissioned and paid for.
- **Contributors:** 358 experienced freelancers, averaging more than 2,300 hours worked and more than $23,000 earned on the platform. They were paid to provide samples of past completed work.
- **Filtering:** 550 candidate projects were reduced to **240**. Projects were removed if they needed physical labour, could not be evaluated, or involved client interaction such as tutoring.
- **Each project contains:**
  - **Brief:** the original description of the work.
  - **Input files:** for example voiceover files, PDF designs, spreadsheets.
  - **Human deliverable:** the paid, gold-standard output that the AI's work is judged against.
- **Project profile:**

  | Measure | Mean | Median |
  |---|---|---|
  | Human time per project | 28.9 hours | 11.5 hours |
  | Cost per project | $632 | $200 |

- **Categories:** 23 in total. The largest are video and animation (13%), 3D modelling and CAD (12%), graphic design (11%), game development (10%), audio (10%) and architecture (7%).

### Results: agents perform near the floor
- **Automation rate** is the share of projects where a human evaluator judged the AI's deliverable at least as good as the human one, and acceptable to a reasonable client.

  | Agent / model | Automation rate |
  |---|---|
  | Manus | 2.5% |
  | Grok 4 | 2.1% |
  | Claude Sonnet 4.5 | 2.1% |
  | GPT-5 | 1.7% |
  | ChatGPT Agent | 1.3% |
  | Gemini 2.5 Pro | 0.8% |

### Why AI deliverables were rejected
- **Poor quality (45.6%):** the work was technically done but not professionally acceptable, such as "childlike" drawings or robotic voiceovers.
- **Incomplete (35.7%):** the agent did not finish the job.
- **Technical or file issues (17.6%):** corrupt or empty files, or unusable formats.
- **Inconsistencies (14.8%):** the deliverable did not hang together. One example is a house that looks completely different across 3D views in an architecture project.
- These add up to more than 100% because some projects failed for more than one reason.

### Caveats and positive signals
- Agents did much better on audio and image work, writing, and data retrieval or web scraping. These are the same use cases that are common with today's assistants.
- A second metric, an **Elo-style relative score**, compared pairs of AI deliverables head to head. It shows agents improving steadily, although still far below the human baseline.
- The host expected more incomplete work than 35.7%. He sees reliably finishing the job, even when the quality falls short, as an important threshold.
- RLI deliberately measures **full automation** of whole, multi-step projects that clients will pay for. It does not measure task completion, which makes it different from GDPval.
- Full automation is not always the goal. In agentic coding, for example, builders are weighing fully autonomous background work against faster coding assistance.

### Reactions and implications
- Rio Longacre argues that today's AI automates specific tasks, not whole jobs. In his view, current fears of mass layoffs and a "permanent underclass" are exaggerated.
- Amit (on Twitter) argues that 2.5% is actually high for general-purpose agents working on random, multi-domain projects with no fine-tuning and no human in the loop. He suggests rates would be much higher in narrow fields such as software engineering.
- This points to a need for sector-specific automation measures alongside RLI.
- The host welcomes better measurement. He connects it to his own AI ROI benchmarking survey (roisurvey.ai) and credits the Center for AI Safety and its partners.

## Key Concepts

- **Remote Labor Index (RLI):** A Center for AI Safety benchmark that tests whether AI agents can fully complete real, paid remote freelance projects to a client-acceptable standard.
- **Automation rate:** The share of projects where an AI deliverable was judged at least as good as the human gold-standard deliverable and acceptable to a reasonable client.
- **Elo / relative performance score:** A pairwise comparison method in which evaluators judge which of two AI deliverables comes closer to completing the project. It is used to track relative progress.
- **GDPval:** OpenAI's benchmark measuring model performance on 1,320 economically valuable tasks across 44 occupations from the top 9 US GDP-contributing industries.
- **METR time-horizon scale:** A measure of the length of task a model can complete at a given success rate, typically 50% or 80%.
- **Human deliverable (gold standard):** The final output a human freelancer delivered and was paid for, which serves as the reference for judging the AI.
- **Full automation vs. task assistance:** The difference between AI completing an entire project on its own and AI speeding up parts of human work.
- **Pre-emptive restructuring:** Reorganising ahead of a hybrid human–agent workforce, as distinct from layoffs caused by AI directly replacing people.
- **Productization era:** The host's term for the phase in which AI capabilities are built into full product suites that complete larger pieces of work.

## Summary

Whittemore argues that the debate about AI replacing workers needs real-world measurement, not academic benchmarks. The Remote Labor Index from the Center for AI Safety is a strong example. It tested leading AI agents against 240 real, paid Upwork projects, and the best agent (Manus) produced client-acceptable work only 2.5% of the time. Most failures came from poor quality or unfinished work. Agents did better on audio, image, writing and data-retrieval tasks, and pairwise Elo comparisons show steady improvement. The host stresses that RLI measures full, end-to-end automation, which is a deliberately high bar and not always the goal. He sees the results as evidence that today's AI automates tasks rather than whole jobs. He also notes that the same "AI layoffs" headline can describe very different things, from Amazon's correction of overhiring to YouTube's restructuring ahead of AI. He calls for more measurement, including sector-specific measures, to track how fast real automation is actually arriving.
