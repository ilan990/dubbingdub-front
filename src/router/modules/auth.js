// src/router/modules/auth.js
import store from '@/store'
export default [
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('@/views/auth/Login.vue')
    },
    {
        path: '/logout',
        name: 'LogoutPage',
        component: () => import('@/views/auth/Logout.vue'),
        beforeEnter: (to, from, next) => {
          store.dispatch('auth/logout')
          next({ name: 'LoginPage' })
        }
      },
    
  ]