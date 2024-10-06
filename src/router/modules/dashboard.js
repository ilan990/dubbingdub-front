// src/router/module/dashboard.js
export default [
    {
      path: '/dashboard',
      name: 'DashboardPage',
      component: () => import('@/views/Dashboard.vue'),
      meta: { requiresAuth: true }
    },


]   