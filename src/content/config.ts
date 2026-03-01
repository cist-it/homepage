import { z, defineCollection } from "astro:content";

const membersCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    hobby: z.string().optional(),
  }),
});

export const collections = {
  members: membersCollection,
};
