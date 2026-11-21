---
title: "The AI Coding Factory"
date: 2025-05-29
show: latent-space
url: "https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/the_ai_coding_factory"
duration_min: 59
hosts: ["Alessio Fanelli", "swyx"]
description: "Factory.ai's founders argue enterprise software work is moving from collaborating with AI in the IDE to delegating whole tasks to browser-based agents they call droids."
tags: ["coding-agents", "enterprise-ai", "software-development", "developer-tools", "evals"]
source_transcript: "latent-space/episodes/2025/05/2025-05-29-the-ai-coding-factory.md"
draft: false
---

## Thesis

Factory.ai co-founders Matan Grinberg and Eno Reyes argue that the IDE was built for humans writing every line of code. Agents need a new interface built around delegation. Their bet is the enterprise: large, old codebases where autonomous "droids" can shorten migration and maintenance projects, while humans keep the outer loop of planning, review and testing.

## Key points

- **Enterprise focus.** The founders say most coding tools target solo developers and quick zero-to-one projects. Factory targets the hundreds of thousands of developers working on codebases 30 or more years old, where a COBOL migration demo won't go viral but the value is large.
- **Three droid types.** Users mostly come back for a knowledge/technical-writing droid, a code droid, and a reliability droid for incident response and root-cause write-ups. The platform pulls context from Linear, Jira, Slack, GitHub, Sentry and PagerDuty, the same sources a newly onboarded engineer would use.
- **Evals and model quirks.** They build on the Aider benchmark for code edits and keep their own behavioural spec for the agent loop. They no longer compete on SWE-bench, which the hosts say costs roughly $8,000-15,000 to run. Newer models such as Sonnet 3.7 come with RL-driven tool preferences (for example, grep) that can fight better custom tools.
- **Retrieval and pricing.** They rely on retrieval rather than very large context windows to keep costs down, and charge purely by token usage instead of credits.
- **Measuring ROI.** Code churn runs at 3-4% in well-maintained codebases and 10-20% in poor ones. Still, they say developer sentiment and pulled-in timelines matter more. One large public company cut a migration from four months to about three and a half days.
- **Limits.** The founders want models post-trained on agentic trajectories lasting hours, and observability that captures what the user meant, not just traces. Over the last 90 days, Fortune 500 deployments have been growing fast.

## Quotes

> "it was eight days from us first meeting to me dropping out of my PhD and Eno quitting his job" — Matan Grinberg

> "the time developers spend writing code is gonna go way down, but in turn, the time that they spend understanding and planning is gonna go way up." — Matan Grinberg
