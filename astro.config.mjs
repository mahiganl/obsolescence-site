// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://obsolescence-humaine.com',
  // Astro 7 compacte les espaces comme JSX par défaut ; on garde l'ancien comportement
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
