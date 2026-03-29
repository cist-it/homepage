import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { string } from "astro:schema";

const projects = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = { projects };
