import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
    site: 'https://katemas.me',
    prefetch: {
        prefetchAll: true
    },

    integrations: [sitemap()],

    vite: {
        plugins: [tailwindcss()]
    }

    // adapter: vercel({
    //     webAnalytics: {
    //         enabled: true
    //     }
    // })
});
