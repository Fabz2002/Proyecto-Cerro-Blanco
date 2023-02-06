import { defineConfig } from 'astro/config';

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  // site: 'https://Fabz2002.github.io',
  base: './',
  output: "server",
  adapter: vercel()
});