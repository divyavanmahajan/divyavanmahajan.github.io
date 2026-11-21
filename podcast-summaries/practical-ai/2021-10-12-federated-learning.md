---
title: "Federated Learning 📱"
date: 2021-10-12
show: practical-ai
episode: 153
url: "https://share.transistor.fm/s/9290eb7f"
duration_min: 45
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: []
description: "Federated learning trains a central model on decentralised data by sending weights, not data, and Benson and Whitenack argue it has become practical because of legal, logistical and privacy pressures."
tags: ["federated-learning", "privacy", "edge-computing", "differential-privacy", "distributed-training"]
source_transcript: "practical-ai/episodes/2021/10/2021-10-12-federated-learning.md"
draft: false
---

## Thesis

Chris Benson and Daniel Whitenack, both self-described non-experts, walk through federated learning: training a centralised model on decentralised data by pushing the model to edge devices and sending only updated weights back. Benson argues the idea dates to 2016-2017 but has only now become practical, driven less by privacy ideals than by legal constraints on cross-border data and the logistics of moving large datasets.

## Key points

- **How it differs from on-device fine-tuning.** Whitenack contrasts it with porting a model to phones and fine-tuning locally, which keeps data private but means no other user benefits from those updates and effort is duplicated.
- **The training loop.** Benson describes a central "curator" server sending a model to hundreds, thousands or millions of clients, which train locally and return weights; the server combines them through federated averaging and repeats until accuracy is acceptable. Whitenack illustrates it with corrected speech-recognition text on his phone.
- **Security of the updates.** Whitenack recalls a talk showing that faces in a training set could be reconstructed from a model, so updates need encryption plus secure aggregation using differential privacy, which caps any single device's contribution and adds noise.
- **Tooling.** Whitenack walks through PyGrid's Flask-based network and domain applications and mentions TensorFlow Federated (which wraps existing Keras models), Intel's Open Federated Learning and Flower.
- **Costs to users.** The hosts discuss battery drain, comparing it to SETI-style volunteer computing, and Whitenack worries that consent pop-ups will be read as "share your data". Benson notes defence users own both server and devices, which removes much of that concern.
- **Use cases.** Examples include Google's keyboard prediction and Assistant, Facebook's ad rebuild, a Harvard Medical School study in Nature predicting COVID-19 outcomes, predictive maintenance, and Whitenack's own thousand-plus translation projects with copyright constraints.

## Quotes

> "We're doing the opposite of what we've historically done, where we've pulled the data to where our model is going to be trained." — Chris Benson

> "I think it is primarily legal constraints and logistics, personally, with large organizations that are trying to put products and services into the field" — Chris Benson
