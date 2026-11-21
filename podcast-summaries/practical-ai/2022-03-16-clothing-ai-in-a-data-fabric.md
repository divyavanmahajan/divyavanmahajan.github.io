---
title: "Clothing AI in a data fabric"
date: 2022-03-16
show: practical-ai
episode: 171
url: "https://share.transistor.fm/s/54496c57"
duration_min: 46
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "Chris Benson defines a data fabric narrowly, as the logistics layer that moves data between huge numbers of producers and consumers with priority and delivery guarantees, not as analytics."
tags: ["data-fabric", "data-engineering", "distributed-systems", "healthcare", "mlops"]
source_transcript: "practical-ai/episodes/2022/03/2022-03-16-clothing-ai-in-a-data-fabric.md"
draft: false
---

## Thesis

Chris Benson argues that a data fabric is best understood narrowly: a large, possibly globally distributed software system that moves data from producers to consumers on time, with performance and delivery guarantees. Analytics and AI are consumers of the fabric, not part of it. Daniel Whitenack tests the idea against a healthcare scenario and asks what AI practitioners should bring to the effort.

## Key points

- **A logistics system.** Benson compares a data fabric to a blanket laid across a diverse landscape, or a trucking network. Its job is getting data to the right place; the AI modelling step is a small share of the overall process.
- **Disagreeing with Gartner.** Whitenack reads Gartner's definition, which centres on continuous analytics over discoverable and inferred metadata. Benson agrees with much of it but insists analytics is a separate use case the fabric serves.
- **Metadata is what the fabric cares about.** Benson says the fabric ignores the payload and acts on attached metadata: security status, routing, recipients and priority, so it can triage traffic under resource contention.
- **Scale justifies the cost.** One producer and one consumer do not need a fabric. With thousands of hospitals and possibly millions of producers and consumers, automation pays off. Benson's example: a critical-care sensor alert should reach a doctor's device within seconds and take priority over records going to an S3 bucket.
- **How it gets built.** Benson describes a distributed registry of endpoints, a data dictionary that constrains metadata, reusable data profiles, and microservices in containers, with "Kubernetes in all the places" and multi-cluster setups even on pocket-sized devices.
- **Role for AI practitioners.** Whitenack suggests pushing for standard access protocols and models that annotate data automatically. Benson adds that many consumers will be MLOps pipelines doing continuous training. Both call data fabrics early days and multidisciplinary; learning picks are the Python Data Science Handbook and go.dev.

## Quotes

> "So data fabric, it's the trucking system of data. It's not the sexy part." — Chris Benson

> "There is a cost implementing a data fabric, and that cost is not trivial." — Chris Benson
