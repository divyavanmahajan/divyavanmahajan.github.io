---
title: Serving deep learning models with RedisAI
description: >-
  RedisAI turns Redis into a model-serving engine with tensor, script and model
  data types, giving models Redis's scaling, availability and data locality for
  free.
pubDate: '2019-08-12'
show: practical-ai
episode: 53
url: 'https://share.transistor.fm/s/464f3f1b'
durationMin: 46
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Pieter Cailliau
tags:
  - model-serving
  - redis
  - databases
  - mlops
  - deep-learning
draft: false
---
## Thesis

Pieter Cailliau, senior product manager at Redis Labs, argues that serving models from inside Redis solves two problems at once. Models get the clustering, high availability and durability Redis already has, and inference runs next to the data it needs. RedisAI adds tensors, scripts and models as native Redis data types.

## Key points

- **What Redis is.** Cailliau describes Redis as an in-memory key-value NoSQL database whose values can be strings, lists, sets, hashes or streams. Common uses are session caching, queues, message brokering and distributed locking. He says a common misconception is that it is only a cache.
- **Licensing and modules.** Core Redis is BSD-licensed; modules use a source-available licence that bars offering them as a database service; Redis Enterprise is closed source. He runs seven modules, including RediSearch, RedisGraph, RedisBloom, RedisJSON, RedisTimeSeries and RedisGears.
- **Origins and motivation.** RedisAI merged earlier efforts: Salvatore Sanfilippo's Neural Redis, Redis ML and Redis DL. Cailliau contrasts it with wrapping a model in a Flask app that you then have to scale and keep available yourself.
- **Tensors, scripts and models.** Whitenack sketches a pipeline: tensors stored in Redis, scripts for pre- and post-processing, then a model for inference. Cailliau confirms this and says chaining these steps in a single call is coming. "Graph" was renamed "model" to avoid confusion with RedisGraph.
- **Backends.** RedisAI supports PyTorch, TensorFlow and ONNX Runtime. Clients call one API regardless of backend, so a data scientist can swap a TensorFlow model for a PyTorch one under the same key without breaking clients. Cailliau sees transaction classification and fraud detection as good fits.
- **Roadmap.** Plans include RedisGears integration, batching, performance statistics (possibly through Prometheus and Grafana) and model versioning for A/B tests. Development is shared with Tensorwerk, which also builds the data versioning tool Hangar.

## Quotes

> "One of the misconceptions that many people have, by the way, is that Redis is purely a cache. It's effectively a database." — Pieter Cailliau

> "do you want to become an expert in building your application or do you want to become an expert in deploying Redis" — Pieter Cailliau
