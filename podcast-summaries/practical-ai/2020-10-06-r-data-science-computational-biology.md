---
title: "R, Data Science, & Computational Biology"
date: 2020-10-06
show: practical-ai
episode: 107
url: "https://share.transistor.fm/s/3f2ad634"
duration_min: 54
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Daniel Chen"]
description: "Daniel Chen argues that data science learners should master the steps of cleaning data before any language, and that biomedical researchers need simple, reproducible project habits more than full software engineering."
tags: ["data-science-education", "r", "python", "reproducibility", "project-organization"]
source_transcript: "practical-ai/episodes/2020/10/2020-10-06-r-data-science-computational-biology.md"
draft: false
---

## Thesis

Daniel Chen, a Lander Analytics data scientist and Virginia Tech PhD candidate, argues that the skills that matter in data science are knowing how to reshape messy data and organising projects so analyses can be rerun anywhere. For researchers in the biomedical sciences, who often work from spreadsheets, he says teaching should start from where they are, not from industry software engineering practice.

## Key points

- **Language matters less than the steps.** Chen picks R or Python depending on who he works with. He says a beginner should be able to picture the steps to make a dataset "tidy"; after that, the function names (pivot longer/wider in the tidyverse, melt and pivot in pandas) are a search away.
- **Black boxes in medicine.** Chen notes deep learning has been adopted for medical imaging, but epidemiology is about inference, and prediction-only models make errors hard to explain when a patient's life is at stake.
- **Project structure for portability.** He cites William Noble's guide to organising computational biology projects and the Carpentries papers "Best Practices for Scientific Computing" (2014) and "Good enough practices" (2017). The core idea: a folder layout where the same command runs on any machine without editing file paths.
- **Data science is not software engineering.** Whitenack asks how much CI/CD and Docker a data scientist needs. Chen replies that top-to-bottom scripts are often software anti-patterns, and that his DS4 Biomed lesson material starts with spreadsheets.
- **Keep raw data intact.** Using the 2014 Ebola outbreak (daily reports arrived as PDFs) and COVID-19 as examples, Chen says reproducible code lets analysts rerun on new data, which is why recommendations change as evidence accumulates.
- **Lessons from building an autograder.** His 2019 RStudio internship work on an R code autograder taught him how R handles expressions and lazy evaluation. It also made him wary of dependencies: use base grep rather than pull in a whole package, a point Whitenack endorses.

## Quotes

> "a lot of workflows from data science are actually like anti-patterns from software engineering." — Daniel Chen

> "it becomes harder to figure out why did the model predict this wrong. And usually at the other end of this is someone's life on the line." — Daniel Chen
