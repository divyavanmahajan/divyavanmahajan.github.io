---
title: >-
  New in Nature: Google Agents Beat Human Doctors, Make Scientific Discoveries –
  With Vivek Natarajan and Anil Palepu
description: >-
  Google DeepMind's AMIE and Co-Scientist reach expert-level results using
  prompted general Gemini models chained as agents, with structured reasoning,
  long context and tournaments, not domain fine-tuning.
pubDate: '2025-04-10'
show: cognitive-revolution
url: >-
  https://www.cognitiverevolution.ai/google-agents-beat-human-doctors-make-scientific-discoveries-with-vivek-natarajan-and-anil-palepu/
youtube: 'https://www.youtube.com/watch?v=Jo31LEns2zY'
durationMin: 85
hosts:
  - Nathan Labenz
guests:
  - Vivek Natarajan
  - Anil Palepu
tags:
  - agents
  - medical-ai
  - ai-for-science
  - agent-design
  - evaluation
  - long-context
draft: false
---
## Thesis

Nathan Labenz talks with Vivek Natarajan and Anil Palepu of Google DeepMind about AMIE, a diagnostic and treatment agent, and Co-Scientist, a multi-agent hypothesis generator. Labenz argues these results mark a threshold where AI beats highly trained humans. The guests argue the gains now come from system design on top of general Gemini models, not from medical fine-tuning, and that the next couple of years look like an engineering problem.

## Key points

- **AMIE results, with caveats.** In simulated text consultations with patient actors, AMIE outperformed primary care physicians on management reasoning. In cardiology and oncology it beat fellows but not attendings; cardiologists with access to AMIE improved on almost every measure. The guests stress that real patients are untested and the cardiology study used Gemini 1.5 Flash.
- **Co-Scientist's discovery.** Collaborators at Imperial set a challenge on bacterial drug resistance; after running for a couple of days, the system's top hypothesis matched their unpublished finding, prompting the question "are you reading my email?"
- **Design over fine-tuning.** Natarajan contrasts this with MedPaLM and Med-Gemini: the agents are prompted general models. Palepu says drafting four concurrent management plans and merging them gave a clear jump in auto-evaluations; structured outputs beat free-form chain of thought.
- **Long context and entropy.** Natarajan credits Gemini's 2 million token context for feeding back reviews and debates without a memory store or RAG; Palepu found 256k tokens of guidelines worked better than 1 million. Tool access such as web search adds new information that prevents mode collapse over many rounds.
- **Cost and tournaments.** Natarajan estimates most queries cost under $10 at current GCP prices. He sees pairwise tournament ranking, inspired by AlphaStar, as useful but inefficient, and expects it to move into latent reasoning.
- **Deployment.** Co-Scientist has about 100 scientists in a trusted tester program; AMIE heads to a study with real patients at Beth Israel Deaconess Medical Center under clinician oversight.

## Quotes

> "this is probably the most dumb and inefficient version of the system that we have." — Vivek Natarajan

> "Feels like the path to geniuses in a data center is honestly pretty clear at this point, which is a crazy thing to say." — Nathan Labenz
