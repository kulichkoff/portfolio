import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      year: z.number().min(2020).max(2100).optional(),
      role: z.string().optional(),
      liveLink: z.string().optional(),
      sourceCodeLink: z.string().optional(),
      technologies: z
        .string()
        .transform((val) => val.split(",").map((skill) => skill.trim())),
      heroImage: z.optional(image()),
    }),
});

export const collections = { projects };
