---
title: "#95 – Dawn Song: Adversarial Machine Learning and Computer Security"
date: 2020-05-12
show: lex-fridman
episode: 95
url: "https://lexfridman.com/dawn-song/"
youtube: "https://www.youtube.com/watch?v=HhY95m-WD_E"
duration_min: 133
hosts: ["Lex Fridman"]
guests: ["Dawn Song"]
description: "Berkeley security researcher Dawn Song argues that machine learning systems are easy to fool and leak training data, and that richer representations, consistency checks and data ownership are the way forward."
tags: ["adversarial-machine-learning", "computer-security", "privacy", "data-ownership", "program-synthesis"]
source_transcript: "lex-fridman/episodes/2020/05/2020-05-12-dawn-song-adversarial-machine-learning-and-computer-security.md"
draft: false
---

## Thesis

Dawn Song, a UC Berkeley professor of computer science, tells Lex Fridman that attacks are moving up the stack, from software towards humans and machine learning models. She argues that today's deep learning systems are not learning the right or rich enough representations, which makes them easy to fool and prone to leaking private data. Her proposed remedies are consistency checks, multi-sensor fusion, differential privacy and clear ownership of personal data.

## Key points

- **Humans as the weakest link.** Song says no real-world system can be shown to be 100% free of vulnerabilities, even with formally verified microkernels, compilers and file systems. Since humans cannot be patched, she worries most about social engineering and describes chatbots that could challenge a suspicious correspondent.
- **Adversarial and backdoor attacks.** Song describes perturbed stop signs that stay effective across viewing distances and angles (now exhibited at the Science Museum in London). She also describes poisoned face-recognition training data, where anyone wearing certain glasses is recognised as a chosen person.
- **Real systems are vulnerable.** Her group trained an imitation model by querying Google Translate. Changing "6" to "7" in an English sentence made the translation read 21 Celsius instead of 6 Fahrenheit, and the attack transferred to Google's service. Fridman notes that Elon Musk dismissed such attacks on Tesla; Song says she is fully confident they are feasible, and that attackers currently have the upper hand.
- **Defences.** Song proposes spatial consistency checks for segmentation, temporal checks for audio, and fusing many sensors in autonomous vehicles.
- **Privacy and data ownership.** With Google researchers, she showed that a language model trained on the Enron emails could leak social security and credit card numbers; differential privacy blocked the attack with similar utility. She argues that, like property rights, clear data ownership should come first, and describes Oasis Labs' platform for a "responsible data economy".
- **Program synthesis.** Song calls it the perfect playground for building intelligent machines, citing progress from IFTTT recipes to SQL queries and recursive programs.

## Quotes

> "program synthesis is about teaching computers to write code to program" — Dawn Song

> "science there's no border and the advancement of technology helps everyone helps the whole world" — Dawn Song
