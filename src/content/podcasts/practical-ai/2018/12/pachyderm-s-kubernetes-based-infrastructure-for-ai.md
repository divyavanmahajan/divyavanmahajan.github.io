---
title: Pachyderm's Kubernetes-based infrastructure for AI
description: >-
  Pachyderm founder Joe Doliner argues that versioned data, containers and
  Kubernetes let small data science teams run production pipelines without a
  large infrastructure team.
pubDate: '2018-12-03'
show: practical-ai
episode: 23
url: 'https://share.transistor.fm/s/cfbb1e52'
durationMin: 42
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Joe Doliner
tags:
  - mlops
  - data-versioning
  - kubernetes
  - containers
  - open-source
draft: false
---
## Thesis

Joe Doliner (JD), CEO and founder of Pachyderm, argues that data teams need production infrastructure "in a box": a version-controlled file system with provenance, plus language-agnostic processing in Docker containers orchestrated by Kubernetes. Drawing on his time running data infrastructure at Airbnb, he says the goal is to let a data scientist do what used to take a dedicated team, while admitting DevOps work has not disappeared.

## Key points

- **Versioned data and provenance.** JD describes the Pachyderm file system as similar to HDFS but with Git-like commits over terabyte-scale datasets, so teams can trace which data produced which result.
- **A public example.** He cites a Department of Defense satellite-imagery competition that ran Pachyderm on AWS with S3 as the backing store, deploying a new pipeline for each submitted model and processing images in parallel.
- **From notebook to pipeline.** Asked by Whitenack how to move a Jupyter notebook to production, JD recommends exporting the code to a Python container first (about 20 minutes if Pachyderm is set up), then splitting pre-processing, training and post-processing into separate pipelines so each can scale independently. For distributed training he points to Kubeflow.
- **Trade-offs of object storage.** JD says copying data in and out of S3 costs some performance but is simpler for admins, mirroring how most Hadoop and Spark users bypass HDFS; the upcoming 1.9 release moves further towards caching on local disks. He advises against optimising performance too early.
- **The DevOps gap.** Responding to Benson, JD says the hard part is less software skill than DevOps, such as Kubernetes permissions blocking S3 access. At Airbnb his team was 25 people.
- **Open source business model.** After a Series A, Pachyderm keeps core features open and sells an enterprise tier whose permissioning follows provenance, so restricted data cannot leak through derived models. JD plans a hosted version, comparing it to paying for private GitHub repos.

## Quotes

> "There's a huge amount of value in just having infrastructure that you understand top to bottom and that is simple." — Joe Doliner

> "my team is 25 people just keeping this darn thing running." — Joe Doliner
