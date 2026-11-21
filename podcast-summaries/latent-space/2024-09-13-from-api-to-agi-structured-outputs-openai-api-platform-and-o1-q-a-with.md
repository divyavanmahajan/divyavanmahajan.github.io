---
title: "From API to AGI: Structured Outputs, OpenAI API platform and O1 Q&A — with Michelle Pokrass & OpenAI Devrel + Strawberry team"
date: 2024-09-13
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/from_api_to_agi_structured_outputs_openai_api_platform_and_o1_q_a_with_michelle_pokrass_openai_devrel_strawberry_team"
duration_min: 124
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Michelle Pokrass", "OpenAI Devrel"]
description: "Reliable structured outputs, built from constrained decoding plus model training, are the building block that makes agentic apps work; o1 adds a separate reasoning model with a thinner API."
tags: ["structured-outputs", "openai-api", "function-calling", "reasoning-models", "agents"]
source_transcript: "latent-space/episodes/2024/09/2024-09-13-from-api-to-agi-structured-outputs-openai-api-platform-and-o1-q-a-with.md"
draft: false
---

## Thesis

Michelle Pokrass, tech lead for the OpenAI API, argues that structured outputs matter because agentic applications fail when chained calls are only 95% reliable; guaranteed schema adherence takes that to 100%. She sees the API as OpenAI's broadest vehicle for distributing AGI. A second half, recorded at an emergency meetup and a Twitter AMA, covers the o1 launch and what developers lose and gain with a reasoning model.

## Key points

- **Engineering plus research.** Pokrass explains that JSON mode (shipped at Dev Day) only constrained output to valid JSON, sometimes producing endless whitespace. Structured outputs combine constrained decoding with a model trained to follow formats better.
- **API design choices.** Refusals go in a separate field rather than an HTTP error, since the developer pays for the tokens and it is neither a 4xx nor a 5xx; Pokrass says the HTTP spec is limiting for AI. The supported JSON Schema dialect requires additionalProperties false and makes every key required.
- **Function calling vs response format.** Pokrass says function calling is for real actions (querying a database, sending an email); the new response format is for answering the user in a structured way. Parallel function calling is not yet supported with structured outputs because each new combined schema would add latency.
- **Retries cost money.** swyx says replacing Instructor with structured outputs for AI News cut 55% of API costs by removing retries; Pokrass stresses OpenAI is not retrying behind the scenes.
- **Model selection.** Pokrass recommends starting with 4o mini, moving to 4o, then fine-tuning, where even 100 examples is enough to start. The Batch API is half off with a 24-hour turnaround; file search now allows 10K files per assistant.
- **o1.** swyx notes the API has no system role, temperature, streaming or tool calling at launch, and reasoning tokens are billed but hidden. In the AMA, Noam Brown says o1 is a single model trained to produce a long chain of thought, not a system.

## Quotes

> "I think the HTTP spec is a little bit limiting for AI in a lot of ways." — Michelle Pokrass

> "I think there will always be alpha in people who are able to like clearly explain what they're trying to build." — Michelle Pokrass
