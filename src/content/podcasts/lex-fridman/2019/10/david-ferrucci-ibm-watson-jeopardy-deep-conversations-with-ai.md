---
title: 'David Ferrucci: IBM Watson, Jeopardy & Deep Conversations with AI'
description: >-
  David Ferrucci explains how IBM Watson won Jeopardy through engineered search,
  scoring and machine-learned fusion, and argues the harder goal is AI that
  shares frameworks and explains its reasoning to humans.
pubDate: '2019-10-11'
show: lex-fridman
url: 'https://lexfridman.com/david-ferrucci/'
youtube: 'https://www.youtube.com/watch?v=Whtt2H5_isM'
durationMin: 145
hosts:
  - Lex Fridman
guests:
  - David Ferrucci
tags:
  - ibm-watson
  - question-answering
  - explainable-ai
  - knowledge-representation
  - ai-history
draft: false
---
## Thesis

David Ferrucci, who led the IBM Watson Jeopardy team and now runs Elemental Cognition, tells Lex Fridman that prediction alone is only one form of intelligence. For people to accept a machine as intelligent, it has to explain its answers in terms of frameworks humans share. Watson deliberately did not attempt that; it was a practical engineering system, and Ferrucci sees the next challenge as building machines that act as thought partners.

## Key points

- **Two kinds of intelligence.** Ferrucci separates pattern-based prediction, which he likens to what machine learning does, from reasoning that can be explained and justified. A system that predicts well but cannot explain itself is, in his words, an "alien intelligence".
- **Getting Watson approved.** IBM executives turned down a Jeopardy challenge in 2004 and 2005, when Ken Jennings was on his winning streak. Ferrucci argued for it at the end of 2006 after a feasibility study, committed to three to five years, and delivered in four.
- **The architecture.** Watson ran offline on roughly 2,000 to 3,000 cores with its whole pre-analysed corpus in memory, including Wikipedia and the equivalent of millions of books. Ferrucci says the answer was present in that corpus for only about 85% of questions. Watson analysed the question, ran parallel searches, generated thousands of candidate answers and applied hundreds of scorers, aiming to answer in under three seconds.
- **End-to-end discipline.** A component was added only if it improved end-to-end question-answering accuracy. Machine learning combined all the scores, so teams could work independently.
- **Statistics versus deduction.** Ferrucci recounts doctors giving a 98% statistical estimate that his father was brain dead. He refused to sign a do-not-resuscitate order, and about 24 hours later his father was sitting up. He uses the story to argue for reasoning about the specific case when a statistical model is not good enough.
- **Risks and timelines.** Ferrucci's main worry is giving machines too much leverage, such as amplifying persuasion. He guesses general AI is closer to 20 years away than 10, but not centuries.

## Quotes

> "I said if we if we need some fundamental formula that breaks new ground and how we understand language we're screwed" — David Ferrucci

> "we can create the super parrot what I mean by the super parrot is given enough data a machine can mimic your emotional response" — David Ferrucci
