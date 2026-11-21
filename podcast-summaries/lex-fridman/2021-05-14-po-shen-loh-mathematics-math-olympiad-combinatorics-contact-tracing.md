---
title: "#183 – Po-Shen Loh: Mathematics, Math Olympiad, Combinatorics & Contact Tracing"
date: 2021-05-14
show: lex-fridman
episode: 183
url: "https://lexfridman.com/po-shen-loh/"
youtube: "https://www.youtube.com/watch?v=6z1JwZbX4dQ"
duration_min: 147
hosts: ["Lex Fridman"]
guests: ["Po-Shen Loh"]
description: "CMU mathematician Po-Shen Loh argues that the core skill to teach is invention, and shows it at work in NOVID, an anonymous contact-tracing app built on network theory and incentives."
tags: ["mathematics", "math-education", "contact-tracing", "network-theory", "combinatorics", "incentive-design"]
source_transcript: "lex-fridman/episodes/2021/05/2021-05-14-po-shen-loh-mathematics-math-olympiad-combinatorics-contact-tracing.md"
draft: false
---

## Thesis

Po-Shen Loh, a Carnegie Mellon mathematician and coach of the US International Math Olympiad team, tells Lex Fridman that the most valuable thing mathematics teaches is how to invent, not how to repeat methods. He applies the same idea to his COVID work: by reframing distance to disease as the number of close relationships separating you from it, his team designed an app whose incentives work with human self-interest rather than against it.

## Key points

- **NOVID's reframing.** Loh explains that NOVID uses Bluetooth proximity, not GPS, to build an anonymous network and tells each user how many hops away a reported case is. Unlike standard apps that warn you after exposure, it helps you avoid getting sick, so people want to install it, and the incentive grows as a disease gets deadlier.
- **Engineering for scale.** Loh says former competition programmers built the back end in C++ to serve large populations from very few servers, using sparse networks and near-linear algorithms. Positive reports can be verified with short-lived codes from local health authorities.
- **Teaching as improv.** Loh builds proofs from students' ideas rather than a script. His CMU exams are 90% of the grade, open notes, and never overlap with past problems or lectures. His Daily Challenge lessons pose a question and release hints over three minutes.
- **The Olympiad and its purpose.** Six students per country solve six proof problems over two 4.5-hour days, each worth 7 points. Loh says when he became head coach in 2013 he measured success by how many students he would read about in the New York Times in 20 years, not by winning.
- **What makes problems hard.** Loh counts the leaps of insight required; difficulty grows exponentially with them. He taught himself from textbooks by noting a proof's length, closing the book and re-proving it.
- **Research results.** Loh describes voting-tree circuits, where his team improved the guaranteed strength of the winner to square root of n, and work with Eyal Lubetzky on stochastic coalescence, where accepting the smallest lump fixes a slowdown.

## Quotes

> "i don't think of it as a memory hardness i think of it as a can you invent something hardness" — Po-Shen Loh

> "we were making a viral app to fight a virus spreading on the same network that the virus spreads out" — Po-Shen Loh
