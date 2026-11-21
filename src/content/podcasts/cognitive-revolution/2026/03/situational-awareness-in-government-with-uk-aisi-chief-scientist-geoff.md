---
title: >-
  Situational Awareness in Government, with UK AISI Chief Scientist Geoffrey
  Irving
description: >-
  UK AISI chief scientist Geoffrey Irving argues current AI safety methods won't
  deliver many nines of reliability, and that most bad model behaviour is reward
  hacking under optimisation pressure.
pubDate: '2026-03-01'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/situational-awareness-in-government-with-uk-aisi-chief-scientist-geoffrey-irving/
youtube: 'https://www.youtube.com/watch?v=M5Ho6AA7rSw'
durationMin: 139
hosts:
  - Nathan Labenz
guests:
  - Geoffrey Irving
tags:
  - ai-safety
  - ai-evaluations
  - jailbreaking
  - reward-hacking
  - ai-governance
draft: false
---
## Thesis

Geoffrey Irving, chief scientist at the UK AI Security Institute, tells Nathan Labenz that everyone should hold wide uncertainty about how fast AI will advance, and that the current safety plan rests on empirical methods that can't deliver high reliability. He thinks alignment probably has a solution in principle. AISI is therefore funding theory, from complexity theory to game theory, in the hope of firmer guarantees.

## Key points

- **What AISI does.** Irving says the institute has close to 100 technical staff out of about 250 in total. Its focus is catastrophic risks (bio, large-scale cyberattacks, loss of control) and large-scale societal impacts such as persuasion and emotional reliance. It briefs UK and allied governments and red-teams frontier models under a voluntary regime.
- **Every model has been jailbroken.** Across more than 30 testing runs, the red team broke the safeguards every time it tested them, though Irving says jailbreaks now take longer. A new "boundary point jailbreaking" method automatically finds nonsense-token attacks that don't transfer between models.
- **One root cause.** Irving calls sycophancy, deception and test tampering "all basically versions of reward hacking", a problem as old as computer science. He warns that safety layers could fail together, because jaggedness disappears for tasks well below a model's frontier.
- **RL beyond verifiable rewards.** He says 2025 training mixed verifiable rewards with self-critique and rough scalable oversight. That is why models can now troubleshoot a bio experiment from a photo, a task with no verifiable answer.
- **Eval awareness is growing.** Newer models are more aware of being tested. AISI's mitigations include using real coding sessions by its own staff, but Irving has low confidence they will keep working.
- **Theory and formal methods.** He traces debate back to Paul Christiano's amplification work. He wants Lean-based verification efforts like Harmonic's to shift effort from maths to software security. On Goodfire's intentional design, he notes that frontier training stays a "mess" whatever technique is added.

## Quotes

> "you're not going to get to a lot of nines with the current technology." — Geoffrey Irving

> "we've seen reward hacking for the last seventy years of like the whole history of computer science." — Geoffrey Irving
