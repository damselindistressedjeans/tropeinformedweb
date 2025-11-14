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
    }),
});

const findings = defineCollection({
    loader: glob({
        pattern: '*.md',
        base: './src/collections/findings',
    }),
});

export const collections = { news, findings };
