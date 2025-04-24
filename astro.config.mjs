// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https:///kirori.github.io",
  output: "static",
  base: "/",
  integrations: [mdx(), sitemap()],
});
