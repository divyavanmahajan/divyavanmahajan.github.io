---
title: "Is Jev What AI Has Been Missing? I Tested It."
date: 2026-10-05
show: turing-post
url: "https://www.turingpost.com/podcast/s/turing_post/is_jev_what_ai_has_been_missing_i_tested_it"
duration_min: 17
hosts: ["Ksenia Se"]
guests: []
description: "Ksenia Se tests TypeSafe's Jev and argues that fast, cheap, calibrated small decisions, not more text generation, could help agents finish whole jobs reliably."
tags: ["ai-agents", "classifiers", "calibration", "system-one-models", "small-models"]
source_transcript: "turing-post/episodes/2026/10/2026-10-05-is-jev-what-ai-has-been-missing-i-tested-it.md"
draft: false
---

## Thesis

Ksenia Se gets early access to Jev, TypeSafe AI's first "System One" model, which returns constrained decisions instead of free text. She concludes that much of it is classification, an old idea, but that the speed, price and calibration make it a useful companion to coding agents. Many agent failures come from small decisions, such as picking the wrong tool, not from weak reasoning.

## Key points

- **How it works.** In the playground you supply a state and questions of three types: a yes/no probability, a choice among options you define, or a score. Asked whether a hot dog is a sandwich, Jev said 58% yes; with a definition added it rose to 77%, and an ice cream sandwich scored 33%.
- **Help-desk triage.** For a ticket about slow Wi-Fi support, Jev assigned IT help desk 100%, medium priority 83%, and picked ticket status (73%) over Wi-Fi troubleshooting (25%) from 200 tools.
- **Against Codex.** In a test Codex built for her, both scored 100%, but Jev took about 0.2 seconds versus almost five, and used 616 input tokens against nearly 16,000. Roughly 70,000 tokens cost her less than a cent.
- **Who is behind it.** Founder Diogo Almeida co-authored the InstructGPT paper. TypeSafe claims parallel output sampling and a training method called reinforcement learning for calibrated decisions (RLCD): if Jev says 80%, it should be right about 80% of the time, so software can set thresholds for escalating to a person.
- **Early adopters.** Guillermo Rauch reported Jev up to 18 times faster and more accurate than the safety reviewer in Vercel's workflow. Dax from OpenCode previewed it for browser use.
- **The name.** Jev comes from Jevons paradox: TypeSafe bets that cheaper intelligence will mean more total use.

## Quotes

> "Guaranteeing the answer structure does not guarantee that its judgment is correct." — Ksenia Se

> "A lot of useful AI should barely have anything to say." — Ksenia Se
