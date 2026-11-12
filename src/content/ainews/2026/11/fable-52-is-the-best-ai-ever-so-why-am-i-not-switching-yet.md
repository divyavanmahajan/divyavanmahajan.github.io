---
title: Fable 5.2 Is the Best AI Ever. So Why Am I Not Switching Yet?
description: >-
  The talk is an episode of The AI Daily Brief, a daily news podcast and video
  show on AI, hosted by NLW (who also runs the training company Super
  Intelligent and the longer-form history show How We Got Here). The subject is
  Anthropic's release of i...
pubDate: 2026-11-10T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/174972208'
draft: false
---
## Overview

The talk is an episode of **The AI Daily Brief**, a daily news podcast and video show on AI, hosted by **NLW** (who also runs the training company **Super Intelligent** and the longer-form history show *How We Got Here*). The subject is Anthropic's release of its new flagship models, **Fable 5.2** and **Mythos 5.2**, announced the day before recording and arriving in the run-up to Anthropic's IPO.

The central thesis is a tension rather than a verdict: by every available measure Fable 5.2 is the most capable model ever released, yet much of the early community reaction struggles to say *when and where* most people should actually use it. The host's framing question is how much of that ambiguity is specific to Fable 5.2 and how much is simply the condition of frontier models at this capability level — where gains show up in long-horizon, open-ended, scientific and agentic work rather than in the everyday tasks users bring to a chat window. It matters because it marks a shift in how model upgrades deliver value: not as efficiency improvements to existing workflows, but as new capability that users must invent uses for.

Source video: **no URL was provided with this transcript.** The episode is distributed as *The AI Daily Brief* (audio and video) on podcast apps and Patreon; the local source file is `2026-11-10-fable-52-is-the-best-ai-ever-so-why-am-i-not-switching-yet`.

## Prerequisites

- **The current frontier model landscape** — Anthropic's Fable, Opus, Sonnet and Mythos lines; OpenAI's GPT-6 Astra; Google's Gemini 4 Carbon. The episode assumes familiarity with Opus 5.5 as the incumbent daily-driver model.
- **Benchmark literacy** — what Frontier Code, Terminal Bench Science, the Artificial Analysis Intelligence Index, AA Briefcase, and the Remote Labor Index measure, and the difference between *task completion rate* and *ELO-style quality ranking*.
- **Token economics** — per-million input/output pricing, cost-per-task, and the idea of *effort settings* (low → medium → high → extra high → max) as a dial trading cost against capability.
- **Agentic coding workflows** — coding harnesses such as Claude Code, sub-agent orchestration, long-running autonomous runs, and the practice of handing a model a whole project rather than a next step.
- **The "jagged frontier"** — Ethan Mollick's framing that model capability is uneven across tasks rather than uniformly scaling.
- **The "bitter lesson"** — the argument that general methods plus scale outperform hand-engineered domain-specific systems.
- **Context: the SaaSpocalypse** — the Q1/Q2 market narrative that cheap bespoke software built by AI threatens incumbent SaaS vendors.

## Main Points

### 1. On benchmarks, Fable 5.2 raises the bar across essentially every category

- **Coding:** 4 points ahead of GPT-6 Astra (second place) and 3.5 points ahead of Opus 5.5 on Frontier Code.
- **Agentic scientific research:** 6 points ahead of previous leader GPT-6 Astra on Terminal Bench Science 0.1. **Cybersecurity:** Mythos 5.2 roughly 10 percentage points ahead of the previous leader in each case.
- **Non-standard emerging-capability benchmarks** were included alongside the usual suite: robotics — 64.9% on RoboDojo Sim, +25 points over Opus 5.5 (itself already a breakout result); protein design — Mythos 5.2 at 85.1%, 6 points above Mythos 5.1.
- **Artificial Analysis Intelligence Index:** score of 65 — 5 points ahead of Gemini Carbon, 6 ahead of Opus 5.5, 8 ahead of GPT-6 Astra. Tested at three effort settings (max, extra high, high); extra high and high both scored 62, so Fable 5.2 now holds the **top three spots** on the index with three different effort levels. Gains came from science, knowledge and coding; less progress in agentic knowledge work and terminal coding.

### 2. The exception is agentic knowledge work — and it is the crux of the episode

- On **AA Briefcase**, Fable 5.2 was ~5 points ahead of Fable 5.1, Opus 5.5, and Gemini 4 Carbon — but its **ELO score was lower than Opus 5.5's**. It completed *more* tasks without being *better* than its smaller stablemate.
- Artificial Analysis summarised it as: Claude 5.2 improves on Fable 5.1 across capabilities, *but sometimes only to Opus 5.5 levels* — specifically in knowledge work.
- The counterweight is the **Remote Labor Index**, built on real-world contractor tasks, where Fable 5.2 scored **41.3%**, nearly doubling Opus 5.5's 21%.
- *Obsolete* author **Garrison Lovely** called this the most alarming score: when the index launched a year earlier, the best agent completed only **2.5%** of projects. He notes it remains a *leading* indicator — these projects are better-defined than typical white-collar work — but that one model generation doubling end-to-end completion "is a reminder of how fast change can come during exponential growth."

### 3. Pricing fell, but Fable remains expensive and token-hungry

- Per-token prices cut ~20%: input **$8/M** (from $10), output **$40/M** (from $50). Subscribers remain capped at spending half their token allowance on Fable, though Anthropic granted a one-week banked Fable reset to encourage experimentation.
- **Cost per task across the AA suite:** max effort **$26.54** — more than 2× Fable 5.1, 2.6× Opus 5.5, and more than 4× GPT-6 Astra. Extra high: **$14.83** (still 40% more than Opus 5.5 at max). High: **$9.08** (10% cheaper than Opus 5.5 at max).
- **Anthropic's own effort guidance:** medium is the default; high suffices for everyday coding; extra high is for long-running agentic work with measurable outcomes; max is "for finding the ceiling and not recommended for everyday use."
- Early tester **Matt Schumer** argued that not just medium but **low** effort was enough for the vast majority of tasks — implying the real-world cost profile may be far better than headline cost-per-task suggests.

### 4. Anthropic's own showcase points at ambition, not everyday use

- Anthropic reports **90% of its code changes are now written by Claude under human supervision** — a previously-reported figure — with Fable 5.2 added to fix stubborn bugs, optimise performance, and "complete high-value software projects that would otherwise have been too slow or too costly to attempt." Example given: migrating a critical production service from **Python to Rust** for efficiency, reliability and start time.
- The implicit guidance the host draws out: **Anthropic is reserving Fable for ambitious tasks other models can't handle.** Anthropic says the model "exercises strong engineering judgment and can produce high-quality results even from ambiguous requests."
- **The operating-system demo:** starting from an empty folder, the model coordinated **over 1,000 sub-agents for eight days**, writing, testing and reviewing code. Output: a working OS that boots on a laptop, with its own core, disk/keyboard/network drivers, permanent file storage, windows, a login screen, an installer, and built-in cloud functionality.
- Reaction captured the desensitisation effect — AI entrepreneur and YouTuber **Theo**: "Love how Fable 5.2 literally built an operating system and my immediate response is, yeah, and? Crazy how quickly we get desensitized to things."

### 5. The science results appear to be a deliberate emphasis

- **Physics:** two open problems concerning black holes solved. As with recent OpenAI math results, these were largely calculations too laborious for a human scientist even with traditional computational techniques.
- **Biology:** Mythos 5.2 used its protein ability to design a new method for predicting the structure of a **capsid** — the protein shell used in gene therapy — accurately modelling **28 of 34** attempted capsids. Anthropic's claim: biologists could design capsids faster and more cheaply.
- **Mathematics:** Fable 5.2 **fully formalised Fermat's Last Theorem** into a machine-readable proof — 30 hours using 1,000 agents. For comparison, Opus 5.5 got 26% of the way through in 18 hours before it stopped making progress.
- The host judges this emphasis non-accidental. **Chubby on X**: "While we're all focused on Claude Fable 5.2's coding abilities, its work in science and engineering has received far less attention… this is nuts. And at the same time, that's why we need to accelerate… we are still in 2026, and this is still the beginning. Fable 5.2 shows us where we are heading, and 2027 is going to be nuts."

### 6. Robotics suggests the bitter lesson extends to embodiment

- The robotics demo showed the model piloting a **pair of robotic arms**.
- Anthropic: Fable 5.2 "shows substantially improved skills in controlling physical robots, even on tasks it has never explicitly been trained to [do]."
- It **outperformed most models purpose-built to drive robotic arms** — which the host reads as evidence that the bitter lesson applies to advanced robotics too.

### 7. First community impressions: security auditing was an immediate standout

- Consistent with Mythos's origin story, even the commercial Fable 5.2 proved strong on security. **Leander Builds**: "Fable 5.2 in Medium just discovered more than 10 severe security vulnerabilities in my project without asking for it. These issues were created by Opus 5.5 before… highly recommend doing an audit with Fable 5.2."
- **Pavel Hurin's bug-hunt bench** plants known bugs in real work repos. Of **105 planted bugs** across two repos, prior best models mostly found **40–45**; the exception was Sonnet 5.5 Max at **51**. Fable 5.2 found **58**.
- On efficiency, Hurin notes Fable 5.2 "got there with less than half of Sonnet's turns for less money."

### 8. Creative and visual demos showed clear, legible gains

- **3D rendering:** 3D AI explorer **Stefan Vaskovic** re-ran the same castle prompt he had used on Opus 5.5 in September. Fable 5.2 took longer and cost a bit more, but produced radically more detail — a difference obvious even to a lay observer.
- **Video:** **Riley Brown** produced a 60-second ad for Fable 5.2 — zoomed-in visuals, artistic shots, realistic lighting and changing physics — in a single shot, live on stream. Claude Code creator **Boris Cherney**'s reaction: "whoa."
- The host links this to his prior episode arguing **agentic video is real** and worth experimenting with; Fable 5.2 strengthens that case.

### 9. "Ambition" became the watchword — along with not knowing how to spend the capability

- **Ali K. Miller**, an early tester, listed five projects: a water-safety map of 3,100 U.S. cities built from official government data with two demo videos; a new identity plus an entire ADHD-themed YouTube channel designed to earn money; psychological profiles of her stalkers to determine whether any were the same person; a 3D hot-dog-kiosk game as a to-do-list command centre; and 31 personality tests filled out on her behalf with an analysis over time.
- Her verdict: "I trusted it more than any other model I've tested. Unbelievable at handling complexity." But also — "Made some weirdly obvious errors, like colors and units on the water map or overlapping text on a slide, that secondary agents also didn't catch." And: "there is no such thing as a needle in a haystack anymore with this model. And I still feel like I could be more ambitious."
- **Every's vibe check**, titled *Fable 5.2 is a paradigm shift if you know what to do with it*, described a team member building a working video editor combining **Premiere's editing, After Effects' titles and VFX, and Ableton's music mixing**, driven by an AI agent that can run all of it.
- Every's progression of autonomy: "With Opus 5.5, you're still in the loop, checking its work as you go. Fable 5 and 5.1 could take a big task and run with it for hours or days. But Fable 5.2 can take the whole product… This is the first model we've tested that lets professionals build production-grade tools of their own without ever reading the underlying code." Several of the team had **put their most ambitious projects on hold** when October early access ended, expecting a better first pass with less steering.
- The host reports a matching experience with Fable 5's launch: previous models let him *start* many projects; Fable 5 actually *finished* them. He shipped a new AI Daily Brief website and an extraction pipeline in the 48 hours of access he had, then made essentially no updates during the shutdown period.

### 10. The build-your-own-software narrative resurfaces — with its old objection newly in doubt

- Dan Shipper and the Every team are reviving the thesis of professionals building their own software for the work they do — a claim circulating about agentic models for over a year, and the heart of the **SaaSpocalypse** narrative on Wall Street earlier in Q1/Q2.
- The prevailing counter-conclusion had been that the time, cost, and context-switching burden of **maintaining** your own software — even if you could build it — wasn't worth it versus existing SaaS, especially as SaaS vendors evolved alongside the same capabilities.
- Every's early testing leaves them unsure that counter-argument still holds.

### 11. Spikiness is the dominant analytical theme

- **Dan Shipper**: "it's kind of nuts, but it's a spiky kind of nuts. There's a certain kind of task where it's absolutely going to blow your mind and be unlike anything else you've ever tried before. And for everything else, it's just sort of normal. You should actually use Opus 5.5."
- **Ethan Mollick**'s post, *Fable 5.2 and Jagged AGI*, opens by asking whether Anthropic's newest models — and the inevitable competing releases from OpenAI and Google — cross into being artificial general intelligence.
- Mollick found the *character* of failure has changed. Two years ago the jagged frontier meant invented facts or broken arithmetic. Fable's failures were different: "It made a course that was accurate and joyless. It wrote a 182-page paper. It kept coming back to its favorite ideas. And it buried a creative project under rules and approvals." He also noted discomfort at letting Fable reach out to real customers, which exposed how digital his chosen tasks were.
- He concedes these are human failure modes: "I teach at a business [school]. And I've seen talented people in good organizations do every one of these things. If building a bureaucracy disqualified you from general intelligence, a lot of us would be in trouble."

### 12. Mollick's diagnosis: the missing capability is taste, not accuracy

- His answer is "**almost AGI**." The decisive gap: "the AI did not notice these problems itself. It did not see that the course was a slog, or that it had tied itself in knots with its own rulebooks."
- This was **not a lack of checking**. Fable put critics, fact-checkers or judges on nearly every project — "but those checks found errors and added fixes. None of them asked whether the work was too long, too repetitive, or no fun."
- "Knowing when your own work is not good enough is a large part of what makes someone an expert, and it's the part Fable does least reliably." He would not trust it to run a business alone, "even though its plan would have impressed me coming from a team of my MBA students."

### 13. The host's own tests: impressive execution, poor judgment about what humans find interesting

- He ran a version of Mollick's prompt — asking the model to create the most impressive demonstration of its own capabilities — in two places: the plain Claude tab, and a Claude Code instance with access to tools, systems and skills.
- **The plain-interface result underwhelmed him.** The model chose things hard to make but easy to verify, published on a website for people to check themselves: a sentence that correctly counts every one of its own letters; a piece of music that harmonises with itself played backwards; a QR code encoded from scratch. His critique: most people, himself included, don't understand *why* these are difficult, so the intellectual and emotional impact is low; some (the QR code) don't feel far from prior capability; and the insistence that people verify it themselves reads as a lingering idea of AI from a couple of years ago.
- **The coding-harness result was far better** — a three-minute film the model noted was not a recording. In Fable's words: "The picture is calculated frame by frame in your browser. The score is synthesized from sine waves while you watch. The narration is the one thing borrowed, a text-to-speech voice, and the only file this page loads. Every letter here, this sentence included, is drawn with the film's own alphabet. The source holds no fonts, no images, no audio samples, and no libraries."
- **A striking convergence:** from essentially the same prompt, his output closely mirrored Mollick's published result — down to the same closing twist. On Mollick's site, the first letter of every sentence in the script spells out his blog's name, *One Useful Thing*; on the host's test, it spelled out "be amazingly clever about this," the prompt's last line.

### 14. The content-work test: a real gap found, no sense of whether it mattered

- He asked for an AI Daily Brief episode idea built around a website using original research and data, explicitly flagging it as a capability test and asking the model to be impressive, with execution to follow.
- **The first pitch**, which he calls "unfathomably boring and irrelevant," was *Announced Is Not Available*: time every major AI launch since ChatGPT from announcement date to the date each customer type could use it, published as a site. The model's argument — coverage runs on announcement dates while people and companies live on availability dates, and no one appears to have measured the gap — cited September's GPT-6 Astra launch, which Sam Altman apologised for because paying subscribers couldn't access it immediately.
- **Why it failed:** nobody cares when a 2024 model was announced versus released; people care almost exclusively about models available to them right now. And with few exceptions, the labs currently driving the conversation — essentially Anthropic and OpenAI, with Google possibly returning — no longer have meaningful announce-to-access delays. The model found a genuine factual gap in the coverage with **no ability to judge how irrelevant the resulting episode would be**.
- **Two backup ideas were better:** what America's 25 biggest employers told investors about AI and headcount last quarter; and every dated AI prediction that has come due, graded with each forecaster's average miss. The earnings idea was less interesting because aggregating and organising public earnings statements has been within model reach for years — doing it better isn't a net new capability. The prediction-grading idea was more interesting for requiring thoughtfulness and subjectivity in assigning grades.
- He built the third idea and found it genuinely interesting, "but not necessarily, again, in a shocking new capability way… I'm fairly certain that if I had Opus 5.5 do that same task, it would do roughly as good a job."

### 15. Where the capability actually lands: opportunity AI, and possibly games

- Continuing a pattern he sees across the year: this is a model that asks users to push themselves — "**opportunity AI, not efficiency AI.** Not to just improve what we already do, but to do things that weren't possible before." That was the thesis of his video episode days earlier, and he reads Riley Brown's demo as proof.
- He is usually sceptical of 3D-rendering and game demos as model evaluations, given how few people have that use case — but reports a qualitative change: Fable 5.2 appears able to build **working game mechanics**, not just "the homunculus of games that look good but don't actually play or don't play well."
- **Sholto Douglas** (Anthropic): "Fable 5.2 is the first model that passes my bar for seriously fun and beautiful games." **Matt Schumer** had it build a Harry Potter-themed, Fortnite-style battle royale playable on Spawn — with other people actively playing it during the host's own testing.
- The analogy he draws: just as agentic coding wasn't only about how existing coders work, and agentic video isn't only about existing video editors, the ability to build complete games may change what games are used for and who builds them. "For the first time, it seems like the capability set is at a point where it's worth asking, instead of making a deck or a website, should you make a game?" He expects this to require stretching ideas even further than video did.

### 16. The most common critique: for most uses, Opus 5.5 is still the better choice

- Engineering manager **Gigam**: "I've never really liked fable models. There's not much point to them, they're stubborn, weighed down by guardrail filters, have poor taste, and are expensive, token-hungry, and in some areas worse than the Opus lineup. This one is no exception. In my view, the new Fable 5.2 makes no sense, and I think I understand why they called this release 5.2 rather than 5.5. A revolutionary leap like the jump from Opus 5 to 5.5 just didn't happen."
- **Theo** echoed the practical confusion: "It's been under an hour and I'm already struggling with should I use Opus 5.5 or Fable 5.2."
- **Daisy Holman**'s heuristic in reply: "use Opus 5.5 for more specific tasks where you're already pretty sure you know what you want. And use Fable 5[.2] for more creative tasks when you're not entirely sure what you want." The host notes this hasn't matched his own experience yet but is worth testing.

### 17. Practical tips for getting value out of Fable 5.2

- **Every's** guidance, echoed by Anthropic staff: this is a model you hand big **end-to-end projects** and then walk away from.
- **Alex Albert** (Anthropic) — "On big, open-ended work, it feels like a major step above Opus 5.5" — with four tips: ask the model what's wrong with your idea *before* it builds anything (it's good at brainstorming and will push back); state up front where it needs your approval, such as deletions, and make clear the rest is its call; start at medium or high effort and reserve extra high for the hardest problems; and most importantly, **give it a whole project rather than a next step and let it run for hours**.
- **Simon Willison**'s standing reminder: Anthropic updates its prompting guide with every model release. The Fable 5.2 example concerns **code ownership** — Anthropic writes that the model "responds closely to what the prompt says about who owns the code it works on." In their testing on small coding tasks, when the prompt said nothing about ownership or framed the codebase as someone else's, the model **added to existing structure even when that repeated existing code**, and **reported nearby problems instead of fixing them**. When told the codebase is its own, it "often merges repeated code and makes related fixes without being asked."

### 18. Closing observation: evaluation now takes weeks, not hours

- "We're at the point where a new model release cannot be digested in hours or even days. Or in some cases even weeks."
- Precedent: with Opus 5.5 it took **three or four weeks** for people to understand what made it different, even though many sensed from the start it was a significant release.
- The host expects the same for Fable 5.2 — that there is something there, but it will take time and experimentation to identify. He commits to continued testing and sharing results.

## Key Concepts

- **Fable 5.2** — Anthropic's new flagship model, released ahead of the company's IPO; the strongest model on nearly every benchmark but with a spiky, long-horizon-oriented capability profile.
- **Mythos 5.2** — The security-focused sibling model released alongside Fable 5.2, roughly 10 percentage points ahead of prior leaders on cybersecurity benchmarks.
- **Opus 5.5** — The incumbent, smaller, cheaper Anthropic model that most reviewers still recommend as the default for specific, well-scoped tasks.
- **Effort settings** — A per-request dial (low / medium / high / extra high / max) trading cost and token consumption against capability; Anthropic recommends medium as default and max only for ceiling-finding.
- **Remote Labor Index** — A benchmark of real-world contractor projects; went from 2.5% best-agent completion a year ago to 21% (Opus 5.5) to 41.3% (Fable 5.2).
- **AA Briefcase** — An agentic knowledge-work benchmark where Fable 5.2 completed more tasks than Opus 5.5 but scored a lower ELO, i.e. more volume without higher quality.
- **Artificial Analysis Intelligence Index** — A composite capability index on which Fable 5.2 scored 65 and occupies the top three positions via three different effort settings.
- **Frontier Code / Terminal Bench Science / RoboDojo Sim** — Benchmarks for coding, agentic scientific research, and simulated robotic control respectively.
- **Jagged AGI** — Ethan Mollick's framing that current models are near-general but unevenly so, excelling and failing unpredictably across tasks.
- **The jagged frontier** — The older, related idea that model capability varies sharply by task; the episode's update is that failures have shifted from factual errors to failures of taste and self-assessment.
- **The bitter lesson** — The principle that general, scaled methods beat hand-engineered specialist systems; invoked because Fable 5.2 beat most purpose-built robotic-arm models.
- **Sub-agent orchestration** — Delegating a large task across many parallel model instances; Fable 5.2's OS build used over 1,000 sub-agents across eight days, and the Fermat's Last Theorem formalisation used 1,000 agents over 30 hours.
- **Capsid** — The protein shell used in gene therapy; Mythos 5.2 designed a new structure-prediction approach, accurately modelling 28 of 34 attempted.
- **Opportunity AI vs. efficiency AI** — The host's distinction between using AI to do newly possible things versus doing existing things faster; Fable 5.2 is framed as the former.
- **SaaSpocalypse** — The earlier-in-2026 Wall Street narrative that AI-built bespoke software threatens incumbent SaaS, now partially revived by Every's testing.
- **Code ownership prompting** — The finding that telling Fable 5.2 it owns the codebase makes it refactor and fix proactively, whereas framing the code as someone else's makes it append and merely report problems.
- **Bug-hunt bench** — Pavel Hurin's evaluation planting known bugs in real repositories; Fable 5.2 found 58 of 105 versus a prior best of 51.

## Summary

Fable 5.2 and Mythos 5.2 arrive as unambiguously the most capable models yet released — leading on coding, agentic science, cybersecurity, robotics and protein design, topping the Artificial Analysis index at three separate effort settings, nearly doubling the previous best score on the Remote Labor Index, and demonstrating feats like an operating system built from an empty folder by a thousand sub-agents and a full machine-readable formalisation of Fermat's Last Theorem. Yet the episode's argument is that raw capability no longer translates cleanly into obvious utility. The gains concentrate in long-horizon, open-ended, ambitious work — the kind you hand over whole and walk away from — while in everyday knowledge work the model is sometimes no better than the cheaper Opus 5.5 and often more expensive, more stubborn, and more annoying to use. Reviewers converge on "spikiness": astonishing on a narrow class of tasks, merely normal elsewhere. The specific missing capability, in both Ethan Mollick's analysis and the host's own content-work tests, is not accuracy but taste — Fable 5.2 deploys critics and fact-checkers that catch errors yet never ask whether the work is too long, too repetitive, or not worth doing at all, so judgment about what humans will actually find valuable still falls to the user. The host's practical conclusion is that this is an *opportunity* model rather than an *efficiency* one: the way to extract value is to attempt things that weren't previously possible — agentic video, playable games with real mechanics, professional-grade bespoke software — give the model whole projects on medium or high effort, tell it it owns the code, and accept that, as with Opus 5.5, it will take weeks of collective experimentation before anyone really knows what this model is for.
