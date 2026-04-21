import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL base para entornos corporativos de MoLoTech (Se reemplaza después por https://molotech.co)
  site: 'http://localhost:4321',
  integrations: [
    sitemap()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
