# Caranontonbola - Website Panduan Nonton Bola Legal

Ini adalah frontend untuk **Caranontonbola**, sebuah proyek website yang dibangun menggunakan Vue.js 3. Tujuan utama situs ini adalah untuk menyediakan informasi yang akurat, legal, dan aman mengenai cara menonton siaran langsung Piala Dunia 2026 dan pertandingan sepak bola lainnya. 

Proyek ini dirancang dengan fokus utama pada **kinerja, pengalaman pengguna (UX), dan strategi SEO teknis tingkat lanjut** untuk mencapai peringkat tinggi di mesin pencari.

---

## ✨ Fitur Utama

- **Arsitektur Berbasis Komponen:** Dibangun dengan Vue 3 Composition API untuk kode yang modular dan mudah dikelola.
- **Layout Global:** Header dan Footer yang konsisten di semua halaman untuk branding dan navigasi yang kuat.
- **Navigasi Responsif:** Termasuk menu *mobile* (hamburger) yang fungsional untuk perangkat seluler.
- **Sistem Routing Lengkap:** Menggunakan `vue-router` untuk menangani semua halaman situs.
- **Konten Dinamis (Simulasi):** Halaman detail artikel yang kontennya berubah berdasarkan `slug` di URL.
- **Struktur Konten SEO-Driven:**
  - **Homepage:** Berfungsi sebagai *landing page* utama dengan sinyal E-A-T (Expertise, Authoritativeness, Trustworthiness) yang kuat.
  - **Pillar Content:** Halaman pilar (`PanduanLengkapWorldCup.vue`) dengan konten panjang dan mendalam.
  - **Cluster Content:** Halaman pendukung (`PanduanTVRIGratis.vue`) untuk memperkuat topik utama.
  - **Arsip Artikel:** Halaman indeks untuk semua artikel, berfungsi sebagai *internal link hub*.
- **Banner Sponsor:** Komponen banner yang dapat digunakan kembali dengan atribut `rel="sponsored"` untuk kepatuhan SEO.

## 🚀 Teknologi yang Digunakan

- **Framework:** [Vue.js 3](https://vuejs.org/) (Composition API)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [Vue Router](https://router.vuejs.org/)
- **Manajemen Meta Tag:** [@vueuse/head](https://vueuse.org/core/usehead/)
- **Sitemap Generation:** [vite-plugin-sitemap](https://github.com/jbaubree/vite-plugin-sitemap)

## 🛠️ Setup & Instalasi

1.  **Clone repository ini (jika sudah diunggah ke GitHub):**
    ```bash
    git clone [URL_REPOSITORY_ANDA]
    cd [NAMA_DIREKTORI]
    ```

2.  **Instal dependensi:**
    Pastikan Anda memiliki [Node.js](https://nodejs.org/) versi 16 ke atas. Jalankan perintah berikut di terminal:
    ```bash
    npm install
    ```

## ⚙️ Cara Menjalankan Proyek

1.  **Menjalankan Server Pengembangan (Development):**
    Perintah ini akan menjalankan aplikasi di `http://localhost:5173` dengan *Hot-Module Replacement* (HMR).
    ```bash
    npm run dev
    ```

2.  **Membuat Build untuk Produksi (Production):**
    Perintah ini akan membuat versi produksi dari aplikasi Anda di dalam direktori `dist/`. Direktori ini yang akan Anda unggah ke server hosting.
    ```bash
    npm run build
    ```

## 📈 Strategi SEO yang Diterapkan

Proyek ini tidak hanya dibuat untuk berfungsi, tetapi juga untuk **mendominasi SERP (Search Engine Results Pages)**. Berikut adalah strategi SEO teknis yang telah diimplementasikan:

- **Meta Tag Dinamis:** Setiap halaman memiliki `title` dan `meta description` yang unik dan relevan dengan kontennya, dengan *fallback* ke meta global.
- **Canonical Tag Otomatis:** Setiap halaman secara otomatis menghasilkan `<link rel="canonical">` untuk menghindari masalah duplikasi konten.
- **Skema JSON-LD Lengkap (Schema Markup):** Untuk mendapatkan *rich snippets* dan meningkatkan pemahaman Google terhadap konten:
  - **`Service` & `AggregateRating`:** Di Homepage untuk menampilkan bintang rating di hasil pencarian.
  - **`NewsArticle`:** Di setiap halaman artikel untuk kelayakan muncul di Google News dan Top Stories.
  - **`BreadcrumbList`:** Di semua halaman untuk menampilkan hierarki situs di hasil pencarian.
  - **`FAQPage`:** Di halaman panduan untuk memicu munculnya cuplikan FAQ.
  - **`HowTo`:** Di halaman panduan langkah-demi-langkah.
  - **`Organization`:** Untuk memperkuat sinyal E-A-T.
- **Sitemap Otomatis:** File `sitemap.xml` secara otomatis dibuat saat proses `build`, mencakup semua rute statis dan dinamis.
