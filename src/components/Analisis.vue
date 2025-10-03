<template>
    <main class="container mx-auto px-4 py-8">
      <!-- 1. H1 Headline -->
      <section class="text-center py-10">
        <h1 class="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
          Prediksi Skor & Analisis Mendalam Piala Dunia 2026: <span class="text-cyan-400">Siapa Kandidat Juara Sejati?</span>
        </h1>
      </section>

      <!-- 2. Featured Opinion Section -->
      <section class="my-8">
        <div class="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 class="text-3xl font-bold text-yellow-400">Analisis Taktik: Brazil vs Prancis, Final Dini?</h2>
          <p class="text-sm text-gray-400 mt-1">Oleh: John Doe, Analis Sepakbola Senior</p>
          <div class="mt-4 text-gray-300 space-y-4 prose prose-invert max-w-none">
            <p>
              Pertemuan dua raksasa ini di perempat final bisa menjadi penentu juara. Brazil dengan formasi 4-2-3-1 andalannya akan berhadapan dengan fleksibilitas taktik 3-5-2 dari Prancis. Lini tengah akan menjadi kunci pertempuran.
            </p>
            <p>
              <!-- SEO Injection Point: Internal Link to Pillar & Money Page -->
              Untuk memahami konteks turnamen secara keseluruhan, lihat kembali **<a href="/piala-dunia-2026" class="text-cyan-400 hover:underline">Panduan Lengkap Piala Dunia 2026</a>** kami. Dan jangan lupa, Anda bisa menyaksikan semua pertandingannya melalui **<a href="/link-nonton-legal" class="text-red-500 hover:underline">link nonton resmi</a>** yang kami sediakan.
              <!-- End SEO Injection Point -->
            </p>
          </div>
        </div>
      </section>

      <!-- 3. Score Predictions Section -->
      <section class="my-12">
        <h2 class="text-3xl font-bold text-center mb-8">Prediksi Pertandingan Mendatang</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="prediction in predictions" :key="prediction.match" class="bg-gray-800/50 p-6 rounded-lg text-center shadow-md">
            <p class="font-semibold text-gray-400">{{ prediction.group }}</p>
            <h3 class="text-2xl font-bold my-2">{{ prediction.match }}</h3>
            <p class="text-4xl font-extrabold text-yellow-400 my-4">{{ prediction.score }}</p>
            <p class="text-sm text-gray-300"><strong>Analisis Singkat:</strong> {{ prediction.analysis }}</p>
          </div>
        </div>
      </section>

      <NyalabetBanner />
    </main>
</template>

<script setup>
import { ref } from 'vue';
import NyalabetBanner from './NyalabetBanner.vue';
import { useHead } from '@vueuse/head';
import { RouterLink } from 'vue-router'; // Added missing import

// SEO Meta Tags & Schemas
useHead({
  title: 'Analisis & Prediksi Piala Dunia 2026 - Caranontonbola',
  meta: [
    {
      name: 'description',
      content: 'Dapatkan analisis mendalam, prediksi skor, dan pembahasan taktik terbaru seputar pertandingan Piala Dunia 2026 dari para ahli kami.',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Prediksi Skor & Analisis Mendalam Piala Dunia 2026: Siapa Kandidat Juara Sejati?",
        "author": {
          "@type": "Person",
          "name": "John Doe",
          "url": "https://caranontonbola.it/author/john-doe"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Caranontonbola"
        },
        "datePublished": "2025-10-04T09:00:00Z",
        "image": "https://caranontonbola.it/path/to/analysis-image.jpg"
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://caranontonbola.it/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Analisis"
          }
        ]
      })
    }
  ]
});



// --- Local State for Predictions ---
const predictions = ref([
  {
    group: 'Perempat Final',
    match: 'Inggris vs Jerman',
    score: '2 - 1',
    analysis: 'Inggris diunggulkan tipis berkat kecepatan lini serang mereka.'
  },
  {
    group: 'Perempat Final',
    match: 'Argentina vs Belanda',
    score: '1 - 1 (Pen: 4-3)',
    analysis: 'Pertandingan alot yang kemungkinan besar akan ditentukan lewat adu penalti.'
  },
  {
    group: 'Perempat Final',
    match: 'Spanyol vs Maroko',
    score: '1 - 0',
    analysis: 'Spanyol akan mendominasi penguasaan bola, namun Maroko berbahaya dalam serangan balik.'
  },
]);
</script>


