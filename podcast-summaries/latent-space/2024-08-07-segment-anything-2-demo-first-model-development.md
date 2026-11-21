---
title: "Segment Anything 2: Demo-first Model Development"
date: 2024-08-07
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/segment_anything_2_demo-first_model_development"
duration_min: 63
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Nikhil Ravi", "Joseph Nelson"]
description: "SAM 2 lead author Nikhil Ravi explains how Meta built the demo, annotation tool and model together to extend class-agnostic segmentation from images to video."
tags: ["computer-vision", "image-segmentation", "video-segmentation", "open-source-models", "data-annotation"]
source_transcript: "latent-space/episodes/2024/08/2024-08-07-segment-anything-2-demo-first-model-development.md"
draft: false
---

## Thesis

Nikhil Ravi, research engineering manager at FAIR and lead author of SAM 2, argues that a demo should be built alongside the model from the start. At Meta the demo doubles as the annotation tool, so improving it speeds labelling, improves the data and therefore the model. Joseph Nelson of Roboflow, guest co-hosting, describes how class-agnostic, promptable segmentation has spread across industries since the first SAM.

## Key points

- **Impact of SAM 1.** Nelson says Roboflow users have labelled about 49 million images with Segment Anything on its hosted platform, 5 million in the last 30 days alone. He estimates this has saved on the order of 35 years of manual clicking.
- **Demo first.** Ravi says a real-time demo forces early work on efficiency, such as the choice of image encoder. The SAM 2 demo adds negative and positive refinement clicks and "swim lanes" that show when an object is occluded.
- **Smaller and faster.** SAM 2's largest model has about 224 million parameters, roughly a third of SAM 1's 630 million, after switching the image encoder from ViT-H to Hiera. Ravi says it runs about six times faster than applying SAM to each frame.
- **Memory for video.** SAM 2 treats an image as a one-frame video. A memory bank holds spatial memory from about six nearby frames plus longer-term object pointers, and prompted frames are always kept so users can correct mistakes.
- **Data engine in three phases.** Annotation moved from SAM per frame, to SAM plus a mask-only SAM 2, to a single unified model, which cut annotation time sharply. Ravi notes that existing video datasets such as YouTube-VOS cover only about 94 object categories.
- **Deliberately narrow.** Asked why SAM 2 lacks text prompting, Ravi says each release targets one problem done well and leaves domain adaptation to the community. Nelson shows that SAM 2 still struggles with website screenshots and pairs it with Grounding DINO and Florence-2 in Roboflow's AutoDistill.

## Quotes

> "the demo is actually the annotation tool. So we actually use the demo as a way to improve our annotation tool." — Nikhil Ravi

> "an image is just a special case of a video that just has one frame." — Nikhil Ravi
