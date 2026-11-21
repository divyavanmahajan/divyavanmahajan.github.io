---
title: "Anaconda + Pyston and more"
date: 2021-09-01
show: practical-ai
episode: 147
url: "https://share.transistor.fm/s/244d43df"
duration_min: 43
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Peter Wang"]
description: "Peter Wang reads Anaconda's 2021 State of Data Science survey as a sign that data work now spans the whole organisation, with production roadblocks falling hardest on ops roles."
tags: ["data-science", "python", "mlops", "developer-survey", "python-performance"]
source_transcript: "practical-ai/episodes/2021/09/2021-09-01-anaconda-pyston-and-more.md"
draft: false
---

## Thesis

Anaconda's Peter Wang walks through the 2021 State of Data Science survey and argues that data science has spread well beyond people titled "data scientist", while deployment is getting harder as hardware and platforms multiply. He singles out recoding Python and R models as a pain point for ops roles, and presents Anaconda's hiring of the Pyston team as one answer to it.

## Key points

- **Who answered.** Wang reports almost 4,300 participants from 140 countries. About a third were students, 10% academics and around 65% practitioners. Only 11% gave data scientist as their primary job function, which he reads as literacy spreading across the business.
- **Pandemic budgets.** About a third said their organisation cut data science investment, a quarter kept it level and a quarter increased it. Wang's view is that many firms held existing teams but paused new projects.
- **Roadblocks to production.** The most common answer was meeting IT security standards (27%), followed by recoding models from Python and R into another language (24%) and managing environments and dependencies (23%).
- **Split by role.** According to Wang, data scientists mainly cite a skills gap. MLOps, cloud ops, cloud engineers and cloud security managers rank recoding first, and they are the least likely to stay: only 3% plan to stay with their employer for the foreseeable future.
- **Pyston.** Anaconda hired the team behind Pyston, an open-source drop-in Python interpreter that Wang says runs unmodified code 20 to 50% faster. He notes that, by Amdahl's law, numerical code gains little, and that Numba still targets hot loops.
- **A generational shift.** Wang compares the moment to the move from minicomputers to the PC, and predicts US–China technology tension, tech regulation and incidents that force debate on privacy, bias and ethics.

## Quotes

> "So maybe the moral of the lesson there is the more you make your people recode models from one language to another, the more likely they are to churn." — Peter Wang

> "We're entering this era of cybernetics. We're just the very beginning of it." — Peter Wang
