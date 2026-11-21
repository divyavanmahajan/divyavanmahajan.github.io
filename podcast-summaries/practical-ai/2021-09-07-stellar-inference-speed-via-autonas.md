---
title: "Stellar inference speed via AutoNAS"
date: 2021-09-07
show: practical-ai
episode: 148
url: "https://share.transistor.fm/s/e07c06a1"
duration_min: 42
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Yonatan Geifman"]
description: "Deci's Yonatan Geifman argues that inference speed should shape model design from the start, using hardware-aware neural architecture search tuned to the exact deployment device."
tags: ["inference", "neural-architecture-search", "model-optimization", "edge-ai", "computer-vision"]
source_transcript: "practical-ai/episodes/2021/09/2021-09-07-stellar-inference-speed-via-autonas.md"
draft: false
---

## Thesis

Yonatan Geifman, CEO and co-founder of Deci, argues that teams should consider inference latency, cost and model size when they choose a model, not after they have reached target accuracy. Different hardware favours different network shapes, so he advocates "hardware in the loop" neural architecture search that measures real latency on the target device while keeping accuracy above a threshold.

## Key points

- **Why inference matters.** Geifman notes that a model is trained once, but inference scales with production data. In a self-driving car fleet, the hardware inside every car matters more than the GPUs data scientists use for training.
- **The inference stack.** He describes layers: hardware, then drivers and graph compilers (OpenVINO, TensorRT), then pruning and quantization, with model design on top. GPUs prefer fewer, wider layers; CPUs prefer narrower layers but can take more of them.
- **AutoNAC.** Deci's proprietary search, Automatic Neural Architecture Construction, scans hundreds of thousands of candidate architectures. In an MLPerf collaboration with Intel, it reworked ResNet-50 on ImageNet to run about 3x faster at the same 76% accuracy.
- **Measure, don't proxy.** Geifman says FLOPs are a weak proxy for latency, which is why he is wary of pruning that targets them. He prefers connecting the exact device, such as a specific Jetson model.
- **Basic operators still win.** His researchers find that well-composed classic blocks from ResNet, MobileNet and EfficientNet usually beat newer tricks. A quantized ResNet compiled with TensorRT is hard to beat.
- **DeciNets and deployment.** Pre-optimised DeciNets set an "efficient frontier" of accuracy versus latency, including a model he says is about three times faster than EfficientNet-B0 on a Jetson GPU. Models ship through the Infery edge engine, the RTiC container server, or as ONNX, TensorFlow, PyTorch or Keras files.

## Quotes

> "having the right composition of operators is more crucial than having all those fancy tricks that showed up in the last two or three years" — Yonatan Geifman

> "Because I can show examples where I cut the flops in factor of two. And the latency is getting slower on GPU, on Jetson, on some types of devices." — Yonatan Geifman
