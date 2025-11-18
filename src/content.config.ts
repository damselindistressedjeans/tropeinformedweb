import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/collections/news/',
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        abstract: z.string(),
        date: z.date(),
        author: z.optional(z.string()),
        tags: z.optional(z.array(z.string())),
    }),
});

const findings = defineCollection({
    loader: glob({
        pattern: '*.md',
        base: './src/collections/findings',
    }),
    schema: z.object({
        title: z.string(),
        source: z.string(),
        url: z.string(),
        category: z.string(),
        tags: z.optional(z.array(z.string())),
    }),
});

export const collections = { news, findings };
