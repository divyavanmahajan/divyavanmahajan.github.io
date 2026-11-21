import { defineCollection, z } from 'astro:content';
import { podcastShowSlugs } from '../podcast-shows.mjs';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		categories: z.array(z.string()).default(['General']),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
		author: z.string().optional(),
		linkedin: z.boolean().default(false),
		linkedinMessage: z.string().optional(),
		linkedinArticleUrl: z.string().optional(),
		series: z.string().optional(), // Format: "series-name-001"
	}),
});

// TIL (Today I Learned) collection - simpler schema for quick notes
const til = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()),
		draft: z.boolean().default(false),
	}),
});

const ainews = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		url: z.string().optional(),
		type: z.enum(['episode', 'synthesis', 'annual-synthesis']),
		draft: z.boolean().default(false),
	}),
});

// Podcast episode SUMMARIES for shows other than The AI Daily Brief.
// Files: src/content/podcasts/<show>/YYYY/MM/<slug>.md, written by
// scripts/sync-podcasts.js from podcast-summaries/<show>/. Never hand-edit
// here; edit the staging file and re-sync. See docs/podcasts.md.
const podcasts = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		show: z.enum(podcastShowSlugs as [string, ...string[]]),
		episode: z.number().optional(),
		url: z.string().url(),
		youtube: z.string().url().optional(),
		durationMin: z.number().optional(),
		hosts: z.array(z.string()).default([]),
		guests: z.array(z.string()).default([]),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog, til, ainews, podcasts };
