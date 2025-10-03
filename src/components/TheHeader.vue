<template>
  <header class="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
    <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
      <RouterLink to="/" class="text-2xl font-extrabold text-red-600">CARANONTONBOLA</RouterLink>
      
      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center space-x-6 font-semibold">
        <li><RouterLink to="/artikel" class="hover:text-red-500" active-class="text-red-500">ARTIKEL</RouterLink></li>
        <li><RouterLink to="/piala-dunia-2026" class="hover:text-red-500" active-class="text-red-500">PIALA DUNIA 2026</RouterLink></li>
        <li><RouterLink to="/kualifikasi" class="hover:text-red-500" active-class="text-red-500">KUALIFIKASI</RouterLink></li>
        <li><RouterLink to="/analisis" class="hover:text-red-500" active-class="text-red-500">ANALISIS</RouterLink></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button @click="toggleMobileMenu" class="md:hidden text-2xl z-50">
        <span v-if="!isMobileMenuOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </nav>

    <!-- Mobile Menu Panel -->
    <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-gray-800 shadow-lg">
      <ul class="flex flex-col items-center space-y-4 py-6">
        <li><RouterLink to="/artikel" @click="closeMobileMenu" class="hover:text-red-500 text-lg" active-class="text-red-500">ARTIKEL</RouterLink></li>
        <li><RouterLink to="/piala-dunia-2026" @click="closeMobileMenu" class="hover:text-red-500 text-lg" active-class="text-red-500">PIALA DUNIA 2026</RouterLink></li>
        <li><RouterLink to="/kualifikasi" @click="closeMobileMenu" class="hover:text-red-500 text-lg" active-class="text-red-500">KUALIFIKASI</RouterLink></li>
        <li><RouterLink to="/analisis" @click="closeMobileMenu" class="hover:text-red-500 text-lg" active-class="text-red-500">ANALISIS</RouterLink></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>
