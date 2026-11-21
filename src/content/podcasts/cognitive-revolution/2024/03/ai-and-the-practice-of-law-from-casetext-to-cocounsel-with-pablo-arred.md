---
title: >-
  AI and the Practice of Law: from CaseText to CoCounsel, with Pablo Arredondo,
  VP of CoCounsel
description: >-
  Pablo Arredondo argues that in law reliability decides everything, so
  CoCounsel runs on GPT-4, ships only heavily tested skills and stays a tool for
  lawyers, not a replacement.
pubDate: '2024-03-14'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/ai-and-the-practice-of-law-from-casetext-to-cocounsel-with-pablo-arredondo-vp-of-cocounsel/
youtube: 'https://www.youtube.com/watch?v=pfMCtu_ppno'
hosts:
  - Nathan Labenz
guests:
  - Pablo Arredondo
tags:
  - legal-tech
  - gpt-4
  - rag
  - llm-evaluation
  - enterprise-ai
draft: false
---
## Thesis

Pablo Arredondo, cofounder of Casetext and VP of CoCounsel at Thomson Reuters (which acquired Casetext), traces legal research from citators to BERT-based semantic search to GPT-4. He argues that in law being right matters more than anything, so the team uses GPT-4 for almost every task, tests exhaustively before shipping, and sells CoCounsel as a tool for lawyers rather than a substitute for one.

## Key points

- **From citators to soft citations.** Arredondo recounts Simon Greenleaf's list of overruled cases, then Shepard's and KeyCite. Casetext's first product borrowed Spotify-style "soft citation" patterns to suggest cases a brief had missed.
- **BERT and Parallel Search.** Casetext trained Google's BERT on US common law to detect overruling language, then built Parallel Search, which matched a full sentence to analogous cases with no shared keywords, freeing lawyers from the "keyword prison".
- **GPT-4 pivot and testing.** He co-authored the study in which GPT-4 passed the bar exam. The company pivoted around GPT-4, created trust teams to find failures, and launched with only a subset of its roughly 16 beta skills; the timeline skill was pulled.
- **Architecture choices.** No fine-tuned GPT-4, though the team contributed RLHF in alpha testing. Casetext keeps its homegrown common-law embeddings and domain-specific chunking that keeps transcript questions with their answers. On 3 million-document reviews, GPT-4 reranks its own relevance descriptions. He calls firm-specific models an ego play and recommends RAG; customer data is never used for training.
- **Pricing.** At about $200 a month, solo lawyers compare CoCounsel with hiring a paralegal. Arredondo says the choice has been "GPT-4 or nothing", and the product is not sold to unrepresented (pro se) litigants because it could mislead them.
- **Future of law.** He says writing is thinking, so AI should not draft briefs or judicial opinions. He contrasts Chief Justice Roberts' 2016 and 2023 year-end essays, notes Larry Lessig's interest in an AI judge, and thinks existing bar rules cover 99% of AI misuse.

## Quotes

> "My cofounder Jake and I were shown a demo of GPT-4. And within 12 hours, we had pivoted the entire company around it." — Pablo Arredondo

> "my boat can seat 100 people, but if you put more than 10 people on it, it will sink." — Pablo Arredondo
