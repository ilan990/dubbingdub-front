// src/modules/auth.js
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
    // {
    //   path: '/register',
    //   name: 'Register',
    //   component: () => import('@/views/auth/Register.vue')
    // },
    // {
    //   path: '/forgot-password',
    //   name: 'ForgotPassword',
    //   component: () => import('@/views/auth/ForgotPassword.vue')
    // },
    // {
    //   path: '/reset-password',
    //   name: 'ResetPassword',
    //   component: () => import('@/views/auth/ResetPassword.vue')
    // }
  ]