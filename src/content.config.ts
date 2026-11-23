import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts live in src/content/blog/*.md — the filename is the URL slug
const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            // Shown in Google results and link previews: aim for ~150 chars
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            tags: z.array(z.string()).default([]),
            // Optional cover photo, relative to the post file, e.g.
            // image: './career-pivot-myths.jpg'. Also used as the link
            // preview; without one, previews use the default site photo
            image: image().optional(),
            imageAlt: z.string().optional(),
            // Drafts show up in `pnpm dev` but are left out of the build
            draft: z.boolean().default(false)
        })
});

export const collections = { blog };
