---
title: Why a New Class of AI “Judgment Models” Could Have Big Business Implications
description: >-
  The episode argues that a genuinely new category of AI model — what the host
  calls AI judgment models — has arrived, and that it fills a gap LLMs have been
  badly stretched to cover. Rather than generating text, these models answer
  narrowly defined...
pubDate: 2026-09-16T00:00:00.000Z
type: episode
tags:
  - ai-daily-brief-podcast
url: 'https://www.patreon.com/posts/169738513'
draft: false
---
No filesystem access was granted outside the working directory in this session, so here is the document as output rather than a written note.

Two notes on the source: the transcript's `URL` and `Channel` fields were empty, so no video link could be included without fabricating one. The transcript also contains an ASR looping artifact — the Salesforce/Dreamforce paragraph repeats verbatim roughly sixty times in the headlines segment — treated below as a single occurrence.

---

# Why a New Class of AI Judgment Models Could Have Big Business Implications

## Overview

The episode argues that a genuinely new category of AI model — what the host calls **AI judgment models** — has arrived, and that it fills a gap LLMs have been badly stretched to cover. Rather than generating text, these models answer narrowly defined questions with calibrated probabilities, categories, or scores, which surrounding software then uses to route, rank, flag, or proceed. The specific model prompting the discussion is **Jev**, from a company called **TypeSafe**.

The host's claim for why this matters: an enormous share of office work consists of reading something and deciding what happens next. That work is currently either hard-coded into brittle rules or handed to LLMs, which are slow and expensive for the job and return prose where the calling program expects a number. A model purpose-built for that decision layer changes what can be economically embedded into automated systems — not as a replacement for LLMs, but as a distinct tier of the model stack.

- **Speaker:** the host of *The AI Daily Brief*, a daily podcast and video on AI news and discussion. The host does not name himself in this transcript; all other named individuals are quoted sources.
- **Source:** *The AI Daily Brief*, episode dated 2026-09-16. Video URL not provided with the transcript.
- **Transcript caveat:** the model name is rendered variously as Jev, Dev, Jeb, and Jeff by the transcription; "Jev" (used in both the intro and the founder's own quoted post) is used throughout. Salesforce's model name is given as **COA** as heard, and may be misrendered.

## Prerequisites

- **Large language models and their economics** — that LLM inference is priced and timed per token, and that output token generation dominates both.
- **Classification and regression in classical machine learning** — supervised models that output a label or a number, and the operational cost of labelling data, training, and hosting a model.
- **Calibration and probability** — what it means for a model's stated 0.9 to correspond to an actual 90% frequency, as distinct from a confident-sounding assertion.
- **Structured output and API contracts** — why a program expecting a float between 0 and 1 breaks when handed prose.
- **Agentic workflows and orchestration** — the idea of a "model stack" in which different models handle different stages of a task.
- **Enterprise workflow basics** — ticket routing, lead scoring, escalation, and approval chains, which supply most of the worked examples.
- Useful context: the ongoing AI safety and regulation debate, and the distinction between open-weight vertical fine-tunes and frontier general models.

## Main Points

### 1. The safety debate is being deliberately demoted to headlines

- The host states explicitly that, absent something seismic, AI safety discourse is moving into the headlines segment and out of the main episode.
- **Mark Zuckerberg**, posting on X, argued that pacing is the responsibility of individual labs rather than a matter for collective action, resting on two claims: that people don't want to use misaligned agents, so labs have a natural incentive to align them; and that labs face significant liability if their models cause harm.
- Zuckerberg cited Meta delaying the release of **Muse** by several months for safety work — "We didn't call for everyone else to do this before we would. We just did it" — and supported independent evaluators as best practice rather than regulation. He closed by framing the commitment of "the significant majority of compute towards serving people rather than racing towards recursive self-improvement" as a safety measure Meta has made and others could.
- Reactions split into two camps: agreement on the merits (Joseph Carlson, Matthew Berman, Bill Ackman, who called it "the proper approach to AI development"), and objection on standing rather than substance — Kevin Roos of *Hard Fork* wrote that whatever one's politics, "the person best suited to protect us against the harms of powerful new technology is Mark Zuckerberg."

### 2. The political coalition forming around AI is about agency, not existential risk

- **Bernie Sanders** and **Steve Bannon** shared a stage at the Future of Life Institute's Pro-Human Assembly in Washington, calling for human-centric AI regulation. Sanders: decisions must be made by "the people of this country and not just a handful of oligarchs." Bannon: "we can never trust what an oligarch says."
- The host argues the alliance is less surprising than it looks: both the 2016 Sanders campaign and Bannon's architecture of the first Trump administration trace to populist anger at the post-GFC financial landscape and the lack of accountability that followed.
- The event's framing was class struggle rather than X-risk. Across multiple speakers the risk named was not cybersecurity or bioterrorism but a lack of agency in determining the shape of the future — echoing journalist **Jasmine Sun**'s August reporting that data-centre opposition centred on lack of control rather than electricity, water, or noise.
- Texas Democrat **Greg Kassar**, sponsoring Sanders' superintelligence bill: "We ban AI systems that are too powerful for humans to control."
- The host's read: the debate has entered a phase of negotiating the relationship between citizens, governments, and labs, and the resulting confusion — Glenn Beck signing the pro-human declaration while disagreeing on data centres — is a sign of progress toward specificity and nuance.

### 3. Dreamforce: safety positions, and two practical Salesforce announcements

- At Salesforce's Dreamforce, **Dario Amodei** said he was putting forward standards the industry could organise around; **Sam Altman** expressed confidence in his company's and the industry's ability to proceed safely; **Jensen Huang** took the Zuckerbergian line — "run as fast as you can, but if you feel at any given point in time the company's out of control or the product's not going to be safe, take a pause." **Marc Benioff** said every company has a responsibility to uphold ethical standards.
- Salesforce released its first in-house model in some time, **COA** (as transcribed), a fine-tune of NVIDIA's **Nemotron** designed to handle sales management within the CRM. The host reads this as evidence of open source's role in enabling narrow vertical models in the enterprise.
- Salesforce also unveiled **AI Force**, an umbrella for connectors letting third-party agents reach Salesforce data — reinforcing a move toward headless, platform-agnostic software in which any agent can become the interface.

### 4. Jev and RLCD: a different training objective, not a better LLM

- **Diogo Almeida** announced Jev on X, writing that after co-inventing ChatGPT he kept asking why superhuman chat models had not led to AGI, and had spent two years in stealth on **RLCD — Reinforcement Learning for Calibrated Decisions**. (The co-invention claim is his, as quoted.)
- His headline numbers: **20–200× faster, 40–400× cheaper, with output tokens free**; "frontier composable intelligence optimized for decisions… the shortest path to AI-based economic revolution."
- The host concedes such figures would warrant scepticism for another LLM, but argues the comparison doesn't apply: TypeSafe describes a new stack built entirely for automation, comprising a new model architecture, a parallel sampler for efficiency, and the RLCD training method.
- The stated objective difference is the crux: existing LLMs optimise for **human preference** — write-ups and chat responses human raters prefer. TypeSafe's "System 1" models optimise for **calibrated decisions** — answers with epistemically honest probabilities.

### 5. What a judgment model actually returns

- **Mike Taylor** of *Every* describes it as a smart if-then statement determining what happens next in a workflow. Asked "does this customer sound angry?", Jev might answer **0.9** — an estimated 90% probability of yes. Supplied with user-defined categories (annoyed, irritated, offended, furious, enraged), it might return **60% furious, 10% enraged**.
- The software then acts on the number: 0.9 escalates the concern to a manager; 0.1 deprioritises it. A chatbot, by contrast, replies with "You're absolutely right, this customer does sound very angry. Would you like me to compose a draft email response…" — which crashes a program expecting a float.
- **Michael Lee** frames the opening: a class of decision-making suited neither to dumb, unintelligent code nor to slow, expensive LLMs.
- The trade-off is explicit and the host stresses it: **Jev does not generate text.** It is not a general replacement for LLMs, but a replacement for one category of work LLMs have been "square peg mashed into a round hole" to do.
- TypeSafe's documentation recommends decomposing complex decisions into small questions and recombining the results in code.

### 6. Where it fits in business workflows

- The target is the large fraction of office work that consists of reading something and deciding what happens next: Does this message need a response? Which department should handle it? Is this a bug report or a feature request? Does this draft make a claim its source doesn't support? Is this routine enough to automate, or should someone review it? These are judgments about meaning, often hard to express as fixed rules.
- **Customer support:** judge "is the customer frustrated and have previous replies failed to address it?" — software then routes, raises priority, or requests human review.
- **Sales:** judge "is this a buying inquiry? does the prospect fit the product? are they requesting a meeting?" — software sorts inbound leads and assigns follow-up.
- **Marketing and editorial:** judge whether copy meets specific style rules or whether an offer is clear — software flags passages for revision pre-publication.
- **Perengrat** generalises the case: "Most software is ultimately a giant tree of if this, do that… Jev is basically asking, what if those if statements could understand messy human context?" Candidate domains named: fraud and risk, support routing, moderation, PR and QA automation, lead scoring, compliance, workflow orchestration, and agent routing.

### 7. Composition with LLMs, and cheap judgment as continuous checking

- YC founder **Nathan Fleury** sketches the composition pattern. Described as a pipeline:

  ```
  LLM  ──proposes options──▶  Jev  ──decides (probability/category)──▶  code executes
  ```

- The host's worked example. A customer writes: *"This is the third time I've contacted you, we still can't export our reports, and our renewal is next week."* The workflow asks several questions **concurrently**, then recombines them in code:

  ```
  incoming message
        │
        ├─▶ Q1: is the customer describing a product problem?
        ├─▶ Q2: does this indicate repeated unsuccessful support?
        ├─▶ Q3: is a commercially significant deadline approaching?
        └─▶ Q4: which team is best equipped to help?
                    │
                    ▼
        combine with account data (actual renewal date)
                    │
                    ▼
              escalate the ticket
                    │
                    ▼
        generative model drafts the reply
                    │
                    ▼
        Jev re-checks the draft:
          • does it acknowledge the repeated contacts?
          • does it address the export problem?
          • does it promise anything unsupported by the information provided?
  ```

- The economic point: cheap judgment makes **frequent** checking practical. When a check costs noticeable time or money, teams run it on selected cases or once at the end. When it is fast and cheap enough, it can run on every incoming request, after each draft revision, across many candidate documents, and before an agent takes a consequential step.

### 8. The linter analogy, and the benchmark Mike Taylor ran

- Taylor gave Jev the text of all **27** of his articles plus **10** deliberately AI-styled counterpoints — **37 documents** — and asked the same **21 questions** concurrently across all of them, checking for AI tells: does the text repeat an idea without adding evidence? does it force a symmetrical both-sides argument? does it over-explain a straightforward point?
- Result: in **under 0.7 seconds**, Jev "read" all 37 documents and answered all 21 questions for each — **777 judgments for an estimated quarter of a cent**. Taylor's gloss: fast and cheap enough to AI-check everything everyone at your company has ever written and get results back instantly.
- His analogy is a **code linter for knowledge work**: as a linter instantly flags syntax errors, catches bugs, spots bad patterns, and enforces stylistic consistency, a judgment model turns fuzzy tasks into clear structured answers fast enough to serve the same function. "Give Codex or Claude access to Jev and a list of questions, and it can quickly check its own work for problems you've told it to avoid."

### 9. A post-LLM interface onto pre-LLM machine learning

- **Matt Stockton** offers a reframing: lots of business problems are classification or regression problems, but many companies don't recognise them as such and solve them with people and process instead of technology.
- The LLM era pushed those companies toward "maybe we can use AI for that" — good insofar as manual work gets automated, bad insofar as an LLM is often the wrong tool and possibly worse than classical ML at the task.
- Classical methods, however, require labelling data, training a model, and hosting it somewhere — not as easy as calling an LLM API, and dependent on organisational awareness and willingness to invest.
- Stockton's conclusion, which the host endorses without pushing the analogy too far: Jev can be seen as **a UX that brings LLM-style interaction patterns to classical ML techniques**.

### 10. The multiplayer case: judgment at the handoff

- Individuals can use judgment models for personal tooling — sorting an inbox against their own priorities, checking drafts against an editorial rubric, ranking saved articles against research interests, flagging commitments in meeting transcripts.
- But the host argues the technique shines in teamwork, which happens through small judgments about who needs to know, who should act, and whose approval is required. An agent serving one person gets far on that person's preferences; an agent operating across a team must understand the relationships between people's work: Who owns this? Whose work does this affect? Is someone waiting on this decision? Does this promise create an obligation for another team? Can the current owner decide, or does this need broader agreement?
- **The interesting unit of work becomes the handoff.** Example: a salesperson tells a customer, *"We should be able to support that integration before your renewal."* To the salesperson's personal agent this is simple — update the record, draft a follow-up, set a reminder. Inside the organisation, the same sentence means a route to securing the renewal (sales), a possible delivery commitment on uncertain work (engineering), a potential roadmap change (product), and an expectation to manage (customer success).
- A multiplayer agent would need to recognise the sentence as a possible cross-team commitment; a judgment model assesses the specific questions — does this imply a delivery promise? is the promise outside the speaker's authority? does it conflict with the supplied roadmap? is there evidence the responsible team agreed? The larger system then creates a proposed commitment, identifies the necessary owners, and requests the missing decisions.

### 11. Costs, benefits, and what the host will be watching

- **The cost:** the category is incomplete by definition. A judgment model cannot do all the work generative AI currently does; it must be part of a more complex model architecture — the model stack the show has been discussing for months.
- **The benefit:** because judgment intelligence can be applied so inexpensively, it can be integrated far more deeply into the automated systems being built.
- The host's caveat: this is day one of a very new concept, from a competent team that spent two years on it, and it needs to be seen in practice. His impression on digging in is of something "both important and obvious — the type of thing that once it exists, we will be surprised in the future that we didn't have it for so long."
- He says he will keep watching for examples of use and for where companies run into challenges building these systems.

## Key Concepts

- **AI judgment model** — a model that returns probabilities, categories, or scores for narrowly defined questions rather than generating text.
- **Jev** — TypeSafe's first judgment model, described as the first of a class of "System 1" models optimised for decisions rather than prose.
- **TypeSafe** — the company behind Jev, which built a new stack (architecture, parallel sampler, training method) focused on automation.
- **RLCD (Reinforcement Learning for Calibrated Decisions)** — TypeSafe's training method, optimising for epistemically honest probabilities instead of human-preferred responses.
- **Calibrated decision** — an answer whose stated probability is meant to honestly reflect likelihood, as opposed to text a human rater would prefer.
- **System 1 model** — TypeSafe's framing for fast, cheap, judgment-oriented models, positioned against deliberative text generation.
- **Parallel sampler** — the component TypeSafe credits for maximum efficiency in producing many judgments at once.
- **Decision decomposition** — TypeSafe's recommended practice of breaking a complex decision into small questions and recombining results in code.
- **Linter for knowledge work** — Mike Taylor's analogy: a check fast and cheap enough to run continuously over prose, as a code linter runs over source.
- **Model stack** — an architecture combining different model types (generative, judgment, classical) for different stages of a task.
- **Multiplayer agent** — an agent operating across a team, which must model relationships between people's work rather than one person's preferences.
- **Headless software** — Salesforce's direction under AI Force: data and function exposed via connectors so any agent can become the interface.
- **COA** — Salesforce's in-house model (name as transcribed), a fine-tune of NVIDIA's Nemotron for sales management within the CRM.
- **Nemotron** — NVIDIA's open model family, here the base for a narrow vertical enterprise fine-tune.
- **AI Force** — Salesforce's umbrella initiative for connectors granting third-party agents access to Salesforce data.

## Summary

The episode's argument is that after four years in which "AI" has been nearly synonymous with large language models, a structurally different kind of model has appeared that is worth attention precisely because it is not another LLM. Jev, from TypeSafe, is trained by reinforcement learning for calibrated decisions rather than human preference, and it returns probabilities, categories, and scores instead of text — making it, by its founder's claims, 20–200× faster and 40–400× cheaper, with output tokens free. The host argues that this targets a real and large gap: the enormous volume of business work that consists of reading something and deciding what happens next, work too fuzzy for hard-coded rules and too routine to justify an LLM's latency and cost, where an LLM's prose output also breaks the calling program. The honest limitation is that judgment models cannot replace generative models; they are one tier in a stack, composed as *LLM proposes, judgment model decides, code executes*, and useful for continuously checking generative output because checking has become cheap enough to run everywhere. The host is most interested in the multiplayer implication — that coordination across teams is itself a stream of small judgments about ownership, obligation, and authority, exactly the shape of question a judgment model answers. He closes with measured enthusiasm: it is day one, the claims need to be tested in practice, but the category has the feel of something that, once it exists, will seem obvious in retrospect.
