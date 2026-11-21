---
title: The Power of Quality Human Data with SurgeAI Founder and CEO Edwin Chen
description: >-
  Edwin Chen argues that frontier AI progress depends on genuinely high-quality
  human data and careful human evaluation, not synthetic data volume or easily
  gamed leaderboards.
pubDate: '2025-07-24'
show: no-priors
episode: 124
url: 'https://www.youtube.com/watch?v=UU26zm676Lg'
youtube: 'https://www.youtube.com/watch?v=UU26zm676Lg'
durationMin: 33
hosts:
  - Sarah Guo
  - Elad Gil
guests:
  - Edwin Chen
tags:
  - human-data
  - model-evaluation
  - reinforcement-learning
  - bootstrapping
  - benchmarks
draft: false
---
## Thesis

Edwin Chen, founder and CEO of Surge, argues that data quality has an almost unlimited ceiling in generative AI, and that labs need technology to measure it rather than "body shops" supplying annotators. He contends human feedback will never run out, because models need an external signal to stay aligned with real objectives, and he warns that leaderboards such as LMArena push labs toward producing clickbait.

## Key points

- **Bootstrapped to a billion.** Surge started in 2020, passed a billion in revenue last year with a little over 100 people, and never raised venture money because it was profitable from the start. Chen criticises founders who raise "for the sake of raising" and says he would not hire a PM or data scientist among the first few employees.
- **Data as the product.** Surge delivers SFT data, unit tests, preference data and verifiers to labs such as Google, OpenAI and Anthropic, plus insights into failure modes. It scores annotators with an internal ML team, using signals in the way Google search or YouTube rank content.
- **Rich RL environments.** Chen describes simulating a salesperson's whole world (Salesforce, Gmail, Slack, calendars, even a car accident delaying a meeting) and sees "no ceiling" on how much realism helps.
- **Synthetic data limits.** Customers who generated 10 to 20 million synthetic examples found 99% unusable; a thousand curated human examples can be worth more. He also cites a top model that inserts random Hindi and Russian characters, which it cannot detect itself.
- **Benchmark hacking.** Researchers have told him they accept worse factuality to raise their LMArena rank, where longer responses and emojis win. He also mocks IFEval's artificial instructions and wants Surge to publish public research on human evals.
- **Landscape.** Chen thinks the Meta/Scale deal helped Surge, picks xAI as the underdog to catch up, and expects more differentiated frontier models rather than commodities.

## Quotes

> "they don't realize that all they're doing is training their models to produce better clickbait." — Edwin Chen

> "Otherwise you're basically just like scaling up mediocrity." — Edwin Chen
