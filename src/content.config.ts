import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	// Starlight loader continues to handle the .mdx pages
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	
	// New data collection specifically to parse your test.json files
	docsMeta: defineCollection({
		loader: glob({ pattern: 'src/content/docs/**/*.json' })
	}),
};