---
title: "When data leakage turns into a flood of trouble"
date: 2020-10-20
show: practical-ai
episode: 109
url: "https://share.transistor.fm/s/7bcff241"
duration_min: 48
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Rajiv Shah"]
description: "Target leakage, where future or test information slips into training, is common and makes models look far better than they are; careful framing, partitioning and skepticism catch it."
tags: ["data-leakage", "machine-learning", "model-validation", "data-science", "mlops"]
source_transcript: "practical-ai/episodes/2020/10/2020-10-20-when-data-leakage-turns-into-a-flood-of-trouble.md"
draft: false
---

## Thesis

Rajiv Shah, a data scientist at DataRobot and professor at the University of Illinois at Chicago, explains target leakage: using information at training time that will not be available when the model makes predictions. He argues that it is common and nothing to be embarrassed about. Good problem framing, sensible partitioning, domain knowledge and a skeptical attitude towards strong results catch most of it before production.

## Key points

- **What leakage looks like.** Shah's example is a salary model that uses monthly salary as a feature. It looks perfect in training and fails in production, when that field is missing. He guesses about 75% of models have some leakage at some point, though most is caught early.
- **Real cases.** Chicago's public restaurant-inspection model used weather and inspector IDs, neither of which is known ahead of time. Shah also reran the code from a Nature paper on earthquake aftershocks and found related rows split randomly between train and test, and no baseline model. He says the authors pushed back.
- **Partition by group.** Random splits assume rows are independent. When data clusters, for example by state, Shah recommends group partitioning, and nested cross-validation as a default for beginners.
- **Subtle sources.** Leakage also comes from database records that change over time (use snapshots), from feature engineering or exploratory analysis on the full dataset, and from hyperparameter tuning against one validation set so many times that the model memorises it.
- **Production reality.** Shah has seen many models stay on laptops because nobody dealt with production pipelines. He says data scientists must talk to IT early and get snapshots of real production data.
- **Career advice.** Shah tells newcomers that most useful enterprise data science is more than three years old. He suggests a weekend with tools such as Spark rather than months, and end-to-end passion projects. He compares today's data scientists to the webmasters of the early internet.

## Quotes

> "my kind of intuitive guess is like 75% of all data science models at one point have some target leakage." — Rajiv Shah

> "I think one of the takeaways is always to be skeptical of your model and its performance and think about what else could it be that's going wrong." — Rajiv Shah
