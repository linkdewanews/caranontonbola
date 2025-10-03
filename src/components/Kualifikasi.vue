<template>
    <main class="container mx-auto px-4 py-8">
      <!-- 1. H1 Headline -->
      <section class="text-center py-10">
        <h1 class="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
          Hasil Terbaru Kualifikasi Piala Dunia 2026 Zona Asia: <span class="text-red-500">Peluang Timnas Garuda Lolos ke Putaran Final!</span>
        </h1>
      </section>

      <!-- 2. Main News Section -->
      <section class="my-8">
        <div class="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 class="text-3xl font-bold text-yellow-400">TERBARU: Indonesia Tahan Imbang Raksasa Asia!</h2>
          <p class="text-sm text-gray-400 mt-1">Diposting pada: 3 Oktober 2025</p>
          <div class="mt-4 text-gray-300 space-y-4">
            <p>
              Timnas Garuda menunjukkan performa heroik dengan menahan imbang Jepang 1-1 dalam laga tandang yang menegangkan. Hasil ini membuka kembali asa untuk lolos ke putaran berikutnya.
            </p>
            <p>
              Permainan disiplin di lini belakang dan serangan balik cepat menjadi kunci. Banyak penggemar yang terpukau setelah menonton pertandingan melalui <!-- SEO Injection Point: Money Page Anchor Text --> **link live streaming** <!-- End SEO Injection Point --> yang tersedia.
            </p>
          </div>
        </div>
      </section>

      <!-- 3. Group Standings Table -->
      <section class="my-12">
        <h2 class="text-3xl font-bold text-center mb-8">Klasemen Sementara Grup C - Putaran Ketiga</h2>
        <div class="overflow-x-auto bg-gray-800/50 rounded-lg shadow-lg">
          <table class="min-w-full text-sm text-left">
            <thead class="bg-gray-700 text-xs uppercase">
              <tr>
                <th scope="col" class="px-6 py-3">Pos</th>
                <th scope="col" class="px-6 py-3">Tim</th>
                <th scope="col" class="px-6 py-3">Main</th>
                <th scope="col" class="px-6 py-3">M</th>
                <th scope="col" class="px-6 py-3">S</th>
                <th scope="col" class="px-6 py-3">K</th>
                <th scope="col" class="px-6 py-3">Poin</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(team, index) in standings" :key="team.name" class="border-b border-gray-700" :class="{'bg-red-900/30': team.name === 'Indonesia'}">
                <td class="px-6 py-4 font-medium">{{ index + 1 }}</td>
                <td class="px-6 py-4 font-bold">{{ team.name }}</td>
                <td class="px-6 py-4">{{ team.played }}</td>
                <td class="px-6 py-4">{{ team.win }}</td>
                <td class="px-6 py-4">{{ team.draw }}</td>
                <td class="px-6 py-4">{{ team.loss }}</td>
                <td class="px-6 py-4 font-extrabold text-yellow-400">{{ team.points }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </main>
</template>

<script setup>
import { ref } from 'vue';
import { useHead } from '@vueuse/head';
import { RouterLink } from 'vue-router'; // Added missing import

// SEO Meta Tags & Schemas
useHead({
  title: 'Kualifikasi Piala Dunia 2026 Zona Asia - Caranontonbola',
  meta: [
    {
      name: 'description',
      content: 'Ikuti hasil terbaru Kualifikasi Piala Dunia 2026 zona Asia, klasemen, dan analisis peluang Timnas Indonesia untuk lolos ke putaran final.',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "Hasil Terbaru Kualifikasi Piala Dunia 2026 Zona Asia: Peluang Timnas Garuda Lolos ke Putaran Final!",
        "author": {
          "@type": "Organization",
          "name": "Caranontonbola"
        },
        "datePublished": "2025-10-03T20:00:00Z",
        "image": "https://caranontonbola.it/path/to/image.jpg"
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
            "name": "Kualifikasi"
          }
        ]
      })
    }
  ]
});



// --- Local State for Standings ---
const standings = ref([
  { name: 'Jepang', played: 5, win: 4, draw: 1, loss: 0, points: 13 },
  { name: 'Arab Saudi', played: 5, win: 3, draw: 1, loss: 1, points: 10 },
  { name: 'Indonesia', played: 5, win: 2, draw: 2, loss: 1, points: 8 },
  { name: 'Australia', played: 5, win: 2, draw: 0, loss: 3, points: 6 },
  { name: 'Irak', played: 5, win: 1, draw: 0, loss: 4, points: 3 },
  { name: 'Vietnam', played: 5, win: 0, draw: 2, loss: 3, points: 2 },
]);
</script>

<style scoped>
/* Scoped styles can be added here if needed */
</style>
