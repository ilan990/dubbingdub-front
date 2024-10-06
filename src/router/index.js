// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

// Importez les routes de chaque module
import authRoutes from './modules/auth'
//import filmRoutes from './modules/films'
import dashboardRoutes from './modules/dashboard'
// Importez d'autres modules de routes ici

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/Home.vue')
  },
  ...authRoutes,
  //...filmRoutes,
  ...dashboardRoutes,
  // Ajoutez d'autres modules de routes ici
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    try {
      // Vérifier l'authentification avant d'accéder à une route protégée
      const isAuthenticated = await store.dispatch('auth/checkAuth')
      if (!isAuthenticated) {
        next({ name: 'LoginPage', query: { redirect: to.fullPath } })
      } else {
        next()
      }
    } catch (error) {
      console.error('Erreur lors de la vérification de l\'authentification:', error)
      next({ name: 'LoginPage', query: { redirect: to.fullPath } })
    }
  } else {
    next()
  }
})

export default router