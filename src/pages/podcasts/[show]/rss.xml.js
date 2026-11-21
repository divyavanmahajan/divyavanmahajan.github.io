import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { podcastShows } from '../../../podcast-shows.mjs';

export async function getStaticPaths() {
    const all = (await getCollection('podcasts')).filter((e) => !e.data.draft);
    return podcastShows
        .filter((show) => all.some((e) => e.data.show === show.slug))
        .map((show) => ({ params: { show: show.slug }, props: { show } }));
}

export async function GET(context) {
    const { show } = context.props;
    const episodes = (await getCollection('podcasts'))
        .filter((e) => !e.data.draft && e.data.show === show.slug)
        .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

    return rss({
        title: `${show.name} - episode summaries`,
        description: `Divya's summaries of ${show.name} episodes. ${show.description}`,
        site: context.site || 'https://divyavanmahajan.github.io',
        items: episodes.map((ep) => ({
            title: ep.data.title,
            pubDate: ep.data.pubDate,
            description: ep.data.description,
            link: `${import.meta.env.BASE_URL}podcasts/${ep.slug}/`,
            categories: ep.data.tags,
        })),
        customData: `<language>en-us</language>`,
    });
}
