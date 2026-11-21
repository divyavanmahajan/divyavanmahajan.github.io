---
title: "Segment Anything Model and the Hard Problems of Computer Vision — with Joseph Nelson of Roboflow"
date: 2023-04-13
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/segment_anything_model_and_the_hard_problems_of_computer_vision_with_joseph_nelson_of_roboflow"
duration_min: 80
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Joseph Nelson"]
description: "Roboflow's Joseph Nelson argues that zero-shot models like Meta's Segment Anything make annotation far cheaper, with their knowledge distilled into small, owned models that run on the edge."
tags: ["computer-vision", "segment-anything", "data-annotation", "distillation", "edge-ai"]
source_transcript: "latent-space/episodes/2023/04/2023-04-13-segment-anything-model-and-the-hard-problems-of-computer-vision-with-j.md"
draft: false
---

## Thesis

Joseph Nelson, co-founder and CEO of Roboflow, tells swyx that annotation is becoming less of a barrier to computer vision as zero-shot foundation models arrive. He sees Meta's Segment Anything Model (SAM) as the turning point: use large models to label data, then distil that knowledge into small, cheap, task-specific models that you own and can run on the edge.

## Key points

- **Origin story.** Nelson traces Roboflow to Magic Sudoku (2017), a Boggle app and a chess app built in 48 hours at TechCrunch Disrupt 2019. Building the internal tooling, not the apps, became the business: tools that "make the world programmable". He says over half the Fortune 100 and 250,000 developers have used it, with customers such as Rivian.
- **Annotation economics.** Nelson's rough heuristic is 30 to 50 images for a first working model in a controlled scene, and about 200 images per class for a model you can rely on. The real test, he argues, is whether the model beats the alternative, often a far costlier human reviewer.
- **Format pain.** Roboflow's first tool converted between bounding-box formats (COCO JSON, VOC XML, TFRecords). Nelson calls the Marmot format the worst and says conversion errors fail silently.
- **From YOLO to SAM.** He walks through single-shot detectors and the YOLO family, from Joseph Redmon's Darknet versions to Glenn Jocher's YOLOv5 and v8. SAM was trained on 11 million images and 1.1 billion masks, built up through assisted-manual, semi-automatic and fully automatic labelling stages.
- **SAM's gap.** SAM produces masks without text labels. Nelson pairs it with Grounding DINO for text-prompted labelling and predicts a single model will do both within about 30 days. In a demo, Roboflow's SAM-based labelling segments a weld in one click, against four with its older SmartPoly tool.
- **GPT-4 and learning.** Nelson expects GPT-4 to make OCR largely solved and says Roboflow already uses text-only GPT-4 for dataset descriptions and a support bot. His advice for keeping up: read, then produce; early on he and co-founder Brad published three blogs and two YouTube videos a week for seven months.

## Quotes

> "if you get that converter script wrong, your model doesn't not work, it just fails silently" — Joseph Nelson

> "The framing is at what point can I use this thing to be better than the alternative?" — Joseph Nelson
