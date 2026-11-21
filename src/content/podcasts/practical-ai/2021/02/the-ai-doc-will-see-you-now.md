---
title: The AI doc will see you now
description: >-
  Aidoc's Elad Walach argues that AI for radiology works best as an invisible
  safety net that flags critical findings inside existing workflows, backed by
  careful data selection and heavy infrastructure.
pubDate: '2021-02-16'
show: practical-ai
episode: 122
url: 'https://share.transistor.fm/s/c3a0f05e'
durationMin: 46
hosts:
  - Chris Benson
guests:
  - Elad Walach
tags:
  - medical-imaging
  - healthcare-ai
  - computer-vision
  - data-annotation
  - mlops
draft: false
---
## Thesis

Elad Walach, CEO of Aidoc, tells Chris Benson that radiologists cannot keep up with the growing volume of imaging data, and that AI should augment them rather than replace them. Aidoc's system runs in the background, flags critical findings and reorders the worklist with no extra clicks. Walach argues that the hard parts are integration with legacy hospital systems, efficient annotation and engineering for large-scale experimentation, not just model design.

## Key points

- **Origins.** Walach led AI work at the Israeli Air Force through the Talpiot programme; he and his two co-founders chose healthcare because it is deep tech with high barriers to entry and a direct link to saving lives.
- **The bottleneck.** He cites Mayo Clinic research suggesting radiologists have about two seconds per image, while a CT exam has grown from around 50 images to thousands.
- **Safety net, not replacement.** The AI looks for stroke, bleeds, pulmonary embolism and spine fractures and pushes urgent cases up the queue. Walach says this can cut time to treatment by an hour or two in emergency care and by days in elective care, while radiologists keep the full diagnostic picture.
- **Zero-click workflow.** After a neuroradiologist told him the product must need no button clicks, half of Aidoc's engineering went into an integration engine that shows small flags inside existing worklists and viewers, some of them ten years old.
- **Modelling choices.** Walach names data scarcity, class imbalance (a lesion may be a few pixels out of a million) and missing clinical context as the core problems. Aidoc customises CNNs with attention, adds clinical data and leans on transfer networks for data augmentation rather than off-the-shelf architectures like ResNet.
- **Data and infrastructure.** He favours picking the right cases (for example subtle bleeds) over sheer volume and tight feedback loops with annotators. He also describes an AI infrastructure team at about two engineers per algorithm engineer, thousands of daily experiments on AWS, and a view that predictive diagnostics are three to four years away.

## Quotes

> "Mayo Clinic did research showing that today they have about two seconds to read an image." — Elad Walach

> "what I want is not to have the most images. I want to actually train most effectively on the least amount of images if I can do that." — Elad Walach (quoting his CDO)
