---
title: "From AGENTS.md to Enterprise Deployment"
date: 2026-09-24
show: practical-ai
episode: 373
url: "https://share.transistor.fm/s/74934e48"
youtube: "https://www.youtube.com/watch?v=Pr9O6MYJCRs"
duration_min: 49
hosts: ["Daniel Whitenack", "Chris Benson"]
guests: ["Nick Kuhn"]
description: "VMware Tanzu's Nick Kuhn argues that enterprises should deploy agents like any other app on a hardened platform, adding gateways, shared memory and identity for what is new."
tags: ["agents", "enterprise-ai", "platform-engineering", "mcp", "security"]
source_transcript: "practical-ai/episodes/2026/09/2026-09-24-from-agents-md-to-enterprise-deployment.md"
draft: false
---

## Thesis

Nick Kuhn of VMware Tanzu (Broadcom) argues that agents should mostly be treated like applications. Their path to production should run through the same certified, sandboxed platform that enterprises already use, so teams do not invent a new snowflake per project. What differs, Kuhn says, is state, tool access and identity, which need new platform services. Chris Benson and Daniel Whitenack test how far the analogy goes.

## Key points

- **What "enterprise" means.** Kuhn spent about fourteen years at a large enterprise before joining VMware. He describes limited or no internet access, compliance regimes such as PCI, SOX, HIPAA and FIPS, and some customers with genuine air gaps. He recalls a warehouse inventory system of C and shell scripts whose five-minute outages backed trucks up onto the interstate.
- **Buildpacks for agents.** Tanzu Platform is based on Cloud Foundry, which dates from about 2011. Its buildpacks turn code into best-practice containers. The new Tanzu Agent Build Pack does the same with a human-readable AGENTS.md: `cf push` an agent, bind an approved LLM (local GPUs or a contracted provider), and scale it. In a VMware Explore demo, a webhook triggered an agent to run a security review of a repository and post the results to a GitHub issue.
- **Where agents differ.** Kuhn says harnesses assume local Markdown files act as memory, which disappear on ephemeral cloud instances. Tanzu is adding a shared memory service scoped per team. Customers also want agents co-located with their apps and data for latency and reliability.
- **MCP gateways.** At Broadcom, developers may only use MCP servers hosted on the platform. A gateway registers those servers, limits which tools each agent sees, passes individual user credentials through rather than a shared service account, and logs every tool call. That makes anomalies such as 200,000 "delete repo" calls easy to spot.
- **Lessons for labs.** Commenting on the OpenAI–Hugging Face swarm incident, Kuhn suggests that hardened sandboxes, locked-down network zones and monitoring might have helped. He adds that he is not claiming to be better than the AI labs.
- **Adoption advice.** Kuhn recommends baby steps through the "AI council", reusing existing platform skills, and new teams holding office hours rather than working in silos. He notes that nearly every hand went up when he asked a VMware Explore audience who used tools like Cursor or Claude Code.

## Quotes

> "I've got all these agents run on my laptop. If I shut my lid, everything stops." — Nick Kuhn

> "I am, like, working harder than I ever have because I have all these agents, and they, like, they need stuff from me." — Nick Kuhn
