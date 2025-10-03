<template>
  <div>
    <!-- Floating Sticky Bar remains separate from the main footer -->
    <FloatingBar />

    <!-- New 3-Column Footer -->
    <footer class="bg-gray-950 text-gray-400 py-12 mt-12">
      <div class="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        
        <!-- Column 1: Branding & Disclaimer -->
        <div class="space-y-4">
          <h3 class="text-2xl font-extrabold text-white">CARANONTONBOLA</h3>
          <p class="text-sm">
            Situs ini tidak melakukan streaming ilegal. Kami hanya mengumpulkan dan menyediakan informasi mengenai link nonton Piala Dunia 2026 dari sumber resmi dan pemegang hak siar yang sah. Untuk informasi terlengkap, kunjungi <a href="/panduan-lengkap-world-cup" class="underline hover:text-white">Panduan Lengkap World Cup</a> kami.
          </p>
          <p class="text-xs text-gray-500">&copy; {{ new Date().getFullYear() }} Caranontonbola. All rights reserved.</p>
        </div>

        <!-- Column 2: Quick Navigation -->
        <div>
          <h4 class="font-bold text-lg text-white mb-4">Navigasi Cepat</h4>
          <ul class="space-y-2 text-sm">
            <li><RouterLink to="/artikel" class="hover:text-white">ARTIKEL</RouterLink></li>
            <li><RouterLink to="/piala-dunia-2026" class="hover:text-white">PIALA DUNIA 2026</RouterLink></li>
            <li><RouterLink to="/kualifikasi" class="hover:text-white">KUALIFIKASI</RouterLink></li>
            <li><RouterLink to="/analisis" class="hover:text-white">ANALISIS</RouterLink></li>
            <li><RouterLink to="/panduan-tvri" class="hover:text-white">PANDUAN TVRI GRATIS</RouterLink></li>
          </ul>
        </div>

        <!-- Column 3: E-A-T & Social Media -->
        <div>
          <h4 class="font-bold text-lg text-white mb-4">Informasi & Legalitas</h4>
          <ul class="space-y-2 text-sm mb-6">
            <li><RouterLink to="/tentang-kami" class="hover:text-white">Tentang Kami</RouterLink></li>
            <li><RouterLink to="/kontak" class="hover:text-white">Kontak</RouterLink></li>
            <li><RouterLink to="/kebijakan-privasi" class="hover:text-white">Kebijakan Privasi</RouterLink></li>
          </ul>
          <div class="flex space-x-4">
            <a href="#" class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-600">FB</a>
            <a href="#" class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-600">X</a>
            <a href="#" class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-cyan-600">IG</a>
          </div>
        </div>

      </div>
    </footer>
  </div>
</template>

<script setup>
import FloatingBar from './FloatingBar.vue';
import { RouterLink } from 'vue-router';
</script>
