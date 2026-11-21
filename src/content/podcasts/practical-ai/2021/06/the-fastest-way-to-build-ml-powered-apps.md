---
title: The fastest way to build ML-powered apps
description: >-
  Most model value is lost between the notebook and production; BaseTen aims to
  let data scientists deploy models, write business logic and build UIs in
  Python without touching infrastructure.
pubDate: '2021-06-01'
show: practical-ai
episode: 136
url: 'https://share.transistor.fm/s/9d384fbd'
durationMin: 43
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Tuhin Srivastava
tags:
  - mlops
  - model-deployment
  - developer-tooling
  - data-science
  - low-code
draft: false
---
## Thesis

Tuhin Srivastava, co-founder and CEO of BaseTen, argues that the hard part of machine learning is not training a model but making it practical: putting it behind an API, wrapping it in business logic and getting it in front of users who can give feedback. BaseTen's bet is that data scientists should keep writing Python while the platform hides containers, servers and front-end work, without turning into opaque "magic".

## Key points

- **From research function to product.** Srivastava describes moving from ALS research at Beth Israel (support vector machines on electrical impedance myography data) to fraud work at Gumroad, where he spent three to six months becoming a Rails developer so his models would actually ship.
- **The scarce skill.** He says companies increasingly want machine learning engineers who can go from SQL to a served model, and that such people are very hard to find. Whitenack adds that many tutorials stop at evaluation, ignoring integration.
- **Home-made glue.** Srivastava recalls pickled models behind Flask apps, and a co-founder's healthcare team emailing Excel files of predicted diagnoses to doctors for feedback.
- **The workflow.** In BaseTen, a call from a Jupyter notebook deploys a PyTorch, scikit-learn, TensorFlow or custom model (load/predict class plus requirements.txt) as a REST API. Pre- and post-processing run as an Airflow-like graph, triggered by API, cron or Kafka, with a drag-and-drop UI builder. He claims users have had live services running in 30 to 40 minutes.
- **Design principles.** "Least astonishment" and "easy things are easy and hard things are possible"; the stack (Docker, Knative, Postgres) stays inspectable. He concedes very high-throughput systems need specialised tooling, and that the product is still in beta and focused on usability.
- **What excites him.** Nine out of ten new computer science graduates have some ML exposure, and pre-trained models such as those on Hugging Face cut the time to a first model, widening the user base to general engineers.

## Quotes

> "if you can get it behind a Flask API working decently performantly, not amazingly performantly, honestly, you're in the top 1% of data scientists" — Tuhin Srivastava

> "Code is great. Infra is hard." — Tuhin Srivastava
