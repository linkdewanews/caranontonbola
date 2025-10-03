<template>
    <main class="container mx-auto px-4 py-8">
      <!-- 1. Comprehensive H1 Headline -->
      <section class="text-center py-10">
        <h1 class="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight">
          Panduan Lengkap Piala Dunia 2026: <span class="text-yellow-400">Jadwal Resmi, Tim Lolos, dan Akses Link Nonton Legal Terbaru!</span>
        </h1>
        <p class="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Semua yang perlu Anda tahu tentang World Cup 2026 di Amerika Utara. Dari jadwal lengkap 80 pertandingan hingga daftar timnas yang sudah pasti lolos.
        </p>
      </section>

      <!-- 2. Main CTA (Money Page Link) -->
      <section class="text-center py-6 my-8 bg-gray-800 rounded-lg">
        <h2 class="text-2xl font-bold">AKSES LINK NONTON RESMI</h2>
        <p class="text-gray-400 mt-2 mb-6">Jangan lewatkan satu pertandingan pun! Dapatkan akses legal dan gratis di sini.</p>
        <a href="/link-nonton-legal" class="inline-block bg-red-600 text-white text-xl font-bold px-8 py-5 rounded-lg shadow-xl transform transition hover:scale-105 animate-pulse">
          [KLIK DI SINI: TEMUKAN 5 LINK GRATIS SEKARANG! 🚀]
        </a>
      </section>

      <!-- 3. Full Match Schedule (Simulated 80 Matches) -->
      <section class="my-12">
        <h2 class="text-3xl font-bold text-center mb-8">Jadwal Lengkap 80 Pertandingan Piala Dunia 2026 (Placeholder)</h2>
        <div class="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
          <table class="min-w-full text-sm text-left">
            <thead class="bg-gray-700 text-xs uppercase">
              <tr>
                <th scope="col" class="px-6 py-3">Match</th>
                <th scope="col" class="px-6 py-3">Grup</th>
                <th scope="col" class="px-6 py-3">Tim 1</th>
                <th scope="col" class="px-6 py-3">Tim 2</th>
                <th scope="col" class="px-6 py-3">Tanggal</th>
                <th scope="col" class="px-6 py-3">Stadion</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="match in 80" :key="match" class="border-b border-gray-700 hover:bg-gray-700/50">
                <td class="px-6 py-4 font-medium">{{ match }}</td>
                <td class="px-6 py-4">Grup A (Placeholder)</td>
                <td class="px-6 py-4">Tim Placeholder 1</td>
                <td class="px-6 py-4">Tim Placeholder 2</td>
                <td class="px-6 py-4">Juni 2026</td>
                <td class="px-6 py-4">MetLife Stadium (Placeholder)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- SEO Injection Point: Internal Link to Analysis -->
        <div class="text-center mt-6 text-gray-400">
          <p>Untuk analisis mendalam setiap pertandingan, kunjungi halaman <a href="/analisis" class="text-cyan-400 underline">Analisis Taktik</a> kami.</p>
        </div>
        <!-- End SEO Injection Point -->
      </section>

      <!-- 4. Qualified Teams (E-A-T Section) -->
      <section class="my-12">
        <h2 class="text-3xl font-bold text-center mb-8">Daftar Timnas yang Lolos Piala Dunia 2026</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div v-for="team in qualifiedTeams" :key="team.name" class="p-3 bg-gray-800 rounded-lg flex items-center space-x-3 shadow-md hover:bg-gray-700/50 transition-colors">
            <img :src="team.flagUrl" :alt="`Bendera ${team.name}`" class="w-8 h-6 object-cover border border-gray-600 rounded-sm">
            <span class="text-sm font-semibold">{{ team.name }}</span>
          </div>
        </div>
        <!-- SEO Injection Point: Internal Link to Qualifications -->
        <div class="text-center mt-6 text-gray-400">
          <p>Lihat bagaimana perjuangan mereka di halaman <a href="/kualifikasi" class="text-cyan-400 underline">Kualifikasi Piala Dunia</a>.</p>
        </div>
        <!-- End SEO Injection Point -->
      </section>

    </main>
</template>

<script setup>
import { ref } from 'vue';
import { useHead } from '@vueuse/head';
import { RouterLink } from 'vue-router'; // Added missing import

// SEO Meta Tags & Schemas
useHead({
  title: 'Panduan Lengkap Piala Dunia 2026: Jadwal, Tim & Link Nonton - Caranontonbola',
  meta: [
    {
      name: 'description',
      content: 'Semua yang perlu Anda tahu tentang World Cup 2026. Jadwal lengkap 80 pertandingan, daftar timnas yang lolos, dan akses link nonton legal terbaru.',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Cara Mengakses Informasi Lengkap Piala Dunia 2026",
        "step": [
          { "@type": "HowToStep", "name": "Cek Jadwal", "text": "Lihat tabel jadwal lengkap untuk semua 80 pertandingan." },
          { "@type": "HowToStep", "name": "Lihat Tim Lolos", "text": "Periksa daftar negara yang sudah memastikan tempat di putaran final." },
          { "@type": "HowToStep", "name": "Dapatkan Link Nonton", "text": "Gunakan tombol CTA untuk mengakses halaman link nonton resmi." }
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Panduan Lengkap Piala Dunia 2026: Jadwal, Tim, dan Link Nonton",
        "description": "Pillar content yang merangkum semua informasi penting tentang Piala Dunia 2026, dari jadwal 80 pertandingan, daftar tim yang lolos, hingga link nonton resmi.",
        "url": "https://caranontonbola.it/piala-dunia-2026",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Jadwal Pertandingan" },
            { "@type": "ListItem", "position": 2, "name": "Tim Lolos" }
          ]
        }
      })
    }
  ]
});



// --- Local State for Qualified Teams ---
const qualifiedTeams = ref([
  { name: 'Amerika Serikat', flagUrl: 'https://flagcdn.com/w40/us.png' },
  { name: 'Meksiko', flagUrl: 'https://flagcdn.com/w40/mx.png' },
  { name: 'Kanada', flagUrl: 'https://flagcdn.com/w40/ca.png' },
  { name: 'Brasil', flagUrl: 'https://flagcdn.com/w40/br.png' },
  { name: 'Argentina', flagUrl: 'https://flagcdn.com/w40/ar.png' },
  { name: 'Jerman', flagUrl: 'https://flagcdn.com/w40/de.png' },
  { name: 'Prancis', flagUrl: 'https://flagcdn.com/w40/fr.png' },
  { name: 'Spanyol', flagUrl: 'https://flagcdn.com/w40/es.png' },
  { name: 'Inggris', flagUrl: 'https://flagcdn.com/w40/gb-eng.png' },
  { name: 'Belanda', flagUrl: 'https://flagcdn.com/w40/nl.png' },
  { name: 'Jepang', flagUrl: 'https://flagcdn.com/w40/jp.png' },
  { name: 'Korea Selatan', flagUrl: 'https://flagcdn.com/w40/kr.png' },
  { name: 'Arab Saudi', flagUrl: 'https://flagcdn.com/w40/sa.png' },
  { name: 'Australia', flagUrl: 'https://flagcdn.com/w40/au.png' },
  { name: 'Maroko', flagUrl: 'https://flagcdn.com/w40/ma.png' },
  { name: 'Senegal', flagUrl: 'https://flagcdn.com/w40/sn.png' },
  { name: '(Placeholder)', flagUrl: 'https://via.placeholder.com/40x30.png/374151/808080?text=??' },
  { name: '(Placeholder)', flagUrl: 'https://via.placeholder.com/40x30.png/374151/808080?text=??' },
  { name: '(Placeholder)', flagUrl: 'https://via.placeholder.com/40x30.png/374151/808080?text=??' },
  { name: '(Placeholder)', flagUrl: 'https://via.placeholder.com/40x30.png/374151/808080?text=??' },
  { name: '(Placeholder)', flagUrl: 'https://via.placeholder.com/40x30.png/374151/808080?text=??' },
  { name: '(Placeholder)', flagUrl: 'https://via.placeholder.com/40x30.png/374151/808080?text=??' },
  { name: '(Placeholder)', flagUrl: 'https://via.placeholder.com/40x30.png/374151/808080?text=??' },
  { name: '(Placeholder)', flagUrl: 'https://via.placeholder.com/40x30.png/374151/808080?text=??' },
]);
</script>

<style scoped>
/* Scoped styles can be added here if needed */
</style>
