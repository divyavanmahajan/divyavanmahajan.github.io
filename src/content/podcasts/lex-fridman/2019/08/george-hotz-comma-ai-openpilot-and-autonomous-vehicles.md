---
title: 'George Hotz: Comma.ai, OpenPilot, and Autonomous Vehicles'
description: >-
  George Hotz argues that very good lane-keeping with strict driver monitoring
  is the only self-driving feature adding value today, and that end-to-end
  learning, not hand-coded perception, will eventually win.
pubDate: '2019-08-05'
show: lex-fridman
url: 'https://lexfridman.com/george-hotz/'
youtube: 'https://www.youtube.com/watch?v=iwcYp-XT7UI'
durationMin: 120
hosts:
  - Lex Fridman
guests:
  - George Hotz
tags:
  - autonomous-vehicles
  - driver-assistance
  - end-to-end-learning
  - driver-monitoring
  - lidar
draft: false
---
## Thesis

George Hotz, founder of comma.ai, tells Lex Fridman that comma is "proud to be level 2": its openpilot software aims to make lane-keeping very good rather than chase robotaxis. He argues that a hand-specified interface between perception and planning is always incomplete, so the only route past human performance is learning the whole driving task from real data, as AlphaGo did for Go.

## Key points

- **Origins.** Hotz says Elon Musk once offered him a contract to match Mobileye for Tesla Autopilot: 12 million dollars, minus 1 million for each month of delay. The deal fell through, but he credits those talks with starting comma.ai.
- **The product.** Hotz describes the device as a phone in a plastic case (Snapdragon 820, forward and driver-facing cameras) plus a "panda" CAN interface. It supports 45 car makes, mostly Hondas and Toyotas, and he calls the 2020 Corolla the best car for it. He says openpilot will be a consumer product at version 1.0, which requires driver monitoring that cannot be cheated.
- **Safety model.** Per Hotz, gas or brake hands control straight back to the driver, and torque, braking and acceleration limits mean the car never moves faster than a driver can react. He says Tesla should lower its torque limits and add driver monitoring, and calls Musk's claim that monitoring is unnecessary "stupid".
- **Learning over hand-coding.** Hotz says comma's perception output is a 1,024-dimensional learned vector. Lane changes are learned end to end with a flag bit, unlike the fixed manoeuvre he criticises in Navigate on Autopilot. He splits driving into static, dynamic and counterfactual problems and says only the last needs reinforcement learning.
- **Industry views.** He agrees with Musk that lidar is a crutch, used mainly for centimetre-level localisation. He gives Waymo a roughly three-year technical lead but argues robotaxis have no network effect, and calls GM's 1 billion dollar purchase of Cruise an insurance policy.
- **Business.** Hotz puts burn at about 200k dollars a month against 100k in revenue, cites 10 million miles of data, and names car insurance as comma's long-term business model.

## Quotes

> "if your perception system output can be written in a spec document it is incomplete" — George Hotz

> "my theory is that all good drivers are good in the same way and all bad drivers are bad in different ways" — George Hotz
