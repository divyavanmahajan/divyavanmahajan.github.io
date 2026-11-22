---
title: "Build custom ML tools with Streamlit"
date: 2019-11-25
show: practical-ai
episode: 66
url: "https://share.transistor.fm/s/ecbd3038"
duration_min: 44
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Adrien Treuille"]
description: "Every ML team ends up building internal apps, and Streamlit lets data scientists turn a Python script into a shareable app without front-end engineering."
tags: ["streamlit", "ml-tooling", "python", "open-source", "data-apps"]
source_transcript: "practical-ai/episodes/2019/11/2019-11-25-build-custom-ml-tools-with-streamlit.md"
draft: false
---

## Thesis

Adrien Treuille, co-founder and CEO of Streamlit, argues that every machine learning team ends up building apps, both internal tools and interfaces for other teams, and that handing this work to Flask developers or app teams slows the iteration cycle. Streamlit's answer is a pip-installable Python library that turns an ordinary ML script into an interactive web app.

## Key points

- **Why ML teams need apps.** Treuille draws on his time at Google X and Zoox, where the self-driving team built tools to run, search and compare simulations and a scenario replay tool to scrub through sensor readings. He calls this application layer the focal point of the team.
- **How it works.** Developers sprinkle commands such as st.write and st.slider into existing NumPy, PyTorch or TensorFlow code and launch it with "streamlit run". A background server, WebSockets and a browser app stay hidden. The app model combines top-to-bottom data flow, widgets, a sidebar and caching via st.cache.
- **Relationship to Jupyter and Shiny.** Treuille sees Jupyter as centred on exploratory data analysis and uses it alongside Streamlit. R's Shiny was an explicit inspiration, though Shiny wires callbacks while Streamlit uses a declarative data flow model.
- **Community-driven direction.** Early Streamlit focused on visualising code with hot reloading; users pushed for apps. The team studied other frameworks in a 70-slide deck before building it. Early adoption came through Treuille's network in Silicon Valley ML teams; the show notes name AI2, Stripe, Stitch Fix, Uber and Twitter.
- **Business model.** The library stays free and open source under a permissive licence, while a paid Streamlit for Teams product will add deployment, load balancing, authentication and logging.
- **Use cases and extensions.** Treuille lists interactive resumes, model demos in GitHub repos, dashboards, annotation tools and real-time monitoring on a Raspberry Pi at Google X. He suggests replacing small command line tools with Streamlit apps, and says a plugin architecture is designed for release in 2020.

## Quotes

> "It was like the bonfire of the team." — Adrien Treuille

> "we would be really honored to be considered the shiny of Python." — Adrien Treuille
