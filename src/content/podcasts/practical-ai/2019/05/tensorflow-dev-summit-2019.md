---
title: TensorFlow Dev Summit 2019
description: >-
  TensorFlow 2.0 makes Keras and eager execution the default, and its
  surrounding ecosystem for data, pipelines and edge deployment is what keeps it
  competitive.
pubDate: '2019-05-07'
show: practical-ai
episode: 42
url: 'https://share.transistor.fm/s/44029566'
durationMin: 59
hosts:
  - Chris Benson
  - Daniel Whitenack
guests: []
tags:
  - tensorflow
  - deep-learning-frameworks
  - mlops
  - edge-ai
  - federated-learning
draft: false
---
## Thesis

Chris Benson and Daniel Whitenack recap the TensorFlow Dev Summit 2019. They argue that the TensorFlow 2.0 alpha, with Keras as the main interface and eager execution by default, makes the framework far easier to learn, and Benson contends that TensorFlow's main strength is its thought-out path to production across servers, mobile, browsers and edge devices.

## Key points

- **Keras and eager execution.** Benson describes an 80-20 split: most work now goes through Keras, with the lower-level API kept for edge cases. Whitenack says the deferred graph execution of TensorFlow 1.x was his main blocker for debugging, and notes that the `tf.function` decorator still lets code run as a graph.
- **TensorFlow Datasets.** Benson welcomes ready-made datasets such as MNIST, Street View house numbers and the one billion word benchmark (29 at launch). Whitenack's complaint about such loaders is that they hide the data format, making it hard to swap in custom data.
- **Federated learning and privacy.** Whitenack explains TensorFlow Federated as training on devices and merging updates on a central server, but questions how many organisations other than Google will use it. TensorFlow Privacy adds differential privacy, which Benson links to GDPR.
- **TFX for production.** Whitenack stresses that training is a small part of production work and describes TFX components, a shared metadata store, lineage tracking and orchestration via Airflow or Kubeflow. Benson calls it one of the most important announcements because teams he worked with used TensorFlow in very different, unstandardised ways.
- **Deployment targets and hardware.** The hosts cover TensorFlow Lite, TensorFlow.js, Swift for TensorFlow and Google's Coral Edge TPU dev board and USB accelerator, which Whitenack compares to Intel's Movidius stick. Benson highlights TF Agents for reinforcement learning.
- **Learning resources.** They point to the deeplearning.ai TensorFlow 2.0 specialisation (four courses), a Udacity course, fast.ai's Swift for TensorFlow work and the new O'Reilly TensorFlow World conference.

## Quotes

> "the training bit, which is often emphasized, so the training of a model or the fitting of a model, is often a very small part of the overall work" — Daniel Whitenack

> "It's the fact that they've thought about the operational side to such an extensive degree." — Chris Benson
