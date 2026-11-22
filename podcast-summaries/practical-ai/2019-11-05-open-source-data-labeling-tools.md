---
title: "Open source data labeling tools"
date: 2019-11-05
show: practical-ai
episode: 63
url: "https://share.transistor.fm/s/d97b503f"
duration_min: 44
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Michael Malyuk"]
description: "Data labeling is the core of any AI product, and configurable, embeddable open source tooling plus a focus on quality control is how teams get labels good enough to trust their models."
tags: ["data-labeling", "annotation", "open-source", "active-learning", "data-quality"]
source_transcript: "practical-ai/episodes/2019/11/2019-11-05-open-source-data-labeling-tools.md"
draft: false
---

## Thesis

Michael Malyuk, CEO and founder of Heartex and a maintainer of Label Studio, argues that labeling is the step everything else in an AI product depends on, since model quality tracks label accuracy. He makes the case for a configurable open source labeling front end that teams can embed in their pipelines, and sees quality control as the next big problem to solve.

## Key points

- **Labeling as exploration.** Malyuk places labeling right after data collection and says it also reveals edge cases a team had not thought about. He lists six common data types: images, text, audio, time series, 3D lidar data and video.
- **Time, quality and bias.** The main challenges, per Malyuk, are the time to label large data sets, verifying label quality, and personal bias when different people label the same data. Medical images and private data cannot simply be crowdsourced.
- **Quality control and active learning.** He describes labeling a verified fraction, training a model on it to check later labels, and comparing consensus between multiple annotators. Active learning picks the items that tell you most about the whole data set.
- **Services versus in-house tools.** Outsourcing gives no control over the process and often poor results, Malyuk says, while homegrown open source tools tend to grow into "monstrous" systems teams cannot support.
- **Label Studio.** The open source front end is configured with 5 to 25 lines of HTML-like config built from around 20 components, covering audio, images and text, with video planned. It installs via npm and reads JSON; Heartex's commercial offering adds pre-trained models, team collaboration and quality checks. Whitenack walks through whether it could handle his reading comprehension labeling, and Malyuk says it could, starting from templates.
- **What comes next.** Malyuk expects part of labeling to be commoditised as models improve, points to weak supervision, and asks for contributions in 3D, video and time series.

## Quotes

> "my personal take is that data labeling and annotation is basically the core of any AI-based product." — Michael Malyuk

> "we really need to start putting a lot of thinking into quality control." — Michael Malyuk
