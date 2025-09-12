// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const columns = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.union([z.string(), z.date()]), // 文字列/Dateどちらも許可
        category: z.string(),
        image: z.string().optional(),
    }),
});

export const collections = { columns };
