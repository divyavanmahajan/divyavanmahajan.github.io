---
title: "Detecting planets with deep learning"
date: 2018-07-16
show: practical-ai
episode: 5
url: "https://share.transistor.fm/s/8799f3fe"
duration_min: 45
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Andrew Vanderburg", "Chris Shallue"]
description: "A basic convolutional neural network trained on about 30,000 labelled Kepler signals found two exoplanets that earlier searches had missed, including an eighth planet around Kepler-90."
tags: ["deep-learning", "astronomy", "convolutional-neural-networks", "open-source", "scientific-computing"]
source_transcript: "practical-ai/episodes/2018/07/2018-07-16-detecting-planets-with-deep-learning.md"
draft: false
---

## Thesis

Astronomer Andrew Vanderburg (UT Austin) and Google AI engineer Chris Shallue explain how they used deep learning on NASA Kepler data to find exoplanets. Their case is that a simple model, framed by analogy to a well-solved problem, can find signals that years of human and conventional searches missed, and that open code and public data let others build on it.

## Key points

- **How Kepler finds planets.** Vanderburg explains that Kepler photographed about 200,000 stars every 30 minutes from 2009 to 2013. The team turns these images into "light curves" of brightness over time and looks for small, repeating dips as a planet passes in front of its star.
- **The classification problem.** Shallue frames the task as deciding whether a dip comes from a planet or from false positives such as binary stars, star spots or instrument glitches. Astronomers had already labelled over 30,000 signals by eye, giving a training set.
- **Start with the basics.** Shallue tried fully connected, convolutional and recurrent networks; a "vanilla" convolutional network worked best, treating the light curve as a one-dimensional image. His advice for new domains is to map the problem onto one that has been solved before.
- **Small data, cheap training.** Shallue says 30,000 examples is small by machine learning standards, so they used data augmentation such as reversing light curves. The model trains in under two hours on a standard desktop; future work may use simulated data and TPUs.
- **Results.** Searching 670 stars already known to host multiple planets, the model found two new ones. Kepler-90i made Kepler-90 the first known star besides the Sun with eight planets.
- **Open code, open data.** Shallue released the model in a TensorFlow GitHub repository, and Vanderburg notes NASA data is public. Vanderburg says estimates of how common Earth-like planets are still vary by more than a factor of 10.

## Quotes

> "our model was able to go in and find two planets that all of the previous searches had missed." — Chris Shallue

> "Generally, NASA data is all public because it's paid for by the taxpayers." — Andrew Vanderburg
