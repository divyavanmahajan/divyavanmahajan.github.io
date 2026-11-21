---
title: "The world's largest open library dataset"
date: 2020-12-01
show: practical-ai
episode: 114
url: "https://share.transistor.fm/s/341de7b0"
duration_min: 44
hosts: ["Chris Benson", "Daniel Whitenack"]
guests: ["Luke Chesser", "Timothy Carbone"]
description: "Unsplash opened its curated, high-resolution photo metadata, search and collection data to researchers, betting that openness and a versioned, feedback-driven dataset will pay back indirectly."
tags: ["open-data", "datasets", "computer-vision", "data-engineering", "image-search"]
source_transcript: "practical-ai/episodes/2020/12/2020-12-01-the-world-s-largest-open-library-dataset.md"
draft: false
---

## Thesis

Luke Chesser, Unsplash co-founder and head of product, and Timothy Carbone, its only data engineer, explain why the 25-person company released its photo library data for machine learning use. Chesser argues that openness is part of Unsplash's DNA and that a dataset improved through community feedback can become a product in its own right, even without direct revenue.

## Key points

- **What is in it.** Carbone says the dataset is CSV files with photo download links rather than the images, plus EXIF data, photographer details, geolocation, Unsplash stats, third-party AI tags from Google and Amazon, colours, collections and search conversion data. The full set is about 20-25 GB of metadata covering roughly 1.3 million photos; the light set holds featured nature photos.
- **Why the data is different.** Chesser says every photo is at least five megapixels and reviewed by a human, and contributors upload their best shots rather than whole camera rolls, unlike Flickr. That changes industry analyses such as how much smartphones dominate.
- **Business model.** The light set allows commercial use; the full set is restricted. Unsplash earns money from brands distributing images through its API network, which serves Medium, Google and BuzzFeed.
- **Early uses.** About 3,000 light-set and roughly 1,000 full-set downloads in three to four months, per Chesser. Uses include a model finding faces in clouds and textures and Cornell research on why people post to social media.
- **Links and versioning.** Carbone chose links over archives to reuse existing image infrastructure and stay flexible; a v1.1 followed within days of feedback, with requests tracked on GitHub. Chesser says Unsplash releases as broadly as possible and restricts later if bad actors appear.
- **Abstract meaning.** Chesser hopes search and collection data for terms such as love or happiness can help vision models learn abstract semantic meaning.

## Quotes

> "we always try to release things as broadly as possible and then work backwards to restrict it if we need to." — Luke Chesser

> "the data set doesn't actually contain the photos. It's basically a couple of CSV files in which you will find the link to download the photo." — Timothy Carbone
