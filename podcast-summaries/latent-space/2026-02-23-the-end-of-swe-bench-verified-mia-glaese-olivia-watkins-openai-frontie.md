---
title: "⚡️ The End of SWE-Bench Verified — Mia Glaese & Olivia Watkins, OpenAI Frontier Evals & Human Data"
date: 2026-02-23
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_end_of_swe-bench_verified_mia_glaese_olivia_watkins_openai_frontier_evals_human_data"
duration_min: 26
hosts: ["Alessio Fanelli", "swyx"]
guests: ["Mia Glaese", "Olivia Watkins"]
description: "OpenAI's Mia Glaese and Olivia Watkins argue SWE-Bench Verified is now saturated and contaminated, and that the field should move to harder benchmarks such as SWE-Bench Pro."
tags: ["benchmarks", "coding-agents", "ai-evals", "data-contamination", "openai"]
source_transcript: "latent-space/episodes/2026/02/2026-02-23-the-end-of-swe-bench-verified-mia-glaese-olivia-watkins-openai-frontie.md"
draft: false
---

## Thesis

Mia Glaese, VP of Research at OpenAI (Codex, Human Data and Alignment teams), and Olivia Watkins of the Frontier Evals team tell swyx that SWE-Bench Verified, which their teams helped build, no longer measures coding progress. Scores have stalled around 80% because the benchmark is saturated and contaminated, so further 0.1-point gains mostly measure whether a model guesses a function name. They recommend SWE-Bench Pro and call for harder, more realistic evals.

## Key points

- **How Verified was built.** The guests describe a cleanup of Princeton's SWE-Bench in which almost a hundred software engineers reviewed problems, each checked by three experts, leaving 500 curated tasks. About 90% were estimated to take an expert under an hour.
- **Unfair tests.** A deep dive into problems o3 could not reliably solve found issues in over half of them, most often tests that demanded an unstated function or argument name, or features never mentioned in the task.
- **Contamination.** The guests describe GPT 5.2's chain of thought recalling an argument added in a later version of a repository. GPT 5.2 solved 31 problems that should be very hard to solve without contamination. An auditor agent found regurgitated solutions and even task IDs in OpenAI models, Claude Opus 4.5 and Gemini Flash.
- **Why SWE-Bench Pro.** The Scale benchmark has longer tasks (one to four hours and more), more repositories and languages, and only light signs of contamination in audits.
- **What to measure next.** Glaese wants evals for longer tasks, design taste and maintainable code. She points to GDPVal, where professionals wrote tasks, gold solutions and rubrics, as a model, while noting that test-based benchmarks stay popular because they are cheap and fast to run.
- **Preparedness link.** Watkins says OpenAI's preparedness framework tracks bio risk, cybersecurity, and research automation and model autonomy, and that Verified was built for the autonomy work. She asks for evals of tasks that take top engineers months, end-to-end product building and real-world usage metrics.

## Quotes

> "But I think as a field, we're like moving beyond sort of, you know, can my coding agent like solve a small like GitHub issue for me, right?" — Mia Glaese

> "I'd like to see more metrics tracking like real world usage." — Olivia Watkins
