import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'NEXEDU',
      customCss: ['./src/styles/custom.css'],
      // 1. Define your languages here
      defaultLocale: 'en',
      locales: {
        en: {
          label: 'EN',
          lang: 'en',
        },
        th: {
          label: 'TH',
          lang: 'th',
        },
      },
      sidebar: [],
    }),
  ],
});

