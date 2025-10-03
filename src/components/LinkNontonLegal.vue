<template>
  <main class="container mx-auto px-4 py-12">

      <!-- 1. H1 Headline -->
      <section class="text-center mb-10">
        <h1 class="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight text-yellow-400">
          DAPATKAN SEKARANG! 5 LINK RESMI & GRATIS Nonton Piala Dunia 2026!
        </h1>
      </section>

      <!-- 3. E-A-T Clarification -->
      <section class="mb-10 text-center bg-gray-800/50 p-6 rounded-lg">
        <h2 class="font-bold text-2xl text-cyan-400">PENTING: KAMI ANTI-BAJAKAN</h2>
        <p class="mt-3 text-lg text-gray-300">
          Situs Caranontonbola **TIDAK** menyediakan atau membuat link streaming ilegal. Tombol-tombol di bawah ini akan mengarahkan Anda **LANGSUNG** ke situs resmi **TVRI** dan mitra pemegang hak siar sah lainnya di Indonesia. Keamanan Anda adalah prioritas kami.
        </p>
      </section>

      <!-- 4. Action Section (CTA Buttons) -->
      <section class="space-y-6">
        <!-- Tombol 1: Paling Menonjol -->
        <RouterLink to="/panduan-tvri" class="block p-6 bg-red-600 rounded-lg text-center text-white shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105">
          <span class="text-2xl font-extrabold">TVRI LIVE STREAMING (GRATIS)</span>
          <span class="block mt-1 text-red-200">Rekomendasi Utama & 100% Legal</span>
        </RouterLink>

        <!-- Tombol 2 -->
        <a href="#" class="block p-4 bg-gray-700 rounded-lg text-center text-white hover:bg-gray-600">
          <span class="text-xl font-bold">FIFA+ (STREAMING INTERNASIONAL)</span>
          <span class="block mt-1 text-gray-400">Beberapa pertandingan pilihan & konten eksklusif</span>
        </a>

        <!-- Tombol 3 -->
        <a href="#" class="block p-4 bg-gray-700 rounded-lg text-center text-white hover:bg-gray-600">
          <span class="text-xl font-bold">MITRA OTT RESMI (BERBAYAR)</span>
          <span class="block mt-1 text-gray-400">Akses semua 80 pertandingan, kualitas HD/4K (Segera Hadir)</span>
        </a>

        <!-- Tombol 4 & 5 (Placeholder) -->
        <a href="#" class="block p-4 bg-gray-700/50 rounded-lg text-center text-gray-500 cursor-not-allowed">
          <span class="text-xl font-bold">STREAMING PARTNER #4 (SEGERA DIUMUMKAN)</span>
        </a>
        <a href="#" class="block p-4 bg-gray-700/50 rounded-lg text-center text-gray-500 cursor-not-allowed">
          <span class="text-xl font-bold">STREAMING PARTNER #5 (SEGERA DIUMUMKAN)</span>
        </a>
      </section>

      <!-- 5. Warning Alert Box -->
      <section class="mt-12 p-4 bg-yellow-500/10 border-l-4 border-yellow-400 text-yellow-300">
        <h3 class="font-bold">PERINGATAN KERAS</h3>
        <p>Jangan pernah memasukkan data pribadi atau mengunduh aplikasi dari situs streaming ilegal. Risiko phising, malware, dan pencurian data sangat tinggi. Selalu gunakan link dari sumber terpercaya seperti yang kami sediakan.</p>
      </section>

      <!-- 6. Internal Link Flow -->
      <section class="mt-10 text-center text-gray-400">
        <p>Bingung memilih? Baca kembali <RouterLink to="/panduan-lengkap-world-cup" class="text-cyan-400 underline">Panduan Lengkap 5 Cara Nonton World Cup</RouterLink> kami untuk analisis mendalam setiap metode.</p>
      </section>

  </main>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useHead } from '@vueuse/head';

// SEO Meta Tags & Schemas
useHead({
  title: 'Link Resmi Nonton Piala Dunia 2026 - Caranontonbola',
  meta: [
    {
      name: 'description',
      content: 'Dapatkan 5 link resmi dan gratis untuk nonton siaran langsung Piala Dunia 2026. Akses legal ke TVRI, FIFA+, dan mitra resmi lainnya.',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Cara Mendapatkan 5 Link Resmi & Gratis Nonton Piala Dunia 2026",
        "description": "Langkah-langkah untuk mengakses link streaming legal dan resmi untuk siaran langsung Piala Dunia 2026, termasuk TVRI dan FIFA+.",
        "step": [
          { "@type": "HowToStep", "name": "Akses TVRI", "text": "Klik tombol TVRI Live Streaming untuk diarahkan ke panduan menonton gratis melalui siaran digital atau aplikasi TVRI Klik." },
          { "@type": "HowToStep", "name": "Gunakan FIFA+", "text": "Manfaatkan platform streaming resmi FIFA untuk pertandingan pilihan dan konten eksklusif lainnya." },
          { "@type": "HowToStep", "name": "Langganan Mitra OTT", "text": "Pilih tombol Mitra OTT Resmi untuk melihat opsi langganan premium yang menyediakan semua pertandingan dengan kualitas terbaik." }
        ]
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
            "name": "Link Nonton Legal"
          }
        ]
      })
    }
  ]
});
</script>
