---
title: It's time to talk time series
description: >-
  Time series data is everywhere, and for univariate forecasting classical
  statistical methods usually beat neural nets; neural nets earn their cost on
  multivariate problems.
pubDate: '2019-10-28'
show: practical-ai
episode: 62
url: 'https://share.transistor.fm/s/139d73d7'
durationMin: 43
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Anais Dotis-Georgiou
tags:
  - time-series
  - forecasting
  - anomaly-detection
  - influxdb
  - statistics
draft: false
---
## Thesis

Anais Dotis-Georgiou, a developer advocate at InfluxData, argues that almost every industry produces time series data worth storing, and that choosing an analysis method starts with checking the data's statistical properties. Her rule of thumb: use statistical methods for univariate forecasting and reach for neural nets when you have many related series and the business case justifies the extra effort.

## Key points

- **Time series everywhere.** Dotis-Georgiou lists industrial IoT sensors, DevOps and application monitoring, patient health, greenhouses, solar panels and CERN, which used open source InfluxDB to monitor its particle accelerators. She adds that LSTMs use temporal context to classify video stills, citing The Breakfast Club.
- **What InfluxDB does.** She describes an append-only database built for very high write volumes at nanosecond precision with real-time queries. Version 2.0 uses Flux, a functional language with pipe-forward syntax; the 1.x line uses the SQL-like InfluxQL.
- **Check assumptions first.** Influx ships double and triple exponential smoothing out of the box. Every method has assumptions, she says: Holt-Winters expects trend and seasonality, so it is the wrong choice when either is missing. She recommends starting with a problem you know and exploring lag and autocorrelation in scikit-learn.
- **Statistical versus neural.** Citing the Makridakis (M) competitions, which test 100,000 univariate series, she reports that a hybrid of an RNN and exponential smoothing won, but pure statistical methods beat pure machine learning methods. She explains that autocorrelation, illustrated with her own predictable hunger pattern, can cause RNNs and LSTMs to overfit.
- **Simple often works.** Many users find that flagging points a set number of standard deviations from the mean is enough for anomaly detection, she says; for heavier work she would pair Influx with H2O.ai or BigQuery.
- **Getting started.** A free cloud tier, a single-binary install, and Telegraf, an open source collection agent with over 180 plugins. Benson plans to monitor his wife's garden.

## Quotes

> "time series is just any data that has a timestamp attached to it." — Anais Dotis-Georgiou

> "I think it makes sense to use statistical methods when you are only dealing with univariate time series data and use neural nets if you're using multivariate time series data" — Anais Dotis-Georgiou
