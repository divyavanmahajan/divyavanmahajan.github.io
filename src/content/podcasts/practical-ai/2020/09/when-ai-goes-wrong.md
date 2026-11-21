---
title: When AI goes wrong
description: >-
  Existing laws already create AI liability, and neither cyber incident response
  nor model risk management covers AI failures, so teams need an AI-specific
  incident response plan before something breaks.
pubDate: '2020-09-14'
show: practical-ai
episode: 105
url: 'https://share.transistor.fm/s/3dd48eb7'
durationMin: 59
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Patrick Hall
  - Andrew Burt
tags:
  - ai-incident-response
  - ai-regulation
  - model-debugging
  - algorithmic-bias
  - responsible-ai
draft: false
---
## Thesis

Andrew Burt and Patrick Hall of BNH.ai, a Washington, D.C. law firm run jointly by lawyers and data scientists, argue that the hardest AI problems are now legal, ethical and policy problems rather than technical ones. Because AI scales decisions in volume and speed, it also magnifies bias, privacy and security failures. They make the case for an AI incident response plan prepared before something goes wrong.

## Key points

- **Frameworks without teeth.** Burt cites AlgorithmWatch's "Paper Tigers" study of more than 100 ethical AI frameworks and says there is a chasm between such aspirational documents and the teams that must implement them.
- **Four incident types.** Hall, who says he sees one or two AI incidents a week, groups them into discrimination, privacy, security, and "computer says no" systems that offer no appeal. He points to COMPAS and the UK A-levels grading scandal as process failures rather than interpretability failures.
- **Debug models like software.** Hall says data scientists get a pass on basic software quality. He recommends sensitivity and residual analysis, security audits and red teaming, discrimination testing and simple benchmark models.
- **Old laws still apply.** Burt says there is no national AI law, but discrimination, privacy, security, negligence and product liability laws already apply. Hall says long FTC and FINRA guidance documents telegraph future regulation.
- **Why a new checklist.** Drawing on his FBI cyber incident response training, Burt says a traditional checklist would miss, for example, an Apple-Goldman-style credit model discriminating against hundreds of thousands of people. Hall adds that model risk management under the Federal Reserve's SR 11-7 also leaves gaps.
- **Left of boom.** Both argue that preparing is cheap and responding is expensive. Whitenack adds that teams who overwrite one model file cannot tell which model made which decision. Burt hopes for proactive best practices, while Hall expects a bumpier road with stricter regulation.

## Quotes

> "the biggest problems with AI and machine learning, in my view, are no longer technical." — Andrew Burt

> "there's no such thing as responsible AI or trustworthy AI without basic software best practices" — Patrick Hall
