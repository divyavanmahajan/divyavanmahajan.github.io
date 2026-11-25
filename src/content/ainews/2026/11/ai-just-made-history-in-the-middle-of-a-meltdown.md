---
title: AI Just Made History in the Middle of a Meltdown
description: >-
  This episode of The AI Daily Brief covers two stories that the host presents
  as signs that AI is "entering a new phase." The first is a claimed proof of
  the Riemann hypothesis, produced by an Anthropic mathematician working with
  Claude. The second...
pubDate: 2026-11-24T00:00:00.000Z
type: episode
tags:
  - policy-and-regulation
  - infrastructure-and-chips
  - open-weight-models
  - nvidia
  - xai
url: 'https://www.patreon.com/posts/176284431'
draft: false
---
## Overview

This episode of **The AI Daily Brief** covers two stories that the host presents as signs that AI is "entering a new phase." The first is a claimed proof of the Riemann hypothesis, produced by an Anthropic mathematician working with Claude. The second is the political fallout from Jensen Huang's reinstatement as CEO of NVIDIA, which became bigger once it emerged that President Trump had stepped in directly. The headline segment also covers reporting on SpaceX's AI division and Z.ai's GLM 5.4 model announcement. The main episode then looks at what Huang's return means for NVIDIA, for Washington and for the market, including Anthropic's newly listed stock.

The host is not named in the transcript. No source video URL was provided, so no link is included.

## Prerequisites

- **The Riemann hypothesis and the Millennium Prize problems:** a basic idea of what they are and why mathematicians value them.
- **Formal proof verification:** what a proof assistant such as Lean does, and how a machine-checked proof differs from a traditional written one.
- **Transformer architecture:** reasoning traces, inference cost, and the trade-off between parameter count and capability.
- **Earlier coverage of the NVIDIA story:** Jensen Huang's ouster, the alleged link to a Chinese intelligence contact, the firm Megaspeed, and US export controls on advanced chips to China.
- **Market basics:** IPOs, institutional selling when a stock falls below its IPO price, and index moves on the Nasdaq and Dow.
- **US political context:** the recent elections, the coming change in congressional control, and how congressional oversight hearings work.

## Main Points

### 1. A claimed proof of the Riemann hypothesis with Claude
- An Anthropic mathematician announced that, working with Claude, he had found a proof of the Riemann hypothesis. The transcript spells his name several ways: Levent Alpogay, Alpege, Applegate. He said the method also resolves the generalized Riemann hypothesis and should extend to the "extended" version.
- The Riemann hypothesis was proposed by Bernhard Riemann in 1859. It is a central problem in number theory and one of the seven Millennium Prize problems, which carry a $1M prize. The host's simplified description: the apparently random gaps between prime numbers actually follow a pattern.
- **Timing:** the mathematician was satisfied with the work the previous Sunday. He raised disclosure with CEO Dario Amodei during IPO week, and they chose to wait until after the IPO. He called the timing "horrible."
- **Form of the proof:** it was published only in Lean, at about 17 million lines. The author acknowledged it might be wrong. He described presenting a complete argument "before having mastered a massive neighborhood around its mathematics."
- **Validation so far:** the Lean and Mathlib communities issued a joint statement expressing "full confidence" that the proof is correct. However, a Lean proof can contain bugs like any other program, some people say they have found bugs, and the host says it should not yet be treated as rock-solid.

### 2. How the mathematical community reacted
- **The Association for Human Mathematics** criticized the work as a "new value system" from AI companies. In its view this system puts technical validity ahead of accountability, clarity, accessibility and understanding. It also said no human can reasonably claim to understand or take responsibility for the document.
- **Terence Tao** had said one month earlier that AI companies had probably worked on the Riemann hypothesis in secret without success, and that "something beyond current AI is needed." In a March interview he said solving it would likely require a new kind of mathematics.
- **Scott Aaronson** wrote that P vs NP now becomes the "final boss" of mathematics. The host noted that Anthropic and OpenAI had both published limited proofs related to P vs NP "across algebraic space" that Monday.
- **Abhishek Saha** (Queen Mary University of London) called the method "weirder and more alien" than normal theory-building. He said it amounts to a "wormhole" requiring a 25,000-page tour through existing mathematics, something he believes neither a human nor current AI could do alone.
- **Aaron Levie** (Box CEO) said that how problems get solved is about to look very different.

### 3. Reporting on SpaceX's AI division
- The New York Times reported internal trouble at SpaceX's AI operation. All 11 xAI co-founders had left by March. Even so, the company later built a growing neocloud business, completed its acquisition of Cursor, and released GrokBot.
- According to sources, Musk told employees that SpaceX is falling behind and that renting out its compute pays better than using it. He shared data in a group chat showing how far Grok trails competitors, and asked employees to justify their GPU use.
- In August, Musk reportedly renamed the group chat "Sell Compute because we can't compete." He wrote that "the only thing that matters for competitiveness is revenue per GPU, not benchmarks."
- A knowledge-worker agent called "Digital Optimus" was built with Tesla engineers and initially trained on video games. Musk was reportedly unhappy with its progress, and those engineers were moved to Grok training.
- Gergely Orosz (The Pragmatic Engineer) said SpaceX's only strong model-building group is the Cursor team, and that whether it can keep that team will decide its AI prospects.

### 4. Z.ai's GLM 5.4 and looped transformers
- Z.ai announced GLM 5.4 with two architectural changes. The first is **looped transformers**, which let reasoning happen inside the model weights without generating output tokens. That makes inference more efficient but reduces observability, because users no longer see a full reasoning trace.
- OpenAI had introduced the same approach over the summer for "GPT-6-2 Astra," which caused controversy.
- Z.ai says this lets a 750B-parameter model match a 2–3T-parameter model, which it puts at roughly Kimi 3.1 level.
- The second change is **generalized coding**: the model writes code to produce outputs instead of calling external models. Z.ai's demo was a music video built entirely in code.
- The announcement is a pre-release only. API access will follow a safety audit, and weights will be "released responsibly." No benchmarks were published, which many observers read as a bad sign. Others, including Elvis Saravia, Zephyr and SemiAnalysis, focused on the architecture and expect more looped models and a new phase of the "open model wars."

### 5. Jensen Huang returns, and Trump's role becomes public
- Huang returned to NVIDIA headquarters to applause and said, "Thank you all for the second chance." The host compares this to Sam Altman's 2023 reinstatement, after which things "never quite return[ed] to normal."
- On CNBC, Trump said he "convinced the NVIDIA board" to bring Huang back and had given "enough assurance" about prosecution. He said Huang would not have been reinstated without him. He avoided saying whether he called into the board meeting, but Semafor and CNN both reported that he did.
- CNN reported that Trump acted because he had been "stewing" over the stock market sell-off. It described a weekend pressure campaign by the president and Vice President J.D. Vance. Steve Bannon pointed to Trump's concern about Herbert Hoover and the 1929 crash.
- Tech leaders celebrated, including Elon Musk, Balaji Srinivasan and Gavin Baker. Outside tech the reaction was more skeptical. On MS Now, host Stephanie Ruhle pushed back hard on Jason Calacanis's claim that Huang was "obviously not guilty."

### 6. Public opinion and pressure from Congress
- A YouGov poll found that 54% of Americans, including 61% of Republicans, believe Huang's affair definitely or probably compromised US national security. Newt Gingrich called for congressional investigation.
- In the recent election, 56% of voters called AI and data centers a major factor in their vote. Corruption ranked first, cited as a major factor by 90%. The host argues that Trump's open involvement turns the affair into a possible corruption scandal.
- Huang will testify before the Senate Banking Committee next Thursday. Before that, he and NVIDIA General Counsel Tim Teter will sit for closed-door interviews with three Republican national-security committee chairs.
- Democratic leaders, including Chris Van Hollen and Hakeem Jeffries, promised wide-ranging investigations. These cover chip exports to China, Howard Lutnick, and the Commerce Department, along with export-control language in the NDAA. Jesse Watters suggested the issue could become grounds for impeachment.
- The Commerce Department has now blacklisted Megaspeed as a diversion risk. Critics argue this should have happened back in March, and Derek Thompson questioned whether the pro-Huang "media conspiracy" story is consistent with the administration's own position.

### 7. Market reaction and the backlash against Anthropic's IPO
- **NVIDIA** closed up 31.5%, recovering everything it lost after the ouster but still 30% below its October high. The **Nasdaq 100** rose 6.9%, but remains 4.3% below its level at the resignation and 14.3% below last month's high.
- **Anthropic** stock fell another 1.4% and closed just $4 above its IPO price. Breaking below that level could trigger selling by institutional investors whose mandates require it.
- The Guardian criticized how much wealth the IPO created: an estimated $20B for each of the seven co-founders, and 600+ employees worth over $100M each. Filings confirm each co-founder sold $2B in shares, which was disclosed in advance.
- Critics such as Demetri Kofinas describe the IPO as a grab for exit liquidity at retail investors' expense.

### 8. Why the story keeps going: many competing lenses
The host lists the separate frames through which different audiences read the affair:
- **Accountability:** NVIDIA's code of conduct was set aside for its leader.
- **Executive immunity:** double standards, especially between male and female executives.
- **Media "hit-jobism":** a common view among tech figures.
- **Cronyism:** the president's personal financial interest.
- **"Number-go-up-ism":** propping up markets regardless of the cost.
- **State-capitalist intervention:** compared with the US government taking a 10% stake in Intel.
- **Open vs closed source:** framed as Jensen vs Dario, or NVIDIA vs Anthropic.
- **National security:** people who share this as their top concern still disagree on whether NVIDIA chip sales help or hurt China.
- **Treating influential figures as beyond reproach.**

The host concludes that because any one of these frames can reasonably be someone's main concern, the fight "has legs."

## Key Concepts

- **Riemann hypothesis:** an 1859 conjecture about the distribution of prime numbers, and one of mathematics' most important unsolved problems.
- **Generalized / extended Riemann hypothesis:** broader versions of the conjecture that the claimed method may also resolve.
- **Millennium Prize problems:** seven famous open problems, each with a $1M prize.
- **Lean:** a programming language and proof assistant for writing and machine-checking mathematical proofs.
- **Mathlib:** the community-maintained mathematics library for Lean.
- **P vs NP:** the open question of whether every problem whose solution can be checked quickly can also be solved quickly, now called math's "final boss."
- **Neocloud:** a company whose main AI business is renting out GPU compute.
- **Looped transformer:** an architecture that reuses layers so the model reasons inside its weights without emitting reasoning tokens, gaining parameter efficiency at the cost of observability.
- **Observability (of reasoning):** being able to see a model's reasoning trace to understand what it is doing.
- **Generalized coding:** Z.ai's term for a model writing code as the basis for many kinds of tasks, instead of calling external tools or models.
- **Recurrent depth architecture:** the name SemiAnalysis's meme attributes to OpenAI's and DeepMind's version of the looped approach.
- **Export controls:** US limits on selling advanced chips to China, central to the Huang investigation.
- **Entity List blacklisting:** Commerce Department designation of firms judged to be at significant risk of diverting controlled technology. Megaspeed was added.
- **Exit liquidity:** a pejorative term for public investors buying shares that insiders are selling.

## Summary

The episode presents a moment in which AI is making history and causing turmoil at the same time. On the scientific side, an Anthropic mathematician working with Claude has claimed a proof of the Riemann hypothesis, published only as roughly 17 million lines of Lean. That has raised basic questions about verification, about understanding, and about the role of AI companies in mathematics, though the proof is not yet fully confirmed. Smaller stories point the same way: SpaceX's AI ambitions appear to be giving way to a compute-rental business, and labs are adopting looped transformers that trade observability for efficiency. On the business and political side, Jensen Huang is back at NVIDIA, but President Trump's openly acknowledged intervention has turned a tech and foreign-policy scandal into a possible corruption scandal. Months of congressional hearings are ahead, markets are only partly recovered, and Anthropic's record IPO is increasingly attacked as a liquidity grab. The host's closing message is that the fight to reinstate Huang may be over, but "the battle to recover the AI narrative has barely begun."
