import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
    // Never put drafts in the feed, even in dev
    const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    );

    return rss({
        title: 'Messy Careers — Kate Mas',
        description:
            'Honest writing on career changes, pivots, doubt and figuring out what comes next.',
        site: context.site!,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.pubDate,
            categories: post.data.tags,
            link: `/blog/${post.id}/`
        }))
    });
}
