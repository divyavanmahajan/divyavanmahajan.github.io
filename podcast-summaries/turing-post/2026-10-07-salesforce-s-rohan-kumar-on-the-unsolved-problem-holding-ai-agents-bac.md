---
title: "Salesforce’s Rohan Kumar on the Unsolved Problem Holding AI Agents Back"
date: 2026-10-07
show: turing-post
url: "https://www.turingpost.com/podcast/s/turing_post/salesforce_s_rohan_kumar_on_the_unsolved_problem_holding_ai_agents_back"
duration_min: 15
hosts: ["Ksenia Se"]
guests: ["Rohan Kumar"]
description: "Rohan Kumar argues that business agents are held back because companies rarely record how decisions are made, so the key problem is capturing that reasoning in a form agents can read."
tags: ["enterprise-ai", "ai-agents", "agent-harness", "knowledge-graphs", "agent-security"]
source_transcript: "turing-post/episodes/2026/10/2026-10-07-salesforce-s-rohan-kumar-on-the-unsolved-problem-holding-ai-agents-bac.md"
draft: false
---

## Thesis

Rohan Kumar, President and Chief Platform and Engineering Officer at Salesforce, argues that an enterprise AI harness involves much more than running an agent against evals. The hardest and still unsolved part is business context. Coding models learned from decades of written code, but companies rarely record why decisions get made, so that reasoning has to be captured and made "agent readable".

## Key points

- **A broader harness.** Besides authoring agents and testing them against a golden set, Kumar says enterprises need a registry that keeps scanning for new and retired agents, governed policies for confidential data, and a separate identity for each agent with limited privileges, so a rogue agent cannot take data out of the company.
- **Curated context, not token maxing.** Instead of connecting every data source and letting a model work it out, Kumar describes a trusted context layer: off-hours jobs, for example from 11 PM to 5 AM, that curate data and build semantic models and ontologies.
- **Price-performance routing.** Echoing the line that you don't need a Ferrari to go to the grocery store, he wants the harness to choose the model that gives the best price-performance for the outcome a customer describes.
- **Three layers of an agent.** Agent code is becoming a commodity, models supply general intelligence, and understanding the customer's business is the hardest layer. Salesforce's Koa CRM reasoning model draws on 28 years of CRM work, but it is still generic.
- **Build with the customer.** Kumar suggests engineers sit with customers every day to see how decisions happen, a closer version of the forward-deployed model. Ksenia Se ties this to what Turing Post calls organizational translation.
- **Advice for juniors.** Analytical thinking, basic maths and the judgment to tell whether generated output is right still matter.

## Quotes

> "I think the real breakthrough is going to be how do you capture that and make it agent readable?" — Rohan Kumar

> "these models can write text really well, but that doesn't mean you shouldn't learn grammar." — Rohan Kumar
