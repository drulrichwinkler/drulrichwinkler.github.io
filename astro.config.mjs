import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://drulrichwinkler.github.io',
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: { prefixDefaultLocale: false },
  },
});
