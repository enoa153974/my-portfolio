// src/content/config.ts
import { defineCollection, z } from 'astro:content';

//コラムページのスキーマ設定
const columns = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.union([z.string(), z.date()]),
            category: z.string(),
            image: image().optional(),
        }),
});


//worksページの各制作物詳細ページのスキーマ設定
const works = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            category: z.string(), // LP / Web / Banner
            tags: z.array(z.string()).optional(),
            thumbnail: image(),
            publish: z.boolean().default(true),

            // 👇ここが超重要
            overview: z.string(),
            target: z.string(),
            problem: z.string(),
            solution: z.string(),

            // 👇スキル見せる
            designPoints: z.string().optional(),
            tech: z.array(z.string()).optional(),

            // 👇あると強い
            url: z.string().optional(),
        }),
});


//コラムページ、制作物詳細ページのスキーマを定義
export const collections = { columns , works};
