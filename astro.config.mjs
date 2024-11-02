import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://ziro2mach.com",
  integrations: [mdx(), sitemap(), tailwind(), db(), react()],

  // adapter: vercel(),
  output: "server",

  adapter: vercel(),
});