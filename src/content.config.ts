import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
    // 1. Starlight loader continues to handle the .mdx pages
    docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
    
    // 2. Metadata JSON that sits next to lesson pages
    //    Excludes anything inside a "practice" folder — that belongs to `quiz`.
    docsMeta: defineCollection({
        loader: glob({
            base: './src/content/docs',
            pattern: ['**/*.json', '!**/practice/**']
        })
    }),

    // 3. Quiz JSON (lives under src/content/docs), but only matches
    //    JSON files sitting inside a "practice" folder.
    quiz: defineCollection({
        loader: glob({ 
            base: './src/content/docs',
            pattern: '**/practice/*.json'
        })
    }),
};