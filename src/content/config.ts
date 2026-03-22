import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const membersCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/members" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    hobby: z.string().optional(),
  }),
});

export const collections = {
  members: membersCollection,
};
