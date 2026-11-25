---
title: "Live streaming at world-record scale with Ashutosh Agrawal"
date: 2025-02-12
show: pragmatic-engineer
url: "https://newsletter.pragmaticengineer.com/p/live-streaming-at-world-record-scale"
youtube: "https://www.youtube.com/watch?v=qXJ3S3T3xJY"
duration_min: 62
hosts: ["Gergely Orosz"]
guests: ["Ashutosh Agrawal"]
description: "Ashutosh Agrawal explains how JioCinema served 32 million concurrent IPL viewers: segment-based HLS delivery, deliberate latency trade-offs, year-ahead capacity planning and custom concurrency-based scaling instead of auto-scaling."
tags: ["live-streaming", "system-design", "capacity-planning", "scalability", "load-testing"]
source_transcript: "pragmatic-engineer/episodes/2025/02/2025-02-12-live-streaming-at-world-record-scale-with-ashutosh-agrawal.md"
draft: false
---

## Thesis

Ashutosh Agrawal, former chief architect at JioCinema, walks Gergely Orosz through the system that set a world record of 32 million concurrent streams at the 2023 Indian Premier League final. His argument is that live streaming at this scale is a series of trade-offs between latency, smoothness and infrastructure load, and that the cloud and CDNs are finite, so planning, drills and custom scaling matter more than code.

## Key points

- **The pipeline.** Agrawal traces the feed from stadium cameras to the production control room, through a contribution encoder (around 40 Mbps) over a private link to cloud distribution encoders. With 13-plus languages and device variants, output reached 500-plus streams, managed by an in-house orchestrator and a separate playback system for authorisation and DRM.
- **Segments and latency.** HLS splits video into four-to-six-second segments listed in manifests. Agrawal explains that halving segments to two seconds doubles CDN requests, and that players start five to ten seconds behind live to avoid buffering; CDN TTL tuning balances cache misses against stale data.
- **Leading indicators.** He tracks a handful of client metrics, such as buffer time and playback failure rate, processed within a minute or even 30 seconds. Telemetry frequency is degraded and sampled as load rises, following a tiered degradation framework.
- **Capacity planning.** Planning starts at the end of the previous year, using pessimistic forecasts, because providers must add real estate, links, power and imported servers in cities like Bangalore and Mumbai. vCPUs are usually the limiting factor.
- **No auto-scaling.** Agrawal says auto-scaling is too slow for surges after innings breaks, so JioCinema scaled every service against a single concurrency metric, modelling user journeys such as viewers pressing back to the home page when a key batsman gets out.
- **Game days and habits.** Unannounced synthetic-load drills tested both systems and operating protocols. His advice: assume anything can fail, measure latency from when a request is queued, and avoid relying on APMs, which he believes make engineers lazy.

## Quotes

> "No matter whether the teams are ready or not, we will start the live stream and we'll start sending traffic." — Ashutosh Agrawal

> "Not having APM forces you to go into the details, forces you to look into every corner, forces you to measure every aspect of your code" — Ashutosh Agrawal
