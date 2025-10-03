<template>
  <main class="container mx-auto px-4 py-12">
    <article class="max-w-4xl mx-auto">

      <!-- 1. H1 Headline -->
      <section class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
          [PANDUAN MENDALAM]: <span class="text-cyan-400">Cara Nonton Piala Dunia 2026 di TVRI Gratis Secara Online dan Digital!</span>
        </h1>
        <p class="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Panduan teknis langkah demi langkah untuk memastikan Anda bisa menikmati siaran Piala Dunia 2026 dari TVRI tanpa kendala.
        </p>
      </section>

      <!-- 3. Body Content -->
      <div class="prose prose-invert max-w-none text-lg text-gray-300 space-y-8">
        
        <section>
          <h2 class="text-3xl font-bold text-cyan-300">Langkah 1: Persiapan Perangkat TV Digital</h2>
          <p>
            Kunci utama untuk menonton siaran TVRI adalah memastikan perangkat Anda mendukung siaran digital (DVB-T2). Mayoritas TV keluaran 2018 ke atas sudah memiliki tuner DVB-T2 internal. Jika TV Anda model lama (analog), Anda hanya perlu membeli perangkat **Set-Top Box (STB)** DVB-T2 yang banyak dijual di pasaran dengan harga terjangkau.
          </p>
          <ul>
            <li>Pastikan STB memiliki sertifikasi Kominfo.</li>
            <li>Hubungkan antena UHF outdoor/indoor ke STB.</li>
            <li>Hubungkan STB ke TV Anda menggunakan kabel HDMI (untuk kualitas terbaik) atau RCA.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-3xl font-bold text-cyan-300">Langkah 2: Pencarian (Scan) Saluran Digital</h2>
          <p>
            Setelah perangkat siap, nyalakan TV dan masuk ke mode pencarian saluran. Pilih opsi "Pencarian Digital" atau "DTV Scan". Biarkan proses berjalan hingga selesai. Saluran TVRI Nasional (dan TVRI Sport jika tersedia di daerah Anda) akan otomatis tersimpan dengan kualitas gambar yang jernih dan tanpa "semut".
          </p>
        </section>

        <section>
          <h2 class="text-3xl font-bold text-cyan-300">Langkah 3: Menonton via Streaming di Aplikasi TVRI Klik</h2>
          <p>
            Selain melalui siaran terestrial, TVRI juga menyediakan aplikasi resmi bernama **TVRI Klik**. Anda bisa mengunduhnya di Google Play Store atau Apple App Store. Aplikasi ini memungkinkan Anda untuk melakukan streaming siaran langsung TVRI di mana saja selama terhubung ke internet. Ini adalah solusi bagi Anda yang sedang tidak berada di depan TV.
          </p>
          <p>
            Meskipun gratis, perlu diingat bahwa kualitas dan stabilitas streaming online sangat bergantung pada koneksi internet Anda. Untuk pengalaman terbaik, siaran digital terestrial tetap menjadi pilihan utama. Untuk mengetahui **<!-- Anchor back to Pillar --> <RouterLink to="/panduan-lengkap-world-cup" class="text-cyan-400 hover:underline">semua 5 cara legal nonton World Cup</RouterLink> <!-- End Anchor -->**, kunjungi panduan lengkap kami.
          </p>
        </section>

        <!-- 4. FAQ Section -->
        <section class="mt-16 bg-gray-800/50 rounded-lg p-8">
          <h2 class="text-3xl font-bold text-center mb-8 text-yellow-400">Frequently Asked Questions (FAQ)</h2>
          <div class="space-y-6">
            <div v-for="faq in faqs" :key="faq.question">
              <h3 class="text-xl font-bold text-cyan-300">{{ faq.question }}</h3>
              <p class="mt-2">{{ faq.answer }}</p>
            </div>
          </div>
        </section>

      </div>
    </article>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useHead } from '@vueuse/head';

const faqs = ref([
  {
    question: 'Apakah TVRI menyiarkan semua 80 pertandingan Piala Dunia?',
    answer: 'Biasanya tidak. TVRI sebagai lembaga penyiaran publik akan menyiarkan sebagian besar pertandingan, terutama laga-laga penting. Untuk akses semua pertandingan, biasanya diperlukan layanan berbayar dari pemegang hak siar lainnya.'
  },
  {
    question: 'Apakah kualitas siaran streaming di TVRI Klik setara dengan TV Digital?',
    answer: 'Umumnya, kualitas siaran TV Digital terestrial (DVB-T2) lebih stabil dan memiliki bitrate lebih tinggi dibandingkan streaming online, yang sangat bergantung pada kecepatan internet Anda.'
  },
  {
    question: 'Apakah saya perlu antena khusus untuk TV Digital?',
    answer: 'Tidak, Anda bisa menggunakan antena TV UHF biasa. Namun, pastikan kualitas dan posisi antena baik untuk mendapatkan sinyal yang maksimal.'
  },
  {
    question: 'Apakah aplikasi TVRI Klik berbayar?',
    answer: 'Tidak, aplikasi TVRI Klik sepenuhnya gratis untuk diunduh dan digunakan.'
  }
]);

// SEO Meta Tags & Schema
useHead({
  title: 'Panduan Nonton Piala Dunia 2026 di TVRI - Caranontonbola',
  meta: [
    {
      name: 'description',
      content: 'Panduan teknis dan mendalam cara nonton Piala Dunia 2026 gratis di TVRI melalui siaran digital (DVB-T2) dan streaming online via aplikasi TVRI Klik.',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.value.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }))
    }
  ]
});


</script>
