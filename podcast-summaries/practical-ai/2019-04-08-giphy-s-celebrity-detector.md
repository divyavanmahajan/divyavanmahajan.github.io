---
title: "GIPHY's celebrity detector"
date: 2019-04-08
show: practical-ai
episode: 38
url: "https://share.transistor.fm/s/e1e293a9"
duration_min: 49
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Nick Hasty"]
description: "GIPHY built and open-sourced a PyTorch celebrity detector trained on the celebrities its users actually search for, to annotate a catalogue too large for human taggers."
tags: ["computer-vision", "face-recognition", "open-source", "pytorch", "mlops"]
source_transcript: "practical-ai/episodes/2019/04/2019-04-08-giphy-s-celebrity-detector.md"
draft: false
---

## Thesis

Nick Hasty, GIPHY's director of R&D and its first employee, explains that the celebrity detector solved a real internal need: annotating tens of millions of GIFs that the content team could no longer tag by hand. GIPHY open-sourced it to show its engineering work and give back to open source, and Hasty argues R&D teams have to ship into the product to prove their value.

## Key points

- **R&D that ships.** Hasty's five-person team, working with Ukrainian firm Rails Reactor and CTO Anthony Johnson, used Word2Vec for related GIFs and tags. He says reworking the Slack /giphy integration raised usage by 20 to 30 percent.
- **Why build in-house.** The labels come from GIPHY's top 50,000 searched celebrities. Hasty says commercial services, such as one from Microsoft, often missed the newer pop-culture names GIPHY users look for.
- **How it was built.** It was the team's first big deep learning project: images scraped to fill gaps, labels checked through Figure Eight (formerly CrowdFlower), a ResNet-50 face embedding, and a center loss approach that improved clustering a lot. They chose PyTorch over TensorFlow because it was easier to iterate with.
- **GIF-specific problems.** GIFs are heavy, use older compression and only 256 colours per frame. With 90 to 120 frames and several faces per GIF, the team samples frames and aggregates them into one prediction.
- **Operations and updates.** The repo includes Docker code, and GIPHY is looking at Kubeflow and Seldon on its Kubernetes stack. New celebrities will be added in batches based on search queries, with the content team approving the list.
- **Bias check.** Hasty says the team used Wikipedia to look up ethnicities across its classes and found no major skew. It also published a 3D projection of the face embeddings.

## Quotes

> "But humans can only go so far when you reach the tens of millions in terms of your catalog." — Nick Hasty

> "The proposition was never deep learning as a service." — Nick Hasty
