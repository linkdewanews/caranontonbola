<template>
    <main class="container mx-auto px-4 py-8">
      
      <!-- 2. Hero Section (H1, H2, CTR Signal) -->
      <section class="text-center py-12">
        <h1 class="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight">
          PIALA DUNIA 2026 GRATIS & LEGAL: <span class="text-yellow-400">Dapatkan Link Streaming RESMI</span> Anti-Bajakan Sekarang!
        </h1>
        <h2 class="mt-4 text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto">
          STOP Cari Link Ilegal! Kami Rangkum 5 Cara untuk dapat <a href="/panduan-lengkap-world-cup" class="text-cyan-400 underline hover:text-cyan-300">akses legal Piala Dunia</a> dan nonton bola gratis online. Semua metode 100% aman dari sumber terpercaya hak siar untuk siaran langsung World Cup 2026.
        </h2>
        <div class="mt-6 text-yellow-400 text-lg font-bold">
          ⭐⭐⭐⭐⭐ <span class="text-white">Rating Tinggi Berdasarkan Kualitas Layanan</span>
        </div>
      </section>

      <!-- 3. CTA Primer (Konversi Maksimal) -->
      <section id="cta-main" class="text-center py-6">
        <a href="/link-nonton-legal" class="inline-block bg-red-600 text-white text-xl md:text-2xl font-bold px-8 py-5 rounded-lg shadow-xl transform transition hover:scale-105 animate-pulse">
          [KLIK DI SINI: TEMUKAN 5 LINK GRATIS TVRI SEKARANG JUGA! 🚀]
        </a>
      </section>

      <!-- 4. TVRI & E-A-T Section -->
      <section class="my-12">
        <div class="bg-blue-900/50 border border-blue-700 rounded-lg p-6 max-w-3xl mx-auto text-center">
          <h3 class="text-2xl md:text-3xl font-bold text-cyan-300">UPDATE TVRI: Dijamin Nonton GRATIS di Rumah!</h3>
          <p class="mt-3 text-gray-200">
            "Sesuai regulasi, TVRI dipastikan akan menayangkan mayoritas laga sebagai <span class="font-bold text-white">siaran langsung World Cup 2026</span> secara <span class="font-bold text-white">Free-to-Air</span>. Ini adalah cara nonton bola gratis online yang paling ditunggu! Dapatkan panduan lengkap cara <span class="italic">setting</span> TV Digital Anda!"
          </p>
          <!-- SEO Injection Point: Internal Link to Guide -->
          <a href="/panduan-tvri" class="mt-5 inline-block bg-cyan-500 text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-cyan-400">
            [PANDUAN MENDALAM: Cara Nonton Piala Dunia di TVRI Gratis 📺]
          </a>
          <!-- End SEO Injection Point -->
        </div>
      </section>

      <!-- 5. News Feed (Internal Link Flow) -->
      <section class="my-12">
        <h2 class="text-3xl font-bold text-center mb-8">Berita & Analisis Terkini</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="article in featuredArticles" :key="article.id" class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-red-500/20 transition-shadow">
            <img :src="article.image" :alt="article.alt" class="w-full h-48 object-cover">
            <div class="p-4">
              <p class="text-sm font-semibold text-red-500">{{ article.category }}</p>
              <h3 class="text-lg font-bold mt-1 hover:text-yellow-400">
                <a :href="article.link">{{ article.title }}</a>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <div class="my-12">
        <NyalabetBanner />
      </div>

    </main>
</template>

<script setup>
import { ref } from 'vue';
import NyalabetBanner from './NyalabetBanner.vue';
import { useHead } from '@vueuse/head';

// SEO Meta Tags & Schema for Homepage
useHead({
  // Title and Description are handled by the global setup in TheLayout.vue for the homepage
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Panduan Nonton Bola Legal Caranontonbola",
        "serviceType": "Informational Service",
        "provider": {
          "@type": "Organization",
          "name": "Caranontonbola"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "ratingCount": "9800"
        }
      })
    }
  ]
});


// --- Local State for Featured Articles ---
const featuredArticles = ref([
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1721404020670-cd89ad27ced1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Bocoran Pertandingan Grup Neraka Piala Dunia 2026',
    category: 'LINK LEGAL',
    title: '[EKSKLUSIF] Bocoran 3 Pertandingan Grup Neraka yang WAJIB Kamu Tonton!',
    link: '/artikel/bocoran-grup-neraka'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1527871252447-4ce32da643c6?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Jadwal Lengkap Timnas Indonesia di Kualifikasi',
    category: 'KUALIFIKASI',
    title: 'JADWAL LENGKAP: Kapan Timnas Indonesia Main? Ini Link Nontonnya!',
    link: '/artikel/jadwal-timnas'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1572139332398-724fbaaa46a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Analisis Taktik Modern di Piala Dunia',
    category: 'ANALISIS',
    title: 'Bukan Cuma Tiki-Taka, 2 Taktik Ini Akan Guncang Piala Dunia 2026',
    link: '/artikel/analisis-taktik'
  }
]);
</script>
