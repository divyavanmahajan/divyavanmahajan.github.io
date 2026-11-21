---
title: "Why the Frontier Ecosystem must be Open — Matei Zaharia and Reynold Xin, Databricks"
date: 2026-06-24
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/why_the_frontier_ecosystem_must_be_open_matei_zaharia_and_reynold_xin_databricks"
duration_min: 69
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Matei Zaharia", "Reynold Xin"]
description: "Databricks' co-founders argue open, composable layers win: a common API across agent harnesses, and a shared column-oriented storage layer that ends brittle pipelines between transactional and analytical databases."
tags: ["databases", "agents", "open-source", "data-platforms", "ai-security"]
source_transcript: "latent-space/episodes/2026/06/2026-06-24-why-the-frontier-ecosystem-must-be-open-matei-zaharia-and-reynold-xin.md"
draft: false
---

## Thesis

Databricks co-founders Matei Zaharia (CTO) and Reynold Xin argue that the durable layers in AI and data are open interfaces that others can build on, while the company competes on operating hard infrastructure as a service. They present two launches from the Data + AI Summit as examples: Omnigent, an open-source layer that wraps any coding or custom agent harness, and LTAP, which unifies database storage rather than the query engine.

## Key points

- **Omnigent as a common API.** Zaharia says agents of every kind hit the same problems: switching models and harnesses every few months, sharing sessions, history and security. Omnigent maps Claude Code, Codex and others onto one session interface (send a message or file, stream output, cancel). Within days of release, roughly half of some 400 merged pull requests came from outside Databricks.
- **Contextual security policies.** Instead of yes/no tool permissions, Omnigent tracks session state: an agent that installed a day-old NPM package or read 1,000 confidential documents loses the right to publish externally. Policies can also cap spend; Zaharia describes one debugging agent that spent $500 on logs.
- **LTAP, "HTAP done right".** Xin says change data capture pipelines between OLTP and analytics are brittle and wake engineers at 3am. Building on the Neon lakebase design, Databricks writes Postgres data in column-oriented Parquet using idle CPUs in its storage fleet, so analytics, and agents investigating incidents, can read fresh data directly. An engineer settled the debate by simply prototyping it.
- **A database built by a model.** Xin describes a new analytics engine whose team trained a machine-learning model on a decade of query traces to predict which algorithms and data structures suit each workload, and to dispatch them at runtime.
- **Why open won.** Xin credits Databricks' growth against Snowflake to starting open (Parquet, Delta, Iceberg) and treating machine learning as core from the start; Zaharia adds that it began upstream with bulk processing.
- **Specialised models still matter.** Databricks chose not to chase general frontier models after DBRX, but trains task models; Zaharia says its document-parsing model is about 100x cheaper than frontier models and better.

## Quotes

> "you just wanna build the stuff that lets you deliver the agent, maybe control it if you care about security and, um, make it portable across things." — Matei Zaharia

> "we joke that it's- should be called continuous data corruption" — Reynold Xin
