---
title: Operationalizing ML/AI with MemSQL
description: >-
  Models that work in training often fail in production because they run on
  different data systems; MemSQL's co-CEO argues for one distributed SQL layer
  over all data and workloads.
pubDate: '2020-06-29'
show: practical-ai
episode: 94
url: 'https://share.transistor.fm/s/926151bd'
durationMin: 54
hosts:
  - Daniel Whitenack
guests:
  - Nikita Shamgunov
tags:
  - mlops
  - databases
  - distributed-sql
  - model-inference
  - real-time-analytics
draft: false
---
## Thesis

Nikita Shamgunov, co-CEO and founder of MemSQL, argues that much of the gap between a model's training results and its production performance comes from running it against different data management systems. His answer is a "single pane of glass": one distributed, ideally serverless SQL interface to all data, serving both training data preparation and low-latency inference in applications.

## Key points

- **Origins.** Shamgunov worked on the SQL Server engine at Microsoft, then joined Facebook in 2010, where every workload ran on a distributed system. Within months he co-founded MemSQL, which started in-memory and now tiers from memory to disk to S3.
- **ML is already a big share.** Shamgunov says 20 to 30% of MemSQL workloads have a machine learning or AI angle. Some customers move data to Spark through a connector for training; others query MemSQL from applications that serve models.
- **Real-time inference examples.** He describes in-transaction fraud detection for major banks with a 40 millisecond decision window, and brute-force facial recognition over millions of stored feature vectors using built-in dot products in 50 to 100 milliseconds.
- **Roadmap.** MemSQL wants to make the database aware of models so data can be run through them from SQL, possibly via Apache Arrow, scoring a billion records in one or two seconds. He says unstructured files belong in S3 for now, and sees versioning of model plus training data as a key value.
- **COVID-19 and public data.** MemSQL works with telcos such as True Digital on migration patterns and contact tracing from cell-tower data. Shamgunov argues public data such as arrest records should be real-time and discoverable, leaving misuse to policy.
- **Business and remote work.** He cites a roughly $40 million run rate with 70% growth, a free tier for up to four servers, and worries that remote work is spending the social capital built in offices.

## Quotes

> "databases are very long game." — Nikita Shamgunov

> "it's not just the model, it's the model and the data that's been trained on. That's really the unit that is consistent." — Nikita Shamgunov
