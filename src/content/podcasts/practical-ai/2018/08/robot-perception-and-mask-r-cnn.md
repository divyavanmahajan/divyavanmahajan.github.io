---
title: Robot Perception and Mask R-CNN
description: >-
  Mask R-CNN adds pixel-level object masks to detection, which matters when a
  robot needs orientation, but costs more compute and annotation effort than
  bounding-box models like YOLO.
pubDate: '2018-08-27'
show: practical-ai
episode: 11
url: 'https://share.transistor.fm/s/2acde001'
durationMin: 47
hosts:
  - Chris Benson
  - Daniel Whitenack
guests:
  - Chris DeBellis
tags:
  - computer-vision
  - robotics
  - mask-r-cnn
  - transfer-learning
  - data-annotation
draft: false
---
## Thesis

Chris DeBellis, a lead AI data scientist at Honeywell, explains how Mask R-CNN extends convolutional object detection by marking exactly which pixels belong to each object. He argues it is the right tool when a robot needs an object's shape and orientation, but that its compute cost and labelling burden make bounding-box models the better choice when boxes are enough.

## Key points

- **From classic vision to deep learning.** DeBellis contrasts traditional techniques such as Canny edge detection and Hough line transforms with deep learning, which took off around AlexNet in 2012. CNN layers build up from simple lines and curves to eyes, faces and whole objects.
- **Why masks matter.** In a Udacity robotics nanodegree exercise, a two-armed robot must pick a tube of toothpaste off a desk. DeBellis says a bounding box does not reveal that the tube is rotated 45 degrees; the mask does. For a self-driving car, he says, a YOLO bounding box around a pedestrian is usually enough.
- **Annotation is the bottleneck.** Masks need polygon outlines, which get hard with occluded objects. DeBellis says his team spent 15 to 20 minutes per image with up to 40 or 50 objects, stopped at a few hundred images for a proof of concept, and recommends annotation vendors for scale.
- **Transfer learning and compute.** Teams start from weights trained on the COCO dataset. DeBellis notes Mask R-CNN on a ResNet-101 backbone runs billions of floating point operations, so a single, weaker GPU on a robot may manage only two to ten images per second.
- **Getting started.** DeBellis argues coding, especially Python, matters more than deep maths when using pre-trained models, and credits Stanford lectures on YouTube and Udacity courses. Whitenack calls this encouraging for people without a PhD.
- **Where to start coding.** DeBellis recommends the Matterport Mask_RCNN repository (Keras, TensorFlow and NumPy) for its Jupyter notebooks and active issues, and mentions Facebook's Detectron in Caffe2 and a pure TensorFlow version from Google.

## Quotes

> "The mask, since it fills in the pixels for you of where the object is, you can look at it and say, oh, it's not straight up and down." — Chris DeBellis

> "if you're passionate about it, don't let anybody tell you you can't do it. And it's not easy, but it's not impossible." — Chris DeBellis
