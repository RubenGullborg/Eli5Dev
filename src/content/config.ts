import { defineCollection, z } from "astro:content";

const termsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    question: z.string().optional(),
    hint: z.string().optional(),
    analogy: z.string().optional(),
    tags: z.array(z.string()).optional(),
    datePublished: z.date().optional(),
    dateUpdated: z.date().optional(),
  }),
});

export const collections = {
  terms: termsCollection,
};
