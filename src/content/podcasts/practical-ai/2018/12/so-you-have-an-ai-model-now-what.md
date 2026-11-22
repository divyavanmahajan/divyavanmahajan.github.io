---
title: 'So you have an AI model, now what?'
description: >-
  A trained model only creates value once it is wrapped as a software component
  and served for inference, in the cloud, on specialised chips, at the edge or
  in the browser.
pubDate: '2018-12-10'
show: practical-ai
episode: 24
url: 'https://share.transistor.fm/s/f54e5670'
durationMin: 40
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - inference
  - model-deployment
  - edge-ai
  - ai-hardware
  - onnx
draft: false
---
## Thesis

Chris Benson and Daniel Whitenack focus on what happens after training: inference. They argue that a model has to be serialised, wrapped as a software component and integrated into products, and that the growing choice of inference servers, chips and runtimes gives teams more deployment options but also more targets to support.

## Key points

- **Models as components.** Whitenack describes a trained model as a function with millions of tuned parameters that is saved, loaded and called for inference. Benson says to treat it as a software component, often trained in Python but deployed in C++, Java or Go.
- **NVIDIA open-sources TensorRT inference server.** Whitenack highlights its optimisation focus and support for extra backends via ONNX. Benson, who used TensorRT at scale, sees open-sourcing as a sensible move to keep NVIDIA's lead.
- **Amazon's own chip.** Benson reads Amazon's new machine learning chip for AWS as reducing vendor dependence and gaining pricing leverage over NVIDIA and Intel. Whitenack compares it to Google's TPU, and worries about the number of architectures to support.
- **Portability.** Whitenack sees ONNX as a way to standardise model artifacts but finds it still rough. Benson recalls running separate TensorRT and Qualcomm Snapdragon workflows and wants one workflow across vendors.
- **Edge and browser inference.** Benson cites latency in speech recognition as a reason to run on device. Whitenack mentions the Penn State farming app's connectivity and battery limits, and Microsoft's ONNX.js and TensorFlow.js for privacy. Benson adds that keeping data local can help with GDPR; Whitenack warns that shipping a model to clients exposes it.
- **Learning resources.** They recommend the Medium article "Rise of the Model Servers", NVIDIA's dev blog, Qualcomm's SNPE SDK docs and the TensorFlow.js tutorials.

## Quotes

> "your model doesn't do any good until you deploy it into the real world and it's useful for your customer, for your end user." — Chris Benson

> "no one codes in JavaScript, but everybody codes in JavaScript." — Daniel Whitenack
