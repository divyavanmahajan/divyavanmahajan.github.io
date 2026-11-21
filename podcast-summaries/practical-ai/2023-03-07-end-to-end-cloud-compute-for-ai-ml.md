---
title: "End-to-end cloud compute for AI/ML"
date: 2023-03-07
show: practical-ai
episode: 214
url: "https://share.transistor.fm/s/76659e53"
duration_min: 44
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Erik Bernhardsson"]
description: "Modal founder Erik Bernhardsson argues that bringing cloud infrastructure into the developer's innermost feedback loop requires a custom container runtime, and makes serverless GPU inference simple."
tags: ["serverless", "cloud-infrastructure", "ml-inference", "developer-productivity", "gpu-compute"]
source_transcript: "practical-ai/episodes/2023/03/2023-03-07-end-to-end-cloud-compute-for-ai-ml.md"
draft: false
---

## Thesis

Erik Bernhardsson, founder of Modal and formerly of Spotify and Better, argues that developer productivity comes down to feedback loops, and that data teams suffer most because their code must run on real data in the cloud. Modal's answer is to make running code in the cloud as fast as running it locally, which meant building its own container runtime rather than relying on Kubernetes or AWS Lambda. Host Daniel Whitenack speaks as a heavy user.

## Key points

- **Why build from scratch.** Bernhardsson calls himself a big AWS fan but says its developer experience is poor. Kubernetes means build, push, pull and check logs; Docker images carry unused files and do not deduplicate; Lambda takes about a minute to publish and lacks GPU and long-running jobs. Modal built its own file system that deduplicates files by checksum.
- **Infrastructure in code.** Citing swyx's "self-provisioning runtime" post, he describes defining containers, GPUs, CPUs and RAM in Python decorators, with zero config and no YAML. A cached function launches in the cloud in about a second.
- **Online inference took off.** Bernhardsson says GPU inference was a surprise hit, driven by the cost of idle instances and slow autoscaling; he rates online inference 9 out of 10 and batch work 8 out of 10. Users also built full web apps and Celery-style job queues.
- **Hot reload like front-end.** Whitenack, who has 129 Modal apps deployed, praises edits that redeploy a webhook on save; Bernhardsson credits front-end tooling for the idea.
- **Enterprise adoption.** Asked by Chris Benson about large companies, he suggests starting with a low-risk greenfield project for data scientists the platform team cannot serve, while security and compliance work continues.
- **Roadmap and limits.** Next come training, fine-tuning, scheduling, notebook support, GPU cold starts and possibly other languages, since the Rust core is language-agnostic. Edge workloads needing one-millisecond latency are out of scope.

## Quotes

> "Like in code, there's zero config in modal. There's like not a YAML file." — Erik Bernhardsson

> "I think of modal as my 20 year project." — Erik Bernhardsson
