---
title: Automated cartography using AI
description: >-
  Gabriel Ortiz of the Government of Cantabria shows how domain experts can
  apply older computer vision architectures and well-curated aerial data to
  automate maps and geospatial analysis.
pubDate: '2023-06-28'
show: practical-ai
episode: 229
url: 'https://share.transistor.fm/s/b1def249'
durationMin: 45
hosts:
  - Daniel Whitenack
guests:
  - Gabriel Ortiz
tags:
  - computer-vision
  - geospatial
  - gis
  - public-sector
  - deep-learning
draft: false
---
## Thesis

Gabriel Ortiz, principal geospatial information officer for the Government of Cantabria in Spain, tells Daniel Whitenack that GIS professionals without an AI research background can get strong results from deep learning. His case is that careful labelling, domain knowledge and combining 2015-2016 era models matter more than chasing the latest architecture, and that AI makes it practical to keep maps up to date.

## Key points

- **Path in.** Ortiz, with more than 30 years in the spatial industry, traces his interest from AlexNet in 2012 and NVIDIA's general-purpose GPUs to a 2018 Esri demo detecting swimming pools and oil rigs with a single-shot detector. He learned the concepts from free MIT and Stanford lectures while experimenting with off-the-shelf models.
- **Tooling.** He credits Esri's integration of open source frameworks with making the work accessible, since the job also involves moving terabytes of data and preparing labels.
- **Counting beach crowds.** After COVID-19 restrictions eased, his team counted people across Cantabria's more than 100 beaches from archived aerial surveys, mapping where crowds concentrate, and published an app for finding quiet spots.
- **Automated cartography.** Further models detect vegetation, urban growth, cars and invasive species. Combined, they produced a map of trees, shrub, buildings, roads and railroads generated entirely by AI, with mistakes left in so others can judge the models.
- **Old models, good data.** Ortiz uses supervised learning with U-Net and Mask R-CNN on ResNet backbones, on modest hardware. He merges outputs from models that are good at large or small vegetation patches using traditional GIS techniques.
- **Limits and outlook.** He names compute and the limits of CNNs as the main constraints, urges GIS colleagues to understand GPUs, and expects SAM combined with LLMs to make the tools easier to use.

## Quotes

> "It's not a black box. It's mathematics in action." — Gabriel Ortiz

> "these two last years, two or so, have been the most exciting part of my career because it's so creative." — Gabriel Ortiz
