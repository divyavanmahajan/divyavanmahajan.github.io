---
title: Mapping the intersection of AI and GIS
description: >-
  Esri's Daniel Wilson and Rob Fletcher argue AI is most useful in GIS when its
  output feeds a full spatial analysis platform, from disaster response to
  accident prediction.
pubDate: '2020-03-30'
show: practical-ai
episode: 83
url: 'https://share.transistor.fm/s/6ee91a91'
durationMin: 50
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Daniel Wilson
  - Rob Fletcher
tags:
  - geospatial
  - computer-vision
  - disaster-response
  - lidar
  - deep-learning
draft: false
---
## Thesis

Daniel Wilson (AI lead for professional services) and Rob Fletcher (senior data scientist) of Esri explain how deep learning is being applied to geographic information systems. Both argue that feature extraction from imagery is only the start: the value comes from feeding AI output into a GIS platform such as ArcGIS, and from combining many disparate spatial data sources.

## Key points

- **What GIS does.** Wilson describes Esri as a GIS software company whose ArcGIS platform and Living Atlas serve state, local and federal governments as a system of record. Fletcher compares GIS layers to a relational database where each row is also a polygon on a map, used for parcels, utilities and site selection.
- **Spatial data in models.** Wilson says geometry-derived features can feed random forests, support vector machines or graph neural networks. Fletcher notes that polygons with arbitrary numbers of vertices are hard to fit into fixed-input networks; Wilson describes using attention across spatial entities in a reinforcement learning project for police patrol optimisation.
- **Disaster relief with the JAIC.** Fletcher describes work for the DoD Joint AI Center's humanitarian assistance and disaster response mission: detecting roads and road debris in satellite and NOAA aircraft imagery during the first two weeks after a disaster, to find cut-off communities and route crews. The guests say Figure 8 handles labelling, with Digital Globe open data supplying pre- and post-disaster imagery.
- **3D and LiDAR.** Wilson explains that point-based models such as PointNet and PointCNN avoid the data explosion of voxels. Benson raises Esri's PointCNN project on utility poles and wires, which Wilson says was trained on a single NVIDIA GV100 GPU.
- **What comes next.** Fletcher wants unsupervised pre-training for satellite imagery, a kind of image equivalent of BERT, because clients rarely have enough labelled data. Wilson is most interested in multimodal, non-imagery problems such as car accident prediction combining terrain, road geometry, speed limits, sun position and weather.

## Quotes

> "AI can be thought of as just sort of producing the data that you can then do even more analysis on" — Rob Fletcher

> "really what I'm interested in is everything that's not imagery." — Daniel Wilson
