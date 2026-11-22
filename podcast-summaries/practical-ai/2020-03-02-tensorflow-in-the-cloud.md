---
title: "TensorFlow in the cloud"
date: 2020-03-02
show: practical-ai
episode: 79
url: "https://share.transistor.fm/s/000d78dd"
duration_min: 48
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Craig Wiley"]
description: "Google Cloud's Craig Wiley argues enterprises should buy commodity AI, build where they differentiate, and treat production inference, not training, as the measure of success."
tags: ["tensorflow", "cloud-ai", "enterprise-ai", "mlops", "build-vs-buy"]
source_transcript: "practical-ai/episodes/2020/03/2020-03-02-tensorflow-in-the-cloud.md"
draft: false
---

## Thesis

Craig Wiley, Director of Product Management for Google Cloud AI Platform and previously a builder of Amazon SageMaker, argues that the main goal of ML tooling is shorter cycle time from data to production. In his view the hardest problems sit "to the left" of modelling, in data access and governance, and models only count once their inferences create value.

## Key points

- **TensorFlow and Google.** Wiley describes TensorFlow as an open source project started and led by Google's research group, with outside contributors. Cloud works with that team daily. TensorFlow 2.0 arrived around the same time as TensorFlow Enterprise.
- **What TensorFlow Enterprise adds.** Open source releases get one year of support. Google Cloud adds two more years of security and bug patches, so models built on older 1.x versions can stay in production. It also offers binaries optimised for Google Cloud and Kubernetes, deep learning VMs and containers.
- **Reuse and velocity.** Wiley presents TensorFlow Hub as a library of reusable model modules. If tooling can take a team from 10 models a year to 2x, 3x or 10x that, he says, the ROI of ML rises and teams take on more problems.
- **Use cases and build vs buy.** He cites Unity, which runs huge numbers of ad-targeting models, and autonomous-vehicle company GM Cruise. He argues companies should buy AI such as Contact Center AI or document understanding where they don't differentiate, and build where they compete, for example retail supply chains.
- **Data silos and hybrid cloud.** Wiley says data access is often blocked by organisational silos, a policy problem as much as a technical one. He points to BigQuery ML for training XGBoost or TensorFlow models in SQL, and Anthos for hybrid Kubernetes.
- **Tooling and getting started.** Benson praises Colab, and Whitenack describes the Masakhane machine translation project onboarding African researchers through Colab notebooks. Wiley wants ML to adopt practices like regression testing and recommends Kaggle courses and Google's deep learning VMs for beginners.

## Quotes

> "fundamentally, the idea of buying your AI makes a ton of sense if it's something that you're very comfortable with your competitor buying as well." — Craig Wiley

> "Today, if you went to go deploy something and you hadn't passed it through a regression testing suite, we would think you're irresponsible." — Craig Wiley
