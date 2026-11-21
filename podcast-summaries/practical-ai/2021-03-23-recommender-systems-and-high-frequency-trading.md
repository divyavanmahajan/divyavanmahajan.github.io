---
title: "Recommender systems and high-frequency trading"
date: 2021-03-23
show: practical-ai
episode: 126
url: "https://share.transistor.fm/s/bd1e5a42"
duration_min: 43
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["David Sweet"]
description: "Quant traders and recommender-system engineers share one workflow, and its hardest step is live experimentation, from A/B tests through bandits to Bayesian optimization."
tags: ["experimentation", "ab-testing", "bayesian-optimization", "recommender-systems", "quantitative-trading"]
source_transcript: "practical-ai/episodes/2021/03/2021-03-23-recommender-systems-and-high-frequency-trading.md"
draft: false
---

## Thesis

David Sweet, a physicist turned quant trader and author of "Tuning Up: From A/B testing to Bayesian optimization", argues that offline results from backtests or test sets are fast but biased. Only experiments on the live system tell you whether a change works. He walks Daniel Whitenack and Chris Benson through methods for tuning a system's parameters with experiments.

## Key points

- **One workflow, two fields.** Sweet says he got the idea for the book from seeing that a quant trader and an ML engineer on a recommender system follow the same steps: come up with an idea, check it offline, then test it online. He calls the online step the hardest because it has the least data, but the most accurate.
- **AI in trading.** Sweet sees three common approaches: linear models with many signals and automatic feature selection, deep learning on alternative data or order books, and optimising simulations. He says the signal-to-noise ratio is low and competitors trade signals away, so the data keeps changing over time.
- **Intuition fails.** In an informal survey of quant traders over ten years, Sweet says most report that about one idea in ten works once tested. Large companies test everything before production.
- **The methods in order.** A/B testing is the robust gatekeeper. Response surface methodology tunes continuous parameters together. Multi-armed bandits shift traffic toward the winner while the test runs, for example moving from 50/50 to 70/30 across 100 stocks. Bayesian optimization automates the modelling and the choice of what to test next.
- **Tools.** Sweet points to many A/B testing tools in R and Python, Facebook's open source Ax for Bayesian optimization, and Google's Vizier paper on better chocolate chip cookies.
- **What is next.** He is most interested in offline reinforcement learning, especially learning a simulator you can trust from small amounts of data.

## Quotes

> "Everyone has a model until they put it in production." — David Sweet

> "And almost everybody who's had some experience says one in 10." — David Sweet
