---
title: '#147 – Dmitri Dolgov: Waymo and the Future of Self-Driving Cars'
description: >-
  Waymo CTO Dmitri Dolgov traces the path from the DARPA Urban Challenge to a
  public driverless service in Phoenix, and argues that lidar, heavy machine
  learning and a repeatable deployment process are the route to scale.
pubDate: '2020-12-20'
show: lex-fridman
episode: 147
url: 'https://lexfridman.com/dmitri-dolgov/'
youtube: 'https://www.youtube.com/watch?v=P6prRXkI5HM'
durationMin: 149
hosts:
  - Lex Fridman
guests:
  - Dmitri Dolgov
tags:
  - autonomous-vehicles
  - waymo
  - lidar
  - machine-learning
  - robotics
draft: false
---
## Thesis

Dmitri Dolgov, CTO of Waymo, tells Lex Fridman that running a fully driverless, paid service in Phoenix has taught Waymo what it takes to scale: better core hardware and software, a release and evaluation process that can be repeated in new cities, and a product people want to use every day. He argues that good driving means being safe, smooth and predictable at once, and that this comes from improving core capability, not from tuning the trade-off between caution and aggression.

## Key points

- **Origins.** Dolgov worked on parking-lot motion planning for Stanford's 2007 DARPA Urban Challenge team, which came second to CMU; he recalls a "victory lap" bug that cost time. Google's project began in 2009 with about a dozen people, aiming for 100,000 autonomous miles and ten 100-mile routes with no interventions, which took about 16 months.
- **Milestones.** Dolgov says the team pivoted to fully driverless vehicles around 2013, gave a blind rider a ride in the Firefly in Austin in 2015, formed Waymo at the end of 2016 and opened fully driverless rides to the public in Phoenix on 8 October 2020. Waymo also raised about $3.2 billion that year.
- **Hardware.** The fifth-generation system on the Jaguar I-Pace has 29 cameras, five lidars and six radars. Dolgov says Waymo designs its lidars almost entirely in-house and built this generation for large-scale manufacturing and the right unit economics.
- **Lidar debate.** Asked about Elon Musk calling lidar a crutch, Dolgov argues that cameras, lidar and radar complement each other, and dismisses cost and aesthetics as objections.
- **Machine learning.** Dolgov describes a hybrid stack that mixes learned models with rule-based ones. Red means stop is engineered in, but predicting whether others will run a light is left to machine learning. He sees transformer-style models helping with behaviour prediction.
- **Riders and scale.** Most riders give five stars, Dolgov says, and feedback shaped details such as pickup spots. He frames scaling around three axes: core technology, evaluation and deployment, and product and operations. He calls the trolley problem a distraction from defensive driving.

## Quotes

> "why the heck would you handicap yourself and not use one or more of those sensing modalities" — Dmitri Dolgov

> "true capabilities come from actually moving the whole curve up" — Dmitri Dolgov
