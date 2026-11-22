---
title: "Michael Kearns: Algorithmic Fairness, Bias, Privacy, and Ethics in Machine Learning"
date: 2019-11-19
show: lex-fridman
url: "https://lexfridman.com/michael-kearns/"
youtube: "https://www.youtube.com/watch?v=AzdxbzHtjgs"
duration_min: 109
hosts: ["Lex Fridman"]
guests: ["Michael Kearns"]
description: "Michael Kearns argues that fairness and privacy can be encoded as precise algorithmic constraints with measurable trade-offs, but society, not computer scientists, must choose which definitions and trade-offs to accept."
tags: ["algorithmic-fairness", "differential-privacy", "ai-ethics", "game-theory", "algorithmic-trading"]
source_transcript: "lex-fridman/episodes/2019/11/2019-11-19-michael-kearns-algorithmic-fairness-bias-privacy-and-ethics-in-machine.md"
draft: false
---

## Thesis

Michael Kearns, a University of Pennsylvania professor and co-author with Aaron Roth of "The Ethical Algorithm", tells Lex Fridman that specific notions of fairness and privacy can be put on the same quantitative footing as running time or accuracy. He argues privacy is the more settled problem, with differential privacy as the accepted definition, while fairness is messier because reasonable definitions conflict and choosing between them is a political question for stakeholders and regulators.

## Key points

- **Fairness as a measurable trade-off.** Kearns describes fairness as a constraint such as keeping false rejection rates for two groups within a few percent. Plotting error against unfairness gives a Pareto curve, which he hopes becomes the interface between researchers and policymakers who must pick a point on it.
- **Fairness gerrymandering.** Protecting race, gender and age separately does not stop a model discriminating against combinations of them; Kearns and colleagues named this "fairness gerrymandering" and built auditing algorithms that search for the worst-treated subgroups.
- **Social media and engagement.** Kearns says platforms did not foresee their political influence, but argues the same models that predict what users like could offer a "slider" to show more distant viewpoints, at some cost to short-term revenue.
- **Anonymization fails, noise works.** Using the Netflix Prize and Facebook likes as examples, Kearns says redacting identifiers breaks once datasets are combined. Differential privacy instead adds calibrated noise so that results are nearly the same with or without any one person's record, and he says most statistics and machine learning methods have private variants.
- **Game theory and navigation apps.** He describes apps like Google Maps and Waze as pushing drivers toward a Nash equilibrium that can raise collective driving time, and cites no-regret learning as the key link between machine learning and game theory.
- **Algorithmic trading.** Kearns says algorithms first took over execution and high-frequency trading, while long-horizon investing in the style of Warren Buffett still needs human views on politics and economic cycles.

## Quotes

> "optimizing for engagement kind of got us where we are" — Michael Kearns

> "that's not something computer scientists should be deciding for society" — Michael Kearns
