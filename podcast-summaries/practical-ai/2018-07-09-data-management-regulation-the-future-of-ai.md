---
title: "Data management, regulation, the future of AI"
date: 2018-07-09
show: practical-ai
episode: 4
url: "https://share.transistor.fm/s/0744ac6b"
duration_min: 48
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Matthew Carroll", "Andrew Burt"]
description: "GDPR puts a real compliance and explainability burden on data science teams, and Immuta's founders argue that good governance, early legal involvement and data minimisation also make for better data science."
tags: ["gdpr", "data-governance", "regulation", "explainability", "privacy"]
source_transcript: "practical-ai/episodes/2018/07/2018-07-09-data-management-regulation-the-future-of-ai.md"
draft: false
---

## Thesis

Matthew Carroll (CEO) and Andrew Burt (Chief Privacy Officer and Legal Engineer) of Immuta argue that the GDPR is the first major regulation with parts aimed explicitly at AI, and that it places a documentation and explainability burden on data scientists who lack tools for it. Their response is that governance and data science should work together from the start of a project.

## Key points

- **What Immuta does.** Carroll describes Immuta, founded in 2015 and at about 37 people, as a "data control plane" that exposes data read-only to BI and data science tools and lets lawyers write rules that are enforced dynamically as queries run.
- **What the GDPR requires.** Burt says it covers any identifying EU data, including IP addresses. People subject to automated decisions can ask how their data is used and request human review, though he thinks "right to explainability" overstates it: teams must explain broadly how a model works, not every neuron.
- **Purpose-based restrictions.** Burt contrasts the EU's principles-based approach with US sector-specific rules. He calls the GDPR's focus on restricting how data is used, rather than only consent at collection, its strongest point.
- **Who is affected.** Burt names healthcare, finance, transportation and advertising as the first sectors hit. Carroll cites fines of 4% of annual revenue or 20 million euros, whichever is larger, and says the Global 2000 have the most to lose.
- **Practical steps.** Burt argues good governance makes for good data science: document objectives, legal risks and data sources. Carroll says to involve lawyers "early and often" and use only the data needed, giving the example of an x-ray model for boxer fractures that does not need soft tissue.
- **Bias over Skynet.** Carroll worries that firms rushing to compete with Amazon will deploy flawed models, for example denying mortgages in parts of Detroit. Burt warns of a future where no one knows where deployed models got their data. They point to a forthcoming white paper with the Future of Privacy Forum and a Strata New York talk.

## Quotes

> "what makes for good governance actually makes for good data science." — Andrew Burt

> "I'm not worried about Skynet. I'm really not. I'm more worried about we're going to start making bad decisions without understanding the potential repercussions to the direct consumer." — Matthew Carroll
