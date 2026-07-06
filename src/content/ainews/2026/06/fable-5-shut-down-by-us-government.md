---
title: 'Fable 5 Shut Down by US Government '
description: >-
  This is an emergency episode of The AI Daily Brief podcast, hosted by an
  unnamed presenter, discussing a major breaking news event: the U.S.
  Government's directive ordering Anthropic to suspend all access to its
  frontier AI models Fable 5 and Myth...
pubDate: 2026-06-13T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.youtube.com/watch?v=5-CGzLrA4fg'
draft: false
---
## Overview

This is an emergency episode of *The AI Daily Brief* podcast, hosted by an unnamed presenter, discussing a major breaking news event: the U.S. Government's directive ordering Anthropic to suspend all access to its frontier AI models **Fable 5** and **Mythos 5** for all foreign nationals — whether inside or outside the United States — citing national security concerns. The episode aired on a Saturday morning following the directive issued the previous Friday evening. The episode surveys reactions from technologists, investors, policymakers, and commentators across the political spectrum.

> **Source video:** No URL was provided for this episode.

---

## Prerequisites

- Basic familiarity with large language models (LLMs) and frontier AI development
- Understanding of U.S. export control law and the role of the Bureau of Industry and Security (BIS) and Department of Commerce
- Awareness of Anthropic's public positioning on AI safety and its model lineup (Claude, Opus, Sonnet, etc.)
- General knowledge of the competitive AI landscape (OpenAI, Google DeepMind, Anthropic)
- Familiarity with concepts such as jailbreaking, red-teaming, and AI model safeguards
- Basic understanding of U.S. visa categories relevant to skilled workers (e.g., EB-1)
- Awareness of the geopolitical context of U.S.–China technology competition

---

## Main Points

### 1. The Government Directive

- Late on a Friday evening, Anthropic tweeted that the U.S. Government had issued an **export control directive** under national security authorities, suspending all access to **Fable 5** and **Mythos 5** for any foreign national, regardless of location — including foreign national Anthropic employees.
- Commerce Secretary Howard Lutnick sent a letter to Anthropic CEO Dario Amadei announcing the models were now subject to export restrictions.
- The directive took effect immediately, forcing Anthropic to disable both models for **all customers** to ensure compliance; other cloud models were unaffected.
- Anthropic stated it received the directive at 5:21 p.m. and that **no specific national security details were provided** in the letter.

### 2. The Stated Basis: A Jailbreak Report

- The government's directive was apparently triggered by a report from another company about a discovered jailbreak of Fable 5.
- The Wall Street Journal reported the jailbreak research was conducted by **Amazon researchers**, who used a series of prompts to elicit information about a small number of security vulnerabilities.
- Anthropic reviewed what it believed to be the basis of the directive and concluded that:
  - The vulnerabilities identified were **minor and previously known**
  - The same results were achievable using **other publicly available methods**
  - The capability demonstrated was **"widely available from other models, including OpenAI's GPT-5.5"**
  - No **universal jailbreak** had been found; only narrow, non-universal techniques were demonstrated
- The government had, per Anthropic, only provided **verbal evidence** of a potential narrow jailbreak: essentially asking the model to read a codebase and identify software flaws.

### 3. Anthropic's Defense-in-Depth Strategy

- Anthropic argued that **perfect jailbreak resistance is not currently possible** for any model provider, and stated this publicly at Fable 5's release.
- Their strategy was to make jailbreaks either **narrow or very expensive to produce**, combined with **thorough monitoring** to detect and shut down attacks.
- Anthropic had implemented a **30-day data retention policy** for Fable 5 customers specifically to enable jailbreak research and mitigation — a policy that carried commercial costs.
- They asserted the government had not disclosed a jailbreak that led to an actual harmful result.

### 4. Pre-Release Government Engagement and Breakdown

- In the weeks before Fable 5's release, Anthropic worked with the U.S. Government and others to **red-team Fable safeguards**.
- Per Axios (as cited in the episode), the government asked Anthropic to **pause the model release**, and Anthropic declined — characterized colloquially as Anthropic telling "the government to pound sand."
- This breakdown in pre-release negotiations appears to be a significant context for the subsequent directive.

### 5. Criticism of the U.S. Government's Actions

- Critics broadly argued the government's rationale was **technically weak and legally suspect**:
  - The jailbreak standard, if applied universally, would **halt all new frontier model deployments** across the industry.
  - The administration simultaneously supported **exporting advanced AI chips to China** while restricting American citizens' access to domestic AI models.
  - A White House OSTP post from weeks prior had explicitly stated that government oversight of all new AI models would have **"chilling effects on free speech and innovation."**
- Export control experts (e.g., Chris McGuire, CFR) noted that while targeted export controls can be a valuable tool, **across-the-board controls applied without warning** are counterproductive and incoherent.
- Georgetown Law's Peter Harrell called it "un-American" to restrict a U.S. citizen's access to an AI model based on a **vague and non-public** security threat.
- The Department of War CIO's tweet expressing pointed hostility toward Anthropic's "revenue cycles" and "pre-IPO valuation" led many observers to conclude the action was **politically or relationally motivated**, not purely based on national security.

### 6. Criticism of Anthropic's Role in Creating the Conditions

- A substantial portion of industry commentary directed blame at **Anthropic itself**, arguing that years of apocalyptic safety rhetoric created the political environment that made this intervention possible:
  - Anthropic had publicly argued that **governments should be able to block unsafe model deployments**.
  - Dario Amadei's safety-focused public positioning and white papers were widely seen as having **alarmed policymakers** without offering concrete solutions.
  - The episode was widely characterized as an **"F around, find out" moment**: Anthropic had consistently framed its models as existentially dangerous, and the government responded accordingly.
- A viral three-panel cartoon captured the sentiment: Amadei warns the model "could kill us all," Trump bans it, and Amadei protests the ban.
- Critics also alleged that some of Anthropic's safety positioning was **strategically motivated** (regulatory capture, compute limitations, IPO considerations) rather than purely principled.

### 7. Immediate Operational Consequences

- Because many Anthropic technical employees — including high-profile figures such as **Andrej Karpathy** — are foreign nationals on visas (e.g., EB-1), they are **internally barred from using the models they work on**.
- Restoring even U.S.-only access would require Anthropic to implement **citizenship verification** at the API level, affecting all downstream integrations (Cursor, Devon, OpenRouter, Harvey, etc.).
- **OpenAI and Google DeepMind** now face a disincentive to release Mythos-caliber models, as any jailbreak discovery could trigger the same export control mechanism against them.
- International partners with frontier model access through programs like **Project Glasswing** are cut off.

### 8. Geopolitical and Regulatory Precedent

- Commentators widely flagged this as a **historic inflection point** for AI regulation:
  - The U.S. Government has now exercised what amounts to a **"kill switch"** over a deployed commercial AI model.
  - Future frontier model releases may require **government clearance** before deployment.
  - The concept of **"capability thought crimes"** (Sterling Crispin) was introduced — the idea that possessing or releasing sufficiently capable models could itself become a legal liability.
- International observers noted the event severely damaged the **U.S. narrative** of being a reliable, rule-of-law technology provider compared to China.
- Procurement officers in Brussels, Tokyo, São Paulo, and elsewhere now have a **defensible argument for sovereign AI hedging**, EU model preference, or exploration of Chinese open-weight alternatives (DeepSeek, Qwen).
- Multiple commentators drew parallels to the **1990s cryptography export control battles**, warning the AI version will be harder and higher-stakes.
- Several voices warned of a **"new Iron Curtain"**: a caste system defined not by wealth but by **national citizenship and access to frontier intelligence**.

### 9. Market and Business Implications

- Analysts raised serious concerns about the **bull case for AI investment**:
  - Anthropic's path to IPO is seen as significantly damaged; its global addressable market may be reduced by ~25% if foreign nationals cannot access its most powerful models.
  - The precedent that the U.S. Government can revoke model access unilaterally makes **investing in AI companies permanently riskier**.
  - The entire U.S. AI buildout relies on continued revenue growth at frontier labs; disruption to that revenue threatens the broader investment thesis.
- Calls emerged for **Dario Amadei's resignation**, with reports that Anthropic investors were angry at his leadership.
- The situation was compared structurally to the **Sam Altman firing/reinstatement at OpenAI**, which permanently altered Microsoft's relationship with OpenAI and forced it to build AI resilience outside that partnership.

---

## Key Concepts

- **Fable 5 / Mythos 5**: Anthropic's frontier AI models at the center of the export control directive; Mythos 5 appears to be a more capable or specialized variant.
- **Export control directive**: A legal order from the U.S. Department of Commerce restricting the transfer of a technology to foreign nationals or entities, invoked here under national security authority.
- **Jailbreak**: A technique for bypassing an AI model's safety guardrails to elicit outputs the model is designed to refuse.
- **Universal jailbreak**: A jailbreak method that broadly and reliably bypasses all or most safeguards across a model; distinguished from narrow, context-specific jailbreaks.
- **Defense-in-depth**: A security strategy relying on multiple overlapping safeguards rather than any single perfect barrier; Anthropic's stated approach for Fable 5.
- **Project Glasswing**: A government-affiliated program focused on AI security testing and vulnerability sharing; Amazon is named as a partner.
- **Bureau of Industry and Security (BIS)**: The U.S. Department of Commerce agency responsible for administering export controls.
- **Regulatory capture**: A situation in which a regulated industry shapes regulations in ways that entrench incumbents and disadvantage competitors; alleged as a motive behind Anthropic's safety advocacy.
- **Sovereign AI**: The concept that nation-states should develop and control their own domestic AI capabilities rather than relying on foreign providers.
- **Capability thought crime**: A coined term (Sterling Crispin) describing the potential future legal risk of developing or releasing AI systems above a certain capability threshold.
- **KYC (Know Your Customer)**: Identity verification requirements; raised here as a likely compliance mechanism if frontier model access becomes citizenship-gated.
- **Red-teaming**: Adversarial testing of an AI system's safety by attempting to find exploits or elicit harmful outputs before public deployment.

---

## Summary

On a Friday evening in June 2026, the U.S. Government issued an emergency export control directive ordering Anthropic to immediately suspend access to its two most advanced AI models — Fable 5 and Mythos 5 — for all foreign nationals worldwide, citing a reported jailbreak. Anthropic publicly disputed the technical basis of the directive, arguing the jailbreak in question was narrow, non-universal, and achievable with any number of other publicly available models, and that the government had provided only verbal evidence of a finding that produced no genuinely harmful result. The episode prompted a torrent of criticism directed at both parties: the U.S. Government was accused of technically illiterate, legally questionable, and potentially politically motivated overreach, while Anthropic was accused of having created the very regulatory conditions that enabled the intervention through years of apocalyptic safety rhetoric and confrontational dealings with government agencies. The immediate operational fallout was severe — foreign national employees at Anthropic could no longer use their own models, downstream API customers faced compliance uncertainty, and competitors lost the incentive to release comparably capable systems. The broader consequences discussed include lasting damage to Anthropic's IPO prospects and investor confidence, the establishment of a government "kill switch" precedent over commercial AI, the erosion of the U.S. narrative as a trustworthy technology provider, and an acceleration of sovereign AI efforts globally. Most observers agreed, regardless of how this specific incident is resolved, that AI policy had crossed a threshold from which it is unlikely to return.
