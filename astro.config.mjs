import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL base para entornos corporativos de MoLoTech (Se reemplaza después por https://molotech.co)
  site: 'https://cristhianmoreno06.github.io',
  base: '/MoloTechSolutions/', // IMPORTANTE
  integrations: [
    sitemap()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
