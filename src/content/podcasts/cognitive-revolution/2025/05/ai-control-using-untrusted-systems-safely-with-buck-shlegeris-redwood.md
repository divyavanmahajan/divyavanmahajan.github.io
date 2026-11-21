---
title: >-
  AI Control: Using Untrusted Systems Safely with Buck Shlegeris, Redwood
  Research (80,000 Hours Pod)
description: >-
  Redwood Research CEO Buck Shlegeris argues labs can get useful work from AIs
  that may be scheming by assuming misalignment and layering cheap monitoring,
  resampling and auditing controls.
pubDate: '2025-05-04'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/ai-control-using-untrusted-systems-safely-with-buck-shlegeris-redwood-research-80-000-hours-pod/
youtube: 'https://www.youtube.com/watch?v=AQgxuIE7mnU'
hosts:
  - Nathan Labenz
guests:
  - Rob Wiblin
  - Buck Shlegeris
tags:
  - ai-control
  - ai-safety
  - alignment
  - monitoring
  - insider-threat
draft: false
---
## Thesis

In this cross-post from the 80,000 Hours Podcast, Rob Wiblin interviews Buck Shlegeris, CEO of Redwood Research. Shlegeris argues that instead of only trying to prevent misalignment, labs should assume their AIs might be badly misaligned and design deployments that stay safe anyway. He thinks a list of fairly cheap measures would remove much of the risk, but that AI companies have less time and appetite for safety work than he once expected.

## Key points

- **Threat model.** Shlegeris pictures a lab around 2028 with about 1,000 staff and 100,000 copies of its AI running about 16 times faster than a human. He worries more about AIs hacking the lab's own data centre, where the compute is, than about weights escaping to the internet.
- **Spies versus schemers.** Unlike Google's few human spies, copies of one model are all scheming or none are, so two-person review fails. In return, AIs can be tested endlessly in situations they cannot tell from real ones.
- **Execute, replace, audit.** A weaker trusted model scores every action. The most suspicious ones are escalated to humans or swapped for a resampled action. If only one action in 1,000 can be audited, the monitor needs a 0.1% false positive rate. Replacing actions forces an attacker to try far more often.
- **Untrusted monitoring.** Another copy of the strong model can act as monitor, checked by honeypots. To block hidden collusion signals, Shlegeris suggests having a trusted model paraphrase actions before the monitor sees them.
- **After catching an AI.** Catching one attempt may not change sceptics' minds, Shlegeris says. It does give training data for probes, and he argues a lab may feel safer the day after a caught escape attempt than the day before.
- **Where to work.** His "ten people on the inside" argument is that a small team could run basic "level 1" control, even at less cautious companies such as Meta. Overall, though, he thinks fewer safety researchers should sit inside AI companies, because outside research is easier to share.

## Quotes

> "Whereas in the AI situation, it's very correlated. And if you have these AIs, they're probably either none scheming against you or all scheming against you" — Buck Shlegeris

> "I've just also updated drastically downward on how many things AI companies have the time or appetite to do." — Buck Shlegeris
