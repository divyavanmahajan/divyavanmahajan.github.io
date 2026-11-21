// Controlled topic/company tags for ALL podcasts (shared vocabulary
// src/data/podcast-taxonomy.json).
//
// - Shows in src/podcast-shows.mjs: tags come from src/data/podcast-tags.json
//   (built by scripts/build-podcast-tags.mjs from the blog-wiki extractions,
//   falling back to the summary text), keyed "<show>/<YYYY-MM-DD>-<slug>"
//   (= staging basename). They are merged here at build time, so the episode
//   files in src/content/podcasts/ keep only their free-form `tags`.
// - The AI Daily Brief: controlled tags are already in its frontmatter `tags`
//   (scripts/build-ainews-tags.mjs + sync-ainews.js); free-form ones are
//   filtered out here.
import podcastTags from "./data/podcast-tags.json";
import topicStats from "./data/podcast-topic-stats.json";
import taxonomy from "./data/podcast-taxonomy.json";
import { podcastShows } from "./podcast-shows.mjs";

export const AIDB_SHOW = {
    slug: "ai-daily-brief",
    name: "The AI Daily Brief",
    description: "Nathaniel Whittemore's daily show on the most important news and discussions in AI.",
};

/** AIDB first, then the registry shows. */
export const topicShows = [AIDB_SHOW, ...podcastShows];
export const topicShowName = (slug) => topicShows.find((s) => s.slug === slug)?.name ?? slug;

export const topicSlugs = Object.keys(taxonomy.topics);
export const companySlugs = Object.keys(taxonomy.companies);
export const isControlledTag = (t) => t in taxonomy.topics || t in taxonomy.companies;
export const tagKind = (t) => (t in taxonomy.topics ? "topic" : t in taxonomy.companies ? "company" : "other");

/** "<show>/<YYYY-MM-DD>-<slug>" for a `podcasts` collection entry. */
export function podcastEpisodeKey(entry) {
    const date = entry.data.pubDate.toISOString().slice(0, 10);
    const base = entry.id.split("/").pop().replace(/\.mdx?$/, "");
    return `${entry.data.show}/${date}-${base}`;
}

/** Controlled tags of a `podcasts` collection entry. */
export const podcastTopics = (entry) => podcastTags[podcastEpisodeKey(entry)] || [];
/** How the tags were derived: "extraction" | "summary" | undefined. */
export const podcastTagSource = (entry) => topicStats.tagSource[podcastEpisodeKey(entry)];
/** Controlled tags of an `ainews` episode. */
export const aidbTopics = (entry) => entry.data.tags.filter(isControlledTag);

/** Precomputed "Across shows" data for a tag: {<show>: {extractionEpisodes, related}}. */
export const topicAcrossShows = (tag) => topicStats.topics[tag] || {};
