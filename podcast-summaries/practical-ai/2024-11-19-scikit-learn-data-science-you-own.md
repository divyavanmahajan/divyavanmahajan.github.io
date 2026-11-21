---
title: "scikit-learn & data science you own"
date: 2024-11-19
show: practical-ai
episode: 296
url: "https://share.transistor.fm/s/5e938e26"
duration_min: 52
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Yann Lechelle", "Guillaume Lemaitre"]
description: "Probabl's Yann Lechelle and Guillaume Lemaitre argue that frugal, transparent scikit-learn still runs most production machine learning, and explain how a mission-locked company can steward it."
tags: ["scikit-learn", "open-source", "machine-learning", "data-science", "governance"]
source_transcript: "practical-ai/episodes/2024/11/2024-11-19-scikit-learn-data-science-you-own.md"
draft: false
---

## Thesis

Probabl CEO Yann Lechelle and co-founder Guillaume Lemaitre argue that classic machine learning, with scikit-learn at its centre, still powers most AI that earns money in production, such as fraud detection, and that generative AI does not replace it. Probabl was spun out of the French research centre INRIA. Its legal structure is designed so that the company cannot drift away from open source.

## Key points

- **Scale of use.** Lechelle says scikit-learn has 1.5 billion cumulative downloads, about 80 million a month (22% from the US, 3% from France), and nearly 900,000 dependent GitHub projects. He says it is downloaded as often as PyTorch and TensorFlow combined.
- **Mission-locked company.** Probabl's bylaws make open source for data science its stated mission, using a new French B Corp-style law. Lechelle says the scikit-learn brand belongs to INRIA, so Probabl can lose it if it breaks that mission. The scikit-learn licence and governance are unchanged.
- **Why it still matters.** Lechelle says scikit-learn is frugal (it runs on CPUs), predictable and easy to inspect, unlike black-box deep learning. Lemaitre calls it the default choice for tabular data.
- **Paying for it.** Nearly 10 staff work only on open source, which Lechelle treats as a deliberate cost centre. It is funded through sponsorships, a planned data-science companion product and a new certification, which drew 600 registrations in a couple of days. Probabl has 70 individual investors and aims for an IPO, not a sale.
- **Ecosystem work.** Lemaitre describes the skops and skrub libraries, the callback feature in version 1.5, which lets users hook into model training, and publishing a roadmap every six months. He also tells how his imbalanced-learn work showed that much of the published research on imbalanced data was flawed.

## Quotes

> "Scikit-learn is downloaded as many times as PyTorch and TensorFlow combined." — Yann Lechelle

> "We need people to own their data science. That's why that is our tagline." — Yann Lechelle
