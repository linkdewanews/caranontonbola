<template>
  <div class="bg-gray-900 text-white font-sans">
    <TheHeader />
    <main>
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';
import { RouterView, useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import { computed } from 'vue';

const route = useRoute();
const canonicalUrl = computed(() => `https://caranontonbola.it${route.path}`);

// Set global meta tags
useHead({
  title: '[2026] Link Nonton Piala Dunia GRATIS & LEGAL | Jadwal Resmi TVRI - Caranontonbola',
  meta: [
    {
      name: 'description',
      content: 'STOP ILEGAL! Kami sediakan 5 link resmi & aman nonton Piala Dunia 2026. Cek jadwal siaran langsung TVRI dan panduan akses legal anti-bajakan di sini.',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl,
    },
  ],
});
</script>
