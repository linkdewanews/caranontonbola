<template>
  <component :is="'script'" type="application/ld+json" v-html="jsonLdOrganization" />
  <main class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto bg-gray-800/50 rounded-lg p-8 shadow-lg">
      <h1 class="text-4xl font-black text-center mb-8 text-cyan-400">Tentang Kami: Siapa Caranontonbola?</h1>
      <div class="prose prose-invert max-w-none text-lg text-gray-300 space-y-6">
        <p>
          Selamat datang di Caranontonbola, sumber terpercaya Anda untuk informasi siaran langsung sepak bola yang legal dan resmi. Kami bukan sekadar portal berita, melainkan sebuah tim yang terdiri dari para analis media dan praktisi hukum yang memiliki hasrat mendalam terhadap dunia olahraga dan penegakan hak siar.
        </p>
        <p>
          Misi kami sederhana: memberantas pembajakan siaran olahraga dengan menyediakan alternatif yang aman, legal, dan mudah diakses bagi para penggemar di Indonesia. Kami percaya bahwa menikmati pertandingan sepak bola berkualitas tidak harus melalui cara-cara ilegal yang merugikan banyak pihak.
        </p>
        <h2 class="text-2xl font-bold text-cyan-300">Keahlian dan Otoritas Kami</h2>
        <p>
          Tim kami secara aktif memonitor regulasi penyiaran, menjalin komunikasi dengan pemegang hak siar resmi, dan melakukan analisis mendalam untuk memastikan setiap informasi dan link yang kami bagikan 100% sah. Keahlian kami di bidang hukum media memberi kami otoritas untuk membedakan antara sumber siaran yang sah dan yang ilegal, melindungi Anda dari risiko keamanan siber dan pelanggaran hak cipta.
        </p>
        <p>
          Terima kasih telah mempercayai Caranontonbola. Kami berkomitmen untuk terus menjadi panduan utama Anda dalam menikmati sepak bola dengan cara yang benar.
        </p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import { ref } from 'vue';

// SEO Meta Tags
useHead({
  title: 'Tentang Kami - Caranontonbola',
  meta: [
    {
      name: 'description',
      content: 'Pelajari lebih lanjut tentang Caranontonbola, tim analis media dan hukum yang berdedikasi untuk menyediakan informasi link nonton Piala Dunia 2026 yang legal dan resmi.',
    },
  ],
});

// E-A-T Schema
const jsonLdOrganization = ref(JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Caranontonbola",
  "url": "https://caranontonbola.example.com", // Ganti dengan URL asli
  "logo": "https://caranontonbola.example.com/logo.png", // Ganti dengan URL logo
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-XXX-XXXX-XXXX", // Ganti dengan nomor telepon
    "contactType": "Customer Service"
  }
}));
</script>
