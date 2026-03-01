import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
    loader: glob({pattern: '**/[^_]*.{md,mdx}', base: "./src/content/articles"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        tags: z.array(z.string()).default([]),
        isDraft: z.boolean().default(false),
    }),
});

export const collections = { articles };