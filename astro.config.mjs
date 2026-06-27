import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'NEXEDU',
      favicon: '/logo.png',
      customCss: [
        './src/styles/global.css',
        './src/styles/header.css',
        './src/styles/homepage.css',
      ],
      defaultLocale: 'en',
      locales: {
        en: { label: 'EN', lang: 'en' },
        th: { label: 'TH', lang: 'th' },
      },
      sidebar: [],
      components: {
        Header: './src/components/CustomHeader.astro',
      },
    }),
  ],
});