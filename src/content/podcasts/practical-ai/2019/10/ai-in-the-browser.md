---
title: AI in the browser
description: >-
  Victor Dibia argues that running models in the browser with TensorFlow.js
  offers privacy, easy distribution and interactivity, provided models are kept
  small and treated as public assets.
pubDate: '2019-10-21'
show: practical-ai
episode: 61
url: 'https://share.transistor.fm/s/574712ac'
durationMin: 50
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Victor Dibia
tags:
  - tensorflow-js
  - javascript
  - privacy
  - edge-ai
  - computer-vision
draft: false
---
## Thesis

Victor Dibia, a research scientist at Cloudera Fast Forward Labs, argues that the browser is a useful place for machine learning despite being single-threaded and sandboxed. Its value lies in keeping user data on the device, avoiding painful installs and enabling interactive experiences, with model size the main obstacle to wider adoption.

## Key points

- **Background.** Dibia studied software engineering at Carnegie Mellon, started a company in Lagos, did a PhD at City University of Hong Kong and moved into AI at IBM Research, where he worked on Data2Vis (a sequence-to-sequence model that proposes visualisations) and TJBot, a cardboard Raspberry Pi robot kit.
- **Three benefits.** He names privacy, ease of distribution (friends gave up on ML after days trying to install TensorFlow) and interactivity with low latency. TensorFlow.js runs in the browser and Node.js, with a WebGL backend for GPU acceleration.
- **Three workflows.** Dibia describes an online flow (train and infer in the browser), an offline flow (train in Python or Keras, then convert to the web format) and a hybrid flow (convert, then fine-tune on user data in the browser). In-browser training suits small models and a few thousand tabular records.
- **Real uses.** He cites Airbnb checking uploaded profile photos for sensitive content such as driver's licences without the image reaching its servers, and his own Handtrack.js for camera-based hand tracking.
- **Limits.** Models are web assets that users can download unless protected, Dibia warns. Handtrack.js is about 18 MB, so he sees compression research as key. He links TensorFlow.js to federated learning and contrasts it with TensorFlow Lite.
- **Getting started.** He recommends the Layers API, which mirrors Keras. Fast Forward Labs' ConvNet Playground showed that EfficientNet B2, with about 5 million parameters, can extract better features than VGG16, with over 130 million.

## Quotes

> "we're able to offer you a service, but we never actually see your data because it never gets to a service." — Victor Dibia

> "in web standards, 500 kilobytes is already a lot of data." — Victor Dibia
