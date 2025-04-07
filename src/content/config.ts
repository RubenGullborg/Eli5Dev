import { defineCollection, z } from "astro:content";

const termsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    datePublished: z.date().optional(),
    dateUpdated: z.date().optional(),
  }),
});

export const collections = {
  terms: termsCollection,
};
