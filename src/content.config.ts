import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
    // 1. Starlight loader continues to handle the .mdx pages
    docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
    
    // 2. Your existing data collection for metadata
    docsMeta: defineCollection({
        loader: glob({ pattern: 'src/content/docs/**/*.json' })
    }),

    // 3. NEW: The collection for your quiz JSON files!
    quiz: defineCollection({
        loader: glob({ pattern: 'src/content/quiz/**/*.json' })
    }),
};