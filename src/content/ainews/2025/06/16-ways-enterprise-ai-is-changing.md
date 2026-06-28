---
title: 16 Ways Enterprise AI is Changing
description: >-
  This episode of the AI Daily Brief podcast/video channel provides a detailed
  walkthrough and commentary on Andreessen Horowitz's (a16z) annual enterprise
  AI report: "16 Changes to AI in the Enterprise — 2025 Edition." The host,
  affiliated with bot...
pubDate: 2025-06-17T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
draft: false
---
# 16 Ways Enterprise AI Is Changing (2025) — Study Document

## Overview

This episode of the *AI Daily Brief* podcast/video channel provides a detailed walkthrough and commentary on Andreessen Horowitz's (a16z) annual enterprise AI report: **"16 Changes to AI in the Enterprise — 2025 Edition."** The host, affiliated with both the AI Daily Brief and a firm called **Superintelligent**, cross-references a16z's findings with first-hand observations from enterprise AI consulting and deployment work. The talk matters because it offers a data-driven snapshot of how large organizations are actually adopting, budgeting, and operationalizing AI in mid-2025 — moving well beyond the experimental phase into structural transformation.

*Source video URL: Not available (internal/podcast recording dated 2025-06-17)*

---

## Prerequisites

- Basic familiarity with **Generative AI (GenAI)** concepts: large language models (LLMs), prompting, fine-tuning, context windows
- Understanding of **enterprise software procurement** models (SaaS, seat-based licensing, usage-based pricing)
- Awareness of major AI model providers: **OpenAI, Anthropic, Google (Gemini), Meta (Llama), Mistral**
- Familiarity with the concept of **AI agents** and **agentic workflows** (multi-step, autonomous AI task completion)
- General knowledge of the **build vs. buy** decision framework in enterprise software
- Awareness of the 2024 a16z enterprise AI report as prior context

---

## Main Points

### 1. AI Budgets Are Larger Than Expected and Still Growing
- Enterprise leaders expect an average **75% growth** in AI spend over the next year.
- Growth is **use-case driven**, not top-down budget mandates — new applications are creating demand for more spend.
- A PwC study cited by the host found **88% of organizations** increased AI budgets due to agentic AI, with ~75% increasing by 10% or more.

### 2. Spend Is Shifting to Permanent Budget Lines
- In 2024, **innovation budgets** accounted for ~25% of GenAI spend; in 2025 that dropped to just **7%**.
- **Reallocated central IT budget** grew from 28% to **39%**; business unit budgets rose from 21% to **27%**.
- This signals GenAI is graduating from experimental line items to core operational expenditure.
- Agent pilots have a distinctly different character than prior GenAI pilots — they are treated as infrastructure investments, not "if" experiments.

### 3. Enterprises Are Behaving More Like Consumers — Using Multiple Models
- Organizations are selecting models based on **task-specific strengths**, mirroring sophisticated consumer behavior.
- Example differentiation: Claude for fine-grained code completion; Gemini for high-level systems architecture (partly due to larger context window).
- **37% of enterprises** now use five or more models, up significantly from prior years.

### 4. Market Consolidation Around a Few Leaders, With Nuanced Share
- **OpenAI** retains overall market share leadership.
- **Google and Anthropic** made significant gains over the past year.
- **67% of OpenAI users** have deployed non-frontier models in production; only 41% for Google, 27% for Anthropic — meaning Anthropic and Google users concentrate at the frontier.
- Google gained disproportionately among **large enterprises**, driven by compliance trust and **price-performance ratio**.

### 5. Cost Is Now a Primary Buying Consideration
- Closed-source, non-frontier models have dropped so dramatically in price that enterprises are increasingly choosing them over open-source alternatives, retaining ecosystem benefits.
- In buying decisions, **cost of ownership rose** most as a consideration, while reasoning and accuracy/reliability considerations declined relative to prior year.
- One enterprise quoted: *"Gemini is cheap."*
- The pricing pressure on closed-source models complicates the long-term open-source vs. closed-source competitive dynamic.

### 6. Fine-Tuning Is Viewed as Increasingly Unnecessary
- Longer context windows and improved base model capabilities mean enterprises can achieve near-equivalent results by **loading training data into context** rather than fine-tuning.
- Quote from enterprise: *"Instead of parameter-efficient fine-tuning, you just dump it into a long context and get almost equivalent results."*
- This has significant financial implications for startups positioned around enterprise fine-tuning services.

### 7. Reasoning Models Are Opening New Use Cases
- **23% of enterprises** are already using OpenAI's O3 reasoning model in production.
- **57% of respondents** said reasoning models are accelerating their adoption.
- Enterprises view reasoning models not just as incremental improvements but as enablers of **previously impossible use cases**.
- Quote: *"Reasoning models allow us to solve newer, more complex use cases."*

### 8. AI Procurement Is Maturing to Resemble Traditional Enterprise Software Buying
- The buying process now includes **checklists and price sensitivity** typical of traditional software procurement.
- Shift from innovation-driven evaluation (accuracy, reasoning benchmarks) to **total cost of ownership** as the dominant criterion.
- Reflects the transition from pilot/exploration to ubiquitous organizational use.

### 9. Enterprises Are More Comfortable Hosting Directly With Model Providers
- In 2024, most enterprises accessed models through **existing cloud providers** (AWS, Azure, GCP).
- In 2025, companies increasingly go **directly to model providers** (OpenAI, Anthropic) to access the latest models faster.
- A growing pain point: the gap in model quality between what employees use in personal/consumer accounts and what their employer provides through standard IT channels.
- Example cited: Amazon reportedly considering replacing its internal AI code tool with **Cursor** due to employee demand.

### 10. Switching Costs Are Rising as Agentic Workflows Deepen
- In 2024, enterprises deliberately designed applications to **minimize switching costs** and keep models interchangeable.
- In 2025, agentic workflows with multiple interdependent steps make model substitution significantly harder — changing one model component can **affect all downstream dependencies**.
- Agent platforms are racing to capture broader shares of enterprise agentic use cases to benefit from this lock-in dynamic.
- The host predicts market forces will ultimately compel **agent interoperability standards**, despite current competitive fragmentation.

### 11. External Benchmarks Rising as Evaluation Proxies (Likely Temporary)
- Use of **external benchmarks** as the primary model evaluation method increased; internal and project-specific benchmarks declined slightly.
- The host flags this as potentially temporary: public benchmarks are increasingly **saturated at the top** and lack discriminatory power.
- Prediction: by the next annual survey, **internal benchmarks will return** as a major evaluation criterion, driven by advances in model evaluation ("evals") methodology visible in developer communities like the AI Engineer Summit.

### 12. Build vs. Buy Is Shifting Toward Buying — With Important Caveats
- In 2024, enterprises built by default because quality vertical AI applications didn't exist.
- In 2025, a **marked shift toward buying** third-party applications as the AI app ecosystem matures.
- However, the host argues a **bifurcation is emerging**:
  - **Non-regulated industries / common use cases** (e.g., CPG customer service): off-the-shelf-ish solutions with light customization will suffice.
  - **Regulated, high-value industries** (finance, healthcare): custom-built agentic solutions will remain the default.
- Even "buying" still requires data integration and customization — the classic off-the-shelf model doesn't fully translate to AI agents.

### 13. Outcome-Based Pricing Is Promising but Struggling
- Traditional **per-seat pricing** is widely seen as ill-suited for AI.
- Early **outcome-based pricing** experiments are nascent and problematic.
- Only **15% of CIOs** prefer outcome-based models; **39% prefer usage-based**, 21% still prefer seat-based.
- Biggest challenges with outcome-based pricing:
  - **Lack of clear measurable outcomes**: cited by 47% of respondents
  - **Unpredictable and unscalable costs**: cited by 36%

### 14. Software Development Has Become a Default Enterprise AI Use Case
- The percentage of enterprises with software development as an **in-production AI use case** jumped from under 40% to over **70% in one year**.
- Driven by: high-quality off-the-shelf tools, improved model capabilities, broad industry relevance, and clear ROI.
- Other growing use cases: enterprise search, data analysis, data labeling.
- Customer service saw a **slight decline** in in-production deployment.

### 15. Employee Consumer Behavior Is Driving Enterprise Purchasing Decisions
- Much of the growth in enterprise AI app adoption is driven by **prosumer/consumer market** familiarity.
- Example: Many CIOs chose to purchase enterprise ChatGPT because *"employees loved ChatGPT"* — brand recognition drove procurement.
- Bottom-up employee demand (e.g., for Cursor) is increasingly shaping enterprise AI tool selection.

### 16. AI-Native Companies Are Beginning to Outpace Incumbents on Quality and Speed
- Early AI adoption favored **incumbents** due to: established trust, existing distribution, and ability to fund large capital requirements (e.g., Microsoft → OpenAI, Google → Anthropic).
- This dynamic is shifting: enterprises increasingly prioritize access to the **best, most current models as fast as possible**.
- The coding assistant space illustrates this vividly: agentic-native tools like **Cursor** have dramatically outpaced first-generation tools like GitHub Copilot.
- Enterprises preferring AI-native companies cite **faster pace of innovation** as the overwhelming reason.

---

## Key Concepts

- **Agentic AI / Agentic Workflows**: AI systems that autonomously execute multi-step tasks, often involving tool use and sequential decision-making, as distinct from single-prompt interactions.
- **Reasoning Models**: LLMs with enhanced deliberative or chain-of-thought capabilities (e.g., OpenAI O3) that enable more complex, multi-step problem solving.
- **Fine-Tuning**: A training process that adapts a pre-trained model to a specific task or domain using additional data; increasingly being replaced by long-context prompting.
- **Context Window**: The maximum amount of text/tokens an LLM can process in a single interaction; larger windows reduce the need for fine-tuning.
- **Outcome-Based Pricing**: A pricing model where payment is tied to measurable business results rather than usage volume or seats.
- **Usage-Based Pricing**: A pricing model where cost scales with the volume of API calls or tokens consumed.
- **Prosumer Market**: Consumers who use a product professionally or at a high level, bridging consumer and enterprise use — their preferences often influence enterprise procurement.
- **Switching Costs**: The friction, effort, and risk associated with replacing one AI model or platform with another in an existing workflow.
- **External Benchmarks**: Standardized, publicly available tests used to compare AI model performance (e.g., MMLU, HumanEval); increasingly seen as insufficient for enterprise differentiation.
- **Evals (Evaluations)**: Custom or systematic methods for assessing AI model performance on specific tasks or workflows relevant to a particular enterprise use case.
- **Build vs. Buy**: The strategic decision of whether to develop custom AI solutions in-house or purchase third-party applications.
- **Vertical Agents**: AI agents designed for specific industries (e.g., healthcare, finance) as opposed to general-purpose tools.
- **Functional Agents**: AI agents designed for specific business functions (e.g., HR, legal, customer service) regardless of industry.

---

## Summary

The a16z 2025 Enterprise AI report, as analyzed through the lens of the *AI Daily Brief*, paints a picture of **enterprise AI transitioning from experimentation to structural integration**. Budgets are growing rapidly and moving into permanent IT and business unit lines, driven primarily by the emergence of agentic workflows and expanding use cases rather than top-down mandates. Enterprises are becoming more sophisticated consumers of AI — using multiple models based on task-specific strengths, demanding direct access to frontier models, and evaluating purchases with cost-of-ownership discipline typical of mature software procurement. Key shifts from 2024 include the decline of fine-tuning as a required practice, the rise of reasoning models opening genuinely new capabilities, increasing switching costs as agents deepen organizational integration, and a notable move toward buying third-party AI applications as the vertical ecosystem matures — though heavily regulated industries will likely continue building custom solutions. Pricing models remain unsettled, with outcome-based approaches aspirational but practically immature. The overarching narrative is one of **acceleration**: enterprises are adapting faster than expected, behaving more like sophisticated consumers, and — for the first time — beginning to favor AI-native companies over incumbents in key categories like software development, signaling that speed of innovation is displacing established trust as the primary competitive differentiator.
