import { defineConfig } from 'astro/config';
import { rehypeAinewsDates } from './src/rehype-ainews-dates.js';
import { ainewsRedirects, aidbMoveRedirects } from './src/ainews-redirects.mjs';

// https://astro.build/config
export default defineConfig({
    redirects: { ...aidbMoveRedirects, ...ainewsRedirects },
    markdown: {
        rehypePlugins: [rehypeAinewsDates],
    },
    site: process.env.SITE || 'https://divyavanmahajan.github.io',
    base: process.env.BASE || '/',
    vite: {
        server: {
            allowedHosts: ['picodvm-blog.tuns.sh', '.tuns.sh', 'localhost', '127.0.0.1'],
        },
    },
});
