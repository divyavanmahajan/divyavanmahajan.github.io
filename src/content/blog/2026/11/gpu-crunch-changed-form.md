---
title: "The GPU Crunch Hasn't Gone Away. It Has Changed Form"
description: "Between May and November 2026 the industry added a lot of AI capacity and got much better at using it, but demand grew faster. The bottleneck moved from GPUs to power, memory, wafers and finished data centres."
pubDate: 2026-11-22
author: "Divya van Mahajan"
categories: ["AI"]
tags: ["ai-infrastructure", "gpu", "inference", "data-centers", "strategy"]
linkedin: false
draft: true
---

In May the story was simple: there were not enough GPUs to serve inference demand. Six months later the "GPU crunch" has largely disappeared from the conversation. The interesting answer is that it hasn't actually gone away. It has changed form, and the industry has become much better at adding and using capacity.

It helps to separate three things:

- **Physical GPU supply:** how many new accelerators have been manufactured and installed?
- **Available inference capacity:** how much compute can providers actually sell to customers?
- **Effective inference capacity:** how many tokens can be generated from the installed hardware, thanks to better models, software and serving techniques?

These have grown at very different rates. And the November 2026 evidence does not support the conclusion that the shortage has been resolved.

## 1. How much capacity has actually been added?

| Indicator | Latest reported figure | Source |
|---|---|---|
| AI server shipments, 2026 | Nearly +31% year on year | [TrendForce](https://www.trendforce.com/presscenter/news/20260803-13161.html) |
| Global inference fleet outside China, Q2 2026 | 25.6 million H100-equivalents | [Diffusion Capital](https://www.diffusion-capital.com/en/insights/ai-inference-supply-and-demand) |
| Inference fleet growth, Q2 2026 | +23% quarter on quarter | [Diffusion Capital](https://www.diffusion-capital.com/en/insights/ai-inference-supply-and-demand) |
| Effective inference supply growth | +46% quarter on quarter | [Diffusion Capital](https://www.diffusion-capital.com/en/insights/ai-inference-supply-and-demand) |
| North American data-centre capacity under construction, H1 2026 | 7.48 GW | [CBRE via Report AI](https://report-ai.org/indexes/state-of-ai/state-of-ai-infrastructure-energy/) |

The most interesting finding comes from [Diffusion Capital's August analysis](https://www.diffusion-capital.com/en/insights/ai-inference-supply-and-demand):

- Physical inference hardware supply was growing about **23% per quarter**.
- Including the shift to newer chips and serving-software gains, effective supply was growing about **46% per quarter**.
- But inference demand was growing **78–93% per quarter**.

That is the key distinction. The industry was adding enormous amounts of capacity, but demand was growing even faster.

## 2. What changed between May and November?

I see five important developments.

### A. Blackwell deployment finally became substantial

The transition from Hopper (H100/H200) to Blackwell (B200/GB200) took time. By the second half of 2026, Blackwell was broadly deployed.

This matters because counting GPUs is misleading. Newer generations deliver very different inference performance, especially for workloads that benefit from their memory bandwidth and system architecture. [Epoch AI](https://epoch.ai/data-insights/agentic-inference-capacity-growth) estimates that agentic inference capacity grew 4.6× between Q2 2025 and Q2 2026, against 2.6× for raw compute, with Blackwell accounting for about three quarters of the added capacity.

However, most Blackwell capacity was already committed to large customers rather than freely available on the rental market ([RackShore, November GPU supply snapshot](https://rackshore.com/guides/gpu-supply-snapshot/)).

### B. Custom AI chips started contributing more

Google and AWS have been ramping their own accelerator platforms, so the inference market is no longer only a market for Nvidia GPUs. Custom ASICs are attractive for predictable, high-volume workloads. [TrendForce](https://www.trendforce.com/presscenter/news/20260803-13161.html) specifically identified Google and AWS as ramping their next-generation in-house platforms in H2 2026.

### C. Inference serving became more efficient

This is probably the most underappreciated factor. Providers have become better at:

- batching requests;
- sharing model computations;
- speculative decoding;
- routing requests to smaller models when appropriate;
- optimising memory use;
- improving utilisation of accelerator clusters.

[Epoch AI's May analysis](https://epoch.ai/gradient-updates/is-a-compute-crunch-coming) already identified this dynamic: global inference capacity was more than tripling each year, as more infrastructure was deployed and chips became more efficient.

### D. The bottleneck moved upstream

The problem is increasingly not simply getting GPUs. It is getting:

- electricity and grid connections;
- high-bandwidth memory (HBM);
- advanced semiconductor manufacturing capacity;
- advanced chip packaging;
- completed data centres with cooling and networking.

The [IEA](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary) flags HBM as a particularly serious constraint: a shortage developed over the past six months and is expected to persist.

### E. Capacity is being absorbed immediately

This is perhaps the strongest evidence against the idea that the crunch has disappeared. [JLL](https://www.jll.com/en-us/newsroom/data-center-demand-exceeds-expectations-in-h1-2026) reported that North American data centres absorbed 25 GW of capacity in H1 2026, twice the year-earlier level. Vacancy stayed around 1%, and 95% of the development pipeline was already pre-committed.

In other words, new capacity is being built, but customers secure it before it becomes available.

## 3. So how much new capacity since May?

This is where I would be careful with the numbers. There is no reliable public dataset of the GPUs installed and operational worldwide on 1 May versus 22 November 2026. But there are useful proxies, all from [CBRE's North America Data Center Trends, as reported by Report AI](https://report-ai.org/indexes/state-of-ai/state-of-ai-infrastructure-energy/) and [Data Center Frontier](https://www.datacenterfrontier.com/site-selection/news/55401462/cbre-record-data-center-construction-fails-to-ease-capacity-crunch):

- **North American primary-market inventory: +2.75 GW**, from 8.16 GW (H1 2025) to 10.90 GW (H1 2026). This is total data-centre capacity, not GPU-only capacity, and the period starts before May.
- **Construction pipeline: 7.48 GW** under construction in H1 2026, up 43% year on year.
- **Global AI server shipments: about +31%** forecast for 2026 ([TrendForce](https://www.trendforce.com/presscenter/news/20260803-13161.html)).

These figures show a substantial expansion, but they do not justify claiming that 2.75 GW of new GPU inference capacity has appeared since May.

## 4. The latest evidence suggests the crunch is getting worse, not better

The most revealing finding is from [BCG's 20 November report](https://www.bcg.com/publications/2026/ai-data-center-supply-demand-outlook). BCG estimates that:

- a global data-centre supply shortfall of about **13 GW** already exists;
- the five largest hyperscalers are on track to spend **over $800 billion** on data-centre buildout in 2026;
- about **180 GW** of additional supply is expected over the next five years;
- even that expansion could leave demand **more than 20 GW** ahead of supply.

BCG names powered land, advanced-node wafers and HBM as the three major constraints.

GPU rental markets also remain tight. BCG reports that rental rates for three-year-old Nvidia Hopper hardware have stayed within 20% of their launch levels. [Report AI](https://report-ai.org/indexes/state-of-ai/state-of-ai-infrastructure-energy/) notes that the Silicon Data H100 rental index is about 44% above its December 2025 low. See also RackShore's [November GPU supply snapshot](https://rackshore.com/guides/gpu-supply-snapshot/).

## 5. My interpretation

I think the apparent disappearance of the GPU crunch from the conversation is largely a change in how the industry describes the problem.

In May, the story was: *we cannot get enough GPUs to serve inference demand.*

By November, it is more complicated: *we can get considerably more compute, but we cannot build, power, equip and operate infrastructure fast enough to satisfy demand.*

Three things are happening at once:

- **Supply is expanding rapidly.** New GPU generations, custom accelerators and new data centres are coming online.
- **Effective capacity is expanding faster than physical hardware.** Software and serving improvements extract more inference from each accelerator.
- **Demand is expanding even faster.** Agentic workloads, coding agents, longer reasoning and wider AI adoption consume the additional capacity.

The third point is critical. Falling inference prices can actually make the shortage worse, because they make many previously uneconomic applications viable.

## Bottom line

| Question | My assessment |
|---|---|
| Has physical capacity increased? | Yes, substantially |
| Has inference capacity increased faster than GPU counts? | Yes |
| Is GPU availability still constrained? | Yes |
| Has the inference crunch disappeared? | No |
| Has the bottleneck shifted? | Definitely |

One caveat: I would not put a precise number on the additional global GPU inference capacity between May and November without a consistent hardware inventory dataset. The 25.6 million H100-equivalent fleet estimate for Q2 is a useful reference point, but not a May-to-November comparison.

My conclusion: the industry has made impressive progress on supply, but has not yet outrun demand. The shortage has become an infrastructure and deployment problem as much as a GPU manufacturing problem.

## References

- BCG, [How the AI Compute Shortage Will Create Winners and Losers](https://www.bcg.com/publications/2026/ai-data-center-supply-demand-outlook) (20 November 2026)
- Diffusion Capital, [AI Inference Supply & Demand: Sizing the Compute Balance](https://www.diffusion-capital.com/en/insights/ai-inference-supply-and-demand) (August 2026)
- TrendForce, [AI Server Shipments Forecast Raised to Nearly 31% YoY in 2026](https://www.trendforce.com/presscenter/news/20260803-13161.html) (3 August 2026)
- JLL, [Data center demand exceeds expectations in H1 2026](https://www.jll.com/en-us/newsroom/data-center-demand-exceeds-expectations-in-h1-2026) (11 August 2026)
- Report AI, [State of AI Infrastructure & Energy 2026](https://report-ai.org/indexes/state-of-ai/state-of-ai-infrastructure-energy/) (16 November 2026), citing CBRE North America Data Center Trends
- Data Center Frontier, [CBRE: Record Data Center Construction Fails to Ease Capacity Crunch](https://www.datacenterfrontier.com/site-selection/news/55401462/cbre-record-data-center-construction-fails-to-ease-capacity-crunch) (28 August 2026)
- Epoch AI, [Is a compute crunch coming?](https://epoch.ai/gradient-updates/is-a-compute-crunch-coming) (25 May 2026)
- Epoch AI, [AI inference capacity grew 4.6× in one year](https://epoch.ai/data-insights/agentic-inference-capacity-growth) (November 2026)
- RackShore, [GPU supply snapshot, November 2026](https://rackshore.com/guides/gpu-supply-snapshot/) (18 November 2026)
- IEA, [Key Questions on Energy and AI: executive summary](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary)
