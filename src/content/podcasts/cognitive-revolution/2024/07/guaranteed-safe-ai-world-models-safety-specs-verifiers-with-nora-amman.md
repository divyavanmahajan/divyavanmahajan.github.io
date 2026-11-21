---
title: >-
  Guaranteed Safe AI? World Models, Safety Specs, & Verifiers, with Nora Ammann
  & Ben Goldhaber
description: >-
  Ammann and Goldhaber argue AI safety should become an engineering discipline,
  gating AI actions through an explicit world model, a safety specification and
  a verifier that give quantitative guarantees.
pubDate: '2024-07-17'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/guaranteed-safe-ai-world-models-safety-specs-verifiers-with-nora-ammann-ben-goldhaber/
youtube: 'https://www.youtube.com/watch?v=fyVrnbn4EWA'
durationMin: 103
hosts:
  - Nathan Labenz
guests:
  - Ben Goldhaber
  - Nora Ammann
tags:
  - ai-safety
  - formal-verification
  - world-models
  - ai-governance
  - critical-infrastructure
draft: false
---
## Thesis

Nora Ammann and Ben Goldhaber, co-authors of the multi-institution position paper "Towards Guaranteed Safe AI", argue that empirical evaluations alone cannot make powerful AI safe. They propose wrapping any AI system in a gate of three components: a world model, a safety specification and a verifier that checks proposed actions and gives calibrated, quantitative risk estimates. The approach starts in narrow, safety-critical domains and is meant to expand as AI tooling makes modelling cheaper.

## Key points

- **Origins of the paper.** Goldhaber, of FAR AI, says authors such as David Dalrymple (Davidad), Max Tegmark and Yoshua Bengio noticed at the Bletchley Park summit that their agendas were converging. Labenz counts 13 institutions on the paper.
- **The bridge analogy.** Ammann notes that in the 1870s about 25% of bridges collapsed within 10 years; civil engineering now makes precise probabilistic claims, and AI should aim for the same.
- **Why not just test.** Ammann argues testing is never exhaustive, deceptive models may hide failure modes, and black boxes say little about out-of-distribution behaviour. An explicit, human-auditable world model can mix levels of rigour across components.
- **Specs as a social interface.** Both guests say explicit safety specs and risk thresholds let societies deliberate over choices such as trolley-style trade-offs, rather than leaving them to one lab. Labenz cites Taiwan's Polis experiments; Ammann cites the International Space Station as a model for shared R&D.
- **Start narrow, spread out.** Goldhaber describes an "oil spot" strategy: begin with hardware, power grids and software verification, then expand; he also highlights formalising maths in Lean. Ammann adds that world models and specs, once built, can be reused, amortising cost.
- **Coordination and regulation.** Goldhaber sees the framework helping low-trust, competing actors verify each other's guarantees; both suggest it could underpin standards that leave room for innovation, much like car safety checks.

## Quotes

> "it's sort of a boxing idea, but rather than boxing the AI system by limiting the effectuators or like how we can affect the world." — Nora Ammann

> "I think at this point, I don't really care about it being a good friend. That's just like the wrong type signature." — Nora Ammann
