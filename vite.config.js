import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sitemap from 'vite-plugin-sitemap'

// Article slugs for dynamic routes
const articleSlugs = [
  'bocoran-grup-neraka',
  'jadwal-timnas',
  'analisis-taktik',
  'prediksi-inggris-jerman',
  'tvri-hak-siar',
  'wonderkid-2026',
  'kontroversi-var',
  'streaming-aman',
  'formasi-spanyol',
  'stadion-baru',
  'sejarah-piala-dunia',
  'jadwal-tv',
];
const dynamicRoutes = articleSlugs.map(slug => `/artikel/${slug}`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    sitemap({
      hostname: 'https://caranontonbola.it',
      dynamicRoutes,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
