---
title: How Microsoft is using AI to help the Earth
description: >-
  Microsoft's AI for Earth pairs a $50 million grant programme with cloud
  compute, shared APIs and education so environmental groups can apply machine
  learning to agriculture, water, climate and biodiversity.
pubDate: '2019-02-04'
show: practical-ai
episode: 29
url: 'https://share.transistor.fm/s/4c8b3258'
durationMin: 45
hosts:
  - Chris Benson
guests:
  - Jennifer Marsman
tags:
  - ai-for-good
  - sustainability
  - computer-vision
  - conservation
  - precision-agriculture
draft: false
---
## Thesis

Jennifer Marsman, Principal Engineer on Microsoft's AI for Earth team, argues that the people with the fewest resources (nonprofits, academics, sustainability groups) are often asked to solve the hardest environmental problems. Microsoft's answer, she explains to Chris Benson at Applied Machine Learning Days in Lausanne, is to give them grants, Azure compute, machine learning expertise and reusable APIs, while they bring the domain knowledge.

## Key points

- **Origins and scope.** Marsman says the programme grew from a white paper by Lucas Joppa, Microsoft's first chief environmental officer. Microsoft committed $50 million over five years for machine learning work in agriculture, water, climate change and biodiversity, with proposals reviewed quarterly.
- **Products, not platforms.** Citing Kai-Fu Lee's advice to startups, Marsman says grantees should solve one specific problem, while her team builds general APIs, such as a land cover mapping API that classifies four-band aerial imagery pixel by pixel, and an iNaturalist species classifier.
- **FarmBeats.** Ranveer Chandra's precision agriculture project found that connectivity, not sensors, drove costs to about $1,000 per sensor. Marsman describes two fixes: Gaussian-process models that combine fewer sensors with drone imagery, and data links over unused TV channels (TV white spaces).
- **Wildbook.** Wild Me identifies individual animals from stripe, spot and ear patterns. Marsman describes a nightly agent that searches YouTube for whale shark videos, extracts frames, identifies individuals and builds co-occurrence and migration data.
- **Data and grants.** Marsman points to lila.science for camera trap datasets and to Kaggle. Besides Azure compute grants there is now a data labelling grant, plus monthly office hours and a twice-yearly summit in Redmond.
- **Methods.** Marsman says most projects are computer vision problems suited to CNNs, such as camera traps and The Ocean Cleanup's plastic tracking. She would welcome more RNN and GAN projects and sees reinforcement learning as promising for climate simulations. She also outlines Project Premonition's smart mosquito traps and metagenomics pipeline for spotting disease outbreaks early.

## Quotes

> "Wildbook has an intelligent agent that wakes up every night at 10 p.m. And it searches the Internet and it looks on these social media sites." — Jennifer Marsman

> "The algorithms are the easy part. Getting the data and getting it in the right format, all that stuff is usually 85% of the work." — Jennifer Marsman
