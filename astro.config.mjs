import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';

// import vercel from '@astrojs/vercel';

const site = 'https://katemas.me';

// Last-modified date for each blog post, so the sitemap can tell search
// engines when a post changed. Read straight from the Markdown front matter
// (the content collection isn't available inside the config).
const blogDir = new URL('./src/content/blog/', import.meta.url);
const postDates = new Map();
for (const file of readdirSync(blogDir)) {
    if (!/\.mdx?$/.test(file)) continue;
    const frontmatter =
        readFileSync(new URL(file, blogDir), 'utf8').match(
            /^---\r?\n([\s\S]*?)\r?\n---/
        )?.[1] ?? '';
    const field = (name) =>
        frontmatter
            .match(new RegExp(`^${name}:\\s*(.+)$`, 'm'))?.[1]
            ?.trim()
            .replace(/^['"]|['"]$/g, '');
    const date = new Date(field('updatedDate') ?? field('pubDate'));
    if (!Number.isNaN(date.valueOf())) {
        const slug = file.replace(/\.mdx?$/, '');
        postDates.set(`${site}/blog/${slug}/`, date.toISOString());
    }
}

// https://astro.build/config
export default defineConfig({
    site,
    // Astro 7 defaults to 'jsx', which strips whitespace between inline elements
    compressHTML: true,
    prefetch: {
        prefetchAll: true
    },

    integrations: [
        sitemap({
            serialize(item) {
                const lastmod = postDates.get(item.url);
                return lastmod ? { ...item, lastmod } : item;
            }
        })
    ],

    vite: {
        plugins: [tailwindcss()]
    }

    // adapter: vercel({
    //     webAnalytics: {
    //         enabled: true
    //     }
    // })
});
