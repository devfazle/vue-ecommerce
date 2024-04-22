import { createRouter, createWebHistory } from 'vue-router'
import AdminMainLayout from '@/admin-panel/views/MainLayout.vue'
import AdminDashboard from '@/admin-panel/views/Dashboard.vue'
import AdminForms from '@/admin-panel/views/Forms.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'home',
      component: AdminMainLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: AdminDashboard,
        },
        {
          path: 'forms',
          name: 'adminforms',
          component: AdminForms,
        }
      ],
    }
  ]
})

export default router
