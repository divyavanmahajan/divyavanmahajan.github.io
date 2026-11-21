---
title: "AI competitions & cloud resources"
date: 2022-12-07
show: practical-ai
episode: 203
url: "https://share.transistor.fm/s/bb2174ee"
duration_min: 34
hosts: ["Daniel Whitenack"]
guests: ["Matthew Lanham", "Mark Tabladillo"]
description: "Interviews from a Purdue-led 'analytics for good' case competition show how a structured process, free cloud training and real multilingual data push students beyond laptop-scale data science."
tags: ["image-captioning", "ai-competitions", "low-resource-languages", "cloud-computing", "data-science-education"]
source_transcript: "practical-ai/episodes/2022/12/2022-12-07-ai-competitions-cloud-resources.md"
draft: false
---

## Thesis

Recorded on site while Daniel Whitenack judged a case competition run by Purdue, Microsoft, INFORMS and SIL International, the episode argues that students learn most when a real problem forces them to follow a full business-to-deployment process and to use cloud resources. Matthew Lanham explains the competition design, Mark Tabladillo covers how to get started with Azure, and the two winning teams describe their image captioning solutions for Thai, Kyrgyz and Hausa.

## Key points

- **Scale and task.** Lanham, academic director of Purdue's business analytics programme, says 172 teams from 36 universities, two outside the US, registered. Teams captioned images from SIL's Bloom captioning dataset; Whitenack notes that Thai has no spaces, so word tokenisation by whitespace fails.
- **A process framework.** Judging used the seven domains of the INFORMS Certified Analytics Professional (CAP), from business problem framing to deployment and lifecycle management. Lanham describes it as an extension of CRISP-DM.
- **Three phases.** Phase one was free Microsoft Azure AI training with certification vouchers, phase two a Kaggle competition, and phase three on-campus presentations by top teams.
- **Getting into the cloud.** Tabladillo recommends free Azure subscriptions, Microsoft YouTube content, the AI Business School and the Azure Architecture Center. He separates Azure Machine Learning Studio, now organised around MLflow, from pre-trained cognitive services exposed as REST APIs.
- **Undergraduate winners.** Butler University's team dealt with a small, low-variety Hausa dataset by augmenting it, and proposed a mobile app for small businesses working in minority languages.
- **Graduate winners.** Georgia Tech's team found captions included poems and story fragments, so they used a multilingual CLIP model to match about 20-30% of images to existing captions and sent the rest to a generator model.

## Quotes

> "let's do something that's for good, not necessarily just focus on trying to make money." — Matthew Lanham

> "We want you to get hands on because there's no substitute for experience." — Mark Tabladillo
