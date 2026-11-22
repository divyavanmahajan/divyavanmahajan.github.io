---
title: How to Build an AI Native Team with Mike Cannon-Brookes
description: >-
  In this sponsored bonus episode, NLW is joined by Atlassian co-founder and CEO
  Mike Cannon-Brookes for a conversation about how to build AI native teams.
  They discuss what separates enterprise AI leaders from laggards, why context
  is becoming a critical layer of AI adoption, how agents and MCPs are changing
  the way people work with software, and why 2026 may be the year AI moves
  beyond chat into more natural product experiences. This episode is presented
  in partnership with Atlassian, and inc...
pubDate: 2026-05-09T00:00:00.000Z
type: episode
tags:
  - enterprise-adoption
  - context-engineering
url: >-
  https://podcasters.spotify.com/pod/show/nlw/episodes/How-to-Build-an-AI-Native-Team-with-Mike-Cannon-Brookes-e3j4cjo
draft: false
---
## Overview

This bonus "operators" episode of *The AI Daily Brief* features **Mike Cannon-Brookes, co-founder and CEO of Atlassian**, the company behind Jira, Confluence, Trello, Loom and Rovo, whose products are used by more than 300,000 organisations. It was recorded in partnership with Atlassian around its **Team '26** event. Cannon-Brookes speaks from two positions. He leads a company of about 13,000 people that is adopting AI internally, and he builds the AI platform and products that other enterprises use.

The central thesis is that business acceleration from AI equals **intelligence multiplied by context**. Model intelligence is improving quickly and visibly. The work that remains for enterprises is to supply rich, secure, up-to-date organisational context, to rework talent and processes, and to bring AI out of the chat window into everyday product experiences. The conversation also covers what separates enterprise AI leaders from organisations that are falling behind.

- **Source video:** not provided (no URL or channel was supplied for this episode).

## Prerequisites

- **Enterprise SaaS basics:** what work-management and knowledge tools such as Jira (issue and work tracking) and Confluence (documentation and wiki) do.
- **Large language models and chat assistants:** a general idea of prompting, tokens and context windows.
- **AI agents:** software that uses a model to plan and act, including calling tools, rather than only answering in chat.
- **MCP (Model Context Protocol):** an open protocol that lets AI agents connect to external data sources and tools.
- **CLI (command-line interface):** a text-based interface. Here it is presented as an efficient way for agents to use a tool "headlessly", without a graphical UI.
- **Knowledge or context graphs:** data structures that link entities (people, documents, code, assets) and the relationships between them.
- **Enterprise security and compliance concepts:** data residency, customer-managed encryption keys, PII handling and access controls.

## Main Points

### 1. Why internal AI adoption is hard
- Faster models do not automatically make a business faster. Getting full value needs **significant talent changes** and **business process re-engineering**.
- Atlassian looks for internal processes where AI can improve efficiency, quality or both. Cannon-Brookes treats output quality as a measure of efficiency.
- **Availability is the first obstacle.** After Atlassian acquired The Browser Company (maker of the **Dia** AI browser), only 4 of its roughly 13,000 employees were at first allowed to use Dia, because of security concerns about AI in the browser. All 13,000 could use it only after enterprise controls were built.
- He credits security teams for "doing the right thing" in defending their organisations against new tools.

### 2. A culture of play, sharing and shared failure
- Once tools are available, people need "time and space and joy to play" with them. Atlassian calls this **"AI joy at work."**
- Learnings must spread. Atlassian uses internal blogs and Loom videos, and it explicitly encourages people to share **failures** ("I tried this and it didn't work") so that others can iterate on them.
- Nobody has 10 years of AI deployment experience, so everyone has to learn at the same time. This makes adoption feel like "an accelerated foot race".
- Atlassian sees the same pattern in its customers: valid enterprise and security requirements pull against the speed of technical progress.

### 3. Meeting enterprises where they are: the Rovo platform
- **Rovo** is the layer of the Atlassian platform that holds the AI tools, libraries, the Teamwork Graph, MCP support and agents.
- To earn trust, it must provide **data residency, private model choice, customer-managed keys and compliance controls**. Cannon-Brookes notes that this is "still pretty hard", "for all the vibe coders out there".
- Fine-grained controls matter. In Dia, for example, administrators can specify which URL sets can be used in AI chat or memory. Running AI on a news site might be fine; running it on an internal customer list might not be.
- Customers adopt at very different speeds. Some spend six months reviewing the platform before they turn it on, while others turn it on in a day, and he says both are fine.

### 4. Two tracks at once: speed up existing work and introduce new ways of working
- **Existing workflows:** any Jira work item can now be **assigned to an agent**. That can be a coding agent (such as Cursor or Claude Code) or a business agent (such as Agentforce). Teams speed up without changing how they work, which reduces the need for people and process change.
- **New workflows:** users can file service requests by chatting with Rovo instead of filling in forms. The agent gathers about 90% of what it needs and asks one follow-up question.
- **Confluence example:** AI helps people write and rewrite text as they always have. **Create with Rovo** also turns a document into a slide presentation. The goal is not to compete with PowerPoint but to remix content in a way that was not possible before.
- Cannon-Brookes argues the industry often focuses only on new ways of working. Atlassian's role is to do both at the same time and bring existing teams along. "AI native" is a bar that keeps rising.

### 5. Context as the core layer: intelligence × context
- His framing equation: **business acceleration = intelligence × context.** Intelligence gains come from new model capabilities. Context is where Atlassian focuses.
- The **Teamwork Graph** has existed for 7–8 years. Cannon-Brookes calls it the best enterprise context graph available, and it runs at a scale of about **150 billion objects and connections** for the largest customers.
- Team '26 added new SaaS connectors and three new categories of knowledge:
  - **Code:** a full **semantic index of the entire codebase**, joined to business data. Coding agents get better answers, run faster and cost less because they need fewer hops and less reasoning. He notes that "we don't have billion-token context windows and probably won't for a fair while."
  - **People:** the full **org chart**, inferred and continuously updated **skills**, and collaboration patterns. This enables scoped queries such as "only content from people who report to me" without spending millions of tokens. He says it can also show who is AI native.
  - **Physical assets:** about 50% of customers manage large-scale physical assets (TVs, trucks, satellites, laptops, meeting rooms), and these now sit in the graph.

### 6. Opening up the graph: Teamwork Graph CLI and MCP
- The new **Teamwork Graph CLI (TWG CLI)** is "built for AI". It has 60–70 command sets, each with several commands, to operate, navigate and query the graph quickly from agents.
- The same graph capabilities, including org-chart and people data, are being added to Atlassian's **MCP server**, so external coding and business agents can use them.
- The graph also extends into the browser. Dia adds browsing activity and security context, and MCP access lets users query across open tabs and organisational content with their chosen model.
- The aim is to bring Atlassian's context to whatever agent framework or desktop tool a customer uses, which Cannon-Brookes calls necessary for modern ways of working.

### 7. What separates AI leaders from laggards
- Leaders lean in **"heavily and thoughtfully."**
  - *Heavily:* they look for 20–30% improvements in specific areas, not 2% gains.
  - *Thoughtfully:* they build **platform constructs**. Strong customers ask, "How does Rovo connect to these 10 things?" because they want to avoid a sprawl of AI frameworks with conflicting security postures.
- They expect tools to work together. Atlassian's long partnerships, including "co-opetition" with Microsoft, Google, Slack, Zoom, GitHub and GitLab, help here.
- They focus more on **overall output** and increasingly on **cost understanding**, though not yet cost management.
- **DX** (an engineering-productivity analytics company that Atlassian acquired about eight months earlier) is selling strongly. It shows token consumption, which AI coding tools work, and how AI use affects engineering productivity.
- On tokens: "Should an engineer be using more tokens or less tokens? That's kind of the wrong question." Someone using zero tokens is probably underperforming, but the heaviest users are not necessarily the most productive. Leaders measure **throughput, flow and quality of output** rather than quantity.

### 8. Citizen builders, Rovo Studio and disposable software
- More people will create technology without being software developers. **Rovo**, **Dia** and **Rovo Studio** (now generally available as a no-code environment) all write code and use tools.
- This code usually isn't committed to Git, and nobody gets paged at 2 a.m. when it fails. Cannon-Brookes says it is "not sort of true engineering development", but it is very useful for personal problems such as financial modelling.
- Apps built this way **run as the user** and can access only content the user already has permission to see. They sit on Forge (Atlassian's extensibility platform) and the Teamwork Graph's security and compliance layer.
- Cannon-Brookes estimates that more than **5 million agents** have been created in Rovo Studio. Large production agents still need real development teams, versioning and care, because updating the model can break an agent.
- If code is cheap, software can be **disposable**: written, used and thrown away in minutes.

### 9. Looking ahead: AI moves beyond chat
- His one pick for the rest of 2026 is that **AI moves beyond chat**. Chat remains important, but AI will increasingly be built into product and design experiences.
- People should not need to be "a crazy smart prompt engineer with chat and a desktop terminal client open" to benefit.
- He calls this the **"design era of AI"**: it meets users where and how they work while also changing how they work, across Dia, Jira, Confluence and Loom.

## Key Concepts

- **Intelligence × Context:** Cannon-Brookes's formula for business acceleration from AI. Model capability multiplied by the quality of organisational context.
- **Teamwork Graph:** Atlassian's enterprise context graph, which links work items, documents, code, people, goals, projects and physical assets across Atlassian and third-party SaaS tools.
- **Teamwork Graph CLI (TWG CLI):** a command-line interface with 60–70 command sets that lets AI agents query and navigate the Teamwork Graph without a UI.
- **MCP server:** Atlassian's Model Context Protocol endpoint, which exposes Teamwork Graph context (including org-chart and people data) to external agents.
- **Rovo:** Atlassian's AI platform and assistant, covering chat, agents, search and the enterprise controls underneath them.
- **Rovo Studio:** a now generally available no-code environment for building small applications and agents on the Teamwork Graph.
- **Forge:** Atlassian's extensibility platform for building secure apps on its products.
- **Dia:** the AI-native web browser from The Browser Company (acquired by Atlassian), now with enterprise controls and Teamwork Graph integration.
- **DX:** an engineering-intelligence product (acquired by Atlassian) that measures AI tool use, token consumption and engineering productivity.
- **Create with Rovo:** a Confluence feature that turns documents into other formats, such as slide presentations.
- **Agent assignment in Jira:** the ability to assign any Jira work item to a coding or business agent within existing workflows.
- **Semantic code index:** a meaning-based index of an entire codebase, joined to business data so agents can answer questions with fewer reasoning hops.
- **AI joy at work:** Atlassian's internal emphasis on giving staff time and freedom to experiment with AI and share successes and failures.
- **AI novice → AI native:** the spectrum of organisational AI maturity, where the definition of "native" keeps rising.
- **Heavy and thoughtful leaning in:** the trait of leading organisations, which pursue large improvements while building platform constructs that avoid tool sprawl.
- **Disposable software:** cheap, AI-generated code written to solve an immediate problem and thrown away afterwards.
- **Design era of AI:** the shift from chat-centred interaction to AI built into natural product experiences for everyday users.

## Summary

Mike Cannon-Brookes argues that AI value in the enterprise depends on more than better models. It equals intelligence multiplied by context, and getting it requires real changes to talent, processes and culture. Inside Atlassian, adoption depends on making tools securely available, giving people room to experiment, and spreading both wins and failures quickly, because nobody has deep experience yet. As a platform provider, Atlassian builds enterprise-grade trust controls into Rovo. It speeds up existing workflows, for example by assigning Jira work to agents, while also offering new ways of working. It is investing heavily in the Teamwork Graph, now extended to source code, people and physical assets and exposed through a new CLI and MCP server, so that any agent can draw on rich organisational context. He says leading enterprises lean in heavily but thoughtfully: they pursue large gains, build coherent platforms rather than piling up tools, and measure output quality and throughput rather than token counts. His outlook for the rest of 2026 is that AI will move beyond the chat window into well-designed, everyday product experiences that meet people where they already work.
