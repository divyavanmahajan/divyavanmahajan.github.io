// Unified episode list for the topic pages (/podcasts/topics/ and
// /podcasts/<show>/tags/): AIDB (`ainews`) + all `podcasts` shows, each with
// its controlled topic/company tags (see src/podcast-topics.mjs).
import { getCollection } from "astro:content";
import { aidbTopics, podcastTopics, topicShowName } from "../podcast-topics.mjs";

export interface TopicEpisode {
    show: string;
    showName: string;
    date: Date;
    title: string;
    href: string; // relative to BASE_URL
    tags: string[];
}

export async function getTopicEpisodes(): Promise<TopicEpisode[]> {
    const podcasts = (await getCollection("podcasts")).filter((e) => !e.data.draft);
    const aidb = (await getCollection("ainews")).filter((e) => !e.data.draft && e.data.type === "episode");
    return [
        ...aidb.map((e) => ({
            show: "ai-daily-brief",
            showName: topicShowName("ai-daily-brief"),
            date: e.data.pubDate,
            title: e.data.title,
            href: `podcasts/ai-daily-brief/${e.slug}/`,
            tags: aidbTopics(e),
        })),
        ...podcasts.map((e) => ({
            show: e.data.show,
            showName: topicShowName(e.data.show),
            date: e.data.pubDate,
            title: e.data.title,
            href: `podcasts/${e.slug}/`,
            tags: podcastTopics(e),
        })),
    ].sort((a, b) => b.date.valueOf() - a.date.valueOf());
}

export function countTags(episodes: TopicEpisode[]): Record<string, number> {
    const count: Record<string, number> = {};
    for (const e of episodes) for (const t of e.tags) count[t] = (count[t] || 0) + 1;
    return count;
}
