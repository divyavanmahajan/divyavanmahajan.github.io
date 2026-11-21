---
title: Active learning & endangered languages
description: >-
  Linguist Sarah Moeller argues that human-in-the-loop active learning can break
  the annotation bottleneck in documenting endangered languages, speeding up
  linguists rather than replacing them.
pubDate: '2022-05-17'
show: practical-ai
episode: 178
url: 'https://share.transistor.fm/s/1d61dc97'
durationMin: 49
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Sarah Moeller
tags:
  - active-learning
  - endangered-languages
  - low-resource-nlp
  - human-in-the-loop
  - computational-linguistics
draft: false
---
## Thesis

Sarah Moeller, assistant professor of linguistics at the University of Florida, argues that the real constraint in documenting endangered languages is the slow manual work of transcription, morphological analysis and translation. Her goal is a human-in-the-loop system where models learn from linguists' annotations and point them at the words whose correction would help most, which she calls automatic assistance rather than automation.

## Key points

- **Why it matters.** Moeller first met minority-language speakers in Siberia. She says rapid, involuntary language loss correlates with suicide, depression and substance abuse, and cites a Canadian community where a revitalisation programme correlated with lower diabetes rates.
- **Scale of the problem.** Of roughly 7,000 languages, 30 to 90% may be endangered by the end of the century, with about 40% her best estimate. A colleague spent 20 to 30 years analysing a 30,000-word Solomon Islands corpus.
- **The documentation workflow.** Linguists record speech, transcribe it, break words into morphemes and roughly translate each sentence. Existing tools from SIL and ELAN help store analyses but contain no machine learning, she says.
- **Why morphology.** English and Mandarin are morphologically simple, but in Arapaho almost every word equals an English sentence. Moeller sees models' surprises as a discovery tool that steers linguists to rare features.
- **Active learning in practice.** In one language, 3,000 annotated words gave about 30% accuracy. She wants to select perhaps 100 low-confidence predictions, balanced with linguistic knowledge, whose correction lifts accuracy to 40% or more. Field data is noisy, and linguists will need an interface that hides the computation.
- **A virtuous cycle.** More annotated data enables tools in minority languages, which can encourage children to speak them; low-resource techniques also apply to niche genres in English. She mentions Steven Bird's Aikuma app for recording speech on cheap phones.

## Quotes

> "So it's not automated, but it's automatic assistance, I would call it." — Sarah Moeller

> "So in some ways, really, the problem maybe isn't how do we get machine learning models to do this is how do we speed up what the humans are doing?" — Sarah Moeller
