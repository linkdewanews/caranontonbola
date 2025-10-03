import { createRouter, createWebHistory } from 'vue-router'
import TheLayout from '../components/TheLayout.vue'
import Homepage from '../components/Homepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: TheLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Homepage
        },
        {
          path: 'piala-dunia-2026',
          name: 'piala-dunia-2026',
          component: () => import('../components/PialaDunia2026.vue')
        },
        {
          path: 'kualifikasi',
          name: 'kualifikasi',
          component: () => import('../components/Kualifikasi.vue')
        },
        {
          path: 'analisis',
          name: 'analisis',
          component: () => import('../components/Analisis.vue')
        },
        {
          path: '/artikel',
          name: 'artikel-index',
          component: () => import('../components/ArtikelIndex.vue')
        },
        {
          path: '/artikel/:slug',
          name: 'artikel-single',
          component: () => import('../components/SingleArticle.vue')
        },
        {
          path: '/panduan-lengkap-world-cup',
          name: 'panduan-lengkap',
          component: () => import('../components/PanduanLengkapWorldCup.vue')
        },
        {
          path: '/panduan-tvri',
          name: 'panduan-tvri',
          component: () => import('../components/PanduanTVRIGratis.vue')
        },
        {
          path: '/link-nonton-legal',
          name: 'link-nonton-legal',
          component: () => import('../components/LinkNontonLegal.vue')
        },
        {
          path: 'tentang-kami',
          name: 'tentang-kami',
          component: () => import('../components/TentangKami.vue')
        },
        {
          path: 'kontak',
          name: 'kontak',
          component: () => import('../components/Kontak.vue')
        },
        {
          path: 'kebijakan-privasi',
          name: 'kebijakan-privasi',
          component: () => import('../components/KebijakanPrivasi.vue')
        }
      ]
    }
  ]
})

export default router
