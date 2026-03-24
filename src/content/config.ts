import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(["Dev", "ML", "Misc", "UX"]).default("Misc"),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    heroImage: z.string().default("/meta.png"),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional().nullable(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    githubUrl: z.string().url().optional().nullable(),
    demoUrl: z.string().optional().nullable(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().default("/meta.png"),
  }),
});

export const collections = { blog, projects };
