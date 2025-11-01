// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://example.com',
  adapter: node({ mode: 'standalone' }),   // ✅ enables server output
  // output: 'server', // optional; the adapter sets this
  integrations: [
    mdx(),
    sitemap(),
    compress({ css: true, html: true, img: true, js: true, svg: true }),
  ],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: { include: ['@motionone/dom'] },
  },
});
