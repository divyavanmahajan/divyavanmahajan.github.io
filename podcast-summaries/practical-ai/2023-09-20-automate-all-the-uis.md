---
title: "Automate all the UIs!"
date: 2023-09-20
show: practical-ai
episode: 239
url: "https://share.transistor.fm/s/8d59e904"
duration_min: 43
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Dominik Klotz"]
description: "askui's Dominik Klotz argues that vision models reading screenshots, steered by natural language, can automate UI testing and repetitive tasks on any operating system."
tags: ["ui-automation", "computer-vision", "testing", "rpa", "mlops"]
source_transcript: "practical-ai/episodes/2023/09/2023-09-20-automate-all-the-uis.md"
draft: false
---

## Thesis

Dominik Klotz, co-founder of askui, argues that UI automation should work from what a human sees rather than from an application's source code. His company takes screenshots, detects interface elements with an object detection model and maps natural-language instructions onto them, so the same approach covers web, Windows, macOS, Linux and Android. He also argues that building an ML product is mostly a software engineering problem: ship early, let customers complain, iterate.

## Key points

- **Origin at Siemens.** Klotz worked on plant automation systems that had to run 365 days a year, and found Selenium and similar tools could not ease the pain of writing UI tests. That led him to combine visual and language AI.
- **How it works.** A local controller takes a screenshot, sends it with an instruction such as "click the login button" to an inference backend, then moves the mouse. Tests are written in Jest or JUnit style via an npm package; TypeScript is supported, with Python planned.
- **Beyond regression tests.** Use cases have moved from UI regression testing to robotic process automation, and Klotz expects copying data from unstructured documents like PDFs into forms. A background recorder could spot a task done five times in a week and offer to automate it.
- **Security and data.** Asked by Whitenack about handing an agent credit card details for AWS, Klotz says humans still need small correction steps. He recommends synthetic test data, injected secrets, and running tests locally without askui access.
- **Learning ML the hard way.** Coming from software, Klotz hit learning rates, experiment tracking with TensorBoard, data versioning, and eventually built a Streamlit labelling tool for five chained models. His first object detector was trained on five images.
- **Advice for newcomers.** Start with Hugging Face or PyTorch Lightning, version data early (he now suggests DVC over ClearML, which askui uses), and pair one researcher with one software/DevOps engineer.

## Quotes

> "bring everything to the customer, let the customer complain, then we are doing the next situation step." — Dominik Klotz

> "if you do machine learning, you will end up to building a labeling tool where we now reach." — Dominik Klotz
