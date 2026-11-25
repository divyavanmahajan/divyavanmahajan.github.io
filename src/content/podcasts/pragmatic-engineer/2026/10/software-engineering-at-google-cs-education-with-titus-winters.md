---
title: Software engineering at Google & CS education with Titus Winters
description: >-
  Titus Winters argues that safe change, deterministic tooling and team learning
  drove Google's engineering at scale, and that CS curricula must move from
  writing code to specification, testing and verification.
pubDate: '2026-10-29'
show: pragmatic-engineer
url: 'https://newsletter.pragmaticengineer.com/p/software-engineering-at-google-and'
youtube: 'https://www.youtube.com/watch?v=mQu0zN4IvSI'
durationMin: 100
hosts:
  - Gergely Orosz
guests:
  - Titus Winters
tags:
  - software-engineering
  - refactoring
  - developer-productivity
  - cs-education
  - ai-coding-tools
draft: false
---
## Thesis

Titus Winters, lead author of Software Engineering at Google and now at Adobe, argues that a codebase is sustainable only if valuable changes can be made safely, and that this rests on tests, deterministic tools and a culture of learning. He thinks AI's real value lies in more ambitious work rather than doing the same work faster, and that undergraduate CS education, largely unchanged since about 2000, needs to be mostly rebuilt.

## Key points

- **Mandatory tests.** Winters recounts that around 2006-2007 Google Search could no longer release monthly, so release engineers refused any change without tests. That safety net later made large cleanups possible.
- **Refactoring 250 million lines.** For Abseil, a team of 10-12 cleaned up Google's roughly 250 million lines of first-party C++, which Winters believes may be the largest refactoring ever. They parsed code into ASTs with MapReduce, generated edits, let old and new APIs coexist, sent changes out by directory and then deleted the old API. He says ClangFormat exists because he needed it for this work.
- **AI should write the deterministic tool.** Winters points to OpenRewrite recipes, BrontoSource and Kelsey Hightower's zero token architecture talk: use AI to generate rewrite rules rather than running inference forever. Orosz gives the example of turning AI code review findings into lint rules.
- **Readability as education.** Google's readability certification grew from early employee Craig Silverstein reviewing each new hire's first change into a mentoring programme, which Winters calls possibly the largest educational programme in tech.
- **Productivity metrics miss AI's value.** Winters cites senior engineers reporting code up 70% and outages up 30% while feature counts stay flat. He argues index metrics cannot capture work that changes what is possible, such as writing a JPEG parser in a couple of weeks.
- **Rebuilding the curriculum.** Winters, the only working engineer on the ACM/IEEE/AAAI curriculum steering committee, wants more focus on design, specification, testing and projects, and wants students graded on their prompts and tests. Professors tell him the middle of the class has fallen behind with AI, while the strongest students do better than ever.

## Quotes

> "Like fear is not an acceptable basis for engineering." — Titus Winters

> "a lot of the value of AI is not in doing the same thing faster. It's doing a harder, more valuable thing that you wouldn't have even thought about." — Titus Winters
