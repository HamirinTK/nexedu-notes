import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  integrations: [
    starlight({
      title: 'NEXEDU',
      favicon: '/logo.png',
      customCss: [
        './src/styles/global.css',
        './src/styles/header.css',
        './src/styles/homepage.css',
        './src/styles/lesson.css'
      ],
      defaultLocale: 'en',
      locales: {
        en: { label: 'EN', lang: 'en' },
        th: { label: 'TH', lang: 'th' },
      },
      sidebar: [],
      components: {
        Header: './src/components/CustomHeader.astro',
        PageFrame: './src/layouts/LessonLayout.astro',
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});