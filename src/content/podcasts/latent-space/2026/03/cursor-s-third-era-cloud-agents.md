---
title: 'Cursor''s Third Era: Cloud Agents'
description: >-
  Two Cursor engineers argue that after tab completion and local agents,
  coding's next era is cloud agents with their own computers that test their
  work, return demo videos and run in parallel.
pubDate: '2026-03-06'
show: latent-space
url: >-
  https://lspace.beehiiv.com/podcast/s/latent_space_the_ai_engineer_podcast/cursor_s_third_era_cloud_agents
durationMin: 67
hosts:
  - Alessio Fanelli
  - swyx
guests: []
tags:
  - coding-agents
  - cloud-agents
  - cursor
  - parallel-agents
  - code-review
draft: false
---
## Thesis

Two Cursor team members, Jonas (who came to Cursor through the Autotab acquisition) and Sam, present Cursor's relaunched cloud agents. They describe them as the company's third era, after tab autocomplete and local agents. Their argument is that agents need a full computer, onboarded like a new developer, so they can run and test code rather than "sight-read" it. They expect future gains to come from running many agents in parallel rather than making one agent faster.

## Key points

- **Three pillars.** Each agent gets its own VM with full desktop computer use ("pixels in, coordinates out"). It tests its changes end to end, sometimes for half an hour, and returns a video of what it built. Users can take over the remote desktop and terminal. A /repro command records a bug before and after the fix, which Jonas says turns hard-to-reproduce bugs into fast merges.
- **Video as review entry point.** Jonas says reviewing code is the new bottleneck. Watching four 20-second videos makes best-of-n runs across models practical in a way that four 700-line diffs never were. Sam uses the video to catch under-specified requests early.
- **Slack as the IDE.** Sam describes threads where anyone can @Cursor, add context, and have the agent tag the right colleagues using git blame. Humans are left debating UX and whether to ship, not where an if-statement goes.
- **Deliberate unshipping.** The team removed a port-forwarded browser and a file editor so users would delegate more. Sub-agents are used for context management and routing, for example a faster model for code exploration and a specialised computer-use sub-agent.
- **Scale effects.** A "grind mode" for long-running agents grew out of Wilson's browser-building experiments, with runs of up to three days after a planning stage. So many agents now push code that Cursor's GitHub Actions became overloaded. Jonas expects spending per developer to reach thousands of dollars a month.
- **Predictions.** Jonas predicts cloud agents will exceed twice the volume of local agents by year end. Sam expects to write zero lines of code by hand in December, and names agent memory and self-awareness of the environment as the main gaps.

## Quotes

> "all you could do was sight-read code and spit out tokens and hope that you had done the right thing" — Jonas (Cursor)

> "probably zero lines of code written in the whole month of December this year by myself, 100% agents is a personal prediction" — Sam (Cursor)
