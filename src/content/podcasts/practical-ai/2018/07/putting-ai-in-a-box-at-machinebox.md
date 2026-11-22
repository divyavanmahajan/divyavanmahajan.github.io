---
title: Putting AI in a box at MachineBox
description: >-
  MachineBox packages machine learning models as Docker containers with simple
  HTTP/JSON APIs, so developers can add capabilities like face recognition
  without learning data science.
pubDate: '2018-07-02'
show: practical-ai
episode: 2
url: 'https://share.transistor.fm/s/50e38a16'
durationMin: 45
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Mat Ryer
  - David Hernandez
tags:
  - machine-learning-deployment
  - docker
  - apis
  - golang
  - startups
draft: false
---
## Thesis

Mat Ryer and David Hernandez, co-founders of MachineBox, argue that most developers should not need to learn TensorFlow to use machine learning. Their product hides the complexity inside Docker containers with small HTTP APIs, and they say the hard parts that remain are explaining false positives to customers and staying focused on real problems.

## Key points

- **Models in a box.** Hernandez explains that users only need Docker and basic HTTP skills: pull an image such as Facebox and add face recognition "in just minutes". Ryer says Facebox supports one-shot teaching from a single image, and each box hosts its own documentation site on localhost 8080.
- **Who uses it.** Ryer says the target is developers who want to avoid the heavy lifting of machine learning and keep data on their own network. Hernandez's favourite users are DevOps engineers who want to solve a specific problem quickly.
- **Black boxes are fine for some uses.** Hernandez says explainability matters for credit or insurance decisions but less for face matching. Ryer adds that the code is too complex to be a useful open source project.
- **Go for serving, Python for training.** Hernandez says over 80% of the code is Go, since most of it is APIs and network calls, while models are trained in Python with Keras and TensorFlow. Ryer credits Go's limited feature set and their selectiveness for letting two developers and one business person ship many products.
- **Production lessons.** Hernandez says the hardest part is people: customers file bugs that are really false positives. Ryer says the boxes were built to scale horizontally, for example in Kubernetes, drawing on Hernandez's work on BBC systems for the 2012 Olympics.
- **Advice.** Ryer suggests starting by consuming APIs and learning what data each problem needs; Hernandez recommends picking one problem, such as sentiment analysis, and learning by doing.

## Quotes

> "changing the mindset to accept that a thing is not a bug, it's a false positive in a machine learning model, it changes the way that you interact with people." — David Hernandez

> "And the problem shouldn't be anything to do with machine learning. But machine learning might be part of the solution." — Mat Ryer
