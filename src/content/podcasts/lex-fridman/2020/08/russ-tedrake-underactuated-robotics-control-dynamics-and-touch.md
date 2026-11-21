---
title: '#114 – Russ Tedrake: Underactuated Robotics, Control, Dynamics and Touch'
description: >-
  MIT roboticist Russ Tedrake argues that robots should let physics do more of
  the work and stop fearing contact, and that rigorous thinking and testing are
  what turn demos into dependable machines.
pubDate: '2020-08-09'
show: lex-fridman
episode: 114
url: 'https://lexfridman.com/russ-tedrake/'
youtube: 'https://www.youtube.com/watch?v=A22Ej6kb2wo'
durationMin: 169
hosts:
  - Lex Fridman
guests:
  - Russ Tedrake
tags:
  - robotics
  - control-theory
  - manipulation
  - simulation
  - darpa-robotics-challenge
draft: false
---
## Thesis

Russ Tedrake, MIT professor and vice president of robotics research at Toyota Research Institute (TRI), tells Lex Fridman that good robot control often means working with the system's natural dynamics rather than cancelling them out. He argues that contact and touch, which most robots avoid, are central to manipulation, and that the DARPA Robotics Challenge taught him that robustness depends on simulation, testing and clear, rigorous thinking.

## Key points

- **Passive dynamics.** Tedrake points to passive dynamic walkers built by Steve Collins and Andy Ruina at Cornell, powered only by gravity, and to a Harvard/MIT experiment where a dead trout swam upstream by resonating with vortices behind a rock, as evidence that mechanics can do much of the work usually given to control.
- **DARPA Robotics Challenge.** His MIT team won the right to use a 400-pound Boston Dynamics Atlas through a virtual competition, writing a faster warm-started quadratic programming solver days before it. In the finals the robot fell while getting out of the Polaris vehicle because a driving controller had not been switched off. He credits KAIST's win partly to having two robots and testing with more discipline.
- **Why contact is hard.** Tedrake explains that rigid-body models leave indeterminacies, such as the forces on a four-legged table, and that enumerating every contact configuration of a dexterous hand is combinatorially impossible.
- **Drake and TRI.** He describes Drake as an optimization library, a system modelling language and a carefully tested multibody physics engine, used at TRI to study tasks like loading a dishwasher. He also discusses fleet learning and "black swan generator" rare-event simulation for finding corner cases.
- **Underactuation and soft robots.** Most real systems, humans included, have fewer actuators than degrees of freedom, he says; tasks like buttoning a shirt or chopping onions raise new questions about state representation. Soft, sensorised hands help because cameras are blocked at the moment of grasping.
- **Rigour and fear.** Tedrake worries that deep learning makes it easy to skip rigorous thinking, and suggests fear of robots may be cultural, contrasting Terminator in the US with Astro Boy in Japan.

## Quotes

> "the world gives us under-actuated robots whether we like it or not" — Russ Tedrake

> "i think we're building robots wrong and being more soft and more contact is important" — Russ Tedrake
