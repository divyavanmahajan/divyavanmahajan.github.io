---
title: "Machine learning in your database"
date: 2022-06-22
show: practical-ai
episode: 182
url: "https://share.transistor.fm/s/ca7e5e7e"
duration_min: 49
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Montana Low", "Lev Kokotov"]
description: "Former Instacart engineers Montana Low and Lev Kokotov argue that most business machine learning can run inside Postgres, cutting out the data pipelines and microservices that add latency and complexity."
tags: ["postgres", "mlops", "databases", "data-architecture", "sql"]
source_transcript: "practical-ai/episodes/2022/06/2022-06-22-machine-learning-in-your-database.md"
draft: false
---

## Thesis

Montana Low and Lev Kokotov, who scaled data infrastructure at Instacart, argue that most business machine learning amounts to predicting one column from relational data. Doing that inside the database removes much of the ETL, the feature plumbing and the latency of moving rows to the application. Their PostgresML extension, then in public alpha, lets users train and serve models with SQL.

## Key points

- **The Instacart migration.** Low describes how the catalog, built on Elasticsearch, had to join about a million products with 10,000 stores. During the first week of the pandemic, Instacart went through a year's worth of planned growth. The team switched live traffic to a prototype Postgres cluster, which after tuning ran at about 4% CPU.
- **Fast disks over RDS.** Kokotov ran Postgres on EC2 with local NVMe drives because RDS network disks were too slow. He says he could scan a 100 GB table in about 30 seconds.
- **Data movement is the real cost.** Low argues that serialising thousands of rows and sending them to the application layer costs more than model inference, which is optimised C code.
- **Training is one function call.** PostgresML wraps scikit-learn and XGBoost. Users pass a table or view and an algorithm name to a train function. The model is stored in a models table and served with a predict function. Hyperparameter search builds many models and deploys the best one.
- **Treat the model as a black box.** Low says most businesses do not need to understand the maths behind each algorithm. A planned dashboard ranks algorithms by a key metric so users can pick the best score.
- **PgCat and the company.** Kokotov built PgCat, a proxy that adds sharding, load balancing and failover in front of Postgres. The two have left Instacart and started a company to combine PgCat and PostgresML in an online service. They ask listeners to file GitHub issues about missing features.

## Quotes

> "You hit XGBoost and your predictions are gold standard. You don't even need deep learning 90% of the time." — Montana Low

> "Compute is cheap enough now that you can train your data with 50 different algorithms and just pick the best." — Montana Low
